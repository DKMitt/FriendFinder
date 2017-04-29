var path = require("path");

module.exports = function(app){

	// creates the route - verify route setting to pull file.
	app.get("/survey", function(require, response) { 
		response.sendFile(path.join(__dirname + '../survey.html'));
	});

	app.use("*", function(require, response) { 
		response.sendFile(path.join(__dirname + '/home.html'));
	});

};