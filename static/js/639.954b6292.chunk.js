(self.webpackChunkmemory_card_game=self.webpackChunkmemory_card_game||[]).push([[639],{7757:function(t,r,e){t.exports=e(9727)},3798:function(t,r,e){"use strict";e.d(r,{L:function(){return c}});var n=e(5671),o=e(3144),i=e(4569),a=e.n(i),c=new(function(){function t(){(0,n.Z)(this,t),this.baseUrl=void 0,this.baseUrl="http://amiiboapi.com/api"}return(0,o.Z)(t,[{key:"getSeriesKeys",value:function(){return a().get(this.baseUrl+"/amiiboseries").then((function(t){return t.data}))}},{key:"getSeriesByKey",value:function(t){return a().get(this.baseUrl+"/amiibo/?amiiboSeries=".concat(t)).then((function(t){return t.data}))}}]),t}())},7639:function(t,r,e){"use strict";function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void e(f)}c.done?r(u):Promise.resolve(u).then(n,o)}e.r(r),e.d(r,{default:function(){return L}});var o=e(907);var i=e(181);function a(t){return function(t){if(Array.isArray(t))return(0,o.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function u(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var s=e(885),l=e(7757),h=e.n(l),p="Game_container__LI8uV",y=e(6871),v=e(2791),d=e(3798),m="PlayCard_container__PUlbt",g="PlayCard_card__hxXGN",b="PlayCard_rotate__Y4O89",w="PlayCard_front__sr2D0",x="PlayCard_back__M0zFR",_=e(184),j=function(t){return(0,v.useEffect)((function(){}),[]),(0,_.jsx)("div",{className:m,children:(0,_.jsxs)("div",{onClick:function(){return t.click()},className:"".concat(g," ").concat(t.rotate?b:""),children:[(0,_.jsx)("div",{className:w}),(0,_.jsx)("div",{className:x,style:{backgroundImage:"url(".concat(t.background,")")}})]})})};var L=function(){var t=(0,v.useState)([]),r=(0,s.Z)(t,2),e=r[0],o=r[1],i=(0,v.useState)([]),c=(0,s.Z)(i,2),u=c[0],l=c[1],m=(0,v.useState)(null),g=(0,s.Z)(m,2),b=g[0],w=g[1],x=(0,v.useState)([]),L=(0,s.Z)(x,2),O=L[0],E=L[1],k=(0,v.useState)(0),P=(0,s.Z)(k,2),S=P[0],N=P[1],G=(0,v.useRef)(!0),T=(0,y.TH)().state,Z=(0,y.s0)(),C=null===T||void 0===T?void 0:T.series,A=null===T||void 0===T?void 0:T.key;(0,v.useEffect)((function(){G.current=!0}),[b]),(0,v.useEffect)((function(){O.length>0&&O.length===u.length&&D()}),[O,u]),(0,v.useEffect)((function(){var t=Array.from(Array(e.length).keys()).sort((function(){return Math.random()-.5})).slice(0,5).map((function(t){return f(f({},e[t]),{},{rotate:!1})}));l(function(t){for(var r=t.length-1;r>0;r--){var e=Math.floor(Math.random()*(r+1)),n=[t[e],t[r]];t[r]=n[0],t[e]=n[1]}return t}([].concat(a(t),a(t))))}),[e,S]),(0,v.useEffect)((function(){if(!C||!A)return Z("/home");var t=function(){var t,r=(t=h().mark((function t(){var r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.L.getSeriesByKey(A).then((function(t){return t.amiibo}));case 2:r=t.sent,o(r);case 4:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[C,A]);var F=function(t){l((function(r){return r.map((function(r,e){return t===e?f(f({},r),{},{rotate:!0}):r}))}))},I=function(t){null==b&&alert("contact police this should not have happened");var r=u[t],e=u[b];r.name!==e.name&&l((function(r){return r.map((function(r,e){return e===t||e===b?f(f({},r),{},{rotate:!1}):r}))})),r.name===e.name&&E((function(r){return[].concat(a(r),[t,b])})),w(null)},D=function(){alert("Win ".concat(S+1)),w(null),E([]),N((function(t){return t+1}))};return(0,_.jsx)("div",{className:p,children:u.map((function(t,r){return(0,_.jsx)(j,{index:r,click:function(){return function(t){t!==b&&!O.includes(t)&&G.current&&(G.current=!1,F(t),setTimeout((function(){console.log("last selection "+b),null!==b?I(t):w(t)}),500))}(r)},background:t.image,rotate:t.rotate},r)}))})}},9727:function(t){var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(G){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?y:h,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(G){return{type:"throw",arg:G}}}t.wrap=f;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==e&&n.call(x,i)&&(b=x);var _=g.prototype=d.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return m.prototype=g,u(_,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(_),u(_,c,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(e){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=639.954b6292.chunk.js.map