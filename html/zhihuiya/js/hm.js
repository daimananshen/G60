(function(){var h={},mt={},c={id:"1e7c25af066047196f8c1d0d8acb040d",dm:["zhihuiya.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[{id:"%23clForm%3einput%5b4%5d",eventType:"onclick"}],cetrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'3E223719A5FC1203',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,v=!1;mt.cookie={};mt.cookie.set=function(b,a,f){var e;f.O&&(e=new Date,e.setTime(e.getTime()+f.O));document.cookie=b+"="+a+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(e?"; expires="+e.toGMTString():"")+(f.nc?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};
mt.cookie.Nb=function(b,a){try{var f="Hm_ck_"+ +new Date;mt.cookie.set(f,"is-cookie-enabled",{domain:b,path:a,O:r});var e="is-cookie-enabled"===mt.cookie.get(f)?"1":"0";mt.cookie.set(f,"",{domain:b,path:a,O:-1});return e}catch(g){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.Ja=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.qa=function(){return mt.lang.e(c.aet,"String")};
mt.lang.g=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.K=function(b,a){var f=v;if(b==t||!mt.lang.e(b,"Array")||a===r)return f;if(Array.prototype.indexOf)f=-1!==b.indexOf(a);else for(var e=0;e<b.length;e++)if(b[e]===a){f=s;break}return f};
(function(){var b=mt.lang;mt.f={};mt.f.V=function(a){return document.getElementById(a)};mt.f.tb=function(a){if(!a)return t;try{for(var b=a.split(">"),e=document.body,g=b.length-1;0<=g;g--)if(-1<b[g].indexOf("#")){var d=b[g].split("#")[1];(e=document.getElementById(d))||(e=document.getElementById(decodeURIComponent(d)));b=b.splice(g+1,b.length-(g+1));break}for(a=0;e&&a<b.length;){var k=String(b[a]).toLowerCase();if(!("html"===k||"body"===k)){var g=0,m=b[a].match(/\[(\d+)\]/i),d=[];if(m)g=m[1]-1,k=
k.split("[")[0];else if(1!==e.childNodes.length){for(var p=0,q=0,n=e.childNodes.length;q<n;q++){var l=e.childNodes[q];1===l.nodeType&&l.nodeName.toLowerCase()===k&&p++;if(1<p)return t}if(1!==p)return t}for(p=0;p<e.childNodes.length;p++)1===e.childNodes[p].nodeType&&e.childNodes[p].nodeName.toLowerCase()===k&&d.push(e.childNodes[p]);if(!d[g])return t;e=d[g]}a++}return e}catch(w){return t}};mt.f.na=function(a,b){var e=[],g=[];if(!a)return g;for(;a.parentNode!=t;){for(var d=0,k=0,m=a.parentNode.childNodes.length,
p=0;p<m;p++){var q=a.parentNode.childNodes[p];if(q.nodeName===a.nodeName&&(d++,q===a&&(k=d),0<k&&1<d))break}if((m=""!==a.id)&&b){e.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<e.length?m+">"+e.join(">"):m,g.push(m)),e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<d?"["+k+"]":""));a=a.parentNode}g.push(e.join(">"));return g};mt.f.Ga=function(a){return(a=mt.f.na(a,s))&&a.length?String(a[0]):""};mt.f.zb=function(a){return mt.f.na(a,v)};mt.f.pb=
function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.f.rb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.xb=function(a){var b={top:0,left:0};if(!a)return b;var e=mt.f.rb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};mt.f.getAttribute=function(a,b){var e=
a.getAttribute&&a.getAttribute(b)||t;if(!e&&a.attributes&&a.attributes.length)for(var g=a.attributes,d=g.length,k=0;k<d;k++)g[k].nodeName===b&&(e=g[k].nodeValue);return e};mt.f.X=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.f.Bb=function(a){var f="";a.textContent?f=b.trim(a.textContent):a.innerText&&(f=b.trim(a.innerText));f&&(f=f.replace(/\s+/g," ").substring(0,255));return f};mt.f.Ea=function(a){var b=mt.f.X(a);"input"===b&&("button"===a.type||"submit"===
a.type)?a=a.value||"":"img"===b?(b=mt.f.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.f.Bb(a);return String(a).substring(0,255)};(function(){(mt.f.Na=function(){function a(){if(!a.Z){a.Z=s;for(var b=0,e=g.length;b<e;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}a()}var e=v,g=[],d;document.addEventListener?d=function(){document.removeEventListener("DOMContentLoaded",
d,v);a()}:document.attachEvent&&(d=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",d),a())});(function(){if(!e)if(e=s,"complete"===document.readyState)a.Z=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",d,v),window.addEventListener("load",a,v);else if(document.attachEvent){document.attachEvent("onreadystatechange",d);window.attachEvent("onload",a);var g=v;try{g=window.frameElement==t}catch(m){}document.documentElement.doScroll&&
g&&b()}})();return function(b){a.Z?b():g.push(b)}}()).Z=v})();return mt.f})();mt.event={};mt.event.d=function(b,a,f){b.attachEvent?b.attachEvent("on"+a,function(a){f.call(b,a)}):b.addEventListener&&b.addEventListener(a,f,v)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=v};
(function(){var b=mt.event;mt.i={};mt.i.pa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.Lb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Vb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.P=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.i.J=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.i.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.i.orientation=a}a();b.d(window,"orientationchange",a)})();return mt.i})();
mt.w={};mt.w.parse=function(b){return(new Function("return ("+b+")"))()};
mt.w.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=f[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return b(e);case "boolean":return String(e);
default:if(e===t)return"null";if(e instanceof Array){var g=["["],d=e.length,k,f,p;for(f=0;f<d;f++)switch(p=e[f],typeof p){case "undefined":case "function":case "unknown":break;default:k&&g.push(","),g.push(mt.w.stringify(p)),k=1}g.push("]");return g.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+"T"+a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+'"';k=["{"];f=mt.w.stringify;for(d in e)if(Object.prototype.hasOwnProperty.call(e,d))switch(p=
e[d],typeof p){case "undefined":case "unknown":case "function":break;default:g&&k.push(","),g=1,k.push(f(d)+":"+f(p))}k.push("}");return k.join("")}}}();mt.localStorage={};mt.localStorage.da=function(){if(!mt.localStorage.m)try{mt.localStorage.m=document.createElement("input"),mt.localStorage.m.type="hidden",mt.localStorage.m.style.display="none",mt.localStorage.m.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.m)}catch(b){return v}return s};
mt.localStorage.set=function(b,a,f){var e=new Date;e.setTime(e.getTime()+f||31536E6);try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.da()&&(mt.localStorage.m.expires=e.toUTCString(),mt.localStorage.m.load(document.location.hostname),mt.localStorage.m.setAttribute(b,a),mt.localStorage.m.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),f=b.substring(0,a)-0;if(f&&f>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.da())try{return mt.localStorage.m.load(document.location.hostname),mt.localStorage.m.getAttribute(b)}catch(e){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.da())try{mt.localStorage.m.load(document.location.hostname),mt.localStorage.m.removeAttribute(b),mt.localStorage.m.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(f){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):t}catch(a){return t}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.Sa={};mt.Sa.log=function(b,a){var f=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=f;f.onload=function(){f.onload=t;f=window[e]=t;a&&a(b)};f.src=b};mt.va={};
mt.va.Cb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return b};
mt.va.kc=function(b,a,f,e,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+f+'" height="'+e+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+f+'" height="'+e+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.o=function(b,a){var f=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return f?f[3]:t};mt.url.lc=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.vb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.I=function(b){return(b=mt.url.vb(b))?b.replace(/:\d+$/,""):b};mt.url.na=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=v,b=document.getElementsByTagName("script"),e=b.length,e=100<e?100:e,g=0;g<e;g++){var d=b[g].src;if(d&&0===d.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.ob=b})();var A=h.ob;
h.l={Kb:"http://tongji.baidu.com/hm-web/welcome/ico",ua:"hm.baidu.com/hm.gif",Za:/^(tongji|hmcdn).baidu.com$/,ca:"tongji.baidu.com",Hb:"hmmd",Ib:"hmpl",gc:"utm_medium",Gb:"hmkw",ic:"utm_term",Eb:"hmci",fc:"utm_content",Jb:"hmsr",hc:"utm_source",Fb:"hmcu",ec:"utm_campaign",L:0,G:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",$:A()||"https:"===document.location.protocol?"https:":"http:",mc:0,gb:6E5,Ob:6E5,Wb:5E3,hb:5,M:1024,fb:1,z:2147483647,Ta:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
Q:s,Ba:["a","input","button"],ab:{id:"data-hm-id",ia:"data-hm-class",ya:"data-hm-xpath",content:"data-hm-content",wa:"data-hm-tag",link:"data-hm-link"},Aa:"data-hm-enabled",za:"data-hm-disabled",Sb:"https://hmcdn.baidu.com/static/tongji/plugins/",Ma:["UrlChangeTracker"]};(function(){var b={C:{},d:function(a,b){this.C[a]=this.C[a]||[];this.C[a].push(b)},H:function(a,b){this.C[a]=this.C[a]||[];for(var e=this.C[a].length,g=0;g<e;g++)this.C[a][g](b)}};return h.s=b})();
(function(){function b(b,e){var g=document.createElement("script");g.charset="utf-8";a.e(e,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,e()}:g.onload=function(){e()});g.src=b;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(g,d)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";if(h.b.c.nv){b=encodeURIComponent(document.referrer);try{window.sessionStorage?f.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)}catch(g){}}else try{b=(window.sessionStorage?f.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(d){}return b}var a=mt.localStorage,f=mt.sessionStorage;return h.Da=b})();
(function(){var b=h.l,a={init:function(){if(""!==c.icon){var a=c.icon.split("|"),e=b.Kb+"?s="+c.id,g="https://hmcdn.baidu.com/static"+a[0]+".gif";document.write("swf"===a[1]||"gif"===a[1]?'<a href="'+e+'" target="_blank"><img border="0" src="'+g+'" width="'+a[2]+'" height="'+a[3]+'"></a>':'<a href="'+e+'" target="_blank">'+a[0]+"</a>")}}};h.s.d("pv-b",a.init);return a})();
(function(){var b=mt.lang,a=mt.f,f={N:function(b,g){return function(d){var k=d.target||d.srcElement;if(k){var m=k.getAttribute(b.T);d=d.clientX+":"+d.clientY;if(m&&m===d)k.removeAttribute(b.T);else if(g&&0<g.length&&(k=a.zb(k))&&k.length)if(m=k.length,d=k[k.length-1],1E4>m*d.split(">").length)for(d=0;d<m;d++)f.Ra(b,k[d]);else f.Ra(b,d)}}},Ra:function(a,g){for(var d={},k=String(g).split(">").length,f=0;f<k;f++)d[g]="",g=g.substring(0,g.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.ha)&&a.ha(d)},Oa:function(a,
b){return function(d){(d.target||d.srcElement).setAttribute(a.T,d.clientX+":"+d.clientY);a&&a.r&&(b?a.r(b):a.r("#"+encodeURIComponent(this.id),d.type))}}};return h.U=f})();
(function(){var b=mt.f,a=mt.event,f=h.U,e={T:"HM_fix",ga:function(){a.d(document,"click",f.N(e,c.etrk));for(var g=c.etrk.length,d=0;d<g;d++){var k=c.etrk[d],m=decodeURIComponent(String(k.id));-1===m.indexOf(">")&&(0===m.indexOf("#")&&(m=m.substring(1)),(m=b.V(decodeURIComponent(m)))&&a.d(m,k.eventType,f.Oa(e)))}},ha:function(a){if(c.etrk&&c.etrk.length)for(var b=c.etrk.length,k=0;k<b;k++){var f=decodeURIComponent(String(c.etrk[k].id));a.hasOwnProperty(f)&&e.r(f)}},r:function(a,b){h.b.c.et=1;h.b.c.ep=
"{id:"+a+",eventType:"+(b||"click")+"}";h.b.j()}};h.s.d("pv-b",e.ga);return e})();
(function(){var b=mt.f,a=mt.w,f=mt.event,e=mt.lang,g=h.U,d={T:"HM_ce",ga:function(){if(c.cetrk&&c.cetrk.length){f.d(document,"click",g.N(d,c.cetrk));for(var e=0,m=c.cetrk.length;e<m;e++){var p;try{p=a.parse(decodeURIComponent(String(c.cetrk[e])))}catch(q){p={}}var n=p.p||"";-1===n.indexOf(">")&&(0===n.indexOf("#")&&(n=n.substring(1)),(n=b.V(n))&&f.d(n,"click",g.Oa(d,p)))}}},ha:function(b){if(c.cetrk&&c.cetrk.length)for(var e=0,g=c.cetrk.length;e<g;e++){var q;try{q=a.parse(decodeURIComponent(String(c.cetrk[e])))}catch(n){q=
{}}b.hasOwnProperty(q.p)&&d.r(q)}},r:function(a){h.b.c.et=7;var g=a&&a.k||"",g=e.g(g),d=[];if(a&&a.a&&e.e(a.a,"Object"))for(var q in a.a)if(a.a.hasOwnProperty(q)){d.push(e.g(q));var n=b.tb(a.a[q]||""),n=n?b.Ea(n):"";d.push(e.g(n))}a="";d.length&&(a="*"+d.join("*"));h.b.c.ep="ce!_iden*"+g+a;h.b.j()}};h.s.d("pv-b",d.ga);return d})();
(function(){var b=mt.f,a=mt.lang,f=mt.event,e=mt.i,g=h.l,d=h.s,k=[],m={Ua:function(){c.ctrk&&(f.d(document,"mouseup",m.eb()),f.d(window,"unload",function(){m.aa()}),setInterval(function(){m.aa()},g.gb))},eb:function(){return function(a){a=m.qb(a);if(""!==a){var b=(g.$+"//"+g.ua+"?"+h.b.Qa().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(g.z+"").length>g.M||(b+encodeURIComponent(k.join("!")+(k.length?"!":"")).length+(g.z+"").length>g.M&&m.aa(),k.push(a),(k.length>=g.hb||/\*a\*/.test(a))&&
m.aa())}}},qb:function(d){var n=d.target||d.srcElement;if(0===g.fb){var l=(n.tagName||"").toLowerCase();if("embed"==l||"object"==l)return""}var w;e.pa?(w=Math.max(document.documentElement.scrollTop,document.body.scrollTop),l=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),l=d.clientX+l,w=d.clientY+w):(l=d.pageX,w=d.pageY);d=m.wb(d,n,l,w);var f=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:l-=f/2;break;case 2:l-=f}f=
[];f.push(l);f.push(w);f.push(d.Pb);f.push(d.Qb);f.push(d.Tb);f.push(a.g(d.Rb));f.push(d.jc);f.push(d.Db);(n="a"===(n.tagName||"").toLowerCase()?n:b.pb(n))?(f.push("a"),f.push(a.g(encodeURIComponent(n.href)))):f.push("b");return f.join("*")},wb:function(g,d,l,f){g=b.Ga(d);var k=0,u=0,y=0,x=0;if(d&&(k=d.offsetWidth||d.clientWidth,u=d.offsetHeight||d.clientHeight,x=b.xb(d),y=x.left,x=x.top,a.e(d.getBBox,"Function")&&(u=d.getBBox(),k=u.width,u=u.height),"html"===(d.tagName||"").toLowerCase()))k=Math.max(k,
d.clientWidth),u=Math.max(u,d.clientHeight);return{Pb:Math.round(100*((l-y)/k)),Qb:Math.round(100*((f-x)/u)),Tb:e.orientation,Rb:g,jc:k,Db:u}},aa:function(){0!==k.length&&(h.b.c.et=2,h.b.c.ep=k.join("!"),h.b.j(),k=[])}},p={Xa:function(){c.ctrk&&setInterval(p.Xb,g.Wb)},Xb:function(){var a=e.P()+e.J();0<a-h.b.c.vl&&(h.b.c.vl=a)}};d.d("pv-b",m.Ua);d.d("pv-b",p.Xa);return m})();
(function(){var b=mt.lang,a=mt.f,f=mt.event,e=mt.i,g=h.l,d=h.s,k=+new Date,m=[],p={N:function(){return function(e){if(h.b&&h.b.Q&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var l=h.b.Ba,f=a.getAttribute(d,g.Aa)!=t?s:v;if(a.getAttribute(d,g.za)==t)if(f)p.ea(p.ma(d,e));else{var k=a.X(d);if(b.K(l,"*")||b.K(l,k))p.ea(p.ma(d,e));else for(;d.parentNode!=t;){var f=d.parentNode,k=a.X(f),u="a"===k&&b.K(l,"a")?s:v,k="button"===k&&b.K(l,"button")?s:v,y=a.getAttribute(f,g.Aa)!=t?s:v;if(a.getAttribute(f,
g.za)==t&&(u||k||y)){p.ea(p.ma(f,e));break}d=d.parentNode}}}}}},ma:function(d,f){var l={},k=g.ab;l.id=a.getAttribute(d,k.id)||a.getAttribute(d,"id")||"";l.ia=a.getAttribute(d,k.ia)||a.getAttribute(d,"class")||"";l.ya=a.getAttribute(d,k.ya)||a.Ga(d);l.content=a.getAttribute(d,k.content)||a.Ea(d);l.wa=a.getAttribute(d,k.wa)||a.X(d);l.link=a.getAttribute(d,k.link)||a.getAttribute(d,"href")||"";l.type=f.type||"click";k=b.Ja(d.offsetTop)?d.offsetTop:0;"click"===f.type?k=e.pa?f.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):f.pageY:"touchend"===f.type&&(f.sa&&b.e(f.sa.changedTouches,"Array")&&f.sa.changedTouches.length)&&(k=f.sa.changedTouches[0].pageY);l.dc=k;return l},ea:function(a){var e=b.g;a=[+new Date-(h.b.D!==r?h.b.D:k),e(a.id),e(a.ia),e(a.wa),e(a.ya),e(a.link),e(a.content),a.type,a.dc].join("*");p.fa(a);b.e(this.S(),"Function")&&this.S()()},fa:function(a){a.length>g.M||(encodeURIComponent(m.join("!")+a).length>g.M&&(p.r(m.join("!")),m=[]),m.push(a))},r:function(a){h.b.c.et=5;h.b.c.ep=
a;h.b.j()},S:function(){return function(){m&&m.length&&(p.r(m.join("!")),m=[])}}};b.qa()&&""!==c.aet&&d.d("pv-b",function(){f.d(document,"click",p.N());"ontouchend"in document&&f.d(window,"touchend",p.N());f.d(window,"unload",p.S())});return p})();
(function(){var b=mt.event,a=mt.i,f=h.l,e=h.s,g=+new Date,d=[],k=t,m={lb:function(){return function(){h.b&&(h.b.Q&&c.aet&&c.aet.length)&&(window.clearTimeout(k),k=window.setTimeout(function(){m.Wa(a.P()+a.J())},150))}},Wa:function(a){m.fa([+new Date-(h.b.D!==r?h.b.D:g),a].join("*"))},fa:function(a){if(encodeURIComponent(d.join("!")+a).length>f.M||3<d.length)m.r(d.join("!")),d=[];d.push(a)},r:function(b){h.b.c.et=6;h.b.c.vh=a.J();h.b.c.ep=b;h.b.j()},S:function(){return function(){d&&d.length&&(m.r(d.join("!")),
d=[])}}};mt.lang.qa()&&""!==c.aet&&e.d("pv-b",function(){b.d(window,"scroll",m.lb());b.d(window,"unload",m.S())});return m})();
(function(){var b=mt.f,a=h.l,f=h.load,e=h.Da;h.s.d("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.Na(function(){for(var d=0,k=c.rp.length;d<k;d++){var m=c.rp[d][0],p=c.rp[d][1],q=b.V("hm_t_"+m);if(p&&!(2==p&&!q||q&&""!==q.innerHTML))q="",q=Math.round(Math.random()*a.z),q=4==p?g+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+q].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+m,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
q].join("&"),f(q)}})})})();(function(){var b=h.l,a=h.load,f=h.Da;h.s.d("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*b.z),"hm=1"].join("&");a(e)}})})();
(function(){function b(){return function(){h.b.c.nv=0;h.b.c.st=4;h.b.c.et=3;h.b.c.ep=h.ka.yb()+","+h.ka.ub();h.b.j()}}function a(){clearTimeout(x);var b;u&&(b="visible"==document[u]);y&&(b=!document[y]);m="undefined"==typeof b?s:b;if((!k||!p)&&m&&q)z=s,l=+new Date;else if(k&&p&&(!m||!q))z=v,w+=+new Date-l;k=m;p=q;x=setTimeout(a,100)}function f(a){var l=document,b="";if(a in l)b=a;else for(var e=["webkit","ms","moz","o"],u=0;u<e.length;u++){var d=e[u]+a.charAt(0).toUpperCase()+a.slice(1);if(d in l){b=
d;break}}return b}function e(l){if(!("focus"==l.type||"blur"==l.type)||!(l.target&&l.target!=window))q="focus"==l.type||"focusin"==l.type?s:v,a()}var g=mt.event,d=h.s,k=s,m=s,p=s,q=s,n=+new Date,l=n,w=0,z=s,u=f("visibilityState"),y=f("hidden"),x;a();(function(){var l=u.replace(/[vV]isibilityState/,"visibilitychange");g.d(document,l,a);g.d(window,"pageshow",a);g.d(window,"pagehide",a);"object"==typeof document.onfocusin?(g.d(document,"focusin",e),g.d(document,"focusout",e)):(g.d(window,"focus",e),
g.d(window,"blur",e))})();h.ka={yb:function(){return+new Date-n},ub:function(){return z?+new Date-l+w:w}};d.d("pv-b",function(){g.d(window,"unload",b())});d.d("duration-send",b());d.d("duration-done",function(){l=n=+new Date;w=0});return h.ka})();
(function(){var b=mt.lang,a=h.l,f=h.load,e={Mb:function(e){if((window._dxt===r||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var d=h.b.W();f([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(d)].join(""),e)}},bc:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.ib=e})();
(function(){function b(a,b,e,u){if(!(a===r||b===r||u===r)){if(""===a)return[b,e,u].join("*");a=String(a).split("!");for(var d,f=v,g=0;g<a.length;g++)if(d=a[g].split("*"),String(b)===d[0]){d[1]=e;d[2]=u;a[g]=d.join("*");f=s;break}f||a.push([b,e,u].join("*"));return a.join("!")}}function a(b){for(var d in b)if({}.hasOwnProperty.call(b,d)){var f=b[d];e.e(f,"Object")||e.e(f,"Array")?a(f):b[d]=String(f)}}var f=mt.url,e=mt.lang,g=mt.w,d=mt.i,k=h.l,m=h.s,p=h.ib,q=h.load,n={R:[],ba:0,Ka:v,B:{xa:"",page:""},
init:function(){n.h=0;m.d("pv-b",function(){n.jb();n.mb()});m.d("pv-d",function(){n.nb();n.B.page=""});m.d("stag-b",function(){h.b.c.api=n.h||n.ba?n.h+"_"+n.ba:"";h.b.c.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),n.B.xa,n.B.page].join("!")});m.d("stag-d",function(){h.b.c.api=0;n.h=0;n.ba=0})},jb:function(){var a=window._hmt||[];if(!a||e.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var l=arguments[b];e.e(l,"Array")&&(a.cmd[a.id].push(l),
"_setAccount"===l[0]&&(1<l.length&&/^[0-9a-f]{32}$/.test(l[1]))&&(l=l[1],a.id=l,a.cmd[l]=a.cmd[l]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},mb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,f=b.length;d<f;d++){var g=b[d];e.test(g[0])?n.R.push(g):n.ta(g)}a.cmd[c.id]={push:n.ta}},nb:function(){if(0<n.R.length)for(var a=0,b=n.R.length;a<b;a++)n.ta(n.R[a]);n.R=t},ta:function(a){var b=a[0];if(n.hasOwnProperty(b)&&
e.e(n[b],"Function"))n[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(n.h|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],v===a||s===a))n.h|=2,h.b.Ha=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){n.h|=4;h.b.c.sn=h.b.Fa();h.b.c.et=0;h.b.c.ep="";h.b.c.vl=d.P()+d.J();h.b.c.kb=0;h.b.oa?(h.b.c.nv=0,h.b.c.st=4):h.b.oa=s;var b=h.b.c.u,e=h.b.c.su;h.b.c.u=k.protocol+"//"+document.location.host+a[1];n.Ka||(h.b.c.su=document.location.href);
h.b.j();h.b.c.u=b;h.b.c.su=e;h.b.D=+new Date}},_trackEvent:function(a){2<a.length&&(n.h|=8,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=4,h.b.c.ep=e.g(a[1])+"*"+e.g(a[2])+(a[3]?"*"+e.g(a[3]):"")+(a[4]?"*"+e.g(a[4]):""),h.b.j())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){n.ba++;for(var u=(h.b.c.cv||"*").split("!"),f=u.length;f<b-1;f++)u.push("*");u[b-1]=d+"*"+e.g(a[2])+"*"+e.g(a[3]);h.b.c.cv=u.join("!");a=h.b.c.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ub("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.g(a[1]);a=e.g(a[2]);if(d!==r&&a!==r){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,d,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var d=e.g(a[1]);a=e.g(a[2]);if(d!==r&&a!==r){var f=n.B.xa,f=b(f,d,2,a);n.B.xa=f}}},_setPageTag:function(a){if(!(3>a.length)){var d=e.g(a[1]);a=e.g(a[2]);
if(d!==r&&a!==r){var f=n.B.page,f=b(f,d,3,a);n.B.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.b.c.su=a[1].charAt&&"/"===a[1].charAt(0)?k.protocol+"//"+window.location.host+a[1]:a[1],n.Ka=s)},_trackOrder:function(b){b=b[1];e.e(b,"Object")&&(a(b),n.h|=16,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=94,h.b.c.ep=g.stringify(b),h.b.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])n.h|=32,h.b.c.et=93,h.b.c.ep=a,h.b.j()},_trackRTPageview:function(b){b=b[1];e.e(b,"Object")&&
(a(b),b=g.stringify(b),512>=encodeURIComponent(b).length&&(n.h|=64,h.b.c.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.e(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var d=function(a){var b=h.b.c.rt;n.h|=128;h.b.c.et=90;h.b.c.rt=a;h.b.j();h.b.c.rt=b},f=b.length;if(900>=f)d.call(this,b);else for(var f=Math.ceil(f/900),u="block|"+Math.round(Math.random()*k.z).toString(16)+"|"+f+"|",y=[],x=0;x<f;x++)y.push(x),y.push(b.substring(900*x,900*x+900)),d.call(this,u+y.join("|")),y=[]}},_setUserId:function(a){a=
a[1];p.Mb();p.bc(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],v===a||s===a))h.b.Ia=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],v===a||s===a))h.b.Q=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.b.c.et=3,h.b.c.ep=a,h.b.j())):m.H("duration-send");m.H("duration-done")},_require:function(a){1<a.length&&(a=a[1],k.Za.test(f.I(a))&&q(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1];a=a[2];if(e.K(k.Ma,d)&&e.e(a,"Function")&&
(b.plugins=b.plugins||{},b.F=b.F||{},b.plugins[d]=a,b.A=b.A||[],a=b.A.slice(),d&&a.length&&a[0][1]===d))for(var f=0,g=a.length;f<g;f++){var x=a[f][2]||{};if(b.plugins[d]&&!b.F[d])b.F[d]=new b.plugins[d](x),b.A.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],f=a[2]||{};if(e.K(k.Ma,d))if(b.plugins=b.plugins||{},b.F=b.F||{},b.plugins[d]&&!b.F[d])b.F[d]=new b.plugins[d](f);else{b.A=b.A||[];for(var f=0,g=b.A.length;f<g;f++)if(b.A[f][1]===d)return;b.A.push(a);n._require([t,
k.Sb+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=e.g(a[1]),d="";a=a[2];if(e.e(a,"Object")){var d=[],f;for(f in a)a.hasOwnProperty(f)&&(d.push(e.g(f)),d.push(e.g(a[f])));d="*"+d.join("*")}h.b.c.et=7;h.b.c.ep="ce!_iden*"+b+d;h.b.j()}}};n.init();h.$a=n;return h.$a})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.c={},this.Ia=this.Ha=s,this.Q=l.Q,this.Ba=g.qa()&&0<c.aet.length?c.aet.split(","):"",this.oa=v,this.init())}var a=mt.url,f=mt.Sa,e=mt.va,g=mt.lang,d=mt.cookie,k=mt.i,m=mt.localStorage,p=mt.sessionStorage,q=mt.w,n=mt.event,l=h.l,w=h.load,z=h.s;b.prototype={ra:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},La:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},Y:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.La(b,c.dm[d]))return s}else{var e=a.I(b);if(e&&this.ra(e,c.dm[d]))return s}return v},W:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ra(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},la:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.La(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Ab:function(){if(!document.referrer)return l.G-l.L>c.vdur?1:4;var b=v;this.Y(document.referrer)&&this.Y(document.location.href)?b=s:(b=a.I(document.referrer),b=this.ra(b||"",document.location.hostname));return b?l.G-l.L>c.vdur?1:4:3},getData:function(a){try{return d.get(a)||p.get(a)||m.get(a)}catch(b){}},setData:function(a,b,e){try{d.set(a,b,{domain:this.W(),path:this.la(),O:e}),e?m.set(a,b,e):p.set(a,b)}catch(f){}},Ub:function(a){try{d.set(a,"",{domain:this.W(),path:this.la(),
O:-1}),p.remove(a),m.remove(a)}catch(b){}},$b:function(){var a,b,e,f,g;l.L=this.getData("Hm_lpvt_"+c.id)||0;13===l.L.length&&(l.L=Math.round(l.L/1E3));b=this.Ab();a=4!==b?1:0;if(e=this.getData("Hm_lvt_"+c.id)){f=e.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<l.G-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(l.G);4<f.length;)f.shift();e=f.join(",");f=f[f.length-1]}else e=l.G,f="",g=1;this.setData("Hm_lvt_"+c.id,e,c.age);this.setData("Hm_lpvt_"+
c.id,l.G);e=d.Nb(this.W(),this.la());if(0===c.nv&&this.Y(document.location.href)&&(""===document.referrer||this.Y(document.referrer)))a=0,b=4;this.c.nv=a;this.c.st=b;this.c.cc=e;this.c.lt=f;this.c.lv=g},Qa:function(){for(var a=[],b=this.c.et,d=+new Date,e=0,f=l.Ta.length;e<f;e++){var g=l.Ta[e],k=this.c[g];"undefined"!==typeof k&&""!==k&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(k))}switch(b){case 0:this.c.rt&&a.push("rt="+
encodeURIComponent(this.c.rt));break;case 5:a.push("_lpt="+this.D);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.D);a.push("_ct="+d);break;case 90:this.c.rt&&a.push("rt="+this.c.rt)}return a.join("&")},ac:function(){this.$b();this.c.si=c.id;this.c.sn=this.Fa();this.c.su=document.referrer;this.c.hh=window.location.hash;this.c.ds=k.Vb;this.c.cl=k.colorDepth+"-bit";this.c.ln=String(k.language).toLowerCase();this.c.ja=k.javaEnabled?1:0;this.c.ck=k.cookieEnabled?1:0;this.c.lo="number"===typeof _bdhm_top?
1:0;this.c.fl=e.Cb();this.c.v="1.2.48";this.c.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.c.tt=document.title||"";this.c.vl=k.P()+k.J();var b=document.location.href;this.c.cm=a.o(b,l.Hb)||"";this.c.cp=a.o(b,l.Ib)||a.o(b,l.gc)||"";this.c.cw=a.o(b,l.Gb)||a.o(b,l.ic)||"";this.c.ci=a.o(b,l.Eb)||a.o(b,l.fc)||"";this.c.cf=a.o(b,l.Jb)||a.o(b,l.hc)||"";this.c.cu=a.o(b,l.Fb)||a.o(b,l.ec)||""},init:function(){try{this.ac(),0===this.c.nv?this.Zb():this.Ca(),h.b=this,this.cb(),this.bb(),z.H("pv-b"),
this.Yb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(l.$+"//"+l.ua+"?"+b.join("&"))}},Yb:function(){function a(){z.H("pv-d")}this.Ha?(this.oa=s,this.c.et=0,this.c.ep="",this.c.vl=k.P()+k.J(),this.j(a)):a();this.D=+new Date},j:function(a){if(this.Ia){var b=this;b.c.rnd=Math.round(Math.random()*l.z);z.H("stag-b");var d=l.$+"//"+l.ua+"?"+b.Qa();z.H("stag-d");b.Ya(d);f.log(d,
function(d){b.Pa(d);g.e(a,"Function")&&a.call(b)})}},cb:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.I(document.referrer)===l.ca?1:0,f=a.o(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.c.rnd=Math.round(Math.random()*l.z),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",l.protocol+"//"+c.js+f+".js?"+this.c.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,
f))},bb:function(){var b=a.I(document.referrer)===l.ca;if(window.postMessage&&window.self!==window.parent&&b){var d=this;n.d(window,"message",function(b){if(a.I(b.origin)===l.ca){var e=b.data||{};b=e.sd||"";var e=e.jn||"",f=/^customevent$/.test(e);RegExp(c.id).test(b)&&f&&(d.c.rnd=Math.round(Math.random()*l.z),w(l.protocol+"//"+c.js+e+".js?"+d.c.rnd))}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"http://"+l.ca)}},Ya:function(a){var b;try{b=q.parse(p.get("Hm_unsent_"+
c.id)||"[]")}catch(d){b=[]}var e=this.c.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);p.set("Hm_unsent_"+c.id,q.stringify(b))},Pa:function(a){var b;try{b=q.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?p.set("Hm_unsent_"+c.id,q.stringify(b)):this.Ca()}},Ca:function(){p.remove("Hm_unsent_"+
c.id)},Zb:function(){var a=this,b;try{b=q.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){f.log(l.$+"//"+b,function(b){a.Pa(b)})},g=0;g<b.length;g++)e(b[g])},Fa:function(){return Math.round(+new Date/1E3)%65535}};return new b})();var B=h.l,C=h.load;if(c.apps){var D=[B.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);C(D.join(""))}
(function(){var b=mt.event,a=mt.lang,f=h.l;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.c.kb=a.Ja(h.b.c.kb)?h.b.c.kb:0;var e=function(){h.b.c.et=85;h.b.c.ep=h.b.c.kb;h.b.j()};b.d(document,"keyup",function(){h.b.c.kb++});b.d(window,"unload",function(){e()});setInterval(e,f.Ob)}})();var E=h.l,F=h.load;c.pt&&F([E.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var G=h.l,H=h.load;c.lxb&&H([G.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var I=h.load,J=h.l.protocol;
if(c.qiao){for(var K=[J+"//goutong.baidu.com/site/"],L=c.id,M=5381,N=L.length,O=0;O<N;O++)M=(33*M+Number(L.charCodeAt(O)))%4294967296;2147483648<M&&(M-=2147483648);K.push(M%1E3+"/");K.push(c.id+"/b.js");K.push("?siteId="+c.qiao);I(K.join(""))}
(function(){var b=mt.i,a=mt.lang,f=mt.event,e=mt.w;if("undefined"!==typeof h.b&&(c.med||(!b.pa||7<b.Lb)&&c.cvcc)){var g,d,k,m,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},q=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===v)return v},n=function(b,d){var f={};f.n=g;f.t="clk";f.v=b;if(d){var l=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,n=d.getAttribute("id")||"";k.test(l)?(f.sn="mediate",
f.snv=l):a.e(m,"String")&&k.test(m)&&(f.sn="wrap",f.snv=m);f.id=n}h.b.c.et=86;h.b.c.ep=e.stringify(f);h.b.j();for(f=+new Date;400>=+new Date-f;);};if(c.med)d="/zoosnet",g="swt",k=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(k.test(e)||k.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){d="/other-comm";g="other";k=c.cvcc.q||r;var l=c.cvcc.id||r;m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],k!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),l?(d=d.getAttribute("id"),(k.test(e)||k.test(f)||l.test(d))&&
a.push(b[g])):(k.test(e)||k.test(f))&&a.push(b[g])):l!==r&&(d=d.getAttribute("id"),l.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof k){var w;d+=/\/$/.test(d)?"":"/";var z=function(b,e){if(w===e)return n(d+b,e),v;if(a.e(e,"Array")||a.e(e,"NodeList"))for(var f=0,g=e.length;f<g;f++)if(w===e[f])return n(d+b+"/"+(f+1),e[f]),v};f.d(document,"mousedown",function(b){b=b||window.event;w=b.target||b.srcElement;var d={};for(q(m,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});w&&
w!==document&&q(d,z)!==v;)w=w.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,f=mt.event,e=mt.w;if("undefined"!==typeof h.b&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var g={Va:function(){for(var a=c.cvcf.length,e,m=0;m<a;m++)(e=b.V(decodeURIComponent(c.cvcf[m])))&&f.d(e,"click",g.U())},U:function(){return function(){h.b.c.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.c.ep=e.stringify(a);h.b.j()}}};b.Na(function(){g.Va()})}})();
(function(){var b=mt.event,a=mt.w;if(c.med&&"undefined"!==typeof h.b){var f=+new Date,e={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.c.et=86;h.b.c.ep=a.stringify(e);h.b.j()};b.d(document,"click",function(){e.clk++});b.d(document,"keyup",function(){e.kb=1});b.d(window,"scroll",function(){e.sb++});b.d(window,"unload",function(){e.t=+new Date-f;g()});b.d(window,"load",function(){setTimeout(g,5E3)})}})();c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
