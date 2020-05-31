var ip = 'http://kczl.g60.kechuang.cn/ht/';
var gip = 'http://192.168.1.167:36521/';
var API_result;
var get_DD_name;
var get_DD_tel;
var get_DD_deptName;
var get_DD_title;
var get_DD_Id;
/**
 * 根据变量名获取匹配值
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

$(function () {
    // if( localStorage.getItem("DduserId") == null|| localStorage.getItem("DduserId")=="undefined"){
    if (getQueryString("token") == null || getQueryString("token") == "undefined") { return; }

    $.ajax({
        type: "post",
        url: ip + "DingTalk/sign",
        data: { token: getQueryString("token") },
        dataType: "json",
        success: function (data) {
            if (data.content != null) {
                //清空缓存
                localStorage.removeItem("DingworkPlace");
                localStorage.removeItem("Dingmobile");
                localStorage.removeItem("Dingname");
                localStorage.removeItem("userID");
                localStorage.removeItem("DduserId");
                //localStorage.setItem("departmentName",data.departmentName);
                localStorage.setItem("DingworkPlace", data.content.workStation);
                localStorage.setItem("Dingmobile", data.content.mobile);
                localStorage.setItem("Dingname", data.content.name);
                localStorage.setItem("userID", data.content.id);
                localStorage.setItem("DduserId", data.content.staffId);
            }
        }
        //window.location.href="跳转的url,后边也可以拼接点data中数据作为参数";
    });


    //}

})


function apiAjax(url, data) {
    $.ajax({
        url: ip + url,
        async: false,
        type: 'post',
        data: data,
        success: function (data) {
            API_result = data;
        }, error: function (msg) {
            //alert("请求失败！")
        }
    });

}


function apiJsonAjax(url, data) {
    $.ajax({
        url: ip + url,
        async: false,
        contentType: 'application/json',
        dataType: 'json',
        type: 'post',
        data: data,
        success: function (data) {
            API_result = data;
        }, error: function (msg) {
            //alert("请求失败！")
        }
    });

}


var dataid = localStorage.getItem("userID");
function getUserInfo() {
    $.ajax({
        url: ip + "personcentre/info",
        type: 'post',
        data: {
            userId: dataid
        },
        dataType: "json",
        success: function (data) {

            get_DD_name = data.content.name
            get_DD_tel = data.content.mobile;
            get_DD_deptName = data.content.deptName
            get_DD_title = data.content.title;
            get_DD_Id = data.content.id;
            //清空缓存
            localStorage.removeItem("get_DD_name")
            localStorage.removeItem("get_DD_tel")
            localStorage.removeItem("get_DD_deptName")
            localStorage.removeItem("get_DD_title")
            localStorage.removeItem("get_DD_Id")
            //储存缓存
            localStorage.setItem("get_DD_name", get_DD_name);
            localStorage.setItem("get_DD_tel", get_DD_tel);
            localStorage.setItem("get_DD_deptName", get_DD_deptName);
            localStorage.setItem("get_DD_title", get_DD_title);
            localStorage.setItem("get_DD_Id", get_DD_Id);
        }, error: function (msg) {
            console.log(msg)
        }
    });
}

//判断是手机还是电脑进入   判断是否有缓存
if (localStorage.getItem("get_DD_tel") == null && localStorage.getItem("get_DD_tel") == undefined || localStorage.getItem("get_DD_tel") == "") {
    var system = {};
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {//如果是电脑跳转到

    } else {  //如果是手机,跳转到
        getUserInfo()
    }

}

