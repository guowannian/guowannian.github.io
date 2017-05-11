define(['jquery'],function($){
	
	var con='';
	var con1='';
	for(var i = 0;i<=5;i++){
			con+=`
					<dd>
					<div class="borderDiv">
						<div class="Adimg">
						<a href="###"><img style="width:142px;height:142px" class="lazy" data-original="imgs/price-${i}.jpg"></a>
						</div>
						<div class="hd-Text">
							<p class="hdTitle"><a href="###">飘柔家庭护理兰花长效清爽去屑</a></p>
							<div class="hd-price">
								<div class="price">
									<p class="jiage">
										<span>¥&nbsp;</span>
										<span class="fontSize_22" style="font-size:22px">39</span>.00
									</p>
									<p class="yuanjia">¥56</p>
								</div>
								<div class="dazhe">9.9折</div>
							</div>
						</div>
						<div class="border-left"></div>
						<div class="border-bottom"></div>
						<div class="border-top"></div>
						<div class="border-right"></div>
					</div>
					</dd>
			`;
			con1+=`<dd>
					<div class="borderDiv">
						<div class="Adimg">
						<a href="###"><img style="width:142px;height:142px" class="lazy" data-original="imgs/price1-${i}.jpg"></a>
						</div>
						<div class="hd-Text">
							<p class="hdTitle"><a href="###">飘柔家庭护理兰花长效清爽去屑</a></p>
							<div class="hd-price">
								<div class="price">
									<p class="jiage">
										<span>¥&nbsp;</span>
										<span class="fontSize_22" style="font-size:22px">108</span>.00
									</p>
									<p class="yuanjia">¥128</p>
								</div>
								<div class="dazhe">6.8折</div>
							</div>
						</div>
						<div class="border-left"></div>
						<div class="border-bottom"></div>
						<div class="border-top"></div>
						<div class="border-right"></div>
					</div>
					</dd>`;

			$('.bd-ul .price_1').html(con);
			$('.bd-ul .price_2').html(con1);
	};
});