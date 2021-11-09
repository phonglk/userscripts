// ==UserScript==
// @name        Next Sticker
// @version     1.5.1
// @author      Khoi-Phong Le
// @description Add Sticker to your post
// @homepage    https://next.voz.vn/threads/userscript-sticker-cho-next.854/
// @supportURL  https://github.com/phonglk/userscripts/pulls
// @match       https://*.voz.vn/*
// @namespace   Next
// @updateURL   https://raw.githubusercontent.com/phonglk/userscripts/master/dist/next-sticker.user.js
// @connect     imgur.com
// @source      https://github.com/phonglk/userscripts/tree/master/src/next/sticker
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_notification
// @grant       GM_xmlhttpRequest
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_log
// @require     https://cdn.jsdelivr.net/npm/cash-dom@6.0.2/dist/cash.min.js
// ==/UserScript==

!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){!function(){"use strict";var n={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function e(t,n){try{return t(n)}catch(t){return n}}var r=document,i=window,o=r.documentElement,u=r.createElement.bind(r),a=u("div"),c=u("table"),s=u("tbody"),l=u("tr"),f=Array.isArray,p=Array.prototype,d=p.concat,h=p.filter,_=p.indexOf,m=p.map,g=p.push,v=p.slice,y=p.some,b=p.splice,k=/^#[\w-]*$/,x=/^\.[\w-]*$/,w=/<.+>/,C=/^\w+$/;function S(t,n){return t&&(j(n)||W(n))?x.test(t)?n.getElementsByClassName(t.slice(1)):C.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t):[]}var E=function(){function t(t,n){if(t){if(O(t))return t;var e=t;if($(t)){var o=(O(n)?n[0]:n)||r;if(!(e=k.test(t)?o.getElementById(t.slice(1)):w.test(t)?Tt(t):S(t,o)))return}else if(D(t))return this.ready(t);(e.nodeType||e===i)&&(e=[e]),this.length=e.length;for(var u=0,a=this.length;u<a;u++)this[u]=e[u]}}return t.prototype.init=function(n,e){return new t(n,e)},t}(),N=E.prototype,T=N.init;T.fn=T.prototype=N,N.length=0,N.splice=b,"function"==typeof Symbol&&(N[Symbol.iterator]=p[Symbol.iterator]),N.map=function(t){return T(d.apply([],m.call(this,(function(n,e){return t.call(n,e,n)}))))},N.slice=function(t,n){return T(v.call(this,t,n))};var A=/-([a-z])/g;function M(t){return t.replace(A,(function(t,n){return n.toUpperCase()}))}function L(t,n,e){if(e){for(var r=t.length;r--;)if(!1===n.call(t[r],r,t[r]))return t}else{r=0;for(var i=t.length;r<i;r++)if(!1===n.call(t[r],r,t[r]))return t}return t}function P(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=arguments.length;if(!r)return{};if(1===r)return P(T,t);for(var i=1;i<r;i++)for(var o in arguments[i])t[o]=arguments[i][o];return t}function R(t,n){var e=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!e&&!!n&&e.call(t,n)}function O(t){return t instanceof E}function H(t){return!!t&&t===t.window}function j(t){return!!t&&9===t.nodeType}function W(t){return!!t&&1===t.nodeType}function D(t){return"function"==typeof t}function $(t){return"string"==typeof t}function U(t){return void 0===t}function B(t){return null===t}function I(t){return!isNaN(parseFloat(t))&&isFinite(t)}function F(t){return $(t)?function(n,e){return R(e,t)}:D(t)?t:O(t)?function(n,e){return t.is(e)}:t?function(n,e){return e===t}:function(){return!1}}function G(t,n){return n?t.filter(n):t}T.each=L,N.each=function(t){return L(this,t)},N.removeProp=function(t){return this.each((function(e,r){delete r[n[t]||t]}))},T.extend=P,N.extend=function(t){return P(N,t)},T.guid=1,T.isWindow=H,T.isFunction=D,T.isNumeric=I,T.isArray=f,N.prop=function(t,e){if(t){if($(t))return t=n[t]||t,arguments.length<2?this[0]&&this[0][t]:this.each((function(n,r){r[t]=e}));for(var r in t)this.prop(r,t[r]);return this}},N.get=function(t){return U(t)?v.call(this):this[(t=Number(t))<0?t+this.length:t]},N.eq=function(t){return T(this.get(t))},N.first=function(){return this.eq(0)},N.last=function(){return this.eq(-1)},N.filter=function(t){var n=F(t);return T(h.call(this,(function(t,e){return n.call(t,e,t)})))};var V=/\S+/g;function z(t){return $(t)&&t.match(V)||[]}function q(t,n,e,r){for(var i=[],o=D(n),u=r&&F(r),a=0,c=t.length;a<c;a++)if(o){var s=n(t[a]);s.length&&g.apply(i,s)}else for(var l=t[a][n];!(null==l||r&&u(-1,l));)i.push(l),l=e?l[n]:null;return i}function J(t){return t.length>1?h.call(t,(function(t,n,e){return _.call(e,t)===n})):t}function Y(t,n,e){if(W(t)){var r=i.getComputedStyle(t,null);return e?r.getPropertyValue(n)||void 0:r[n]}}function X(t,n){return parseInt(Y(t,n),10)||0}N.hasClass=function(t){return!!t&&y.call(this,(function(n){return W(n)&&n.classList.contains(t)}))},N.removeAttr=function(t){var n=z(t);return this.each((function(t,e){W(e)&&L(n,(function(t,n){e.removeAttribute(n)}))}))},N.attr=function(t,n){if(t){if($(t)){if(arguments.length<2){if(!this[0]||!W(this[0]))return;var e=this[0].getAttribute(t);return B(e)?void 0:e}return U(n)?this:B(n)?this.removeAttr(t):this.each((function(e,r){W(r)&&r.setAttribute(t,n)}))}for(var r in t)this.attr(r,t[r]);return this}},N.toggleClass=function(t,n){var e=z(t),r=!U(n);return this.each((function(t,i){W(i)&&L(e,(function(t,e){r?n?i.classList.add(e):i.classList.remove(e):i.classList.toggle(e)}))}))},N.addClass=function(t){return this.toggleClass(t,!0)},N.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},T.unique=J,N.add=function(t,n){return T(J(this.get().concat(T(t,n).get())))};var Q=/^--/;function Z(t){return Q.test(t)}var K={},tt=a.style,nt=["webkit","moz","ms"];function et(t,n){if(void 0===n&&(n=Z(t)),n)return t;if(!K[t]){var e=M(t),r=""+e[0].toUpperCase()+e.slice(1);L((e+" "+nt.join(r+" ")+r).split(" "),(function(n,e){if(e in tt)return K[t]=e,!1}))}return K[t]}var rt={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function it(t,n,e){return void 0===e&&(e=Z(t)),e||rt[t]||!I(n)?n:n+"px"}N.css=function(t,n){if($(t)){var e=Z(t);return t=et(t,e),arguments.length<2?this[0]&&Y(this[0],t,e):t?(n=it(t,n,e),this.each((function(r,i){W(i)&&(e?i.style.setProperty(t,n):i.style[t]=n)}))):this}for(var r in t)this.css(r,t[r]);return this};var ot=/^\s+|\s+$/;function ut(t,n){var r=t.dataset[n]||t.dataset[M(n)];return ot.test(r)?r:e(JSON.parse,r)}function at(t,n,r){r=e(JSON.stringify,r),t.dataset[M(n)]=r}function ct(t,n){var e=t.documentElement;return Math.max(t.body["scroll"+n],e["scroll"+n],t.body["offset"+n],e["offset"+n],e["client"+n])}function st(t,n){return X(t,"border"+(n?"Left":"Top")+"Width")+X(t,"padding"+(n?"Left":"Top"))+X(t,"padding"+(n?"Right":"Bottom"))+X(t,"border"+(n?"Right":"Bottom")+"Width")}N.data=function(t,n){if(!t){if(!this[0])return;var e={};for(var r in this[0].dataset)e[r]=ut(this[0],r);return e}if($(t))return arguments.length<2?this[0]&&ut(this[0],t):U(n)?this:this.each((function(e,r){at(r,t,n)}));for(var r in t)this.data(r,t[r]);return this},L([!0,!1],(function(t,n){L(["Width","Height"],(function(t,e){N[(n?"outer":"inner")+e]=function(r){if(this[0])return H(this[0])?n?this[0]["inner"+e]:this[0].document.documentElement["client"+e]:j(this[0])?ct(this[0],e):this[0][(n?"offset":"client")+e]+(r&&n?X(this[0],"margin"+(t?"Top":"Left"))+X(this[0],"margin"+(t?"Bottom":"Right")):0)}}))})),L(["Width","Height"],(function(t,n){var e=n.toLowerCase();N[e]=function(r){if(!this[0])return U(r)?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+n]:j(this[0])?ct(this[0],n):this[0].getBoundingClientRect()[e]-st(this[0],!t);var i=parseInt(r,10);return this.each((function(n,r){if(W(r)){var o=Y(r,"boxSizing");r.style[e]=it(e,i+("border-box"===o?st(r,!t):0))}}))}}));var lt={};function ft(t){return"none"===Y(t,"display")}function pt(t,n){return!n||!y.call(n,(function(n){return t.indexOf(n)<0}))}N.toggle=function(t){return this.each((function(n,e){W(e)&&((U(t)?ft(e):t)?(e.style.display=e.___cd||"",ft(e)&&(e.style.display=function(t){if(lt[t])return lt[t];var n=u(t);r.body.insertBefore(n,null);var e=Y(n,"display");return r.body.removeChild(n),lt[t]="none"!==e?e:"block"}(e.tagName))):(e.___cd=Y(e,"display"),e.style.display="none"))}))},N.hide=function(){return this.toggle(!1)},N.show=function(){return this.toggle(!0)};var dt={focus:"focusin",blur:"focusout"},ht={mouseenter:"mouseover",mouseleave:"mouseout"},_t=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function mt(t){return ht[t]||dt[t]||t}function gt(t){return t.___ce=t.___ce||{}}function vt(t){var n=t.split(".");return[n[0],n.slice(1).sort()]}function yt(t,n,e,r,i){var o=gt(t);if(n)o[n]&&(o[n]=o[n].filter((function(o){var u=o[0],a=o[1],c=o[2];if(i&&c.guid!==i.guid||!pt(u,e)||r&&r!==a)return!0;t.removeEventListener(n,c)})));else for(n in o)yt(t,n,e,r,i)}function bt(t){return t.multiple&&t.options?q(h.call(t.options,(function(t){return t.selected&&!t.disabled&&!t.parentNode.disabled})),"value"):t.value||""}N.off=function(t,n,e){var r=this;if(U(t))this.each((function(t,n){(W(n)||j(n)||H(n))&&yt(n)}));else if($(t))D(n)&&(e=n,n=""),L(z(t),(function(t,i){var o=vt(mt(i)),u=o[0],a=o[1];r.each((function(t,r){(W(r)||j(r)||H(r))&&yt(r,u,a,n,e)}))}));else for(var i in t)this.off(i,t[i]);return this},N.on=function(t,n,e,r,i){var o=this;if(!$(t)){for(var u in t)this.on(u,n,e,t[u],i);return this}return $(n)||(U(n)||B(n)?n="":U(e)?(e=n,n=""):(r=e,e=n,n="")),D(r)||(r=e,e=void 0),r?(L(z(t),(function(t,u){var a=vt(mt(u)),c=a[0],s=a[1];c&&o.each((function(t,o){if(W(o)||j(o)||H(o)){var u=function t(u){if(!u.namespace||pt(s,u.namespace.split("."))){var a=o;if(n){for(var l=u.target;!R(l,n);){if(l===o)return;if(!(l=l.parentNode))return}a=l,u.___cd=!0}u.___cd&&Object.defineProperty(u,"currentTarget",{configurable:!0,get:function(){return a}}),Object.defineProperty(u,"data",{configurable:!0,get:function(){return e}});var f=r.call(a,u,u.___td);i&&yt(o,c,s,n,t),!1===f&&(u.preventDefault(),u.stopPropagation())}};u.guid=r.guid=r.guid||T.guid++,function(t,n,e,r,i){var o=gt(t);o[n]=o[n]||[],o[n].push([e,r,i]),t.addEventListener(n,i)}(o,c,s,n,u)}}))})),this):this},N.one=function(t,n,e,r){return this.on(t,n,e,r,!0)},N.ready=function(t){var n=function(){return setTimeout(t,0,T)};return"loading"!==r.readyState?n():r.addEventListener("DOMContentLoaded",n),this},N.trigger=function(t,n){if($(t)){var e=vt(t),i=e[0],o=e[1];if(!i)return this;var u=_t.test(i)?"MouseEvents":"HTMLEvents";(t=r.createEvent(u)).initEvent(i,!0,!0),t.namespace=o.join(".")}t.___td=n;var a=t.type in dt;return this.each((function(n,e){a&&D(e[t.type])?e[t.type]():e.dispatchEvent(t)}))};var kt=/%20/g,xt=/\r?\n/g;var wt=/file|reset|submit|button|image/i,Ct=/radio|checkbox/i;N.serialize=function(){var t="";return this.each((function(n,e){L(e.elements||[e],(function(n,e){if(!(e.disabled||!e.name||"FIELDSET"===e.tagName||wt.test(e.type)||Ct.test(e.type)&&!e.checked)){var r=bt(e);if(!U(r))L(f(r)?r:[r],(function(n,r){t+=function(t,n){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(n.replace(xt,"\r\n")).replace(kt,"+")}(e.name,r)}))}}))})),t.slice(1)},N.val=function(t){return arguments.length?this.each((function(n,e){var r=e.multiple&&e.options;if(r||Ct.test(e.type)){var i=f(t)?m.call(t,String):B(t)?[]:[String(t)];r?L(e.options,(function(t,n){n.selected=i.indexOf(n.value)>=0}),!0):e.checked=i.indexOf(e.value)>=0}else e.value=U(t)||B(t)?"":t})):this[0]&&bt(this[0])},N.clone=function(){return this.map((function(t,n){return n.cloneNode(!0)}))},N.detach=function(t){return G(this,t).each((function(t,n){n.parentNode&&n.parentNode.removeChild(n)})),this};var St=/^\s*<(\w+)[^>]*>/,Et=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Nt={"*":a,tr:s,td:l,th:l,thead:c,tbody:c,tfoot:c};function Tt(t){if(!$(t))return[];if(Et.test(t))return[u(RegExp.$1)];var n=St.test(t)&&RegExp.$1,e=Nt[n]||Nt["*"];return e.innerHTML=t,T(e.childNodes).detach().get()}T.parseHTML=Tt,N.empty=function(){return this.each((function(t,n){for(;n.firstChild;)n.removeChild(n.firstChild)}))},N.html=function(t){return arguments.length?U(t)?this:this.each((function(n,e){W(e)&&(e.innerHTML=t)})):this[0]&&this[0].innerHTML},N.remove=function(t){return G(this,t).detach().off(),this},N.text=function(t){return U(t)?this[0]?this[0].textContent:"":this.each((function(n,e){W(e)&&(e.textContent=t)}))},N.unwrap=function(){return this.parent().each((function(t,n){if("BODY"!==n.tagName){var e=T(n);e.replaceWith(e.children())}})),this},N.offset=function(){var t=this[0];if(t){var n=t.getBoundingClientRect();return{top:n.top+i.pageYOffset,left:n.left+i.pageXOffset}}},N.offsetParent=function(){return this.map((function(t,n){for(var e=n.offsetParent;e&&"static"===Y(e,"position");)e=e.offsetParent;return e||o}))},N.position=function(){var t=this[0];if(t){var n="fixed"===Y(t,"position"),e=n?t.getBoundingClientRect():this.offset();if(!n){for(var r=t.ownerDocument,i=t.offsetParent||r.documentElement;(i===r.body||i===r.documentElement)&&"static"===Y(i,"position");)i=i.parentNode;if(i!==t&&W(i)){var o=T(i).offset();e.top-=o.top+X(i,"borderTopWidth"),e.left-=o.left+X(i,"borderLeftWidth")}}return{top:e.top-X(t,"marginTop"),left:e.left-X(t,"marginLeft")}}},N.children=function(t){return G(T(J(q(this,(function(t){return t.children})))),t)},N.contents=function(){return T(J(q(this,(function(t){return"IFRAME"===t.tagName?[t.contentDocument]:"TEMPLATE"===t.tagName?t.content.childNodes:t.childNodes}))))},N.find=function(t){return T(J(q(this,(function(n){return S(t,n)}))))};var At=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mt=/^$|^module$|\/(java|ecma)script/i,Lt=["type","src","nonce","noModule"];function Pt(t,n,e,r,i){r?t.insertBefore(n,e?t.firstChild:null):t.parentNode.insertBefore(n,e?t:t.nextSibling),i&&function(t,n){var e=T(t);e.filter("script").add(e.find("script")).each((function(t,e){if(Mt.test(e.type)&&o.contains(e)){var r=u("script");r.text=e.textContent.replace(At,""),L(Lt,(function(t,n){e[n]&&(r[n]=e[n])})),n.head.insertBefore(r,null),n.head.removeChild(r)}}))}(n,t.ownerDocument)}function Rt(t,n,e,r,i,o,u,a){return L(t,(function(t,o){L(T(o),(function(t,o){L(T(n),(function(n,u){var a=e?u:o,c=e?t:n;Pt(e?o:u,c?a.cloneNode(!0):a,r,i,!c)}),a)}),u)}),o),n}N.after=function(){return Rt(arguments,this,!1,!1,!1,!0,!0)},N.append=function(){return Rt(arguments,this,!1,!1,!0)},N.appendTo=function(t){return Rt(arguments,this,!0,!1,!0)},N.before=function(){return Rt(arguments,this,!1,!0)},N.insertAfter=function(t){return Rt(arguments,this,!0,!1,!1,!1,!1,!0)},N.insertBefore=function(t){return Rt(arguments,this,!0,!0)},N.prepend=function(){return Rt(arguments,this,!1,!0,!0,!0,!0)},N.prependTo=function(t){return Rt(arguments,this,!0,!0,!0,!1,!1,!0)},N.replaceWith=function(t){return this.before(t).remove()},N.replaceAll=function(t){return T(t).replaceWith(this),this},N.wrapAll=function(t){for(var n=T(t),e=n[0];e.children.length;)e=e.firstElementChild;return this.first().before(n),this.appendTo(e)},N.wrap=function(t){return this.each((function(n,e){var r=T(t)[0];T(e).wrapAll(n?r.cloneNode(!0):r)}))},N.wrapInner=function(t){return this.each((function(n,e){var r=T(e),i=r.contents();i.length?i.wrapAll(t):r.append(t)}))},N.has=function(t){var n=$(t)?function(n,e){return S(t,e).length}:function(n,e){return e.contains(t)};return this.filter(n)},N.is=function(t){var n=F(t);return y.call(this,(function(t,e){return n.call(t,e,t)}))},N.next=function(t,n,e){return G(T(J(q(this,"nextElementSibling",n,e))),t)},N.nextAll=function(t){return this.next(t,!0)},N.nextUntil=function(t,n){return this.next(n,!0,t)},N.not=function(t){var n=F(t);return this.filter((function(e,r){return(!$(t)||W(r))&&!n.call(r,e,r)}))},N.parent=function(t){return G(T(J(q(this,"parentNode"))),t)},N.index=function(t){var n=t?T(t)[0]:this[0],e=t?this:T(n).parent().children();return _.call(e,n)},N.closest=function(t){var n=this.filter(t);if(n.length)return n;var e=this.parent();return e.length?e.closest(t):n},N.parents=function(t,n){return G(T(J(q(this,"parentElement",!0,n))),t)},N.parentsUntil=function(t,n){return this.parents(n,t)},N.prev=function(t,n,e){return G(T(J(q(this,"previousElementSibling",n,e))),t)},N.prevAll=function(t){return this.prev(t,!0)},N.prevUntil=function(t,n){return this.prev(n,!0,t)},N.siblings=function(t){return G(T(J(q(this,(function(t){return T(t).parent().children().not(t)})))),t)},t.exports=T}()},function(t,n,e){var r=e(2),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},u=(r(i,o),i.locals?i.locals:{});t.exports=u},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),u=[];function a(t){for(var n=-1,e=0;e<u.length;e++)if(u[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},r=[],i=0;i<t.length;i++){var o=t[i],c=n.base?o[0]+n.base:o[0],s=e[c]||0,l="".concat(c," ").concat(s);e[c]=s+1;var f=a(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(u[f].references++,u[f].updater(p)):u.push({identifier:l,updater:m(p,n),references:1}),r.push(l)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var u=o(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(n)}return n}var l,f=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function p(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,i);else{var o=document.createTextNode(i),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(o,u[n]):t.appendChild(o)}}function d(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,_=0;function m(t,n){var e,r,i;if(n.singleton){var o=_++;e=h||(h=s(n)),r=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=s(n),r=d.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=a(e[r]);u[i].references--}for(var o=c(t,n),s=0;s<e.length;s++){var l=a(e[s]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}e=o}}}},function(t,n,e){(n=e(4)(!1)).push([t.i,"#ns {\n  margin-top: 10px;\n}\n#ns a.button {\n  display: inline-block;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 2px;\n  cursor: pointer;\n  min-width: auto;\n  border-radius: 0;\n}\n#ns .btn-add {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n#ns .btn-sticker {\n  margin-left: 3px;\n}\n#ns .sticker-wrapper {\n  background: white;\n  height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  transition: all 0.3s;\n}\n#ns .sticker-img {\n  border: 1px solid transparent;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: inline-block;\n}\n#ns .sticker-img:hover {\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(u=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}var u,a,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"set",(function(){return K})),e.d(r,"get",(function(){return tt})),e.d(r,"del",(function(){return nt})),e.d(r,"list",(function(){return et})),e.d(r,"onChange",(function(){return rt})),e.d(r,"update",(function(){return it})),e.d(r,"val",(function(){return ot}));var i=e(0),o=e.n(i);var u,a,c,s,l,f,p={},d=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function _(t,n){for(var e in n)t[e]=n[e];return t}function m(t){var n=t.parentNode;n&&n.removeChild(t)}function g(t,n,e){var r,i=arguments,o={};for(r in n)"key"!==r&&"ref"!==r&&(o[r]=n[r]);if(arguments.length>3)for(e=[e],r=3;r<arguments.length;r++)e.push(i[r]);if(null!=e&&(o.children=e),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===o[r]&&(o[r]=t.defaultProps[r]);return v(t,o,n&&n.key,n&&n.ref)}function v(t,n,e,r){var i={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return u.vnode&&u.vnode(i),i}function y(t){return t.children}function b(t,n){this.props=t,this.context=n}function k(t,n){if(null==n)return t.__?k(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?k(t):null}function x(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return x(t)}}function w(t){(!t.__d&&(t.__d=!0)&&a.push(t)&&!c++||l!==u.debounceRendering)&&((l=u.debounceRendering)||s)(C)}function C(){for(var t;c=a.length;)t=a.sort((function(t,n){return t.__v.__b-n.__v.__b})),a=[],t.some((function(t){var n,e,r,i,o,u;t.__d&&(o=(i=(n=t).__v).__e,(u=n.__P)&&(e=[],r=M(u,i,_({},i),n.__n,void 0!==u.ownerSVGElement,null,e,null==o?k(i):o),L(e,i),r!=o&&x(i)))}))}function S(t,n,e,r,i,o,u,a,c){var s,l,f,h,_,g,v,y=e&&e.__k||d,b=y.length;if(a==p&&(a=null!=o?o[0]:b?k(e,0):null),s=0,n.__k=E(n.__k,(function(e){if(null!=e){if(e.__=n,e.__b=n.__b+1,null===(f=y[s])||f&&e.key==f.key&&e.type===f.type)y[s]=void 0;else for(l=0;l<b;l++){if((f=y[l])&&e.key==f.key&&e.type===f.type){y[l]=void 0;break}f=null}if(h=M(t,e,f=f||p,r,i,o,u,a,c),(l=e.ref)&&f.ref!=l&&(v||(v=[]),f.ref&&v.push(f.ref,null,e),v.push(l,e.__c||h,e)),null!=h){var d;if(null==g&&(g=h),void 0!==e.__d)d=e.__d,e.__d=void 0;else if(o==f||h!=a||null==h.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(h),d=null;else{for(_=a,l=0;(_=_.nextSibling)&&l<b;l+=2)if(_==h)break t;t.insertBefore(h,a),d=a}"option"==n.type&&(t.value="")}a=void 0!==d?d:h.nextSibling,"function"==typeof n.type&&(n.__d=a)}else a&&f.__e==a&&a.parentNode!=t&&(a=k(f))}return s++,e})),n.__e=g,null!=o&&"function"!=typeof n.type)for(s=o.length;s--;)null!=o[s]&&m(o[s]);for(s=b;s--;)null!=y[s]&&O(y[s],y[s]);if(v)for(s=0;s<v.length;s++)R(v[s],v[++s],v[++s])}function E(t,n,e){if(null==e&&(e=[]),null==t||"boolean"==typeof t)n&&e.push(n(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)E(t[r],n,e);else e.push(n?n("string"==typeof t||"number"==typeof t?v(null,t,null,null):null!=t.__e||null!=t.__c?v(t.type,t.props,t.key,null):t):t);return e}function N(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]="number"==typeof e&&!1===h.test(n)?e+"px":null==e?"":e}function T(t,n,e,r,i){var o,u,a,c,s;if(i?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(o=t.style,"string"==typeof e)o.cssText=e;else{if("string"==typeof r&&(o.cssText="",r=null),r)for(u in r)e&&u in e||N(o,u,"");if(e)for(a in e)r&&e[a]===r[a]||N(o,a,e[a])}else"o"===n[0]&&"n"===n[1]?(c=n!==(n=n.replace(/Capture$/,"")),s=n.toLowerCase(),n=(s in t?s:n).slice(2),e?(r||t.addEventListener(n,A,c),(t.l||(t.l={}))[n]=e):t.removeEventListener(n,A,c)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!i&&n in t?t[n]=null==e?"":e:"function"!=typeof e&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),e):null==e||!1===e&&!/^ar/.test(n)?t.removeAttribute(n):t.setAttribute(n,e))}function A(t){this.l[t.type](u.event?u.event(t):t)}function M(t,n,e,r,i,o,a,c,s){var l,f,p,d,h,m,g,v,k,x,w=n.type;if(void 0!==n.constructor)return null;(l=u.__b)&&l(n);try{t:if("function"==typeof w){if(v=n.props,k=(l=w.contextType)&&r[l.__c],x=l?k?k.props.value:l.__:r,e.__c?g=(f=n.__c=e.__c).__=f.__E:("prototype"in w&&w.prototype.render?n.__c=f=new w(v,x):(n.__c=f=new b(v,x),f.constructor=w,f.render=H),k&&k.sub(f),f.props=v,f.state||(f.state={}),f.context=x,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=w.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=_({},f.__s)),_(f.__s,w.getDerivedStateFromProps(v,f.__s))),d=f.props,h=f.state,p)null==w.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==w.getDerivedStateFromProps&&v!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(v,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(v,f.__s,x)){for(f.props=v,f.state=f.__s,f.__d=!1,f.__v=n,n.__e=e.__e,n.__k=e.__k,f.__h.length&&a.push(f),l=0;l<n.__k.length;l++)n.__k[l]&&(n.__k[l].__=n);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(v,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,m)}))}f.context=x,f.props=v,f.state=f.__s,(l=u.__r)&&l(n),f.__d=!1,f.__v=n,f.__P=t,l=f.render(f.props,f.state,f.context),n.__k=null!=l&&l.type==y&&null==l.key?l.props.children:Array.isArray(l)?l:[l],null!=f.getChildContext&&(r=_(_({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),S(t,n,e,r,i,o,a,c,s),f.base=n.__e,f.__h.length&&a.push(f),g&&(f.__E=f.__=null),f.__e=!1}else n.__e=P(e.__e,n,e,r,i,o,a,s);(l=u.diffed)&&l(n)}catch(t){u.__e(t,n,e)}return n.__e}function L(t,n){u.__c&&u.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){u.__e(t,n.__v)}}))}function P(t,n,e,r,i,o,u,a){var c,s,l,f,h,_=e.props,m=n.props;if(i="svg"===n.type||i,null!=o)for(c=0;c<o.length;c++)if(null!=(s=o[c])&&((null===n.type?3===s.nodeType:s.localName===n.type)||t==s)){t=s,o[c]=null;break}if(null==t){if(null===n.type)return document.createTextNode(m);t=i?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,m.is&&{is:m.is}),o=null}if(null===n.type)_!==m&&t.data!=m&&(t.data=m);else if(n!==e){if(null!=o&&(o=d.slice.call(t.childNodes)),l=(_=e.props||p).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!a){if(_===p)for(_={},h=0;h<t.attributes.length;h++)_[t.attributes[h].name]=t.attributes[h].value;(f||l)&&(f&&l&&f.__html==l.__html||(t.innerHTML=f&&f.__html||""))}(function(t,n,e,r,i){var o;for(o in e)o in n||T(t,o,null,e[o],r);for(o in n)i&&"function"!=typeof n[o]||"value"===o||"checked"===o||e[o]===n[o]||T(t,o,n[o],e[o],r)})(t,m,_,i,a),n.__k=n.props.children,f||S(t,n,e,r,"foreignObject"!==n.type&&i,o,u,p,a),a||("value"in m&&void 0!==m.value&&m.value!==t.value&&(t.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==t.checked&&(t.checked=m.checked))}return t}function R(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){u.__e(t,e)}}function O(t,n,e){var r,i,o;if(u.unmount&&u.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||R(r,null,n)),e||"function"==typeof t.type||(e=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){u.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&O(r[o],n,e);null!=i&&m(i)}function H(t,n,e){return this.constructor(t,e)}function j(t,n,e){var r,i,o;u.__&&u.__(t,n),i=(r=e===f)?null:e&&e.__k||n.__k,t=g(y,null,[t]),o=[],M(n,(r?n:e||n).__k=t,i||p,p,void 0!==n.ownerSVGElement,e&&!r?[e]:i?null:d.slice.call(n.childNodes),o,e||p,r),L(o,t)}u={__e:function(t,n){for(var e,r;n=n.__;)if((e=n.__c)&&!e.__)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError&&(r=!0,e.setState(e.constructor.getDerivedStateFromError(t))),null!=e.componentDidCatch&&(r=!0,e.componentDidCatch(t)),r)return w(e.__E=e)}catch(n){t=n}throw t}},b.prototype.setState=function(t,n){var e;e=this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof t&&(t=t(e,this.props)),t&&_(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),w(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),w(this))},b.prototype.render=y,a=[],c=0,s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=p;var W,D,$,U=[],B=u.__r,I=u.diffed,F=u.__c,G=u.unmount;function V(t){u.__h&&u.__h(D);var n=D.__H||(D.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function z(t){return function(t,n,e){var r=V(W++);return r.__c||(r.__c=D,r.__=[e?e(n):Z(void 0,n),function(n){var e=t(r.__[0],n);r.__[0]!==e&&(r.__[0]=e,r.__c.setState({}))}]),r.__}(Z,t)}function q(t,n){var e=V(W++);Q(e.__H,n)&&(e.__=t,e.__H=n,D.__H.__h.push(e))}function J(){U.some((function(t){if(t.__P)try{t.__H.__h.forEach(Y),t.__H.__h.forEach(X),t.__H.__h=[]}catch(n){return u.__e(n,t.__v),!0}})),U=[]}function Y(t){t.t&&t.t()}function X(t){var n=t.__();"function"==typeof n&&(t.t=n)}function Q(t,n){return!t||n.some((function(n,e){return n!==t[e]}))}function Z(t,n){return"function"==typeof n?n(t):n}u.__r=function(t){B&&B(t),W=0,(D=t.__c).__H&&(D.__H.__h.forEach(Y),D.__H.__h.forEach(X),D.__H.__h=[])},u.diffed=function(t){I&&I(t);var n=t.__c;if(n){var e=n.__H;e&&e.__h.length&&(1!==U.push(n)&&$===u.requestAnimationFrame||(($=u.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);"undefined"!=typeof window&&(n=requestAnimationFrame(e))})(J))}},u.__c=function(t,n){n.some((function(t){try{t.__h.forEach(Y),t.__h=t.__h.filter((function(t){return!t.__||X(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],u.__e(e,t.__v)}})),F&&F(t,n)},u.unmount=function(t){G&&G(t);var n=t.__c;if(n){var e=n.__H;if(e)try{e.__.forEach((function(t){return t.t&&t.t()}))}catch(t){u.__e(t,n.__v)}}};const K=GM_setValue,tt=GM_getValue,nt=GM_deleteValue,et=GM_listValues,rt=(t,n)=>{GM_addValueChangeListener(t,(t,e,r,i)=>n(r,i,e))},it=(t,n,e)=>{K(t,e(tt(t,n)))},ot=t=>({set:K.bind(null,t),get:tt.bind(null,t),del:nt.bind(null,t),update:it.bind(null,t),onChange:rt.bind(null,t)}),ut={"Default Popop":["adore.png","after_boom.png","ah.png","amazed.png","angry.png","bad_smelly.png","baffle.png","beat_brick.png","beat_plaster.png","beat_shot.png","beated.png","beauty.png","big_smile.png","boss.png","burn_joss_stick.png","byebye.png","canny.png","choler.png","cold.png","confident.png","confuse.png","cool.png","cry.png","doubt.png","dribble.png","embarrassed.png","extreme_sexy_girl.png","feel_good.png","go.png","haha.png","hell_boy.png","hungry.png","look_down.png","matrix.png","misdoubt.png","nosebleed.png","oh.png","ops.png","pudency.png","rap.png","sad.png","sexy_girl.png","shame.png","smile.png","spiderman.png","still_dreaming.png","sure.png","surrender.png","sweat.png","sweet_kiss.png","tire.png","too_sad.png","waaaht.png","what.png"].map(t=>`/styles/next/xenforo/smilies/popopo/${t}`),"Vozer Popo":"https://imgur.com/a/0sWVa",Pepe:"https://imgur.com/a/pJX70wR"};const at=atob("VGxSRmVscFhSVE5OUkdzMVdWZEplbGxYVG1rPQ=="),ct=t=>`sticker_set_${t}`;function st(){const[t,n]=z(!0),[e,r]=z([]),[i,u]=z(tt(ft,null));q(()=>{rt(ft,(t,n)=>{n||u(t)})},[]),q(()=>{n(!0),async function(t){let n=tt(ct(t),null);if(null===n){const e=t.match(/a\/([^ ]*)/)[1];n=await async function(t){return(await((t,n)=>new Promise((e,r)=>{GM_xmlhttpRequest({method:"GET",...n,url:t,onload:function(i){if(4===i.readyState&&200===i.status){if(n.doNotParse)return e(i.responseText);e(JSON.parse(i.responseText))}else r(new Error(`Cannot load url ${t}`))}})}))(`https://api.imgur.com/3/album/${t}/images`,{headers:{Authorization:`Client-ID ${at}`,Accept:"application/json"}})).data.map(({link:t})=>t)}(e),K(ct(t),n)}return n}(i).then(t=>{r(t),n(!1)}).catch(()=>{r([]),n(!1)})},[i]);const a=t=>{!function(t){const n=window.getSelection();let e=o()(`<img src="${t}" />`)[0];e=function(t,n){if(n.startsWith("/styles/next/xenforo/smilies/popopo/")){const t=n.split("/").slice(-1)[0];return o()(`<img src="${n}" class="smilie fr-fic fr-dii" alt=":${t.substring(0,t.lastIndexOf("."))}:"/>`)[0]}return t}(e,t);const r=o()("div.fr-view[contenteditable=true] > *"),i=3===n.anchorNode.nodeType?n.anchorNode.parentElement:n.anchorNode;if(n.getRangeAt&&n.rangeCount&&i.matches("div[contenteditable=true] *")){const t=n.getRangeAt(0);t.deleteContents(),t.insertNode(e),n.modify("move","right","character")}else r.length>0&&r.last()[0].appendChild(e)}(t)},c=g("div",{className:"sticker-wrapper"},e.map(t=>g("div",{key:t,className:"sticker-img",onClick:()=>a(t)},g("img",{src:t}))));return g("div",{className:"sticker-panel"},g("div",{className:"sticker-panel-toolbar"},g("a",{className:"button btn-delete",onClick:async()=>{nt(ct(i)),it(lt,[],t=>t.filter(({url:t})=>t!==i))},"aria-label":"Delete current sticker set",role:"tooltip","data-microtip-position":"right"},"Delete"),g("a",{className:"button btn-rename",onClick:async()=>{console.log(i);const t=prompt("What is the new name of this sticker set?",i.match(/[^/]*$/));t.trim()&&it(lt,[],n=>n.map(n=>n.url!==i?n:{...n,name:t}))},"aria-label":"Change name of current sticker set",role:"tooltip","data-microtip-position":"right"},"Rename")),t&&"Loading sticker ...",!t&&0===e.length&&"Cannot load sticker set or empty",e.length>0&&c)}const lt="sticker_set_list",ft="selected_sticker_set";function pt(){const[t,n]=z(tt(lt,[])),[e,i]=z(tt(ft,null)),o=t=>{i(t),K(ft,t)};return q(()=>{rt(lt,n),rt(ft,(t,n)=>{n||i(t)}),function(t,n,e){t.update(n,[],n=>(Object.keys(ut).reverse().forEach(r=>{if(!n.find(t=>r===t.name)){const i=ut[r];"string"==typeof i?n.unshift({name:r,url:i}):(n.unshift({name:r,url:r}),t.set(e(r),i))}}),n))}(r,lt,ct)},[]),q(()=>{!t.find(({url:t})=>t===e)&&t.length>0&&o(t[0].url)},[t,e]),g("div",null,g("a",{className:"button",href:"https://next.voz.vn/threads/tap-hop-userscript-huu-dung-cho-next-sticker-navigation.854/#post-39483",target:"_blank","aria-label":"Sticker Collection",role:"tooltip","data-microtip-position":"bottom-left"},"Stickers"),g("a",{className:"btn-add button button--primary",onClick:()=>{const{url:t,name:n}=function(){let t=prompt("imgur album url or id","https://imgur.com/a/");t.startsWith("http")||(t="https://imgur.com/a/"+t);const n=t.match(/a\/([^ ]*)/)[1],e=prompt("Sticker name",n);return{url:t,name:e}}();it(lt,[],e=>e.concat({url:t,name:n})),o(t)},"aria-label":"Add Sticker by Imgur URL/ID",role:"tooltip","data-microtip-position":"bottom-left"},"Add Sticker"),g("span",{className:"ss-list"},t.map(({url:t,name:n})=>g("a",{className:`button btn-sticker ${e===t?"button--primary":"button--link"}`,onClick:()=>o(t)},n))))}function dt(t){return new Promise(n=>{GM_notification(t,n)})}e(1);const ht=o()(".js-previewContainer").length?".js-previewContainer":".message-editorWrapper .formButtonGroup";function _t(){return g("div",null,g(st,null),g(pt,null))}o()(()=>function(t){var n,e;(n=document.getElementsByTagName("head")[0])&&((e=document.createElement("link")).type="text/css",e.rel="stylesheet",e.href=t,n.appendChild(e))}("https://unpkg.com/microtip/microtip.css")),function(){const t=function(){if(0===o()(ht).length)return;let t=o()("#ns");return t.length>0||(t=o()('<div id="ns"></div>'),t.insertBefore(ht)),t[0]}();t&&j(g(_t,null),t)}(),o()('iframe[src*="://imgur.com/a/"]').add('a[href*="://imgur.com/a/"]').each((t,n)=>{const e=n.src||n.href;n.parentElement.classList.contains("imgur-embed-pub")&&(n=n.parentElement.parentElement);const r=n.previousSibling,i=r.textContent;if(i.length>20)return;const u=o()(`<a class="button button--link">Add Sticker ${i}</a>`);o()(r).replaceWith(u),u.on("click",()=>{let t=i.trim();0===t.length&&(t=prompt("What should be the name for this sticket set",e.match(/[^/]*$/))),t?function(t,n){it(lt,[],e=>e.concat({name:n,url:t})),dt({text:`Added ${n} from ${t}`,title:"Add Sticker",timeout:4e3})}(e.trim(),t):dt({text:"The action is canceled",title:"Add Sticker",timeout:4e3})})})}]);