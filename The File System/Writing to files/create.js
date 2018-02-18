/**
Creating a simle markdown file

*/
var fs=require("fs");

var md= `

Sample Markdown Title
=====================

Sample subtitle 
---------------

* point
* point
* point


`;

/** Writing to a file */
fs.writeFile("sample.md",md.trim(),function(err){
	console.log("File Created");
});