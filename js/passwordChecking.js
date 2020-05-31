

//不能连续字符（如123、abc）连续3位或3位以上
 function LxStr(str){
    var arr = str.split('');
    var flag = true;
    for (var i = 1; i < arr.length-1; i++) {
        var firstIndex = arr[i-1].charCodeAt();
        var secondIndex = arr[i].charCodeAt();
        var thirdIndex = arr[i+1].charCodeAt();
        thirdIndex - secondIndex == 1;
        secondIndex - firstIndex==1;
        if((thirdIndex - secondIndex == 1)&&(secondIndex - firstIndex==1)){
            flag =  false;
        }
    }
    if(!flag){
        return flag;
    }
    return flag;
}



function checkPassword(obj) {
    var reg0 = /^(?!([a-zA-Z]+|[a-z\d]+|[a-z~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+|[A-Z\d]+|[A-Z~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+|[\d~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+)$)[a-zA-Z\d~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+$/;
    if (reg0.test(obj)) {
        if( LxStr(obj)){
            alert("成功")
        }else{
            alert("密码不允许键盘序列（连续3位）")
            return false
        }
    } else {
        alert("密码需包含大写字母、小写字母、数字和符号中的3种，长度不少于8位!")
        return false;
    }
}

