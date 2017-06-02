'use strict';
var fs=require('fs'),
	url=require('url'),
	path=require('path'),
	http=require('http');
//从命令行参数获取root目录,默认是当前目录
var root=path.resolve(process.argv[2] || '.');
console.log('static root dir:'+root);
//创建服务器
var server=http. createServer(function (request,response) {
	//获取URL的path,类似'/css/bootstrop.css'
	var pathName=url.parse(request.url).pathname;
	//获取对应的本地文件路径,类似'ser/ww/css/bootstrop.css' 
	var  filePath=path.join(root,pathName);
	//获取文件状态
	fs.stat(filePath,function (err,stats) {
		if (!err && stats.isFile()) {
			//没有出错并且文件存在
			console.log('200'+request.url);
			//发送200请求
			response.writeHead(200);
			//将文件流导向response
			fs.createReadStream(filePath).pipe(response);

		}else{
			//出错了或者文件不存在
			console.log('404'+request.url);
			//发送404响应
			response.writeHead(404);
			response.end('404 Not Found');
		}
	});
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');