function route (handle, pathname) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log('没有找到对应路由');
    }
}
exports.route = route;