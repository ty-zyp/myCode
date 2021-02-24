var http = require('http');
var fs = require('fs');
var path = require('path');

// 创建客户端请求服务器，返回页面
var myServer = http.createServer(function (req,res) {
  let url = req.url === '/' ? `./index.html` : `${req.url}`;
  let mypath = path.join('view', url);
  console.log(mypath,fs.existsSync(mypath));
  let htmlUrl;
  if (fs.existsSync(mypath)) {
    htmlUrl = fs.readFileSync(mypath, 'utf8');
  } else {
    htmlUrl = fs.readFileSync(path.join('.','view','error.html'), 'utf8');
  }
  res.write(htmlUrl);// 往客户端写东西
  res.end(); //结束服务器
})
// 监听端口号 端口号指的计算机里的应用程序
myServer.listen('3000', function (err) {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log('服务器已经开启，端口号3000')
})