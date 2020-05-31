var showList=[]; //展示页面的数据
$(function () {
    var userId=localStorage.getItem("userID");
    if(userId==null||userId==""){
        userId="1";
    }
    var data={userId:userId};
    // var data={userId:localStorage.getItem("userID")};
    apiAjax('userCustom/getUserMark',data);
    if(API_result.content.length>0){
        for (var i=0;i<API_result.content.length;i++) {
            var temp=API_result.content[i];
            temp.iconImageUrl="../images/g60/"+temp.iconImageUrl;
            showList.push(temp)
        }
    }else{
        showList=[

            {
                name:"一网通办",
                iconImageUrl:"../images/g60/一网通版.png",
                id:"1",
                htmlUlr:"http://ywtb.g60.gov.cn:8090/g60zwdt/g60/pages/default/home"

            },
            {
                name:"高企自评打分",
                iconImageUrl:"../images/g60/高企自评打分.png",
                id:"2",
                htmlUlr:"http://47.101.195.208/web/html/questionnaire/questionnaireList.html"

            },{
                name:"文献检索",
                iconImageUrl:"../images/g60/文献检索.png",
                id:"8",
                htmlUlr:"http://47.101.195.208/web/html/zscqfw/zscqfw_wxjs.html"

            },{
                name:"专利检索",
                iconImageUrl:"../images/g60/专利检索.png",
                id:"9",
                htmlUlr:""

            },{
                name:"仪器共享",
                iconImageUrl:"../images/g60/仪器共享.png",
                id:"23",
                htmlUlr:"http://47.101.195.208/web/html/zygx/zygxInstrument.html"

            },{
                name:"专家人才",
                iconImageUrl:"../images/g60/专家人才.png",
                id:"34",
                htmlUlr:"module/expertList.html"

            },
            {
                name:"成果中心",
                iconImageUrl:"../images/g60/成果中心.png",
                id:"51",
                htmlUlr:""

            }

        ];
    }

})
// var vm = new Vue({
//     el: "#app",
//     data: {
//         service_all:showList,
//     },
//     created: function() {
//     },
//
// })