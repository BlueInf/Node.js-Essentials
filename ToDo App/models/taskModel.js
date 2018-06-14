/**
taskModel.js
ToDo RestFul API
Made by Krasimir Marinov
*/

// Used to store the tasks in our non-relational MongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Schema
const taskSchema = new Schema({
  description: {
  	type: String,
  	required: "Required description"
  },
  date: {
  	type: Date,
  	default: Date.now
  }
});

// Make the model available in our Node applications
module.exports = mongoose.model('tasks', taskSchema);