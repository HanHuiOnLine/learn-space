'use strict';
// var fs=require('fs');
// fs.readFile('sample.txt','utf-8',function (err,data) {
// 	if (err) {
// 		console.log(err);
// 	}else{
// 		console.log(data);
// 	}
// })
//读取二进制文件.例如图片
var fs=require('fs');
fs.readFile('sample.jpeg',function (err,data) {
	if (err) {
		console.log(err);
	}else{
		console.log(data);
		console.log(data.length+'bytes');
		var text=data.toString('utf-8');
		console.log(text);
	}
})