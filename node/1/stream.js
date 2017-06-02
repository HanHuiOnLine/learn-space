'use strict';
var fs=require('fs');
//打开一个流
var rs=fs.createReadStream('sample.txt','utf-8');
//要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
rs.on('data',function (chunk) {
	console.log(chunk);
});
rs.on('end',function () {
	console.log('end');
});
rs.on('err',function (err) {
	console.log('err'+err);
});
//要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
'use strict';
var fs=require('fs');
var ws1=fs.createWriteStream('sample.txt','utf-8');
ws1.write('使用stream写入文本数据.\n');
ws1.write('end:');
ws1.end();
//写入二进制文件
var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();
//一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
//让我们用pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：
'use strict';
var fs=require('fs');
var rs=fs.createReadStream('要被复制的文件名字');
var ws=fs.createWriteStream('复制出来的文件名字(自取)');
rs.pipe(ws);
