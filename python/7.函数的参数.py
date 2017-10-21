#!/ust/bin/env python3
# -*- coding: utf-8 -*-

#Python的函数定义非常简单，但灵活度却非常大。除了正常定义的必选参数外，还可以使用默认参数、可变参数和关键字参数，
#使得函数定义出来的接口，不但能处理复杂的参数，还可以简化调用者的代码。

#1.位置参数

#我们先写一个计算x2的函数：
def power(x):
	return x*x

#现在，如果我们要计算x3怎么办？可以再定义一个power3函数，但是如果要计算x4、x5……怎么办？我们不可能定义无限多个函数。
#你也许想到了，可以把power(x)修改为power(x, n)，用来计算xn，说干就干：
def power2(x, n):
	s = 1
	while n > 0:
		n = n - 1
		s = s * x
	return s
#修改后的power(x, n)函数有两个参数：x和n，这两个参数都是位置参数，调用函数时，传入的两个值按照位置顺序依次赋给参数x和n。


#2.默认参数
def power3(x, n=2):
	s = 1
	while n > 0:
		n = n - 1
		s = s * x
	return s
#这样我们调用power3(5),相当于调用power3(5,2)


#设置默认参数时，有几点要注意：
#一是必选参数在前，默认参数在后，否则Python的解释器会报错（思考一下为什么默认参数不能放在必选参数前面）；
#二是如何设置默认参数。
#当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。

#使用默认参数有什么好处？最大的好处是能降低调用函数的难度。
#举个例子，我们写个一年级小学生注册的函数，需要传入name和gender两个参数：
def enroll(name, gender):
	print('name:', name)
	print('gender', gender)
#如果要继续传入年龄、城市等信息怎么办？这样会使得调用函数的复杂度大大增加。
#我们可以把年龄和城市设为默认参数：
def enroll2(name, gender, age=6, city='郑州'):
	pass

#有多个默认参数时，调用的时候，既可以按顺序提供默认参数，比如调用enroll('Bob', 'M', 7)，意思是，
#除了name，gender这两个参数外，最后1个参数应用在参数age上，city参数由于没有提供，仍然使用默认值。
#也可以不按顺序提供部分默认参数。当不按顺序提供部分默认参数时，需要把参数名写上。比如调用enroll2('Adam', 'M', city='Tianjin')，
#意思是，city参数用传进去的值，其他默认参数继续使用默认值。


#默认参数很有用，但使用不当，也会掉坑里。默认参数有个最大的坑，演示如下：
def add_end(L=[]):
	L.append('END')
	return L
print(add_end([1,2]))
#[1, 2, 'END']
print(add_end())
#['END']

#坑来了
print(add_end())
#['END', 'END']

#原因
#Python函数在定义的时候，默认参数L的值就被计算出来了，即[]，因为默认参数L也是一个变量，它指向对象[]，
#每次调用该函数，如果改变了L的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的[]了。

#所以，定义默认参数要牢记一点：默认参数必须指向不变对象！

#要修改上面的例子，我们可以用None这个不变对象来实现：
def add_end2(L=None):
	if L is None:
		L = []
	L.append('END')
	return L

	
#3.可变参数

#在Python函数中，还可以定义可变参数。顾名思义，可变参数就是传入的参数个数是可变的，可以是1个、2个到任意个，还可以是0个。
#我们以数学题为例子，给定一组数字a，b，c……，请计算a2 + b2 + c2 + ……。
#要定义出这个函数，我们必须确定输入的参数。由于参数个数不确定，
#我们首先想到可以把a，b，c……作为一个list或tuple传进来，这样，函数可以定义如下：
def calc(numbers):
	sum = 0
	for n in numbers:
		sum = sum + n*n
	return sum
#但是调用的时候，需要先组装出一个list或tuple：
calc([1,2,3])
calc((1,2,3,5))

#如果利用可变参数，调用函数的方式可以简化成这样：
def calc2(*numbers):
	sum = 0
	for n in numbers:
		sum = sum + n*n
	return sum
#定义可变参数和定义一个list或tuple参数相比，仅仅在参数前面加了一个*号。在函数内部，
#参数numbers接收到的是一个tuple，因此，函数代码完全不变。但是，调用该函数时，可以传入任意个参数，包括0个参数：
calc2(1,2)
calc2()
#如果已经有一个list或者tuple，要调用一个可变参数怎么办？可以这样做：
nums = [1, 2, 3]
calc2(nums[0], nums[1], nums[2])
#这种写法当然是可行的，问题是太繁琐，所以Python允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去：
nums2 = [1,2,3]
calc2(*nums2)
#*nums表示把nums这个list的所有元素作为可变参数传进去。这种写法相当有用，而且很常见。


