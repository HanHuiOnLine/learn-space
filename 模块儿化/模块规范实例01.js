//以下就是Javascript模块的基本写法
var modal=(function () {
    var _count=0;      
    var m1=function () {
        //.....
    };
    var m2=function () {
        //....
    }
    return {
        m1:m1,
        m2:m2
    }
})();
//如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。
var modal=(function (mod) {
    mod.m3=function () {
        //....
    };
    return mod;
})(modal);
//在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用上一节的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"。
var  modal=(function (mod) {
    //...
    return mod
})(window.modal || {})
