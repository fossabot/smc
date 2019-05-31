console.log('\n');

const AV = require('leanengine');
const path = require('path');
const apiConfig = require(path.resolve('config/api.config'));
const groupMembers = apiConfig.groupMembers;
const dayjs = require('dayjs');
const axios = require('axios');


const me = (_ => {
    for (let i in groupMembers) {
        if (groupMembers[i].app_id == process.env.LC_APP_ID && groupMembers[i].app_key == process.env.LC_APP_KEY) {
            return i
        }
    }
})();

const you = opposite(me);


function awake(who) {//day or night
    const start = time(groupMembers[who].start);
    const end = time(groupMembers[who].end)

    function time(t) {
        t = t.toString();
        let colonArr = t.match(/:/g);
        let l = colonArr ? colonArr.length : 0;
        let ct = t.replace(/[^\d:]/g, '');//清除多余的符号和空格
        for (let i = l; i < 2; i++) {
            ct = ct + ':00';
        }
        let d = dayjs();
        ct = `YYYY-MM-DD ${ct}`;
        if (t.includes('+')) {//后一天
            d = d.add(1, 'day');
        } else if (t.includes('-')) {//前一天
            d = d.subtract(1, 'day');
        }
        return dayjs(d.format(ct))
    }
    if (dayjs().isAfter(start) && dayjs().isBefore(end)) {
        return true
    } else {
        return false
    }
}

function opposite(me) {
    return me == "DAY" ? "NIGHT" : "DAY";
}



function send(id, commandArray, objectArray) {
    return new Promise((resolve, reject) => {
        let url,
            funcName = 'load',
            eight = id.substring(0, 8).toLowerCase();

        if (process.env.LEANCLOUD_APP_ENV == 'development') {//开发模式下进行本地请求
            let devPort = groupMembers[you].devPort;
            url = `http://localhost:${devPort}/1.1/functions/${funcName}`;
        } else {//生产环境进行远程请求
            url = `https://${eight}.engine.lncld.net/1.1/functions/${funcName}`;

        }
        axios({
            url,
            method: 'POST',
            headers: {
                'X-LC-Id': groupMembers[you].app_id,
                'X-LC-Key': groupMembers[you].app_key
            },
            data: commandArray,
        })
            .then(async (response) => {

                let count = 0;
                await Promise.all(response.data.result.map(async (currentValue, index) => {
                    if (!currentValue.code) {
                        console.log('此项同步成功');
                        let obj = await objectArray[index - count].destroy()
                            .catch(error => {
                                console.log('删除失败');
                            });
                        if (obj) {
                            console.log('删除成功');
                            objectArray.splice(index, 1);//删除objectArray中已经成功同步的一项
                            commandArray.splice(index, 1);//删除commandArray中已经成功同步的一项
                            count++;
                        }
                    } else {
                        console.log('此项同步失败');
                    }
                }));
                if (commandArray.length > 0 || objectArray.length > 0) {
                    send(id, commandArray, objectArray)//重新发送之前同步失败的项目;
                }
            })
            .catch(function (error) {
                console.log('发送失败,正准备重试');
                setTimeout(() => {
                    send(id, commandArray, objectArray)//五秒后重新发送
                }, 5000);
                reject(error);
            });
    })
}


function setHook(hookName, className) {

    const action = hookName.replace(/before|after/g, '').toLowerCase();

    // console.log({ action });

    AV.Cloud[hookName](className, function (request) {
        const real_id = request.object.id;
        const real_createdAt = request.object.createdAt;
        const real_updatedAt = request.object.updatedAt;

        request.object.set('real_id', real_id);
        request.object.set('real_createdAt', real_createdAt);
        request.object.set('real_updatedAt', real_updatedAt);


        let attributes = request.object.attributes;

        let payload = {
            className,
            action,
            attributes
        }

        switch (hookName) {
            case 'afterSave', 'afterDelete', 'afterUpdate':

                if (awake(you)) {//如果对方醒着的话
                    console.log('对方醒着');
                    send(groupMembers[you].app_id, payload);
                } else {
                    console.log('对方沉睡中');
                    setToSync(payload).then(object => {

                    })

                }
                break;
        }
        return request.object.save().then(function (user) {
            console.log(`ok!已经更新 ${className}`, user);
        });
    });
    console.log(`Set class ${className} ${hookName} hook already`);
}

function setToSync(payload) {
    return new Promise((resolve, reject) => {
        // 声明类型
        const ToSync = AV.Object.extend('ToSync');
        // 新建对象

        const toSync = new ToSync();

        toSync.set(payload);

        toSync.save().then(function (sync) {
            resolve(sync);
        }, function (error) {
            reject(error);
        });
    });
}

function getToSync() {
    return new Promise((resolve, reject) => {
        const query = new AV.Query('ToSync');
        query.ascending('createdAt');// 按时间，升序排列
        query.limit(1000);
        query.find().then(async (results) => {
            let objectArray = [];
            let commandArray = await Promise.all(
                results.map(async e => {
                    let object = await query.get(e.id);// 成功获得实例
                    objectArray.push(object);
                    for (let i of ['id', 'createdAt', 'updatedAt']) {
                        if (!object[`real_${i}`]) {//不存在 real_ 开头的三个参数(id, createdAt, updatedAt)才创建
                            object.set(`real_${i}`, object[i])
                        }
                    }
                    return object.toJSON();
                })
            );
            send(groupMembers[you].app_id, commandArray, objectArray);
        });
    })
}

function getAllClasses() {
    return new Promise((resolve, reject) => {
        axios({
            url: `https://leancloud.cn/1.1/data/${process.env.LC_APP_ID}/classes`,
            method: 'GET',
            headers: {
                'Cookie': process.env.lcCookie,
                'X-XSRF-TOKEN': process.env.xsrfToken,
            },
        }).then(response => {
            const allClassDetails = response.data;
            const allClassNames = allClassDetails
                .map(item => item.name)
                .filter(item => item !== 'ToSync');//过滤掉 ToSync 这个 Class
            resolve(allClassNames);
        }).catch(error => reject(error));
    });
}

void async function () {
    const allClassNames = await getAllClasses();
    console.log(allClassNames);



    allClassNames.forEach(element => {
        setHook('afterSave', element);
    });


    /* 以下为测试代码 */
    setTimeout(() => {
        if (me == 'DAY') {

            getToSync();

            /*  send(groupMembers[you].app_id, [
                 { action: 'save', className: 'Comments', attributes: { aaa: 1111, bbb: 2222 } },
             ]); */
            /*         send(groupMembers[you].app_id,
                        [
                            { action: 'delete', className: 'Comments', real_id: '5ceebc607b968a007688b123' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc60ba39c80068a1e45f' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc5f43e78c006737bc27' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc5fc8959c0069006808' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc5f43e78c006737bc24' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc5e30863b006863427a' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc5ec8959c0069006805' },
                            { action: 'delete', className: 'Comments', real_id: '5ceebc5dc8959c0069006801' }
                        ]
                    ).then(resp => {
                        console.log(resp);
                    }).catch(error => console.log(error));
             */
            /* setToSync({
                className: 'Comments',
                action: 'save',
                attributes: { aaa: '3333333333' }
            });
            setToSync({
                className: 'Comments',
                action: 'save',
                attributes: { aaa: '2222222222' }
            });
            setToSync({
                className: 'Comments',
                action: 'save',
                attributes: { aaa: '1111111111' }
            }); */
        }
    }, 1000);
    /* 以上为测试代码 */


}();







console.log('\n');