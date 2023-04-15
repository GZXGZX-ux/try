const pool = require('./db');

exports.realtimeData = async (req, res, next) => {
  try {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query('SELECT * FROM ars', (error, results, fields) => {
        connection.release(); // 释放连接，归还给连接池
        if (error) throw error;
        // eslint-disable-next-line no-use-before-define
        processData(results);
      });
    });

    // eslint-disable-next-line no-inner-declarations
    function processData(results) {
      // 在这里处理 results
      console.log(results);
      res.status(200).json({
        status: 'success',
        results: results.length,
        data: { results },
      });
    }

    // res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
