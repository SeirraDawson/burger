// MySQL connection
var mysql = require("mysql");
require("dotenv").config({path: "../.env"});

var connection = mysql.createConnection({
  port:3306,
  host: "localhost",
  user:"root",
  password: process.env.password,
  database: "burger_db"
});

// Connect to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("MySQL error connection: " + err.stack + "\n\n");
    return;
  }
  console.log("MySQL database connected as id: " + connection.threadId + "\n\n");
});

// Export connection for ORM to use
module.exports = connection;