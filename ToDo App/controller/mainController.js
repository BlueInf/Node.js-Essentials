/**
mainController.js
Controller for the app.js
Made by Krasimir Marinov
*/

'use strict';

// Importing modules
const mongoose = require('mongoose');
const Task = mongoose.model('tasks');

/**
List tasks function
*/
exports.listTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json(task);
  });
};

/**
Create task function
*/
exports.createTask = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json(task);
  });
};

/**
Read task function
*/
exports.readTask = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json(task);
  });
};

/**
Update tasks function
*/
exports.updateTask = function(req, res) {
  Task.findOneAndUpdate(
    {_id: req.params.taskId},
    req.body,
    {new: true},
    function(err, task) {
      if (err) {
        res.send(err);
        console.log(err);
      }
      res.json(task);
    });
};


/**
Delete tasks function
*/
exports.deleteTask = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json({ message: 'Task successfully deleted' });
  });
};