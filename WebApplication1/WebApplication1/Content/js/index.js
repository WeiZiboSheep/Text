$(function(){

	setTimeout(function(){
		// 进入页面两秒显示弹窗
		$('.openwin').fadeIn();
		// 进入考试显示弹窗
		$('.describe').fadeIn();
	},2000);

	// 进入页面弹窗关闭
	$('.yes_btn').click(function(){
		$('.openwin').hide();
	})
	$('.no_btn').click(function(){
		$('.openwin').hide();
	})

	// 伸缩答题卡
	$(".card").click(function(){
		var dtcon = $(this).parents(".listcard").find(".cardcon");
		if ($(this).hasClass('cardhide')){
			$(this).removeClass('cardhide');
			dtcon.slideDown();
		}else{
			$(this).addClass('cardhide');
			dtcon.slideUp();
		}
	})
	//交卷弹窗
	$('.finish').click(function(){
		$('.jj1').show();
	})
	$('.showjj2').click(function(){
		$('.jj1').hide();
		$('.jj2').show();
	})
	$('.yesfinish').click(function(){
		$('.exam_win').hide();
		window.location.href='4-end.html';
	})
	// 帮助弹窗
	$('.help').click(function(){
		$('.helpcon').show();
	})
	// 关闭弹窗
	$('.know').click(function(){
		$('.exam_win').hide();
	})
	$('.goback_topic').click(function(){
		$('.img_win').hide();
	})
	// 展示图片
	$('.topic_showimg').click(function(){
		$('.img_win').show();
	})
	// 图片切换执行
	$(".previmg").click(function() {
		previmg();
	});
	$(".nextimg").click(function() {
		nextimg();
	});
})

// 键盘事件
$(document).keydown(function(event){
	// 向上翻图片
	if(event.keyCode == 81){
		previmg();
	// 向下翻图片
	}else if (event.keyCode == 65){
		nextimg();
	//打开计算机	
	}else if(event.keyCode == 98){
		showCalc();
	//打开帮助
	}else if(event.keyCode == 99){
		$('.helpcon').show();
	// 打开交卷	
	}else if(event.keyCode == 100){
		$('.jj1').show();
	}
});

// 点击图片切换
var i = 0;
var piclis = $(".img_win_img .pic li");
$('.imgsum').html(piclis.length);
function previmg() {
	i--;
	if (i < 0) {
		i = piclis.length-1;
	}
	$(".img_win_img .pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
	$('.imgnum').html(piclis.eq(i).index()+1);
}
function nextimg() {
	i++;
	if (i >= piclis.length) {
		i = 0;
	}
	$(".img_win_img .pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
	$('.imgnum').html(piclis.eq(i).index()+1);
}

// 计算器
function showCalc() {
	if (document.getElementById("calc")) {
		$("#calc").show()
	} else {
		var a = document.createElement("div");
		a.id = "calc";
		$(".start_exam_left").append(a);
		$("#calc").css({"top":"-600px","left":"50%","marginLeft":"-110px"});
		$("#calc").calculator({
			movable: true,
			width: 220,
			height: 260,
			defaultOpen: false
		});
		$("#calc").show()
	}
}

//倒计时
var intDiff = parseInt(6000);//倒计时总秒数量
function timer(intDiff){
	window.setInterval(function(){
		var day=0,
		hour=0,
		minute=0,
        second=0;//时间默认值    
        if(intDiff > 0){
        	day = Math.floor(intDiff / (60 * 60 * 24));
        	hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        	minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        	second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      }else{
      	//当时间耗尽，跳入结束页面
      	location.href = "9-end.html"
      }
      $("#countdown").html('0'+hour+'时'+minute+'分'+second+'秒');
      intDiff--;
  }, 1000);
} 
$(function(){
	timer(intDiff);
});