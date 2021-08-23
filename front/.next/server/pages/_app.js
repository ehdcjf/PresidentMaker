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


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\PresidentMaker\\front\\pages\\_app.jsx";








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
/* harmony export */   "UpdateBLikeAction": function() { return /* binding */ UpdateBLikeAction; },
/* harmony export */   "AddComment": function() { return /* binding */ AddComment; },
/* harmony export */   "AddComments": function() { return /* binding */ AddComments; },
/* harmony export */   "AddReplys": function() { return /* binding */ AddReplys; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: true,
  board_id: null,
  writer: null,
  subject: null,
  nickname: null,
  createdAt: null,
  update: null,
  hit: null,
  content: null,
  isLike: null,
  liked: 0,
  disliked: 0,
  del: null,
  isWriter: false,
  comment_cnt: 0,
  comment: []
};
const defaultComment = {
  board_id: null,
  comment_id: null,
  writer: null,
  writer_nick: null,
  content: null,
  root: 0,
  createdAt: null,
  image: null,
  nickname: null,
  liked: 0,
  disliked: 0,
  updated: false,
  reply_cnt: 0,
  target: 0,
  target_idx: null,
  target_nick: null,
  isWriter: true,
  isLike: null,
  replys: []
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
const ADD_COMMENT = 'ADD_COMMENT';
const ADD_COMMENTS = 'ADD_COMMENTS';
const ADD_REPLYS = 'ADD_REPLYS';
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
const AddComment = data => {
  return {
    type: ADD_COMMENT,
    data: data
  };
};
const AddComments = data => {
  return {
    type: ADD_COMMENTS,
    data: data
  };
};
const AddReplys = data => {
  return {
    type: ADD_REPLYS,
    data: data
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

    case ADD_COMMENT:
      if (action.data.root === 0) {
        const originComments = state.comment;

        const comment = _objectSpread(_objectSpread({}, defaultComment), action.data);

        const newComments = [comment, ...originComments];
        return _objectSpread(_objectSpread({}, state), {}, {
          comment: newComments
        });
      } else {
        const newReply = _objectSpread(_objectSpread({}, defaultComment), action.data);

        state.comment.forEach(v => {
          if (v.comment_id == action.data.root) {
            v.replys = [newReply, ...v.replys];
            v.reply_cnt = v.reply_cnt + 1;
          }
        });
        return _objectSpread({}, state);
      }

    case ADD_COMMENTS:
      const addedComments = [...state.comment, ...action.data];
      return _objectSpread(_objectSpread({}, state), {}, {
        comment: addedComments
      });

    case ADD_REPLYS:
      console.log(action.data[0].root);
      state.comment.forEach(v => {
        if (v.comment_id == action.data[0].root) {
          v.replys = [...v.replys, ...action.data];
        }
      });
      return _objectSpread({}, state);

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
  nickname: null,
  image: null
};
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT = 'USER_LOGOUT';
const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLoginRequest());

    try {
      data.success === true ? dispatch(UserLoginSuccess(data)) : dispatch(UserLoginError());
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
        image: action.data.image,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50Iiwic3RvcmUiLCJ1c2VTdG9yZSIsInN0YXRlIiwiX19wZXJzaXN0b3IiLCJ3cmFwcGVyIiwiaW5pdGlhbFN0YXRlIiwibG9hZGRpbmciLCJib2FyZF9pZCIsIndyaXRlciIsInN1YmplY3QiLCJuaWNrbmFtZSIsImNyZWF0ZWRBdCIsInVwZGF0ZSIsImhpdCIsImNvbnRlbnQiLCJpc0xpa2UiLCJsaWtlZCIsImRpc2xpa2VkIiwiZGVsIiwiaXNXcml0ZXIiLCJjb21tZW50X2NudCIsImNvbW1lbnQiLCJkZWZhdWx0Q29tbWVudCIsImNvbW1lbnRfaWQiLCJ3cml0ZXJfbmljayIsInJvb3QiLCJpbWFnZSIsInVwZGF0ZWQiLCJyZXBseV9jbnQiLCJ0YXJnZXQiLCJ0YXJnZXRfaWR4IiwidGFyZ2V0X25pY2siLCJyZXBseXMiLCJTSE9XX0FSVElDTEVfUkVRVUVTVCIsIlNIT1dfQVJUSUNMRV9TVUNDRVNTIiwiU0hPV19BUlRJQ0xFX0VSUk9SIiwiSU5TRVJUX0JfTElLRV9BQ1RJT04iLCJJTlNFUlRfQl9ESVNMSUtFX0FDVElPTiIsIkRFTEVURV9CX0xJS0VfQUNUSU9OIiwiREVMRVRFX0JfRElTTElLRV9BQ1RJT04iLCJVUERBVEVfQl9MSUtFX0FDVElPTiIsIlVQREFURV9CX0RJU0xJS0VfQUNUSU9OIiwiQUREX0NPTU1FTlQiLCJBRERfQ09NTUVOVFMiLCJBRERfUkVQTFlTIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiQWRkQ29tbWVudCIsIkFkZENvbW1lbnRzIiwiQWRkUmVwbHlzIiwicmVkdWNlciIsImFjdGlvbiIsIm9yaWdpbkNvbW1lbnRzIiwibmV3Q29tbWVudHMiLCJuZXdSZXBseSIsImZvckVhY2giLCJ2IiwiYWRkZWRDb21tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2giLCJrZXl3b3JkIiwicGFnZSIsInJvd3MiLCJwYWdlYmxvY2siLCJlbmRwYWdlIiwibGlzdCIsIlNIT1dfTElTVF9SRVFVRVNUIiwiU0hPV19MSVNUX1NVQ0NFU1MiLCJTSE9XX0xJU1RfRVJST1IiLCJERUxFVEVfQVJUSUNMRV9SRVFVRVNUIiwiREVMRVRFX0FSVElDTEVfU1VDQ0VTUyIsIkRFTEVURV9BUlRJQ0xFX0VSUk9SIiwiQ1JFQVRFX0FSVElDTEVfQUNUSU9OIiwiU2hvd0xpc3RBY3Rpb24iLCJTaG93TGlzdFJlcXVlc3QiLCJyZXN1bHQiLCJTaG93TGlzdFN1Y2Nlc3MiLCJTaG93TGlzdEVycm9yIiwiRGVsZXRlQXJ0aWNsZUFjdGlvbiIsIkRlbGV0ZUFydGljbGVSZXF1ZXN0IiwiRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MiLCJEZWxldGVBcnRpY2xlRXJyb3IiLCJDcmVhdGVBcnRpY2xlQWN0aW9uIiwicmVzdWx0cyIsInRvdGFsUGFnZSIsImlkIiwibmV3TGlzdCIsIm1hcCIsIm1lbnUiLCJjYXRlZ29yeSIsInVybCIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwiYm9hcmQiLCJhcnRpY2xlIiwiSXNMb2dpbiIsIlVTRVJfTE9HSU5fUkVRVUVTVCIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsIlVTRVJfTE9HSU5fRVJST1IiLCJVU0VSX0xPR09VVCIsIlVzZXJMb2dpbkFjdGlvbiIsIlVzZXJMb2dpblJlcXVlc3QiLCJVc2VyTG9naW5TdWNjZXNzIiwiVXNlckxvZ2luRXJyb3IiLCJVc2VyTG9nb3V0QWN0aW9uIiwibG9nZ2V0ck1pZGRlbHdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsIlN0b3JlIiwiY3JlYXRlU3RvcmUiLCJlbmhhbmNlciIsIm1ha2VTdG9yZSIsImlzU2VydmVyIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwicmVxdWlyZSIsInN0b3JhZ2UiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDN0IsUUFBTUMsS0FBSyxHQUFHQyxxREFBUSxDQUFFQyxLQUFELElBQVdBLEtBQVosQ0FBdEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsMkJBRlA7QUFHRSxtQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQU9FO0FBQ0UsWUFBSSxFQUFDLG9FQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFjRSw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLHdFQUFEO0FBQWEsaUJBQVMsRUFBRUYsS0FBSyxDQUFDRyxXQUE5QjtBQUEyQyxlQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtB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aWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCI7XHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZz17PGRpdj5Mb2FkaW5nPC9kaXY+fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IHRydWUsXHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHN1YmplY3Q6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIHVwZGF0ZTogbnVsbCxcclxuICBoaXQ6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICBpc0xpa2U6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgZGVsOiBudWxsLFxyXG4gIGlzV3JpdGVyOiBmYWxzZSxcclxuICBjb21tZW50X2NudDogMCxcclxuICBjb21tZW50OiBbXSxcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENvbW1lbnQgPSB7XHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgY29tbWVudF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgd3JpdGVyX25pY2s6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICByb290OiAwLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICB1cGRhdGVkOiBmYWxzZSxcclxuICByZXBseV9jbnQ6IDAsXHJcbiAgdGFyZ2V0OiAwLFxyXG4gIHRhcmdldF9pZHg6IG51bGwsXHJcbiAgdGFyZ2V0X25pY2s6IG51bGwsXHJcbiAgaXNXcml0ZXI6IHRydWUsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG4gIHJlcGx5czogW10sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19BUlRJQ0xFX1JFUVVFU1QgPSAnU0hPV19BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9TVUNDRVNTID0gJ1NIT1dfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0FSVElDTEVfRVJST1IgPSAnU0hPV19BUlRJQ0xFX0VSUk9SJ1xyXG5jb25zdCBJTlNFUlRfQl9MSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9MSUtFX0FDVElPTidcclxuY29uc3QgSU5TRVJUX0JfRElTTElLRV9BQ1RJT04gPSAnSU5TRVJUX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQl9ESVNMSUtFX0FDVElPTiA9ICdERUxFVEVfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OID0gJ1VQREFURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBBRERfQ09NTUVOVFMgPSAnQUREX0NPTU1FTlRTJztcclxuY29uc3QgQUREX1JFUExZUyA9ICdBRERfUkVQTFlTJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChTaG93QXJ0aWNsZVJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFNob3dBcnRpY2xlU3VjY2VzcyhkYXRhKSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0FydGljbGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW5zZXJ0Qkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQl9MSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0JfRElTTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQl9MSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9CX0RJU0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9CX0xJS0VfQUNUSU9OLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQl9ESVNMSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnRzID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUmVwbHlzID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9MSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkICsgMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkIC0gMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkICsgMSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQUREX0NPTU1FTlQ6XHJcbiAgICAgIGlmIChhY3Rpb24uZGF0YS5yb290ID09PSAwKSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luQ29tbWVudHMgPSBzdGF0ZS5jb21tZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnRzID0gW2NvbW1lbnQsIC4uLm9yaWdpbkNvbW1lbnRzXTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50OiBuZXdDb21tZW50cyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG5ld1JlcGx5ID0ge1xyXG4gICAgICAgICAgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5jb21tZW50LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXVxyXG4gICAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UUzpcclxuICAgICAgY29uc3QgYWRkZWRDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50LCAuLi5hY3Rpb24uZGF0YV1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OiBhZGRlZENvbW1lbnRzLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfUkVQTFlTOlxyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YVswXS5yb290KVxyXG4gICAgICBzdGF0ZS5jb21tZW50LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YVswXS5yb290KSB7XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IFsuLi52LnJlcGx5cywgLi4uYWN0aW9uLmRhdGFdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0eXBlOiAnYWxsJyxcclxuICBzZWFyY2g6IG51bGwsXHJcbiAga2V5d29yZDogbnVsbCxcclxuICBwYWdlOiAxLFxyXG4gIHJvd3M6IDIwLFxyXG4gIHBhZ2VibG9jazogW10sXHJcbiAgZW5kcGFnZTogbnVsbCxcclxuICBsaXN0OiBbXSxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0xJU1RfUkVRVUVTVCA9ICdTSE9XX0xJU1RfUkVRVUVTVCdcclxuY29uc3QgU0hPV19MSVNUX1NVQ0NFU1MgPSAnU0hPV19MSVNUX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfTElTVF9FUlJPUiA9ICdTSE9XX0xJU1RfRVJST1InXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QgPSAnREVMRVRFX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgREVMRVRFX0FSVElDTEVfU1VDQ0VTUyA9ICdERUxFVEVfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9FUlJPUiA9ICdERUxFVEVfQVJUSUNMRV9FUlJPUidcclxuY29uc3QgQ1JFQVRFX0FSVElDTEVfQUNUSU9OID0gJ0NSRUFURV9BUlRJQ0xFX0FDVElPTidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0xpc3RSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgcmVzdWx0LnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFNob3dMaXN0U3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93TGlzdEVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhO1xyXG4gICAgICByZXN1bHQuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0RXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQXJ0aWNsZUFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ1JFQVRFX0FSVElDTEVfQUNUSU9OLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfTElTVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4uYWN0aW9uLmRhdGEucmVzdWx0c10sXHJcbiAgICAgICAgcGFnZTogYWN0aW9uLmRhdGEucGFnZSxcclxuICAgICAgICBwYWdlYmxvY2s6IGFjdGlvbi5kYXRhLnBhZ2VibG9jayxcclxuICAgICAgICBlbmRwYWdlOiBhY3Rpb24uZGF0YS50b3RhbFBhZ2UsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfTElTVF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gYWN0aW9uLmRhdGEuaWQ7XHJcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4uc3RhdGUubGlzdF0ubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgaWYgKHYuaWQgPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICB2LnN1YmplY3QgPSBcIuyCreygnOuQnCDqsozsi5zquIDsnoXri4jri6QuXCJcclxuICAgICAgICAgIHYuZGVsID0gMVxyXG4gICAgICAgICAgcmV0dXJuIHZcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld0xpc3QpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxpc3Q6IFsuLi5uZXdMaXN0XSxcclxuXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBDUkVBVEVfQVJUSUNMRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdHlwZTogJ2FsbCcsXHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgbWVudTpbXHJcbiAgICB7IFxyXG4gICAgaWQ6JzEnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQxJyxcclxuICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOicyJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MicsXHJcbiAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMycsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgdXJsOicvcG9zdHMvMydcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzQnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic1JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NScsXHJcbiAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9Pntcclxuc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgZGVmYXVsdDpcclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcbmltcG9ydCBib2FyZCBmcm9tICcuL2JvYXJkJ1xyXG5pbXBvcnQgYXJ0aWNsZSBmcm9tICcuL2FydGljbGUnXHJcblxyXG5pbXBvcnQgeyBwZXJzaXN0UmV1ZGVyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIlxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlciwgYm9hcmQsIGNhdGVnb3J5LCBhcnRpY2xlXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiBmYWxzZSxcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSAnVVNFUl9MT0dJTl9TVUNDRVNTJ1xyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gJ1VTRVJfTE9HSU5fRVJST1InXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goVXNlckxvZ2luUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgaW1hZ2U6IGFjdGlvbi5kYXRhLmltYWdlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBJc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiXHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5cclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgY3JlYXRlU2FnYSBmcm9tICdyZWR1eC1zYWdhJ1xyXG4vLyBpbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYS9pbmRleCdcclxuXHJcblxyXG5cclxuLy8vZnJvbSAgIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXpsdWxrYXJpbXdlYi93aXRoLW5leHQtcmVkdXgtd3JhcHBlci1yZWR1eC1wZXJzaXN0ICDrhKXsiqTtirgg66as642V7IqkIO2NvOyLnOyKpO2KuOyXkCDrj4Tsm4DsnYQg7KSAICDqs6Drp4jsmrQg67aE65OkXl5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGxvZ2dldHJNaWRkZWx3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coYWN0aW9uKTsgXHJcbiAgLy8gY29uc29sZS5sb2coZGlzcGF0Y2gpOyBcclxuICAvLyBjb25zb2xlLmxvZyhnZXRTdGF0ZSk7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhKCk7IFxyXG5cclxuICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKVxyXG4gIC8vIFN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKSBcclxuXHJcbiAgcmV0dXJuIFN0b3JlXHJcbn1cclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICh7IGlzU2VydmVyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbbG9nZ2V0ck1pZGRlbHdhcmUsIHRodW5rTWlkZGxld2FyZV07XHJcbiAgLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdOyBcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIpLmRlZmF1bHQ7XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAga2V5OiBcInJvb3RcIixcclxuICAgICAgc3RvcmFnZSxcclxuICAgICAgd2hpdGVsaXN0OiBbXCJhcnRpY2xlXCIsIFwiYm9hcmRcIiwgXCJ1c2VyXCJdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIsIGVuaGFuY2VyKTtcclxuXHJcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkYXZlbG9wbWVudCdcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=