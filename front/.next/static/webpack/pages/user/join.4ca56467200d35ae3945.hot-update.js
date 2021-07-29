self["webpackHotUpdate_N_E"]("pages/user/join",{

/***/ "./pages/store/join.context.jsx":
/*!**************************************!*\
  !*** ./pages/store/join.context.jsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_join_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/join.context */ "./pages/store/join.context.jsx");
/* harmony import */ var _store_join_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_store_join_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducer */ "./pages/store/reducer.jsx");
/* harmony import */ var _components_api_user_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/api/user.api */ "./components/api/user.api.jsx");
/* harmony import */ var _components_api_user_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_api_user_api__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\user\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var Join = function Join() {
  _s();

  var joinContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)((_store_join_context__WEBPACK_IMPORTED_MODULE_4___default()));

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer, joinContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var id, data;
    return C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = new URL(window.location.href).searchParams.get("id");
            data = {
              id: "".concat(id)
            };
            dispatch({
              type: 'GET_USERID_SUCCESS',
              payload: data
            });
            console.log(state);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_store_join_context__WEBPACK_IMPORTED_MODULE_4___default().Provider), {
      value: {
        state: state,
        dispatch: dispatch
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Join, "uYkSsZgVfM4PHFkmTLkTSwbbc9c=");

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9qb2luLmpzeCJdLCJuYW1lcyI6WyJKb2luIiwiam9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSm9pblN0b3JlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiaWQiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQixNQUFNQyxXQUFXLEdBQUdDLGlEQUFVLENBQUNDLDREQUFELENBQTlCOztBQUZpQixvQkFHUUMsaURBQVUsQ0FBQ0MsbURBQUQsRUFBU0osV0FBVCxDQUhsQjtBQUFBLE1BR1ZLLEtBSFU7QUFBQSxNQUdKQyxRQUhJOztBQUtqQkMsa0RBQVMsNlRBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ZDLGNBREUsR0FDRyxJQUFJQyxHQUFKLENBQVFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBeEIsRUFBOEJDLFlBQTlCLENBQTJDQyxHQUEzQyxDQUErQyxJQUEvQyxDQURIO0FBRUZDLGdCQUZFLEdBRUs7QUFDWFAsZ0JBQUUsWUFBSUEsRUFBSjtBQURTLGFBRkw7QUFLUkYsb0JBQVEsQ0FBQztBQUFFVSxrQkFBSSxFQUFFLG9CQUFSO0FBQThCQyxxQkFBTyxFQUFFRjtBQUF2QyxhQUFELENBQVI7QUFDQUcsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaOztBQU5RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFPVCxFQVBTLENBQVQ7QUFVQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxxRUFBRDtBQUFvQixXQUFLLEVBQUU7QUFBRUEsYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGdCQUFRLEVBQVJBO0FBQVQ7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUEsa0JBREY7QUFZRCxDQTNCRDs7R0FBTVAsSTs7S0FBQUEsSTtBQTZCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2pvaW4uNGNhNTY0NjcyMDBkMzVhZTM5NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBKb2luU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2pvaW4uY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2VyXCI7XHJcbmltcG9ydCBnZXRVc2VySUQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXBpL3VzZXIuYXBpXCJcclxuXHJcbmNvbnN0IEpvaW4gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGpvaW5Db250ZXh0ID0gdXNlQ29udGV4dChKb2luU3RvcmUpO1xyXG4gIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsam9pbkNvbnRleHQpXHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTsgXHJcbiAgICBjb25zdCBkYXRhID0geyBcclxuICAgICAgaWQ6YCR7aWR9YCxcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0dFVF9VU0VSSURfU1VDQ0VTUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTsgXHJcbn0sW10pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkpvaW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8Rm9ybUxheW91dD5oZWxsbyBKT0lOPC9Gb3JtTGF5b3V0PiAqL31cclxuICAgICAgPEpvaW5TdG9yZS5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvSm9pblN0b3JlLlByb3ZpZGVyPlxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=