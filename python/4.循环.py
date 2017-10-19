#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来，看例子：
names = ['a', 'b', 'c']
for name in names:
    print(name)

#再比如我们想计算1-10的整数之和，可以用一个sum变量做累加：
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0
for x in num:
    sum = sum + x
print(sum)
#输出55


#如果要计算1-100的整数之和，从1写到100有点困难，幸好Python提供一个range()函数，可以生成一个整数序列，
#再通过list()函数可以转换为list。比如range(5)生成的序列是从0开始小于5的整数：
num2 = list(range(5))
print(num2)
#[0, 1, 2, 3, 4]


#第二种循环是while循环，只要条件满足，就不断循环，条件不满足时退出循环。
#比如我们要计算100以内所有奇数之和，可以用while循环实现：
sum2 = 0
n = 99
while n > 0:
    sum2 = sum2 + n
    n = n - 2
print(sum2)

#break
#在循环中，break语句可以提前退出循环

m = 1
while m <= 100:
    if m > 10:
	    break
    print(m)
    m = m + 1
print('结束')

#continue
#在循环过程中，也可以通过continue语句，跳过当前的这次循环，直接开始下一次循环
#如果我们想只打印奇数，可以用continue语句跳过某些循环
m2 = 0
while m2 < 10:
	# 如果n是偶数，执行continue语句
	m2 = m2 + 1
	if m2 % 2 == 0:
		continue
	print(m2)