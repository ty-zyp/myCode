var events = require('events');
var eventEmitter = new events.EventEmitter();
// 监听器1
var listener1 = function listener1() {
  console.log('监听器 listener1执行');
}
// 监听器2
var listener2 = function listener2() {
  console.log('监听器 listener2执行');
}

// 监听器3
var listener3 = function listener3() {
  console.log('监听器 listener3执行');
}
// 绑定connection事件，处理函数listener1
eventEmitter.addListener('connection', listener1);

// 绑定connection事件，处理函数listener2
eventEmitter.on('connection', listener2);

// 绑定connection事件，处理函数listener3
eventEmitter.once('connection', listener3);

// 指定事件的监听器数量
var eventListteners = eventEmitter.listenerCount('connection');
console.log('监听连接事件connection的监听数量', eventListteners);

// 处理connection事件
eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1不再受监听');

eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');