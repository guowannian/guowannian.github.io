require(['../config'],function(){
	require(['jquery','lazyload',"lunbo","price","border","price-lunbo","leftList","bd-lunbo","xuanxiangka","rightCon","floor","jquery.cookie","glass"],function($,lunbo,price,floor){
	
		$('img.lazy').lazyload({
			
		});

		var userinfo = $.cookie('userinfo');
		
		//如果有用户信息
		if(userinfo){
			//将json字符串转化为json对象
			userinfo = JSON.parse(userinfo);
			//用户处于登录状态,更改信息
			if(userinfo.login_status){
				$('.user').html( userinfo.account + '，<a href="javascript:;" class="logout">退出</a>' );
			}else{
				$('.user').html( userinfo.account + '，<a href="login.html">请登录</a>,<a href="register.html">免费注册</a>' );
			}
		}
		console.log(userinfo);
		//退出
		$('.logout').click(function(){
			var info = {
				account: userinfo.account,
				login_status: 0
			};
			$.cookie('userinfo',JSON.stringify(info),{expires: 365,path: '/'});
			location.href = "login.html";
		});
	});
});
