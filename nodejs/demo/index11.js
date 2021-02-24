// 1、
// var buf1 = Buffer.from('菜鸟教程');
// var buf2 = Buffer.from('www.runoob.com');
// var buf3 = Buffer.concat([buf1, buf2]);
// console.log("buf3内容：", buf3.toString());

// 2、
// var buf1 = Buffer.from('ABCD');
// var buf2 = Buffer.from('ABCD');
// var result = buf1.compare(buf2);

// if (result < 0) {
//   console.log(buf1 + '在' + buf2 + '之前');//ABC在ABCD之前
// } else if (result == 0) {
//   console.log(buf1 + '与' + buf2 + '相同');//ABCD在ABCD之后
// } else {
//   console.log(buf1 + '在' + buf2 + '之后');//ABCDE在ABCD之后
// }

// 3、
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('RUNOOB');
// buf2.copy(buf1, 2);// 将buf2插入到buf1指定位置上
// console.log(buf1.toString());//abRUNOOBijkl

// 4
var buf1 = Buffer.from('runoob');
var buf2 = buf1.slice(0, 2);
console.log(buf2.toString());// ru  裁剪 前包后不包