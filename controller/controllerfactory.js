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
    const a = { 1: '' }; //1 对应的表是什么表
    const sql = a[req.params.id];
    const query = promisify(pool.query).bind(pool);
    const node = await query(`SELECT *  FROM  ${sql}node`);
    const eage = await query(`SELECT *  FROM  ${sql}edge`);
    const node1 = Net.classifyNodes(eage); //相同父节点分类的结果
    const nodetype = Net.cocugrouptype(eage, node1); //每组按照深度分类的结果
    Net.cocutypeSize(node, node1, nodetype);
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
