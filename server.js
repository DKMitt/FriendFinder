var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// stores the server
var app = express();

// pulls in the routes page
require('./app/routing/htmlRoutes.js')(app);


// starts and listens to the server and port
app.listen(3000, function() {
	console.log("Listening on port 3000");
});