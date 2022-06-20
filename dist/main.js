(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./src/lib.js": (module, exports, fun) => {
      console.log(fun, "fun");
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

      /***/
    },
  };
  /************************************************************************/
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }
  //如果有缓存取缓存，没有缓存则新建一个对象，通过__webpack_modules__[moduleId]方法添加数据，方法，然后返回module.exports

  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    console.log("begin");
    var lib = __webpack_require__("./src/lib.js");
    console.log(lib);
    console.log("end");

    lib.adddtional = "test";
  })();
  //IIFE不影响外侧函数
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxhQUFhOztBQUViLFdBQVc7QUFDWDtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztVQ2xCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkE7QUFDQSxVQUFVLG1CQUFPLENBQUMsMkJBQU87QUFDekI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVzdC8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGUtdGVzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvIGprYlwiKTtcblxuZXhwb3J0cy5oZWxsbyA9IFwid29ybGRcIjtcblxuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59O1xuXG5leHBvcnRzLm9iaiA9IHtcbiAgaGVsbG86IFwid29ybGRcIixcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWludXMoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59O1xuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY29uc29sZS5sb2coZXhwb3J0cyk7XG59LCAyMDAwKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zb2xlLmxvZyhcImJlZ2luXCIpO1xudmFyIGxpYiA9IHJlcXVpcmUoXCIuL2xpYlwiKTtcbmNvbnNvbGUubG9nKGxpYik7XG5jb25zb2xlLmxvZyhcImVuZFwiKTtcblxubGliLmFkZGR0aW9uYWwgPSBcInRlc3RcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
