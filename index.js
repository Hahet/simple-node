// 通过 require 引入模块
const hello = require('./hello');
// require 的时候会去  node_modules中找 argv 模块
var argv = require('argv');

var args = argv.option({
  name: 'option',
  short: 'o',
  type: 'string',
}).run();

console.log(111)
// 使用 hello 模块
hello('world')

console.log(args)