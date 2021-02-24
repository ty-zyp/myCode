const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6]);
console.log(buf);//<Buffer 01 02 03 04 05 06>
const json = JSON.stringify(buf);
console.log(json, buf.toJSON().data);//{"type":"Buffer","data":[1,2,3,4,5,6]}  [ 1, 2, 3, 4, 5, 6 ]

const copy = JSON.parse(json, (key, value) => {
  console.log(key,value) // 0 1
  return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);//<Buffer 01 02 03 04 05 06>