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
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9qb2luLmpzeCJdLCJuYW1lcyI6WyJKb2luIiwiam9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSm9pblN0b3JlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQixNQUFNQyxXQUFXLEdBQUdDLGlEQUFVLENBQUNDLHdEQUFELENBQTlCOztBQUZpQixvQkFHUUMsaURBQVUsQ0FBQ0MsbURBQUQsRUFBU0osV0FBVCxDQUhsQjtBQUFBLE1BR1ZLLEtBSFU7QUFBQSxNQUdKQyxRQUhJOztBQUlqQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxLQUFELENBQU8sUUFBUDtBQUFnQixXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGdCQUFRLEVBQVJBO0FBQVQsT0FBdkI7QUFBQSw2QkFDRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQVlELENBbkJEOztHQUFNUCxJOztLQUFBQSxJO0FBcUJOLCtEQUFlQSxJQUFmOztBQUlNO0FBQUEsOERBQUMsS0FBRCxDQUFPLFFBQVA7QUFBZ0IsT0FBSyxFQUFFO0FBQUVNLFNBQUssRUFBTEEsS0FBRjtBQUFTQyxZQUFRLEVBQVJBO0FBQVQsR0FBdkI7QUFBQSx5QkFDRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvam9pbi43NDljNWY4ZmU1YWE4YTRkMDgyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybUxheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBKb2luU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2pvaW4uY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlclwiO1xyXG5cclxuXHJcbmNvbnN0IEpvaW4gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGpvaW5Db250ZXh0ID0gdXNlQ29udGV4dChKb2luU3RvcmUpO1xyXG4gIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsam9pbkNvbnRleHQpXHJcbiAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgY29uc29sZS5sb2coZGlzcGF0Y2gpOyBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Kb2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPEZvcm1MYXlvdXQ+aGVsbG8gSk9JTjwvRm9ybUxheW91dD4gKi99XHJcbiAgICAgIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICA8L1N0b3JlLlByb3ZpZGVyPlxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luO1xyXG5cclxuXHJcblxyXG4gICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9