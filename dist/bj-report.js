var BJ_REPORT=function(a){if(a.BJ_REPORT)return a.BJ_REPORT;var b=[],c=a.onerror;a.onerror=function(d,e,f,g,h){b.push({msg:d,target:e,rowNum:f,colNum:g,error:h}),k(),c&&c.apply(a,arguments)};var d,e={id:0,uin:0,url:"",combo:1,level:4,ignore:[],delay:100,submit:null},f=function(a,b){return Object.prototype.toString.call(a)==="[object "+(b||"Object")+"]"},g=function(a,b){var c=[],d=[],g=[];if(f(a)){a.level=a.level||e.level;for(var h in a){var i=a[h]||"";i&&("object"==typeof i&&(i=JSON.stringify(i)),g.push(h+":"+i),c.push(h+"="+encodeURIComponent(i)),d.push(h+"["+b+"]="+encodeURIComponent(i)))}}return[d.join("&"),g.join(","),c.join("&")]},h=function(a){if(e.submit)e.submit(a);else{var b=new Image;b.src=a}},i=[],j=!1,k=function(){if(e.report){for(;b.length;){for(var a=!1,c=b.shift(),k=g(c,i.length),l=0,m=e.ignore;m>l;l++){var n=e.ignore[l];if(f(n,"RegExp")&&n.test(k[1])||f(n,"Function")&&n(c,k[1])){a=!0;break}}a||(e.combo?i.push(k[0]):h(e.report+k[2]+"&_t="+ +new Date))}if(e.combo){if(j)return;j=!0,d=setTimeout(function(){var a=i.length;h(e.report+i.join("&")+"&count="+a+"&_t="+ +new Date),i=[],j=!1},e.delay)}}},l=!1,m={push:function(a){return b.push(f(a)?a:{msg:a}),m},report:function(a){return a&&m.push(a),k(),m},init:function(a){if(f(a))for(var c in a)e[c]=a[c];var g=parseInt(e.id,10);return g&&(e.report=(e.url||"http://badjs2.qq.com/badjs")+"?id="+g+"&uin="+parseInt(e.uin||(document.cookie.match(/\buin=\D+(\d+)/)||[])[1],10)+"&from="+encodeURIComponent(location.href)+"&",l=!0),b=[],i=[],clearTimeout(d),m}};return m}(window);"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=BJ_REPORT),exports.BJ_REPORT=BJ_REPORT);