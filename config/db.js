const mysql = require("mysql2");

// create connection pool (recommended)
const db = mysql.createPool({
  host: "localhost",     // or your DB host
  user: "root",          // default XAMPP user
  password: "",          // default XAMPP password is empty
  database: "school_db", // <-- make sure this matches your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
