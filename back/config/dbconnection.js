const mysql = require('mysql2');

const config = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'president',
}
const pool = mysql.createPool(config);


let getConnection = function (callback) {
  pool.getConnection((error, connection) => {
    callback(error, connection);
    connection.release();
  })
}


module.exports = getConnection;