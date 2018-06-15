/**
App.js
ToDo RestFul API
Made by Krasimir Marinov
*/
'use strict';

// Importing modules
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/taskModel'); // Loading task model
const User = require('./models/userModel');
const bodyParser = require('body-parser');

const app = express(); // Instanciating the app
const port = process.env.PORT || 3000; // Choosing the port

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

const routes = require('./routes/routes'); //importing route
routes(app); //Register the routes

// Handling wrong routes
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// App is listening now
app.listen(port);

console.log('RESTful API started on port: ' + port);