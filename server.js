var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv").config();

var port = process.env.PORT || 3000
var app = express();

// Use static content for the app from the "public" directory
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({extended:false}));

// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import route and let the server access them
var routes = require("./controllers/burgers_controller");
app.use("/", routes);

app.listen(port);

module.exports = dotenv;