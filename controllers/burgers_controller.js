// Import express
var express = require("express");

// Create the `router` for the app, and export the `router` at the end of your file
var router = express.Router();

// Import the model (burger.js)
var burger = require ("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(burgerData) {
    //console.log(burgerData)
    res.render("index", {burgerData});
  });
});

  router.put("burgers/update/", function(req, res) {
    burger.new(req.body.burgerID, function(results) {
      res.redirect("/");
      // console.log(results);
    });
  });

  router.post("burgers/create", function(req, res) {
    burger.devour(req.body.burgerName, function(results) {
      res.redirect("/");
      // console.log(results);
    });
  });

// Export routes for server.js to use.
module.exports = router;
