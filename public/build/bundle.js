/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/valentin_project_power_freak_website/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/SofiaProBlack.eot":
/*!****************************************!*\
  !*** ./assets/fonts/SofiaProBlack.eot ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"SofiaProBlack.eot\";\n\n//# sourceURL=webpack:///./assets/fonts/SofiaProBlack.eot?");

/***/ }),

/***/ "./assets/fonts/SofiaProBlack.ttf":
/*!****************************************!*\
  !*** ./assets/fonts/SofiaProBlack.ttf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"SofiaProBlack.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/SofiaProBlack.ttf?");

/***/ }),

/***/ "./assets/fonts/SofiaProBlack.woff":
/*!*****************************************!*\
  !*** ./assets/fonts/SofiaProBlack.woff ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"SofiaProBlack.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/SofiaProBlack.woff?");

/***/ }),

/***/ "./assets/fonts/SofiaProBlack.woff2":
/*!******************************************!*\
  !*** ./assets/fonts/SofiaProBlack.woff2 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"SofiaProBlack.woff2\";\n\n//# sourceURL=webpack:///./assets/fonts/SofiaProBlack.woff2?");

/***/ }),

/***/ "./assets/fonts/blackberries-webfont.eot":
/*!***********************************************!*\
  !*** ./assets/fonts/blackberries-webfont.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries-webfont.eot\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries-webfont.eot?");

/***/ }),

/***/ "./assets/fonts/blackberries-webfont.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/blackberries-webfont.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries-webfont.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries-webfont.ttf?");

/***/ }),

/***/ "./assets/fonts/blackberries-webfont.woff":
/*!************************************************!*\
  !*** ./assets/fonts/blackberries-webfont.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries-webfont.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries-webfont.woff?");

/***/ }),

/***/ "./assets/fonts/blackberries-webfont.woff2":
/*!*************************************************!*\
  !*** ./assets/fonts/blackberries-webfont.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries-webfont.woff2\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries-webfont.woff2?");

/***/ }),

/***/ "./assets/fonts/blackberries_bold-webfont.eot":
/*!****************************************************!*\
  !*** ./assets/fonts/blackberries_bold-webfont.eot ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries_bold-webfont.eot\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries_bold-webfont.eot?");

/***/ }),

/***/ "./assets/fonts/blackberries_bold-webfont.ttf":
/*!****************************************************!*\
  !*** ./assets/fonts/blackberries_bold-webfont.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries_bold-webfont.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries_bold-webfont.ttf?");

/***/ }),

/***/ "./assets/fonts/blackberries_bold-webfont.woff":
/*!*****************************************************!*\
  !*** ./assets/fonts/blackberries_bold-webfont.woff ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries_bold-webfont.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries_bold-webfont.woff?");

/***/ }),

/***/ "./assets/fonts/blackberries_bold-webfont.woff2":
/*!******************************************************!*\
  !*** ./assets/fonts/blackberries_bold-webfont.woff2 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blackberries_bold-webfont.woff2\";\n\n//# sourceURL=webpack:///./assets/fonts/blackberries_bold-webfont.woff2?");

/***/ }),

/***/ "./assets/fonts/freebrushfont-webfont.eot":
/*!************************************************!*\
  !*** ./assets/fonts/freebrushfont-webfont.eot ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"freebrushfont-webfont.eot\";\n\n//# sourceURL=webpack:///./assets/fonts/freebrushfont-webfont.eot?");

/***/ }),

/***/ "./assets/fonts/freebrushfont-webfont.ttf":
/*!************************************************!*\
  !*** ./assets/fonts/freebrushfont-webfont.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"freebrushfont-webfont.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/freebrushfont-webfont.ttf?");

/***/ }),

/***/ "./assets/fonts/freebrushfont-webfont.woff":
/*!*************************************************!*\
  !*** ./assets/fonts/freebrushfont-webfont.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"freebrushfont-webfont.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/freebrushfont-webfont.woff?");

/***/ }),

