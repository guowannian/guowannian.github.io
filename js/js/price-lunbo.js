define(['jquery'],function($){
	var liS = $('.bd-ul li');
	var arrowR1=$('.banner-box .next');
	var arrowL1=$('.banner-box .prev');
	var next=0;
	var now=0;
	arrowR1.on('click',function(){
		next++
		next%=liS.length;
		imgSwitch();
	});
	arrowL1.on('click',function(){
		next--
		if(next<0){
		next=liS.length-1;	
		}
		imgSwitch();
	});

	function imgSwitch(){
	//清除之前的动画
	stop(liS[now]);
	stop(liS[next]);
	//图片切换	
	$(liS[now]).fadeOut()
	$(liS[next]).fadeIn()

	now = next;
}


});