const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 1000);
});
let pm1 = promise.then((res) => {
  console.log(res);
});
let c = Promise.resolve(pm1);
console.log(c, "c");
console.log(pm1, "pm1");
