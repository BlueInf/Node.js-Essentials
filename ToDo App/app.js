
/* 
ToDo App made by Krasimir Marinov
*/

// Requiring express module
var express=require('express')


var app=express()
 
app.get('/', function (req, res) {
   res.send('Restful ToDo made by Krasimir Marinov');
})

app.get('/listTasks', function (req, res) {
   res.send('Tasks: ..........');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
