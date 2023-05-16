//将所有的node以相同夫阶段进行分类进行分类
exports.classifyNodes = function (eageAll) {
  const calssifyNodesAll = [];
  while (eageAll.length > 0) {
    const m = eageAll[0].source;
    const n = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const s of eageAll) {
      if (s.source === m) {
        n.push(s.target);
        eageAll = eageAll.filter((element) => element !== s);
      }
    }
    calssifyNodesAll.push(n);
  }
  calssifyNodesAll.push(['1']);
  return calssifyNodesAll;
};
//根据分类以及每组的深度以及相应的value确定node节点的大小以及类别
// eslint-disable-next-line no-shadow
exports.cocutypeSize = function (nodeAll, classifyNodes, nodetype) {
  const All = [];
  let cocuJihe = [];
  const cocu = function (cocuJihe1) {
    const category = nodetype.shift();
    const minValue = Math.min(...cocuJihe1.map((node) => Number(node.value)));
    const maxValue = Math.max(...cocuJihe1.map((node) => Number(node.value)));
    // 根据范围计算每个节点的 symbolSize 值
    cocuJihe1.forEach((node) => {
      node.symbolSize = minValue + (maxValue - minValue) * 2 ** node.value;
      if (maxValue === 3) {
        node.symbolSize = 100;
      } else if (maxValue === 2) {
        node.symbolSize = 87;
      } else {
        node.symbolSize = node.symbolSize * 60 + 20;
      }
      node.category = category;
    });

    return cocuJihe1;
  };

  classifyNodes.forEach((s) => {
    cocuJihe = [];
    nodeAll.forEach((n) => {
      if (s.includes(n.id)) {
        cocuJihe.push(n);
      }
    });
    All.push(...cocu(cocuJihe));
  });
  return All;
};
//算出每组的深度
exports.cocugrouptype = function (nodeAll, classifyNodes1) {
  const typelist = [];
  const cocutypeFound = function (nodeAll1, node) {
    let deep = 0;
    let flag = 0;
    while (flag === 0) {
      flag = 1;
      // eslint-disable-next-line no-restricted-syntax
      for (const a of nodeAll1) {
        if (a.target === node) {
          node = a.source;
          deep += 1;
          flag = 0;
          break;
        }
      }
    }
    return deep;
  };
  classifyNodes1.forEach((class1) => {
    typelist.push(cocutypeFound(nodeAll, class1[0]));
  });
  return typelist;
};
