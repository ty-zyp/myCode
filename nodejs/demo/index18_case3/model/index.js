// 连接数据库文件
var mongoose = require('mongoose');
var stu = require('./stu.js');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', function (err) {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log('连接数据库成功');
});
exports.GEtStu = stu.getStu;
exports.GEtStuOne = stu.getStuOne;
exports.modifyStu = stu.modifyStu;
exports.deleteStu = stu.deleteStu;