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
            console.log(data);
            console.log(data.userid);

            if (!data.isUser) {
              next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/user/join?id=".concat(data.userid));
            } else {
              //dispatch로 로그인 정보 업데이트 하고 
              next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/");
            }

            dispatch({
              type: "LOGIN_SUCCESS",
              payload: data
            });
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: "LOGIN_ERROR",
              payload: _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFjay5qc3giXSwibmFtZXMiOlsia2FrYW9DYWxsYmFjayIsImRpc3BhdGNoIiwiY29kZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJpc1VzZXIiLCJSb3V0ZXIiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxhQUFhO0FBQUEsMlRBQUcsaUJBQU9DLFFBQVAsRUFBaUJDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRkMsS0FBSyxnREFDY0QsSUFEZCxFQUZIOztBQUFBO0FBRW5CRSxvQkFGbUI7QUFBQTtBQUFBLG1CQUtOQSxRQUFRLENBQUNDLElBQVQsRUFMTTs7QUFBQTtBQUtuQkMsZ0JBTG1CO0FBTXpCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLE1BQWpCOztBQUNBLGdCQUFHLENBQUNILElBQUksQ0FBQ0ksTUFBVCxFQUFnQjtBQUNkQyxrRUFBQSx5QkFBNkJMLElBQUksQ0FBQ0csTUFBbEM7QUFDRCxhQUZELE1BRUs7QUFDSDtBQUNBRSxrRUFBQTtBQUNEOztBQUlEVixvQkFBUSxDQUFDO0FBQUVXLGtCQUFJLEVBQUUsZUFBUjtBQUF5QkMscUJBQU8sRUFBRVA7QUFBbEMsYUFBRCxDQUFSO0FBakJ5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1CekJMLG9CQUFRLENBQUM7QUFBRVcsa0JBQUksRUFBRSxhQUFSO0FBQXVCQyxxQkFBTztBQUE5QixhQUFELENBQVI7O0FBbkJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFiYixhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tha2FvL2NhbGxiYWNrLjA2OGFmMjk1NTMxMDI5MzZmYTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEudXNlcmlkKVxyXG4gICAgaWYoIWRhdGEuaXNVc2VyKXtcclxuICAgICAgUm91dGVyLnB1c2goYC91c2VyL2pvaW4/aWQ9JHtkYXRhLnVzZXJpZH1gKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8vZGlzcGF0Y2jroZwg66Gc6re47J24IOygleuztCDsl4XrjbDsnbTtirgg7ZWY6rOgIFxyXG4gICAgICBSb3V0ZXIucHVzaChgL2ApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5fU1VDQ0VTU1wiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dJTl9FUlJPUlwiLCBwYXlsb2FkOiBlIH0pO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==