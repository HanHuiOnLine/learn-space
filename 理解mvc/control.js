function getDom (id){
	return document.getElementById(id);
}
var UI=new Object();
UI.register=function(id,event,fn,arr){
	if (getDom(id)) {
		getDom(id)['on'+event]=function(){fn(arr)}
	}
}
UI.register('baidu','click',heepler.tipInfo,[1,2]);