var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"credits": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/themes/global-styles.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n    color-scheme: var(--color-scheme);\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n.Popover {\n    color-scheme: light !important;\n}\n\n.Popover-body {\n    color: var(--text-primary) !important;\n    background: var(--popover-background) !important;\n    border: 1px solid var(--ui-black-transparent) !important;\n    box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n.Popover-tipShape {\n    fill: var(--popover-background) !important;\n    stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n    --editorDarkMode-primary: var(--looks-secondary);\n    --editorDarkMode-primary-transparent35: var(--looks-transparent);\n    --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n    --editorDarkMode-border: var(--ui-black-transparent);\n    --editorDarkMode-accent: var(--ui-modal-background);\n    --editorDarkMode-categoryMenu-text: var(--text-primary);\n    --editorDarkMode-accent-text: var(--text-primary);\n    --editorDarkMode-page: var(--ui-primary);\n    --editorDarkMode-highlightText: var(--looks-secondary);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: var(--page-background);\n    color: var(--page-foreground);\n}\n\na {\n    color: var(--link-color);\n}\n\n.credits_main_1Rb15 section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n}\n\n.credits_header-container_10IXn {\n    color: white;\n    background-color: var(--looks-secondary);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.credits_header-text_2vWAl {\n\n}\n\n.credits_users_2AuwB {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.credits_user-image_2rw9X {\n    margin-right: 12px;\n}\n\n.credits_user_2nYLS {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background .2s;\n}\n\n.credits_user_2nYLS:link:hover {\n    background: var(--ui-black-transparent);\n}\n", ""]);

// exports
exports.locals = {
	"main": "credits_main_1Rb15",
	"header-container": "credits_header-container_10IXn",
	"headerContainer": "credits_header-container_10IXn",
	"header-text": "credits_header-text_2vWAl",
	"headerText": "credits_header-text_2vWAl",
	"users": "credits_users_2AuwB",
	"user-image": "credits_user-image_2rw9X",
	"userImage": "credits_user-image_2rw9X",
	"user": "credits_user_2nYLS"
};

/***/ }),

/***/ "./src/addons/hooks.js":
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AddonHooks = {
  appStateReducer: () => {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddonHooks);

/***/ }),

/***/ "./src/lib/brand.js":
/*!**************************!*\
  !*** ./src/lib/brand.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_NAME: 'PenguinMod',
  API_SITE: 'https://projects.penguinmod.com',
  ASSET_CDN_SITE: 'https://asset-cdn.penguinmod.com',
  DOC_SITE: 'https://docs.penguinmod.com',
  HOME_SITE: 'https://penguinmod.com',
  LIBRARY_API_SITE: 'https://library.penguinmod.com',
  WIKI_SITE: 'https://wiki.penguinmod.com'
};

/***/ }),

/***/ "./src/lib/themes/accent/blue.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'looks-secondary': 'hsla(215, 100%, 65%, 1)',
  'looks-transparent': 'hsla(215, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(215, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(215, 60%, 50%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/cyan.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/cyan.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#00c3ff',
  'motion-primary-transparent': '#00c3ffe6',
  'motion-tertiary': '#009ccc',
  'looks-secondary': '#00c3ff',
  'looks-transparent': '#00c3ff59',
  'looks-light-transparent': '#00c3ff26',
  'looks-secondary-dark': '#009ccc',
  'extensions-primary': 'hsla(205, 100%, 65%, 1)',
  'extensions-tertiary': 'hsla(205, 100%, 40%, 1)',
  'extensions-transparent': 'hsla(205, 100%, 65%, 0.35)',
  'extensions-light': 'hsla(205, 60%, 85%, 1)'
};
const blockColors = {
  checkboxActiveBackground: '#00c3ff',
  checkboxActiveBorder: '#009ccc'
};


/***/ }),

