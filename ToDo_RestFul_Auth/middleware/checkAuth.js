/**
checkAuth.js
Authenticator checking
Made by Krasimir Marinov
*/
'use strict';
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
   try {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
      const decoded = jwt.verify(token, 'sshhhsecret');
      req.userData = decoded;
      next();
   } catch (error) {
      return res.status(401).json({
         message: 'Auth failed'
      });
   }
};