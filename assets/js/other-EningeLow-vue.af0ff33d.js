(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["other-EningeLow-vue"],{"0270":function(e,t,n){"use strict";var a=n("9475"),i=n.n(a);i.a},5118:function(e,t,n){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("24aa"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var a,i=1,o={},c=!1,r=e.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(e);s=s&&s.setTimeout?s:e,"[object process]"==={}.toString.call(e.process)?m():p()?g():e.MessageChannel?h():r&&"onreadystatechange"in r.createElement("script")?v():b(),s.setImmediate=u,s.clearImmediate=l}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var c={callback:e,args:t};return o[i]=c,a(i),i++}function l(e){delete o[e]}function d(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a);break}}function f(e){if(c)setTimeout(f,0,e);else{var t=o[e];if(t){c=!0;try{d(t)}finally{l(e),c=!1}}}}function m(){a=function(e){t.nextTick(function(){f(e)})}}function p(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function g(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),a=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},a=function(t){e.port2.postMessage(t)}}function v(){var e=r.documentElement;a=function(t){var n=r.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function b(){a=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("24aa"),n("f28c"))},"6a02":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-5 col-md-7"},[n("div",{staticClass:"card bg-custom shadow border-0"},[e.auth?n("div",{staticClass:"card-header bg-white pb-5"},[e._m(0),n("base-filepond",{attrs:{uploadedCallBack:e.updateQRCode}})],1):e._e(),n("div",{staticClass:"card-body px-lg-5 py-lg-5"},[e.auth?n("div",{staticClass:"text-muted text-center mt-2 mb-3 font-weight-bolder"},[n("small",[e._v("当前二维码")])]):e._e(),n("div",{staticClass:"center-cropped",style:"background-image: url("+e.QRcode+");"},[n("img",{attrs:{src:e.QRcode}})])])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center text-muted mb-4 font-weight-bolder"},[n("small",[e._v("把新的二维码裁剪好并拖拽上传即可")])])}],o=(n("ac6a"),n("c5f6"),n("96cf"),n("3b8d")),c=(n("fa20"),n("2f62"),n("5118"),n("0631")),r=n.n(c),s={name:"login",beforeCreate:function(){var e=this,t=new r.a.Query("EningeQRCode");t.descending("updatedAt");t.first().then(function(t){var n=1,a=330*n,i=420*n;e.QRcode=t.get("attachmentURL")+"?imageView2/1/w/".concat(a,"/h/").concat(i)})},computed:{auth:function(){return!!r.a.User.current()}},data:function(){return{model:{username:"",password:""},QRcode:""}},methods:{updateQRCode:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,n){var a,i,o,c,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=n.file.qiniu.data,console.log(a),i=r.a.Object.extend("EningeQRCode"),o=new i,e.t0=regeneratorRuntime.keys(a);case 5:if((e.t1=e.t0()).done){e.next=15;break}if(c=e.t1.value,"url"!=c){e.next=12;break}return e.next=10,this.$http.get("/functions/expand?url=".concat(a[c]));case 10:s=e.sent,o.set("attachmentURL",s.data.expandedURL);case 12:"size"==c?o.set(c,Number(a[c])):o.set(c,a[c]),e.next=5;break;case 15:return o.save().then(function(){console.log("已上传到LeanCloud")},function(e){console.log(JSON.stringify(e))}),e.abrupt("return");case 17:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()}},u=s,l=(n("0270"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,null,null);t["default"]=d.exports},9475:function(e,t,n){}}]);