/***/ "./assets/fonts/freebrushfont-webfont.woff2":
/*!**************************************************!*\
  !*** ./assets/fonts/freebrushfont-webfont.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"freebrushfont-webfont.woff2\";\n\n//# sourceURL=webpack:///./assets/fonts/freebrushfont-webfont.woff2?");

/***/ }),

/***/ "./assets/fonts/sofia_pro_light-webfont.eot":
/*!**************************************************!*\
  !*** ./assets/fonts/sofia_pro_light-webfont.eot ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"sofia_pro_light-webfont.eot\";\n\n//# sourceURL=webpack:///./assets/fonts/sofia_pro_light-webfont.eot?");

/***/ }),

/***/ "./assets/fonts/sofia_pro_light-webfont.ttf":
/*!**************************************************!*\
  !*** ./assets/fonts/sofia_pro_light-webfont.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"sofia_pro_light-webfont.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/sofia_pro_light-webfont.ttf?");

/***/ }),

/***/ "./assets/fonts/sofia_pro_light-webfont.woff":
/*!***************************************************!*\
  !*** ./assets/fonts/sofia_pro_light-webfont.woff ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"sofia_pro_light-webfont.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/sofia_pro_light-webfont.woff?");

/***/ }),

/***/ "./assets/fonts/sofia_pro_light-webfont.woff2":
/*!****************************************************!*\
  !*** ./assets/fonts/sofia_pro_light-webfont.woff2 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"sofia_pro_light-webfont.woff2\";\n\n//# sourceURL=webpack:///./assets/fonts/sofia_pro_light-webfont.woff2?");

/***/ }),

/***/ "./assets/images/gouts_picture.jpg":
/*!*****************************************!*\
  !*** ./assets/images/gouts_picture.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"gouts_picture.jpg\";\n\n//# sourceURL=webpack:///./assets/images/gouts_picture.jpg?");

/***/ }),

/***/ "./assets/images/home_banner.png":
/*!***************************************!*\
  !*** ./assets/images/home_banner.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"home_banner.png\";\n\n//# sourceURL=webpack:///./assets/images/home_banner.png?");

/***/ }),

/***/ "./assets/images/mount_cervin.jpg":
/*!****************************************!*\
  !*** ./assets/images/mount_cervin.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"mount_cervin.jpg\";\n\n//# sourceURL=webpack:///./assets/images/mount_cervin.jpg?");

/***/ }),