#4.关键字参数

#关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。请看示例：
def person(name, age, **kw):
	print('name:', name, 'age:', age, 'other:', kw)
#函数person除了必选参数name和age外，还接受关键字参数kw。在调用该函数时，可以只传入必选参数：
person('han', 25)
#name: han age: 25 other: {}

#也可以传入任意个数的关键字参数：
person('Bob', 35, city='Beijing')
#name: Bob age: 35 other: {'city': 'Beijing'}
person('Adam', 45, gender='M', job='Engineer')
#name: Adam age: 45 other: {'job': 'Engineer', 'gender': 'M'}


#关键字参数有什么用？
#它可以扩展函数的功能。比如，在person函数里，
#我们保证能接收到name和age这两个参数，但是，如果调用者愿意提供更多的参数，
#我们也能收到。试想你正在做一个用户注册的功能，除了用户名和年龄是必填项外，
#其他都是可选项，利用关键字参数来定义这个函数就能满足注册的需求。


#和可变参数类似，也可以先组装出一个dict，然后，把该dict转换为关键字参数传进去：
extra = {'city': 'Beijing', 'job': 'Engineer'}
person('Jack', 24, city=extra['city'], job=extra['job'])
#name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}


#当然，上面复杂的调用可以用简化的写法：

extra2 = {'city': 'Beijing', 'job': 'Engineer'}
person('Jack', 24, **extra2)
#name: Jack age: 24 other: {'job': 'Engineer', 'city': 'Beijing'}
#**extra表示把extra这个dict的所有key-value用关键字参数传入到函数的**kw参数，kw将获得一个dict，
#注意kw获得的dict是extra的一份拷贝，对kw的改动不会影响到函数外的extra。


#5.命名关键字参数

#对于关键字参数，函数的调用者可以传入任意不受限制的关键字参数。至于到底传入了哪些，就需要在函数内部通过kw检查。
#仍以person()函数为例，我们希望检查是否有city和job参数：
def person2(name, age, **kw):
	if 'city' in kw:
		#有city参数
		pass
	if 'job' in kw:
		#有job参数
		pass
	print('name:', name, 'age:', age, 'other:', kw)
#但是调用者仍可以传入不受限制的关键字参数：
person2('Jack', 24, city='Beijing', addr='Chaoyang', zipcode=123456)
#name: Jack age: 24 other: {'addr': 'Chaoyang', 'city': 'Beijing', 'zipcode': 123456}

#如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收city和job作为关键字参数。这种方式定义的函数如下：
def person3(name, age, *, city, job):
	print(name, age, city, job)
#和关键字参数**kw不同，命名关键字参数需要一个特殊分隔符*，*后面的参数被视为命名关键字参数。
person('Jack', 24, city='Beijing', job='Engineer')
#name: Jack age: 24 other: {'job': 'Engineer', 'city': 'Beijing'}


#如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符*了：
def person4(name, age, *args, city, job):
	print(name, age, args, city, job)
#命名关键字参数必须传入参数名，这和位置参数不同。如果没有传入参数名，调用将报错：
	
#命名关键字参数可以有缺省值，从而简化调用：
#由于命名关键字参数city具有默认值，调用时，可不传入city参数：
def person5(name, age, *, city="beijing", job):
	print(name, age, city, job)
person5('Jack', 24, job='Engineer')
#Jack 24 beijing Engineer

#使用命名关键字参数时，要特别注意，如果没有可变参数，就必须加一个*作为特殊分隔符。如果缺少*，Python解释器将无法识别位置参数和命名关键字参数


#6.参数组合

#在Python中定义函数，可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，这5种参数都可以组合使用。
#但是请注意，参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。

def fl(a, b, c=0, *args, **kw):
	print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)
def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)

	
fl(1, 2)
#a = 1 b = 2 c = 0 args = () kw = {}

fl(1, 2, c=3)
#a = 1 b = 2 c = 3 args = () kw = {}

fl(1, 2, 3, 'a', 'b')
#a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}

fl(1, 2, 3, 'a', 'b', x=99)
#a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}

f2(1, 2, d=99, ext=None)
#a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}


#最神奇的是通过一个tuple和dict，你也可以调用上述函数：

args = (1, 2, 3, 4)
kw = {'d': 99, 'x': '#'}
fl(*args, **kw)
#a = 1 b = 2 c = 3 args = (4,) kw = {'x': '#', 'd': 99}

args2 = (1,2,3)
kw2 = {'d': 88, 'x': '#'}
f2(*args2, **kw2)
#a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}
#所以，对于任意函数，都可以通过类似func(*args, **kw)的形式调用它，无论它的参数是如何定义的。