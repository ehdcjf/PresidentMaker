self["webpackHotUpdate_N_E"]("pages/kakao/callback",{

/***/ "./components/api/kakaoCallback.jsx":
/*!******************************************!*\
  !*** ./components/api/kakaoCallback.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kakaoCallback": function() { return /* binding */ kakaoCallback; }
/* harmony export */ });
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var kakaoCallback = /*#__PURE__*/function () {
  var _ref = (0,C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, code) {
    var response, data;
    return C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("http://localhost:3002/api/kakao?code=".concat(code));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;

            if (data.isUser) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return");

          case 12:
            //dispatch로 로그인 정보 업데이트 하고 
            next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/");

          case 13:
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: data
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: "LOGIN_ERROR",
              payload: _context.t0
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function kakaoCallback(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFjay5qc3giXSwibmFtZXMiOlsia2FrYW9DYWxsYmFjayIsImRpc3BhdGNoIiwiY29kZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImlzVXNlciIsIlJvdXRlciIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxhQUFhO0FBQUEsMlRBQUcsaUJBQU9DLFFBQVAsRUFBaUJDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRkMsS0FBSyxnREFDY0QsSUFEZCxFQUZIOztBQUFBO0FBRW5CRSxvQkFGbUI7QUFBQTtBQUFBLG1CQUtOQSxRQUFRLENBQUNDLElBQVQsRUFMTTs7QUFBQTtBQUtuQkMsZ0JBTG1COztBQUFBLGdCQVFyQkEsSUFBSSxDQUFDQyxNQVJnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVl2QjtBQUNBQyxnRUFBQTs7QUFidUI7QUFrQnpCUCxvQkFBUSxDQUFDO0FBQUVRLGtCQUFJLEVBQUUsZUFBUjtBQUF5QkMscUJBQU8sRUFBRUo7QUFBbEMsYUFBRCxDQUFSO0FBbEJ5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW9CekJMLG9CQUFRLENBQUM7QUFBRVEsa0JBQUksRUFBRSxhQUFSO0FBQXVCQyxxQkFBTztBQUE5QixhQUFELENBQVI7O0FBcEJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFiVixhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tha2FvL2NhbGxiYWNrLmRiOGY2M2ZlOTNjYjRmNTBlMzBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGtha2FvQ2FsbGJhY2sgPSBhc3luYyAoZGlzcGF0Y2gsIGNvZGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hcGkva2FrYW8/Y29kZT0ke2NvZGV9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgIGlmKCFkYXRhLmlzVXNlcil7XHJcbiAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdXNlci9qb2luP2lkPSR7ZGF0YS51c2VyaWR9YCkgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgLy9kaXNwYXRjaOuhnCDroZzqt7jsnbgg7KCV67O0IOyXheuNsOydtO2KuCDtlZjqs6AgXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvYClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dJTl9TVUNDRVNTXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX0VSUk9SXCIsIHBheWxvYWQ6IGUgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9