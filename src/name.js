class Demo {
  name = "123";
  foo = (a) => {
    console.log(a);
  };
  fun(b) {
    console.log(b);
  }
}

class ChildDemo extends Demo {
  name = "123aaa";
  foo = (abc) => {
    console.log(111);
  };

  fun(b) {}
}

const name = new ChildDemo();
