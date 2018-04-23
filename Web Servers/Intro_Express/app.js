var express=require("express");

// Creating new instance of express application
var app = express();

app.use(function(req,res,next){

	console.log(`${req.method} request for '${req.url}'`);
	next();
})

// Middleware  adding path to public directory
app.use(express.static("./public"));


app.listen(3000);

console.log("express app running on port 3000");

module.express=app;