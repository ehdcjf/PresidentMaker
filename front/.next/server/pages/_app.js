(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.css */ "./style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\\uC0C8 \uD3F4\uB354\\\uC0C8 \uD3F4\uB354 (2)\\PresidentMaker\\front\\pages\\_app.jsx";








const App = ({
  Component
}) => {
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useStore)(state => state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_5__.CookiesProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__.PersistGate, {
        persistor: store.__persistor,
        loading: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: "Loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 61
        }, undefined),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__.default.withRedux(App));

/***/ }),

/***/ "./reducers/article.js":
/*!*****************************!*\
  !*** ./reducers/article.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowArticleAction": function() { return /* binding */ ShowArticleAction; },
/* harmony export */   "ShowArticleRequest": function() { return /* binding */ ShowArticleRequest; },
/* harmony export */   "ShowArticleSuccess": function() { return /* binding */ ShowArticleSuccess; },
/* harmony export */   "ShowArticleError": function() { return /* binding */ ShowArticleError; },
/* harmony export */   "InsertBLikeAction": function() { return /* binding */ InsertBLikeAction; },
/* harmony export */   "DeleteBLikeAction": function() { return /* binding */ DeleteBLikeAction; },
/* harmony export */   "UpdateBLikeAction": function() { return /* binding */ UpdateBLikeAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: true,
  isWriter: false,
  isLike: null,
  id: null,
  subject: null,
  content: null,
  hit: null,
  liked: 0,
  disliked: 0,
  del: null,
  createdAt: null,
  updatedAt: null,
  nickname: null,
  useridx: null,
  comment: []
};
const SHOW_ARTICLE_REQUEST = 'SHOW_ARTICLE_REQUEST';
const SHOW_ARTICLE_SUCCESS = 'SHOW_ARTICLE_SUCCESS';
const SHOW_ARTICLE_ERROR = 'SHOW_ARTICLE_ERROR';
const INSERT_B_LIKE_ACTION = 'INSERT_B_LIKE_ACTION';
const INSERT_B_DISLIKE_ACTION = 'INSERT_B_DISLIKE_ACTION';
const DELETE_B_LIKE_ACTION = 'DELETE_B_LIKE_ACTION';
const DELETE_B_DISLIKE_ACTION = 'DELETE_B_DISLIKE_ACTION';
const UPDATE_B_LIKE_ACTION = 'UPDATE_B_LIKE_ACTION';
const UPDATE_B_DISLIKE_ACTION = 'UPDATE_B_DISLIKE_ACTION';
const ShowArticleAction = data => {
  return async dispatch => {
    dispatch(ShowArticleRequest());

    try {
      data.success === true ? dispatch(ShowArticleSuccess(data)) : dispatch(ShowArticleError());
    } catch (e) {
      dispatch(ShowArticleError());
    }
  };
};
const ShowArticleRequest = () => {
  return {
    type: SHOW_ARTICLE_REQUEST
  };
};
const ShowArticleSuccess = data => {
  return {
    type: SHOW_ARTICLE_SUCCESS,
    data: data
  };
};
const ShowArticleError = () => {
  return {
    type: SHOW_ARTICLE_ERROR
  };
};
const InsertBLikeAction = data => {
  if (data) {
    return {
      type: INSERT_B_LIKE_ACTION,
      data: data
    };
  } else {
    return {
      type: INSERT_B_DISLIKE_ACTION,
      data: data
    };
  }
};
const DeleteBLikeAction = data => {
  if (data) {
    return {
      type: DELETE_B_LIKE_ACTION
    };
  } else {
    return {
      type: DELETE_B_DISLIKE_ACTION
    };
  }
};
const UpdateBLikeAction = data => {
  if (data) {
    return {
      type: UPDATE_B_LIKE_ACTION
    };
  } else {
    return {
      type: UPDATE_B_DISLIKE_ACTION
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ARTICLE_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case SHOW_ARTICLE_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.data), {}, {
        loadding: false
      });

    case SHOW_ARTICLE_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case INSERT_B_LIKE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLike: true,
        liked: state.liked + 1
      });

    case INSERT_B_DISLIKE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLike: false,
        disliked: state.disliked + 1
      });

    case DELETE_B_LIKE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLike: null,
        liked: state.liked - 1
      });

    case DELETE_B_DISLIKE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLike: null,
        disliked: state.disliked - 1
      });

    case UPDATE_B_LIKE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLike: true,
        liked: state.liked + 1,
        disliked: state.disliked - 1
      });

    case UPDATE_B_DISLIKE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLike: false,
        liked: state.liked - 1,
        disliked: state.disliked + 1
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/board.js":
/*!***************************!*\
  !*** ./reducers/board.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowListAction": function() { return /* binding */ ShowListAction; },
