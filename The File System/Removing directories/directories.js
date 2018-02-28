var fs= require("fs");


/**
	For each file in the logs directory we remove it
	In order to delete the actual folder
*/
fs.readdirSync("./logs").forEach(function(fileName){

	fs.unlinkSync("./logs/"+fileName);
});


/**
	We remove the logs directory
*/
fs.rmdir("./logs",function(err){

	if(err){
		throw err;
	}


	console.log("Logs directory removed");
});