!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a.default(e,t,r[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var f,c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var l="Expected a function",d=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,g=b||y||Function("return this")(),O=Object.prototype.toString,j=Math.max,x=Math.min,w=function(){return g.Date.now()};function S(e,t,r){var n,o,i,u,a,f,c=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(l);function v(t){var r=n,i=o;return n=o=void 0,c=t,u=e.apply(i,r)}function m(e){return c=e,a=setTimeout(y,t),d?v(e):u}function b(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-c>=i}function y(){var e=w();if(b(e))return g(e);a=setTimeout(y,function(e){var r=t-(e-f);return s?x(r,i-(e-c)):r}(e))}function g(e){return a=void 0,p&&n?v(e):(n=o=void 0,u)}function O(){var e=w(),r=b(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(s)return a=setTimeout(y,t),v(f)}return void 0===a&&(a=setTimeout(y,t)),u}return t=_(t)||0,h(r)&&(d=!!r.leading,i=(s="maxWait"in r)?j(_(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(w())},O}function h(t){var r=void 0===t?"undefined":e(c)(t);return!!t&&("object"==r||"function"==r)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(h(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=h(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=p.test(t);return n||v.test(t)?m(t.slice(2),n?2:8):s.test(t)?NaN:+t}f=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(l);return h(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),S(e,t,{leading:n,maxWait:t,trailing:o})};var T={form:document.querySelector(".feedback-form"),inputMail:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},M=T.form,N=T.textarea,E=T.inputMail;M.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(D))),e.currentTarget.reset(),localStorage.removeItem(D)})),M.addEventListener("input",e(f)((function(e){k[e.target.name]=e.target.value,localStorage.setItem(D,JSON.stringify(k))}),500));var D="feedback-form-state",P=JSON.parse(localStorage.getItem(D)),k=e(i)({},P);P&&(N.value=P.message,E.value=P.email)}();
//# sourceMappingURL=03-feedback.533bc63a.js.map