/***/ "./assets/images/valais_picture.jpg":
/*!******************************************!*\
  !*** ./assets/images/valais_picture.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"valais_picture.jpg\";\n\n//# sourceURL=webpack:///./assets/images/valais_picture.jpg?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/global.scss":
/*!*********************************!*\
  !*** ./assets/scss/global.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/lib/loader.js!../../node_modules/style-resources-loader/lib??ref--6-4!./global.scss */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib/index.js?!./assets/scss/global.scss\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {\"hmr\":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./assets/scss/global.scss?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib/index.js?!./assets/scss/global.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib??ref--6-4!./assets/scss/global.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n@font-face {\\n  font-family: 'blackberriesbold';\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries_bold-webfont.eot */ \"./assets/fonts/blackberries_bold-webfont.eot\")) + \");\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries_bold-webfont.eot */ \"./assets/fonts/blackberries_bold-webfont.eot\")) + \"?#iefix) format(\\\"embedded-opentype\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries_bold-webfont.woff2 */ \"./assets/fonts/blackberries_bold-webfont.woff2\")) + \") format(\\\"woff2\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries_bold-webfont.woff */ \"./assets/fonts/blackberries_bold-webfont.woff\")) + \") format(\\\"woff\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries_bold-webfont.ttf */ \"./assets/fonts/blackberries_bold-webfont.ttf\")) + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: 'blackberriesregular';\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries-webfont.eot */ \"./assets/fonts/blackberries-webfont.eot\")) + \");\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries-webfont.eot */ \"./assets/fonts/blackberries-webfont.eot\")) + \"?#iefix) format(\\\"embedded-opentype\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries-webfont.woff2 */ \"./assets/fonts/blackberries-webfont.woff2\")) + \") format(\\\"woff2\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries-webfont.woff */ \"./assets/fonts/blackberries-webfont.woff\")) + \") format(\\\"woff\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/blackberries-webfont.ttf */ \"./assets/fonts/blackberries-webfont.ttf\")) + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: 'free_brushfontregular';\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/freebrushfont-webfont.eot */ \"./assets/fonts/freebrushfont-webfont.eot\")) + \");\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/freebrushfont-webfont.eot */ \"./assets/fonts/freebrushfont-webfont.eot\")) + \"?#iefix) format(\\\"embedded-opentype\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/freebrushfont-webfont.woff2 */ \"./assets/fonts/freebrushfont-webfont.woff2\")) + \") format(\\\"woff2\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/freebrushfont-webfont.woff */ \"./assets/fonts/freebrushfont-webfont.woff\")) + \") format(\\\"woff\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/freebrushfont-webfont.ttf */ \"./assets/fonts/freebrushfont-webfont.ttf\")) + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: 'sofia_prolight';\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/sofia_pro_light-webfont.eot */ \"./assets/fonts/sofia_pro_light-webfont.eot\")) + \");\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/sofia_pro_light-webfont.eot */ \"./assets/fonts/sofia_pro_light-webfont.eot\")) + \"?#iefix) format(\\\"embedded-opentype\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/sofia_pro_light-webfont.woff2 */ \"./assets/fonts/sofia_pro_light-webfont.woff2\")) + \") format(\\\"woff2\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/sofia_pro_light-webfont.woff */ \"./assets/fonts/sofia_pro_light-webfont.woff\")) + \") format(\\\"woff\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/sofia_pro_light-webfont.ttf */ \"./assets/fonts/sofia_pro_light-webfont.ttf\")) + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: 'sofia_problack';\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/SofiaProBlack.eot */ \"./assets/fonts/SofiaProBlack.eot\")) + \");\\n  src: url(\" + escape(__webpack_require__(/*! ../../assets/fonts/SofiaProBlack.eot */ \"./assets/fonts/SofiaProBlack.eot\")) + \"?#iefix) format(\\\"embedded-opentype\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/SofiaProBlack.woff2 */ \"./assets/fonts/SofiaProBlack.woff2\")) + \") format(\\\"woff2\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/SofiaProBlack.woff */ \"./assets/fonts/SofiaProBlack.woff\")) + \") format(\\\"woff\\\"), url(\" + escape(__webpack_require__(/*! ../../assets/fonts/SofiaProBlack.ttf */ \"./assets/fonts/SofiaProBlack.ttf\")) + \") format(\\\"truetype\\\");\\n  font-weight: 900;\\n  font-style: normal; }\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  border: none;\\n  box-sizing: border-box; }\\n\\nhtml {\\n  font-size: 15px; }\\n\\nbody {\\n  font-family: \\\"sofia_prolight\\\";\\n  font-size: 100%;\\n  background-color: #f5f5f5; }\\n\\nul, li {\\n  list-style-type: none; }\\n\\na {\\n  text-decoration: none; }\\n\\n.wrapper {\\n  width: 100vw;\\n  height: auto; }\\n\\n.container {\\n  width: 100vw;\\n  padding: 0 8vw; }\\n\\nh1 {\\n  font-family: \\\"blackberriesbold\\\";\\n  font-size: 4em;\\n  text-transform: uppercase; }\\n  @media screen and (max-width: 1200px) {\\n    h1 {\\n      font-size: 2em; } }\\n\\nh2 {\\n  font-family: \\\"free_brushfontregular\\\";\\n  font-size: 4em;\\n  text-transform: uppercase;\\n  font-weight: normal; }\\n\\nh3 {\\n  font-family: \\\"blackberriesbold\\\";\\n  font-size: 3em;\\n  text-transform: uppercase;\\n  font-weight: normal; }\\n\\nh4 {\\n  font-family: \\\"blackberriesbold\\\";\\n  font-size: 4em;\\n  text-transform: uppercase;\\n  font-weight: normal; }\\n\\nheader {\\n  position: fixed;\\n  padding: 1vh 2vw;\\n  width: 100%;\\n  z-index: 1001; }\\n  header .menu_bar {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between; }\\n    header .menu_bar .block_logo img {\\n      width: 10vw;\\n      height: auto; }\\n      @media screen and (max-width: 1200px) {\\n        header .menu_bar .block_logo img {\\n          height: 6vh;\\n          width: auto; } }\\n    header .menu_bar .block_right {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center; }\\n      header .menu_bar .block_right .block_panier {\\n        display: flex;\\n        flex-direction: row;\\n        align-items: center;\\n        margin-right: 2vw; }\\n\\n.home_banner {\\n  position: relative;\\n  width: 100%;\\n  height: 75vh; }\\n  .home_banner .home_banner_can {\\n    background: url(\" + escape(__webpack_require__(/*! ../../assets/images/home_banner.png */ \"./assets/images/home_banner.png\")) + \") center no-repeat;\\n    background-size: cover;\\n    width: 100%;\\n    height: 125%;\\n    -webkit-animation-duration: 1.5s;\\n            animation-duration: 1.5s;\\n    -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\\n            animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\\n    -webkit-animation-name: slidein;\\n            animation-name: slidein;\\n    -webkit-animation-fill-mode: backwards;\\n            animation-fill-mode: backwards; }\\n    @media screen and (max-width: 1200px) {\\n      .home_banner .home_banner_can {\\n        height: 133%; } }\\n  .home_banner .home_bubble {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%; }\\n    .home_banner .home_bubble img {\\n      position: absolute;\\n      width: 20%;\\n      height: auto;\\n      top: 8vh;\\n      right: 25vw;\\n      -webkit-animation-duration: 1s;\\n              animation-duration: 1s;\\n      -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\\n              animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\\n      -webkit-animation-name: bubble;\\n              animation-name: bubble;\\n      -webkit-animation-fill-mode: backwards;\\n              animation-fill-mode: backwards;\\n      -webkit-animation-delay: 800ms;\\n              animation-delay: 800ms; }\\n      @media screen and (max-width: 1200px) {\\n        .home_banner .home_bubble img {\\n          width: 65%;\\n          top: 10vh;\\n          right: 0; } }\\n\\n.gouts {\\n  display: flex;\\n  flex-direction: row;\\n  height: 75vh;\\n  width: 100%;\\n  text-align: center;\\n  color: #ffffff; }\\n  @media screen and (max-width: 1200px) {\\n    .gouts {\\n      display: flex;\\n      flex-direction: column; } }\\n  .gouts div {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    width: 50%;\\n    height: 100%; }\\n    @media screen and (max-width: 1200px) {\\n      .gouts div {\\n        width: 100%; } }\\n  .gouts .gouts_infos {\\n    background-color: #f27531; }\\n    .gouts .gouts_infos .fruits {\\n      width: 50%;\\n      height: auto;\\n      display: flex;\\n      flex-direction: row;\\n      margin-left: auto;\\n      margin-right: auto;\\n      margin-top: 3vh; }\\n      .gouts .gouts_infos .fruits div {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center; }\\n        .gouts .gouts_infos .fruits div img {\\n          width: 75%;\\n          height: auto; }\\n  .gouts .gouts_picture {\\n    background: url(\" + escape(__webpack_require__(/*! ../../assets/images/gouts_picture.jpg */ \"./assets/images/gouts_picture.jpg\")) + \") center no-repeat;\\n    background-size: cover; }\\n  .gouts .pink-title {\\n    font-style: normal;\\n    font-size: 1.5em;\\n    color: #e8193c; }\\n\\n.valais {\\n  display: flex;\\n  flex-direction: row;\\n  height: 75vh;\\n  width: 100%;\\n  text-align: center;\\n  color: #ffffff; }\\n  @media screen and (max-width: 1200px) {\\n    .valais {\\n      display: flex;\\n      flex-direction: column; } }\\n  .valais div {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    width: 50%;\\n    height: 100%; }\\n    @media screen and (max-width: 1200px) {\\n      .valais div {\\n        width: 100%; } }\\n  .valais .valais_picture {\\n    background: url(\" + escape(__webpack_require__(/*! ../../assets/images/valais_picture.jpg */ \"./assets/images/valais_picture.jpg\")) + \") center no-repeat;\\n    background-size: cover; }\\n  .valais .valais_infos {\\n    background-color: #e8193c; }\\n  .valais .orange-title {\\n    font-style: normal;\\n    font-size: 1.5em;\\n    color: #f27531; }\\n\\nfooter {\\n  padding-top: 5vh;\\n  background-color: #242424;\\n  text-align: center;\\n  color: #ffffff; }\\n  footer .page-foot-box {\\n    border-bottom: 2px solid rgba(255, 255, 255, 0.25); }\\n    footer .page-foot-box .page-foot-part-1 {\\n      display: flex;\\n      flex-direction: row;\\n      width: 25%;\\n      margin: auto;\\n      padding-bottom: 5vh; }\\n      @media screen and (max-width: 1200px) {\\n        footer .page-foot-box .page-foot-part-1 {\\n          display: flex;\\n          flex-direction: column; } }\\n      footer .page-foot-box .page-foot-part-1 ul {\\n        display: flex;\\n        flex-direction: row;\\n        align-items: center;\\n        justify-content: center;\\n        width: 50%;\\n        flex: 1; }\\n      footer .page-foot-box .page-foot-part-1 .social_networks li {\\n        margin-right: 1vw; }\\n        footer .page-foot-box .page-foot-part-1 .social_networks li img {\\n          width: 20px; }\\n      footer .page-foot-box .page-foot-part-1 .social_networks li:last-child {\\n        margin-right: 0; }\\n      @media screen and (max-width: 1200px) {\\n        footer .page-foot-box .page-foot-part-1 .social_networks {\\n          margin-bottom: 2vh; } }\\n      footer .page-foot-box .page-foot-part-1 .language li {\\n        margin-right: 1vw; }\\n        footer .page-foot-box .page-foot-part-1 .language li img {\\n          height: 20px;\\n          width: auto; }\\n      footer .page-foot-box .page-foot-part-1 .language li:last-child {\\n        margin-right: 0; }\\n  footer .page-foot-part-2 {\\n    width: 50%;\\n    margin: auto;\\n    padding: 2vh 0;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    font-size: 1em; }\\n    footer .page-foot-part-2 p {\\n      padding-right: 2vw; }\\n    footer .page-foot-part-2 a {\\n      color: #ffffff;\\n      border-left: 1px solid #ffffff;\\n      padding-left: 2vw; }\\n\\n.recyclage_banner {\\n  background: url(\" + escape(__webpack_require__(/*! ../../assets/images/mount_cervin.jpg */ \"./assets/images/mount_cervin.jpg\")) + \") center no-repeat;\\n  background-size: cover;\\n  width: 100%;\\n  height: 75vh; }\\n  .recyclage_banner div {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n    background-color: rgba(242, 117, 49, 0.75);\\n    height: 100%;\\n    width: 100%; }\\n    .recyclage_banner div h2 {\\n      color: #ffffff; }\\n      .recyclage_banner div h2 em {\\n        font-family: \\\"blackberriesbold\\\";\\n        font-size: 2em; }\\n\\n.block_julius {\\n  position: relative;\\n  padding: 8vh 8vw;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  margin-bottom: 5vh; }\\n  .block_julius .julius_portrait {\\n    width: 33%;\\n    margin-right: 5vw; }\\n  .block_julius h3 {\\n    color: #f27531;\\n    text-align: center;\\n    position: relative; }\\n  .block_julius h3:after {\\n    content: 'Julius Robert Von Mayer';\\n    font-family: \\\"sofia_prolight\\\";\\n    font-size: 0.4em;\\n    text-transform: none;\\n    color: #000000;\\n    position: absolute;\\n    bottom: -4vh;\\n    right: 0; }\\n  .block_julius .quotes {\\n    width: 33%;\\n    position: absolute;\\n    z-index: -1;\\n    opacity: 0.05;\\n    right: 25%; }\\n\\n.recyclage_intro {\\n  width: 50%;\\n  margin: auto; }\\n  .recyclage_intro p {\\n    font-size: 1.1em;\\n    line-height: 3vh; }\\n\\n.recyclage_section_1 {\\n  padding: 0 8vw;\\n  margin-top: 10vh; }\\n  .recyclage_section_1 .recyclage_section_1_part_1 {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center; }\\n    .recyclage_section_1 .recyclage_section_1_part_1 section {\\n      width: 50%; }\\n      .recyclage_section_1 .recyclage_section_1_part_1 section h4 {\\n        color: #f27531;\\n        position: relative; }\\n      .recyclage_section_1 .recyclage_section_1_part_1 section h4:after {\\n        content: 'L\\\\E9g\\\\E8res et 100% recyclables';\\n        font-family: \\\"sofia_problack\\\";\\n        font-size: 0.45em;\\n        text-transform: none;\\n        color: #000000;\\n        position: absolute;\\n        left: 0;\\n        bottom: -3vh;\\n        opacity: 0.15; }\\n      .recyclage_section_1 .recyclage_section_1_part_1 section p {\\n        font-size: 1.1em;\\n        line-height: 3vh;\\n        margin-top: 7vh; }\\n    .recyclage_section_1 .recyclage_section_1_part_1 .recyclage_section_1_image {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center;\\n      justify-content: center;\\n      width: 50%; }\\n      .recyclage_section_1 .recyclage_section_1_part_1 .recyclage_section_1_image img {\\n        width: 50%; }\\n  .recyclage_section_1 h3 {\\n    width: 50%;\\n    margin: auto;\\n    margin-top: 8vh;\\n    color: #f27531;\\n    text-align: center; }\\n  .recyclage_section_1 details {\\n    margin-top: 8vh; }\\n    .recyclage_section_1 details summary {\\n      border: none;\\n      font-family: \\\"sofia_problack\\\";\\n      font-size: 1.5em;\\n      color: #f27531;\\n      cursor: pointer;\\n      text-align: center;\\n      margin-bottom: 5vh; }\\n    .recyclage_section_1 details summary::-webkit-details-marker {\\n      display: none; }\\n    .recyclage_section_1 details summary:focus {\\n      outline: none; }\\n    .recyclage_section_1 details section {\\n      width: 75%;\\n      margin-bottom: 5vh; }\\n      .recyclage_section_1 details section h4 {\\n        color: #f27531;\\n        margin-bottom: 2vh; }\\n      .recyclage_section_1 details section p {\\n        font-size: 1.1em;\\n        line-height: 3vh; }\\n\\n.recyclage_section_2 {\\n  padding: 0 8vw;\\n  margin-top: 10vh; }\\n  .recyclage_section_2 .recyclage_section_2_part_1 {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center; }\\n    .recyclage_section_2 .recyclage_section_2_part_1 section {\\n      width: 50%; }\\n      .recyclage_section_2 .recyclage_section_2_part_1 section h4 {\\n        color: #f27531;\\n        position: relative; }\\n      .recyclage_section_2 .recyclage_section_2_part_1 section h4:after {\\n        content: '\\\\C9  conomiser les ressources en passant par de courtes distances';\\n        font-family: \\\"sofia_problack\\\";\\n        font-size: 0.45em;\\n        text-transform: none;\\n        color: #000000;\\n        position: absolute;\\n        left: 0;\\n        bottom: -3vh;\\n        opacity: 0.15; }\\n      .recyclage_section_2 .recyclage_section_2_part_1 section p {\\n        font-size: 1.1em;\\n        line-height: 3vh;\\n        margin-top: 7vh; }\\n    .recyclage_section_2 .recyclage_section_2_part_1 .recyclage_section_2_image {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center;\\n      justify-content: center;\\n      width: 50%; }\\n      .recyclage_section_2 .recyclage_section_2_part_1 .recyclage_section_2_image img {\\n        width: 50%; }\\n  .recyclage_section_2 h3 {\\n    width: 50%;\\n    margin: auto;\\n    margin-top: 8vh;\\n    color: #f27531;\\n    text-align: center; }\\n  .recyclage_section_2 details {\\n    margin-top: 8vh; }\\n    .recyclage_section_2 details summary {\\n      border: none;\\n      font-family: \\\"sofia_problack\\\";\\n      font-size: 1.5em;\\n      color: #f27531;\\n      cursor: pointer;\\n      text-align: center;\\n      margin-bottom: 5vh; }\\n    .recyclage_section_2 details summary::-webkit-details-marker {\\n      display: none; }\\n    .recyclage_section_2 details section {\\n      width: 75%;\\n      margin-bottom: 5vh; }\\n      .recyclage_section_2 details section h4 {\\n        color: #f27531;\\n        margin-bottom: 2vh; }\\n      .recyclage_section_2 details section p {\\n        font-size: 1.1em;\\n        line-height: 3vh; }\\n\\n@-webkit-keyframes slidein {\\n  from {\\n    -webkit-transform: translateY(-200px);\\n            transform: translateY(-200px);\\n    opacity: 0; }\\n  to {\\n    -webkit-transform: translateY(0);\\n            transform: translateY(0);\\n    opacity: 1; } }\\n\\n@keyframes slidein {\\n  from {\\n    -webkit-transform: translateY(-200px);\\n            transform: translateY(-200px);\\n    opacity: 0; }\\n  to {\\n    -webkit-transform: translateY(0);\\n            transform: translateY(0);\\n    opacity: 1; } }\\n\\n@-webkit-keyframes bubble {\\n  from {\\n    -webkit-transform: rotateZ(0) scale(0);\\n            transform: rotateZ(0) scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: rotateZ(15deg) scale(1.1);\\n            transform: rotateZ(15deg) scale(1.1);\\n    opacity: 1; }\\n  69% {\\n    -webkit-transform: rotateZ(-5deg) scale(0.9);\\n            transform: rotateZ(-5deg) scale(0.9); }\\n  to {\\n    -webkit-transform: rotateZ(0) scale(1);\\n            transform: rotateZ(0) scale(1); } }\\n\\n@keyframes bubble {\\n  from {\\n    -webkit-transform: rotateZ(0) scale(0);\\n            transform: rotateZ(0) scale(0);\\n    opacity: 0; }\\n  33% {\\n    -webkit-transform: rotateZ(15deg) scale(1.1);\\n            transform: rotateZ(15deg) scale(1.1);\\n    opacity: 1; }\\n  69% {\\n    -webkit-transform: rotateZ(-5deg) scale(0.9);\\n            transform: rotateZ(-5deg) scale(0.9); }\\n  to {\\n    -webkit-transform: rotateZ(0) scale(1);\\n            transform: rotateZ(0) scale(1); } }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/scss/global.scss?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js!./node_modules/style-resources-loader/lib??ref--6-4");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(selector) {\n\t\tif (typeof memo[selector] === \"undefined\") {\n\t\t\tvar styleTarget = fn.call(this, selector);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[selector] = styleTarget;\n\t\t}\n\t\treturn memo[selector]\n\t};\n})(function (target) {\n\treturn document.querySelector(target)\n});\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n\tif (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./assets/js/index.js ./assets/scss/global.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Utilisateur\\web\\valentin_project_power_freak_website\\assets\\js\\index.js */\"./assets/js/index.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Utilisateur\\web\\valentin_project_power_freak_website\\assets\\scss\\global.scss */\"./assets/scss/global.scss\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/index.js_./assets/scss/global.scss?");

/***/ })

/******/ });