/***/ "./src/lib/themes/accent/green.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/green.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(160, 85%, 40%, 1)',
  'motion-primary-transparent': 'hsla(160, 85%, 40%, 0.9)',
  'motion-tertiary': 'hsla(160, 70%, 35%, 1)',
  'looks-secondary': 'hsla(160, 85%, 40%, 1)',
  'looks-transparent': 'hsla(160, 85%, 40%, 0.35)',
  'looks-light-transparent': 'hsla(160, 85%, 40%, 0.15)',
  'looks-secondary-dark': 'hsla(160, 70%, 35%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/orange.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/orange.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(40, 100%, 55%, 1)',
  'motion-primary-transparent': 'hsla(40, 100%, 55%, 0.9)',
  'motion-tertiary': 'hsla(40, 90%, 50%, 1)',
  'looks-secondary': 'hsla(40, 100%, 55%, 1)',
  'looks-transparent': 'hsla(40, 100%, 55%, 0.35)',
  'looks-light-transparent': 'hsla(40, 100%, 55%, 0.15)',
  'looks-secondary-dark': 'hsla(40, 90%, 50%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/purple.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(260, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(260, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(260, 42%, 51%, 1)',
  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/rainbow.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/rainbow.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c',
  // eslint-disable-next-line max-len
  'menu-bar-background-image': 'linear-gradient(90deg, rgba(255, 0, 0, 0.75) 0%, rgba(255, 154, 0, 0.75) 10%, rgba(208, 222, 33, 0.75) 20%, rgba(79, 220, 74, 0.75) 30%, rgba(63, 218, 216, 0.75) 40%, rgba(47, 201, 226, 0.75) 50%, rgba(28, 127, 238, 0.75) 60%, rgba(95, 21, 242, 0.75) 70%, rgba(186, 12, 248, 0.75) 80%, rgba(251, 7, 217, 0.75) 90%, rgba(255, 0, 0, 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/red.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 80%, 60%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/blocks/dark.js":
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
/*! exports provided: blockColors, extensions, colourModifier, textColourModifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colourModifier", function() { return colourModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColourModifier", function() { return textColourModifier; });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

const blockColors = {
  text: '#FFFFFFCC',
  textFieldText: '#E5E5E5',
  textField: '#4C4C4C',
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {};
const colourModifier = function colourModifier(colour) {
  const contrast = (c, amt) => {
    const hsl = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2hsl"])(c);
    hsl[2] /= amt;

    // stupid thing that makes pink colors not bad
    hsl[1] /= (1 - Math.max(30 - Math.abs(330 - hsl[0]), 0) / 30) * (amt - 1) * 2 + 1;
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hsl2hex"])(hsl);
  };
  const darken = (c, amt) => {
    const rgb = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2rgb"])(c);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["rgb2hex"])([Math.round(rgb[0] * (1 - amt)), Math.round(rgb[1] * (1 - amt)), Math.round(rgb[2] * (1 - amt))]);
  };
  return [darken(colour, 0.8), "#4C4C4C", darken(contrast(colour, 1.2), 0.2), darken(contrast(colour, 1.2), 0.5)];
};
const textColourModifier = function textColourModifier(colour) {
  return "#ffffffcc";
};


/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg":
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg":
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/d5a4ec44744da566714cb1d48cd30801.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg":
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg":
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/5bb737f3f140709aef65412af158aaf3.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg":
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast.js":
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
/*! exports provided: blockColors, extensions, colourModifier, textColourModifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colourModifier", function() { return colourModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColourModifier", function() { return textColourModifier; });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");






const blockColors = {
  text: '#000000',
  textFieldText: '#000000',
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: '#000000',
  // Toolbox text, color picker text (used to be #575E75)
  blackText: '#000000',
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: '#3373CC',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dragShadowOpacity: 0.6,
  menuHover: 'rgba(255, 255, 255, 0.3)',
  checkboxFieldBackground: '#5dff5d'
};
const extensions = {
  music: {
    blockIconURI: _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  pen: {
    blockIconURI: _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  text2speech: {
    blockIconURI: _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  translate: {
    blockIconURI: _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  videoSensing: {
    blockIconURI: _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }
};
const colourModifier = function colourModifier(colour) {
  const contrast = (c, amt) => {
    const hsl = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsl"])(c);
    hsl[2] /= amt;

    // stupid thing that makes pink colors not bad
    hsl[1] /= (1 - Math.max(30 - Math.abs(330 - hsl[0]), 0) / 30) * (amt - 1) * 2 + 1;
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsl2hex"])(hsl);
  };
  const lighten = (c, amt) => {
    const rgb = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2rgb"])(c);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["rgb2hex"])([Math.round(rgb[0] * (1 - amt) + 255 * amt), Math.round(rgb[1] * (1 - amt) + 255 * amt), Math.round(rgb[2] * (1 - amt) + 255 * amt)]);
  };
  return [lighten(colour, 0.4), lighten(colour, 0.6), lighten(contrast(colour, 1.2), 0.2), lighten(colour, 0.8)];
};
const textColourModifier = function textColourModifier(colour) {
  return "#000000";
};


/***/ }),

