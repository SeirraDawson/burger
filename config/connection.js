// MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port:3306,
  host: "localhost",
  user:"root",
  password: process.env.password,
  database: "burger_db"
});

// Connect
connection.connect(function(err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;