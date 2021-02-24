console.log('hello world');
exports.hello = "world"
setTimeout(() => {
  console.log('---',exports)
}, 2000);