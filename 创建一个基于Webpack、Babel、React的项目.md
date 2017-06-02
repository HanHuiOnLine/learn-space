#创建一个基于Webpack、Babel、React的项目

[toc]

##1.nvm（node version manager）安装与使用

###What is nvm?

[nvm](https://github.com/creationix/nvm)是一个node的版本管理工具，使用nvm可以同时安装和使用多个版本的node。

###nvm的安装和升级

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash`

###常用命令

- 列出所有node远程版本：`nvm ls-remote`
- 安装指定版本的node：`nvm install v7.6.0`
- 列出所有已安装node版本：`nvm ls`
- 切换node版本：`nvm use v7.5.0`
- 设置默认node版本：`nvm alias default v7.5.0` 

###使用.nvmrc

- 如果项目需要使用指定版本的node，可以在项目根目录建立.nvmrc文件，写入版本号，之后直接执行`nvm use`命令记了直接使用文件中配置的node版本

###提示

- 使用nvm安装的node保存在nvm管理的版本路径：`/Users/Violin/.nvm/versions/node`
- 之后使用npm或者yarn全局安装的node模块都会保存在安装时所使用的node版本中

##2.package.json文件

###package.json文件的作用

每个项目的根目录下都会有一个package.json文件，该文件使用一个json对象定义了项目的配置信息，如名字、作者、代码库地址等，同时定义了项目所需要的编译时和运行时依赖。

###package.json文件示例

```javascript
{
  "name": "webpack-demo-yzj",
  "version": "1.0.0",
  "description": "Learning webpack.",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors",
    "deploy": "NODE_ENV=production webpack -p"
  },
  "keywords": ["webpack", "react"],
  "author": "Jason Yu <onthink@foxmail.com>",
  "license": "MIT",
  "repository": "yuzj/webpack-demo-yzj",
  "devDependencies": {
    "babel-core": "^6.23.1",
    "babel-loader": "^6.3.2",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.23.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-router": "^3.0.2",
    "webpack": "^2.2.1"
  },
  "dependencies": {
    "jquery": "^3.1.1"
  }
}
```

###重要字段说明
- `script字段`：该字段指向一个对象，该对象指定了可运行的npm命令行缩写
- `dependencies字段`：该字段指向一个对象，该对象指定了项目运行时所需要的模块，使用`npm install --save`命令安装的模块会被保存在这个对象中，由所安装的模块名和版本号组成
- `devDependencies字段`：该对象指向一个对象，该对象制定了项目编译时所需要的模块，使用`npm install --save-dev`命令安装的模块会被保存在这个对象中，其它同上

###提示
- 其他字段用途请参考文档
- package.json文件中不允许注释，任何注释行都会导致编译时错误

##3.Webpack模块打包工具

Webpack是一个打包工具，它能够将项目所需要的各种资源如js、css、图片作为模块载入并进行打包。

###安装方式
webpack的安装可以选择作为全局的node模块安装，通过这种方式安装webpack可以直接调用webpack命令行；

webpack也可以作为项目依赖的node模块安装，通过这种方式安装的webpack需要手动查找webpack可执行文件路径执行webpack命令，当然，也可以通过package.json文件中的script字段配置为npm命令行调用。

最简单的webpack命令示例`webpack main.js bundle.js`,该命令的意思为讲`main.js`文件打包输出为名为`bundle.js`文件。

###常用命令
`webpack`： 一次性打包项目所需模块
`webpack -p`：一次性打包项目所需模块，同时进行压缩
`webpack -d`：打包项目所需模块，包含资源映射

###webpack.config.js配置文件
该配置文件位于项目根目录中，利用配置文件，我们可以将重复或者复杂的webpack参数或操作预先配置，方便之后的使用。

###webpack.config.js文件示例
```javascript
module.exports = {
  entry: './main.jsx',		//entry字段定义了需要打包的文件入口，可以使用字符串和对象直接量，定义单个或多个入口
  output: {					//output字段定义了打包后的文件出口
    filename: 'bundle.js'
  },
  module: {					//定义webpack所需要的模块
    loaders:[					//定义各种loader
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }
    ]
  }
};
```

##4.Babel和Loaders
###ES6转码器
Babel本质上是一个转码器，可以将ES6代码转为ES5代码，从而在现有浏览器环境中执行由ES6语法编写的代码。例如：

```javascript
//ES6箭头函数
input.map(item => item + 1);

//转码后的ES5语法
input.map(function (item) {
  return item + 1;
});

```
###Loaders
Webpack本身只能处理JavaScript模块，如果要处理其他类型的文件，就需要使用loader进行转换。

Loader可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过webpack来打包各种类型的模块或文件，如.jsx文件、.less文件等。

##5.Hello React！

- 现在可以根据下面的步骤开始一个使用`Webpack`进行模块打包，使用`Babel`和`babel-loader`进行转码和转换，使用`React`语法进行编码的项目。
- 示例所使用的node版本为6.9.5

###1.新建项目根目录并进行初始化
```
mkdir workshop-demo-yzj
cd workshop-demo-yzj
npm init -y
```

###2.项目安装webpack
```
npm install webpack --save-dev
```

###3.使用webpack
- 直接通过`node_modules/.bin/webpack`命令使用