/***/ "./src/lib/themes/blocks/three.js":
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
/*! exports provided: blockColors, extensions, colourModifier, textColourModifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colourModifier", function() { return colourModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColourModifier", function() { return textColourModifier; });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

const blockColors = {
  /*motion: "#4C97FF",
  looks: "#9966FF",
  sounds: "#CF63CF",
  control: "#FFAB19",
  event: "#FFBF00",
  sensing: "#5CB1D6",
  pen: "#0FBD8C",
  operators: "#59C059",
  data: "#FF8C1A",
  data_lists: "#FF661A",
  more: "#FF6680",*/
  addons: "#29BEB8",
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#4C97FF',
  toolboxSelected: '#E9EEF2',
  toolboxText: '#575E75',
  toolbox: '#FFFFFF',
  blackText: '#575E75',
  flyout: '#F9F9F9',
  scrollbar: '#CECDCE',
  scrollbarHover: '#CECDCE',
  textField: '#FFFFFF',
  textFieldText: '#575E75',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#FFF200',
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#547AB2',
  numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  errorReportBackground: '#ffeeee',
  errorReportBorder: '#ff4444',
  errorReportForeground: '#441111',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#d6e9f8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#575E75',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#4C97FF',
  checkboxActiveBorder: '#3373CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#575E75',
  zoomIconFilter: 'none',
  gridColor: '#dddddd',
  checkboxFieldBackground: '#33D833'
};
const extensions = {};
const colourModifier = function colourModifier(colour) {
  const contrast = (c, amt) => {
    const hsl = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2hsl"])(c);
    hsl[2] /= amt;

    // stupid thing that makes pink colors not bad
    hsl[1] /= (1 - Math.max(30 - Math.abs(330 - hsl[0]), 0) / 30) * (amt - 1) * 2 + 1;
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hsl2hex"])(hsl);
  };
  return [colour, contrast(colour, 1.1), contrast(colour, 1.2), contrast(colour, 1.2)];
};
const textColourModifier = function textColourModifier(colour) {
  return colour;
};


/***/ }),

/***/ "./src/lib/themes/global-styles.css":
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./global-styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/themes/gui/amoled.js":
/*!**************************************!*\
  !*** ./src/lib/themes/gui/amoled.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#000000',
  'ui-secondary': '#080808',
  'ui-tertiary': '#101010',
  'ui-modal-overlay': '#080808aa',
  'ui-modal-background': '#000000',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#101010',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#000000',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'text-primary-transparent': 'hsla(0, 0%, 93%, 0.5)',
  'menu-bar-background': 'var(--ui-modal-header-background)',
  'assets-background': 'var(--ui-primary)',
  'input-background': 'var(--ui-secondary)',
  'popover-background': 'var(--ui-secondary)',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'fullscreen-background': 'var(--ui-primary)',
  'fullscreen-accent': 'var(--ui-primary)',
  'page-background': 'var(--ui-primary)',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#dddddd',
  workspace: '#080808',
  toolboxSelected: '#080808',
  toolboxText: '#dddddd',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#444444',
  valueReportBackground: '#181818',
  valueReportBorder: '#282828',
  valueReportForeground: '#eeeeee',
  errorReportBackground: '#180808',
  errorReportBorder: '#480808',
  errorReportForeground: '#eecccc',
  contextMenuBackground: '#080808',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#101010',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#303030'
};


/***/ }),

