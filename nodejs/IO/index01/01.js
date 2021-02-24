const glob = require('glob');

// 阻塞IO
// var result = null;
// console.time('glob');
// result = glob.sync(__dirname + '/**/*');// 获取当前文件夹下所有文件目录
// console.timeEnd('glob');
// console.log(result);

// 非阻塞IO
console.time('glob');
glob(__dirname + '/**/*',(err, res) => {
  result = res;
  console.log(result)
})
console.timeEnd('glob');
console.log(1 + 1);