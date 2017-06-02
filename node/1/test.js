//process.nextTick()将在下一轮事件循环中调用:
'use strict';
process.nextTick(function () {
	console.log('nextTick callback');
})
console.log('nextTick wad set');