var fs = require('fs'); 

// 读取对应文件内容
// var data = fs.readFileSync('input.txt');
var data = fs.readFileSync('a.json');
console.log(1,typeof data, data);// data为Buffer格式的数据对象
const buf = Buffer.from(data, 'utf-8');
console.log(2, typeof data, JSON.parse(buf.toString()));// 读取json文件里的数据转化为对象


fs.readFile('input.txt', function (err, data) {
  if (err) return console.log(err);
  console.log('非阻塞读取：'+data.toString());
})
console.log('阻塞读取：'+data.toString());
console.log('执行程序结束');