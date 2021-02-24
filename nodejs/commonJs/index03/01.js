// 观察者模式事件
const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter{
  constructor() {
    super();
    setInterval(() => {
      抛出newlesson事件和参数
      this.emit('newlesson', { price: Math.random()* 100 } );
    }, 3000);
  }
};

const geektime = new Geektime();
每3秒触发一次newlesson事件并欢呼
geektime.addListener('newlesson', (res) => {
  console.log('year!', res); // res为newlesson事件抛出的参数
})