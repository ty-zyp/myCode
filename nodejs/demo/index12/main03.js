// var fs = require('fs');
// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('output.txt');
// readerStream.pipe(writerStream);
// console.log('程序执行完毕');

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");