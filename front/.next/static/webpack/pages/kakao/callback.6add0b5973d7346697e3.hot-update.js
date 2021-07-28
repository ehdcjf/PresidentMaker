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



var moveJoin = next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/user/join?id=".concat(data.userid));
var kakaoCallback = /*#__PURE__*/function () {
  var _ref = (0,C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, code) {
    var response, _data;

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
            _data = _context.sent;

            if (!_data.isUser) {
              console.log(_data.userid);
            } else {
              //dispatch로 로그인 정보 업데이트 하고 
              next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/");
            }

            dispatch({
              type: "LOGIN_SUCCESS",
              payload: _data
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: "LOGIN_ERROR",
              payload: _context.t0
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFjay5qc3giXSwibmFtZXMiOlsibW92ZUpvaW4iLCJSb3V0ZXIiLCJkYXRhIiwidXNlcmlkIiwia2FrYW9DYWxsYmFjayIsImRpc3BhdGNoIiwiY29kZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiaXNVc2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBU0Msb0RBQUEseUJBQTZCQyxJQUFJLENBQUNDLE1BQWxDLEVBQXZCO0FBR08sSUFBTUMsYUFBYTtBQUFBLDJUQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVGQyxLQUFLLGdEQUNjRCxJQURkLEVBRkg7O0FBQUE7QUFFbkJFLG9CQUZtQjtBQUFBO0FBQUEsbUJBS05BLFFBQVEsQ0FBQ0MsSUFBVCxFQUxNOztBQUFBO0FBS25CUCxpQkFMbUI7O0FBTXpCLGdCQUFHLENBQUNBLEtBQUksQ0FBQ1EsTUFBVCxFQUFnQjtBQUNkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlWLEtBQUksQ0FBQ0MsTUFBakI7QUFDRCxhQUZELE1BRUs7QUFDSDtBQUNBRixrRUFBQTtBQUNEOztBQUlESSxvQkFBUSxDQUFDO0FBQUVRLGtCQUFJLEVBQUUsZUFBUjtBQUF5QkMscUJBQU8sRUFBRVo7QUFBbEMsYUFBRCxDQUFSO0FBZnlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJ6Qkcsb0JBQVEsQ0FBQztBQUFFUSxrQkFBSSxFQUFFLGFBQVI7QUFBdUJDLHFCQUFPO0FBQTlCLGFBQUQsQ0FBUjs7QUFqQnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJWLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva2FrYW8vY2FsbGJhY2suNmFkZDBiNTk3M2Q3MzQ2Njk3ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgbW92ZUpvaW4gPSAgICAgICBSb3V0ZXIucHVzaChgL3VzZXIvam9pbj9pZD0ke2RhdGEudXNlcmlkfWApIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYoIWRhdGEuaXNVc2VyKXtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS51c2VyaWQpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgLy9kaXNwYXRjaOuhnCDroZzqt7jsnbgg7KCV67O0IOyXheuNsOydtO2KuCDtlZjqs6AgXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvYClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dJTl9TVUNDRVNTXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX0VSUk9SXCIsIHBheWxvYWQ6IGUgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9