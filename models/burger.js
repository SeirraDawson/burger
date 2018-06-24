// Import the ORM to create functions that will interact with the database.
var orm = ("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  new: function(id, callback) {
    orm.insertOne("burgers", id, callback, function(res) {
      callback(res);
    });
},
  devour: function(name, callback) {
    orm.updateOne("burgers", name, callback, function(res) {
      callback(res);
    });
  }
};

//Export the database functions for the controller
module.exports = burger;