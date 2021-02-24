const buf1 = Buffer.from('runoob', 'ascii');
console.log(buf1.toString('hex')); //输出 72756e6f6f62
console.log(buf1.toString('base64'));//输出 cnVub29i

// 创建一个长度为10，且用0填充的Buffer
const buf2 = Buffer.alloc(10);
console.log(buf2);

// 创建一个长度为10，且用0x1填充的Buffer
const buf3 = Buffer.alloc(10, 1);
console.log(buf3);

//创建一个长度为10，且未初始化的Buffer
// 这个方法比调用Buffer.alloc()更快
// 但返回的Buffer实例可能包含旧数据
// 因此使用fill()或write()重写
const buf4 = Buffer.allocUnsafe(10);
console.log(buf4);
let buf4_1 = buf4.fill(0);
console.log(buf4, buf4_1);

// 创建一个包含[0x1,0x2,0x3]的Buffer
const buf5 = Buffer.from([1, 2, 3]);
console.log(buf5);

// 创建一个包含UTF-8字节[0x74,0xc3,0xa9,0x73,0x74]的Buffer
const buf6 = Buffer.from('test');
console.log(buf6);

// 创建一个包含Latin-1字节[0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf7 = Buffer.from('test', 'latin1');
console.log(buf7);