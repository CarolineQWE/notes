const os = require("os");

// console.log(os, "os");

const res = os.arch();
console.log(res, "res");

console.log(os.cpus());

//internalBinding 调用v8层面的一些方法 c++

//大概是分别过于痛苦，才愿意在痛苦中沉溺
// 真心可遇不可求
