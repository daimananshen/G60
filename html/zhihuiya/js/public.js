$(function(){

    // BACK TOP
	$(".back-top").click(function(){
    	$('html,body').animate({scrollTop:0},500); 
    })

	//TAB
	$(".js-tab-box").each(function(i){
		$(this).attr("id","js-tab-box-"+i);
	})
	
	$(".js-tab").each(function(i){
		$(this).attr("id","js-tab-"+i);
	
		$(this).children("span,a,li").click(function(){
	
			$(this).addClass("active").siblings().removeClass("active");
			
			var index = $(this).index(); 
			
			$("#js-tab-box-"+i).find(".js-tab-con").eq(index).addClass("active").siblings().removeClass("active");
			
		})
	})
	
	
	$(".fixed-sub .close").click(function(){
    	$('.fixed-sub').addClass("active");
   })
	
	
	//  ========== 
	//  = MB-MENU = 
	//  ========== 
	$(".js-mb-nav").click(function(){
		if (!$(this).hasClass("active")) {
			$(this).addClass("active");
			$(".js-mb-menu").animate({"left":"30%"},200);
			$(".page-wrap").animate({"right":"70%"},200);
			$(".mb-header").animate({"right":"70%"},200);
			$(".mb-footer").animate({"right":"70%"},200);
			$(".shade").show();
		}else {
			$(this).removeClass("active");
			$(".js-mb-menu").animate({"left":"100%"},200);
			$(".page-wrap").animate({"right":"0"},200);
			$(".mb-header").animate({"right":"0"},200);
			$(".mb-footer").animate({"right":"0"},200);
			$(".shade").hide();
		}
	});
	
	$(".shade").click(function(){
		$(this).hide();
		$(".js-mb-nav").removeClass("active");
		$(".js-mb-menu").animate({"left":"100%"},200);
		$(".page-wrap").animate({"right":"0"},200);
		$(".mb-header").animate({"right":"0"},200);
		$(".mb-footer").animate({"right":"0"},200);
	});
	
	$(".js-mb-menu li").each(function(){
		var menuSlide = $(this).children(".menu-slide");
		
		if(menuSlide.length){
			menuSlide.prev().addClass("js-slide-bar haschild default");
		};
	});
	
	$(".js-slide-bar").click(function(){
		if ($(this).next(".menu-slide").css("display") == "none") {
			$(this).next(".menu-slide").slideDown(200).parent().siblings().find(".menu-slide").slideUp(200);;
			$(this).removeClass("default").addClass("active").parent().siblings().children(".haschild").removeClass("active").addClass("default");
		}else{
			$(this).next(".menu-slide").slideUp(200);
			$(this).removeClass("active").addClass("default");
		}
	});
	
	
	
	//  ========== 
	//  = INDEX = 
	//  ========== 
	var mySwiper = new Swiper('.banner .swiper-container',{
		prevButton:'.banner .swiper-button-prev',
		nextButton:'.banner .swiper-button-next',
		loop:true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	})
	
	
	$(".home-case .slick").slick({
		autoplay:true,
	    slidesToShow: 4,
	    slidesToScroll:1,
	    dots:false,
		arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
			    slidesToShow: 1,
			    slidesToScroll:1,
			    dots:false,
			    arrows:true
		      }
		    }
		]
	});
	
	
	
	
	//MOBILE
	$(".mb-banner .slick").slick({
		autoplay:true,
		autoplaySpeed:3000,
	    slidesToShow: 1,
	    slidesToScroll:1,
	    dots:true,
	    arrows:false
	}); 
	
	
	
	
	//CASE
	$('.video-button').click(function(){
		$('.pop').fadeIn("fast");
		$('.pop video').trigger("play");
	})
	
	$('.pop .close').click(function(){
		$('.pop video').attr("src","");
		$('.pop video').trigger("pause");
		$('.pop').hide();
	})

    $(".pop").click(function(event){	
		$('.pop video').attr("src","");
		$('.pop video').trigger("pause");
		$('.pop').hide();
	});
	
	$(".pop .content").click(function(event){	
		event.stopPropagation();	
	});
	
	
	$(".case-drop-tit").click(function(event){	
		$(this).toggleClass("active");
		$(".case-drop-down").fadeToggle("fast");
	});
	
	$(".case-drop-down .close").click(function(event){	
		$(".case-drop-down").fadeOut("fast");
	});
 


	//CASE
	$(document).ready(function() {	
		tth = $('.case-box').offset().top;
		tth2=$(".case-detail .right").innerHeight();
		
		$(window).scroll(function(){
			s = $(document).scrollTop();	
			if(s > tth - 10 && s < tth2/2+tth){
				$('.case-box').addClass("fx");
			}else{
				$('.case-box').removeClass("fx");
			}
		})
	});
	
	
	
	
	//ACTIVITY
	$(".filter-mobile .tab .item").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index(); 	
		$(".filter-mobile .tabcon .con").eq(index).slideToggle().siblings().hide();
	})
	
	
	
	
	//APPLY
	$(".apply-item .item").click(function(event){	
		$(this).toggleClass("active");
		$(this).parents("li").parents("ul").siblings(".left").children(".item").removeClass("active");
	});
	
	
	
	//about
	$(".value-box .slick").slick({
		autoplay:true,
	    slidesToShow: 3,
	    slidesToScroll:1,
	    dots:false,
		arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
			    slidesToShow: 1,
			    slidesToScroll:1,
			    dots:true,
			    arrows:false
		      }
		    }
		]
	});
	
	
	//CASE
	$('.value-box .box').click(function(){
		$(".value-pop img").attr("src",($(this).find(".img").attr('date-src')));
		$(".value-pop .tit").text($(this).find(".tit span").html());
		$(".value-pop .des").html($(this).find(".hide").html())
		$(".value-pop").fadeIn("fast");
	})
	
	$('.value-pop .close').click(function(){
		$('.value-pop').hide();
	})

    $(".value-pop").click(function(event){	 
		$('.value-pop').hide();
	});
	
	$(".value-pop .content").click(function(event){	
		event.stopPropagation();	
	});
	
	
	
	//HONOR
	$(".honor-box .slick-for").slick({
		autoplay:false,
		autoplaySpeed:4000,
	    slidesToShow: 1,
	    slidesToScroll:1,
	    dots:false,
	    arrows:false,
	    infinite:false,
	    asNavFor: '.honor-box .slick-nav'
	});
	
	 
    $(".honor-box .slick-nav").slick({
		autoplay:false,
		autoplaySpeed:4000,
	    slidesToShow: 4,
	    slidesToScroll:1,
	    dots:false,
	    arrows:true,
		focusOnSelect: true,
		infinite:false,
		asNavFor: '.honor-box .slick-for',
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
				autoplaySpeed:4000,
			    slidesToShow: 3,
			    slidesToScroll:1,
			    dots:false,
			    arrows:true,
				focusOnSelect: true,
				infinite:false
		      }
		    }
		]
	});
	
	
	
	//HISTORY
	$('.history-box li .item .bt').click(function(){
		$(this).parents().parent("li").toggleClass("active").siblings("li").removeClass("active");
	})
	
	//JOIN
	$('.join-list li .tit').click(function(){
		$(this).next(".con").slideToggle();
		$(this).parents("li").toggleClass("active");
		$(this).parents("li").siblings("li").removeClass("active");
		$(this).parents("li").siblings("li").children(".con").slideUp();
	})
	
	$(".mien-box .video-slick").slick({
		autoplay:false,
	    slidesToShow: 1,
	    slidesToScroll:1,
	    dots:false,
		arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
			    slidesToShow: 1,
			    slidesToScroll:1,
			    dots:true,
				arrows:false
		      }
		    }
		]
	});
	
	$(".mien-box .img-slick").slick({
		autoplay:false,
	    slidesToShow: 2,
	    slidesToScroll:1,
	    dots:false,
		arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
			    slidesToShow: 2,
			    slidesToScroll:1,
			    dots:true,
				arrows:false
		      }
		    }
		]
	});
	
	
	
	//PRO
	$(".patent-scene .slick").slick({
		autoplay:false,
		autoplaySpeed:4000,
	    slidesToShow: 4,
	    slidesToScroll:1,
	    dots:false,
	    arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
				autoplaySpeed:4000,
			    slidesToShow: 2,
			    slidesToScroll:1,
			    dots:true,
			    arrows:false
		      }
		    }
		]
	});
	
	$(".analysis-chart .slick").slick({
		autoplay:false,
		autoplaySpeed:4000,
	    slidesToShow: 1,
	    slidesToScroll:1,
	    dots:false,
	    arrows:true,
	    fade:true
	});
	
	
	$(".analysis-scene .slick").slick({
		autoplay:false,
		autoplaySpeed:4000,
	    slidesToShow: 4,
	    slidesToScroll:1,
	    dots:false,
	    arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
				autoplaySpeed:4000,
			    slidesToShow: 1,
			    slidesToScroll:1,
			    dots:true,
			    arrows:false
		      }
		    }
		]
	});
	
	
	$(".train-scene .slick").slick({
		autoplay:false,
		autoplaySpeed:4000,
	    slidesToShow: 3,
	    slidesToScroll:1,
	    dots:false,
	    arrows:true,
	 	responsive: [
		    {
		      breakpoint: 780,
		      settings: {
		      	autoplay:false,
				autoplaySpeed:4000,
			    slidesToShow: 1,
			    slidesToScroll:1,
			    dots:true,
			    arrows:false
		      }
		    }
		]
	});
})
