var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
// const { response } = require('express');
var model = require('./model/index');
// body传参必备

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false})) //body参数加密后解密
app.use(express.static(path.join(__dirname, 'www'))); //默认静态路径
// 接口
app.get('/api/stu/list', function (req, res) {
  model.GEtStu({}, function (list) {
    res.status(200).json({ code: '000000', msg: '成功', data: list});
  })
});
// app.get('/api/stu/info', function (req, res) {
//   console.log(req.query.name)  // 获取get请求入参
//   model.GEtStuOne({ name: req.query.name }, function (list) {
//     res.status(200).json({ code: '000000', msg: '成功', data: list });
//   })
// });
// post请求
app.post('/api/stu/info', function (req, res) {
  console.log('======', req.body);// 获取post请求入参
  model.GEtStuOne(req.body, function (list) {
    res.status(200).json({ code: '000000', msg: '成功', data: list });
  })
});
// post请求
app.post('/api/stu/modify', function (req, res) {
  console.log('======', req.body);// 获取post请求入参
  model.modifyStu(req.body, function (list) {
    res.status(200).json({ code: '000000', msg: '成功', data: list });
  })
});
app.post('/api/stu/delete', function (req, res) {
  console.log('======', req.body);// 获取post请求入参
  model.deleteStu(req.body, function (list) {
    res.status(200).json({ code: '000000', msg: '成功', data: list });
  })
});
app.use("*", function (req,res) {
  var url = path.join(__dirname, 'www', '404.html');
  res.status(200).sendFile(url);
})
app.listen(3000, function (err) {
  if (err) {
    console.log('启动服务器失败');
    throw err;
  }
  console.log('服务器开启成功！')
});