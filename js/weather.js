function showWin(obj,Hname,Sname){
	$(obj).addClass("active").siblings().removeClass("active");
	$(Hname).hide();
	$(Sname).show();
}
function showItemWin(obj,Hname,Sname){
	if($(obj).hasClass("active")){
		$(obj).find("img").removeClass("active");
		$(Hname).fadeOut();
		$(obj).removeClass("active").siblings().removeClass("active");
		
	}else{
		$(obj).closest("tr").find("img").removeClass("active");
		$(obj).find("img").addClass("active");
	$(obj).addClass("active").siblings().removeClass("active");
	$(Hname).hide();
	$(Sname).fadeIn();
	}
	
}
function showActiveIcon(obj){
	$(obj).closest("div").find(".icon").addClass("active")
}
function hideActiveIcon(obj){
	$(obj).closest("div").find(".icon").removeClass("active")
}
