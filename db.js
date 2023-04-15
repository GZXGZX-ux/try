const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});
const config = {
  connectionLimit: 10,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.SERVER,
  database: process.env.DATABASE,
};

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
  connection.release();
});

module.exports = pool;
