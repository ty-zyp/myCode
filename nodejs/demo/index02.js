//引用模块
var http = require("http");
//创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){
//req 参数表示请求，res 表示响应
res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});//插入响应头
console.log("服务器接收到了请求" + req.url);
res.end(); // End 方法使 Web 服务器停止处理脚本并返回当前结果
});
//监听端口
server.listen(3001);