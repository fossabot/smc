var net = require('net');
var axios = require('axios');
var CircularJSON = require('circular-json');
var fs = require('fs');
// 检测端口是否被占用
function portIsOccupied(port) {
    /*     // 创建服务并监听该端口
        var server = net.createServer().listen(port)
      
        server.on('listening', function () { // 执行这块代码说明端口未被占用
            server.close() // 关闭服务
            console.log('The port【' + port + '】 is available.') // 控制台输出信息
    
    
        })
    
        server.on('error', function (err) {
            if (err.code === 'EADDRINUSE') { // 端口已经被使用
                console.log('The port【' + port + '】 is occupied, please change other port.')
            }
        }) */

    axios.get(`http://localhost:${port}`, {
        params: {

        }
    })
        .then(function (response) {
            console.log(response.headers.etag);
            fs.writeFileSync(__dirname + '/data.json', CircularJSON.stringify(response, null, '\t'));
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = portIsOccupied