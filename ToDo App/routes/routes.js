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
  const taskList = require('../controller/mainController');

  // tasksList Routes

  // Get and Post http requests for the tasks route
  app.route('/tasks')
    .get(taskList.listTasks)
    .post(taskList.createTask);

  // Get,put and delete routes for the taskId route
  app.route('/tasks/:taskId')
    .get(taskList.readTask)
    .put(taskList.updateTask)
    .delete(taskList.deleteTask);
};