define(['jquery'],function($){

	var xxk = $(".wrap6-cont");

	xxk.each(function(){
		var xxks = $(this).find('.titlelist li');
		var scrlb= $(this).find('.scrollbanner');
		var rightC=$(this).find('.rightCon1')
		xxks.on('mouseenter',function(){
			var num =$(this).index();
			scrlb.css({left:num*120});
			rightC.eq(num).show().siblings().hide();
			
			
		});
	})
	
	
})