/***/ "./src/lib/themes/gui/dark.js":
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#111111',
  'ui-secondary': '#1e1e1e',
  'ui-tertiary': '#2e2e2e',
  'ui-modal-overlay': '#1e1e1eaa',
  'ui-modal-background': '#111111',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': 'var(--menu-bar-background)',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#111111',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'text-primary-transparent': 'hsla(0, 0%, 93%, 0.5)',
  'menu-bar-background': 'var(--looks-secondary-dark)',
  'assets-background': '#111111',
  'input-background': '#1e1e1e',
  'popover-background': '#1e1e1e',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'fullscreen-background': '#111111',
  'fullscreen-accent': '#111111',
  'page-background': '#111111',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#1e1e1e',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#cccccc',
  toolbox: '#111111',
  flyout: '#111111',
  scrollbar: '#666666',
  valueReportBackground: '#1e1e1e',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  errorReportBackground: '#2e1818',
  errorReportBorder: '#552222',
  errorReportForeground: '#eecccc',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ }),

/***/ "./src/lib/themes/gui/light.js":
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'hsla(215, 100%, 95%, 1)',
  /* #E5F0FF */
  'ui-secondary': 'hsla(215, 75%, 95%, 1)',
  /* #E9F1FC */
  'ui-tertiary': 'hsla(215, 50%, 90%, 1)',
  /* #D9E3F2 */

  'ui-modal-overlay': 'var(--looks-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'ui-modal-header-background': 'var(--looks-secondary)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/guiHelpers.js":
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
/*! exports provided: applyGuiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGuiColors", function() { return applyGuiColors; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_css__WEBPACK_IMPORTED_MODULE_2__);



const BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
'motion', 'looks', 'sounds', 'control', 'event', 'sensing', 'pen', 'operators', 'data', 'data_lists', 'more', 'addons'];

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
const evaluateCSS = css => {
  const variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * @param {Theme} theme the theme
 */
const applyGuiColors = theme => {
  const doc = document.documentElement;
  const defaultGuiColors = ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light.getGuiColors();
  for (const [name, value] of Object.entries(defaultGuiColors)) {
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  const guiColors = theme.getGuiColors();
  for (const [name, value] of Object.entries(guiColors)) {
    doc.style.setProperty("--".concat(name), value);
  }
  const blockColors = theme.getBlockColors();
  doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
  doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
  doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
  for (const color of BLOCK_COLOR_NAMES) {
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color]);
    //doc.style.setProperty(`--editorTheme3-${color}-secondary`, blockColors[color].secondary);
    //doc.style.setProperty(`--editorTheme3-${color}-tertiary`, blockColors[color].tertiary);
    //doc.style.setProperty(`--editorTheme3-${color}-field-background`, blockColors[color].quaternary);
  }

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  let metaThemeColor = document.head.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', evaluateCSS(guiColors['menu-bar-background']));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors['looks-secondary']
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].recolorCallbacks.forEach(i => i());
};


/***/ }),

/***/ "./src/lib/themes/index.js":
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
/*! exports provided: Theme, ACCENT_RED, ACCENT_PURPLE, ACCENT_BLUE, ACCENT_CYAN, ACCENT_GREEN, ACCENT_ORANGE, ACCENT_RAINBOW, ACCENT_MAP, GUI_LIGHT, GUI_DARK, GUI_AMOLED, GUI_MAP, BLOCKS_THREE, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RED", function() { return ACCENT_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_PURPLE", function() { return ACCENT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_BLUE", function() { return ACCENT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CYAN", function() { return ACCENT_CYAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GREEN", function() { return ACCENT_GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_ORANGE", function() { return ACCENT_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RAINBOW", function() { return ACCENT_RAINBOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return ACCENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_LIGHT", function() { return GUI_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DARK", function() { return GUI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_AMOLED", function() { return GUI_AMOLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return GUI_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_THREE", function() { return BLOCKS_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_DARK", function() { return BLOCKS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_HIGH_CONTRAST", function() { return BLOCKS_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_MAP", function() { return BLOCKS_MAP; });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_cyan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/cyan */ "./src/lib/themes/accent/cyan.js");
/* harmony import */ var _accent_green__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accent/green */ "./src/lib/themes/accent/green.js");
/* harmony import */ var _accent_orange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accent/orange */ "./src/lib/themes/accent/orange.js");
/* harmony import */ var _accent_rainbow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accent/rainbow */ "./src/lib/themes/accent/rainbow.js");
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _gui_amoled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gui/amoled */ "./src/lib/themes/gui/amoled.js");
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
var _Theme;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }














