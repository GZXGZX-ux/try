const { promisify } = require('util');
const pool = require('../db');
const Net = require('../utils/coculateNet');

exports.getone = (sqltable) => async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query(`SELECT *  FROM  ${sqltable}`);
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.getlearngraphy = () => async (req, res, next) => {
  try {
    const a = {
      1: '萧山临浦派出所',
      2: '萧山义桥派出所',
      3: '萧山党湾派出所',
      4: '萧山北干派出所',
      5: '萧山南阳派出所',
      6: '萧山城厢派出所',
      7: '萧山宁围派出所',
      8: '萧山市北派出所',
      9: '萧山戴村派出所',
      10: '萧山所前派出所',
      11: '萧山新塘派出所',
      12: '萧山新街派出所',
      13: '萧山楼塔派出所',
      14: '萧山河上派出所',
      15: '萧山浦阳派出所',
      16: '萧山瓜沥派出所',
      17: '萧山益农派出所',
      18: '萧山蜀山派出所',
      19: '萧山衙前派出所',
      20: '萧山进化派出所',
      21: '萧山闻堰派出所',
      22: '萧山靖江派出所',
      23: '钱江世纪城派出所',
    }; //1 对应的表是什么表
    const sql = a[req.params.id];
    const query = promisify(pool.query).bind(pool);
    // const eage = await query(`SELECT *  FROM  edge`);
    // const node = await query(`SELECT *  FROM  node`);
    const eage = await query(
      `SELECT *  FROM  edgs where edgs.受警单位名称='${sql}'`
    );
    const node = await query(
      `SELECT *  FROM  nodes where nodes.受警单位名称='${sql}'`
    );
    // eslint-disable-next-line no-const-assign
    node.map((nodethis) => {
      delete nodethis['受警单位名称'];
      delete nodethis.bh;
      delete nodethis.id;
      delete nodethis.gz;
      nodethis.id = nodethis['#'];
      nodethis.label = nodethis['值'];
      nodethis.value = nodethis['占比'];
      delete nodethis['#'];
      delete nodethis['值'];
      delete nodethis['占比'];
      return nodethis;
    });
    // eslint-disable-next-line no-const-assign

    const node1 = Net.classifyNodes(eage, node); //相同父节点分类的结果
    const nodetype = Net.cocugrouptype(eage, node1); //每组按照深度分类的结果
    Net.cocutypeSize(node, node1, nodetype);
    eage.map((eagethis) => {
      delete eagethis['受警单位名称'];
      eagethis.source = eagethis.source.toString();
      eagethis.target = eagethis.target.toString();
      return eagethis;
    });
    res.status(200).json({
      status: 'success',
      results: node.length + eage.length,
      data: { results: { node: node, eage: eage } },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
