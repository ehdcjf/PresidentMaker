self["webpackHotUpdate_N_E"]("pages/kakao/callback",{

/***/ "./pages/store/context.jsx":
/*!*********************************!*\
  !*** ./pages/store/context.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var initialState = {
  IsLogin: false,
  board: {
    type: 'ALL',
    page: '1',
    searchType: null,
    searchValue: null
  }
};
var Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); //store도 컴포넌트

/* harmony default export */ __webpack_exports__["default"] = (Store);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUvY29udGV4dC5qc3giXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiSXNMb2dpbiIsImJvYXJkIiwidHlwZSIsInBhZ2UiLCJzZWFyY2hUeXBlIiwic2VhcmNoVmFsdWUiLCJTdG9yZSIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsU0FBTyxFQUFFLEtBRGlCO0FBRTFCQyxPQUFLLEVBQUM7QUFDSkMsUUFBSSxFQUFDLEtBREQ7QUFFSkMsUUFBSSxFQUFDLEdBRkQ7QUFHSkMsY0FBVSxFQUFDLElBSFA7QUFJSkMsZUFBVyxFQUFDO0FBSlI7QUFGb0IsQ0FBckI7QUFVUCxJQUFNQyxLQUFLLGdCQUFHQyxvREFBYSxDQUFDUixZQUFELENBQTNCLEMsQ0FBMkM7O0FBRTNDLCtEQUFlTyxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tha2FvL2NhbGxiYWNrLmQxMzQ5YWM3Nzg1Yjc0YjE0M2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIElzTG9naW46IGZhbHNlLFxyXG4gIGJvYXJkOntcclxuICAgIHR5cGU6J0FMTCcsXHJcbiAgICBwYWdlOicxJyxcclxuICAgIHNlYXJjaFR5cGU6bnVsbCxcclxuICAgIHNlYXJjaFZhbHVlOm51bGwsXHJcblxyXG4gIH1cclxufTtcclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7IC8vc3RvcmXrj4Qg7Lu07Y+s64SM7Yq4XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==