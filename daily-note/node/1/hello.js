'use strict';
var hello=(function () {
	var name='world';
	var yes=function () {
		console.log('hello,'+name);
	}
	var no=function () {
		return false;
	}
	return {
		yes:yes,
		no:no
	}
})()
module.exports=hello;