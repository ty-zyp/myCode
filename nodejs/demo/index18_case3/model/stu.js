var mongoose = require('mongoose');
// 模型
var stuInfo = new mongoose.Schema({
  name: String,
  age: Number,
  mytime: Date,
  id:String
});
// 功能：获取所有学生
// 参数：con--查询条件，callback--返回参数
// 返回值：返回所有学生

// 关联的数据库表
var stuS = mongoose.model('stu', stuInfo, 'stu');

exports.getStu = function (con, callback) {
  stuS.find(con, function (err, data) {
    console.log('数据：', data);
    callback(data);
  });
};
exports.getStuOne = function (con, callback) {
  stuS.findOne(con, function (err, data) {
    if (err) {
      callback('no');
    } else {
      callback(data);
    }
  })
};
exports.modifyStu = function (con, callback) {
  console.log(con);
  stuS.update({ id: con.id }, { $set: con }, {multi:true,upsert:true}, function (err, data) {
    console.log('update数据：',con,err)
    if (err) {
      callback('修改失败');
    } else {
      callback('修改成功');
    }
  })
}
exports.deleteStu = function (con, callback) {
  stuS.remove({ id: con.id }, function (err, data) {
    if (err) {
      callback('删除失败');
    } else {
      callback('删除成功！');
    }
  })
}