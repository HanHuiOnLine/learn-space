编程这么多年，要是每次写遍历代码时都用 for 循环，真心感觉对不起 JavaScript 语言~
###对象遍历
为了便于对象遍历的测试，我在下面定义了一个测试对象 obj。
####测试对象
```
// 为 Object 设置三个自定义属性（可枚举）
Object.prototype.userProp = 'userProp';
Object.prototype.getUserProp = function() {
    return Object.prototype.userProp;
};
// 定义一个对象，隐式地继承自 Object.prototype
var obj = {
    name: 'percy',
    age: 21,
    [Symbol('symbol 属性')]: 'symbolProp',
    unEnumerable: '我是一个不可枚举属性',
    skills: ['html', 'css', 'js'],
    getSkills: function() {
        return this.skills;
    }
};
// 设置 unEnumerable 属性为不可枚举属性
Object.defineProperty(obj, 'unEnumerable', {
    enumerable: false
});
```
ES6 之后，共有以下 5 种方法可以遍历对象的属性。
for…in ：遍历对象自身的和继承的可枚举属性（不含 Symbol 类型的属性）
```
for (let key in obj) {
    console.log(key);
    console.log(obj.key);    // wrong style
    console.log(obj[key]);   // right style
}
```
不要使用 for…in 来遍历数组，虽然可以遍历，但是如果为 Object.prototype 设置了可枚举属性后，也会把这些属性遍历到，因为数组也是一种对象。
Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 类型的属性）
```
Object.keys(obj);  
// ["name", "age", "skills", "getSkills"]
```
Object.getOwnPropertyNames(obj)：返回一个数组，包含对象自身的所有属性（不含 Symbol 类型的属性，不包含继承属性，但是包括不可枚举属性）
```
Object.getOwnPropertyNames(obj);
// ["name", "age", "unEnumerable", "skills", "getSkills"]
```
Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 类型的属性（不包括继承的属性）
```
Object.getOwnPropertySymbols(obj);
// [Symbol(symbol 属性)]
```
Reflect.ownKeys(obj)：返回一个数组，包含对象自身的所有属性（包含 Symbol 类型的属性，还有不可枚举的属性，但是不包括继承的属性）
```
Reflect.ownKeys(obj);
// ["name", "age", "unEnumerable", "skills", "getSkills", Symbol(symbol 属性)]
```
以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则
首先遍历所有属性名为数值的属性，按照数字排序
其次遍历所有属性名为字符串的属性，按照生成时间排序
最后遍历所有属性名为Symbol值的属性，按照生成时间排序






















