#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#1.list

#Python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素
#比如，列出班里所有同学的名字，就可以用一个list表示
classmates = ['lilei', 'xiaoxue', 'lucy']
print(classmates)
#输出['lilei', 'xiaoxue', 'lucy']


#使用len()函数可以获取list元素的个数
print(len(classmates))
#输出3

#用索引来访问list中每一个位置的元素，记得索引是从0开始的：
print(classmates[0])
#输出'lilei'

#当索引超出了范围时，Python会报一个IndexError错误，所以，要确保索引不要越界，记得最后一个元素的索引是len(classmates) - 1。
#如果要取最后一个元素，除了计算索引位置外，还可以用-1做索引，直接获取最后一个元素：
print(classmates[len(classmates) - 1])
print(classmates[-1])
#输出lucy


#添加元素
classmates.append('add1')
print(classmates)
#输出['lilei', 'xiaoxue', 'lucy', 'add1']

#也可以把元素插入到指定的位置，比如索引号为1的位置：
classmates.insert(1, 'add2')
print(classmates)
#输出['lilei', 'add2', 'xiaoxue', 'lucy', 'add1']

#删除末尾元素
classmates.pop()
print(classmates)
#输出['lilei', 'add2', 'xiaoxue', 'lucy']

#要删除指定位置的元素，用pop(i)方法，其中i是索引位置：
classmates.pop(1)
print(classmates)
#输出['lilei', 'xiaoxue', 'lucy']

#2.tuple
#另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple一旦初始化就不能修改，比如同样是列出同学的名字：
classmates2 = ('a', 'b', 'c')
#现在，classmates这个tuple不能变了，它也没有append()，insert()这样的方法。其他获取元素的方法和list是一样的，
#你可以正常地使用classmates[0]，classmates[-1]，但不能赋值成另外的元素。

#但是，要定义一个只有1个元素的tuple，如果你这么定义：
t = (1)
print(t)
#输出1
#很明显,定义的不是tuple，是1这个数！
#这是因为括号()既可以表示tuple，又可以表示数学公式中的小括号，
#这就产生了歧义，因此，Python规定，这种情况下，按小括号进行计算，计算结果自然是1。

#所以，只有1个元素的tuple定义时必须加一个逗号,，来消除歧义：
t2 = (1,)
print(t2)
#输出(1,)

#最后来看一个“可变的”tuple：
t3 = ('a', 'b', ['A', 'B'])
t3[2][0] = 'X'
t3[2][1] = 'Y'
print(t3)
#输出('a', 'b', ['X', 'Y'])

#表面上看，tuple的元素确实变了，但其实变的不是tuple的元素，而是list的元素。
#tuple一开始指向的list并没有改成别的list，所以，tuple所谓的“不变”是说，tuple的每个元素，指向永远不变。
#即指向'a'，就不能改成指向'b'，指向一个list，就不能改成指向其他对象，但指向的这个list本身是可变的！



#练习
#请用索引取出下面的list的指定元素
L = [
	['apple', 'google', 'microsof'],
	['java', 'python', 'ruby', 'php'],
	['adam', 'bart', 'lisa']
]
#打印apple
print(L[0][0])
#打印python
print(L[1][1])
#打印lisa
print(L[2][2])