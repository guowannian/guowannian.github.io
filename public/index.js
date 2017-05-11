/*
	入口文件  处理整个首页的内容
*/


//加载配置文件
require(['config'],function(){

	//核心工作
	require(['jquery','banner'],function($,banner){

		//图表处理
		// hc.init();

		//轮播处理
		banner.init();
	});

});