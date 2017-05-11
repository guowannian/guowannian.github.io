define(['jquery'],function($){
	var bds=$('.bannerbox-small');
	
	bds.each(function(){
		var liS = $(this).find( '.bd ul li');
		var cirs = $(this).find('.hd span');
		var arrowR1 = $(this).find('.next');
		var arrowL1 = $(this).find('.prev');
		var next=0;
		var now=0;
		var timer;
		//右点击
		arrowR1.on('click',function(){
			next++
			next%=liS.length;
			imgSwitch();
		});
		//左点击
		arrowL1.on('click',function(){
			next--
			if(next<0){
			next=liS.length-1;	
			}
			imgSwitch();
		});
		//圆点点击
		
			
		cirs.on('click',function(){
				next = $(this).index();
				imgSwitch();
		});
	

	    //自动轮播
		function autoPlay(){
		timer=setInterval(function(){
			next++
			next%=liS.length;
			imgSwitch();
			},2500)
		};

		//调用轮播
		autoPlay();
		
		//鼠标进去停止自动轮播
		$(this).on('mouseenter',function(){
			clearInterval(timer);
		});
		//离开开启自动轮播
		$(this).on('mouseleave',function(){
			
			autoPlay();
		});

		//图片变换
		function imgSwitch(){
			//图片切换	
			liS.eq(now).fadeOut()
			liS.eq(next).fadeIn()
			cirs.eq(next).addClass('on').siblings().removeClass('on');
			
			now = next;
		}
	});

});