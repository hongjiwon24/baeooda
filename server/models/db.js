// db.js 예시
const mysql = require('mysql2/promise');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Rhddbrhdfyd1979!!',
  database: 'baeooda_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
module.exports = db;
