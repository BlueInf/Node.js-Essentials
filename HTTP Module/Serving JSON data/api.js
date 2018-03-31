var http = require("http");

// Require a link to data inventory - our JSON data
var data= require("./data/inventory");

// Creating the server
http.createServer(function(req,res){

	// Homepage
	if(req.url==="/"){

		// The output is the whole page
		res.writeHead(200,{"Content-Type":"text/json"});
		res.end(JSON.stringify(data));
	} 
	// If we want to see the items that are only in stock
	else if(req.url==="/instock"){

		listInStock(res);
	}
	// If we want to see the items that are only on order
	else if(req.url==="/onorder"){
		listOnBackOrder(res);
	}
	// Otherwise, error
	else{
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.end("Whoooooops ... .. . Data not found");
	}

}).listen(3000);

console.log("Server listening on port 3000")

// Function that lists all the in stock items
function listInStock(res){

	var inStock= data.filter(function(item){
		return item.avail==="In stock";
	});
	res.end(JSON.stringify(inStock));
}

// Function that lists all the on order items
function listOnBackOrder(res){
	var onOrder= data.filter(function(item){
		return item.avail==="On back order";
	});
	res.end(JSON.stringify(onOrder));
}