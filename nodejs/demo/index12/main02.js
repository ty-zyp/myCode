var fs = require('fs');
var data = '黄山黄河长江长城，在我心中重千金，无论何时，无论何地';
// 创建一个可以写入的流，写入到文件input.txt中
var writerStream = fs.createWriteStream('input.txt');
// 使用utf8编码写入数据
writerStream.write(data, 'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件 finish error
writerStream.on('finish', function () {
  console.log('写入完成')
})
writerStream.on('error', (err) => {
  console.log(err.stack);
});
console.log('程序执行完毕')