// Methods you will need to use in order to retrieve and store data in your database.
var connection = require("./connection.js");

// The ORM object to perform SQL queries (with method)
var orm = {
  // Function that returns all table entries
  selectAll: function(table, callback) {
    connection.query("SELECT * FROM " + table + ";", function (err, result){
      if(err) throw err;
      // Return results in callback
      callback(result);
    });
  },
  // Function that insert a single table entry
  insertOne: function(table, value, callback) {
    connection.query("INSERT INTO " + table + "(burgerName) VALUES ('"+ value +"');", function(err, result) {
      if(err) throw err;
    // Return results in callback
      callback(result);
    });
  },
  // Function that updates a single table entry
  updateOne: function(table, condition, callback) {
    connection.query("UPDATE " + table + "SET devour=true WHERE id=" + condition
      + ";", function (err, result){
        if(err) throw err;
    // Return results in callback
      callback(result);
    });
  }

};

// Export the ORM object to be used in other modules
module.exports = orm;