define(['jquery'],function($){

	var con ='';
	
	for(var i = 1; i<=10;i++){
		con+=`
			<li>
				<a href="###">
					<img style="width:94px;height:63px" class="lazy" data-original="imgs/list${i}.jpg">
					<div class="borderLine"></div>
				</a>
			</li>
		`;
		$(".leftList .leftList_c ").html(con);
	}

});