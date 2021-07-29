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
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_join_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/join.context */ "./pages/store/join.context.jsx");
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

  var joinContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_store_join_context__WEBPACK_IMPORTED_MODULE_4__.default);

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
              id: id
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_join_context__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9qb2luLmpzeCJdLCJuYW1lcyI6WyJKb2luIiwiam9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSm9pblN0b3JlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiaWQiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsV0FBVyxHQUFHQyxpREFBVSxDQUFDQyx3REFBRCxDQUE5Qjs7QUFGaUIsb0JBR1FDLGlEQUFVLENBQUNDLG1EQUFELEVBQVNKLFdBQVQsQ0FIbEI7QUFBQSxNQUdWSyxLQUhVO0FBQUEsTUFHSkMsUUFISTs7QUFLakJDLGtEQUFTLDZUQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyxjQURFLEdBQ0csSUFBSUMsR0FBSixDQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhCLEVBQThCQyxZQUE5QixDQUEyQ0MsR0FBM0MsQ0FBK0MsSUFBL0MsQ0FESDtBQUVGQyxnQkFGRSxHQUVLO0FBQ1hQLGdCQUFFLEVBQUZBO0FBRFcsYUFGTDtBQUtSRixvQkFBUSxDQUFDO0FBQUVVLGtCQUFJLEVBQUUsb0JBQVI7QUFBOEJDLHFCQUFPLEVBQUVGO0FBQXZDLGFBQUQsQ0FBUjtBQUNBRyxtQkFBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7O0FBTlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQU9ULEVBUFMsQ0FBVDtBQVVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLDhEQUFDLGlFQUFEO0FBQW9CLFdBQUssRUFBRTtBQUFFQSxhQUFLLEVBQUxBLEtBQUY7QUFBU0MsZ0JBQVEsRUFBUkE7QUFBVDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQVlELENBM0JEOztHQUFNUCxJOztLQUFBQSxJO0FBNkJOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvam9pbi4xNWUzMmE1ZjA2NjExOGM0M2FkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEpvaW5TdG9yZSBmcm9tIFwiLi4vc3RvcmUvam9pbi5jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJcIjtcclxuaW1wb3J0IGdldFVzZXJJRCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcGkvdXNlci5hcGlcIlxyXG5cclxuY29uc3QgSm9pbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgam9pbkNvbnRleHQgPSB1c2VDb250ZXh0KEpvaW5TdG9yZSk7XHJcbiAgY29uc3QgW3N0YXRlLGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcixqb2luQ29udGV4dClcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImlkXCIpOyBcclxuICAgIGNvbnN0IGRhdGEgPSB7IFxyXG4gICAgICBpZCxcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0dFVF9VU0VSSURfU1VDQ0VTUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTsgXHJcbn0sW10pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkpvaW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8Rm9ybUxheW91dD5oZWxsbyBKT0lOPC9Gb3JtTGF5b3V0PiAqL31cclxuICAgICAgPEpvaW5TdG9yZS5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvSm9pblN0b3JlLlByb3ZpZGVyPlxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=