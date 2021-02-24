var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", function (err) {
  if (err) {
    console.log("连接数据库失败");
    throw err;
  }
  console.log('连接数据库成功');
});
// 模型
var stuTable = new mongoose.Schema({
  name: String,
  age: Number,
  salary: Number
});
// 关联
var stuinfo = mongoose.model('ty01', stuTable);//model三个参数， 模型对象，表名，如果只传2个参数，则表名为第一个参数加上s

// 查找数据 find第一个参数表示查询条件 第一个参数为空表示查询所有的
stuinfo.find({}, function (err, list) {
  console.log('----',list);
})
// stuinfo.find({age:31}, function (err, list) {
//   console.log('----',list);
// })
// 更改 加入第三个参数{multi:true}表示符合条件的都改,不加这个参数表示只改第一个符合条件的数据
// upsert:true表示查询条件不存在，就添加一条新纪录
// stuinfo.update({ name: 'tom1' }, { $set: { age: 49 } },{multi:true,upsert:true}, function (err) {
//   if (err) {
//     console.log('修改失败');
//     throw err;
//   };
//   console.log('修改成功')
// });
// 移除 第一个是删除条件,会删除所有满足条件的，给{}表示全部删除
// stuinfo.remove({ name: 'zzz' }, function (err) {
//   if (err) {
//     console.log("删除失败");
//     throw err;
//   }
//   console.log("删除成功")
// });
// 插入数据到数据库
// stuinfo.create({ name: 'ty', age: 31,salary:12000 }, function (err) {
//   if (err) {
//     console.log("创建失败");
//     throw err;
//   }
//   console.log("创建成功")
// })