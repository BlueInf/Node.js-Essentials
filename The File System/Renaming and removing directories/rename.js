var fs=require("fs");


// We rename a file
fs.renameSync("./lib/project-config.js","./lib/config.json");
console.log("Config json file renamed");

// We move the file by not specifying the lib directory in the destination
fs.rename("./lib/notes.md","./notes.md",function(err){

	if(err){
		console.log(err);
	} else {
		console.log("Notes.md moved successfully"); 
	}

})