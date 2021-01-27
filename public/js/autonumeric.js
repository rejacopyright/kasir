!function(h){"use strict";function s(e,t,a){if(void 0===e.selectionStart){e.focus();var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",a),i.moveStart("character",t),i.select()}else e.selectionStart=t,e.selectionEnd=a}function m(e,t){"string"==typeof e[t]&&(e[t]*=1)}function a(e,t){var a,i;a=e,i=t,h.each(i,function(e,t){"function"==typeof t?i[e]=t(a,i,e):"function"==typeof a.autoNumeric[t]&&(i[e]=a.autoNumeric[t](a,i,e))}),t.tagList=["b","caption","cite","code","dd","del","div","dfn","dt","em","h1","h2","h3","h4","h5","h6","ins","kdb","label","li","output","p","q","s","sample","span","strong","td","th","u","var"];var n=t.vMax.toString().split("."),r=t.vMin||0===t.vMin?t.vMin.toString().split("."):[];if(m(t,"vMax"),m(t,"vMin"),m(t,"mDec"),t.mDec="CHF"===t.mRound?"2":t.mDec,t.allowLeading=!0,t.aNeg=t.vMin<0?"-":"",n[0]=n[0].replace("-",""),r[0]=r[0].replace("-",""),t.mInt=Math.max(n[0].length,r[0].length,1),null===t.mDec){var o=0,s=0;n[1]&&(o=n[1].length),r[1]&&(s=r[1].length),t.mDec=Math.max(o,s)}null===t.altDec&&0<t.mDec&&("."===t.aDec&&","!==t.aSep?t.altDec=",":","===t.aDec&&"."!==t.aSep&&(t.altDec="."));var u=t.aNeg?"([-\\"+t.aNeg+"]?)":"(-?)";t.aNegRegAutoStrip=u,t.skipFirstAutoStrip=new RegExp(u+"[^-"+(t.aNeg?"\\"+t.aNeg:"")+"\\"+t.aDec+"\\d].*?(\\d|\\"+t.aDec+"\\d)"),t.skipLastAutoStrip=new RegExp("(\\d\\"+t.aDec+"?)[^\\"+t.aDec+"\\d]\\D*$");var l="-"+t.aNum+"\\"+t.aDec;return t.allowedAutoStrip=new RegExp("[^"+l+"]","gi"),t.numRegAutoStrip=new RegExp(u+"(?:\\"+t.aDec+"?(\\d+\\"+t.aDec+"\\d+)|(\\d*(?:\\"+t.aDec+"\\d*)?))"),t}function u(e,t,a){if(t.aSign)for(;-1<e.indexOf(t.aSign);)e=e.replace(t.aSign,"");e=(e=(e=e.replace(t.skipFirstAutoStrip,"$1$2")).replace(t.skipLastAutoStrip,"$1")).replace(t.allowedAutoStrip,""),t.altDec&&(e=e.replace(t.altDec,t.aDec));var i=e.match(t.numRegAutoStrip);if(e=i?[i[1],i[2],i[3]].join(""):"",("allow"===t.lZero||"keep"===t.lZero)&&"strip"!==a){var n=[],r="";-1!==(n=e.split(t.aDec))[0].indexOf("-")&&(r="-",n[0]=n[0].replace("-","")),n[0].length>t.mInt&&"0"===n[0].charAt(0)&&(n[0]=n[0].slice(1)),e=r+n.join(t.aDec)}if(a&&"deny"===t.lZero||a&&"allow"===t.lZero&&!1===t.allowLeading){var o="^"+t.aNegRegAutoStrip+"0*(\\d"+("leading"===a?")":"|$)");o=new RegExp(o),e=e.replace(o,"$1$2")}return e}function l(e,t){if("p"===t.pSign){var a=t.nBracket.split(",");t.hasFocus||t.removeBrackets?(t.hasFocus&&e.charAt(0)===a[0]||t.removeBrackets&&e.charAt(0)===a[0])&&(e=(e=e.replace(a[0],t.aNeg)).replace(a[1],"")):(e=e.replace(t.aNeg,""),e=a[0]+e+a[1])}return e}function o(e,t){if(e){var a=+e;if(a<1e-6&&-1<a)(e=+e)<1e-6&&0<e&&(e=(e=(e+10).toString()).substring(1)),e<0&&-1<e&&(e="-"+(e=(e-10).toString()).substring(2)),e=e.toString();else{var i=e.split(".");void 0!==i[1]&&(0==+i[1]?e=i[0]:(i[1]=i[1].replace(/0*$/,""),e=i.join(".")))}}return"keep"===t.lZero?e:e.replace(/^0*(\d)/,"$1")}function c(e,t,a){return t&&"."!==t&&(e=e.replace(t,".")),a&&"-"!==a&&(e=e.replace(a,"-")),e.match(/\d/)||(e+="0"),e}function p(e,t,a){return a&&"-"!==a&&(e=e.replace("-",a)),t&&"."!==t&&(e=e.replace(".",t)),e}function g(e,t,a){return""===e||e===t.aNeg?"zero"===t.wEmpty?e+"0":"sign"===t.wEmpty||a?e+t.aSign:e:null}function d(e,t){var a=(e=u(e,t)).replace(",","."),i=g(e,t,!0);if(null!==i)return i;var n="";n=2===t.dGroup?/(\d)((\d)(\d{2}?)+)$/:4===t.dGroup?/(\d)((\d{4}?)+)$/:/(\d)((\d{3}?)+)$/;var r=e.split(t.aDec);t.altDec&&1===r.length&&(r=e.split(t.altDec));var o=r[0];if(t.aSep)for(;n.test(o);)o=o.replace(n,"$1"+t.aSep+"$2");if(0!==t.mDec&&1<r.length?(r[1].length>t.mDec&&(r[1]=r[1].substring(0,t.mDec)),e=o+t.aDec+r[1]):e=o,t.aSign){var s=-1!==e.indexOf(t.aNeg);e=e.replace(t.aNeg,""),e="p"===t.pSign?t.aSign+e:e+t.aSign,s&&(e=t.aNeg+e)}return a<0&&null!==t.nBracket&&(e=l(e,t)),e}function f(e,t){e=""===e?"0":e.toString(),m(t,"mDec"),"CHF"===t.mRound&&(e=(Math.round(20*e)/20).toString());var a="",i=0,n="",r="boolean"==typeof t.aPad||null===t.aPad?t.aPad?t.mDec:0:+t.aPad,o=function(e){var t=0===r?/(\.(?:\d*[1-9])?)0*$/:1===r?/(\.\d(?:\d*[1-9])?)0*$/:new RegExp("(\\.\\d{"+r+"}(?:\\d*[1-9])?)0*$");return e=e.replace(t,"$1"),0===r&&(e=e.replace(/\.$/,"")),e};"-"===e.charAt(0)&&(n="-",e=e.replace("-","")),e.match(/^\d/)||(e="0"+e),"-"===n&&0==+e&&(n=""),(0<+e&&"keep"!==t.lZero||0<e.length&&"allow"===t.lZero)&&(e=e.replace(/^0*(\d)/,"$1"));var s=e.lastIndexOf("."),u=-1===s?e.length-1:s,l=e.length-1-u;if(l<=t.mDec){if(a=e,l<r){-1===s&&(a+=".");for(var c="000000";l<r;)a+=c=c.substring(0,r-l),l+=c.length}else r<l?a=o(a):0===l&&0===r&&(a=a.replace(/\.$/,""));if("CHF"!==t.mRound)return 0==+a?a:n+a;"CHF"===t.mRound&&(s=a.lastIndexOf("."),e=a)}var p=s+t.mDec,h=+e.charAt(p+1),g=e.substring(0,p+1).split(""),d="."===e.charAt(p)?e.charAt(p-1)%2:e.charAt(p)%2,f=!0;if(1!==d&&(d=0===d&&0<e.substring(p+2,e.length)?1:0),4<h&&"S"===t.mRound||4<h&&"A"===t.mRound&&""===n||5<h&&"A"===t.mRound&&"-"===n||5<h&&"s"===t.mRound||5<h&&"a"===t.mRound&&""===n||4<h&&"a"===t.mRound&&"-"===n||5<h&&"B"===t.mRound||5===h&&"B"===t.mRound&&1===d||0<h&&"C"===t.mRound&&""===n||0<h&&"F"===t.mRound&&"-"===n||0<h&&"U"===t.mRound||"CHF"===t.mRound)for(i=g.length-1;0<=i;i-=1)if("."!==g[i]){if("CHF"===t.mRound&&g[i]<=2&&f){g[i]=0,f=!1;break}if("CHF"===t.mRound&&g[i]<=7&&f){f=!(g[i]=5);break}if("CHF"===t.mRound&&f?f=!(g[i]=10):g[i]=+g[i]+1,g[i]<10)break;0<i&&(g[i]="0")}return 0==+(a=o((g=g.slice(0,p+1)).join("")))?a:n+a}function v(e,t,a){var i=t.aDec,n=t.mDec;if(e="paste"===a?f(e,t):e,i&&n){var r=e.split(i);r[1]&&r[1].length>n&&(0<n?(r[1]=r[1].substring(0,n),e=r.join(i)):e=r[0])}return e}function y(e,t){var a=+(e=c(e=v(e=u(e,t),t),t.aDec,t.aNeg));return a>=t.vMin&&a<=t.vMax}function r(e,t){this.settings=t,this.that=e,this.$that=h(e),this.formatted=!1,this.settingsClone=a(this.$that,this.settings),this.value=e.value}function S(e){return"string"==typeof e&&(e="#"+(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).replace(/(:|\.)/g,"\\$1")),h(e)}function N(e,t,a){var i=e.data("autoNumeric");i||(i={},e.data("autoNumeric",i));var n=i.holder;return(void 0===n&&t||a)&&(n=new r(e.get(0),t),i.holder=n),n}r.prototype={init:function(e){this.value=this.that.value,this.settingsClone=a(this.$that,this.settings),this.ctrlKey=e.ctrlKey,this.cmdKey=e.metaKey,this.shiftKey=e.shiftKey,this.selection=function(e){var t={};if(void 0===e.selectionStart){e.focus();var a=document.selection.createRange();t.length=a.text.length,a.moveStart("character",-e.value.length),t.end=a.text.length,t.start=t.end-t.length}else t.start=e.selectionStart,t.end=e.selectionEnd,t.length=t.end-t.start;return t}(this.that),"keydown"!==e.type&&"keyup"!==e.type||(this.kdCode=e.keyCode),this.which=e.which,this.processed=!1,this.formatted=!1},setSelection:function(e,t,a){e=Math.max(e,0),t=Math.min(t,this.that.value.length),this.selection={start:e,end:t,length:t-e},(void 0===a||a)&&s(this.that,e,t)},setPosition:function(e,t){this.setSelection(e,e,t)},getBeforeAfter:function(){var e=this.value;return[e.substring(0,this.selection.start),e.substring(this.selection.end,e.length)]},getBeforeAfterStriped:function(){var e=this.getBeforeAfter();return e[0]=u(e[0],this.settingsClone),e[1]=u(e[1],this.settingsClone),e},normalizeParts:function(e,t){var a=this.settingsClone;""!==(e=u(e,a,!!(t=u(t,a)).match(/^\d/)||"leading"))&&e!==a.aNeg||"deny"!==a.lZero||""<t&&(t=t.replace(/^0*(\d)/,"$1"));var i=e+t;if(a.aDec){var n=i.match(new RegExp("^"+a.aNegRegAutoStrip+"\\"+a.aDec));n&&(i=(e=e.replace(n[1],n[1]+"0"))+t)}return"zero"!==a.wEmpty||i!==a.aNeg&&""!==i||(e+="0"),[e,t]},setValueParts:function(e,t,a){var i=this.settingsClone,n=this.normalizeParts(e,t),r=n.join(""),o=n[0].length;return!!y(r,i)&&(o>(r=v(r,i,a)).length&&(o=r.length),this.value=r,this.setPosition(o,!1),!0)},signPosition:function(){var e=this.settingsClone,t=e.aSign,a=this.that;if(t){var i=t.length;if("p"===e.pSign)return e.aNeg&&a.value&&a.value.charAt(0)===e.aNeg?[1,i+1]:[0,i];var n=a.value.length;return[n-i,n]}return[1e3,-1]},expandSelectionOnSign:function(e){var t=this.signPosition(),a=this.selection;a.start<t[1]&&a.end>t[0]&&((a.start<t[0]||a.end>t[1])&&this.value.substring(Math.max(a.start,t[0]),Math.min(a.end,t[1])).match(/^\s*$/)?a.start<t[0]?this.setSelection(a.start,t[0],e):this.setSelection(t[1],a.end,e):this.setSelection(Math.min(a.start,t[0]),Math.max(a.end,t[1]),e))},checkPaste:function(){if(void 0!==this.valuePartsBeforePaste){var e=this.getBeforeAfter(),t=this.valuePartsBeforePaste;delete this.valuePartsBeforePaste,e[0]=e[0].substr(0,t[0].length)+u(e[0].substr(t[0].length),this.settingsClone),this.setValueParts(e[0],e[1],"paste")||(this.value=t.join(""),this.setPosition(t[0].length,!1))}},skipAllways:function(e){var t=this.kdCode,a=this.which,i=this.ctrlKey,n=this.cmdKey,r=this.shiftKey;if((i||n)&&"keyup"===e.type&&void 0!==this.valuePartsBeforePaste||r&&45===t)return this.checkPaste(),!1;if(112<=t&&t<=123||91<=t&&t<=93||9<=t&&t<=31||t<8&&(0===a||a===t)||144===t||145===t||45===t||224===t)return!0;if((i||n)&&65===t)return!0;if((i||n)&&(67===t||86===t||88===t))return"keydown"===e.type&&this.expandSelectionOnSign(),86!==t&&45!==t||("keydown"===e.type||"keypress"===e.type?void 0===this.valuePartsBeforePaste&&(this.valuePartsBeforePaste=this.getBeforeAfter()):this.checkPaste()),"keydown"===e.type||"keypress"===e.type||67===t;if(i||n)return!0;if(37===t||39===t){var o=this.settingsClone.aSep,s=this.selection.start,u=this.that.value;return"keydown"===e.type&&o&&!this.shiftKey&&(37===t&&u.charAt(s-2)===o?this.setPosition(s-1):39===t&&u.charAt(s+1)===o&&this.setPosition(s+1)),!0}return 34<=t&&t<=40},processAllways:function(){var e;return(8===this.kdCode||46===this.kdCode)&&(this.selection.length?(this.expandSelectionOnSign(!1),e=this.getBeforeAfterStriped()):(e=this.getBeforeAfterStriped(),8===this.kdCode?e[0]=e[0].substring(0,e[0].length-1):e[1]=e[1].substring(1,e[1].length)),this.setValueParts(e[0],e[1]),!0)},processKeypress:function(){var e=this.settingsClone,t=String.fromCharCode(this.which),a=this.getBeforeAfterStriped(),i=a[0],n=a[1];return t===e.aDec||e.altDec&&t===e.altDec||("."===t||","===t)&&110===this.kdCode?e.mDec&&e.aDec&&(e.aNeg&&-1<n.indexOf(e.aNeg)||-1<i.indexOf(e.aDec)||0<n.indexOf(e.aDec)||(0===n.indexOf(e.aDec)&&(n=n.substr(1)),this.setValueParts(i+e.aDec,n))):"-"===t||"+"===t?e.aNeg&&(""===i&&-1<n.indexOf(e.aNeg)&&(i=e.aNeg,n=n.substring(1,n.length)),i=i.charAt(0)===e.aNeg?i.substring(1,i.length):"-"===t?e.aNeg+i:i,this.setValueParts(i,n)):"0"<=t&&t<="9"&&(e.aNeg&&""===i&&-1<n.indexOf(e.aNeg)&&(i=e.aNeg,n=n.substring(1,n.length)),e.vMax<=0&&e.vMin<e.vMax&&-1===this.value.indexOf(e.aNeg)&&"0"!==t&&(i=e.aNeg+i),this.setValueParts(i+t,n)),!0},formatQuick:function(){var e=this.settingsClone,t=this.getBeforeAfterStriped(),a=this.value;if((""===e.aSep||""!==e.aSep&&-1===a.indexOf(e.aSep))&&(""===e.aSign||""!==e.aSign&&-1===a.indexOf(e.aSign))){var i=[],n="";-1<(i=a.split(e.aDec))[0].indexOf("-")&&(n="-",i[0]=i[0].replace("-",""),t[0]=t[0].replace("-","")),i[0].length>e.mInt&&"0"===t[0].charAt(0)&&(t[0]=t[0].slice(1)),t[0]=n+t[0]}var r=d(this.value,this.settingsClone),o=r.length;if(r){for(var s=t[0].split(""),u=0;u<s.length;u+=1)s[u].match("\\d")||(s[u]="\\"+s[u]);var l=new RegExp("^.*?"+s.join(".*?")),c=r.match(l);c?(0===(o=c[0].length)&&r.charAt(0)!==e.aNeg||1===o&&r.charAt(0)===e.aNeg)&&e.aSign&&"p"===e.pSign&&(o=this.settingsClone.aSign.length+("-"===r.charAt(0)?1:0)):e.aSign&&"s"===e.pSign&&(o-=e.aSign.length)}this.that.value=r,this.setPosition(o),this.formatted=!0}};var t={init:function(n){return this.each(function(){var r=h(this),e=r.data("autoNumeric"),t=r.data(),a=r.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");if("object"==typeof e)return this;(e=h.extend({},h.fn.autoNumeric.defaults,t,n,{aNum:"0123456789",hasFocus:!1,removeBrackets:!1,runOnce:!1,tagList:["b","caption","cite","code","dd","del","div","dfn","dt","em","h1","h2","h3","h4","h5","h6","ins","kdb","label","li","output","p","q","s","sample","span","strong","td","th","u","var"]})).aDec===e.aSep&&h.error("autoNumeric will not function properly when the decimal character aDec: '"+e.aDec+"' and thousand separator aSep: '"+e.aSep+"' are the same character"),r.data("autoNumeric",e);var o=N(r,e);if(a||"input"!==r.prop("tagName").toLowerCase()||h.error('The input type "'+r.prop("type")+'" is not supported by autoNumeric()'),-1===h.inArray(r.prop("tagName").toLowerCase(),e.tagList)&&"input"!==r.prop("tagName").toLowerCase()&&h.error("The <"+r.prop("tagName").toLowerCase()+"> is not supported by autoNumeric()"),!1===e.runOnce&&e.aForm){if(a){var i=!0;""===r[0].value&&"empty"===e.wEmpty&&(r[0].value="",i=!1),""===r[0].value&&"sign"===e.wEmpty&&(r[0].value=e.aSign,i=!1),i&&""!==r.val()&&(null===e.anDefault&&r[0].value===r.prop("defaultValue")||null!==e.anDefault&&e.anDefault.toString()===r.val())&&r.autoNumeric("set",r.val())}-1!==h.inArray(r.prop("tagName").toLowerCase(),e.tagList)&&""!==r.text()&&r.autoNumeric("set",r.text())}e.runOnce=!0,r.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])")&&(r.on("keydown.autoNumeric",function(e){return(o=N(r)).settings.aDec===o.settings.aSep&&h.error("autoNumeric will not function properly when the decimal character aDec: '"+o.settings.aDec+"' and thousand separator aSep: '"+o.settings.aSep+"' are the same character"),o.that.readOnly?o.processed=!0:(o.init(e),o.skipAllways(e)?o.processed=!0:o.processAllways()?(o.processed=!0,o.formatQuick(),e.preventDefault(),!1):!(o.formatted=!1))}),r.on("keypress.autoNumeric",function(e){var t=(o=N(r)).processed;return o.init(e),!!o.skipAllways(e)||(t?(e.preventDefault(),!1):o.processAllways()||o.processKeypress()?(o.formatQuick(),e.preventDefault(),!1):void(o.formatted=!1))}),r.on("keyup.autoNumeric",function(e){(o=N(r)).init(e);var t=o.skipAllways(e);return o.kdCode=0,delete o.valuePartsBeforePaste,r[0].value===o.settings.aSign&&("s"===o.settings.pSign?s(this,0,0):s(this,o.settings.aSign.length,o.settings.aSign.length)),!!t||(""===this.value||void(o.formatted||o.formatQuick()))}),r.on("focusin.autoNumeric",function(){var e=(o=N(r)).settingsClone;if(e.hasFocus=!0,null!==e.nBracket){var t=r.val();r.val(l(t,e))}o.inVal=r.val();var a=g(o.inVal,e,!0);null!==a&&""!==a&&r.val(a)}),r.on("focusout.autoNumeric",function(){var e=(o=N(r)).settingsClone,t=r.val(),a=t;e.hasFocus=!1;var i="";"allow"===e.lZero&&(e.allowLeading=!1,i="leading"),""!==t&&(t=null===g(t=u(t,e,i),e)&&y(t,e,r[0])?p(t=f(t=c(t,e.aDec,e.aNeg),e),e.aDec,e.aNeg):"");var n=g(t,e,!1);null===n&&(n=d(t,e)),n===o.inVal&&n===a||(r.val(n),r.change(),delete o.inVal)}))})},destroy:function(){return h(this).each(function(){var e=h(this);e.off(".autoNumeric"),e.removeData("autoNumeric")})},update:function(i){return h(this).each(function(){var e=S(h(this)),t=e.data("autoNumeric");"object"!=typeof t&&h.error("You must initialize autoNumeric('init', {options}) prior to calling the 'update' method");var a=e.autoNumeric("get");if(N(e,t=h.extend(t,i),!0),t.aDec===t.aSep&&h.error("autoNumeric will not function properly when the decimal character aDec: '"+t.aDec+"' and thousand separator aSep: '"+t.aSep+"' are the same character"),e.data("autoNumeric",t),""!==e.val()||""!==e.text())return e.autoNumeric("set",a)})},set:function(r){if(null!==r)return h(this).each(function(){var e=S(h(this)),t=e.data("autoNumeric"),a=r.toString(),i=r.toString(),n=e.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");return"object"!=typeof t&&h.error("You must initialize autoNumeric('init', {options}) prior to calling the 'set' method"),i!==e.attr("value")&&i!==e.text()||!1!==t.runOnce||(a=a.replace(",",".")),h.isNumeric(+a)||h.error("The value ("+a+") being 'set' is not numeric and has caused a error to be thrown"),a=o(a,t),t.setEvent=!0,a.toString(),""!==a&&(a=f(a,t)),y(a=p(a,t.aDec,t.aNeg),t)||(a=f("",t)),a=d(a,t),n?e.val(a):-1!==h.inArray(e.prop("tagName").toLowerCase(),t.tagList)&&e.text(a)})},get:function(){var e=S(h(this)),t=e.data("autoNumeric");"object"!=typeof t&&h.error("You must initialize autoNumeric('init', {options}) prior to calling the 'get' method");var a="";return e.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])")?a=e.eq(0).val():-1!==h.inArray(e.prop("tagName").toLowerCase(),t.tagList)?a=e.eq(0).text():h.error("The <"+e.prop("tagName").toLowerCase()+"> is not supported by autoNumeric()"),""===a&&"empty"===t.wEmpty||a===t.aSign&&("sign"===t.wEmpty||"empty"===t.wEmpty)?"":(""!==a&&null!==t.nBracket&&(t.removeBrackets=!0,a=l(a,t),t.removeBrackets=!1),(t.runOnce||!1===t.aForm)&&(a=u(a,t)),0==+(a=c(a,t.aDec,t.aNeg))&&"keep"!==t.lZero&&(a="0"),"keep"===t.lZero?a:a=o(a,t))},getString:function(){var i=!1,e=S(h(this)),n=e.serialize().split("&"),r=h("form").index(e),t=h("form:eq("+r+")"),o=[],s=[],a=/^(?:submit|button|image|reset|file)$/i,u=/^(?:input|select|textarea|keygen)/i,l=/^(?:checkbox|radio)$/i,c=/^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,p=0;return h.each(t[0],function(e,t){""===t.name||!u.test(t.localName)||a.test(t.type)||t.disabled||!t.checked&&l.test(t.type)?s.push(-1):(s.push(p),p+=1)}),p=0,h.each(t[0],function(e,t){"input"!==t.localName||""!==t.type&&"text"!==t.type&&"hidden"!==t.type&&"tel"!==t.type?(o.push(-1),"input"===t.localName&&c.test(t.type)&&(p+=1)):(o.push(p),p+=1)}),h.each(n,function(e,t){t=n[e].split("=");var a=h.inArray(e,s);-1<a&&-1<o[a]&&("object"==typeof h("form:eq("+r+") input:eq("+o[a]+")").data("autoNumeric")&&null!==t[1]&&(t[1]=h("form:eq("+r+") input:eq("+o[a]+")").autoNumeric("get").toString(),n[e]=t.join("="),i=!0))}),i||h.error("You must initialize autoNumeric('init', {options}) prior to calling the 'getString' method"),n.join("&")},getArray:function(){var i=!1,e=S(h(this)),t=e.serializeArray(),n=h("form").index(e),a=h("form:eq("+n+")"),r=[],o=[],s=/^(?:submit|button|image|reset|file)$/i,u=/^(?:input|select|textarea|keygen)/i,l=/^(?:checkbox|radio)$/i,c=/^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,p=0;return h.each(a[0],function(e,t){""===t.name||!u.test(t.localName)||s.test(t.type)||t.disabled||!t.checked&&l.test(t.type)?o.push(-1):(o.push(p),p+=1)}),p=0,h.each(a[0],function(e,t){"input"!==t.localName||""!==t.type&&"text"!==t.type&&"hidden"!==t.type&&"tel"!==t.type?(r.push(-1),"input"===t.localName&&c.test(t.type)&&(p+=1)):(r.push(p),p+=1)}),h.each(t,function(e,t){var a=h.inArray(e,o);-1<a&&-1<r[a]&&("object"==typeof h("form:eq("+n+") input:eq("+r[a]+")").data("autoNumeric")&&(t.value=h("form:eq("+n+") input:eq("+r[a]+")").autoNumeric("get").toString(),i=!0))}),i||h.error("None of the successful form inputs are initialized by autoNumeric."),t},getSettings:function(){return S(h(this)).eq(0).data("autoNumeric")}};h.fn.autoNumeric=function(e){return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void h.error('Method "'+e+'" is not supported by autoNumeric()'):t.init.apply(this,arguments)},h.fn.autoNumeric.defaults={aSep:",",dGroup:"3",aDec:".",altDec:null,aSign:"",pSign:"p",vMax:"9999999999999.99",vMin:"-9999999999999.99",mDec:null,mRound:"S",aPad:!0,nBracket:null,wEmpty:"empty",lZero:"allow",sNumber:!0,aForm:!0,anDefault:null}}(jQuery);
