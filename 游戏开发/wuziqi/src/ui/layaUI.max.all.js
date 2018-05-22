var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var goldUI=(function(_super){
		function goldUI(){
			

			goldUI.__super.call(this);
		}

		CLASS$(goldUI,'ui.goldUI',_super);
		var __proto__=goldUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(goldUI.uiView);

		}

		goldUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":75,"x":73,"skin":"gold/coin2_0.png","scaleY":0.3,"scaleX":0.3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":76,"x":35,"skin":"gold/coin2_11.png","scaleY":0.3,"scaleX":0.3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":50,"x":82,"skin":"gold/coin2_7.png","scaleY":0.3,"scaleX":0.3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":52,"x":17,"width":78,"skin":"gold/coin2_1.png","scaleY":0.3,"scaleX":0.3,"height":49,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":24,"x":18,"skin":"gold/coin2_2.png","scaleY":0.3,"scaleX":0.3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":81,"skin":"gold/coin2_3.png","scaleY":0.3,"scaleX":0.3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":10,"x":47,"skin":"gold/coin2_7.png","scaleY":0.3,"scaleX":0.3,"anchorY":0.5,"anchorX":0.5}}]};
		return goldUI;
	})(View);
var WuziqiUI=(function(_super){
		function WuziqiUI(){
			
		    this.img=null;

			WuziqiUI.__super.call(this);
		}

		CLASS$(WuziqiUI,'ui.WuziqiUI',_super);
		var __proto__=WuziqiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(WuziqiUI.uiView);

		}

		WuziqiUI.uiView={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"width":1136,"skin":"comp/bg.png","sizeGrid":"30,7,9,5","height":640}},{"type":"Box","props":{"y":50,"x":30,"width":560,"height":560},"child":[{"type":"Line","props":{"y":0,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":40,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":80,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":120,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":160,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":200,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":240,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":280,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":320,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":360,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":400,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":440,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":480,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":520,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":560,"x":0,"toY":0,"toX":560,"lineWidth":1,"lineColor":"#000000"}}]},{"type":"Box","props":{"y":50,"x":30,"width":560,"height":560},"child":[{"type":"Line","props":{"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":40,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":80,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":120,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":160,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":200,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":240,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":280,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":320,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":360,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":400,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":440,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":480,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":520,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}},{"type":"Line","props":{"y":0,"x":560,"toY":560,"toX":0,"lineWidth":1,"lineColor":"#000000"}}]},{"type":"Box","props":{"y":0,"x":0,"width":623,"var":"img","height":633}}]};
		return WuziqiUI;
	})(View);