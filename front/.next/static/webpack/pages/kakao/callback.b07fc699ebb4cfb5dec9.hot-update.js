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
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFjay5qc3giXSwibmFtZXMiOlsia2FrYW9DYWxsYmFjayIsImRpc3BhdGNoIiwiY29kZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImlzVXNlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJSb3V0ZXIiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsYUFBYTtBQUFBOztBQUFBLDhUQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBRUZDLEtBQUssZ0RBQ2NELElBRGQsRUFGSDs7QUFBQTtBQUVuQkUsb0JBRm1CO0FBQUE7QUFBQSxtQkFLTkEsUUFBUSxDQUFDQyxJQUFULEVBTE07O0FBQUE7QUFLbkJDLGdCQUxtQjs7QUFNekIsZ0JBQUcsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFULEVBQWdCO0FBQ2RDLDhEQUFTLENBQUMsWUFBSTtBQUNaQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlKLElBQUksQ0FBQ0ssTUFBakI7QUFDQUMsb0VBQUEseUJBQTZCTixJQUFJLENBQUNLLE1BQWxDO0FBQ0QsZUFIUSxDQUFUO0FBSUQsYUFMRCxNQUtLO0FBQ0g7QUFDQUMsa0VBQUE7QUFDRDs7QUFJRFgsb0JBQVEsQ0FBQztBQUFFWSxrQkFBSSxFQUFFLGVBQVI7QUFBeUJDLHFCQUFPLEVBQUVSO0FBQWxDLGFBQUQsQ0FBUjtBQWxCeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQnpCTCxvQkFBUSxDQUFDO0FBQUVZLGtCQUFJLEVBQUUsYUFBUjtBQUF1QkMscUJBQU87QUFBOUIsYUFBRCxDQUFSOztBQXBCeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYmQsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rYWthby9jYWxsYmFjay5iMDdmYzY5OWViYjRjZmI1ZGVjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYoIWRhdGEuaXNVc2VyKXtcclxuICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS51c2VyaWQpXHJcbiAgICAgICAgUm91dGVyLnB1c2goYC91c2VyL2pvaW4/aWQ9JHtkYXRhLnVzZXJpZH1gKSBcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAvL2Rpc3BhdGNo66GcIOuhnOq3uOyduCDsoJXrs7Qg7JeF642w7J207Yq4IO2VmOqzoCBcclxuICAgICAgUm91dGVyLnB1c2goYC9gKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX1NVQ0NFU1NcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5fRVJST1JcIiwgcGF5bG9hZDogZSB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=