/* harmony export */   "DeleteArticleAction": function() { return /* binding */ DeleteArticleAction; },
/* harmony export */   "ShowListRequest": function() { return /* binding */ ShowListRequest; },
/* harmony export */   "ShowListSuccess": function() { return /* binding */ ShowListSuccess; },
/* harmony export */   "ShowListError": function() { return /* binding */ ShowListError; },
/* harmony export */   "DeleteArticleRequest": function() { return /* binding */ DeleteArticleRequest; },
/* harmony export */   "DeleteArticleSuccess": function() { return /* binding */ DeleteArticleSuccess; },
/* harmony export */   "DeleteArticleError": function() { return /* binding */ DeleteArticleError; },
/* harmony export */   "CreateArticleAction": function() { return /* binding */ CreateArticleAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  type: 'all',
  search: null,
  keyword: null,
  page: 1,
  rows: 20,
  pageblock: [],
  endpage: null,
  list: []
};
const SHOW_LIST_REQUEST = 'SHOW_LIST_REQUEST';
const SHOW_LIST_SUCCESS = 'SHOW_LIST_SUCCESS';
const SHOW_LIST_ERROR = 'SHOW_LIST_ERROR';
const DELETE_ARTICLE_REQUEST = 'DELETE_ARTICLE_REQUEST';
const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
const CREATE_ARTICLE_ACTION = 'CREATE_ARTICLE_ACTION';
const ShowListAction = data => {
  return async dispatch => {
    dispatch(ShowListRequest());

    try {
      const result = data;
      result.success === true ? dispatch(ShowListSuccess(result)) : dispatch(ShowListError());
    } catch (e) {
      dispatch(ShowListError());
    }
  };
};
const DeleteArticleAction = data => {
  return async dispatch => {
    dispatch(DeleteArticleRequest());

    try {
      const result = data;
      result.success === true ? dispatch(DeleteArticleSuccess(result)) : dispatch(DeleteArticleError());
    } catch (e) {
      dispatch(DeleteArticleError());
    }
  };
};
const ShowListRequest = () => {
  return {
    type: SHOW_LIST_REQUEST
  };
};
const ShowListSuccess = data => {
  return {
    type: SHOW_LIST_SUCCESS,
    data: data
  };
};
const ShowListError = () => {
  return {
    type: SHOW_LIST_ERROR
  };
};
const DeleteArticleRequest = () => {
  return {
    type: DELETE_ARTICLE_REQUEST
  };
};
const DeleteArticleSuccess = data => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
    data: data
  };
};
const DeleteArticleError = () => {
  return {
    type: DELETE_ARTICLE_ERROR
  };
};
const CreateArticleAction = () => {
  return {
    type: CREATE_ARTICLE_ACTION
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LIST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case SHOW_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        list: [...action.data.results],
        page: action.data.page,
        pageblock: action.data.pageblock,
        endpage: action.data.totalPage,
        loadding: false
      });

    case SHOW_LIST_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case DELETE_ARTICLE_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case DELETE_ARTICLE_SUCCESS:
      const target = action.data.id;
      const newList = [...state.list].map(v => {
        if (v.id == target) {
          v.subject = "삭제된 게시글입니다.";
          v.del = 1;
          return v;
        }

        return v;
      });
      console.log(newList);
      return _objectSpread(_objectSpread({}, state), {}, {
        list: [...newList],
        loadding: false
      });

    case DELETE_ARTICLE_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case CREATE_ARTICLE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        type: 'all',
        page: 1
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  menu: [{
    id: '1',
    category: '대분류메뉴1',
    url: '/posts/1'
  }, {
    id: '2',
    category: '대분류메뉴2',
    url: '/posts/2'
  }, {
    id: '3',
    category: '대분류메뉴3',
    url: '/posts/3'
  }, {
    id: '4',
    category: '대분류메뉴4',
    url: '/posts/4'
  }, {
    id: '5',
    category: '대분류메뉴5',
    url: '/posts/5'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board */ "./reducers/board.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article */ "./reducers/article.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  board: _board__WEBPACK_IMPORTED_MODULE_4__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_3__.default,
  article: _article__WEBPACK_IMPORTED_MODULE_5__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
      data.isUser === true ? dispatch(UserLoginSuccess(data)) : dispatch(UserLoginError());
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
        nickname: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);






 // import createSaga from 'redux-saga'
// import rootSaga from '../saga/index'
///from   https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist  넥스트 리덕스 퍼시스트에 도움을 준  고마운 분들^^

const loggetrMiddelware = ({
  dispatch,
  getState
}) => next => action => {
  // console.log(action); 
  // console.log(dispatch); 
  // console.log(getState);
  return next(action);
};

const configureStore = () => {
  // const sagaMiddleware = createSaga(); 
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, enhancer); // Store.sagaTask = sagaMiddleware.run(rootSaga) 

  return Store;
};

