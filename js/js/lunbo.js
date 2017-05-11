/*
	淡入淡出轮播原理：

	图片切换时，当前图片慢慢隐藏，下一张图片慢慢显示（改变透明度）

	1、左右切换
	2、自动轮播
	3、鼠标悬停（经过停止自动轮播，离开继续自动轮播）
	4、小圆圈经过切换图片

	核心：
		找到下一次显示的图片的下标（next值）

		图片切换：
			图片切换
			小圆圈跟随
			改变now的值
*/

//获取元素
var imgs = document.querySelectorAll('.img-wrap img');
var arrowR = document.querySelector('.banner .arrow-right');
var arrowL = document.querySelector('.banner .arrow-left');
var banner = document.querySelector('.banner');
var circles = document.querySelectorAll('.banner .circle-item');

//记录当前图片和下一张图片
var now = 0,
	next = 0;

//定时器
var timer;

//给【下一张】添加点击事件
arrowR.onclick = function(){
	next++;
	next %= imgs.length;
	imgSwitch();
}
//给【上一张】添加点击事件
arrowL.onclick = function (){
		next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgSwitch();


};

//鼠标经过小圆圈切换图片
for(var i=circles.length-1; i>=0; i--){
	circles[i].index = i;
	circles[i].onmouseenter = function(){
		next = this.index;
		imgSwitch();
	}
}


//自动轮播
autoPlay();

//鼠标悬停   鼠标移动到轮播上时，停止自动轮播(清除定时器)
banner.onmouseenter = function(){
	clearInterval(timer);
}

//鼠标离开进行自动轮播
banner.onmouseleave = function(){
	autoPlay();
}

//自动轮播函数
function autoPlay(){
	timer = setInterval(function(){
		next++;
		next %= imgs.length;
		imgSwitch();
	},2500);
}

//图片切换
function imgSwitch(){
	//清除之前的动画
	stop(imgs[now]);
	stop(imgs[next]);
	//图片切换
	animate(imgs[now],{opacity: 0},600);
	animate(imgs[next],{opacity: 1},600);

	//小圆圈跟随
	removeClass(circles,'active');
	addClass(circles[next],'active');

	now = next;
}

function animate(elem,json,time,type,fn){
	time = time || 500;
	type = type || 'linear';
	elem.timer = {
		length: 0
	};
	//console.log(timer);
	for(let style in json){

		//获取初值
		let start = parseFloat( css(elem,style) ) || 0;
		//变化量
		let c = parseFloat( json[style] ) - start;

		//运动开始时的时间
		let startTime = new Date();

		elem.timer.length++;
		elem.timer[style] = setInterval(function(){
			//获取当前时刻
			var nowTime = new Date();
			//求出从运动开始到现在的时间
			var t = Math.min(nowTime - startTime,time);
			//通过运动曲线获取当前时刻的样式值
			var val = tween[type](t,start,c,time);
			elem.style[style] = val + (style=='opacity'?'':'px');
			//判断当前样式是否运动完成
			if(t >= time){
				clearInterval( elem.timer[style] );
				//样式运动完成，删除当前的标志
				delete elem.timer[style];
				elem.timer.length--;
				//判断是否运动结束（所有的样式运动完毕）
				if(elem.timer.length <= 0){
					fn && fn();
				}
			}
		},13);
	}
}
/*
	获取元素的样式
*/
function css(elem,type){
	//如果浏览器支持 getComputedStyle，使用getComputedStyle获取
	if(window.getComputedStyle){
		return window.getComputedStyle(elem)[type];
	}
	return elem.currentStyle[type];
}
/* 
	运动曲线函数

	参数说明：
		t:已经运动的时间（从运动开始到现在经过的时间）
		b:初始值（start）（运动前的样式值）
		c:变化量（end-start）（终值和初值的差）
		d:持续时间（总时间）（运动时间）

	返回值：当前时间的样式值
*/
var tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	}
}

/**
	去除元素的class
*/
function removeClass(elem,classN){
	//做兼容  把单个元素转化为数组（可遍历）
	elem = (elem.length == undefined) ? [elem] : elem;

	var reg = new RegExp('(^|\\s)' + classN + '(\\s|$)');

	//循环
	for(var i=elem.length-1; i>=0; i--){
		elem[i].className = elem[i].className.replace(reg,' ');
	}
}

/**
	给一个或者多个元素添加class
*/
function addClass(elem,classN){
	//做兼容  把单个元素转化为数组（可遍历）
	elem = (elem.length == undefined) ? [elem] : elem;
	
	var reg = new RegExp('(^|\\s)' + classN + '(\\s|$)');
	//循环  给每个元素添加class
	for(var i=elem.length-1; i>=0; i--){
		if(!reg.test( elem[i].className) ){
			elem[i].className += ' ' + classN;
		}
	}
}
/**
	清除元素的动画
	@param
		elem 元素
*/
function stop(elem){
	for(var i in elem.timer){
		i != 'length' && clearInterval(elem.timer[i]);
	}
}