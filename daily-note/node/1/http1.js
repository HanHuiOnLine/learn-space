'use strict';
//导入http模块
var http=require('http');
//创建http server 并出入回调函数
var server=http.createServer(function (request,response) {
	//回调函数接收request和response对象
	//获得http请求的method和URL
	console.log(request.method+','+request.url);
	//将http响应200写入response,同时设置content-type:text/html
	response.writeHead(200,{'Content-Type':'text/html'});
	//将http响应的html内容写入response
	response.end('<h1>hello,world<h1/>');
});
server.listen(8080);
console.log('server is running at http://127.0.0.1:8080');