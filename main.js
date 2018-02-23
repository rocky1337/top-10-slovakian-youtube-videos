"use strict";

let express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("resources"));

app.get("/", function(req, res) {

	res.render("page");

});

app.listen(3000, function() {
	console.log("Listening on port 3000");

});

module.exports = app;