// var hello = require('./main01.js');
// console.log(hello.world());


var Hello = require('./main01');
var hello = new Hello();
hello.setName('tyzyp');
hello.sayHello();