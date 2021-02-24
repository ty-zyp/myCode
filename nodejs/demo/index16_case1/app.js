var express = require('express');// node第三方框架
var path = require('path');
var bodyparser = require('body-parser');// 引入第三方框架 用于处理post传过来的body参数
var app = express();// 实例化对象
// body传参必备
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false})) //body参数加密后解密
var stu = [
  {name:'www',age:20},
  {name:'rr',age:3},
  {name:'tt',age:40},
]
// 接口配置
// 路由传参
app.get('/e/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);//打印传递的参数
  if (id > 0 && id < stu.length) {
    var info = stu[id];
    res.status(200).json(info)
  } else {
    res.status(200).json({msg:'查无此人'})
  }

})
// 通用get请求post请求
app.all('/c', function (req, res) {
  res.send('这是数据')
})
// post请求
app.post('/b', function (req, res) {
  console.log('======', req.body);
  // res.status(200).send('这是get请求回来的数据:'+req.query.time) // 返回字符串
  var stu = {
    name: 'www',
    age: 20,
    time:req.body
  }
  // res.status(200).json(stu);// 返回对象
  res.status(200).json({code:'000000',msg:'成功',data:stu})
});
// get请求
app.get('/a', function (req, res) {
  console.log('======',req.query.time)//获取get请求传递的参数
  // res.status(200).send('这是get请求回来的数据:'+req.query.time) // 返回字符串
  var stu = {
    name: 'www',
    age: 20,
    time:req.query.time
  }
  // res.status(200).json(stu);// 返回对象
  res.status(200).json({code:'000000',msg:'成功',data:stu})
});



//默认访问的静态页面,自动读取www文件夹下的index.html文件
app.use(express.static(path.join(__dirname, 'www')));
// 在浏览器地址栏输入detail，则返回detail页面；http://localhost:4000/detail
app.use('/detail', function (req, res) {
  // 不写状态码就按照默认的来
  // res.status.sendFile(path.join(__dirname, 'www', 'detail.html'));
  // 指定状态码 304表示从缓存里读取，如果缓存里面没有，会报错
  res.status(304).sendFile(path.join(__dirname, 'www', 'detail.html'));
});
//如果上面页面都没有执行，到这里就会返回错误页面 *可省略不写
app.use('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'www', 'error', '404.html'));
});
app.listen('4000',function(err) {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log('服务器开启成功，端口号4000');
})