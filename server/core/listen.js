module.exports = () => {
    const chalk = require('chalk');
    const path = require('path');
    const checkLocalServer = require(path.resolve('server/utils/check_local_server'));
    const app = require('./app');
    const AV = require('./load_leancloud');//加载leancloud
    var net = require('net');

    // 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
    // LeanEngine 运行时会分配端口并赋值到该变量。




    var devPort = require(path.resolve('api/config/api.config.js')).dev.port;

    var PORT = parseInt(process.env.LEANCLOUD_APP_ENV == "development" ? devPort : (process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000));

    testPort(PORT);

    function testPort(port) {

        // 创建服务并监听该端口
        var server = net.createServer().listen(port)

        server.on('listening', function () { // 执行这块代码说明端口未被占用
            server.close() // 关闭服务
            console.log('The port【' + port + '】 is available.') // 控制台输出信息
            listen(port);
        })

        server.on('error', function (err) {
            if (err.code === 'EADDRINUSE') { // 端口已经被使用
                console.log('The port【' + port + '】 is occupied, please change other port.')
                testPort(port + 1)
            }
        })
    }




    function listen(PORT) {

        app.listen(PORT, function (err) {
            const timer = setInterval(() => {
                // if (process.env.PROGRESS_BAR_RUNNING == "false") {//只有进度条播放完才会进行以下声明
                    clearInterval(timer);
                    console.log(chalk.yellow.inverse(` SERVER READY `) + ' ' + 'Node app is running on', `${chalk.yellow('http://localhost:' + PORT)}`);
                    for (var n = 0; n < 10; n++) {
                        checkLocalServer(8080 + n);//从端口8080开始轮询
                    }
                // }
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











};