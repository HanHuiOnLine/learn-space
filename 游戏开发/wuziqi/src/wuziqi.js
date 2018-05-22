var Wuziqi = (function () {
    var instance = null,
        listArg = [];//棋盘中棋子

    function WuziqiFun () {
        WuziqiFun.super(this);
    }
    Laya.class(WuziqiFun, "WuziqiFun", WuziqiUI, '');
    var _proto_ = WuziqiFun.prototype;
    _proto_.init = function () {
        this.img.on(Laya.Event.CLICK, this, this.clickFun);
    };
    _proto_.clickFun = function (e) {
        var _x = e.stageX,
            _y = e.stageY,
            _self = this;
        //判断点击区域是否已经有棋子
        if (listArg.length > 0) {
            for (var n = 0, m = listArg.length; n < m; n++) {
                var _o = listArg[n];
                if (_x >= (_o.x - 15) && _x <= (_o.x + 15) && _y >= (_o.y - 15) && _y <= (_o.y + 15)) {
                    //已经有棋子
                    return false;
                }
            }
        }
        console.log(23232);    
        for (var i = 0, l = dataArg.length; i < l; i++) {
            var o = dataArg[i];
            if (_x >= (o.x - 15) && _x <= (o.x + 15) && _y >= (o.y - 15) && _y <= (o.y + 15)) {
                //添加棋子
                var _img = new Laya.Image();
                _img.width = 30;
                _img.height = 30;
                _img.pivotX = 15;
                _img.pivotY = 15;
                _img.pos(o.x, o.y);
                _img.skin = "comp/b.jpg";
                //添加到数组中
                listArg.push({
                    x: o.x,
                    y: o.y,
                    owner: 1
                })
                _self.img.addChild(_img);
                //判断输赢
                //八个方向,每当有空白,或者不同颜色,返回
                //右侧
                var _nx = o.x + 40,
                    _ny = o.y;
                //遍历场景中所有棋子
                for (var j = 0, k = listArg; j < k; j++) {
                    var _obj = listArg[i];
                    if (_nx === _obj.x && _ny === _obj.y) {
                        //右侧第一个位置有棋子
                        //判断棋子颜色是否与自己的颜色一致
                    }
                }
                break;
            }
        }   
    };
    _proto_.show = function () {
        this.visible = true;
        Laya.stage.addChild(this);
    };
    _proto_.hide = function (destroy) {
        this.visible = false;
        if (destroy) {
            this.removeSelf();
        }
    };
    return {
        show: function () {
            Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, function () {
                if (!instance) {
                    instance = new WuziqiFun();
                    instance.init();
                }
                instance.show();
            }));
        }
    }
}());