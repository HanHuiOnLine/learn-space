'use strict';
var fs = require('fs');
fs.stat('sample.txt', function (err, stat) {
   if (err) {
       console.log(err);
   } else {
       //是否是文件
       console.log('是文件' +  stat.isFile());
       //是否是目录
       console.log('是否是目录' + stat.isDirectory());
       if (stat.isFile()) {
           //文件大小
           console.log('size: ' + stat.size);
           //创建时间date对象
           console.log('创建时间: ' + stat.birthtime);
           //修改时间,date对象
           console.log('修改时间: ' + stat.mtime);
       }
   }
});