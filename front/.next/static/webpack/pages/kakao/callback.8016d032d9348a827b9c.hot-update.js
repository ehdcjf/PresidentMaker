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
  var _s = $RefreshSig$();

  var _ref = (0,C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)(_s( /*#__PURE__*/C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, code) {
    var response, data;
    return C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _s();

            _context.prev = 1;
            _context.next = 4;
            return fetch("http://localhost:3002/api/kakao?code=".concat(code));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;

            if (!data.isUser) {
              (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
                console.log(data.userid);
                next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/user/join?id=".concat(data.userid));
              }, []);
            } else {
              //dispatch로 로그인 정보 업데이트 하고 
              next_router__WEBPACK_IMPORTED_MODULE_2__.Router.push("/");
            }

            dispatch({
              type: "LOGIN_SUCCESS",
              payload: data
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: "LOGIN_ERROR",
              payload: _context.t0
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }), "OD7bBpZva5O2jO+Puf00hKivP7c="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFjay5qc3giXSwibmFtZXMiOlsia2FrYW9DYWxsYmFjayIsImRpc3BhdGNoIiwiY29kZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImlzVXNlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJSb3V0ZXIiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsYUFBYTtBQUFBOztBQUFBLDhUQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBRUZDLEtBQUssZ0RBQ2NELElBRGQsRUFGSDs7QUFBQTtBQUVuQkUsb0JBRm1CO0FBQUE7QUFBQSxtQkFLTkEsUUFBUSxDQUFDQyxJQUFULEVBTE07O0FBQUE7QUFLbkJDLGdCQUxtQjs7QUFNekIsZ0JBQUcsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFULEVBQWdCO0FBQ2RDLDhEQUFTLENBQUMsWUFBSTtBQUNaQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlKLElBQUksQ0FBQ0ssTUFBakI7QUFDQUMsb0VBQUEseUJBQTZCTixJQUFJLENBQUNLLE1BQWxDO0FBQ0QsZUFIUSxFQUdQLEVBSE8sQ0FBVDtBQUlELGFBTEQsTUFLSztBQUNIO0FBQ0FDLGtFQUFBO0FBQ0Q7O0FBSURYLG9CQUFRLENBQUM7QUFBRVksa0JBQUksRUFBRSxlQUFSO0FBQXlCQyxxQkFBTyxFQUFFUjtBQUFsQyxhQUFELENBQVI7QUFsQnlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBb0J6Qkwsb0JBQVEsQ0FBQztBQUFFWSxrQkFBSSxFQUFFLGFBQVI7QUFBdUJDLHFCQUFPO0FBQTlCLGFBQUQsQ0FBUjs7QUFwQnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJkLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva2FrYW8vY2FsbGJhY2suODAxNmQwMzJkOTM0OGE4MjdiOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qga2FrYW9DYWxsYmFjayA9IGFzeW5jIChkaXNwYXRjaCwgY29kZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAyL2FwaS9rYWthbz9jb2RlPSR7Y29kZX1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmKCFkYXRhLmlzVXNlcil7XHJcbiAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudXNlcmlkKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdXNlci9qb2luP2lkPSR7ZGF0YS51c2VyaWR9YCkgXHJcbiAgICAgIH0sW10pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgLy9kaXNwYXRjaOuhnCDroZzqt7jsnbgg7KCV67O0IOyXheuNsOydtO2KuCDtlZjqs6AgXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvYClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dJTl9TVUNDRVNTXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX0VSUk9SXCIsIHBheWxvYWQ6IGUgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9