self["webpackHotUpdate_N_E"]("pages/kakao/callback",{

/***/ "./pages/kakao/callback.jsx":
/*!**********************************!*\
  !*** ./pages/kakao/callback.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/api/kakaoCallback */ "./components/api/kakaoCallback.jsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/context */ "./pages/store/context.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\kakao\\callback.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var KakaoLogin = function KakaoLogin() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_5__.default),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var code, result;
    return C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            code = new URL(window.location.href).searchParams.get("code");
            _context.next = 3;
            return (0,_components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_4__.kakaoCallback)(dispatch, code);

          case 3:
            result = _context.sent;

            //이 아래 부분을 kakaoCallback 함수에서 다 처리하고 싶은데 방법을 못찾음.
            if (!result.isUser) {
              router.push("/user/join?id=".concat(result.userid));
            } else {
              //dispatch해주고?.,,     
              router.push("/");
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\uCE74\uCE74\uC624 \uB85C\uAD6C\uC778 \uC981\uC785\uB2C8\uB3E0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(KakaoLogin, "tMjQDhNvN1vDEz7QS76YEprP+qA=");

_c = KakaoLogin;
/* harmony default export */ __webpack_exports__["default"] = (KakaoLogin);

var _c;

$RefreshReg$(_c, "KakaoLogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Il0sIm5hbWVzIjpbIktha2FvTG9naW4iLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29kZSIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsImdldCIsImtha2FvQ2FsbGJhY2siLCJyZXN1bHQiLCJpc1VzZXIiLCJyb3V0ZXIiLCJwdXNoIiwidXNlcmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLG9CQUNLQyxpREFBVSxDQUFDQyxtREFBRCxDQURmO0FBQUEsTUFDZkMsS0FEZSxlQUNmQSxLQURlO0FBQUEsTUFDUkMsUUFEUSxlQUNSQSxRQURROztBQUd2QkMsa0RBQVMsNlRBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ZDLGdCQURFLEdBQ0ssSUFBSUMsR0FBSixDQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhCLEVBQThCQyxZQUE5QixDQUEyQ0MsR0FBM0MsQ0FBK0MsTUFBL0MsQ0FETDtBQUFBO0FBQUEsbUJBRVlDLDRFQUFhLENBQUNULFFBQUQsRUFBV0UsSUFBWCxDQUZ6Qjs7QUFBQTtBQUVGUSxrQkFGRTs7QUFJUjtBQUNBLGdCQUFHLENBQUNBLE1BQU0sQ0FBQ0MsTUFBWCxFQUFrQjtBQUVoQkMsb0JBQU0sQ0FBQ0MsSUFBUCx5QkFBNkJILE1BQU0sQ0FBQ0ksTUFBcEM7QUFDRCxhQUhELE1BR0s7QUFDSDtBQUNBRixvQkFBTSxDQUFDQyxJQUFQO0FBQ0Q7O0FBWE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVlOLEVBWk0sQ0FBVDtBQWNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBdEJEOztHQUFNakIsVTs7S0FBQUEsVTtBQXdCTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rYWthby9jYWxsYmFjay41OWY2NzExZWYyZTcyYTYwZWI1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGtha2FvQ2FsbGJhY2sgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFja1wiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2NvbnRleHRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEtha2FvTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29kZSA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJjb2RlXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID1hd2FpdCBrYWthb0NhbGxiYWNrKGRpc3BhdGNoLCBjb2RlKTtcclxuXHJcbiAgICAvL+ydtCDslYTrnpgg67aA67aE7J2EIGtha2FvQ2FsbGJhY2sg7ZWo7IiY7JeQ7IScIOuLpCDsspjrpqztlZjqs6Ag7Iu27J2A642wIOuwqeuyleydhCDrqrvssL7snYwuXHJcbiAgICBpZighcmVzdWx0LmlzVXNlcil7XHJcbiAgICAgIFxyXG4gICAgICByb3V0ZXIucHVzaChgL3VzZXIvam9pbj9pZD0ke3Jlc3VsdC51c2VyaWR9YCkgXHJcbiAgICB9ZWxzZXsgXHJcbiAgICAgIC8vZGlzcGF0Y2jtlbTso7zqs6A/LiwsICAgICBcclxuICAgICAgcm91dGVyLnB1c2goYC9gKVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPuy5tOy5tOyYpCDroZzqtazsnbgg7KaB7J6F64uI64+gPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=