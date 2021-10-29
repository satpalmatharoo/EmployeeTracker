// get the client
const mysql = require('mysql2');
const cTable = require('console.table');

const config = require('./config');

// create the connection to database
const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});




const buildMenu = () => {
  // write inqurier questions
  // view all dept, etc
}

const viewAllDept = () => {
  connection.query(
    'SELECT * FROM dept',
    function(err, results) {
      const table = cTable.getTable(results);
      console.log(table);
      buildMenu();
    }
  );
}
