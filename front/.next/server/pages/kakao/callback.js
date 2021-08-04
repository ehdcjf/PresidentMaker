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


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\\uC0C8 \uD3F4\uB354\\PresidentMaker\\front\\pages\\kakao\\callback.jsx";


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
      lineNumber: 28,
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
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvYXBpL2tha2FvQ2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImtha2FvQ2FsbGJhY2siLCJkaXNwYXRjaCIsImNvZGUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlIiwiS2FrYW9Mb2dpbiIsInVzZURpc3BhdGNoIiwibG9hZGRpbmciLCJJc0xvZ2luIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VFZmZlY3QiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaXNVc2VyIiwiUm91dGVyIiwidXNlcmlkIiwiVXNlckxvZ2luQWN0aW9uIiwiaW5pdGlhbFN0YXRlIiwibmlja25hbWUiLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxHQUFHLE9BQU9D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LEdBQUcsTUFBTTtBQUNsQyxTQUFPO0FBQ0xDLFFBQUksRUFBRUw7QUFERCxHQUFQO0FBSUQsQ0FMTTtBQVFBLE1BQU1NLGdCQUFnQixHQUFHLE1BQU07QUFDcEMsU0FBTztBQUNMRCxRQUFJLEVBQUVKO0FBREQsR0FBUDtBQUdELENBSk07O0FBTVAsTUFBTU0sT0FBTyxHQUFHLENBQUMzQixLQUFLLEdBQUdnQixZQUFULEVBQXVCWSxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNILElBQWY7QUFFRSxTQUFLUCxrQkFBTDtBQUNFLDZDQUNLbEIsS0FETDtBQUVFSCxnQkFBUSxFQUFFO0FBRlo7O0FBS0YsU0FBS3NCLGtCQUFMO0FBQ0UsNkNBQ0tuQixLQURMO0FBRUVGLGVBQU8sRUFBRSxJQUZYO0FBR0VnQixjQUFNLEVBQUVjLE1BQU0sQ0FBQ3BDLElBQVAsQ0FBWXNCLE1BSHRCO0FBSUVHLGdCQUFRLEVBQUVXLE1BQU0sQ0FBQ3BDLElBQVAsQ0FBWXlCLFFBSnhCO0FBS0VwQixnQkFBUSxFQUFFO0FBTFo7O0FBT0YsU0FBS3VCLGdCQUFMO0FBQ0UsNkNBQ0twQixLQURMO0FBRUVILGdCQUFRLEVBQUU7QUFGWjs7QUFJRixTQUFLd0IsV0FBTDtBQUNFLDZDQUNLckIsS0FETDtBQUVFRixlQUFPLEVBQUU7QUFGWDs7QUFJRjtBQUNFLGFBQU9FLEtBQVA7QUEzQko7QUE2QkQsQ0E5QkQ7O0FBZ0NBLCtEQUFlMkIsT0FBZixFOzs7Ozs7Ozs7OztBQ3hGQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9rYWthby9jYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBrYWthb0NhbGxiYWNrID0gYXN5bmMgKGRpc3BhdGNoLCBjb2RlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2tha2FvP2NvZGU9JHtjb2RlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGtha2FvQ2FsbGJhY2sgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcGkva2FrYW9DYWxsYmFja1wiO1xyXG4vLyBpbXBvcnQgU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2NvbnRleHRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlckxvZ2luQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEtha2FvTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbG9hZGRpbmcsIElzTG9naW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBrYWthb0NhbGxiYWNrKGRpc3BhdGNoLCBjb2RlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy/snbQg7JWE656YIOu2gOu2hOydhCBrYWthb0NhbGxiYWNrIO2VqOyImOyXkOyEnCDri6Qg7LKY66as7ZWY6rOgIOyLtuydgOuNsCDrsKnrspXsnYQg66q77LC+7J2MLlxyXG4gICAgaWYgKCFyZXN1bHQuaXNVc2VyKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdXNlci9qb2luP2lkPSR7cmVzdWx0LnVzZXJpZH1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbkFjdGlvbihyZXN1bHQpKTtcclxuICAgICAgUm91dGVyLnB1c2goYC9gKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj7subTsubTsmKQg66Gc6re47J24IOykkeyeheuLiOuLpC48L3NwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9Mb2dpbjtcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiBmYWxzZSxcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICB1c2VyaWQ6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgIHJlc3VsdC5pc1VzZXIgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9SRVFVRVNULFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX0VSUk9SLFxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBJc0xvZ2luOiB0cnVlLFxyXG4gICAgICAgIHVzZXJpZDogYWN0aW9uLmRhdGEudXNlcmlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBhY3Rpb24uZGF0YS5uaWNrbmFtZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=