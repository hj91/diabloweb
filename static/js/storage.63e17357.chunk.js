(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var r=t(6),o=t(1),a=t.n(o),u=t(2),c=t(13),s=t.n(c);function i(e,n){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(a.a.mark(function e(n,t){var r,o,u,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get(t.toLowerCase());case 2:(r=e.sent)?(o=new Blob([r],{type:"binary/octet-stream"}),u=URL.createObjectURL(o),(c=document.createElement("a")).setAttribute("href",u),c.setAttribute("download",t),document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)):console.error("File ".concat(t," does not exist"));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(a.a.mark(function e(n){var t,r,o,u,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,r=!1,o=void 0,e.prev=3,e.next=6,n.keys();case 6:e.t0=Symbol.iterator,u=e.sent[e.t0]();case 8:if(t=(c=u.next()).done){e.next=14;break}(s=c.value).match(/\.sv$/i)&&i(n,s);case 11:t=!0,e.next=8;break;case 14:e.next=20;break;case 16:e.prev=16,e.t1=e.catch(3),r=!0,o=e.t1;case 20:e.prev=20,e.prev=21,t||null==u.return||u.return();case 23:if(e.prev=23,!r){e.next=26;break}throw o;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}},e,null,[[3,16,20,28],[21,,23,27]])}))).apply(this,arguments)}var d=function(e){return new Promise(function(n,t){var r=new FileReader;r.onload=function(){return n(r.result)},r.onerror=function(){return t(r.error)},r.onabort=function(){return t()},r.readAsArrayBuffer(e)})};function w(e,n,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(a.a.mark(function e(n,t,r){var o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Uint8Array,e.next=3,d(r);case 3:return e.t1=e.sent,o=new e.t0(e.t1),t.set(r.name.toLowerCase(),o),e.abrupt("return",n.set(r.name.toLowerCase(),o));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(a.a.mark(function e(n){var t,o,u,c,f,p,d,v;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new s.a("diablo_fs"),o=new Map,u=0,e.t0=Object,e.next=7,t.json();case 7:e.t1=e.sent,c=e.t0.entries.call(e.t0,e.t1);case 9:if(!(u<c.length)){e.next=18;break}f=c[u],p=Object(r.a)(f,2),d=p[0],v=p[1],o.set(d,v);case 15:u++,e.next=9;break;case 18:return window.DownloadFile=function(e){return i(t,e)},window.DownloadSaves=function(){return l(t)},e.abrupt("return",{files:o,update:function(e,n){return t.set(e,n)},delete:function(e){return t.remove(e)},clear:function(){return t.clear()},download:function(e){return i(t,e)},upload:function(e){return w(t,o,e)}});case 23:return e.prev=23,e.t2=e.catch(0),window.DownloadFile=function(){return console.error("IndexedDB is not supported")},window.DownloadSaves=function(){return console.error("IndexedDB is not supported")},e.abrupt("return",{files:new Map,update:function(){return Promise.resolve()},delete:function(){return Promise.resolve()},clear:function(){return Promise.resolve()},download:function(){return Promise.resolve()},upload:function(){return Promise.resolve()}});case 28:case"end":return e.stop()}},e,null,[[0,23]])}))).apply(this,arguments)}},64:function(e,n,t){"use strict";t.r(n);var r=t(11),o=Object(r.a)();window.addEventListener("message",function(e){var n=e.data,t=e.source;"transfer"===n.method?o.then(function(e){var n=e.files;t.postMessage({method:"storage",files:n},"*")}):"clear"===n.method&&o.then(function(e){return(0,e.clear)()})})}},[[64,3,0]]]);
//# sourceMappingURL=storage.63e17357.chunk.js.map