const ACCENT_PURPLE = 'purple';
const ACCENT_BLUE = 'blue';
const ACCENT_RED = 'red';
const ACCENT_CYAN = 'cyan';
const ACCENT_GREEN = 'green';
const ACCENT_ORANGE = 'orange';
const ACCENT_RAINBOW = 'rainbow';
const ACCENT_MAP = {
  [ACCENT_PURPLE]: _accent_purple__WEBPACK_IMPORTED_MODULE_1__,
  [ACCENT_BLUE]: _accent_blue__WEBPACK_IMPORTED_MODULE_2__,
  [ACCENT_RED]: _accent_red__WEBPACK_IMPORTED_MODULE_3__,
  [ACCENT_CYAN]: _accent_cyan__WEBPACK_IMPORTED_MODULE_4__,
  [ACCENT_GREEN]: _accent_green__WEBPACK_IMPORTED_MODULE_5__,
  [ACCENT_ORANGE]: _accent_orange__WEBPACK_IMPORTED_MODULE_6__,
  [ACCENT_RAINBOW]: _accent_rainbow__WEBPACK_IMPORTED_MODULE_7__
};
const ACCENT_DEFAULT = ACCENT_CYAN;
const GUI_LIGHT = 'light';
const GUI_DARK = 'dark';
const GUI_AMOLED = 'amoled';
const GUI_MAP = {
  [GUI_LIGHT]: _gui_light__WEBPACK_IMPORTED_MODULE_8__,
  [GUI_DARK]: _gui_dark__WEBPACK_IMPORTED_MODULE_9__,
  [GUI_AMOLED]: _gui_amoled__WEBPACK_IMPORTED_MODULE_10__
};
const GUI_DEFAULT = GUI_LIGHT;
const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_11__["blockColors"];
const BLOCKS_MAP = {
  [BLOCKS_THREE]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_11__["blockColors"],
    extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_11__["extensions"],
    colourModifier: _blocks_three__WEBPACK_IMPORTED_MODULE_11__["colourModifier"],
    textColourModifier: _blocks_three__WEBPACK_IMPORTED_MODULE_11__["textColourModifier"],
    useForStage: true
  },
  [BLOCKS_HIGH_CONTRAST]: {
    blocksMediaFolder: 'blocks-media/high-contrast',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_12__["blockColors"], defaultBlockColors),
    extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_12__["extensions"],
    colourModifier: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_12__["colourModifier"],
    textColourModifier: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_12__["textColourModifier"],
    useForStage: true
  },
  [BLOCKS_DARK]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_13__["blockColors"], defaultBlockColors),
    extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_13__["extensions"],
    colourModifier: _blocks_dark__WEBPACK_IMPORTED_MODULE_13__["colourModifier"],
    textColourModifier: _blocks_dark__WEBPACK_IMPORTED_MODULE_13__["textColourModifier"],
    useForStage: false
  }
};
let themeObjectsCreated = 0;
class Theme {
  constructor(accent, gui, blocks) {
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
  }
  set(what, to) {
    if (what === 'accent') {
      return new Theme(to, this.gui, this.blocks);
    } else if (what === 'gui') {
      return new Theme(this.accent, to, this.blocks);
    } else if (what === 'blocks') {
      return new Theme(this.accent, this.gui, to);
    }
    throw new Error("Unknown theme property: ".concat(what));
  }
  getBlocksMediaFolder() {
    return BLOCKS_MAP[this.blocks].blocksMediaFolder;
  }
  getGuiColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].guiColors, GUI_MAP[this.gui].guiColors, _gui_light__WEBPACK_IMPORTED_MODULE_8__["guiColors"]);
  }
  getBlockColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].blockColors, GUI_MAP[this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
  }
  getExtensions() {
    return BLOCKS_MAP[this.blocks].extensions;
  }
  isDark() {
    return this.getGuiColors()['color-scheme'] === 'dark';
  }
  getStageBlockColors() {
    if (BLOCKS_MAP[this.blocks].useForStage) {
      return this.getBlockColors();
    }
    return Theme.light.getBlockColors();
  }
  getColourModifier() {
    return BLOCKS_MAP[this.blocks].colourModifier;
  }
  getTextColourModifier() {
    return BLOCKS_MAP[this.blocks].textColourModifier;
  }
}
_Theme = Theme;
_defineProperty(Theme, "light", new _Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT));
_defineProperty(Theme, "dark", new _Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT));
_defineProperty(Theme, "highContrast", new _Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST));


