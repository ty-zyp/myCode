var path = require('path');
console.log(__dirname);// 获取当前文件所在路径 物理路径
console.log(__filename);// 获取当前文件所在路径 物理路径
var a = path.join('www', '/err', '404.html');
console.log(a)