const glob = require("glob");

var result = null;
console.time("glob");
result = glob.sync(__dirname + "/**/*");
console.timeEnd("glob");
console.log(result);

glob(__dirname + "/**/*", (res) => {
  console.timeEnd("glob");
  console.log(res);
});
