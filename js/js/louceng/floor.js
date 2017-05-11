define(['jquery'],function($){
	$(function(){
		var allFloor = $('.floor-item');
		var flag = false;
		//var allFN = $('.floor-nav-item');
		var floorNav =$('.floor-nav');
		var ch = document.documentElement.clientHeight;
		

		var topH =allFloor.eq(0).offset().top;
	
			var floorNavHeight = $('.floor-nav').outerHeight();
			//console.log(floorNavHeight);
			$('.floor-nav').css('marginTop',0-(floorNavHeight/2));


		//运行包含滚动条事件的函数 
		demo();
		
		function demo(){
			$(window).on('scroll',function(){

		
		//获取最后一个楼层的距离顶层的高度
		var winTop= $(window).scrollTop();
		var num = allFloor.eq(-1).offset().top;
		//console.log(allFloor.eq(-1));
		//console.log(num);


				if(flag) return;
			//获取滚动条的高度
			var scrollTop = $('body').scrollTop();
			
			//console.log(scrollTop);
			//第一层在到达屏幕中线以前不会显示出
			if(scrollTop > topH- ch/2 && scrollTop < num){
				//alert(1);
				floorNav.fadeIn();
				//console.log(1);
			}else{
				 floorNav.fadeOut();
				//console.log(2);
			};
			if(scrollTop > (topH - ch/2)-560){
				//alert(1);
				$('.kefu').fadeIn();
				//console.log(1);
			}else{
				 $('.kefu').fadeOut();
				//console.log(2);
			};

			//遍历所有楼层
			allFloor.each(function(i){
				//获取元素的高度和顶层的距离
				var h = $(this).outerHeight();
				var t = $(this).offset().top;
				//判断是否为显示的楼层
				if(t< (scrollTop + ch/2) &&
					(t + h)> (scrollTop + ch/2 )
				 ){
					//i是由each遍历时匹配条件留下来的
					//console.log($('.floor-nav-item'));

					$('.floor-nav-item').eq(i).addClass('active')
					.siblings().removeClass('active');

						
					return;
				}
			});
		});
		};

		
				
		
		$('.floor-nav-item').click(function(){
				//$(window).off('scroll');
				flag = true;
				//获取当前元素下标
				var index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				//console.log(index);
				var t = allFloor.eq(index).offset().top ;
				$('html,body').stop().animate({
					scrollTop:t
				//执行完动画之后在运行函数
				},function(){
					flag = false;
					//demo();
				});
		});
		$('.goTop').click(function(){
			$('body').stop().animate({scrollTop:0});
		})

		$('.kf1').on('mouseenter',function(){
			$('.kefuText').show();
		});
		$('.kf1').on('mouseleave',function(){
			$('.kefuText').hide();
		});
		$('.kf2').on('mouseenter',function(){
			$('.qrcode').show();
		});
		$('.kf2').on('mouseleave',function(){
			$('.qrcode').hide();
		});

	});
})
