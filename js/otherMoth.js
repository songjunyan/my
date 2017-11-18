(function(window){
	
	method.prototype.timeOutButtonZhuce = function(e,time,content){
		
		e.addClass("disable");
		e.html("审核剩余"+time+"秒");
		var a=setInterval(function () { 
			time=time-1;
	       	e.html("审核剩余"+time+"秒");
	       	if(time==0){
	       		e.removeClass("disable");
	       		e.html(content);
	       		clearInterval(a);
	       	}
	    }, 1000);
    }
	
	method.prototype.timeOutButton = function(e,time,content){
		
		if(!e.hasClass("disable")){
			e.addClass("disable");
			e.html("审核剩余"+time+"秒");
			var a=setInterval(function () { 
				time=time-1;
	       		e.html("审核剩余"+time+"秒");
	       		if(time==0){
	       			e.removeClass("disable");
	       			e.html(content);
	       			clearInterval(a);
	       		}
	    	}, 1000);
	    	return true;
		}else{
			mui.toast('审核中....',{duration:'short', type:'div'});
			return false;
		}
		
    }
	
	method.prototype.timeOutInput = function(e,time,content){
		
		if(!e.hasClass("disable")){
			e.addClass("disable");
			e.val("审核剩余"+time+"秒");
			var a=setInterval(function () { 
				time=time-1;
	       		e.val("审核剩余"+time+"秒");
	       		if(time==0){
	       			e.removeClass("disable");
	       			e.val(content);
	       			clearInterval(a);
	       		}
	    	}, 1000);
		}else{
			mui.toast('审核中....',{duration:'short', type:'div'});
		}
		
    }
	
	method.prototype.yanzhengInfo = function(){
		
		var newId=localStorage.getItem("newId");
		var news=localStorage.getItem("news");
		var us=localStorage.getItem("us");
		var ps=localStorage.getItem("ps");
		var userid=localStorage.getItem("userid");
		var xiaoyaun=localStorage.getItem("xiaoyaun");
		var person=localStorage.getItem("person");
		var achieve=localStorage.getItem("achieve");
		var iputmoney=localStorage.getItem("iputmoney");
		var course=localStorage.getItem("course");
		var message=localStorage.getItem("message");
		
		if(newId!=null && news!=null && us!=null && ps!=null && userid!=null && xiaoyaun!=null && person!=null && achieve!=null && iputmoney!=null && course!=null && message!=null && message!="noId"){
			return true;
		}
		return false;
    }
	
	function method(){}
	 window.otherMethod = method;
})(window);
