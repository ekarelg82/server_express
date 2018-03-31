var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://DBlions:Bradva0427@ds135983.mlab.com:35983/lions');

var lionRouter = require('./lions');

// Global Middleware
app.use(morgan('dev'));
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mount the routes
app.use('/lions', lionRouter);

app.use((err, req, res, next) => {
	if (err) {
		res.status(500).send(err);
	}
});

module.exports = app;