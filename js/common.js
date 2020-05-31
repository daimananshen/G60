function showWin(obj, Hname, Sname) {

	$(obj).addClass("active").siblings().removeClass("active");
	$(Hname).hide();
	$(Sname).show();
}
function NewshowWin(obj, Hname, Sname,threeName) {

    $(obj).addClass("active").siblings().removeClass("active");
    $(Hname).hide();
    $(Sname).show();
    $(threeName).hide();

}


function loginDialog() {
    var info = document.getElementById("info");
    var btnArray = ['否', '是'];
    mui.confirm('您未登录,是否登录？', '提示！', btnArray, function(e) {
        if (e.index == 1) {
//         window.location.href = "http://kc.kgxj.haikou.gov.cn/yedao/html/login.html"
//          return
		android.login()
        } else {
            mui.toast("您已取消")
            return
        }
    })
}
function showItemWin(obj, Hname, Sname) {
	if($(obj).hasClass("active")) {
		$(obj).find("img").removeClass("active");
		$(Hname).fadeOut();
		$(obj).removeClass("active").siblings().removeClass("active");

	} else {
		$(obj).closest("tr").find("img").removeClass("active");
		$(obj).find("img").addClass("active");
		$(obj).addClass("active").siblings().removeClass("active");
		$(Hname).hide();
		$(Sname).fadeIn();
	}

}
/**
 * 调用android Toast方法
 * @param {Object} msg
 */
function showToast(msg) {
	android.showToast(msg);
}

function camera() {
	android.camera();
}

function update() {
	android.update();
}
function faxian() {
	android.faxian();
}

function getregId(){
    //
    var a = android.getregId();
    // mui.toast(a,5000);
    return a;
    //alert(android.getregId());
}

//获取经纬度方法
function getCoordinate(){
    //
    var a = android.getCoordinate();
    // mui.toast(a,1000);
    var b=a.split('|')
    return b;
    //alert(android.getregId());
}

function getYuyin(){
    var a = android.getYuYin();
    return a;
}



function yuyin() {
	android.yuyin();
}

function msglist(){
	android.msglist();
}

function openCarcme() {
	android.openCarcme();
}
function checkPostionPermission(){
	 android.checkPostionPermission();
}

function openCarcme2() {
	android.openCarcme2();
}

function openCarcme3() {
	android.openCarcme3();
}


function qingchu() {
	android.clear();
	setTimeout("showToast('清除成功')",1000);
}

function config(tel) {
	android.config(tel);
}

function chatlogin(chatName,pwd,otherName) {
	android.chatlogin(chatName,pwd,otherName);
}

function chat(chatName,pwd,otherName) {
	android.chat(chatName,pwd,otherName);
}

function diallPhone(tel) {
	android.diallPhone(tel);
}


function watch(cid,tel,phone) {
	android.watch(cid,tel,phone);
}


function form() {
	android.form();
}
function findExpert() {
	android.findExpert();
}
function downTxt(url) {
	android.downTxt(url);
}
function downList() {
	android.downList();
}


function showActiveIcon(obj) {
	$(obj).closest("div").find(".icon").addClass("active")
}

function hideActiveIcon(obj) {
	$(obj).closest("div").find(".icon").removeClass("active")
}



function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}

/**
 * 获取index新闻资讯
 */
function getNewsInfo(params, callback) {
	showLoading();
	var url = "http://kc.kgxj.haikou.gov.cn:7654/News/getNewsList";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			Type: params.type,
			pageSize: params.pageSize,
			pageIndex: params.pageIndex,
			title:params.title

		},
		dataType: "json",
		success: function(data) {
			hideLoading();
			callback(data);
		}
	})
}

function getTuiguang(params, callback) {
	showLoading();
	var url = "http://kc.kgxj.haikou.gov.cn:7654/Tuiguang/getAll";
//	var url = "http://10.7.254.18:7654/Tuiguang/getAll";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			status:params.status,
			telphone:params.telphone,
			type:params.type
		},
		dataType: "json",
		success: function(data) {
			hideLoading();
			callback(data);
		}
	})
}

/**
 * 获取新闻资讯详情信息
 */
function TuiguanggetById(id, callback) {
	var url = "http://kc.kgxj.haikou.gov.cn:7654/Tuiguang/getById";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			id: id
		},
		dataType: "json",
		success: function(data) {
			callback(data);
		}
	})
}

function getGongQiuByPerson(params, callback) {
	showLoading();
	var url = "http://kc.kgxj.haikou.gov.cn:7654/GongQiu/getGongQiuByPerson";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			telphone: params.telphone,
			status:params.status

		},
		dataType: "json",
		success: function(data) {
			hideLoading();
			callback(data);
		}
	})
}

function deleById(params, callback) {
	showLoading();
	var url = "http://kc.kgxj.haikou.gov.cn:7654/GongQiu/deleteById";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			id: params.id
		},
		dataType: "json",
		success: function(data) {
			hideLoading();
			callback(data);
		}
	})
}
/**
 * 获取cms新闻资讯
 */
