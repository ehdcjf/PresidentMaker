(function() {
var exports = {};
exports.id = "pages/kakao/callback";
exports.ids = ["pages/kakao/callback"];
exports.modules = {

/***/ "./components/api/kakaoCallback.jsx":
/*!******************************************!*\
  !*** ./components/api/kakaoCallback.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kakaoCallback": function() { return /* binding */ kakaoCallback; }
/* harmony export */ });
const kakaoCallback = async (dispatch, code) => {
  try {
    const response = await fetch(`http://localhost:3002/api/kakao?code=${code}`);
    const data = await response.json();
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data
    });
  } catch (e) {
    dispatch({
      type: "LOGIN_ERROR",
      payload: e
    });
  }
};

/***/ }),

/***/ "./pages/kakao/callback.jsx":
/*!**********************************!*\
  !*** ./pages/kakao/callback.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/api/kakaoCallback */ "./components/api/kakaoCallback.jsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./pages/store/context.jsx");


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\\uC0C8 \uD3F4\uB354\\PresidentMaker\\front\\pages\\kakao\\callback.jsx";




const KakaoLogin = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    (0,_components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_2__.kakaoCallback)(dispatch, code); // await dispatch(userActions.kakaoLogin(code));
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\uCE74\uCE74\uC624 \uB85C\uAD6C\uC778 \uC981\uC785\uB2C8\uB3E0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: ["\uAE30\uB2E4\uB9AC\uAC8C \uD574\uC11C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "\uBBF8\uC548\uD558\uB3E0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "\uACE0\uB9D9\uB3E0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (KakaoLogin);

/***/ }),

/***/ "./pages/store/context.jsx":
/*!*********************************!*\
  !*** ./pages/store/context.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  IsLogin: false
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); //store도 컴포넌트

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/kakao/callback.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvYXBpL2tha2FvQ2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvc3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsia2FrYW9DYWxsYmFjayIsImRpc3BhdGNoIiwiY29kZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInR5cGUiLCJwYXlsb2FkIiwiZSIsIktha2FvTG9naW4iLCJzdGF0ZSIsInVzZUNvbnRleHQiLCJTdG9yZSIsInVzZUVmZmVjdCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsImdldCIsImluaXRpYWxTdGF0ZSIsIklzTG9naW4iLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGFBQWEsR0FBRyxPQUFPQyxRQUFQLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNyRCxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsd0NBQXVDRixJQUFLLEVBRG5CLENBQTVCO0FBR0EsVUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUVBTCxZQUFRLENBQUM7QUFBRU0sVUFBSSxFQUFFLGVBQVI7QUFBeUJDLGFBQU8sRUFBRUg7QUFBbEMsS0FBRCxDQUFSO0FBQ0QsR0FQRCxDQU9FLE9BQU9JLENBQVAsRUFBVTtBQUNWUixZQUFRLENBQUM7QUFBRU0sVUFBSSxFQUFFLGFBQVI7QUFBdUJDLGFBQU8sRUFBRUM7QUFBaEMsS0FBRCxDQUFSO0FBQ0Q7QUFDRixDQVhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUVDLFNBQUY7QUFBU1Y7QUFBVCxNQUFzQlcsaURBQVUsQ0FBQ0MsbURBQUQsQ0FBdEM7QUFFQUMsa0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFVBQU1aLElBQUksR0FBRyxJQUFJYSxHQUFKLENBQVFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBeEIsRUFBOEJDLFlBQTlCLENBQTJDQyxHQUEzQyxDQUErQyxNQUEvQyxDQUFiO0FBQ0FwQixnRkFBYSxDQUFDQyxRQUFELEVBQVdDLElBQVgsQ0FBYixDQUZvQixDQUdwQjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsd0VBQ1U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUEsa0JBREY7QUFXRCxDQXBCRDs7QUFzQkEsK0RBQWVRLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFTyxNQUFNVyxZQUFZLEdBQUc7QUFDMUJDLFNBQU8sRUFBRTtBQURpQixDQUFyQjtBQUdQLE1BQU1ULEtBQUssZ0JBQUdVLG9EQUFhLENBQUNGLFlBQUQsQ0FBM0IsQyxDQUEyQzs7QUFFM0MsK0RBQWVSLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNQQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9rYWthby9jYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dJTl9TVUNDRVNTXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX0VSUk9SXCIsIHBheWxvYWQ6IGUgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsga2FrYW9DYWxsYmFjayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FwaS9rYWthb0NhbGxiYWNrXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vc3RvcmUvY29udGV4dFwiO1xyXG5cclxuY29uc3QgS2FrYW9Mb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XHJcbiAgICBrYWthb0NhbGxiYWNrKGRpc3BhdGNoLCBjb2RlKTtcclxuICAgIC8vIGF3YWl0IGRpc3BhdGNoKHVzZXJBY3Rpb25zLmtha2FvTG9naW4oY29kZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPuy5tOy5tOyYpCDroZzqtazsnbgg7KaB7J6F64uI64+gPC9zcGFuPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAg6riw64uk66as6rKMIO2VtOyEnCA8c3Ryb25nPuuvuOyViO2VmOuPoDwvc3Ryb25nPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8c3Ryb25nPuqzoOunmeuPoDwvc3Ryb25nPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvTG9naW47XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgSXNMb2dpbjogZmFsc2UsXHJcbn07XHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpOyAvL3N0b3Jl64+EIOy7tO2PrOuEjO2KuFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=