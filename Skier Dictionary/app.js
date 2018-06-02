
/** Ski dictionary */

// Including the dictionary
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

// SkierTerms
var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

// Using the body Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

// Get Request
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

// Post Request
app.post("/dictionary-api",function(req,res){

    skierTerms.push(req.body);
    res.json(skierTerms);
});


// Deleete Request
app.delete("/dictionary-api/:term",function(req,res){

    skierTerms =skierTerms.filter(function(definition){
        return definition.term.toLowerCase()!== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;