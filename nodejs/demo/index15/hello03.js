var fs = require('fs');
// 1、写文件
// // 1.1同步写文件
// console.log(1);
// var res = fs.writeFileSync('./t1.txt', '第一行文字');//没有找到文件就会创建一个文件
// console.log(res);
// console.log(2)

// // 1.2异步写文件
// console.log(3);
// fs.writeFile('./t1.txt', 'hello world', 'utf8', function (err) {// 写入的时候会清空原有内容
//   console.log('-', err);
//   if (err) {
//     console.log('写入失败')
//     throw (err);
//   }
//   console.log('写入成功')
// })
// console.log(4)

// 2、读
// 2.1同步读取
// var data = fs.readFileSync('./t1.txt', 'utf8');
// console.log(data);
// 2.2异步读取
// fs.readFile('./t1.txt','utf8', function (err, data) {
//   if (err) {
//     console.log('读取出错');
//     throw err;
//   }
//   // console.log(data.toString())//读取内容转换
//   console.log(data)//读取内容转换
// })

// 3、文件是否存在
// var res = fs.existsSync('./t2.txt');
// console.log(res)
// fs.exists('./t2.txt', function (res) {
//   console.log(res);
// })

// 4、文件追加
// 4.1异步
// var res = fs.appendFileSync('./t2.txt', '\n日志文件'+new Date(), 'utf8');//没有找到文件就会创建新文件  \n:回车换行
// // 4.2同步
// fs.appendFile('./t1.txt', '\n这是异步数据 ' + new Date(), function (err) {
//   if (err) {
//     console.log('追加失败');
//     throw err;
//   };
//   console.log('追加成功！');
// });

// 5、监听文件
fs.watchFile('./t1.txt', function (a, b) {
  console.log('---1--:'+JSON.stringify(a), '---2--:'+JSON.stringify(b));// size有改变
})