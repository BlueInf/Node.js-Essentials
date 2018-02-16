
/** Working with the path, util  and v8 modules*/

var path = require('path');
var util= require('util');
var v8 = require('v8');

console.log( path.basename(__filename) );

var dirUploads = path.join(__dirname,'www','files','uploads');

util.log(dirUploads);

// Current memory statistics
util.log(v8.getHeapStatistics());