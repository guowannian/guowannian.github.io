/*
	配置文件
*/

require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "lib/jquery-1.11.3",
		"lazyload":"plug/jquery.lazyload",
		"bootstrap": "lib/bootstrap.min",
		"layer": "plug/layer/layer",
		"item":"js/item",
	
		"template": "plug/template",
		"lunbo": "js/lunbo",
		"price":"js/price",
		"border":"js/border",
		"price-lunbo":"js/price-lunbo",
		"leftList":"js/louceng/leftList",
		"bd-lunbo":"js/louceng/bd-lunbo",
		"xuanxiangka":"js/louceng/xuanxiangka",
		"rightCon":"js/louceng/rightCon",
		"floor":"js/louceng/floor",
		"jquery.cookie":"plug/jquery.cookie",
		"glass":"js/glass"
		
		

	},
	shim: {
		"layer": ['jquery'],
		"bootstrap": {
			deps: ['jquery'],
			exports: "Bootstrap"
		},
		"lazyload": ['jquery'],
		"jquery.cookie": ['jquery']
		
	}
});