
/** Serving Files using Node.js */
var http=require("http");
var fs=require("fs");
var path=require("path");

// Building the web server
http.createServer(function(req,res){

	// Logging the type of request
	console.log(`${req.method} request for ${req.url}`);

	// If we are on the home page we write the content of the html
	if(req.url=="/"){

		fs.readFile("./public/index.html","UTF-8",function(err,html){

			res.writeHead(200,{"Content-Type":"text/html"});
			res.end(html);
		});


	}
	// If we request a css file we serve the css file
	else if(req.url.match(/.css$/)){

		var cssPath=path.join(__dirname,'public',req.url);
		var fileStream=fs.createReadStream(cssPath,"UTF-8");

		res.writeHead(200,{"Content-Type":"text/css"});

		fileStream.pipe(res);

	}
	// If we request a jpg file we serve the jpg file
	else if(req.url.match(/.jpg$/)){

		var imgPath=path.join(__dirname,'public',req.url);
		var imgStream=fs.createReadStream(imgPath);

		res.writeHead(200,{"Content-Type":"image/jpeg"});

		imgStream.pipe(res);

	}
	// Else file not found response
	else {

			res.writeHead(404,{"Content-Type":"text/plain"});
			res.end("404 File Not Found");

	}


}).listen(3000); // Listening to port 3000

console.log("File Server running on port 3000");