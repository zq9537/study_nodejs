let vm = require("vm");

// let name = "fdf"
// let str = "console.log(name)";
// runInThisContext: 提供一个安全的环境执行字符串中的代码 不能访问本地的变量，但是可以访问全局变量
//
// vm.runInThisContext(str);


// global.name = "ll";
// let str = "console.log(name)";
//
// vm.runInThisContext(str);

// runInNewContext: 提供一个安全的环境执行字符串中的代码 不能访问本地的变量，也不能访问全局变量
global.name = "ll";
let str = "console.log(name)";
vm.runInNewContext(str);