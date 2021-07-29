self["webpackHotUpdate_N_E"]("pages/user/join",{

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_join_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/join.context */ "./pages/store/join.context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducer */ "./pages/store/reducer.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\user\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var Join = function Join() {
  _s();

  var joinContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_join_context__WEBPACK_IMPORTED_MODULE_3__.default);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer, joinContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  console.log(state);
  console.log(dispatch);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {
      value: {
        state: state,
        dispatch: dispatch
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Join, "dDICboHbccXOPtYKSMzEyaRfmlI=");

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

/*#__PURE__*/
(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {
  value: {
    state: state,
    dispatch: dispatch
  },
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 34,
  columnNumber: 7
}, undefined);

var _c;

$RefreshReg$(_c, "Join");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9qb2luLmpzeCJdLCJuYW1lcyI6WyJKb2luIiwiam9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSm9pblN0b3JlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQixNQUFNQyxXQUFXLEdBQUdDLGlEQUFVLENBQUNDLHdEQUFELENBQTlCOztBQUZpQixvQkFHUUMsaURBQVUsQ0FBQ0MsbURBQUQsRUFBU0osV0FBVCxDQUhsQjtBQUFBLE1BR1ZLLEtBSFU7QUFBQSxNQUdKQyxRQUhJOztBQUlqQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxLQUFELENBQU8sUUFBUDtBQUFnQixXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGdCQUFRLEVBQVJBO0FBQVQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUEsa0JBREY7QUFZRCxDQW5CRDs7R0FBTVAsSTs7S0FBQUEsSTtBQXFCTiwrREFBZUEsSUFBZjs7QUFJTTtBQUFBLDhEQUFDLEtBQUQsQ0FBTyxRQUFQO0FBQWdCLE9BQUssRUFBRTtBQUFFTSxTQUFLLEVBQUxBLEtBQUY7QUFBU0MsWUFBUSxFQUFSQTtBQUFULEdBQXZCO0FBQUEseUJBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2pvaW4uMjQxYTVmYzkwY2I4MjI0MmZlMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSm9pblN0b3JlIGZyb20gXCIuLi9zdG9yZS9qb2luLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJcIjtcclxuXHJcblxyXG5jb25zdCBKb2luID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBqb2luQ29udGV4dCA9IHVzZUNvbnRleHQoSm9pblN0b3JlKTtcclxuICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLGpvaW5Db250ZXh0KVxyXG4gIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gIGNvbnNvbGUubG9nKGRpc3BhdGNoKTsgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Sm9pbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIDxGb3JtTGF5b3V0PmhlbGxvIEpPSU48L0Zvcm1MYXlvdXQ+ICovfVxyXG4gICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICAgIFxyXG4gICAgICA8L1N0b3JlLlByb3ZpZGVyPlxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luO1xyXG5cclxuXHJcblxyXG4gICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9