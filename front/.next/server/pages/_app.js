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
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\_app.jsx";









const App = ({
  Component
}) => {
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useStore)(state => state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_6__.CookiesProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__.PersistGate, {
        persistor: store.__persistor,
        loading: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: "Loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 61
        }, undefined),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__.default.withRedux(App));

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
/* harmony export */   "CommentCntUp": function() { return /* binding */ CommentCntUp; }
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
  comment_cnt: 0
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
const COMMENT_CNT_UP = 'COMMENT_CNT_UP';
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
const CommentCntUp = () => {
  return {
    type: COMMENT_CNT_UP
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

    case COMMENT_CNT_UP:
      console.log(state.comment_cnt);
      return _objectSpread(_objectSpread({}, state), {}, {
        comment_cnt: state.comment_cnt + 1
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
  rows: 30,
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
        rows: action.data.rows,
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

/***/ "./reducers/comment.js":
/*!*****************************!*\
  !*** ./reducers/comment.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComment": function() { return /* binding */ AddComment; },
/* harmony export */   "AddComments": function() { return /* binding */ AddComments; },
/* harmony export */   "AddReplys": function() { return /* binding */ AddReplys; },
/* harmony export */   "ResetComment": function() { return /* binding */ ResetComment; },
/* harmony export */   "UpdateComment": function() { return /* binding */ UpdateComment; },
/* harmony export */   "DeleteComment": function() { return /* binding */ DeleteComment; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
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
  isLike: null
};
const ADD_COMMENT = 'ADD_COMMENT';
const ADD_COMMENTS = 'ADD_COMMENTS';
const RESET_COMMENT = 'RESET_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
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
const ResetComment = () => {
  return {
    type: RESET_COMMENT
  };
};
const UpdateComment = data => {
  return {
    type: UPDATE_COMMENT,
    data: data
  };
};
const DeleteComment = data => {
  return {
    type: DELETE_COMMENT,
    data: data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_COMMENT:
      return _objectSpread({}, initialState);

    case ADD_COMMENT:
      if (action.data.root === 0) {
        const originComments = state.comment;

        const comment = _objectSpread(_objectSpread({}, defaultComment), action.data);

        const newComments = [comment, ...originComments];
        return _objectSpread(_objectSpread({}, state), {}, {
          comment: newComments
        });
      } else {
        let templist = [...state.comment];

        const newReply = _objectSpread(_objectSpread({}, defaultComment), action.data);

        templist.forEach(v => {
          if (v.comment_id == action.data.root) {
            v.replys = [newReply, ...v.replys];
            v.reply_cnt = v.reply_cnt + 1;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comment: templist
        });
      }

    case ADD_COMMENTS:
      const addedComments = [...state.comment, ...action.data];
      return _objectSpread(_objectSpread({}, state), {}, {
        comment: addedComments
      });

    case UPDATE_COMMENT:
      let updatedComment = [...state.comment];
      updatedComment.forEach(v => {
        if (v.comment_id == action.data.comment_id) {
          v.content = action.data.content;
          v.updated = true;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comment: [...updatedComment]
      });

    case DELETE_COMMENT:
      console.log(action.data);
      let temp = [...state.comment];
      temp.forEach(v => {
        if (v.comment_id == action.data) {
          v.content = '삭제된 댓글입니다.';
          v.isWriter = false;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comment: [...temp]
      });

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
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment */ "./reducers/comment.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__);
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
  article: _article__WEBPACK_IMPORTED_MODULE_5__.default,
  comment: _comment__WEBPACK_IMPORTED_MODULE_6__.default
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
  image: '/defaultProfil.png'
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
      return _objectSpread(_objectSpread({}, state), initialState);

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
      whitelist: ["article", "board", "user"],
      blacklist: ['comment']
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

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiU0hPV19BUlRJQ0xFX1JFUVVFU1QiLCJTSE9XX0FSVElDTEVfU1VDQ0VTUyIsIlNIT1dfQVJUSUNMRV9FUlJPUiIsIklOU0VSVF9CX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0JfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQl9MSUtFX0FDVElPTiIsIkRFTEVURV9CX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0JfTElLRV9BQ1RJT04iLCJVUERBVEVfQl9ESVNMSUtFX0FDVElPTiIsIkNPTU1FTlRfQ05UX1VQIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiQ29tbWVudENudFVwIiwicmVkdWNlciIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2giLCJrZXl3b3JkIiwicGFnZSIsInJvd3MiLCJwYWdlYmxvY2siLCJlbmRwYWdlIiwibGlzdCIsIlNIT1dfTElTVF9SRVFVRVNUIiwiU0hPV19MSVNUX1NVQ0NFU1MiLCJTSE9XX0xJU1RfRVJST1IiLCJERUxFVEVfQVJUSUNMRV9SRVFVRVNUIiwiREVMRVRFX0FSVElDTEVfU1VDQ0VTUyIsIkRFTEVURV9BUlRJQ0xFX0VSUk9SIiwiQ1JFQVRFX0FSVElDTEVfQUNUSU9OIiwiU2hvd0xpc3RBY3Rpb24iLCJTaG93TGlzdFJlcXVlc3QiLCJyZXN1bHQiLCJTaG93TGlzdFN1Y2Nlc3MiLCJTaG93TGlzdEVycm9yIiwiRGVsZXRlQXJ0aWNsZUFjdGlvbiIsIkRlbGV0ZUFydGljbGVSZXF1ZXN0IiwiRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MiLCJEZWxldGVBcnRpY2xlRXJyb3IiLCJDcmVhdGVBcnRpY2xlQWN0aW9uIiwicmVzdWx0cyIsInRvdGFsUGFnZSIsInRhcmdldCIsImlkIiwibmV3TGlzdCIsIm1hcCIsInYiLCJtZW51IiwiY2F0ZWdvcnkiLCJ1cmwiLCJjb21tZW50IiwiZGVmYXVsdENvbW1lbnQiLCJjb21tZW50X2lkIiwid3JpdGVyX25pY2siLCJyb290IiwiaW1hZ2UiLCJ1cGRhdGVkIiwicmVwbHlfY250IiwidGFyZ2V0X2lkeCIsInRhcmdldF9uaWNrIiwiQUREX0NPTU1FTlQiLCJBRERfQ09NTUVOVFMiLCJSRVNFVF9DT01NRU5UIiwiREVMRVRFX0NPTU1FTlQiLCJVUERBVEVfQ09NTUVOVCIsIkFkZENvbW1lbnQiLCJBZGRDb21tZW50cyIsIkFkZFJlcGx5cyIsIkFERF9SRVBMWVMiLCJSZXNldENvbW1lbnQiLCJVcGRhdGVDb21tZW50IiwiRGVsZXRlQ29tbWVudCIsIm9yaWdpbkNvbW1lbnRzIiwibmV3Q29tbWVudHMiLCJ0ZW1wbGlzdCIsIm5ld1JlcGx5IiwiZm9yRWFjaCIsInJlcGx5cyIsImFkZGVkQ29tbWVudHMiLCJ1cGRhdGVkQ29tbWVudCIsInRlbXAiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsImJvYXJkIiwiYXJ0aWNsZSIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwiVXNlckxvZ291dEFjdGlvbiIsImxvZ2dldHJNaWRkZWx3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwiZW5oYW5jZXIiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInJlcXVpcmUiLCJzdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsImJsYWNrbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUM3QixRQUFNQyxLQUFLLEdBQUdDLHFEQUFRLENBQUVDLEtBQUQsSUFBV0EsS0FBWixDQUF0QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQywyQkFGUDtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBT0U7QUFDRSxZQUFJLEVBQUMsb0VBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWNFLDhE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Z0IsR0FBR1AsY0FBYyxDQUFDRyxhQUFELEVBQWdCeEcsOENBQWhCLENBQXZDO0FBRUEsVUFBTTVDLEtBQUssR0FBR3VJLGtEQUFXLENBQUNpQixnQkFBRCxFQUFtQmhCLFFBQW5CLENBQXpCO0FBRUF4SSxTQUFLLENBQUNHLFdBQU4sR0FBb0I2SSxZQUFZLENBQUNoSixLQUFELENBQWhDO0FBRUEsV0FBT0EsS0FBUDtBQUVEO0FBQ0YsQ0E5QkQ7O0FBb0NBLE1BQU1JLE9BQU8sR0FBR3FKLGlFQUFhLENBQUNoQixTQUFELEVBQVk7QUFDdkNpQixPQUFLO0FBRGtDLENBQVosQ0FBN0I7QUFJQSwrREFBZXRKLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZz17PGRpdj5Mb2FkaW5nPC9kaXY+fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IHRydWUsXHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHN1YmplY3Q6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIHVwZGF0ZTogbnVsbCxcclxuICBoaXQ6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICBpc0xpa2U6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgZGVsOiBudWxsLFxyXG4gIGlzV3JpdGVyOiBmYWxzZSxcclxuICBjb21tZW50X2NudDogMCxcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0FSVElDTEVfUkVRVUVTVCA9ICdTSE9XX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgU0hPV19BUlRJQ0xFX1NVQ0NFU1MgPSAnU0hPV19BUlRJQ0xFX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9FUlJPUiA9ICdTSE9XX0FSVElDTEVfRVJST1InXHJcbmNvbnN0IElOU0VSVF9CX0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0JfTElLRV9BQ1RJT04gPSAnREVMRVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0RJU0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQl9MSUtFX0FDVElPTiA9ICdVUERBVEVfQl9MSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfRElTTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IENPTU1FTlRfQ05UX1VQID0gJ0NPTU1FTlRfQ05UX1VQJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goU2hvd0FydGljbGVTdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0FydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbnNlcnRCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9CX0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfTElLRV9BQ1RJT04sXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50Q250VXAgPSAoKT0+e1xyXG4gIHJldHVybntcclxuICAgIHR5cGU6Q09NTUVOVF9DTlRfVVAsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9MSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkICsgMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkIC0gMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkICsgMSxcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGNhc2UgQ09NTUVOVF9DTlRfVVA6XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmNvbW1lbnRfY250KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb21tZW50X2NudDpzdGF0ZS5jb21tZW50X2NudCsxLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0eXBlOiAnYWxsJyxcclxuICBzZWFyY2g6IG51bGwsXHJcbiAga2V5d29yZDogbnVsbCxcclxuICBwYWdlOiAxLFxyXG4gIHJvd3M6IDMwLFxyXG4gIHBhZ2VibG9jazogW10sXHJcbiAgZW5kcGFnZTogbnVsbCxcclxuICBsaXN0OiBbXSxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0xJU1RfUkVRVUVTVCA9ICdTSE9XX0xJU1RfUkVRVUVTVCdcclxuY29uc3QgU0hPV19MSVNUX1NVQ0NFU1MgPSAnU0hPV19MSVNUX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfTElTVF9FUlJPUiA9ICdTSE9XX0xJU1RfRVJST1InXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QgPSAnREVMRVRFX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgREVMRVRFX0FSVElDTEVfU1VDQ0VTUyA9ICdERUxFVEVfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9FUlJPUiA9ICdERUxFVEVfQVJUSUNMRV9FUlJPUidcclxuY29uc3QgQ1JFQVRFX0FSVElDTEVfQUNUSU9OID0gJ0NSRUFURV9BUlRJQ0xFX0FDVElPTidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0xpc3RSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgcmVzdWx0LnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFNob3dMaXN0U3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93TGlzdEVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhO1xyXG4gICAgICByZXN1bHQuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0RXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQXJ0aWNsZUFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ1JFQVRFX0FSVElDTEVfQUNUSU9OLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfTElTVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4uYWN0aW9uLmRhdGEucmVzdWx0c10sXHJcbiAgICAgICAgcGFnZTogYWN0aW9uLmRhdGEucGFnZSxcclxuICAgICAgICByb3dzOiBhY3Rpb24uZGF0YS5yb3dzLFxyXG4gICAgICAgIHBhZ2VibG9jazogYWN0aW9uLmRhdGEucGFnZWJsb2NrLFxyXG4gICAgICAgIGVuZHBhZ2U6IGFjdGlvbi5kYXRhLnRvdGFsUGFnZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19MSVNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBhY3Rpb24uZGF0YS5pZDtcclxuICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5zdGF0ZS5saXN0XS5tYXAoKHYpID0+IHtcclxuICAgICAgICBpZiAodi5pZCA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgIHYuc3ViamVjdCA9IFwi7IKt7KCc65CcIOqyjOyLnOq4gOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgdi5kZWwgPSAxXHJcbiAgICAgICAgICByZXR1cm4gdlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cobmV3TGlzdCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLm5ld0xpc3RdLFxyXG5cclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIENSRUFURV9BUlRJQ0xFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0eXBlOiAnYWxsJyxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBtZW51OltcclxuICAgIHsgXHJcbiAgICBpZDonMScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gICAgdXJsOicvcG9zdHMvMSdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzInLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgIHVybDonL3Bvc3RzLzInXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOiczJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNCcsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgdXJsOicvcG9zdHMvNCdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzUnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgIHVybDonL3Bvc3RzLzUnXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG5zd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuICBkZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNvbW1lbnQ6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0Q29tbWVudCA9IHtcclxuICBib2FyZF9pZDogbnVsbCxcclxuICBjb21tZW50X2lkOiBudWxsLFxyXG4gIHdyaXRlcjogbnVsbCxcclxuICB3cml0ZXJfbmljazogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIHJvb3Q6IDAsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIGltYWdlOiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlcGx5X2NudDogMCxcclxuICB0YXJnZXQ6IDAsXHJcbiAgdGFyZ2V0X2lkeDogbnVsbCxcclxuICB0YXJnZXRfbmljazogbnVsbCxcclxuICBpc1dyaXRlcjogdHJ1ZSxcclxuICBpc0xpa2U6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBBRERfQ09NTUVOVFMgPSAnQUREX0NPTU1FTlRTJztcclxuXHJcbmNvbnN0IFJFU0VUX0NPTU1FTlQgPSAnUkVTRVRfQ09NTUVOVCc7XHJcbmNvbnN0IERFTEVURV9DT01NRU5UID0gJ0RFTEVURV9DT01NRU5UJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFJlcGx5cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUkVQTFlTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZXNldENvbW1lbnQgPSAoKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlJFU0VUX0NPTU1FTlQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ29tbWVudCA9IChkYXRhKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlVQREFURV9DT01NRU5ULFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChkYXRhKSA9PntcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpERUxFVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6ZGF0YVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFJFU0VUX0NPTU1FTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVDpcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLnJvb3QgPT09IDApIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5Db21tZW50cyA9IHN0YXRlLmNvbW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudHMgPSBbY29tbWVudCwgLi4ub3JpZ2luQ29tbWVudHNdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IG5ld0NvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRlbXBsaXN0ID0gWy4uLnN0YXRlLmNvbW1lbnRdXHJcbiAgICAgICAgY29uc3QgbmV3UmVwbHkgPSB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBsaXN0LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXVxyXG4gICAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6dGVtcGxpc3QsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVFM6XHJcbiAgICAgIGNvbnN0IGFkZGVkQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudCwgLi4uYWN0aW9uLmRhdGFdXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDogYWRkZWRDb21tZW50cyxcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjYXNlIFVQREFURV9DT01NRU5UOlxyXG4gICAgICBsZXQgdXBkYXRlZENvbW1lbnQgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHVwZGF0ZWRDb21tZW50LmZvckVhY2godj0+e1xyXG4gICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgdi51cGRhdGVkPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udXBkYXRlZENvbW1lbnRdXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NPTU1FTlQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgbGV0IHRlbXAgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHRlbXAuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YSl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQ9J+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJ1xyXG4gICAgICAgICAgdi5pc1dyaXRlcj1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udGVtcF1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuaW1wb3J0IGJvYXJkIGZyb20gJy4vYm9hcmQnXHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSdcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50J1xyXG5cclxuaW1wb3J0IHsgcGVyc2lzdFJldWRlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsIGJvYXJkLCBjYXRlZ29yeSwgYXJ0aWNsZSxjb21tZW50XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiBmYWxzZSxcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBpbWFnZTogJy9kZWZhdWx0UHJvZmlsLnBuZycsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5SZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1JFUVVFU1QsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fRVJST1IsXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IHRydWUsXHJcbiAgICAgICAgbmlja25hbWU6IGFjdGlvbi5kYXRhLm5pY2tuYW1lLFxyXG4gICAgICAgIGltYWdlOiBhY3Rpb24uZGF0YS5pbWFnZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCJcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcblxyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiXHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBjcmVhdGVTYWdhIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhL2luZGV4J1xyXG5cclxuXHJcblxyXG4vLy9mcm9tICAgaHR0cHM6Ly9naXRodWIuY29tL2Zhemx1bGthcmltd2ViL3dpdGgtbmV4dC1yZWR1eC13cmFwcGVyLXJlZHV4LXBlcnNpc3QgIOuEpeyKpO2KuCDrpqzrjZXsiqQg7Y287Iuc7Iqk7Yq47JeQIOuPhOybgOydhCDspIAgIOqzoOuniOyatCDrtoTrk6ReXlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbG9nZ2V0ck1pZGRlbHdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pOyBcclxuICAvLyBjb25zb2xlLmxvZyhkaXNwYXRjaCk7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFN0YXRlKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2EoKTsgXHJcblxyXG4gIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpXHJcbiAgLy8gU3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpIFxyXG5cclxuICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKHsgaXNTZXJ2ZXIgfSkgPT4ge1xyXG5cclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtsb2dnZXRyTWlkZGVsd2FyZSwgdGh1bmtNaWRkbGV3YXJlXTtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07IFxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpLmRlZmF1bHQ7XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAga2V5OiBcInJvb3RcIixcclxuICAgICAgc3RvcmFnZSxcclxuICAgICAgd2hpdGVsaXN0OiBbXCJhcnRpY2xlXCIsIFwiYm9hcmRcIiwgXCJ1c2VyXCJdLFxyXG4gICAgICBibGFja2xpc3Q6Wydjb21tZW50J11cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlciwgZW5oYW5jZXIpO1xyXG5cclxuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RhdmVsb3BtZW50J1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=