/***/ }),

/***/ "./src/lib/themes/themePersistance.js":
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
/*! exports provided: onSystemPreferenceChange, detectTheme, persistTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSystemPreferenceChange", function() { return onSystemPreferenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectTheme", function() { return detectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTheme", function() { return persistTheme; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");

const matchMedia = query => window.matchMedia ? window.matchMedia(query) : null;
const PREFERS_HIGH_CONTRAST_QUERY = matchMedia('(prefers-contrast: more)');
const PREFERS_DARK_QUERY = matchMedia('(prefers-color-scheme: dark)');
const STORAGE_KEY = 'tw:theme';

/**
 * @returns {Theme} detected theme
 */
const systemPreferencesTheme = () => {
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].highContrast;
  }
  if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
  }
  return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
const onSystemPreferenceChange = onChange => {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return () => {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener('change', onChange);
  PREFERS_DARK_QUERY.addEventListener('change', onChange);
  return () => {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener('change', onChange);
    PREFERS_DARK_QUERY.removeEventListener('change', onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
const detectTheme = () => {
  const systemPreferences = systemPreferencesTheme();
  try {
    const local = localStorage.getItem(STORAGE_KEY);

    // Migrate legacy preferences
    if (local === 'dark') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
    }
    if (local === 'light') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
    }
    const parsed = JSON.parse(local);
    // Any invalid values in storage will be handled by Theme itself
    return new ___WEBPACK_IMPORTED_MODULE_0__["Theme"](parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks);
  } catch (e) {
    // ignore
  }
  return systemPreferences;
};

/**
 * @param {Theme} theme the theme
 */
const persistTheme = theme => {
  const systemPreferences = systemPreferencesTheme();
  const nonDefaultSettings = {};
  if (theme.accent !== systemPreferences.accent) {
    nonDefaultSettings.accent = theme.accent;
  }
  if (theme.gui !== systemPreferences.gui) {
    nonDefaultSettings.gui = theme.gui;
  }
  if (theme.blocks !== systemPreferences.blocks) {
    nonDefaultSettings.blocks = theme.blocks;
  }
  if (Object.keys(nonDefaultSettings).length === 0) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nonDefaultSettings));
    } catch (e) {
      // ignore
    }
  }
};


/***/ }),

/***/ "./src/lib/tw-color-utils.js":
/*!***********************************!*\
  !*** ./src/lib/tw-color-utils.js ***!
  \***********************************/
