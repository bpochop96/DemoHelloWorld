/* Writing hello World to a file. 
var fs = require('fs');
fs.writeFile('message.txt', 'Hello World NICE!', function(err){
    if (err) throw err; 
    console.log("it is done");
});
*/


//hello world on a web server. 
var http = require('http');
var addition = require('./add.js');                 //practice adding functions from other files. 
//var fs = require ('fs');
//debugger;
http.createServer(function (req, res){
     
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Testing for Hello World! \n Heres some additon 2 + 2 = " + addition.Add(2,2));
    
      
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

/* Hello World using express. 
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 1337!');
});

*/


var request = require("request");
request ("http://www.google.com", function(error, response, body){

    console.log(body);

});