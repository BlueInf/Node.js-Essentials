/**
userModel.js
ToDo RestFul API
Made by Krasimir Marinov
*/
// Used to store the users in our non-relational MongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
   email: {
      type: String,
      required: "Required email",
      unique: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   },
   password: {
      type: String,
      rquired: true
   }
});

// Make the model available in our Node applications
module.exports = mongoose.model('users', userSchema);