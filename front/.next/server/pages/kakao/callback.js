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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // 

const kakaoCallback = async (dispatch, code) => {
  try {
    console.log(code); // const response = await fetch(`http://localhost:3002/api/kakao?code=${code}`,{withCredentials: true});

    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`http://localhost:3002/api/kakao?code=${code}`, {
      withCredentials: true
    });
    console.log(response.data); // const data = await response.json();

    console.log(response);
    return response.data;
  } catch (e) {
    return e;
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/api/kakaoCallback */ "./components/api/kakaoCallback.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\kakao\\callback.jsx";


 // import Store from "../store/context";




const KakaoLogin = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    loadding,
    IsLogin
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const result = await (0,_components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_3__.kakaoCallback)(dispatch, code);
    console.log(result); //이 아래 부분을 kakaoCallback 함수에서 다 처리하고 싶은데 방법을 못찾음.

    if (!result.isUser) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/user/join?id=${result.userid}`);
    } else {
      dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_5__.UserLoginAction)(result));
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/`);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\uCE74\uCE74\uC624 \uB85C\uADF8\uC778 \uC911\uC785\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (KakaoLogin);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLoginRequest": function() { return /* binding */ UserLoginRequest; },
/* harmony export */   "UserLoginSuccess": function() { return /* binding */ UserLoginSuccess; },
/* harmony export */   "UserLoginError": function() { return /* binding */ UserLoginError; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: false,
  IsLogin: false,
  userid: null,
  nickname: null
};
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT = 'USER_LOGOUT';
const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLoginRequest());

    try {
      const result = data;
      console.log(result);
      result.isUser === true ? dispatch(UserLoginSuccess(result)) : dispatch(UserLoginError());
    } catch (e) {
      dispatch(UserLoginError());
    }
  };
};
const UserLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};
const UserLoginSuccess = data => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: data
  };
};
const UserLoginError = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        userid: action.data.userid,
        nickname: action.data.nickname,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false,
        userid: null,
        nickname: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvYXBpL2tha2FvQ2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJrYWthb0NhbGxiYWNrIiwiZGlzcGF0Y2giLCJjb2RlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiYXhpb3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiZSIsIktha2FvTG9naW4iLCJ1c2VEaXNwYXRjaCIsImxvYWRkaW5nIiwiSXNMb2dpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicmVzdWx0IiwiaXNVc2VyIiwiUm91dGVyIiwidXNlcmlkIiwiVXNlckxvZ2luQWN0aW9uIiwiaW5pdGlhbFN0YXRlIiwibmlja25hbWUiLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMva2FrYW8vY2FsbGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuLy8gXHJcbmV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKGNvZGUpXHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWAse3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hcGkva2FrYW8/Y29kZT0ke2NvZGV9YCx7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsga2FrYW9DYWxsYmFjayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FwaS9rYWthb0NhbGxiYWNrXCI7XHJcbi8vIGltcG9ydCBTdG9yZSBmcm9tIFwiLi4vc3RvcmUvY29udGV4dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5BY3Rpb24gfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgS2FrYW9Mb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBsb2FkZGluZywgSXNMb2dpbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvZGUgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGtha2FvQ2FsbGJhY2soZGlzcGF0Y2gsIGNvZGUpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8v7J20IOyVhOuemCDrtoDrtoTsnYQga2FrYW9DYWxsYmFjayDtlajsiJjsl5DshJwg64ukIOyymOumrO2VmOqzoCDsi7bsnYDrjbAg67Cp67KV7J2EIOuqu+ywvuydjC5cclxuICAgIGlmICghcmVzdWx0LmlzVXNlcikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3VzZXIvam9pbj9pZD0ke3Jlc3VsdC51c2VyaWR9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5BY3Rpb24ocmVzdWx0KSk7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvYCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+7Lm07Lm07JikIOuhnOq3uOyduCDspJHsnoXri4jri6QuPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvTG9naW47XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkZGluZzogZmFsc2UsXHJcbiAgSXNMb2dpbjogZmFsc2UsXHJcbiAgdXNlcmlkOiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSAnVVNFUl9MT0dJTl9FUlJPUidcclxuY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChVc2VyTG9naW5SZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICByZXN1bHQuaXNVc2VyID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKHJlc3VsdCkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICB1c2VyaWQ6IGFjdGlvbi5kYXRhLnVzZXJpZCxcclxuICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXJpZDpudWxsLFxyXG4gICAgICAgIG5pY2tuYW1lOm51bGwsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9