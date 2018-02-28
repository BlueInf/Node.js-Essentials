var fs= require("fs");

/** 
	Implementing Readable File Streams
	Stream used to receive small chunks of data from the file
*/
var stream=fs.createReadStream("./chat.log","UTF-8");

var data="";

/**
	On first data event we print that we are reading from the file
*/
stream.once("data",function(){
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});


/** 
	We print out the length of each data chunk
*/
stream.on("data",function(chunk){
	process.stdout.write(` chunk ${chunk.length}|`);
	data+=chunk;
});

/**
	A listener that will listen to end event
*/
stream.on("end",function(){
	console.log("\n\n\n");
	console.log(`Started Reading File ${data.length}`);
	console.log("\n\n\n");
});