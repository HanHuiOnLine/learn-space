var http = require('http');
var url = require('url');
function start (route, handle) {
    function onRequest (resquest, response) {
        var pathname = url.parse(resquest.url).pathname;

        //路由
        route(handle, pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
}
exports.start = start;
