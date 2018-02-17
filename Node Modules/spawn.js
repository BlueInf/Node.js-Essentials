/** Spawn function from the child process module */
var spawn=require("child_process").spawn;


var cp=spawn("node",["alwaysTalking"]);

// Whenever data is sent to this module via standard input the callback function will fire
cp.stdout.on("data",function(data){

	//Printing the data
	console.log(`STDOUT: ${data.toString()}`);


});

// Listening for close events
cp.on("close",function(){

	console.log("Child Process has ended");

	process.exit();
});

// after 4 second we input "stop" which will cause the process to end
setTimeout(function(){
	cp.stdin.write("stop");

},4000);

