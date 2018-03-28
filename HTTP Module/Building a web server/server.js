var http = require("http");


// Using the createServer function
var server = http.createServer(function(req,res){

	/**
	 *Completing the response header
	 *Responding with html
	 */
	res.writeHead(200,{"Content-Type":"text/html"});

    // Sending HTML Content
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Textt</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
		`);

});

// Listening to any requests on 3000
server.listen(3000);

console.log("Server Listening on port 3000");