var http = require('http'); 
var fs = require('fs');
//to access the file system
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(filename == './') {filename = './fs'}

    filename = filename + ".html";
    // if we wrote fs without the .html the browser would know immediatly 

console.log(filename);

    fs.readFile(filename, function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found');
        }
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);//data is fs.html
console.log("...Incoming request: " + req.url);//server console status massages
return res.end(); 
    })
}).listen(8080); 

console.log('server listening on port 8080...');