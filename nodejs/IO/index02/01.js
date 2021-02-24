// 异步流程控制库
// npm async.js
// thunk


// 回调函数的回调地狱
interview(function (res) {
  if (res instanceof Error) {
    return console.log('cry 1st');
  }
  interview(function (res) {
    if (res instanceof Error) {
      return console.log('cry 2st');
    }
    interview(function (res) {
      if (res instanceof Error) {
        return console.log('cry 3st');
      }
      console.log('smail');
      })
    })
  })

function interview(callback) {
  setTimeout(() => {
    if (Math.random() >= 0.3) {
      callback(null,'success');
    } else {
      callback(new Error('fail'));
    }
   
  }, 500);
}