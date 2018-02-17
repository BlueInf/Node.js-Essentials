/** 
Child Process module allows us to execute external processes in our environment 
*/
var exec=require("child_process").exec;

/** Call back function with the first argument error and the other stdout */
exec("git version",function(err, stdout){

	if(err){
		throw err;
	}

	console.log("Git Version executed");

	console.log(stdout);

});