// hello.js 就是一个模块，通过 module.exports = hello 导出
const hello = (...args) => console.log('hello ', ...args)

module.exports = hello;
