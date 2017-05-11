/*

*/

define(['jquery','jquery.swiper'],function($,swiper){

	function init(){
		$('.swiper-container').swiper({
			loop: true,//是否无缝
			autoplay: 2000,//自动轮播
			//speed: 500, //切换速度
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		});
	}

	return {
		init: init
	};
});