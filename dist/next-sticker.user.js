// ==UserScript==
// @name        Next Sticker
// @version     1.3.0
// @author      Khoi-Phong Le
// @description Add Sticker to your post
// @homepage    https://next.voz.vn/threads/userscript-sticker-cho-next.854/
// @supportURL  https://github.com/phonglk/userscripts/pulls
// @match       https://*.voz.vn/*
// @namespace   Next
// @updateURL   https://github.com/phonglk/userscripts/raw/master/dist/next-sticker.user.js
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

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},l=(r(o,i),o.locals?o.locals:{});e.exports=l},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function u(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],a=n[c]||0,_="".concat(c," ").concat(a);n[c]=a+1;var s=u(_),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(l[s].references++,l[s].updater(f)):l.push({identifier:_,updater:m(f,t),references:1}),r.push(_)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=i(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var _,s=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=d||(d=a(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=a(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);l[o].references--}for(var i=c(e,t),a=0;a<n.length;a++){var _=u(n[a]);0===l[_].references&&(l[_].updater(),l.splice(_,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"#ns {\n  margin-top: 10px;\n}\n#ns a.button {\n  display: inline-block;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 2px;\n  cursor: pointer;\n  min-width: auto;\n  border-radius: 0;\n}\n#ns .btn-add {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n#ns .btn-sticker {\n  margin-left: 3px;\n}\n#ns .sticker-wrapper {\n  background: white;\n  height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  transition: all 0.3s;\n}\n#ns .sticker-img {\n  border: 1px solid transparent;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: inline-block;\n}\n#ns .sticker-img:hover {\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(l=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var l,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var r,o,i,l,u,c,a={},_=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return h(e,i,t&&t.key,t&&t.ref)}function h(e,t,n,o){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return r.vnode&&r.vnode(i),i}function m(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!i++||u!==r.debounceRendering)&&((u=r.debounceRendering)||l)(k)}function k(){for(var e;i=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,o,i,l;e.__d&&(i=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],r=E(l,o,f({},o),t.__n,void 0!==l.ownerSVGElement,null,n,null==i?y(o):i),M(n,o),r!=i&&g(o)))}))}function w(e,t,n,r,o,i,l,u,c){var s,f,d,h,m,v,g,b=n&&n.__k||_,k=b.length;if(u==a&&(u=null!=i?i[0]:k?y(n,0):null),s=0,t.__k=x(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[s])||d&&n.key==d.key&&n.type===d.type)b[s]=void 0;else for(f=0;f<k;f++){if((d=b[f])&&n.key==d.key&&n.type===d.type){b[f]=void 0;break}d=null}if(h=E(e,n,d=d||a,r,o,i,l,u,c),(f=n.ref)&&d.ref!=f&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(f,n.__c||h,n)),null!=h){var _;if(null==v&&(v=h),void 0!==n.__d)_=n.__d,n.__d=void 0;else if(i==d||h!=u||null==h.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(h),_=null;else{for(m=u,f=0;(m=m.nextSibling)&&f<k;f+=2)if(m==h)break e;e.insertBefore(h,u),_=u}"option"==t.type&&(e.value="")}u=void 0!==_?_:h.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&d.__e==u&&u.parentNode!=e&&(u=y(d))}return s++,n})),t.__e=v,null!=i&&"function"!=typeof t.type)for(s=i.length;s--;)null!=i[s]&&p(i[s]);for(s=k;s--;)null!=b[s]&&P(b[s],b[s]);if(g)for(s=0;s<g.length;s++)A(g[s],g[++s],g[++s])}function x(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)x(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===s.test(t)?n+"px":null==n?"":n}function C(e,t,n,r,o){var i,l,u,c,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)n&&l in n||S(i,l,"");if(n)for(u in n)r&&n[u]===r[u]||S(i,u,n[u])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,N,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,N,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function N(e){this.l[e.type](r.event?r.event(e):e)}function E(e,t,n,o,i,l,u,c,a){var _,s,p,d,h,y,g,b,k,x,S=t.type;if(void 0!==t.constructor)return null;(_=r.__b)&&_(t);try{e:if("function"==typeof S){if(b=t.props,k=(_=S.contextType)&&o[_.__c],x=_?k?k.props.value:_.__:o,n.__c?g=(s=t.__c=n.__c).__=s.__E:("prototype"in S&&S.prototype.render?t.__c=s=new S(b,x):(t.__c=s=new v(b,x),s.constructor=S,s.render=j),k&&k.sub(s),s.props=b,s.state||(s.state={}),s.context=x,s.__n=o,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=S.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=f({},s.__s)),f(s.__s,S.getDerivedStateFromProps(b,s.__s))),d=s.props,h=s.state,p)null==S.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(b,x),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(b,s.__s,x)){for(s.props=b,s.state=s.__s,s.__d=!1,s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&u.push(s),_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__=t);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(b,s.__s,x),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,h,y)}))}s.context=x,s.props=b,s.state=s.__s,(_=r.__r)&&_(t),s.__d=!1,s.__v=t,s.__P=e,_=s.render(s.props,s.state,s.context),t.__k=null!=_&&_.type==m&&null==_.key?_.props.children:Array.isArray(_)?_:[_],null!=s.getChildContext&&(o=f(f({},o),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(y=s.getSnapshotBeforeUpdate(d,h)),w(e,t,n,o,i,l,u,c,a),s.base=t.__e,s.__h.length&&u.push(s),g&&(s.__E=s.__=null),s.__e=!1}else t.__e=T(n.__e,t,n,o,i,l,u,a);(_=r.diffed)&&_(t)}catch(e){r.__e(e,t,n)}return t.__e}function M(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function T(e,t,n,r,o,i,l,u){var c,s,f,p,d,h=n.props,m=t.props;if(o="svg"===t.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(s=i[c])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),i=null}if(null===t.type)h!==m&&e.data!=m&&(e.data=m);else if(t!==n){if(null!=i&&(i=_.slice.call(e.childNodes)),f=(h=n.props||a).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(h===a)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)i in t||C(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||C(e,i,t[i],n[i],r)})(e,m,h,o,u),t.__k=t.props.children,p||w(e,t,n,r,"foreignObject"!==t.type&&o,i,l,a,u),u||("value"in m&&void 0!==m.value&&m.value!==e.value&&(e.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==e.checked&&(e.checked=m.checked))}return e}function A(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function P(e,t,n){var o,i,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||A(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&P(o[l],t,n);null!=i&&p(i)}function j(e,t,n){return this.constructor(e,n)}function H(e,t,n){var o,i,l;r.__&&r.__(e,t),i=(o=n===c)?null:n&&n.__k||t.__k,e=d(m,null,[e]),l=[],E(t,(o?t:n||t).__k=e,i||a,a,void 0!==t.ownerSVGElement,n&&!o?[n]:i?null:_.slice.call(t.childNodes),l,n||a,o),M(l,e)}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return b(n.__E=n)}catch(t){e=t}throw e}},v.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=m,o=[],i=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=a;n(0);var D,L,U,O=[],R=r.__r,W=r.diffed,F=r.__c,G=r.unmount;function I(e){r.__h&&r.__h(L);var t=L.__H||(L.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function B(e){return function(e,t,n){var r=I(D++);return r.__c||(r.__c=L,r.__=[n?n(t):K(void 0,t),function(t){var n=e(r.__[0],t);r.__[0]!==n&&(r.__[0]=n,r.__c.setState({}))}]),r.__}(K,e)}function V(e,t){var n=I(D++);Y(n.__H,t)&&(n.__=e,n.__H=t,L.__H.__h.push(n))}function q(){O.some((function(e){if(e.__P)try{e.__H.__h.forEach(z),e.__H.__h.forEach(J),e.__H.__h=[]}catch(t){return r.__e(t,e.__v),!0}})),O=[]}function z(e){e.t&&e.t()}function J(e){var t=e.__();"function"==typeof t&&(e.t=t)}function Y(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function K(e,t){return"function"==typeof t?t(e):t}r.__r=function(e){R&&R(e),D=0,(L=e.__c).__H&&(L.__H.__h.forEach(z),L.__H.__h.forEach(J),L.__H.__h=[])},r.diffed=function(e){W&&W(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(1!==O.push(t)&&U===r.requestAnimationFrame||((U=r.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(q))}},r.__c=function(e,t){t.some((function(e){try{e.__h.forEach(z),e.__h=e.__h.filter((function(e){return!e.__||J(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],r.__e(n,e.__v)}})),F&&F(e,t)},r.unmount=function(e){G&&G(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){r.__e(e,t.__v)}}};const Z=GM_setValue,Q=GM_getValue,X=GM_deleteValue,ee=(GM_listValues,(e,t)=>{GM_addValueChangeListener(e,(e,n,r,o)=>t(r,o,n))}),te=(e,t,n)=>{Z(e,n(Q(e,t)))};function ne(){const[e,t]=B(Q("sticker_set_list",[])),[n,r]=B(Q("selected_sticker_set",null)),o=e=>{r(e),Z("selected_sticker_set",e)};return V(()=>{ee("sticker_set_list",t),ee("selected_sticker_set",(e,t)=>{t||r(e)})},[]),V(()=>{!e.find(({url:e})=>e===n)&&e.length>0&&o(e[0].url)},[e,n]),d("div",null,d("a",{className:"btn-add button button--primary",onClick:()=>{const{url:e,name:t}=function(){let e=prompt("imgur album url or id","https://imgur.com/a/");e.startsWith("http")||(e="https://imgur.com/a/"+e);const t=e.match(/a\/([^ ]*)/)[1],n=prompt("Sticker name",t);return{url:e,name:n}}();te("sticker_set_list",[],n=>n.concat({url:e,name:t})),o(e)}},"ADD STICKER"),d("span",{className:"ss-list"},e.map(({url:e,name:t})=>d("a",{className:`button btn-sticker ${n===e?"button--primary":"button--link"}`,onClick:()=>o(e)},t))))}const re=atob("NTEzZWE3MDk5YWIzYWNi"),oe=e=>`sticker_set_${e}`;function ie(){const[e,t]=B(!0),[n,r]=B([]),[o,i]=B(Q("selected_sticker_set",null));V(()=>{ee("selected_sticker_set",(e,t)=>{t||i(e)})},[]),V(()=>{t(!0),async function(e){let t=Q(oe(e),null);if(null===t){const n=e.match(/a\/([^ ]*)/)[1];t=await async function(e){return(await((e,t)=>new Promise((n,r)=>{GM_xmlhttpRequest({method:"GET",...t,url:e,onload:function(t){4===t.readyState&&200===t.status?n(JSON.parse(t.responseText)):r(new Error(`Cannot load url ${e}`))}})}))(`https://api.imgur.com/3/album/${e}/images`,{headers:{Authorization:`Client-ID ${re}`,Accept:"application/json"}})).data.map(({link:e})=>e)}(n),Z(oe(e),t)}return t}(o).then(e=>{r(e),t(!1)}).catch(()=>{r([]),t(!1)})},[o]);const l=e=>{!function(e){const t=window.getSelection(),n=$(`<img src="${e}" />`)[0],r=$("div.fr-view[contenteditable=true] > *"),o=3===t.anchorNode.nodeType?t.anchorNode.parentElement:t.anchorNode;if(t.getRangeAt&&t.rangeCount&&o.matches("div[contenteditable=true] *")){const e=t.getRangeAt(0);e.deleteContents(),e.insertNode(n),t.modify("move","right","character")}else r.length>0&&r.last()[0].appendChild(n)}(e)},u=d("div",{className:"sticker-wrapper"},n.map(e=>d("div",{key:e,className:"sticker-img",onClick:()=>l(e)},d("img",{src:e}))));return d("div",{className:"sticker-panel"},d("div",{className:"sticker-panel-toolbar"},d("a",{className:"button btn-delete",onClick:async()=>{X(oe(o)),te("sticker_set_list",[],e=>e.filter(({url:e})=>e!==o))}},"Delete")),e&&"Loading sticker ...",!e&&0===n.length&&"Cannot load sticker set or empty",n.length>0&&u)}function le(){const e=function(){if(0===$(".js-previewContainer").length)return;let e=$("#ns");return e.length>0||(e=$('<div id="ns"></div>'),e.insertBefore(".js-previewContainer")),e[0]}();e&&H(d(ue,null),e)}function ue(){return d("div",null,d(ie,null),d(ne,null))}le(),$('iframe[src*="://imgur.com/a/"]').add('a[href*="://imgur.com/a/"]').each((e,t)=>{const n=t.src||t.href;t.parentElement.classList.contains("imgur-embed-pub")&&(t=t.parentElement.parentElement);const r=t.previousSibling,o=r.textContent;if(o.length>20)return;const i=$(`<a class="button button--link">Add Sticker ${o}</a>`);$(r).replaceWith(i),i.on("click",()=>function(e,t){var n;te("sticker_set_list",[],n=>n.concat({name:t,url:e})),n={text:`Added ${t} from ${e}`,title:"Add Sticker",timeout:4e3},new Promise(e=>{GM_notification(n,e)})}(n.trim(),o.trim()))})}]);