/**
mainController.js
Controller for the app.js
Made by Krasimir Marinov
*/
'use strict';

// Importing modules
const mongoose = require('mongoose');
const Task = mongoose.model('tasks');
const User = mongoose.model('users');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const checkAuth = require('../middleware/checkAuth');

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
   Task.findOneAndUpdate({
         _id: req.params.taskId
      },
      req.body, {
         new: true
      },
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
      res.json({
         message: 'Task successfully deleted'
      });
   });
};

/**
Delete user function
*/
exports.deleteUser = function(req, res) {
   User.remove({
      _id: req.params.userId
   }, function(err, user) {
      if (err) {
         res.send(err);
         console.log(err);
      }
      res.json({
         message: 'User successfully deleted'
      });
   });
};



/**
Signing up function
*/
exports.signUp = function(req, res) {

   User.find({
         email: req.body.email
      })
      .exec()
      .then(user => {
         if (user.length >= 1) {
            return res.status(409).json({
               message: "Mail already exists"
            });
         } else {

            bcrypt.hash(req.body.password, 10, (err, hash) => {


               if (err) {
                  res.send(err);
               } else {

                  const user = new User({
                     email: req.body.email,
                     password: hash
                  });

                  user
                     .save()
                     .then(result => {
                        console.log(result);
                        res.status(201).json({
                           message: "User created"
                        });
                     })
                     .catch(err => {
                        console.log(err);
                        res.status(500).json({
                           error: err
                        })
                     });
               }
            })
         }
      });
};

/**
Log in function
*/
exports.logIn = function(req, res) {
   User.find({
         email: req.body.email
      })
      .exec()
      .then(user => {
         if (user.length < 1) {
            return res.status(401).json({
               message: "Auth failed"
            });
         }
         bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
               console.log("Error");
               return res.status(401).json({
                  message: "Auth failed"
               });
            }
            if (result === true) {
               const token = jwt.sign({
                     email: user[0].email,
                     userId: user[0]._id
                  },
                  'sshhhsecret', {
                     expiresIn: "1h"
                  });
               return res.status(200).json({
                  message: "Auth successful",
                  token: token
               });
            }
            res.status(401).json({
               message: "Auth failed"
            });

         });
      });
};