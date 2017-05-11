define(['jquery'],function($){
	var borderDiv = $('.borderDiv');
	var borderDiv1 = $('.borderDiv_1');
	function borderAll(){
		borderDiv.mouseenter(function(){
			$(this).find('.border-left').stop().animate({height:249},500);
			$(this).find('.border-bottom').stop().animate({width:200},500);
			$(this).find('.border-top').stop().animate({width:200},500);
			$(this).find('.border-right').stop().animate({height:249},500);
		})
		borderDiv.mouseleave(function(){
			$(this).find('.border-left').stop().animate({height:0},500);
			$(this).find('.border-bottom').stop().animate({width:0},500);
			$(this).find('.border-top').stop().animate({width:0},500);
			$(this).find('.border-right').stop().animate({height:0},500);
		})

	};
		function borderAll1(){
		borderDiv1.mouseenter(function(){
			$(this).find('.border-left').stop().animate({height:500},500);
			$(this).find('.border-bottom').stop().animate({width:388},500);
			$(this).find('.border-top').stop().animate({width:388},500);
			$(this).find('.border-right').stop().animate({height:500},500);
		})
		borderDiv1.mouseleave(function(){
			$(this).find('.border-left').stop().animate({height:0},500);
			$(this).find('.border-bottom').stop().animate({width:0},500);
			$(this).find('.border-top').stop().animate({width:0},500);
			$(this).find('.border-right').stop().animate({height:0},500);
		})

	};


	borderAll();
	borderAll1();
})