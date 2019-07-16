var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello Jenkins Multibranch Pipeline</h1>\n<p>changed?</p>");
});

server.listen(8000);
console.log("Server listening on port 8000 :  http://127.0.0.1:8000/");