define(['jquery','template','jquery.cookie'],function($,template){

/*
 	详情页面js
	
	0、渲染颜色分类(读取数据)
 	1、颜色的切换
 	2、增加数量
 	3、减少数量
 	4、直接修改input
 	5、加入购物车
*/
$(function(){
	var detail = {
		data: {},
		init: function(){
			var _this = this;
			//读取商品数据 (如果json文件格式错误，获取失败)
			$.getJSON('../../json/data.json',function(result){
				//保留数据
				_this.data = result;
				console.log(result);

				var list = template('cart-list',result);
				$('.det_attr').html( list );

				//选中第一个
				var first = $('#priAttr2 em:first');
				first.addClass('cur');
				//获取第一个分类的编号
				var id = first.data('id');
				$('#j_market').html( result.color[id].sale_price);
				$('#j_shichang').html( result.color[id].stock );
			});

			//颜色切换
			this.colorSwitch();

			//增加
			this.increase();
			this.decrease();
			this.input();
			this.addToCart();
		},
		colorSwitch: function(){

			var _this = this;
			$('.det_attr').on('click','em',function(){

				$(this).addClass('cur').siblings().removeClass('cur');
				var id = $(this).data('id');
				$('#j_market').html( _this.data.color[id].sale_price );
				$('#j_shichang').html( _this.data.color[id].stock );
			});
		},
		//数量增加
		increase: function(){
			$('.det_attr').on('click','.jia',function(){

				//拿到当前的数量
				var amount = parseInt( $(this).prev().val() );
				//获取库存
				var stock = 50;
				//判断与库存的关系
				if(amount >= stock)return;
				amount++;
				$(this).prev().val( amount );
			});
		},
		//数量减少
		decrease: function(){
			$('.det_attr').on('click','.jian',function(){
				var input = $(this).parent().find('.amount-input');
				//拿到当前的数量
				var amount = parseInt( input.val() );
				if(amount <= 1) return;
				amount--;
				input.val(amount);
			});
		},
		input: function(){
			$('.det_attr').on('input','.txt',function(){
				var amount = $(this).val();
				if(amount === '') return;
				// 3d  => 3  parseInt()
				amount = parseInt(amount);
				if( isNaN(amount) ){
					amount = 1;
				}

				//判断库存
				var stock = $('.stock-num').html();
				if(amount >= stock){
					amount = stock;
				}
				$(this).val(amount);
			});
			//失焦之后，如果内容为空，更改为1
			$('.det_attr').on('blur','.txt',function(){

				var amount = $(this).val();
				if(amount === ''){
					 $(this).val(1);
				}
				if(amount>=50){
					$(this).val(50);
				}
			});
		},
		addToCart: function(){
			$('.det_attr').on('click','#addTocart',function(){
				var goods = $('#priAttr2 .cur');
				console.log(goods);
				var id = goods.data('id');
				var amount = parseInt( $('.det_attr .txt').val() );

				//读取cookie  做兼容
				var cart = $.cookie('tm-cart') || '{}';
				cart = JSON.parse(cart);
				
				//判断是否已经存在当前商品
				if(!cart[id]){
					//不存在
					cart[id] = {
						id: id,
						amount: amount
					};
				}else{
					cart[id].amount += amount;
				}

				alert('加入成功');


				//重写cookie
				$.cookie('tm-cart',JSON.stringify(cart),{expires: 365,path: '/'});

				console.log( JSON.parse($.cookie('tm-cart')) );

			});
		}
	};
	detail.init();
});


});