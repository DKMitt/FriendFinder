var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var http = require("http");

// stores the server
var app = express();

// Here we define a port to listen to
var PORT = 3000;

// pulls in the routes page
require('./app/routing/htmlRoutes.js')(app);


// starts and listens to the server and port
app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
});