
/** 
Check if we have a directory called lib
If we do not have we create one
*/
var fs=require("fs");

if(fs.existsSync("lib")){
	console.log("Directory already there.");
} else {

fs.mkdir("lib",function(err){

	if(err){
		console.log(err);
	}else {
		console.log("Directory created.");
	};
});
};