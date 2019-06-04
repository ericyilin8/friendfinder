// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//express().use(express....)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiroutes.js")(app, fs, path);
require("./htmlroutes.js")(app, path);







// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
