/*!
	config  配置文件
*/

require.config({
	baseUrl: 'public',
	paths: {
		"jquery": "lib/jquery-1.11.3",
		// "highcharts": "plug/highcharts",
		"jquery.swiper": "plug/jquery.swiper",
		// "handleChart": 'js/handle-chart',
		"banner": "js/banner"
	},
	//处理非AMD规范
	shim: {
		"jquery.swiper": ['jquery']
	// 	// "highcharts": ['jquery']
	}
});