console.log("hello jkb");

exports.hello = "world";

exports.add = function (a, b) {
  return a + b;
};

exports.obj = {
  hello: "world",
};

module.exports = function minus(a, b) {
  return a - b;
};

setTimeout(() => {
  console.log(exports);
}, 2000);
