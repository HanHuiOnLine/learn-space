'use strict';
var http = require('http');
var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<h1>hello world</h1>');
});
server.listen(8090);
