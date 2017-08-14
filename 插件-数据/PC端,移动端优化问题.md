####PC端,移动端优化问题
#####PC端
1.用hash-table来优化查找

2.少用全局变量

3.用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能

4.用setTimeout来避免页面失去响应

5.缓存DOM节点查找的结果

6.避免使用CSS Expression

7.避免全局查询

8.避免使用with(with会创建自己的作用域，会增加作用域链长度)

9.多个变量声明合并

10.避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率

11.尽量避免写在HTML标签中写Style属性

#####移动端
1.尽量使用css3动画，开启硬件加速。
2.适当使用touch事件代替click事件。
3.避免使用css3渐变阴影效果。
4.可以用transform: translateZ(0)来开启硬件加速。
5.不滥用Float。Float在渲染时计算量比较大，尽量减少使用
6.不滥用Web字体。Web字体需要下载，解析，重绘当前页面，尽量减少使用。
7.合理使用requestAnimationFrame动画代替setTimeout
8.CSS中的属性（CSS3 transitions、CSS3 3D transforms、Opacity、Canvas、WebGL、Video）会触发GPU渲染，请合理使用。
过渡使用会引发手机过耗电增加
*PC端的在移动端同样适用*