// Import express
var express = require("express");

// Create the `router` for the app, and export the `router` at the end of your file
var router = express.Router();

// Import the model (burger.js)
var burger = require ("../models/burger.js");

// Create the routes & logic
/////////////////////////
/////////////////////////
/////////////////////////

// Export routes for server.js to use.
module.exports = router;
