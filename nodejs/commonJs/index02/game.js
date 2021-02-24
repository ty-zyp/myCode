module.exports = function (player) {
  let obj1 = {
    1: '剪刀',
    2: '石头',
    3: '布'
  };
  let obj2 = {
    '剪刀': 1,
    '石头': 2,
    '布': 3
  };
  let random = Math.ceil(Math.random() * 3);
  function result(player, computer, obj1) {
    if (!player) {
      return '输入不正确，请输入石头或剪刀或布'
    } else if (player === computer) {
      return [0, `平局，请继续出招,你【${obj1[player]}】, 电脑【${obj1[computer]}】`];
    } else if (player === 3 && computer === 1) {
      return [-1, `你输了,你【${obj1[player]}】, 电脑【${obj1[computer]}】`];
    } else if (player === 1 && computer === 3) {
      return [1, `你赢了,你【${obj1[player]}】, 电脑【${obj1[computer]}】`];
    } else if (player > computer) {
      return [1, `你赢了,你【${obj1[player]}】, 电脑【${obj1[computer]}】`];
    } else {
      return [-1, `你输了,你【${obj1[player]}】, 电脑【${obj1[computer]}】`];
    }
  }
  // 打印结果
  return result(obj2[player], random, obj1);//用户，电脑, 对象
}
