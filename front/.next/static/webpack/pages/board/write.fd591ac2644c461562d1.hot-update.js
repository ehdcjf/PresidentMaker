self["webpackHotUpdate_N_E"]("pages/board/write",{

/***/ "./components/public/LinkBtn.jsx":
/*!***************************************!*\
  !*** ./components/public/LinkBtn.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn": function() { return /* binding */ Btn; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\components\\public\\LinkBtn.jsx",
    _this = undefined;



var StyledBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "LinkBtn__StyledBtn",
  componentId: "sc-1uzpjs8-0"
})(["display:inline;padding:7px 14px;color:black;border:1px solid black;border-radius:5px;"]);
_c = StyledBtn;
var Btn = function Btn(props) {
  var value = props.value,
      link = props.link;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBtn, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: link,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: [" ", value, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
}; //div는 나중에 스타일드 컴포넌트 주기.
//img도 받아서 버튼에 이미지도 넣어주기. 글쓰기는 펜, 검색은 돋보기. 인기글은 별 이런식으로

_c2 = Btn;

var _c, _c2;

$RefreshReg$(_c, "StyledBtn");
$RefreshReg$(_c2, "Btn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/board/write.jsx":
/*!*******************************!*\
  !*** ./pages/board/write.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_public_LinkBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/public/LinkBtn */ "./components/public/LinkBtn.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\board\\write.jsx",
    _this = undefined;



var Write = function Write() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: ["\uC81C\uBAA9:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 10
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uC791\uC131 \uC644\uB8CC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = Write;
/* harmony default export */ __webpack_exports__["default"] = (Write);

var _c;

$RefreshReg$(_c, "Write");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTGlua0J0bi5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkL3dyaXRlLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRCdG4iLCJzdHlsZWQiLCJCdG4iLCJwcm9wcyIsInZhbHVlIiwibGluayIsIldyaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2RkFBZjtLQUFNRCxTO0FBU0MsSUFBTUUsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDckJDLEtBRHFCLEdBQ1BELEtBRE8sQ0FDckJDLEtBRHFCO0FBQUEsTUFDZkMsSUFEZSxHQUNQRixLQURPLENBQ2ZFLElBRGU7QUFFNUIsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFaO0FBQUEsNkJBQWtCO0FBQUEsd0JBQUtELEtBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQVBNLEMsQ0FVUDtBQUNBOztNQVhhRixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1piOztBQUVBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFbEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLCtDQUNHO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILGVBRUE7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQsQ0FWRDs7S0FBTUEsSztBQVlOLCtEQUFnQkEsS0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmQvd3JpdGUuZmQ1OTFhYzI2NDRjNDYxNTYyZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRCdG4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA3cHggMTRweDtcclxuICBjb2xvcjpibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQnRuID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3ZhbHVlLGxpbmt9ID0gcHJvcHM7IFxyXG4gIHJldHVybihcclxuICAgIDxTdHlsZWRCdG4+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PjxhPiB7dmFsdWV9IDwvYT48L0xpbms+XHJcbiAgICA8L1N0eWxlZEJ0bj5cclxuICApXHJcbn1cclxuXHJcblxyXG4vL2RpduuKlCDrgpjspJHsl5Ag7Iqk7YOA7J2865OcIOy7tO2PrOuEjO2KuCDso7zquLAuXHJcbi8vaW1n64+EIOuwm+yVhOyEnCDrsoTtirzsl5Ag7J2066+47KeA64+EIOuEo+yWtOyjvOq4sC4g6riA7JOw6riw64qUIO2OnCwg6rKA7IOJ7J2AIOuPi+uztOq4sC4g7J246riw6riA7J2AIOuzhCDsnbTrn7Dsi53snLzroZwiLCJpbXBvcnQgeyBCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wdWJsaWMvTGlua0J0blwiXHJcblxyXG5jb25zdCBXcml0ZSA9ICgpID0+IHsgXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtID5cclxuICAgICAg7KCc66qpOjxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyekeyEsSDsmYTro4w8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgV3JpdGUiXSwic291cmNlUm9vdCI6IiJ9