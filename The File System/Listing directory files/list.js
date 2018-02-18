

/** File System Module */
var fs=require("fs");

// Asynchronous reading of directory
fs.readdir('./lib',function(err, files){
	if(err) throw err;
	console.log(files);
});

// Printing reading files before the reading of the directory 
console.log("Reading files....");

