!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o,u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,p=v||m||Function("return this")(),y=Object.prototype.toString,b=Math.max,g=Math.min,h=function(){return p.Date.now()};function N(e,t,n){var r,i,o,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function p(e){return l=e,f=setTimeout(N,t),s?m(e):u}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function N(){var e=h();if(y(e))return w(e);f=setTimeout(N,function(e){var n=t-(e-c);return d?g(n,o-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function T(){var e=h(),n=y(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return p(c);if(d)return f=setTimeout(N,t),m(c)}return void 0===f&&(f=setTimeout(N,t)),u}return t=j(t)||0,O(n)&&(s=!!n.leading,o=(d="maxWait"in n)?b(j(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(h())},T}function O(t){var n=void 0===t?"undefined":e(u)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(O(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=O(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=l.test(t);return r||s.test(t)?d(t.slice(2),r?2:8):c.test(t)?NaN:+t}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return O(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),N(e,t,{leading:r,maxWait:t,trailing:i})};var w,T=i("h6c0i"),x=document.querySelector(".form"),S="userDataPromise",E={},M=x.elements,V=M.delay,_=M.step,D=M.amount;function I(e,t){return new Promise((function(n,r){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}function $(e,t){e.value=t[e.name]||""}function q(e,t,n){t[e.name]=n[e.name]||""}function F(e){var t=e.position,n=e.delay;T.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))}function L(e){var t=e.position,n=e.delay;T.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}x.addEventListener("submit",(function(e){e.preventDefault();for(var t=function(){var e=Number(V.value),t=Number(_.value),n=Number(D.value);return{delayValue:e,stepValue:t,amountValue:n}}(),n=t.delayValue,r=t.stepValue,i=t.amountValue,o=1;o<=i;o+=1)I(o,n).then(F).catch(L),n+=r;e.currentTarget.reset(),E={},localStorage.removeItem(S)})),x.addEventListener("input",e(o)((function(e){E[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(E))}),1e3)),(w=JSON.parse(localStorage.getItem(S)))&&($(V,w),$(_,w),$(D,w),q(V,E,w),q(_,E,w),q(D,E,w))}();
//# sourceMappingURL=03-promises.83a9d32c.js.map
