const { promisify } = require('util');
const pool = require('./db');

exports.realtimeData = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT * FROM ars');
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

exports.TrendOfTotalCasesPerDay = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `8各天报警案件趋势`');
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