/*! exports provided: hex2rgb, rgb2hex, hex2hsv, hsv2hex, hex2hsl, hsl2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2rgb", function() { return hex2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return rgb2hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsv", function() { return hex2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsl", function() { return hex2hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl2hex", function() { return hsl2hex; });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
const hex2rgb = hex => {
  const parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
const rgb2hex = rgb => {
  const number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, '0'));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
const rgb2hsv = rgb => {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
const hsv2rgb = hsv => {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};

// Source - https://stackoverflow.com/a/54116681
// Posted by Kamil Kiełczewski, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-26, License - CC BY-SA 4.0
let hsl2hsv = function hsl2hsv(_ref) {
  let [h, s, l] = _ref;
  let v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s * Math.min(l, 100 - l) + l;
  return [h, v ? 200 - 200 * l / v : 0, v];
};
let hsv2hsl = function hsv2hsl(_ref2) {
  let [h, s, v] = _ref2;
  let l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : v - v * s / 2 / 100;
  let m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.min(l, 100 - l);
  return [h, m ? (v - l) / m : 0, l];
};
const hex2hsv = hex => rgb2hsv(hex2rgb(hex));
const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv));
const hex2hsl = hex => hsv2hsl(hex2hsv(hex));
const hsl2hex = hsl => hsv2hex(hsl2hsv(hsl));


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
const render = children => {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
  if (window.SplashEnd) {
    window.SplashEnd();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./credits.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_credits_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }









/* eslint-disable react/jsx-no-literals */

Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_5__["applyGuiColors"])(Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_6__["detectTheme"])());
document.documentElement.lang = 'en';
const User = _ref => {
  let {
    image,
    text,
    href
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    loading: "lazy",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.userImage,
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.userInfo
  }, text));
};
User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const UserList = _ref2 => {
  let {
    users
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.users
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText
}, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " project is made possible by the work of many volunteers.")), _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"] !== 'TurboWarp' &&
/*#__PURE__*/
// Be kind and considerate. Don't remove this :)
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TurboWarp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://turbowarp.org/"
}, "TurboWarp"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].contributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].addonDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TurboWarp Extension Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].extensionDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].docs
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More than 100 people have helped translate ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " and its addons into many languages \u2014 far more than we could hope to list here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Individual contributors are listed in no particular order. The order is randomized each visit."))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null));

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const fromHardcoded = _ref => {
  let {
    userID = '0',
    username
  } = _ref;
  const result = {
    image: "https://trampoline.turbowarp.org/avatars/".concat(userID),
    text: username
  };
  if (username && userID !== '0') {
    result.href = "https://scratch.mit.edu/users/".concat(username, "/");
  }
  return result;
};

// The lists below are in no particular order.

const contributors = [{
  userID: '41219524',
  username: 'CubesterYT'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  userID: '128887584',
  username: 'FurryR'
}, {
  userID: '17340565',
  username: 'GarboMuffin'
}, {
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  userID: '105362329',
  username: 'TrueFantom'
}, {
  userID: '9636514',
  username: 'Tacodiva7729'
}, {
  userID: '141930175',
  username: 'SimonShiki'
}, {
  userID: '34824813',
  username: 'Geotale'
}, {
  username: 'Wowfunhappy'
}].map(fromHardcoded);
const addonDevelopers = [{
  userID: '34018398',
  username: 'Jeffalo'
}, {
  userID: '64184234',
  username: 'ErrorGamer2000'
}, {
  userID: '41616512',
  username: 'pufferfish101007'
}, {
  userID: '61409215',
  username: 'TheColaber'
}, {
  userID: '1882674',
  username: 'griffpatch'
}, {
  userID: '10817178',
  username: 'apple502j'
}, {
  userID: '16947341',
  username: '--Explosion--'
}, {
  userID: '14880401',
  username: 'Sheep_maker'
}, {
  userID: '9981676',
  username: 'NitroCipher'
}, {
  userID: '2561680',
  username: 'lisa_wolfgang'
}, {
  userID: '60000111',
  username: 'GDUcrash'
}, {
  userID: '4648559',
  username: 'World_Languages'
}, {
  userID: '17340565',
  username: 'GarboMuffin'
}, {
  userID: '5354974',
  username: 'Chrome_Cat'
}, {
  userID: '34455896',
  username: 'summerscar'
}, {
  userID: '55742784',
  username: 'RedGuy7'
}, {
  userID: '9636514',
  username: 'Tacodiva7729'
}, {
  userID: '14792872',
  username: '_nix'
}, {
  userID: '30323614',
  username: 'BarelySmooth'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  username: 'DNin01'
}, {
  userID: '16426047',
  username: 'Maximouse'
}, {
  username: 'retronbv'
}, {
  username: 'GrahamSH'
}, {
  userID: '22529928',
  username: 'simiagain'
}, {
  username: 'Secret-chest'
}, {
  userID: '11677378',
  username: 'Mr_MPH'
}, {
  username: 'TheKodeToad'
}].map(fromHardcoded);

