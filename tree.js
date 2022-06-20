const arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const tree = [];

arr.map((item, i) => {
  const ids = arr.map((item) => item.id);
  console.log(ids);
  if (ids.indexOf(item.pid) === -1) {
    tree.push({ ...item, children: [] });
  }
});

arr.map(() => {});

const appendNode = (obj, node) => {
  if (node.id === obj.pid) {
    node.children.push({ ...obj, children: [] });
  } else if (node.children && node.children.length > 0) {
    node.children.map((item) => {
      console.log(item, "item");
      appendNode(obj, item);
    });
  }
};

for (let i = 0; i < arr.length; i++) {
  appendNode(arr[i], tree[0]);
}

console.log(tree);

const arrayToTree = (arr) => {
  tree = [];
  const getChildren = (tree, pid) => {
    for (const item of arr) {
      if (item.pid === pid) {
        const newItem = { ...item, children: [] };
        tree.push(newItem);
        getChildren(newItem.children, newItem.id);
      }
    }
  };
  getChildren(tree, 0);
  return tree;
};

const res = arrayToTree(arr);
console.log(res, "res");

const arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];
const arrayToTreeMap = (items) => {
  let res = [];
  let map = {};

  for (const i of items) {
    map[i.id] = { ...i, children: [] };
  }

  for (const i of items) {
    const newItem = map[i.id];
    if (i.pid === 0) {
      res.push(newItem);
    } else {
      if (Object.prototype.hasOwnProperty.call(map, i.pid)) {
        map[i.pid].children.push(newItem);
      }
    }
  }
  return res;
};

const arrayToTreeMap2 = (items) => {
  const result = [];
  const itemMap = {};
  for (const item of items) {
    const id = item.id; //1 2 3 4 5
    const pid = item.pid; //0 1 2 3 4

    if (!itemMap[id]) {
      itemMap[id] = { children: [] };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };
    //itemMap = {
    //1: { id: 1, name: "部门1", pid: 0, children: [{ id: 2, name: "部门2", pid: 1, children: []}, { id: 3, name: "部门3", pid: 1, children: [] }]},
    //2: { id: 2, name: "部门2", pid: 1, children: [] },
    //3: { id: 3, name: "部门3", pid: 1, children: [] },
    //4: { id: 4, name: "部门4", pid: 3, children: [] },
    //5: { id: 5, name: "部门5", pid: 4, children: [] },
    //}

    const treeItem = itemMap[id];
    console.log(treeItem, "treeItem");
    //{ id: 1, name: "部门1", pid: 0, children: []}
    //{ id: 2, name: "部门2", pid: 1, children: []}
    if (pid === 0) {
      result.push(treeItem); //result = [{ id: 1, name: "部门1", pid: 0 ,children: []}]
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      // itemMap = {1: { id: 1, name: "部门1", pid: 0 ,children: []}}
      //itemMap = {
      //1: { id: 1, name: "部门1", pid: 0, children: [] },
      //2: { id: 2, name: "部门2", pid: 1, children: [] },
      //}
      itemMap[pid].children.push(treeItem);
      // itemMap = {1: { id: 1, name: "部门1", pid: 0 ,children: []}}
      //itemMap = {
      //1: { id: 1, name: "部门1", pid: 0, children: [{ id: 2, name: "部门2", pid: 1, children: []}, { id: 3, name: "部门3", pid: 1, children: [] }] },
      //2: { id: 2, name: "部门2", pid: 1, children: [] },
      //3: { id: 3, name: "部门3", pid: 1, children: [ { id: 4, name: "部门4", pid: 3, children: [] }] },
      //4: { id: 4, name: "部门4", pid: 3, children: [] },
      //}
      console.log(itemMap[pid], "ipid");
    }
    console.log(result, "result");
  }
  return result;
};
