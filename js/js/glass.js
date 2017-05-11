require(['../../config'],function(){
	require(['jquery',"jquery.cookie","item"],function($){


	
	var glass = $('.glass');
	var midWrap = $('.middle');
	var filter = $('.filter');
	var largeWrap = $('.large');
	var midImg = $('.middle img');
	var largeImg = $('.large img');
	// console.log(glass);
	//获取盒子距离屏幕左边缘的距离
	var ol = $('.glass').offset().left;
	var ot = $('.glass').offset().top;

	//鼠标在中型盒子上移动
	midWrap.on('mousemove',function(e){
		e = e || window.event;
		// console.log(e.clientX);
		//滤镜的位置
		var l = e.clientX - ol - 100;
		var t = e.clientY - ot - 40;

		//边界处理
		l = l < 0 ? 0 : (l > 152 ? 152 : l);
		t = t < 0 ? 0 : (t > 152 ? 152 : t);

		//更改滤镜位置
		filter.css({left:l});
		filter.css({top:t});
		
		
		//更改大图的位置
		largeImg.css({left:-l*2});
		largeImg.css({top:-t*2});
	});
	//鼠标经过midWrap显示滤镜和大图盒子
	midWrap.on('mouseenter',function(){
		filter.show();
		largeWrap.show();
	});
	midWrap.on('mouseleave',function(){
		filter.hide();
		largeWrap.hide();
	});



	//小图
	var imgs = document.querySelectorAll('.img-wrap img');
	  
	var imgWrap = $('.img-wrap');
	//鼠标点击
	imgWrap.on('click',function(e){

		e = e || window.event;
		//获取事件源
		var target = e.target || e.srcElement;
		//判断事件源是不是图片
		if(target.tagName == 'IMG'){
			//更改中图和大图的src
			var src = target.getAttribute('data-url');
			// console.log(src);
			midImg.attr('src',src);
			largeImg.attr('src',src);
		
		}
	});
	})

})


	
