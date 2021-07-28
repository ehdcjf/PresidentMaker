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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const kakaoCallback = async (dispatch, code) => {
  try {
    const response = await fetch(`http://localhost:3002/api/kakao?code=${code}`);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}; //     if(!data.isUser){
//         return data.userid
//     }else{
//       return 
//       Router.push(`/`)
//     }
//     dispatch({ type: "LOGIN_SUCCESS", payload: data });
//   } catch (e) {
//     dispatch({ type: "LOGIN_ERROR", payload: e });
//   }
// };

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\kakao\\callback.jsx";





const KakaoLogin = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const result = await (0,_components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_2__.kakaoCallback)(dispatch, code); //이 아래 부분을 kakaoCallback 함수에서 다 처리하고 싶은데 방법을 못찾음.

    if (!result.isUser) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/user/join?id=${result.userid}`);
    } else {
      //dispatch해주고?.,,     
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/`);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\uCE74\uCE74\uC624 \uB85C\uAD6C\uC778 \uC981\uC785\uB2C8\uB3E0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
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
  IsLogin: false,
  board: {
    type: 'ALL',
    page: '1',
    searchType: null,
    searchValue: null,
    list: []
  }
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); //store도 컴포넌트

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvYXBpL2tha2FvQ2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvc3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImtha2FvQ2FsbGJhY2siLCJkaXNwYXRjaCIsImNvZGUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlIiwiS2FrYW9Mb2dpbiIsInN0YXRlIiwidXNlQ29udGV4dCIsIlN0b3JlIiwidXNlRWZmZWN0IiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicmVzdWx0IiwiaXNVc2VyIiwiUm91dGVyIiwidXNlcmlkIiwiaW5pdGlhbFN0YXRlIiwiSXNMb2dpbiIsImJvYXJkIiwidHlwZSIsInBhZ2UiLCJzZWFyY2hUeXBlIiwic2VhcmNoVmFsdWUiLCJsaXN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLE1BQU1BLGFBQWEsR0FBRyxPQUFPQyxRQUFQLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNyRCxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsd0NBQXVDRixJQUFLLEVBRG5CLENBQTVCO0FBR0EsVUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUNBLFdBQU9ELElBQVA7QUFDRCxHQU5ELENBUUEsT0FBT0UsQ0FBUCxFQUFTO0FBQ1AsV0FBT0EsQ0FBUDtBQUNEO0FBQ0YsQ0FaTSxDLENBY1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUVDLFNBQUY7QUFBU1I7QUFBVCxNQUFzQlMsaURBQVUsQ0FBQ0MsbURBQUQsQ0FBdEM7QUFFQUMsa0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFVBQU1WLElBQUksR0FBRyxJQUFJVyxHQUFKLENBQVFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBeEIsRUFBOEJDLFlBQTlCLENBQTJDQyxHQUEzQyxDQUErQyxNQUEvQyxDQUFiO0FBQ0EsVUFBTUMsTUFBTSxHQUFFLE1BQU1uQiw0RUFBYSxDQUFDQyxRQUFELEVBQVdDLElBQVgsQ0FBakMsQ0FGb0IsQ0FJcEI7O0FBQ0EsUUFBRyxDQUFDaUIsTUFBTSxDQUFDQyxNQUFYLEVBQWtCO0FBRWhCQyw2REFBQSxDQUFhLGlCQUFnQkYsTUFBTSxDQUFDRyxNQUFPLEVBQTNDO0FBQ0QsS0FIRCxNQUdLO0FBQ0g7QUFDQUQsNkRBQUEsQ0FBYSxHQUFiO0FBQ0Q7QUFDRixHQVpRLEVBWU4sRUFaTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0F0QkQ7O0FBd0JBLCtEQUFlYixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRU8sTUFBTWUsWUFBWSxHQUFHO0FBQzFCQyxTQUFPLEVBQUUsS0FEaUI7QUFFMUJDLE9BQUssRUFBQztBQUNKQyxRQUFJLEVBQUMsS0FERDtBQUVKQyxRQUFJLEVBQUMsR0FGRDtBQUdKQyxjQUFVLEVBQUMsSUFIUDtBQUlKQyxlQUFXLEVBQUMsSUFKUjtBQUtKQyxRQUFJLEVBQUM7QUFMRDtBQUZvQixDQUFyQjtBQVVQLE1BQU1uQixLQUFLLGdCQUFHb0Isb0RBQWEsQ0FBQ1IsWUFBRCxDQUEzQixDLENBQTJDOztBQUUzQywrREFBZVosS0FBZixFOzs7Ozs7Ozs7OztBQ2RBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2tha2FvL2NhbGxiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcblxyXG4gIGNhdGNoIChlKXsgXHJcbiAgICByZXR1cm4gZTsgXHJcbiAgfVxyXG59XHJcblxyXG4vLyAgICAgaWYoIWRhdGEuaXNVc2VyKXtcclxuLy8gICAgICAgICByZXR1cm4gZGF0YS51c2VyaWRcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICByZXR1cm4gXHJcbi8vICAgICAgIFJvdXRlci5wdXNoKGAvYClcclxuLy8gICAgIH1cclxuXHJcblxyXG5cclxuLy8gICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dJTl9TVUNDRVNTXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX0VSUk9SXCIsIHBheWxvYWQ6IGUgfSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsga2FrYW9DYWxsYmFjayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FwaS9rYWthb0NhbGxiYWNrXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vc3RvcmUvY29udGV4dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgS2FrYW9Mb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPWF3YWl0IGtha2FvQ2FsbGJhY2soZGlzcGF0Y2gsIGNvZGUpO1xyXG5cclxuICAgIC8v7J20IOyVhOuemCDrtoDrtoTsnYQga2FrYW9DYWxsYmFjayDtlajsiJjsl5DshJwg64ukIOyymOumrO2VmOqzoCDsi7bsnYDrjbAg67Cp67KV7J2EIOuqu+ywvuydjC5cclxuICAgIGlmKCFyZXN1bHQuaXNVc2VyKXtcclxuICAgICAgXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdXNlci9qb2luP2lkPSR7cmVzdWx0LnVzZXJpZH1gKSBcclxuICAgIH1lbHNleyBcclxuICAgICAgLy9kaXNwYXRjaO2VtOyjvOqzoD8uLCwgICAgIFxyXG4gICAgICBSb3V0ZXIucHVzaChgL2ApXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+7Lm07Lm07JikIOuhnOq1rOyduCDspoHsnoXri4jrj6A8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9Mb2dpbjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBib2FyZDp7XHJcbiAgICB0eXBlOidBTEwnLFxyXG4gICAgcGFnZTonMScsXHJcbiAgICBzZWFyY2hUeXBlOm51bGwsXHJcbiAgICBzZWFyY2hWYWx1ZTpudWxsLFxyXG4gICAgbGlzdDpbXSwgXHJcbiAgfVxyXG59O1xyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTsgLy9zdG9yZeuPhCDsu7Ttj6zrhIztirhcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==