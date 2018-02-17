
/** 
We require our custom module and define the path to it
*/
var Person = require("./lib/Person");

// We use the person object to make new instances
var george=new Person("George Washington!");
var ben = new Person("Ben Franklin");

// Events
george.on('speak', function(said) {

	console.log(`${this.name} -> ${said}`);

});


ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


// Emitting speak event
ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone that to be in bad company.");
