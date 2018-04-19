var http = require('http');
var url = require('url');
function start (route, handle) {
    function onRequest (resquest, response) {
        var postData = '';
        var pathname = url.parse(resquest.url).pathname;
        resquest.setEncoding('utf8');
        resquest.addListener('data', function (postDataChunk) {
           postData += postDataChunk;
           console.log(postData);
        });
        resquest.addListener('end', function () {
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(8888);
}
exports.start = start;