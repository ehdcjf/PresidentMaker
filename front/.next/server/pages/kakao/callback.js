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


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\\uC0C8 \uD3F4\uB354\\PresidentMaker\\front\\pages\\kakao\\callback.jsx";





const KakaoLogin = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const result = await (0,_components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_2__.kakaoCallback)(dispatch, code);
    console.log(result); //이 아래 부분을 kakaoCallback 함수에서 다 처리하고 싶은데 방법을 못찾음.

    if (!result.isUser) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/user/join?id=${result.userid}`);
    } else {
      //dispatch해주고?.,,
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/`);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\uCE74\uCE74\uC624 \uB85C\uADF8\uC778 \uC911\uC785\uB2C8\uB2E4."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvYXBpL2tha2FvQ2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvc3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImtha2FvQ2FsbGJhY2siLCJkaXNwYXRjaCIsImNvZGUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlIiwiS2FrYW9Mb2dpbiIsInN0YXRlIiwidXNlQ29udGV4dCIsIlN0b3JlIiwidXNlRWZmZWN0IiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlzVXNlciIsIlJvdXRlciIsInVzZXJpZCIsImluaXRpYWxTdGF0ZSIsIklzTG9naW4iLCJib2FyZCIsInR5cGUiLCJwYWdlIiwic2VhcmNoVHlwZSIsInNlYXJjaFZhbHVlIiwibGlzdCIsImpvaW4iLCJuaWNrbmFtZSIsImhvbXRvd20iLCJyZXNpZGVuY2UiLCJnZW5kZXIiLCJhZ2UiLCJzaG93IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLE1BQU1BLGFBQWEsR0FBRyxPQUFPQyxRQUFQLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNyRCxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsd0NBQXVDRixJQUFLLEVBRG5CLENBQTVCO0FBR0EsVUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUNBLFdBQU9ELElBQVA7QUFDRCxHQU5ELENBUUEsT0FBT0UsQ0FBUCxFQUFTO0FBQ1AsV0FBT0EsQ0FBUDtBQUNEO0FBQ0YsQ0FaTSxDLENBY1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUVDLFNBQUY7QUFBU1I7QUFBVCxNQUFzQlMsaURBQVUsQ0FBQ0MsbURBQUQsQ0FBdEM7QUFFQUMsa0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFVBQU1WLElBQUksR0FBRyxJQUFJVyxHQUFKLENBQVFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBeEIsRUFBOEJDLFlBQTlCLENBQTJDQyxHQUEzQyxDQUErQyxNQUEvQyxDQUFiO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1uQiw0RUFBYSxDQUFDQyxRQUFELEVBQVdDLElBQVgsQ0FBbEM7QUFFQWtCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBSm9CLENBS3BCOztBQUNBLFFBQUksQ0FBQ0EsTUFBTSxDQUFDRyxNQUFaLEVBQW9CO0FBQ2xCQyw2REFBQSxDQUFhLGlCQUFnQkosTUFBTSxDQUFDSyxNQUFPLEVBQTNDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQUQsNkRBQUEsQ0FBYSxHQUFiO0FBQ0Q7QUFDRixHQVpRLEVBWU4sRUFaTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0F0QkQ7O0FBd0JBLCtEQUFlZixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRU8sTUFBTWlCLFlBQVksR0FBRztBQUMxQkMsU0FBTyxFQUFFLEtBRGlCO0FBRTFCQyxPQUFLLEVBQUM7QUFDSkMsUUFBSSxFQUFDLEtBREQ7QUFFSkMsUUFBSSxFQUFDLEdBRkQ7QUFHSkMsY0FBVSxFQUFDLElBSFA7QUFJSkMsZUFBVyxFQUFDLElBSlI7QUFLSkMsUUFBSSxFQUFDO0FBTEQsR0FGb0I7QUFTMUJDLE1BQUksRUFBQztBQUNIVCxVQUFNLEVBQUMsSUFESjtBQUVMVSxZQUFRLEVBQUMsSUFGSjtBQUdMQyxXQUFPLEVBQUMsSUFISDtBQUlMQyxhQUFTLEVBQUMsSUFKTDtBQUtMQyxVQUFNLEVBQUMsSUFMRjtBQU1MQyxPQUFHLEVBQUMsSUFOQztBQU9MQyxRQUFJLEVBQUM7QUFQQTtBQVRxQixDQUFyQjtBQW9CUCxNQUFNNUIsS0FBSyxnQkFBRzZCLG9EQUFhLENBQUNmLFlBQUQsQ0FBM0IsQyxDQUEyQzs7QUFFM0MsK0RBQWVkLEtBQWYsRTs7Ozs7Ozs7Ozs7QUN4QkEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMva2FrYW8vY2FsbGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGtha2FvQ2FsbGJhY2sgPSBhc3luYyAoZGlzcGF0Y2gsIGNvZGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hcGkva2FrYW8/Y29kZT0ke2NvZGV9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuXHJcbiAgY2F0Y2ggKGUpeyBcclxuICAgIHJldHVybiBlOyBcclxuICB9XHJcbn1cclxuXHJcbi8vICAgICBpZighZGF0YS5pc1VzZXIpe1xyXG4vLyAgICAgICAgIHJldHVybiBkYXRhLnVzZXJpZFxyXG4vLyAgICAgfWVsc2V7XHJcbi8vICAgICAgIHJldHVybiBcclxuLy8gICAgICAgUm91dGVyLnB1c2goYC9gKVxyXG4vLyAgICAgfVxyXG5cclxuXHJcblxyXG4vLyAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR0lOX1NVQ0NFU1NcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5fRVJST1JcIiwgcGF5bG9hZDogZSB9KTtcclxuLy8gICB9XHJcbi8vIH07XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBrYWthb0NhbGxiYWNrIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXBpL2tha2FvQ2FsbGJhY2tcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuLi9zdG9yZS9jb250ZXh0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBLYWthb0xvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvZGUgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGtha2FvQ2FsbGJhY2soZGlzcGF0Y2gsIGNvZGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvL+ydtCDslYTrnpgg67aA67aE7J2EIGtha2FvQ2FsbGJhY2sg7ZWo7IiY7JeQ7IScIOuLpCDsspjrpqztlZjqs6Ag7Iu27J2A642wIOuwqeuyleydhCDrqrvssL7snYwuXHJcbiAgICBpZiAoIXJlc3VsdC5pc1VzZXIpIHtcclxuICAgICAgUm91dGVyLnB1c2goYC91c2VyL2pvaW4/aWQ9JHtyZXN1bHQudXNlcmlkfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9kaXNwYXRjaO2VtOyjvOqzoD8uLCxcclxuICAgICAgUm91dGVyLnB1c2goYC9gKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj7subTsubTsmKQg66Gc6re47J24IOykkeyeheuLiOuLpC48L3NwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9Mb2dpbjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBib2FyZDp7XHJcbiAgICB0eXBlOidBTEwnLFxyXG4gICAgcGFnZTonMScsXHJcbiAgICBzZWFyY2hUeXBlOm51bGwsXHJcbiAgICBzZWFyY2hWYWx1ZTpudWxsLFxyXG4gICAgbGlzdDpbXSwgXHJcbiAgfSxcclxuICBqb2luOntcclxuICAgIHVzZXJpZDpudWxsLFxyXG4gIG5pY2tuYW1lOm51bGwsXHJcbiAgaG9tdG93bTpudWxsLFxyXG4gIHJlc2lkZW5jZTpudWxsLFxyXG4gIGdlbmRlcjpudWxsLFxyXG4gIGFnZTpudWxsLFxyXG4gIHNob3c6JzAwMDAwJ1xyXG4gIH1cclxuXHJcbn07XHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpOyAvL3N0b3Jl64+EIOy7tO2PrOuEjO2KuFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9