function getCMSNewsInfo(params, callback) {
    showLoading();
    var url = "http://kc.kgxj.haikou.gov.cn/ht/cms/getCmsNews";
    // var url = "http://127.0.0.1:9090/cms/getCmsNews";
    $.ajax({
        type: "post",
        url: url,
        data: {
            size: params.pageSize,
            page: params.pageIndex,
            columnId:params.columnId,
            channelId:"",
            areaCode:params.areaCode,
            keyword:params.keyword
        },
        dataType: "json",
        success: function(data) {
            hideLoading();
            callback(data);
        }
    })
}


/**
 * 首页获取cms新闻资讯
 */
function getCMSNewsInfos(params, callback) {
    var url = "http://kc.kgxj.haikou.gov.cn/ht/cms/getCmsNews";
    $.ajax({
        type: "post",
        url: url,
        data: {
            size: params.pageSize,
            page: params.pageIndex,
            columnId:params.columnId,
            channelId:"",
            areaCode:""
        },
        dataType: "json",
        success: function(data) {
            hideLoading();
            callback(data);
        }
    })
}




/**
 * 获取新闻资讯详情信息
 */
function getNewsDetail(id, callback) {
	var url = "http://kc.kgxj.haikou.gov.cn:7654/News/getNewsById";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			id: id
		},
		dataType: "json",
		success: function(data) {
			callback(data);
		}
	})
}
/**
 * 获取新闻资讯详情信息
 */
function getCMSNewsDetail(id, callback) {
    var url = "http://kc.kgxj.haikou.gov.cn/ht/cms/getCmsNewsById";
    $.ajax({
        type: "post",
        url: url,
        data: {
            cmsId: id
        },
        dataType: "json",
        success: function(data) {
            callback(data);
        }
    })
}
/**
 * 获取天气信息
 * @param {Object} city
 * @param {Object} callback
 */
function getWeatherInfo(city, callback) {
	var url = "http://kc.kgxj.haikou.gov.cn/yedao_int/tianqi/selectTianqi";
	$.ajax({
		type: "GET",
		url: url,
		data: {
			City: city
		},
		dataType: "json",
		success: function(data) {
			callback(data);
		}
	})
}
function newGetWeatherInfo(address,callback){
	var url = "http://kc.kgxj.haikou.gov.cn/yedao_int/tianqi/getCurrentweather";
	$.ajax({
		type: "post",
		url: url,
		traditional:true,
		data: {
			address:address,
			flag:"0"
		},
		dataType: "json",
		success: function(data) {
			callback(data);
		}
	})
}
function GetFutureWeatherInfo(address,callback){
	var url = "http://kc.kgxj.haikou.gov.cn/yedao_int/tianqi/getCurrentweather";
	$.ajax({
		type: "post",
		url: url,
		traditional:true,
		data: {
			address:address,
			flag:"1"
		},
		dataType: "json",
		success: function(data) {
			callback(data);
		}
	})
}

$(function() {
	$(".backBtn").click(function() {
		history.go(-1)
	})
	$(".validateItem").keyup(function() {
		var f = true;
		$(".validateItem").each(function() {
			if($(this).val() == "") {
				f = false;
			}
		})
		if(f == true) {
			$(".defaultBtn").addClass("completeBtn");
		} else {
			$(".defaultBtn").removeClass("completeBtn");
		}
	})
})

//获取当前日期
function currentDate() {
	var myDate = new Date();
	myDate.getYear(); //获取当前年份(2位)
	myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	myDate.getMonth(); //获取当前月份(0-11,0代表1月)
	myDate.getDate(); //获取当前日(1-31)
	return(myDate.getMonth() + 1) + "-" + myDate.getDate();
}

//跳转至外部嵌套页面
function toIframe(title, url) {
	var encodeUrl = encodeURI(url);
	window.location.href = "iframe.html?title=" + title + "&url=" + encodeUrl;
}

/**
 * 显示加载效果
 */
function showLoadings() {
	$("body").append('<div id="mask"></div><div class="loader"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>');
}

function showLoading() {
    $("body").append('<div id="mask"></div><div class="loader"><img src="../../images/loading.gif" style="width: 15vw;margin-left: 10vw"> </div>');
}

/**
 * 隐藏加载效果
 */
function hideLoading() {
	$("#mask").remove();
	$(".loader").remove();
}

var doscroll = function() {
	var $parent = $('.js-slide-list');
	var $first = $parent.find('li:first');
	var height = $first.height();
	$first.animate({
		marginTop: -height + 'px'
	}, 500, function() {
		$first.css('marginTop', 0).appendTo($parent);
	});
};
setInterval(function() {
	doscroll()
}, 5000);
//cookie

var cookie = {
    set:function(key,val,time){//设置cookie方法
        var date=new Date(); //获取当前时间
        var expiresDays=time;  //将date设置为n天以后的时间
        date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
        document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
    },
    get:function(key){//获取cookie方法
        /*获取cookie参数*/
        var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
        var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
        var tips;  //声明变量tips
        for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
            var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips=arr[1];   //将cookie的值赋给变量tips
                break;   //终止for循环遍历
            }
        }
        return tips;
    },
    delete:function(key){ //删除cookie方法
        var date = new Date(); //获取当前时间
        date.setTime(date.getTime()-10000); //将date设置为过去的时间
        document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
    }
}