!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/exo-mini-site/public/build/",t(t.s=0)}([function(n,e,t){t(1),n.exports=t(2)},function(n,e){console.log("hi, I am a Javascript file and I am loaded")},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0};t(5)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=n.exports=t(4)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Kanit:400,700);",""]),e.push([n.i,"header {\n  height: 20vh;\n  width: 100%;\n  background-color: red; }\n  header .inner {\n    text-align: center; }\n    header .inner .lien--logo {\n      display: inline-block; }\n    header .inner .logo {\n      margin-top: 1.2vh;\n      justify-content: center; }\n    header .inner nav {\n      justify-content: center;\n      display: flex; }\n      header .inner nav a {\n        font-family: \"Kanit\";\n        list-style-type: none;\n        color: black;\n        font-size: 2em; }\n\n/*\r\n * jQuery FlexSlider v2.7.1\r\n * http://www.woothemes.com/flexslider/\r\n *\r\n * Copyright 2012 WooThemes\r\n * Free to use under the GPLv2 and later license.\r\n * http://www.gnu.org/licenses/gpl-2.0.html\r\n *\r\n * Contributing author: Tyler Smith (@mbmufffin)\r\n *\r\n */\n/* ====================================================================================================================\r\n * FONT-FACE\r\n * ====================================================================================================================*/\n/* ====================================================================================================================\r\n * RESETS\r\n * ====================================================================================================================*/\n.flex-container a:hover,\n.flex-slider a:hover {\n  outline: none; }\n\n.slides,\n.slides > li,\n.flex-control-nav,\n.flex-direction-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.flex-pauseplay span {\n  text-transform: capitalize; }\n\n/* ====================================================================================================================\r\n * BASE STYLES\r\n * ====================================================================================================================*/\n.flexslider {\n  margin: 0;\n  padding: 0; }\n\n.flexslider .slides > li {\n  display: none;\n  -webkit-backface-visibility: hidden; }\n\n.flexslider .slides img {\n  width: 100%;\n  display: block; }\n\n.flexslider .slides:after {\n  content: \" \";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\nhtml[xmlns] .flexslider .slides {\n  display: block; }\n\n* html .flexslider .slides {\n  height: 1%; }\n\n.no-js .flexslider .slides > li:first-child {\n  display: block; }\n\n/* ====================================================================================================================\r\n * DEFAULT THEME\r\n * ====================================================================================================================*/\n.flexslider {\n  margin: 0 0 60px;\n  background: #fff;\n  border: 4px solid #fff;\n  position: relative;\n  zoom: 1;\n  border-radius: 4px;\n  -o-box-shadow: \"\" 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: \"\" 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.flexslider .slides {\n  zoom: 1; }\n\n.flexslider .slides img {\n  height: auto;\n  -moz-user-select: none; }\n\n.flex-viewport {\n  max-height: 2000px;\n  transition: all 1s ease; }\n\n.loading .flex-viewport {\n  max-height: 300px; }\n\n@-moz-document url-prefix() {\n  .loading .flex-viewport {\n    max-height: none; } }\n\n.carousel li {\n  margin-right: 5px; }\n\n.flex-direction-nav {\n  *height: 0; }\n\n.flex-direction-nav a {\n  text-decoration: none;\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin: -20px 0 0;\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  overflow: hidden;\n  opacity: 0;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8);\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n  transition: all 0.3s ease-in-out; }\n\n.flex-direction-nav a:before {\n  font-size: 40px;\n  display: inline-block;\n  content: '\\F001';\n  color: rgba(0, 0, 0, 0.8);\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3); }\n\n.flex-direction-nav a.flex-next:before {\n  content: '\\F002'; }\n\n.flex-direction-nav .flex-prev {\n  left: -50px; }\n\n.flex-direction-nav .flex-next {\n  right: -50px;\n  text-align: right; }\n\n.flexslider:hover .flex-direction-nav .flex-prev {\n  opacity: 0.7;\n  left: 10px; }\n\n.flexslider:hover .flex-direction-nav .flex-prev:hover {\n  opacity: 1; }\n\n.flexslider:hover .flex-direction-nav .flex-next {\n  opacity: 0.7;\n  right: 10px; }\n\n.flexslider:hover .flex-direction-nav .flex-next:hover {\n  opacity: 1; }\n\n.flex-direction-nav .flex-disabled {\n  opacity: 0 !important;\n  filter: alpha(opacity=0);\n  cursor: default;\n  z-index: -1; }\n\n.flex-pauseplay a {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n  opacity: 0.8;\n  z-index: 10;\n  overflow: hidden;\n  cursor: pointer;\n  color: #000; }\n\n.flex-pauseplay a:before {\n  font-size: 20px;\n  display: inline-block;\n  content: '\\F004'; }\n\n.flex-pauseplay a:hover {\n  opacity: 1; }\n\n.flex-pauseplay a.flex-play:before {\n  content: '\\F003'; }\n\n.flex-control-nav {\n  width: 100%;\n  position: absolute;\n  bottom: -40px;\n  text-align: center; }\n\n.flex-control-nav li {\n  margin: 0 6px;\n  display: inline-block;\n  zoom: 1;\n  *display: inline; }\n\n.flex-control-paging li a {\n  width: 11px;\n  height: 11px;\n  display: block;\n  background: #666;\n  background: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  -o-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: 20px; }\n\n.flex-control-paging li a:hover {\n  background: #333;\n  background: rgba(0, 0, 0, 0.7); }\n\n.flex-control-paging li a.flex-active {\n  background: #000;\n  background: rgba(0, 0, 0, 0.9);\n  cursor: default; }\n\n.flex-control-thumbs {\n  margin: 5px 0 0;\n  position: static;\n  overflow: hidden; }\n\n.flex-control-thumbs li {\n  width: 25%;\n  float: left;\n  margin: 0; }\n\n.flex-control-thumbs img {\n  width: 100%;\n  height: auto;\n  display: block;\n  opacity: .7;\n  cursor: pointer;\n  -moz-user-select: none;\n  transition: all 1s ease; }\n\n.flex-control-thumbs img:hover {\n  opacity: 1; }\n\n.flex-control-thumbs .flex-active {\n  opacity: 1;\n  cursor: default; }\n\n/* ====================================================================================================================\r\n * RESPONSIVE\r\n * ====================================================================================================================*/\n@media screen and (max-width: 860px) {\n  .flex-direction-nav .flex-prev {\n    opacity: 1;\n    left: 10px; }\n  .flex-direction-nav .flex-next {\n    opacity: 1;\n    right: 10px; } }\n",""])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(n){var e={};return function(n){if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),s=null,f=0,c=[],p=t(6);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:l}}}}function u(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function h(n,e){var t=l(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function x(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function b(n){var e=document.createElement("style");return n.attrs.type="text/css",v(e,n.attrs),h(n,e),e}function v(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=f++;t=s||(s=b(e)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",v(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,t,e),o=function(){x(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){x(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(l=i[a.id]).refs--,r.push(l)}n&&d(u(n,e),e);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var m,y=(m=[],function(n,e){return m[n]=e,m.filter(Boolean).join("\n")});function w(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);