(function () {
    var Stage = Laya.Stage,
        Handler = Laya.Handler,
        WebGL = Laya.WebGL;
    (function () {
        Laya.init(1136, 640, WebGL);
        Laya.stage.bgColor = "#000000";
        Laya.stage.scale = Stage.SCALE_SHOWALL;
        Wuziqi.show();
    }());   
}());