!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("iETLi",(function(t,n){e(t.exports,"requesterApi",(function(){return a})),e(t.exports,"requesterApiByID",(function(){return c})),e(t.exports,"requesterApiGenres",(function(){return s})),e(t.exports,"requesterTrailerByID",(function(){return u}));var r=i("j1lrD"),o="1e7c9642f723687d0411097a32c8e17f";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;(0,r.spinnerStart)();var n="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(o,"&page=").concat(t,"&language=en-US");return e&&(n="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=").concat(t,"&language=en-US")),fetch(n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}function c(e){return(0,r.spinnerStart)(),fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}function s(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(o,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((function(e){return console.log(e)}))}function u(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(o)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}})),i.register("j1lrD",(function(t,n){e(t.exports,"spinnerStart",(function(){return o})),e(t.exports,"spinnerStop",(function(){return i}));var r=document.querySelector(".overlay");function o(){r.classList.add("is-open")}function i(){r.classList.remove("is-open")}})),i.register("lF0Zg",(function(n,r){e(n.exports,"renderHomeCards",(function(){return d})),e(n.exports,"rerender",(function(){return h})),e(n.exports,"renderWatched",(function(){return p})),e(n.exports,"renderQueue",(function(){return v}));var o,a=i("bIW8b"),c=i("j1lrD"),s=i("iETLi"),u=document.querySelector(".list"),l=document.querySelector(".wrapper-holder");function d(e){o=0,document.querySelector(".list").innerHTML=e.reduce((function(e,t){var n=t.id,r=t.poster_path,o=t.title,i=t.release_date,a=t.genre_ids,c=t.vote_average;r=y(r),o=g(o);var s=m(a);return e+'<li class="item" id="'.concat(n,'">\n                            <div class="photo__wrapper">\n                                <a class="img__link" href="#">\n                                    <img class="img" src="').concat(r,'" alt="" width="395">\n                                </a>\n                            </div>\n                            <div class="data__content">\n                                <h2 class="title">').concat(o,'</h2>\n                                <p class="text">').concat(s.join(", ")," ").concat(s[0]&&i?"|":"","\n                                ").concat(i?"".concat(i.slice(0,4)):"",' <span class="card-raiting">').concat(c.toFixed(1),"</span></p>\n                            </div>\n                        </li>")}),"")}function f(e){var t=e.id,n=e.genres,r=e.poster_path,o=e.title,i=e.release_date,a=e.vote_average;r=y(r),o=g(o);var c=[];n.forEach((function(e){return c.push(e.id)}));var s=m(c),u='<li class="item" id="'.concat(t,'">\n                    <div class="photo__wrapper">\n                        <a class="img__link" href="#">\n                            <img class="img" src="').concat(r,'" alt="" width="395">\n                        </a>\n                    </div>\n                    <div class="data__content">\n                        <h2 class="title">').concat(o,'</h2>\n                        <p class="text">').concat(s.join(", ")," ").concat(s[0]&&i?"|":"","\n                        ").concat(i?"".concat(i.slice(0,4)):"",' <span class="card-raiting">').concat(a.toFixed(1),"</span></p>\n                    </div>\n                </li>");document.querySelector(".list").insertAdjacentHTML("beforeend",u)}function h(){1===o?p():2===o&&v()}function p(){u.innerHTML="";var e=JSON.parse(localStorage.getItem("watchedMoviesIDs"));e&&e[0]?(o=1,e.forEach((function(e){(0,s.requesterApiByID)(e).then((function(e){f(e),(0,c.spinnerStop)()}))}))):l.classList.remove("is-hidden")}function v(){u.innerHTML="";var e=JSON.parse(localStorage.getItem("queueMoviesIDs"));e&&e[0]?(o=2,e.forEach((function(e){(0,s.requesterApiByID)(e).then((function(e){f(e),(0,c.spinnerStop)()}))}))):l.classList.remove("is-hidden")}function m(e){var t=[];return JSON.parse(localStorage.getItem("genresList")).forEach((function(n){e.includes(n.id)&&t.length<3&&(t.length<2?t.push(n.name):t.push("Other"))})),t}function g(e){if(e.length>40){e=e.split(" ");var t="";e.forEach((function(e){(t+e).length<=40&&!t.endsWith("...")?t+=" ".concat(e):t.endsWith("...")||(t+="...")})),e=t}return e}function y(e){return e=e?"https://image.tmdb.org/t/p/w500".concat(e):t(a)}})),i.register("bIW8b",(function(e,t){e.exports=i("aNJCr").getBundleURL("6IIJ4")+i("iE7OH").resolve("iXtly")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i.register("5y4IR",(function(e,t){var n=document.querySelector(".btn-theme"),r=document.querySelector("body");document.querySelector(".theme-light"),document.querySelector(".theme-night");n.addEventListener("click",(function(e){e.preventDefault(),r.classList.contains("dark-theme")?(r.classList.remove("dark-theme"),r.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(r.classList.remove("light-theme"),r.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))})),"dark-theme"===localStorage.getItem("theme")&&r.classList.add("dark-theme"),"light-theme"===localStorage.getItem("theme")&&r.classList.add("light-theme")})),i.register("ghnK3",(function(e,t){!function(){var e=document.querySelector("[data-modal-open]"),t=document.querySelector(".team-modal__button"),n=document.querySelector(".modal-overlay"),r=document.querySelector("body");function o(){r.classList.remove("scroll-hidden"),t.removeEventListener("click",o),n.classList.add("is-hidden"),n.removeEventListener("click",o),window.removeEventListener("keydown",i),document.body.style.overflow="visible"}function i(e){"Escape"===e.code&&o()}function a(e){e.currentTarget===e.target&&o()}e.addEventListener("click",(function(){n.classList.remove("is-hidden"),window.addEventListener("keydown",i),t.addEventListener("click",o),n.addEventListener("click",a),r.classList.add("scroll-hidden"),document.body.style.overflow="hidden"}))}()})),i.register("98NyC",(function(e,n){var r=i("bpxeT"),o=i("2TvXO"),a=i("dyT35"),c=i("iETLi"),s=(c=i("iETLi"),i("afVow")),u=i("lWBva"),l=i("lF0Zg"),d=i("j1lrD"),f=i("3oIdE"),h=0,p={};function v(){return(v=t(r)(t(o).mark((function e(n){var r;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"UL"!==n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:return r=n.target.closest("li[id]"),h=m(r),e.next=7,g(h);case 7:w(e.sent),(0,u.watchedQueue)(),_();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return e.id}function g(e){return y.apply(this,arguments)}function y(){return(y=t(r)(t(o).mark((function e(n){var r;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.requesterApiByID)(n);case 3:return r=e.sent,e.next=6,(0,d.spinnerStop)();case 6:return e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(e){var n=(0,s.modalLibraryMarkup)(e),r=a.create('\n    <div class="modal" id ="'.concat(e.id,'">\n    <button type="button" class="movies-modal__close-btn" data-modal-close>\n    <svg class="movies-modal__close-icon" width="14" height="14">\n        <use href="').concat(t(f),'#icon-x"></use>\n        </svg>\n    </button>\n  ').concat(n,"\n</div>\n"),{onShow:function(e){e.element().querySelector("button[data-modal-close]").onclick=e.close,window.addEventListener("keydown",b),document.body.setAttribute("style","overflow: hidden")},onClose:function(){window.removeEventListener("keydown",b),document.body.removeAttribute("style"),(0,l.rerender)()}});r.show();var o=JSON.parse(localStorage.getItem("watchedMoviesIDs")),i=JSON.parse(localStorage.getItem("queueMoviesIDs"));return o&&o.includes(e.id)&&(document.querySelector(".js-addtowatched").textContent="remove from watched"),i&&i.includes(e.id)&&(document.querySelector(".js-addtoqueue").textContent="remove from queue"),p=r}function b(e){"Escape"===e.code&&p.close()}function _(){document.querySelector(".js-playtrailer").addEventListener("click",x)}function x(e){return L.apply(this,arguments)}function L(){return(L=t(r)(t(o).mark((function e(n){var r,i,a;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,S(h);case 3:r=e.sent,console.log(r),i=r.results,(a=i.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site})))?I(a):Notify.failure("Sorry, we can`t find any trailer of this movie.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return E.apply(this,arguments)}function E(){return(E=t(r)(t(o).mark((function e(n){var r;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.requesterTrailerByID)(n);case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR = ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function I(e){var n,r=a.create('\n  <iframe width="806" height="558"\n  src="https://www.youtube.com/embed/'.concat(e.key,'"\n  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n  allowfullscreen></iframe>\n'),{onShow:function(e){e.element(),window.addEventListener("keydown",o),window.removeEventListener("keydown",b),document.body.setAttribute("style","overflow: hidden")},onClose:function(){window.removeEventListener("keydown",o),window.addEventListener("keydown",b),document.body.removeAttribute("style")}});function o(e){"Escape"===e.code&&r.close()}r.show(),n=r,document.querySelector(".basicLightbox--iframe").insertAdjacentHTML("afterbegin",'<button\n            type="button"\n            class="player__cls-btn"\n            data-action="close-lightbox"\n            >\n            <svg class="movies-modal__close-icon" width="14" height="14">\n            <use href="'.concat(t(f),'#icon-x"></use>\n            </svg>\n            </button>\n        ')),document.querySelector('[data-action="close-lightbox"]').addEventListener("click",(function(){return n.close()}))}document.querySelector(".list").addEventListener("click",(function(e){return v.apply(this,arguments)}))})),i.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,s,"next",e)}function s(e){n(a,o,i,c,s,"throw",e)}c(void 0)}))}}})),i.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new q(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var w={};s(w,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(O([])));_&&_!==n&&r.call(_,i)&&(w=_);var x=y.prototype=m.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function O(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return g.prototype=y,s(x,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},L(S.prototype),s(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("dyT35",(function(e,t){e.exports=function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,(function(e){return o(t[a][1][e]||e)}),l,l.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1)})),i.register("afVow",(function(n,r){e(n.exports,"modalLibraryMarkup",(function(){return c}));var o=i("bIW8b"),a=i("3oIdE");function c(e){var n,r=e.poster_path,i=e.title,c=e.original_title,s=e.genres,u=e.vote_average,l=e.vote_count,d=e.popularity,f=e.overview,h="no information",p=s.map((function(e){return e.name}));p.length>0&&(h=p.join(", ")),n=r?"https://image.tmdb.org/t/p/original/".concat(r):t(o);var v="Sorry! We don't have a description for this movie yet.";return f.length>0&&(v=f),'<div class="movie-modal__content">\n      <img class="movie-modal__img" src="'.concat(n,'" alt="').concat(i,'"></img>\n  <div class="movie-modal__text">\n    <h2 class="movie-modal__title">').concat(i,'</h2>\n    <table>\n  <tbody>\n    <tr>\n      <td class="movie-modal__properties space">Vote / Votes</td>\n      <td class="movie-modal__values"><span class="movie-modal__vote-average">').concat(u.toFixed(1),'</span> / <span class="movie-modal__vote-count">').concat(l,'</span></td>\n    </tr>\n    <tr>\n      <td class="movie-modal__properties space">Popularity</td>\n      <td class="movie-modal__values">').concat(d.toFixed(1),'</td>\n    </tr>\n    <tr>\n      <td class="movie-modal__properties space">Original Title</td>\n      <td class="movie-modal__values">').concat(c,'</td>\n    </tr>\n    <tr>\n    <td class="movie-modal__properties">Genre</td>\n    <td class="movie-modal__values">').concat(h,'</td>\n  </tr>\n  </tbody>\n</table>\n      <p class="movie-modal__about--title">ABOUT</p>\n      <button type="button" class="modal__watch-button js-playtrailer">\n      <svg class="movies-modal__play-icon" width="14" height="14">\n        <use href="').concat(t(a),'#icon-play"></use>\n      </svg><span>Watch trailer</span>\n      </button>\n      <p class="movie-modal__about--text">').concat(v,'</p>\n      <ul class="modal__btns">\n        <li><button type="button" class="modal__btns__button js-addtowatched">add to watched</button></li>\n        <li><button type="button" class="modal__btns__button js-addtoqueue">add to queue</button></li>\n      </ul>\n  </div>\n</div>\n    ')}})),i.register("3oIdE",(function(e,t){e.exports=i("aNJCr").getBundleURL("6IIJ4")+i("iE7OH").resolve("kxKJ3")})),i.register("lWBva",(function(t,n){e(t.exports,"watchedQueue",(function(){return o}));var r=i("6Ymi3");function o(){var e=document.querySelector(".modal"),t=e.id;e.addEventListener("click",(function(e){"add to watched"===e.target.textContent?((0,r.watchedMovies)("put",Number(t)),e.target.textContent="remove from watched"):"add to queue"===e.target.textContent?((0,r.queueMovies)("put",Number(t)),e.target.textContent="remove from queue"):"remove from watched"===e.target.textContent?((0,r.watchedMovies)("remove",Number(t)),e.target.textContent="add to watched"):"remove from queue"===e.target.textContent&&((0,r.queueMovies)("remove",Number(t)),e.target.textContent="add to queue")}))}})),i.register("6Ymi3",(function(t,n){function r(e,t){if("put"===e)if(localStorage.getItem("watchedMoviesIDs")){var n=JSON.parse(localStorage.getItem("watchedMoviesIDs"));n.includes(t)||(n.push(t),localStorage.setItem("watchedMoviesIDs",JSON.stringify(n)))}else localStorage.setItem("watchedMoviesIDs",JSON.stringify([t]));else{if("get"===e&&localStorage.getItem("watchedMoviesIDs"))return JSON.parse(localStorage.getItem("watchedMoviesIDs"));if("remove"===e&&localStorage.getItem("watchedMoviesIDs")){var r=JSON.parse(localStorage.getItem("watchedMoviesIDs"));r.includes(t)&&(r.splice(r.indexOf(t),1),localStorage.setItem("watchedMoviesIDs",JSON.stringify(r)))}}}function o(e,t){if("put"===e)if(localStorage.getItem("queueMoviesIDs")){var n=JSON.parse(localStorage.getItem("queueMoviesIDs"));n.includes(t)||(n.push(t),localStorage.setItem("queueMoviesIDs",JSON.stringify(n)))}else localStorage.setItem("queueMoviesIDs",JSON.stringify([t]));else{if("get"===e&&localStorage.getItem("queueMoviesIDs"))return JSON.parse(localStorage.getItem("queueMoviesIDs"));if("remove"===e&&localStorage.getItem("queueMoviesIDs")){var r=JSON.parse(localStorage.getItem("queueMoviesIDs"));r.includes(t)&&(r.splice(r.indexOf(t),1),localStorage.setItem("queueMoviesIDs",JSON.stringify(r)))}}}e(t.exports,"watchedMovies",(function(){return r})),e(t.exports,"queueMovies",(function(){return o}))})),i("iE7OH").register(JSON.parse('{"6IIJ4":"my-library.4e2ffb97.js","iXtly":"noposter.9c466f47.jpg","kxKJ3":"symbol-defs.42cbda85.svg"}'))}();
//# sourceMappingURL=my-library.4e2ffb97.js.map
