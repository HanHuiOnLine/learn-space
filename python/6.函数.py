#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#求绝对值函数(内置的函数)
print(abs(-20))
#20

#max函数可以接收任意多个参数，并返回最大的那个：
print(max(1,2,3,4,5,6))
#6

#数据类型转换函数
#Python内置的常用函数还包括数据类型转换函数，比如int()函数可以把其他数据类型转换为整数：
print(int('123'))
#123
print(int(12.34))
#12
print(float('12.34'))
#12.34
print(str(1.23))
#'1.23'
print(bool(1))
#True
print(bool(''))
#False

#定义函数
#在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，
#然后，在缩进块中编写函数体，函数的返回值用return语句返回。

#我们以自定义一个求绝对值的my_abs函数为例
def my_abs(x):
	if x >= 0:
		return x
	else:
		return -x
print(my_abs(-10))
#10


#空函数
#如果想定义一个什么事也不做的空函数，可以用pass语句：
def nop():
	pass
#pass语句什么都不做，那有什么用？实际上pass可以用来作为占位符，
#比如现在还没想好怎么写函数的代码，就可以先放一个pass，让代码能运行起来。

#pass还可以用在其他语句里，比如：
def nop2(age):
	if age >= 18:
		pass
#缺少了pass，代码运行就会有语法错误。


#参数检查
#调用函数时，如果参数个数不对，Python解释器会自动检查出来，并抛出TypeError
#但是如果参数类型不对，Python解释器就无法帮我们检查

#因此我们在定义函数的时候一般会对参数进行类型检查,我们来修改上面定义的my_abs函数
def my_abs2(x):
	if not isinstance(x, (int, float)):
		raise TypeError('参数类型有误')
	if x >= 0:
		return x
	else:
		return -x
#添加了参数检查后，如果传入错误的参数类型，函数就可以抛出一个错误


#返回多个值
#比如在游戏中经常需要从一个点移动到另一个点，给出坐标、位移和角度，就可以计算出新的新的坐标：
import math

def move(x, y, step, angle=0):
	nx = x + step*math.cos(angle)
	ny = y - step*math.sin(angle)
	return nx, ny

#import math语句表示导入math包，并允许后续代码引用math包里的sin、cos等函数。
x, y = move(100, 100, 60, math.pi/6)
print(x, y)
#151.96152422706632 70.0

r = move(100, 100, 60, math.pi/6)
print(r)
#(151.96152422706632, 70.0)
#原来返回值是一个tuple！但是，在语法上，返回一个tuple可以省略括号
#而多个变量可以同时接收一个tuple，按位置赋给对应的值，
#所以，Python的函数返回多值其实就是返回一个tuple，但写起来更方便。


#练习

#请定义一个函数quadratic(a, b, c)，接收3个参数，返回一元二次方程：ax2 + bx + c = 0的两个解
#提示：计算平方根可以调用math.sqrt()函数
def quadratic(a, b, c):
	if not isinstance(a, (int, float)) or not isinstance(b, (int, float)) or not isinstance(c, (int, float)):
		raise TypeError('参数类型有误')
	if a == 0:
		if b == 0:
			raise TypeError('函数无实根')
		else:
			return -c/b
	else:
		j = b**2-4*a*c
		if j < 0:
			raise TypeError('函数无实根')
		else:
			x1 = (-b+math.sqrt(j))/2*a
			x2 = (-b-math.sqrt(j))/2*a
			return x1, x2
dd = quadratic(1,2,-1)
print(dd)





















		






