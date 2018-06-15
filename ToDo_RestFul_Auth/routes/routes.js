/**
routes.js
Routes for the app.js
Routes call functions from mainController.js
Made by Krasimir Marinov
*/
'use strict';

/**
Exporting the routes module 
To be used in the app.js
*/
module.exports = function(app) {

   // Importing the mainController
   const controller = require('../controller/mainController');

   const checkAuth = require('../middleware/checkAuth');


   // Get and Post http requests for the tasks route
   app.route('/tasks')
      .get(controller.listTasks)
      .post(checkAuth, controller.createTask);

   // Get,put and delete routes for the taskId route
   app.route('/tasks/:taskId')
      .get(controller.readTask)
      .put(checkAuth, controller.updateTask)
      .delete(checkAuth, controller.deleteTask);

   // Routes for signing up
   app.route('/signup')
      .post(controller.signUp);

   // Route for logging in
   app.route('/login')
      .post(controller.logIn);

   // Route for userID
   app.route('/users/:userId')
      .delete(controller.deleteUser);


};