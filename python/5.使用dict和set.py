#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#dict
#Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，使用键-值（key-value）存储，具有极快的查找速度

d = {'lilei': 95, 'bob': 75, 'lucy': 86}
print(d['lilei'])
#输出95

#要避免key不存在的错误，有两种办法，一是通过in判断key是否存在：
print('aa' in d)
#输出False

#二是通过dict提供的get方法，如果key不存在，可以返回None，或者自己指定的value：
res = d.get('aa')
print(res)
#输出None
res2 = d.get('aa', -1)
print(res2)
#输出-1

#要删除一个key，用pop(key)方法，对应的value也会从dict中删除：
res3 = d.pop('lilei')
print(res3)
#输出95
print(d)
#输出{'lucy': 86, 'bob': 75}

#注意,dict内部存放的顺序和key放入的顺序是没有关系的

#set
#要创建一个set，需要提供一个list作为输入集合
s = set([1, 2, 2, 3, 3])
print(s)
#输出{1, 2, 3}
#重复元素在set中自动被过滤

#通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果：
s.add(4)
print(s)
#{1, 2, 3, 4}
s.add(4)
print(s)
#{1, 2, 3, 4}

#通过remove(key)方法可以删除元素：
s.remove(4)
print(s)
#{1, 2, 3}

#set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：
s1 = set([1, 2, 3])
s2 = set([2, 3, 4])
s3 = s1 & s2
print(s3)
#{2, 3}
s4 = s1 | s2
print(s4)
#{1, 2, 3, 4}
#set和dict的唯一区别仅在于没有存储对应的value，但是，set的原理和dict一样，所以，
#同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复元素”。试试把list放入set，看看是否会报错。