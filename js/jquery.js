$(function(){
	// 菜单栏
	$(".navWrap").find("a").mouseover(function(){
		$(this).find(".hei").hide();
		$(this).find(".bai").show();
		$(this).addClass("navActive");
		$(this).parent().find(".nav-list").show();
	});
	$(".navWrap").find("li").mouseleave(function(){
		$(this).find(".bai").hide();
		$(this).find(".hei").show();
		$(this).find("a").removeClass("navActive");
		$(this).parent().find(".nav-list").hide();
	});

	// 列表资讯速递
	$(window).scroll(function(){
        if ($(window).scrollTop()>180){
            $(".zixun").css("position","fixed").css("top","0");
        }else{
        	$(".zixun").css("position","relative").css("top","0");
        }
    });

	//广播播报
    var timer=setInterval(function(){
        AutoScroll("#scrollDiv");
	},2500);

    function AutoScroll(obj){
        $(obj).find("ul:first").animate({
            marginTop:"-25px"
        },800,function(){
            $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        });
    }
    $("#scrollDiv").mouseover(function(){
        clearInterval(timer);
	});
    $("#scrollDiv").mouseleave(function(){
        timer=setInterval(function(){
            AutoScroll("#scrollDiv");
        },2500);
    });

    //换一批
	$(".hyp").click(function(){
		$(this).parent().parent().find("ul").find("li").toggle();
	})
});