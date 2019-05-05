const chalk = require('chalk');
const checkLocalServer = require('../utils/check_local_server');
const app = require('./app');


function load() {

    var AV = require('leanengine');

    AV.init({
        appId: process.env.LEANCLOUD_APP_ID,
        appKey: process.env.LEANCLOUD_APP_KEY,
        masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
    });

    // 如果不希望使用 masterKey 权限，可以将下面一行删除
    AV.Cloud.useMasterKey();

    // 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
    // LeanEngine 运行时会分配端口并赋值到该变量。
    var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000);



    app.listen(PORT, function (err) {
        const timer = setInterval(() => {
            if (process.env.PROGRESS_BAR_RUNNING == "false") {//只有进度条播放完才会进行以下声明
                clearInterval(timer);
                console.log(chalk.yellow.inverse(` SERVER READY `) + ' ' + 'Node app is running on', `${chalk.yellow('http://localhost:' + PORT)}`);
                for (var n = 0; n < 10; n++) {
                    checkLocalServer(8080 + n);//从端口8080开始轮询
                }
            }
        }, 0);
        // 注册全局未捕获异常处理器
        process.on('uncaughtException', function (err) {
            console.error('Caught exception:', err.stack);
        });
        process.on('unhandledRejection', function (reason, p) {
            console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack);
        });
    });
}

module.exports = load;