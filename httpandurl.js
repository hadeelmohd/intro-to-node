var http = require('http'); //requiring http module it allows u to transfer data over the internet 
var url = require('url');//built in modules just like http

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'}); //header 200 means server response that the wp is functioning fine like 404 //im going to send you an html file if everything is okay then 200 ^
var q = url.parse(req.url, true).query;
var date = q.year + q.month ;
res.write(date);// req.url shows the url u request in the dom or anything else you want from url to show on dom
res.end(date); //html elements or what should show on page 
}).listen(8080); //listen to port 8080