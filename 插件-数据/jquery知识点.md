####jquery知识点
1、jQuery入口函数与Js入口函数的区别
【注】js入口函数指的是：window.onload = function(){};

######区别一：书写个数不同
Js入口函数只能出现一次，出现多次会存在事件覆盖的问题。
jQuery的入口函数，可以出现任意多次，并不会存在事件覆盖问题。

######区别二：执行时机不同
Js入口函数是在所有的文件资源加载完成后，才执行。这些文件资源包括：页面文档、外部的js文件、外部的css文件、图片等。
jQuery的入口函数，是在文档加载完成后，就执行。文档加载完成指的是：DOM树加载完成后，就可以操作DOM了，不用等到所有的外部资源都加载完成。
文档加载的顺序：从上往下，边解析边执行。

2、jQuery对象和DOM对象的相互转换
①DOM对象此处指的是：使用js操作DOM返回的结果
```
var btn = document.getElementById(“btnShow”); // btn就是一个DOM对象
```
②jQuery对象此处指的是：使用jQuery提供的操作DOM的方法返回的结果
```
var $btn = $(“#btnShow”); // $btn就是一个jQuery对象
```
③DOM对象转换成jQuery对象
```
var $btn1 = $(btn); // 此时就把DOM对象btn转换成了jQuery对象$btn1
// $(document）.ready(function(){}); // 调用入口函数
// 此处是将document这个js的DOM对象，转换成了jQuery对象，然后才能调用jQuery提供的方法：ready
```
④jQuery对象转换成DOM对象
```
// 第一种方式
var btn1 = $btn[0]; // 此时就把jQuery对象$btn转换成了DOM对象btn1 （推荐使用此方式）
// 第二种方式
var btn2 = $btn.get(0);// 此时就把jQuery对象$btn转换成了DOM对象btn2
```