// generated by TurboWarp/extensions/scripts/get-credits-for-gui.js
const extensionDevelopers = [{
  username: '-SIPC-'
}, {
  username: '0832'
}, {
  userID: '17235330',
  username: 'aleb2005'
}, {
  userID: '129742989',
  username: 'BludIsAnLemon'
}, {
  username: 'BlueDome77'
}, {
  username: 'clay-rip'
}, {
  userID: '37070511',
  username: 'cs2627883'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  userID: '41219524',
  username: 'CubesterYT'
}, {
  userID: '33988895',
  username: 'D-ScratchNinja'
}, {
  userID: '20632822',
  username: 'dogeiscut'
}, {
  username: 'DT'
}, {
  userID: '54392956',
  username: 'Fath11'
}, {
  userID: '1882674',
  username: 'griffpatch'
}, {
  userID: '41876695',
  username: 'JeremyGamer13'
}, {
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  userID: '29571977',
  username: 'man-o-valor'
}, {
  username: 'MikeDEV'
}, {
  userID: '74246431',
  username: '0znzw'
}, {
  userID: '62325737',
  username: 'mybearworld'
}, {
  userID: '62950341',
  username: 'NamelessCat'
}, {
  username: 'NishiOwO'
}, {
  username: 'NOname-awa'
}, {
  userID: '26959223',
  username: 'pinksheep2917'
}, {
  username: 'Pen-Group'
}, {
  username: 'pumpkinhasapatch'
}, {
  userID: '126715567',
  username: 'PwLDev'
}, {
  userID: '139929771',
  username: 'qxsck'
}, {
  userID: '29118689',
  username: 'RedMan13'
}, {
  userID: '80038021',
  username: 'RixTheTyrunt'
}, {
  userID: '45777723',
  username: 'DemonX5'
}, {
  userID: '14880401',
  username: 'Sheep_maker'
}, {
  userID: '103496265',
  username: 'shreder95ua'
}, {
  userID: '72467731',
  username: 'Skyhigh173'
}, {
  userID: '52066199',
  username: 'softed'
}, {
  userID: '166646203',
  username: 'Staevski_G'
}, {
  username: 'TheShovel'
}, {
  userID: '105362329',
  username: 'TrueFantom'
}, {
  userID: '19133274',
  username: 'Vadik1'
}, {
  username: 'veggiecan0419'
}, {
  userID: '82486672',
  username: 'lolecksdeehaha'
}, {
  userID: '3318598',
  username: 'plant2014'
}, {
  userID: '128778351',
  username: 'XmerOriginals'
}, {
  username: 'ZXMushroom63'
}].map(fromHardcoded);
const docs = [{
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  username: 'DNin01'
}, {
  username: 'Samq64'
}, {
  username: '61080GBA'
}, {
  username: 'adazem009'
}, {
  username: 'sajtosteszta32'
}, {
  username: 'yoyomonem'
}, {
  userID: '55742784',
  username: 'RedGuy7'
}, {
  username: '28klotlucas2'
}, {
  username: 'PPPDUD'
}, {
  username: 'BackThePortal'
}, {
  username: 'Naleksuh'
}].map(fromHardcoded);
/* harmony default export */ __webpack_exports__["default"] = ({
  contributors: shuffle(contributors),
  addonDevelopers: shuffle(addonDevelopers),
  extensionDevelopers: shuffle(extensionDevelopers),
  docs: shuffle(docs)
});

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map