(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scrollama__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_postmedia_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_colors_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_10__);




// LIBS

 // CSS





 // JS

var init = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var scroller, iframe;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // instantiate the scrollama
            scroller = scrollama__WEBPACK_IMPORTED_MODULE_5___default()();
            iframe = document.querySelector('.scrollyteller .chart > iframe'); // setup the instance, pass callback functions

            scroller.setup({
              offset: 0.75,
              step: '.step'
            }).onStepEnter(function (resp) {
              // { element, index, direction }
              iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + resp.index;
            }).onStepExit(function (resp) {// { element, index, direction }
            }); // setup resize event

            window.addEventListener("resize", scroller.resize);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[47,1,2]]]);