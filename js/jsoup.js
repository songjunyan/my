(function(window){
	
	
	//保存验证码
	function setPhone(phone){
		localStorage.setItem("phone",JSON.stringify(phone));
	}
	function getPhone(){
		return  JSON.parse(localStorage.getItem("phone"));
	}
	
	//保存用户名
	function setUserId(userid){
		localStorage.setItem("userid",JSON.stringify(userid));
	}
	function getUserId(){
		return  JSON.parse(localStorage.getItem("userid"));
	}
	
	//保存用户名
	function setUser(us){
		localStorage.setItem("us",JSON.stringify(us));
	}
	function getUser(){
		return  JSON.parse(localStorage.getItem("us"));
	}
	//保存用户名
	function setps(ps){
		localStorage.setItem("ps",JSON.stringify(ps));
	}
	function getps(){
		return  JSON.parse(localStorage.getItem("ps"));
	}
	
	
	
	//保存新闻
	function setNews(news){
		localStorage.setItem("news",JSON.stringify(news));
	}
	function getNews(){
		return  JSON.parse(localStorage.getItem("news"));
	}
	
	//保存新闻的id号
	function setNewsId(newId){
		localStorage.setItem("newId",JSON.stringify(newId));
	}
	function getNewsId(){
		return  JSON.parse(localStorage.getItem("newId"));
	}
	
	
	//保存消息
	function setMessage(message){
		localStorage.setItem("message",JSON.stringify(message));
	}
	function getMessage(){
		return  JSON.parse(localStorage.getItem("message"));
	}
	
	//保存课程表
	function setCourse(course){
		localStorage.setItem("course",JSON.stringify(course));
	}
	function getCourse(){ 
		return  JSON.parse(localStorage.getItem("course"));
	}
	
	//保存个人
	function setPerson(person){
		localStorage.setItem("person",JSON.stringify(person));
	}
	function getPerson(){ 
		return  JSON.parse(localStorage.getItem("person"));
	}
	
	//保存成绩
	function setAchiever(achieve){
		localStorage.setItem("achieve",JSON.stringify(achieve));
	}
	function getAchiever(){ 
		return  JSON.parse(localStorage.getItem("achieve"));
	}
	//保存充值记录
	function setInputMoney(iputmoney){
		localStorage.setItem("iputmoney",JSON.stringify(iputmoney));
	}
	function getInputMoney(){ 
		return  JSON.parse(localStorage.getItem("iputmoney"));
	}
	
	//校园模块
	function setxiaoyuan(xiaoyaun){
		localStorage.setItem("xiaoyaun",JSON.stringify(xiaoyaun));
	}
	function getxiaoyuan(){ 
		return  JSON.parse(localStorage.getItem("xiaoyaun"));
	}
	
	
	
	//学号注册
	slide.prototype.zhuceInfo =function (myUrl,us,ps){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 8000,
			data:{
				username:us,
				password:ps
			},
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				if("nofind"==data.result){
					mui.toast('请检查自己的账号与密码',{duration:'short', type:'div'});
				}else if("error"==data.result){
					mui.toast('获取异常',{duration:'short', type:'div'});
				}else{
					setUser(us);
					setps(ps);
					setUserId(data.result);
					
				}
			},
			error: function(json) {
				mui.toast('网路出旅游去了',{duration:'short', type:'div'});
			}
		});
	}
	
	//手机注册
	slide.prototype.phoneZhuceInfo =function (myUrl,e){
		
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 3000,
			data:{
				phone:e.val()
			},
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				if("noId"==data.result){
					mui.toast('您的手机还未绑定',{duration:'short', type:'div'});
				}else if("error"==data.result){
					mui.toast('网路不太好',{duration:'short', type:'div'});
				}else{
					setPhone(data.result);
				}
			},
			error: function(json) {
				mui.toast('网路出旅游去了',{duration:'short', type:'div'});
			}
		});
	}
	
	//新闻页面
	slide.prototype.xinwen =function (){
		$.ajax({
			type: "get",
			url:"http://data.v.qq.com/videocms/getNewsvideoList.php?ref=pclient&appkey=6UkwV9DeHr9_PC&vsite=new_vshou&ename=new_vs_feature&report=web.news&_=1489307334825",
			async: true,
			timeout:6000,
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				console.log(data);
				setNewsId(0);
				setNews(data.data.content);//保存新聞
			},
			error: function(json) {
//				alert("你的網路出問題了");
			}
		});
	}
	
	//通知页面
	slide.prototype.tongzhi =function (myUrl,myData){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 5000,
			dataType: "jsonp",
			data:myData,
			jsonp: "callback",
			success: function(data) {
//				console.log(data.result);
				setMessage(data.result);
			},
			error: function(json) {
//				alert("你的網路出問題了");
			}
		});
	}
	
	//课程表数据
	slide.prototype.getCourseInfo =function (myUrl,myData){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 15000,
			dataType: "jsonp",
			data:myData,
			jsonp: "callback",
			success: function(data) {
				if("noId"==data.result){
					mui.toast('你的权限不太够',{duration:'short', type:'div'});
				}else if("error"==data.result){
					mui.toast('再试一次',{duration:'short', type:'div'});
				}else{
					console.log(data.result);
					setCourse(data.result);
				}
			},
			error: function(json) {
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}
	
	
	
	//个人信息
	slide.prototype.InitPersonInfo =function (myUrl,myData){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 12000,
			dataType: "jsonp",
			data:myData,
			jsonp: "callback",
			success: function(data) {
				if("noId"==data.result){
					mui.toast('木有找到你',{duration:'short', type:'div'});
				}else if("error"==data.result){
					mui.toast('再试一次',{duration:'short', type:'div'});
				}else{
					setPerson(data.result);
				}
			},
			error: function(json) {
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}
		
		//成绩信息
	slide.prototype.InitAchieve =function (myUrl,myData){
		
		console.log("asdf");
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 10000,
			dataType: "jsonp",
			data:myData,
			jsonp: "callback",
			success: function(data) {
				if("noId"==data.result){
					mui.toast('木有找到你',{duration:'short', type:'div'});
				}else if("error"==data.result){
					mui.toast('再试一次',{duration:'short', type:'div'});
				}else{
					console.log(data.result);
					
					setAchiever(data.result);
//					mui.toast('已经是最新数据~',{duration:'short', type:'div'});
				}
			},
			error: function(json) {
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}
	
	//充值记录
	slide.prototype.InitIputMoney =function (myUrl,myData){
		
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 20000,
			dataType: "jsonp",
			data:myData,
			jsonp: "callback",
			success: function(data) {
				console.log(data.result);
				if("noId"==data.result){
					mui.toast('木有找到你',{duration:'short', type:'div'});
				}else if("error"==data.result){
					mui.toast('再试一次',{duration:'short', type:'div'});
				}else{
					console.log(data.result);
					
					setInputMoney(data.result);
				}
			},
			error: function(json) {
//				alert("sadfdsa");
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}

	//信息的完善
	slide.prototype.InfoAll =function (myUrl,phone,note,id){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 4000,
			dataType: "jsonp",
			data:{
				id:id,
				phone:phone.val(),
				note:note.val()
			},
			jsonp: "callback",
			success: function(data) {
				var person=getPerson();
				person[14]=phone.val();
				person[15]=note.val();
				
				setPerson(person);
				mui.toast('保存成功',{duration:'short', type:'div'});
			},
			error: function(json) {
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}
	//校园通知
	slide.prototype.getCamput =function (myUrl){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 4000,
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				if("error"==data.result){
					mui.toast('再试一次',{duration:'short', type:'div'});
				}else{
					console.log(data.result);
					setxiaoyuan(data.result);
				}
			},
			error: function(json) {
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}
	
	//意見反饋
	slide.prototype.getProblem =function (myUrl,myData){
		$.ajax({
			type: "get",
			url:myUrl,
			async: true,
			timeout: 4000,
			data:myData,
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				if("error"==data.result){
					mui.toast('再试一次',{duration:'short', type:'div'});
				}else{
					mui.toast('感谢你的意见',{duration:'short', type:'div'});
				}
			},
			error: function(json) {
//				mui.toast('你检查网路了吗？',{duration:'short', type:'div'});
			}
		});
	}
	
	
	
	
	
	//新闻页面的触发事件
	slide.prototype.newsAll =function (e){
		try{
		
			var news=getNews();
			
			if(news!=null){
				var index=getNewsId();
				
				var str='<ul class="mui-table-view mui-table-view-chevron"><div class="mui-card niu-card">'+
					'<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url('+news[index].pic_url+')"></div><div class="mui-card-content ">'+
					'<div class="mui-card-content-inner niu-panding-left">'+
					'<p>'+news[index].title+'</p><p style="color: #333;">'+news[index].subtitle+'</p></div></div>'+
					'<div class="mui-card-footer">'+
					'<span>'+news[index].modi_time+'</span></div></div></ul>';
				setNewsId(index+1);
				e.prepend(str);
				
			}else{
				mui.toast('刷新试试',{duration:'short', type:'div'});
			}
		}catch(e){
			setNewsId(0);
			mui.toast('暂时没有新闻',{duration:'short', type:'div'});
		}
	}
	
	//課程表信息
	slide.prototype.InitCourseInfo =function (e){
		e.empty();
		var course=getCourse();
		if(course!=null){
			for(var i=0;i<5;i++){
				var preStr='<div class="app-metro tables" ><div class="app-metro-cell" style="width:9%;border-right: 1px solid #D9D9D9;"><a class="app-metro-cell-inner sd"><span>'+(i+1)+'</span></a></div>';
				for(var j=0;j<6;j++){
					if(course[i][j]!=" "){
						preStr+='<div class="app-metro-cell bg-'+(Math.ceil(Math.random()*10))+' ss"><a class="app-metro-cell-inner" href="#"><p>'+course[i][j]+'</p></a></div>';
					}else{
						preStr+='<div class="app-metro-cell ss"><a class="app-metro-cell-inner" href="#"></a></div>';
					}
				}
				preStr+='<div class="app-metro-cell ss"><a class="app-metro-cell-inner" href="#"></a></div></div>';
				e.append(preStr);
			}
		}else{
			mui.toast('刷新试试',{duration:'short', type:'div'});
		}
		
		
	}
	
	//成绩表
	slide.prototype.scoredInfoAll =function (e1,e2){
		
		var scoreAll=getAchiever();
		if(scoreAll!=null){
			e1.empty();
			e2.empty();
			e1.append('<tr><td>课程名</td><td>成绩</td><td>学分</td></tr>');
			e2.append('<tr><td>课程名</td><td>成绩</td><td>学分</td></tr>');
			
	//		console.log(scoreAll);
			
			for(var i=0;i<scoreAll.length;i++){
				
				var str='<tr><td>'+scoreAll[i].courseName+'</td><td>'+scoreAll[i].percenttage+'</td><td>'+scoreAll[i].credit+'</td></tr>';	
				if(scoreAll[i].semester=="秋季"){
					e2.append(str);
				}else{
					e1.append(str);
				}
			}
		}else{
			mui.toast('刷新试试',{duration:'short', type:'div'});
		}
	}
	
	//初始化充值信息
	slide.prototype.InitInputMoneyInfo =function (e){
		var iputmoney=getInputMoney();
		if(iputmoney!=null){
			e.empty();
			for(var i=0;i<iputmoney.length;i++){
				
				var str='<li class="underline"><div class="justify-content">'+
						'<p class="bold">'+iputmoney[i].subject+'</p><big class="absolute color-6">'+iputmoney[i].money+'</big>'+
						'<p class="ds"><span>'+iputmoney[i].time+'</span></p><span class="absolute money">余額：'+iputmoney[i].balance+'</span></div></li>';
				e.append(str);
			}
		}
	}
	
	//初始化校园通知
	slide.prototype.InitxiaoyuanMessage =function (e){
		
		var xiaoyaun=getxiaoyuan();
		
		console.log(xiaoyaun);
		
		if(xiaoyaun!=null){
			e.empty();
			for(var i=0;i<xiaoyaun.length;i++){
				
				var str='<div class="mui-card"><div class="mui-card-header "><span class="niu-xiaoxi-xiaoyuan-font">'+xiaoyaun[i][2]+'</span></div>'+
					'<div class="mui-card-content"><div class="mui-card-content-inner">'+xiaoyaun[i][0]+'</div>'+
					'</div><div class="mui-card-footer">'+xiaoyaun[i][1]+'<a class="niu-xiaoxi-xiaoyuan-a"><<&nbsp;'+xiaoyaun[i][3]+'&nbsp;>></a></div></div>';
				
				e.append(str);
			}
		}
	}
	
	slide.prototype.getIpAddress =function (){
		return  "120.25.126.36";
//		return  "localhost";
	}
	
	function slide(){}
	 window.echoSlide = slide;
})(window);