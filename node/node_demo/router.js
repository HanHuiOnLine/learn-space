function route (handle, pathname, response, postData) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log('没有找到对应路由');
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write('404 not found');
        response.end();
    }
}
exports.route = route;