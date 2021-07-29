(function() {
var exports = {};
exports.id = "pages/user/join";
exports.ids = ["pages/user/join"];
exports.modules = {

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
  IsLogin: false,
  board: {
    type: 'ALL',
    page: '1',
    searchType: null,
    searchValue: null,
    list: []
  },
  join: {
    userid: null,
    nickname: null,
    homtowm: null,
    residence: null,
    gender: null,
    age: null,
    show: '00000'
  }
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); //store도 컴포넌트

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./pages/store/reducer.jsx":
/*!*********************************!*\
  !*** ./pages/store/reducer.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    case "GET_USERID_SUCCESS":
      // console.log(state); 
      //   console.log(action.payload);  
      return _objectSpread(_objectSpread({}, state), {}, {
        join: _objectSpread(_objectSpread({}, state.join), {}, {
          userid: action.payload
        })
      });
  }
};

/***/ }),

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducer */ "./pages/store/reducer.jsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/context */ "./pages/store/context.jsx");


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\user\\join.jsx";





const Join = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_4__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async () => {
    const id = new URL(window.location.href).searchParams.get("id");
    dispatch({
      type: 'GET_USERID_SUCCESS',
      payload: id
    });
    console.log(state);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/user/join.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvc3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy91c2VyL2pvaW4uanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiSXNMb2dpbiIsImJvYXJkIiwidHlwZSIsInBhZ2UiLCJzZWFyY2hUeXBlIiwic2VhcmNoVmFsdWUiLCJsaXN0Iiwiam9pbiIsInVzZXJpZCIsIm5pY2tuYW1lIiwiaG9tdG93bSIsInJlc2lkZW5jZSIsImdlbmRlciIsImFnZSIsInNob3ciLCJTdG9yZSIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiSm9pbiIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImlkIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxTQUFPLEVBQUUsS0FEaUI7QUFFMUJDLE9BQUssRUFBQztBQUNKQyxRQUFJLEVBQUMsS0FERDtBQUVKQyxRQUFJLEVBQUMsR0FGRDtBQUdKQyxjQUFVLEVBQUMsSUFIUDtBQUlKQyxlQUFXLEVBQUMsSUFKUjtBQUtKQyxRQUFJLEVBQUM7QUFMRCxHQUZvQjtBQVMxQkMsTUFBSSxFQUFDO0FBQ0hDLFVBQU0sRUFBQyxJQURKO0FBRUxDLFlBQVEsRUFBQyxJQUZKO0FBR0xDLFdBQU8sRUFBQyxJQUhIO0FBSUxDLGFBQVMsRUFBQyxJQUpMO0FBS0xDLFVBQU0sRUFBQyxJQUxGO0FBTUxDLE9BQUcsRUFBQyxJQU5DO0FBT0xDLFFBQUksRUFBQztBQVBBO0FBVHFCLENBQXJCO0FBb0JQLE1BQU1DLEtBQUssZ0JBQUdDLG9EQUFhLENBQUNqQixZQUFELENBQTNCLEMsQ0FBMkM7O0FBRTNDLCtEQUFlZ0IsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qk8sTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN4QyxVQUFRQSxNQUFNLENBQUNqQixJQUFmO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsYUFBT2dCLEtBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsNkNBQ0tBLEtBREw7QUFFRWxCLGVBQU8sRUFBRTtBQUZYOztBQUtGLFNBQUssb0JBQUw7QUFDQTtBQUNBO0FBQ0EsNkNBQ09rQixLQURQO0FBRUlYLFlBQUksa0NBQ0NXLEtBQUssQ0FBQ1gsSUFEUDtBQUVGQyxnQkFBTSxFQUFDVyxNQUFNLENBQUNDO0FBRlo7QUFGUjtBQVpGO0FBb0JELENBckJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFFakIsUUFBTTtBQUFFSCxTQUFGO0FBQVFJO0FBQVIsTUFBcUJDLGlEQUFVLENBQUNSLG1EQUFELENBQXJDO0FBRUFTLGtEQUFTLENBQUMsWUFBWTtBQUNwQixVQUFNQyxFQUFFLEdBQUcsSUFBSUMsR0FBSixDQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhCLEVBQThCQyxZQUE5QixDQUEyQ0MsR0FBM0MsQ0FBK0MsSUFBL0MsQ0FBWDtBQUVBVCxZQUFRLENBQUM7QUFBRXBCLFVBQUksRUFBRSxvQkFBUjtBQUE4QmtCLGFBQU8sRUFBRUs7QUFBdkMsS0FBRCxDQUFSO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBQ0gsR0FMVSxFQUtULEVBTFMsQ0FBVDtBQVFBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVELENBdEJEOztBQXdCQSwrREFBZUcsSUFBZixFOzs7Ozs7Ozs7OztBQy9CQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy91c2VyL2pvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIElzTG9naW46IGZhbHNlLFxyXG4gIGJvYXJkOntcclxuICAgIHR5cGU6J0FMTCcsXHJcbiAgICBwYWdlOicxJyxcclxuICAgIHNlYXJjaFR5cGU6bnVsbCxcclxuICAgIHNlYXJjaFZhbHVlOm51bGwsXHJcbiAgICBsaXN0OltdLCBcclxuICB9LFxyXG4gIGpvaW46e1xyXG4gICAgdXNlcmlkOm51bGwsXHJcbiAgbmlja25hbWU6bnVsbCxcclxuICBob210b3dtOm51bGwsXHJcbiAgcmVzaWRlbmNlOm51bGwsXHJcbiAgZ2VuZGVyOm51bGwsXHJcbiAgYWdlOm51bGwsXHJcbiAgc2hvdzonMDAwMDAnXHJcbiAgfVxyXG5cclxufTtcclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7IC8vc3RvcmXrj4Qg7Lu07Y+s64SM7Yq4XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJMT0dJTlwiOlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICBjYXNlIFwiTE9HT1VUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogZmFsc2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBcIkdFVF9VU0VSSURfU1VDQ0VTU1wiOiBcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTsgXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTsgIFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgIGpvaW46e1xyXG4gICAgICAgICAgLi4uc3RhdGUuam9pbixcclxuICAgICAgICAgIHVzZXJpZDphY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn07XHJcbiIsIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuLi9zdG9yZS9jb250ZXh0XCI7XHJcblxyXG5cclxuY29uc3QgSm9pbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBzdGF0ZSxkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTsgXHJcbiAgIFxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnR0VUX1VTRVJJRF9TVUNDRVNTJywgcGF5bG9hZDogaWQgfSlcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTsgXHJcbn0sW10pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkpvaW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8Rm9ybUxheW91dD5oZWxsbyBKT0lOPC9Gb3JtTGF5b3V0PiAqL31cclxuXHJcbiAgICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW47XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9