const makeStore = ({
  isServer
}) => {
  const middlewares = [loggetrMiddelware, (redux_thunk__WEBPACK_IMPORTED_MODULE_5___default())]; // const middlewares = [sagaMiddleware]; 

  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));

  if (isServer) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, enhancer);
  } else {
    const {
      persistStore,
      persistReducer
    } = __webpack_require__(/*! redux-persist */ "redux-persist");

    const storage = __webpack_require__(/*! redux-persist/lib/storage/session */ "redux-persist/lib/storage/session").default;

    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["article", "board", "user"]
    };
    const persistedReducer = persistReducer(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_3__.default);
    const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(persistedReducer, enhancer);
    store.__persistor = persistStore(store);
    return store;
  }
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(makeStore, {
  debug: false
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-persist/lib/storage/session":
/*!****************************************************!*\
  !*** external "redux-persist/lib/storage/session" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage/session");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50Iiwic3RvcmUiLCJ1c2VTdG9yZSIsInN0YXRlIiwiX19wZXJzaXN0b3IiLCJ3cmFwcGVyIiwiaW5pdGlhbFN0YXRlIiwibG9hZGRpbmciLCJpc1dyaXRlciIsImlzTGlrZSIsImlkIiwic3ViamVjdCIsImNvbnRlbnQiLCJoaXQiLCJsaWtlZCIsImRpc2xpa2VkIiwiZGVsIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwibmlja25hbWUiLCJ1c2VyaWR4IiwiY29tbWVudCIsIlNIT1dfQVJUSUNMRV9SRVFVRVNUIiwiU0hPV19BUlRJQ0xFX1NVQ0NFU1MiLCJTSE9XX0FSVElDTEVfRVJST1IiLCJJTlNFUlRfQl9MSUtFX0FDVElPTiIsIklOU0VSVF9CX0RJU0xJS0VfQUNUSU9OIiwiREVMRVRFX0JfTElLRV9BQ1RJT04iLCJERUxFVEVfQl9ESVNMSUtFX0FDVElPTiIsIlVQREFURV9CX0xJS0VfQUNUSU9OIiwiVVBEQVRFX0JfRElTTElLRV9BQ1RJT04iLCJTaG93QXJ0aWNsZUFjdGlvbiIsImRhdGEiLCJkaXNwYXRjaCIsIlNob3dBcnRpY2xlUmVxdWVzdCIsInN1Y2Nlc3MiLCJTaG93QXJ0aWNsZVN1Y2Nlc3MiLCJTaG93QXJ0aWNsZUVycm9yIiwiZSIsInR5cGUiLCJJbnNlcnRCTGlrZUFjdGlvbiIsIkRlbGV0ZUJMaWtlQWN0aW9uIiwiVXBkYXRlQkxpa2VBY3Rpb24iLCJyZWR1Y2VyIiwiYWN0aW9uIiwic2VhcmNoIiwia2V5d29yZCIsInBhZ2UiLCJyb3dzIiwicGFnZWJsb2NrIiwiZW5kcGFnZSIsImxpc3QiLCJTSE9XX0xJU1RfUkVRVUVTVCIsIlNIT1dfTElTVF9TVUNDRVNTIiwiU0hPV19MSVNUX0VSUk9SIiwiREVMRVRFX0FSVElDTEVfUkVRVUVTVCIsIkRFTEVURV9BUlRJQ0xFX1NVQ0NFU1MiLCJERUxFVEVfQVJUSUNMRV9FUlJPUiIsIkNSRUFURV9BUlRJQ0xFX0FDVElPTiIsIlNob3dMaXN0QWN0aW9uIiwiU2hvd0xpc3RSZXF1ZXN0IiwicmVzdWx0IiwiU2hvd0xpc3RTdWNjZXNzIiwiU2hvd0xpc3RFcnJvciIsIkRlbGV0ZUFydGljbGVBY3Rpb24iLCJEZWxldGVBcnRpY2xlUmVxdWVzdCIsIkRlbGV0ZUFydGljbGVTdWNjZXNzIiwiRGVsZXRlQXJ0aWNsZUVycm9yIiwiQ3JlYXRlQXJ0aWNsZUFjdGlvbiIsInJlc3VsdHMiLCJ0b3RhbFBhZ2UiLCJ0YXJnZXQiLCJuZXdMaXN0IiwibWFwIiwidiIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwiY2F0ZWdvcnkiLCJ1cmwiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsImJvYXJkIiwiYXJ0aWNsZSIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJVc2VyTG9naW5SZXF1ZXN0IiwiaXNVc2VyIiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwiVXNlckxvZ291dEFjdGlvbiIsImxvZ2dldHJNaWRkZWx3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwiZW5oYW5jZXIiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInJlcXVpcmUiLCJzdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQ2YsU0FBRCxFQUFZO0FBQ3ZDZ0IsT0FBSztBQURrQyxDQUFaLENBQTdCO0FBSUEsK0RBQWVwSCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCI7XHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZz17PGRpdj5Mb2FkaW5nPC9kaXY+fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IHRydWUsXHJcbiAgaXNXcml0ZXI6IGZhbHNlLFxyXG4gIGlzTGlrZTogbnVsbCxcclxuICBpZDogbnVsbCxcclxuICBzdWJqZWN0OiBudWxsLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgaGl0OiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIGRlbDogbnVsbCxcclxuICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgdXBkYXRlZEF0OiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIHVzZXJpZHg6IG51bGwsXHJcbiAgY29tbWVudDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19BUlRJQ0xFX1JFUVVFU1QgPSAnU0hPV19BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9TVUNDRVNTID0gJ1NIT1dfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0FSVElDTEVfRVJST1IgPSAnU0hPV19BUlRJQ0xFX0VSUk9SJ1xyXG5jb25zdCBJTlNFUlRfQl9MSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9MSUtFX0FDVElPTidcclxuY29uc3QgSU5TRVJUX0JfRElTTElLRV9BQ1RJT04gPSAnSU5TRVJUX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQl9ESVNMSUtFX0FDVElPTiA9ICdERUxFVEVfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OID0gJ1VQREFURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goU2hvd0FydGljbGVTdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0FydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbnNlcnRCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9CX0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfTElLRV9BQ1RJT04sXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgKyAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVQREFURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgKyAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdHlwZTogJ2FsbCcsXHJcbiAgc2VhcmNoOiBudWxsLFxyXG4gIGtleXdvcmQ6IG51bGwsXHJcbiAgcGFnZTogMSxcclxuICByb3dzOiAyMCxcclxuICBwYWdlYmxvY2s6IFtdLFxyXG4gIGVuZHBhZ2U6IG51bGwsXHJcbiAgbGlzdDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19MSVNUX1JFUVVFU1QgPSAnU0hPV19MSVNUX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfTElTVF9TVUNDRVNTID0gJ1NIT1dfTElTVF9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0xJU1RfRVJST1IgPSAnU0hPV19MSVNUX0VSUk9SJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9SRVFVRVNUID0gJ0RFTEVURV9BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MgPSAnREVMRVRFX0FSVElDTEVfU1VDQ0VTUydcclxuY29uc3QgREVMRVRFX0FSVElDTEVfRVJST1IgPSAnREVMRVRFX0FSVElDTEVfRVJST1InXHJcbmNvbnN0IENSRUFURV9BUlRJQ0xFX0FDVElPTiA9ICdDUkVBVEVfQVJUSUNMRV9BQ1RJT04nXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dMaXN0UmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICAgIHJlc3VsdC5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93TGlzdFN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dMaXN0RXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgcmVzdWx0LnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKERlbGV0ZUFydGljbGVTdWNjZXNzKHJlc3VsdCkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0UmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdEVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUFydGljbGVBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENSRUFURV9BUlRJQ0xFX0FDVElPTixcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBTSE9XX0xJU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19MSVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLmFjdGlvbi5kYXRhLnJlc3VsdHNdLFxyXG4gICAgICAgIHBhZ2U6IGFjdGlvbi5kYXRhLnBhZ2UsXHJcbiAgICAgICAgcGFnZWJsb2NrOiBhY3Rpb24uZGF0YS5wYWdlYmxvY2ssXHJcbiAgICAgICAgZW5kcGFnZTogYWN0aW9uLmRhdGEudG90YWxQYWdlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGFjdGlvbi5kYXRhLmlkO1xyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnN0YXRlLmxpc3RdLm1hcCgodikgPT4ge1xyXG4gICAgICAgIGlmICh2LmlkID09IHRhcmdldCkge1xyXG4gICAgICAgICAgdi5zdWJqZWN0ID0gXCLsgq3soJzrkJwg6rKM7Iuc6riA7J6F64uI64ukLlwiXHJcbiAgICAgICAgICB2LmRlbCA9IDFcclxuICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhuZXdMaXN0KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4ubmV3TGlzdF0sXHJcblxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ1JFQVRFX0FSVElDTEVfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHR5cGU6ICdhbGwnLFxyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIG1lbnU6W1xyXG4gICAgeyBcclxuICAgIGlkOicxJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsXHJcbiAgICB1cmw6Jy9wb3N0cy8xJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMicsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgdXJsOicvcG9zdHMvMidcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzMnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic0JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgdXJsOicvcG9zdHMvNSdcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbnN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gc3RhdGVcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5pbXBvcnQgYm9hcmQgZnJvbSAnLi9ib2FyZCdcclxuaW1wb3J0IGFydGljbGUgZnJvbSAnLi9hcnRpY2xlJ1xyXG5cclxuaW1wb3J0IHsgcGVyc2lzdFJldWRlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsIGJvYXJkLCBjYXRlZ29yeSwgYXJ0aWNsZVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkZGluZzogZmFsc2UsXHJcbiAgSXNMb2dpbjogZmFsc2UsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgZGF0YS5pc1VzZXIgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCJcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcblxyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiXHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBjcmVhdGVTYWdhIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhL2luZGV4J1xyXG5cclxuXHJcblxyXG4vLy9mcm9tICAgaHR0cHM6Ly9naXRodWIuY29tL2Zhemx1bGthcmltd2ViL3dpdGgtbmV4dC1yZWR1eC13cmFwcGVyLXJlZHV4LXBlcnNpc3QgIOuEpeyKpO2KuCDrpqzrjZXsiqQg7Y287Iuc7Iqk7Yq47JeQIOuPhOybgOydhCDspIAgIOqzoOuniOyatCDrtoTrk6ReXlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbG9nZ2V0ck1pZGRlbHdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pOyBcclxuICAvLyBjb25zb2xlLmxvZyhkaXNwYXRjaCk7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFN0YXRlKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2EoKTsgXHJcblxyXG4gIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpXHJcbiAgLy8gU3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpIFxyXG5cclxuICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKHsgaXNTZXJ2ZXIgfSkgPT4ge1xyXG5cclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtsb2dnZXRyTWlkZGVsd2FyZSwgdGh1bmtNaWRkbGV3YXJlXTtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07IFxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIikuZGVmYXVsdDtcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAgICBrZXk6IFwicm9vdFwiLFxyXG4gICAgICBzdG9yYWdlLFxyXG4gICAgICB3aGl0ZWxpc3Q6IFtcImFydGljbGVcIiwgXCJib2FyZFwiLCBcInVzZXJcIl1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlciwgZW5oYW5jZXIpO1xyXG5cclxuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RhdmVsb3BtZW50J1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==