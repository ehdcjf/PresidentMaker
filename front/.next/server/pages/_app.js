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


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\\uC0C8 \uD3F4\uB354\\PresidentMaker\\front\\pages\\_app.jsx";








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
/* harmony export */   "ShowArticleError": function() { return /* binding */ ShowArticleError; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: true,
  isWriter: false,
  id: null,
  subject: null,
  content: null,
  hit: null,
  like: null,
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
const ShowArticleAction = data => {
  return async dispatch => {
    dispatch(ShowArticleRequest());

    try {
      const result = data;
      result.success === true ? dispatch(ShowArticleSuccess(result)) : dispatch(ShowArticleError());
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

    const storage = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage").default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInN0b3JlIiwidXNlU3RvcmUiLCJzdGF0ZSIsIl9fcGVyc2lzdG9yIiwid3JhcHBlciIsImluaXRpYWxTdGF0ZSIsImxvYWRkaW5nIiwiaXNXcml0ZXIiLCJpZCIsInN1YmplY3QiLCJjb250ZW50IiwiaGl0IiwibGlrZSIsImRlbCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5pY2tuYW1lIiwidXNlcmlkeCIsImNvbW1lbnQiLCJTSE9XX0FSVElDTEVfUkVRVUVTVCIsIlNIT1dfQVJUSUNMRV9TVUNDRVNTIiwiU0hPV19BUlRJQ0xFX0VSUk9SIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJyZXN1bHQiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwicmVkdWNlciIsImFjdGlvbiIsInNlYXJjaCIsImtleXdvcmQiLCJwYWdlIiwicm93cyIsInBhZ2VibG9jayIsImVuZHBhZ2UiLCJsaXN0IiwiU0hPV19MSVNUX1JFUVVFU1QiLCJTSE9XX0xJU1RfU1VDQ0VTUyIsIlNIT1dfTElTVF9FUlJPUiIsIkRFTEVURV9BUlRJQ0xFX1JFUVVFU1QiLCJERUxFVEVfQVJUSUNMRV9TVUNDRVNTIiwiREVMRVRFX0FSVElDTEVfRVJST1IiLCJDUkVBVEVfQVJUSUNMRV9BQ1RJT04iLCJTaG93TGlzdEFjdGlvbiIsIlNob3dMaXN0UmVxdWVzdCIsIlNob3dMaXN0U3VjY2VzcyIsIlNob3dMaXN0RXJyb3IiLCJEZWxldGVBcnRpY2xlQWN0aW9uIiwiRGVsZXRlQXJ0aWNsZVJlcXVlc3QiLCJEZWxldGVBcnRpY2xlU3VjY2VzcyIsIkRlbGV0ZUFydGljbGVFcnJvciIsIkNyZWF0ZUFydGljbGVBY3Rpb24iLCJyZXN1bHRzIiwidG90YWxQYWdlIiwidGFyZ2V0IiwibmV3TGlzdCIsIm1hcCIsInYiLCJjb25zb2xlIiwibG9nIiwibWVudSIsImNhdGVnb3J5IiwidXJsIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJib2FyZCIsImFydGljbGUiLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiVXNlckxvZ2luUmVxdWVzdCIsImlzVXNlciIsIlVzZXJMb2dpblN1Y2Nlc3MiLCJVc2VyTG9naW5FcnJvciIsIlVzZXJMb2dvdXRBY3Rpb24iLCJsb2dnZXRyTWlkZGVsd2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwiU3RvcmUiLCJjcmVhdGVTdG9yZSIsImVuaGFuY2VyIiwibWFrZVN0b3JlIiwiaXNTZXJ2ZXIiLCJtaWRkbGV3YXJlcyIsInRodW5rTWlkZGxld2FyZSIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJyZXF1aXJlIiwic3RvcmFnZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUM3QixRQUFNQyxLQUFLLEdBQUdDLHFEQUFRLENBQUVDLEtBQUQsSUFBV0EsS0FBWixDQUF0QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlB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LENBQXpCO0FBRUE1RixTQUFLLENBQUNHLFdBQU4sR0FBb0JpRyxZQUFZLENBQUNwRyxLQUFELENBQWhDO0FBRUEsV0FBT0EsS0FBUDtBQUVEO0FBQ0YsQ0E3QkQ7O0FBbUNBLE1BQU1JLE9BQU8sR0FBR3dHLGlFQUFhLENBQUNmLFNBQUQsRUFBWTtBQUN2Q2dCLE9BQUs7QUFEa0MsQ0FBWixDQUE3QjtBQUlBLCtEQUFlekcsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBLGdEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJ0cnVlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1ImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9IGxvYWRpbmc9ezxkaXY+TG9hZGluZzwvZGl2Pn0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiB0cnVlLFxyXG4gIGlzV3JpdGVyOiBmYWxzZSxcclxuICBpZDogbnVsbCxcclxuICBzdWJqZWN0OiBudWxsLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgaGl0OiBudWxsLFxyXG4gIGxpa2U6IG51bGwsXHJcbiAgZGVsOiBudWxsLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICB1cGRhdGVkQXQ6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgdXNlcmlkeDogbnVsbCxcclxuICBjb21tZW50OiBbXSxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0FSVElDTEVfUkVRVUVTVCA9ICdTSE9XX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgU0hPV19BUlRJQ0xFX1NVQ0NFU1MgPSAnU0hPV19BUlRJQ0xFX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9FUlJPUiA9ICdTSE9XX0FSVElDTEVfRVJST1InXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICAgIHJlc3VsdC5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93QXJ0aWNsZVN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0FydGljbGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHR5cGU6ICdhbGwnLFxyXG4gIHNlYXJjaDogbnVsbCxcclxuICBrZXl3b3JkOiBudWxsLFxyXG4gIHBhZ2U6IDEsXHJcbiAgcm93czogMjAsXHJcbiAgcGFnZWJsb2NrOiBbXSxcclxuICBlbmRwYWdlOiBudWxsLFxyXG4gIGxpc3Q6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFNIT1dfTElTVF9SRVFVRVNUID0gJ1NIT1dfTElTVF9SRVFVRVNUJ1xyXG5jb25zdCBTSE9XX0xJU1RfU1VDQ0VTUyA9ICdTSE9XX0xJU1RfU1VDQ0VTUydcclxuY29uc3QgU0hPV19MSVNUX0VSUk9SID0gJ1NIT1dfTElTVF9FUlJPUidcclxuY29uc3QgREVMRVRFX0FSVElDTEVfUkVRVUVTVCA9ICdERUxFVEVfQVJUSUNMRV9SRVFVRVNUJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9TVUNDRVNTID0gJ0RFTEVURV9BUlRJQ0xFX1NVQ0NFU1MnXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX0VSUk9SID0gJ0RFTEVURV9BUlRJQ0xFX0VSUk9SJ1xyXG5jb25zdCBDUkVBVEVfQVJUSUNMRV9BQ1RJT04gPSAnQ1JFQVRFX0FSVElDTEVfQUNUSU9OJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChTaG93TGlzdFJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhO1xyXG4gICAgICByZXN1bHQuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goU2hvd0xpc3RTdWNjZXNzKHJlc3VsdCkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChTaG93TGlzdEVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFNob3dMaXN0RXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICAgIHJlc3VsdC5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChEZWxldGVBcnRpY2xlU3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVBcnRpY2xlQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDUkVBVEVfQVJUSUNMRV9BQ1RJT04sXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0hPV19MSVNUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxpc3Q6IFsuLi5hY3Rpb24uZGF0YS5yZXN1bHRzXSxcclxuICAgICAgICBwYWdlOiBhY3Rpb24uZGF0YS5wYWdlLFxyXG4gICAgICAgIHBhZ2VibG9jazogYWN0aW9uLmRhdGEucGFnZWJsb2NrLFxyXG4gICAgICAgIGVuZHBhZ2U6IGFjdGlvbi5kYXRhLnRvdGFsUGFnZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19MSVNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBhY3Rpb24uZGF0YS5pZDtcclxuICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5zdGF0ZS5saXN0XS5tYXAoKHYpID0+IHtcclxuICAgICAgICBpZiAodi5pZCA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgIHYuc3ViamVjdCA9IFwi7IKt7KCc65CcIOqyjOyLnOq4gOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgdi5kZWwgPSAxXHJcbiAgICAgICAgICByZXR1cm4gdlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cobmV3TGlzdCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLm5ld0xpc3RdLFxyXG5cclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIENSRUFURV9BUlRJQ0xFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0eXBlOiAnYWxsJyxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBtZW51OltcclxuICAgIHsgXHJcbiAgICBpZDonMScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gICAgdXJsOicvcG9zdHMvMSdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzInLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgIHVybDonL3Bvc3RzLzInXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOiczJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNCcsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgdXJsOicvcG9zdHMvNCdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzUnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgIHVybDonL3Bvc3RzLzUnXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG5zd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuICBkZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuaW1wb3J0IGJvYXJkIGZyb20gJy4vYm9hcmQnXHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSdcclxuXHJcbmltcG9ydCB7IHBlcnNpc3RSZXVkZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLCBib2FyZCwgY2F0ZWdvcnksIGFydGljbGVcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gIElzTG9naW46IGZhbHNlLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSAnVVNFUl9MT0dJTl9FUlJPUidcclxuY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChVc2VyTG9naW5SZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICByZXN1bHQuaXNVc2VyID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKHJlc3VsdCkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCJcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcblxyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiXHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBjcmVhdGVTYWdhIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhL2luZGV4J1xyXG5cclxuXHJcblxyXG4vLy9mcm9tICAgaHR0cHM6Ly9naXRodWIuY29tL2Zhemx1bGthcmltd2ViL3dpdGgtbmV4dC1yZWR1eC13cmFwcGVyLXJlZHV4LXBlcnNpc3QgIOuEpeyKpO2KuCDrpqzrjZXsiqQg7Y287Iuc7Iqk7Yq47JeQIOuPhOybgOydhCDspIAgIOqzoOuniOyatCDrtoTrk6ReXlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbG9nZ2V0ck1pZGRlbHdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pOyBcclxuICAvLyBjb25zb2xlLmxvZyhkaXNwYXRjaCk7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFN0YXRlKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2EoKTsgXHJcblxyXG4gIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpXHJcbiAgLy8gU3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpIFxyXG5cclxuICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKHsgaXNTZXJ2ZXIgfSkgPT4ge1xyXG5cclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtsb2dnZXRyTWlkZGVsd2FyZSwgdGh1bmtNaWRkbGV3YXJlXTtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07IFxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpLmRlZmF1bHQ7XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAga2V5OiBcInJvb3RcIixcclxuICAgICAgc3RvcmFnZSxcclxuICAgICAgd2hpdGVsaXN0OiBbXCJhcnRpY2xlXCIsIFwiYm9hcmRcIiwgXCJ1c2VyXCJdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIsIGVuaGFuY2VyKTtcclxuXHJcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkYXZlbG9wbWVudCdcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9