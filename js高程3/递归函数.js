//arguments.callee指向正在执行函数的指针
function factorial (num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
//严格模式下调用arguments.callee会报错
//采用此写法
var fac = (function f (num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}
})
//闭包
//定义: 有权访问另一个函数作用域中变量的函数

//函数内部this指向的问题
var name = 'the window';
var object = {
	name: 'my object',
	getNameFunc = function () {
		return function () {
			return this.name;
		}
	}
}
console.log(object.getNameFunc());//非严格模式下输出the window,原因: 匿名函数的执行环境具有全局性