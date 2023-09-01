/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactTab: () => (/* binding */ createContactTab)\n/* harmony export */ });\n// contactTab.js\r\nfunction createContactTab() {\r\n    const contactDiv = document.createElement(\"div\");\r\n    contactDiv.classList.add(\"tab-content\");\r\n    contactDiv.innerHTML = `\r\n        <h2>Contact Us</h2>\r\n        <p>Email: contact@restaurant.com</p>\r\n        <p>Phone: (123) 456-7890</p>\r\n    `;\r\n\r\n    return contactDiv;\r\n}\r\n\n\n//# sourceURL=webpack://resturant-website/./src/contactTab.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n// homepage.js\r\nfunction createHomePage() {\r\n    const contentDiv = document.getElementById(\"content\");\r\n\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n    header.innerHTML = `\r\n        <h1>Welcome to Our Restaurant</h1>\r\n        <p>Experience the Finest Dining</p>\r\n    `;\r\n\r\n    const restaurantImage = document.createElement(\"img\");\r\n    restaurantImage.classList.add(\"restaurant-image\");\r\n    restaurantImage.src = \"restaurant-image.jpg\";\r\n    restaurantImage.alt = \"Restaurant Interior\";\r\n\r\n    const restaurantInfo = document.createElement(\"div\");\r\n    restaurantInfo.classList.add(\"restaurant-info\");\r\n    restaurantInfo.innerHTML = `\r\n        <h2>About Us</h2>\r\n        <p>Discover the exquisite flavors and unique ambiance of our restaurant. We take pride in offering a diverse menu prepared with the finest ingredients. Our friendly staff is dedicated to making your dining experience memorable.</p>\r\n        <p>Join us for a gastronomic journey that delights the senses and satisfies the palate.</p>\r\n    `;\r\n\r\n    contentDiv.appendChild(header);\r\n    contentDiv.appendChild(restaurantImage);\r\n    contentDiv.appendChild(restaurantInfo);\r\n}\r\n\n\n//# sourceURL=webpack://resturant-website/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n\r\n\r\n\r\n\r\n// Initial page load\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\r\n\r\nconst contentDiv = document.getElementById(\"content\");\r\nconst tabs = document.querySelectorAll(\".tab\");\r\nconst tabContents = {\r\n    \"home\": _homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage,\r\n    \"contact\": _contactTab__WEBPACK_IMPORTED_MODULE_1__.createContactTab,\r\n    \"menu\": _menuTab__WEBPACK_IMPORTED_MODULE_2__.createMenuTab\r\n};\r\n\r\ntabs.forEach(tab => {\r\n    tab.addEventListener(\"click\", () => {\r\n        // Remove current content\r\n        while (contentDiv.firstChild) {\r\n            contentDiv.removeChild(contentDiv.firstChild);\r\n        }\r\n\r\n        // Get tab ID and call corresponding tab content function\r\n        const tabId = tab.getAttribute(\"data-tab\");\r\n        tabContents[tabId]();\r\n\r\n        // Add active class to clicked tab\r\n        tabs.forEach(t => t.classList.remove(\"active\"));\r\n        tab.classList.add(\"active\");\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://resturant-website/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuTab: () => (/* binding */ createMenuTab)\n/* harmony export */ });\n// menuTab.js\r\nfunction createMenuTab() {\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.classList.add(\"tab-content\");\r\n    menuDiv.innerHTML = `\r\n        <h2>Menu</h2>\r\n        <p>Appetizers, main courses, desserts, and more! Explore our delicious menu options.</p>\r\n    `;\r\n\r\n    return menuDiv;\r\n}\r\n\n\n//# sourceURL=webpack://resturant-website/./src/menuTab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;