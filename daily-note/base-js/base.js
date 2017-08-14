//前台调用
var $=function(args){
	return new Base(args)
}
// 基础库
 function Base () {
 	//创建数组,保存获取的节点和节点数组
 	this.elements=[];
 	if (typeof args =='string') {
 		//css模拟
 		if(args.indexOf(' ') != -1){
 			var elements=args.split(' ');//把节点拆分开分别保存到数组
 			var childElements=[];//存放临时节点对象的数组,解决呗覆盖的问题
 			var node=[];//用来存放父节点
 			for (var i = 0; i < elements.length; i++) {
 				if (node.length==0) {node.push(document)};//如果默认没有父节点,把document放入
 				switch (elements[i].charAt(0)) {
 					case '# ':
 						childElements=[];//清理临时节点,以便父节点失效,子节点有效
 						childElements.push(this.getId(elements[i].substring(1)));
 						node=childElements;//保存父节点,因为childElements要清理;所以需要创建node数组
 						break;
 					case '.':
 						childElements=[];
 						for (var j = 0; j <node.length; j++) {
 							var temps=this.getClass(elements[i].substring(1),node[j]);
 							for (var k = 0; k <temps.length ; k++) {
 								childElements.push(temps[k]);
 							};
 						};
 						node=childElements;
 						break;
 					default:
 						childElements=[];
 						for (var j = 0; j <node.length; j++) {
 							var temps=this.getTagName(elements[i],node[j]);
 							for (var k = 0; k <temps.length ; k++) {
 								childElements.push(temps[k]);
 							};
 						};
 						node=childElements;
 				}
 			};
 			this.elements=childElements;
		 }else{
		 	//find模拟
		 	switch (args.charAt(0)) {
		 		case '#':
		 			this.elements.push(this.getId(args.substring(1)));
		 			break;
		 		case '.':
		 			this.elements = this.getClass(args.substring(1));
		 			break;
		 		default:
		 			this.elements = this.getTagName(args); 
		 	}
		 }
	}else if (typeof args =='object'){
		if (args != undefined) {
			//_this是一个对象，undefined也是一个对象，区别与typeof返回的带单引号的'undefined'
			  
		};
	}
}