define(['jquery'],function($){

	var con1 ='';
	var con2 ='';
	var con3 ='';
	for(var i=0;i<8;i++){
		con1+=`
		<li>
			<a href="###">
				<div class="imgBox">
					<img class="lazy" data-original="imgs/rightcon/200_2001_20170001 (${i}).jpg" style="width:130px;height:130px">
				</div>
			</a>
			<div class="barnndTitleText">
				<a href="###"><p style="height:35px;margin:0">蒂巧品牌2017夏装V领蕾丝拼接收腰荷叶边裙连衣裙5187</p></a>
				<p style="font-size:14px;margin:0;color: #da3e49">¥143</p>
			</div>
		</li>	
		`;
		con2+=`
			<li>
				<a href="###">
					<div class="imgBox">
						<img class="lazy" data-original="imgs/rightcon/200_2001_20170002 (${i}).jpg" style="width:130px;height:130px">
					</div>
				</a>
				<div class="barnndTitleText">
					<a href="###"><p style="height:35px;margin:0">蒂巧品牌2017夏装V领蕾丝拼接收腰荷叶边裙连衣裙5187</p></a>
					<p style="font-size:14px;margin:0;color: #da3e49">¥143</p>
				</div>
			</li>	
		`;
		

		
		$(".right1 .barnndList ul").html(con1);
		$(".right2 .barnndList ul").html(con2);
	}
	for(var l = 0;l<=4;l++){
		con3+=`
			<li>
				<a href="###">
					<div class="imgBox">
						<img class="lazy" data-original="imgs/rightcon/right2-${l}.jpg" style="width:130px;height:130px">
					</div>
				</a>
				<div class="barnndTitleText">
					<a href="###"><p style="height:35px;margin:0">蒂巧品牌2017夏装V领蕾丝拼接收腰荷叶边裙连衣裙5187</p></a>
					<p style="font-size:14px;margin:0;color: #da3e49">¥143</p>
				</div>
			</li>	
		`;
		$(".right3 .barnndList ul").html(con3);
	}
})