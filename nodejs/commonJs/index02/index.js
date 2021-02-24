let player = process.argv[process.argv.length - 1]; // 取到当前用户输入的数据；[剪刀 1 石头 2 布 3]
const game = require('./game.js');

// let resultArr = game(player);
// console.log(resultArr[0], resultArr[1]);

// 进程处理
let count = 0;
process.stdin.on('data', e => {
  const playerAction = e.toString().trim(); // 获取控制台输入的内容
  // console.log(playerAction);
  let resultArr = game(playerAction);
  console.log(resultArr[0], resultArr[1]);
  let n = resultArr[0];
  if (n === 1) {
    count++;
  };
  if (count >= 3) {
    console.log('你太厉害了，我不玩了！');
    process.exit(); // 关闭进程
  }
})