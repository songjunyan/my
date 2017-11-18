(function(window){
	
	check.prototype.checkUserName = function(e){
		var reg = /^\d{12}$/; // 12个数字
		if(!reg.test(e.val())){
			e.val("");
			e.attr("placeholder","请输入你的学号");
			return false;
		}else{
			return true;
		}
    }
	
	check.prototype.checkPassword = function(e){
		var reg=/^(\w){6,15}$/;//6位到15位
		if(!reg.test(e.val())){
			e.val("");
			e.attr("placeholder","密码为6-15位的数字或字母");
			return false;
		}else{
			return true;
		}
    }
	
	
	check.prototype.checkMovePhone = function(e){
		
		var reg = /^[1][358][0-9]{9}$/; //移动电话
		if(!reg.test(e.val())){
			e.val("");
			e.attr("placeholder","请输入手机号");
			return false;
		}else{
			return true;
		}
    }
	
	check.prototype.checkNotes = function(e){
		
		var reg = /^[\u4e00-\u9fa5]{1,25}$/; //2-25个汉字
		if(!reg.test(e.val())){
			e.val("");
			e.attr("placeholder","1-25位的数字或字母");
			return false;
		}else{
			return true;
		}
    }
	
	check.prototype.checkProblem = function(e){
		
		var reg = /^[\u4e00-\u9fa5]{10,25}$/; //2-25个汉字
		if(!reg.test(e.val())){
			e.val("");
			e.attr("placeholder","10-25个汉字");
			return false;
		}else{
			return true;
		}
    }
	
	
	function check(){}
	
	 window.validationInformation = check;
})(window);