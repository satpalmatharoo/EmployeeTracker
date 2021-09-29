// get the client
const mysql = require('mysql2');
const config = require('./config');

// create the connection to database
const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

// simple query
connection.query(
  'SELECT * FROM dept',
  function(err, results) {
    console.log(results); // results contains rows returned by server
  }
);