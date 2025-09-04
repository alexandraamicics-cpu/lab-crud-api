const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // ⚠️ your MySQL username
  password: '',        // ⚠️ your MySQL password (set this if you have one)
  database: 'school_db' // ✅ make sure this matches the DB you just created
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

module.exports = db;
