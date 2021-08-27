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
/* harmony export */   "CommentCntUp": function() { return /* binding */ CommentCntUp; },
/* harmony export */   "AddComment": function() { return /* binding */ AddComment; },
/* harmony export */   "GetComments": function() { return /* binding */ GetComments; },
/* harmony export */   "AddReply": function() { return /* binding */ AddReply; },
/* harmony export */   "GetReplys": function() { return /* binding */ GetReplys; },
/* harmony export */   "ClearReplys": function() { return /* binding */ ClearReplys; },
/* harmony export */   "DeleteComment": function() { return /* binding */ DeleteComment; },
/* harmony export */   "DeleteReply": function() { return /* binding */ DeleteReply; }
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
  comments: []
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
const COMMENT_CNT_UP = 'COMMENT_CNT_UP';
const ADD_COMMENT = 'ADD_COMMENT';
const GET_COMMENTS = 'GET_COMMENTS';
const Add_REPLY = 'Add_REPLY';
const GET_REPLYS = 'GET_REPLYS';
const CLEAR_REPLYS = 'CLEAR_REPLYS';
const DELETE_COMMENT = 'DELETE_COMMENT';
const DELETE_REPLY = 'DELETE_REPLY';
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
const AddComment = data => {
  return {
    type: ADD_COMMENT,
    data: data
  };
};
const GetComments = data => {
  return {
    type: GET_COMMENTS,
    data: data
  };
};
const AddReply = data => {
  return {
    type: Add_REPLY,
    data: data
  };
};
const GetReplys = data => {
  return {
    type: GET_REPLYS,
    data: data
  };
};
const ClearReplys = data => {
  return {
    type: CLEAR_REPLYS,
    data: data
  };
};
const DeleteComment = data => {
  return {
    type: DELETE_COMMENT,
    data: data
  };
};
const DeleteReply = data => {
  return {
    type: DELETE_Reply,
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

    case COMMENT_CNT_UP:
      console.log(state.comment_cnt);
      return _objectSpread(_objectSpread({}, state), {}, {
        comment_cnt: state.comment_cnt + 1
      });

    case ADD_COMMENT:
      const newComment = _objectSpread(_objectSpread({}, defaultComment), action.data);

      return _objectSpread(_objectSpread({}, state), {}, {
        comments: [newComment, ...state.comments],
        comment_cnt: state.comment_cnt + 1
      });
    ///중복되는거 아래 replys에서 제거한거처럼 제거해주기.

    case GET_COMMENTS:
      let tempComments = [...state.comments, ...action.data]; // const comments=[];
      // const commentCheck = [];
      // for(let i = 0; i<tempComments.length; i++){
      //   if(!commentCheck.includes(tempComments[i].comment_id)){
      //     commentCheck.push(tempComments[i].comment_id)
      //     comments.push(tempComments[i])
      //   }
      // }

      return _objectSpread(_objectSpread({}, state), {}, {
        comments: tempComments
      });

    case Add_REPLY:
      const newReply = _objectSpread(_objectSpread({}, defaultComment), action.data);

      let replytemp = [...state.comments];
      replytemp.forEach(v => {
        if (v.comment_id == action.data.root) {
          v.replys = [newReply, ...v.replys];
          v.reply_cnt = v.reply_cnt + 1;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: replytemp,
        comment_cnt: state.comment_cnt + 1
      });

    case GET_REPLYS:
      const root = action.data[0].root;
      let replystemp = [...state.comments];
      replystemp.forEach(v => {
        if (v.comment_id == root) {
          v.replys = [...v.replys, ...action.data];
          let check = [];
          let replys = [];

          for (let i = 0; i < v.replys.length; i++) {
            if (!check.includes(v.replys[i].comment_id)) {
              check.push(v.replys[i].comment_id);
              replys.push(v.replys[i]);
            }
          }

          v.replys = replys;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: replystemp
      });

    case CLEAR_REPLYS:
      let clearReplys = [...state.comments];
      clearReplys.forEach(v => {
        if (v.comment_id == action.data) {
          v.replys = [];
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: clearReplys
      });

    case DELETE_COMMENT:
      return _objectSpread({}, state);

    case DELETE_REPLY:
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
      data.success === true ? dispatch(DeleteArticleSuccess(data)) : dispatch(DeleteArticleError());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiY29tbWVudHMiLCJkZWZhdWx0Q29tbWVudCIsImNvbW1lbnRfaWQiLCJ3cml0ZXJfbmljayIsInJvb3QiLCJpbWFnZSIsInVwZGF0ZWQiLCJyZXBseV9jbnQiLCJ0YXJnZXQiLCJ0YXJnZXRfaWR4IiwidGFyZ2V0X25pY2siLCJyZXBseXMiLCJTSE9XX0FSVElDTEVfUkVRVUVTVCIsIlNIT1dfQVJUSUNMRV9TVUNDRVNTIiwiU0hPV19BUlRJQ0xFX0VSUk9SIiwiSU5TRVJUX0JfTElLRV9BQ1RJT04iLCJJTlNFUlRfQl9ESVNMSUtFX0FDVElPTiIsIkRFTEVURV9CX0xJS0VfQUNUSU9OIiwiREVMRVRFX0JfRElTTElLRV9BQ1RJT04iLCJVUERBVEVfQl9MSUtFX0FDVElPTiIsIlVQREFURV9CX0RJU0xJS0VfQUNUSU9OIiwiQ09NTUVOVF9DTlRfVVAiLCJBRERfQ09NTUVOVCIsIkdFVF9DT01NRU5UUyIsIkFkZF9SRVBMWSIsIkdFVF9SRVBMWVMiLCJDTEVBUl9SRVBMWVMiLCJERUxFVEVfQ09NTUVOVCIsIkRFTEVURV9SRVBMWSIsIlNob3dBcnRpY2xlQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiU2hvd0FydGljbGVSZXF1ZXN0Iiwic3VjY2VzcyIsIlNob3dBcnRpY2xlU3VjY2VzcyIsIlNob3dBcnRpY2xlRXJyb3IiLCJlIiwidHlwZSIsIkluc2VydEJMaWtlQWN0aW9uIiwiRGVsZXRlQkxpa2VBY3Rpb24iLCJVcGRhdGVCTGlrZUFjdGlvbiIsIkNvbW1lbnRDbnRVcCIsIkFkZENvbW1lbnQiLCJHZXRDb21tZW50cyIsIkFkZFJlcGx5IiwiR2V0UmVwbHlzIiwiQ2xlYXJSZXBseXMiLCJEZWxldGVDb21tZW50IiwiRGVsZXRlUmVwbHkiLCJERUxFVEVfUmVwbHkiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm5ld0NvbW1lbnQiLCJ0ZW1wQ29tbWVudHMiLCJuZXdSZXBseSIsInJlcGx5dGVtcCIsImZvckVhY2giLCJ2IiwicmVwbHlzdGVtcCIsImNoZWNrIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsImNsZWFyUmVwbHlzIiwic2VhcmNoIiwia2V5d29yZCIsInBhZ2UiLCJyb3dzIiwicGFnZWJsb2NrIiwiZW5kcGFnZSIsImxpc3QiLCJTSE9XX0xJU1RfUkVRVUVTVCIsIlNIT1dfTElTVF9TVUNDRVNTIiwiU0hPV19MSVNUX0VSUk9SIiwiREVMRVRFX0FSVElDTEVfUkVRVUVTVCIsIkRFTEVURV9BUlRJQ0xFX1NVQ0NFU1MiLCJERUxFVEVfQVJUSUNMRV9FUlJPUiIsIkNSRUFURV9BUlRJQ0xFX0FDVElPTiIsIlNob3dMaXN0QWN0aW9uIiwiU2hvd0xpc3RSZXF1ZXN0IiwicmVzdWx0IiwiU2hvd0xpc3RTdWNjZXNzIiwiU2hvd0xpc3RFcnJvciIsIkRlbGV0ZUFydGljbGVBY3Rpb24iLCJEZWxldGVBcnRpY2xlUmVxdWVzdCIsIkRlbGV0ZUFydGljbGVTdWNjZXNzIiwiRGVsZXRlQXJ0aWNsZUVycm9yIiwiQ3JlYXRlQXJ0aWNsZUFjdGlvbiIsInJlc3VsdHMiLCJ0b3RhbFBhZ2UiLCJpZCIsIm5ld0xpc3QiLCJtYXAiLCJtZW51IiwiY2F0ZWdvcnkiLCJ1cmwiLCJjb21tZW50IiwiQUREX0NPTU1FTlRTIiwiUkVTRVRfQ09NTUVOVCIsIlVQREFURV9DT01NRU5UIiwiQWRkQ29tbWVudHMiLCJBZGRSZXBseXMiLCJBRERfUkVQTFlTIiwiUmVzZXRDb21tZW50IiwiVXBkYXRlQ29tbWVudCIsIm9yaWdpbkNvbW1lbnRzIiwibmV3Q29tbWVudHMiLCJ0ZW1wbGlzdCIsImFkZGVkQ29tbWVudHMiLCJ1cGRhdGVkQ29tbWVudCIsInRlbXAiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsImJvYXJkIiwiYXJ0aWNsZSIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwiVXNlckxvZ291dEFjdGlvbiIsImxvZ2dldHJNaWRkZWx3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwiZW5oYW5jZXIiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInJlcXVpcmUiLCJzdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsImJsYWNrbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUM3QixRQUFNQyxLQUFLLEdBQUdDLHFEQUFRLENBQUVDLEtBQUQsSUFBV0EsS0FBWixDQUF0QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFN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QUFHLEVBQUUsTUFEZTtBQUVwQkYsYUFGb0I7QUFHcEJHLGVBQVMsRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLE1BQXJCLENBSFM7QUFJcEJDLGVBQVMsRUFBQyxDQUFDLFNBQUQ7QUFKVSxLQUF0QjtBQU9BLFVBQU1DLGdCQUFnQixHQUFHUCxjQUFjLENBQUNHLGFBQUQsRUFBZ0JuRyw4Q0FBaEIsQ0FBdkM7QUFFQSxVQUFNdkUsS0FBSyxHQUFHNkosa0RBQVcsQ0FBQ2lCLGdCQUFELEVBQW1CaEIsUUFBbkIsQ0FBekI7QUFFQTlKLFNBQUssQ0FBQ0csV0FBTixHQUFvQm1LLFlBQVksQ0FBQ3RLLEtBQUQsQ0FBaEM7QUFFQSxXQUFPQSxLQUFQO0FBRUQ7QUFDRixDQTlCRDs7QUFvQ0EsTUFBTUksT0FBTyxHQUFHMkssaUVBQWEsQ0FBQ2hCLFNBQUQsRUFBWTtBQUN2Q2lCLE9BQUs7QUFEa0MsQ0FBWixDQUE3QjtBQUlBLCtEQUFlNUssT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcydcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwidHJ1ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8Q29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfSBsb2FkaW5nPXs8ZGl2PkxvYWRpbmc8L2Rpdj59PlxyXG4gICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcclxuIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkZGluZzogdHJ1ZSxcclxuICBib2FyZF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgc3ViamVjdDogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgdXBkYXRlOiBudWxsLFxyXG4gIGhpdDogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIGlzTGlrZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICBkZWw6IG51bGwsXHJcbiAgaXNXcml0ZXI6IGZhbHNlLFxyXG4gIGNvbW1lbnRfY250OiAwLFxyXG4gIGNvbW1lbnRzOltdLFxyXG4gIFxyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdENvbW1lbnQgPSB7XHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgY29tbWVudF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgd3JpdGVyX25pY2s6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICByb290OiAwLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICB1cGRhdGVkOiBmYWxzZSxcclxuICByZXBseV9jbnQ6IDAsXHJcbiAgdGFyZ2V0OiAwLFxyXG4gIHRhcmdldF9pZHg6IG51bGwsXHJcbiAgdGFyZ2V0X25pY2s6IG51bGwsXHJcbiAgaXNXcml0ZXI6IHRydWUsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG4gIHJlcGx5czpbXSxcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19BUlRJQ0xFX1JFUVVFU1QgPSAnU0hPV19BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9TVUNDRVNTID0gJ1NIT1dfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0FSVElDTEVfRVJST1IgPSAnU0hPV19BUlRJQ0xFX0VSUk9SJ1xyXG5cclxuY29uc3QgSU5TRVJUX0JfTElLRV9BQ1RJT04gPSAnSU5TRVJUX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQl9MSUtFX0FDVElPTiA9ICdERUxFVEVfQl9MSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0JfRElTTElLRV9BQ1RJT04gPSAnREVMRVRFX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9CX0xJS0VfQUNUSU9OID0gJ1VQREFURV9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQl9ESVNMSUtFX0FDVElPTiA9ICdVUERBVEVfQl9ESVNMSUtFX0FDVElPTidcclxuXHJcbmNvbnN0IENPTU1FTlRfQ05UX1VQID0gJ0NPTU1FTlRfQ05UX1VQJ1xyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBHRVRfQ09NTUVOVFMgPSAnR0VUX0NPTU1FTlRTJztcclxuY29uc3QgQWRkX1JFUExZID0gJ0FkZF9SRVBMWSc7XHJcbmNvbnN0IEdFVF9SRVBMWVMgPSAnR0VUX1JFUExZUyc7XHJcbmNvbnN0IENMRUFSX1JFUExZUyA9ICdDTEVBUl9SRVBMWVMnO1xyXG5jb25zdCBERUxFVEVfQ09NTUVOVCA9ICdERUxFVEVfQ09NTUVOVCc7XHJcbmNvbnN0IERFTEVURV9SRVBMWSA9ICdERUxFVEVfUkVQTFknO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0FydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93QXJ0aWNsZVN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEluc2VydEJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0JfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQl9ESVNMSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQl9MSUtFX0FDVElPTixcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRDbnRVcCA9ICgpPT57XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTpDT01NRU5UX0NOVF9VUCxcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50ID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5ULFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXRDb21tZW50cyA9IChkYXRhKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOkdFVF9DT01NRU5UUyxcclxuICAgIGRhdGE6ZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFJlcGx5ID0gKGRhdGEpPT57XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTpBZGRfUkVQTFksXHJcbiAgICBkYXRhOmRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXRSZXBseXMgPSAoZGF0YSk9PntcclxuICByZXR1cm57XHJcbiAgICB0eXBlOkdFVF9SRVBMWVMsXHJcbiAgICBkYXRhOmRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJSZXBseXMgPSAoZGF0YSk9PntcclxuICByZXR1cm57XHJcbiAgICB0eXBlOkNMRUFSX1JFUExZUyxcclxuICAgIGRhdGE6ZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKGRhdGEpPT57XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTpERUxFVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6ZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVSZXBseSA9IChkYXRhKT0+e1xyXG4gIHJldHVybntcclxuICAgIHR5cGU6REVMRVRFX1JlcGx5LFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgKyAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVQREFURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgKyAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBjYXNlIENPTU1FTlRfQ05UX1VQOlxyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS5jb21tZW50X2NudClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRfY250OnN0YXRlLmNvbW1lbnRfY250KzEsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlQ6XHJcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudCA9IHsuLi5kZWZhdWx0Q29tbWVudCwuLi5hY3Rpb24uZGF0YX1cclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOltuZXdDb21tZW50LC4uLnN0YXRlLmNvbW1lbnRzXSxcclxuICAgICAgICAgIGNvbW1lbnRfY250OnN0YXRlLmNvbW1lbnRfY250KzEsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLy8v7KSR67O165CY64qU6rGwIOyVhOuemCByZXBseXPsl5DshJwg7KCc6rGw7ZWc6rGw7LKY65+8IOygnOqxsO2VtOyjvOq4sC5cclxuICAgICAgY2FzZSBHRVRfQ09NTUVOVFM6XHJcbiAgICAgICAgbGV0IHRlbXBDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50cywuLi5hY3Rpb24uZGF0YV07XHJcbiAgICAgICAgLy8gY29uc3QgY29tbWVudHM9W107XHJcbiAgICAgICAgLy8gY29uc3QgY29tbWVudENoZWNrID0gW107XHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaTx0ZW1wQ29tbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgaWYoIWNvbW1lbnRDaGVjay5pbmNsdWRlcyh0ZW1wQ29tbWVudHNbaV0uY29tbWVudF9pZCkpe1xyXG4gICAgICAgIC8vICAgICBjb21tZW50Q2hlY2sucHVzaCh0ZW1wQ29tbWVudHNbaV0uY29tbWVudF9pZClcclxuICAgICAgICAvLyAgICAgY29tbWVudHMucHVzaCh0ZW1wQ29tbWVudHNbaV0pXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6dGVtcENvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgQWRkX1JFUExZOlxyXG4gICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gey4uLmRlZmF1bHRDb21tZW50LC4uLmFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGxldCByZXBseXRlbXAgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIHJlcGx5dGVtcC5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgICAgdi5yZXBseXM9W25ld1JlcGx5LC4uLnYucmVwbHlzXTtcclxuICAgICAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250KzE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOnJlcGx5dGVtcCxcclxuICAgICAgICAgIGNvbW1lbnRfY250OnN0YXRlLmNvbW1lbnRfY250KzEsXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2FzZSBHRVRfUkVQTFlTOiBcclxuICAgICAgICBjb25zdCByb290ID0gYWN0aW9uLmRhdGFbMF0ucm9vdFxyXG4gICAgICAgIGxldCByZXBseXN0ZW1wID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICByZXBseXN0ZW1wLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1yb290KXtcclxuICAgICAgICAgICAgICB2LnJlcGx5cz1bLi4udi5yZXBseXMsLi4uYWN0aW9uLmRhdGFdO1xyXG4gICAgICAgICAgICAgIGxldCBjaGVjayA9IFtdO1xyXG4gICAgICAgICAgICAgIGxldCByZXBseXMgPSBbXTtcclxuICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHYucmVwbHlzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKCFjaGVjay5pbmNsdWRlcyh2LnJlcGx5c1tpXS5jb21tZW50X2lkKSl7XHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrLnB1c2godi5yZXBseXNbaV0uY29tbWVudF9pZClcclxuICAgICAgICAgICAgICAgICAgcmVwbHlzLnB1c2godi5yZXBseXNbaV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHYucmVwbHlzPXJlcGx5c1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6cmVwbHlzdGVtcCxcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjYXNlIENMRUFSX1JFUExZUzpcclxuICAgICAgICBsZXQgY2xlYXJSZXBseXMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNsZWFyUmVwbHlzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YSl7XHJcbiAgICAgICAgICAgICAgdi5yZXBseXM9W107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjbGVhclJlcGx5cyxcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjYXNlIERFTEVURV9DT01NRU5UOlxyXG4gICAgICAgIHJldHVybnsuLi5zdGF0ZX1cclxuICAgICAgXHJcbiAgICAgIGNhc2UgREVMRVRFX1JFUExZOlxyXG4gICAgICAgIHJldHVybnsuLi5zdGF0ZX1cclxuXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0eXBlOiAnYWxsJyxcclxuICBzZWFyY2g6IG51bGwsXHJcbiAga2V5d29yZDogbnVsbCxcclxuICBwYWdlOiAxLFxyXG4gIHJvd3M6IDMwLFxyXG4gIHBhZ2VibG9jazogW10sXHJcbiAgZW5kcGFnZTogbnVsbCxcclxuICBsaXN0OiBbXSxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0xJU1RfUkVRVUVTVCA9ICdTSE9XX0xJU1RfUkVRVUVTVCdcclxuY29uc3QgU0hPV19MSVNUX1NVQ0NFU1MgPSAnU0hPV19MSVNUX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfTElTVF9FUlJPUiA9ICdTSE9XX0xJU1RfRVJST1InXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QgPSAnREVMRVRFX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgREVMRVRFX0FSVElDTEVfU1VDQ0VTUyA9ICdERUxFVEVfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9FUlJPUiA9ICdERUxFVEVfQVJUSUNMRV9FUlJPUidcclxuY29uc3QgQ1JFQVRFX0FSVElDTEVfQUNUSU9OID0gJ0NSRUFURV9BUlRJQ0xFX0FDVElPTidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0xpc3RSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgcmVzdWx0LnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFNob3dMaXN0U3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93TGlzdEVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKERlbGV0ZUFydGljbGVTdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVBcnRpY2xlQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDUkVBVEVfQVJUSUNMRV9BQ1RJT04sXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0hPV19MSVNUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxpc3Q6IFsuLi5hY3Rpb24uZGF0YS5yZXN1bHRzXSxcclxuICAgICAgICBwYWdlOiBhY3Rpb24uZGF0YS5wYWdlLFxyXG4gICAgICAgIHJvd3M6IGFjdGlvbi5kYXRhLnJvd3MsXHJcbiAgICAgICAgcGFnZWJsb2NrOiBhY3Rpb24uZGF0YS5wYWdlYmxvY2ssXHJcbiAgICAgICAgZW5kcGFnZTogYWN0aW9uLmRhdGEudG90YWxQYWdlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGFjdGlvbi5kYXRhLmlkO1xyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnN0YXRlLmxpc3RdLm1hcCgodikgPT4ge1xyXG4gICAgICAgIGlmICh2LmlkID09IHRhcmdldCkge1xyXG4gICAgICAgICAgdi5zdWJqZWN0ID0gXCLsgq3soJzrkJwg6rKM7Iuc6riA7J6F64uI64ukLlwiXHJcbiAgICAgICAgICB2LmRlbCA9IDFcclxuICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhuZXdMaXN0KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4ubmV3TGlzdF0sXHJcblxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ1JFQVRFX0FSVElDTEVfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHR5cGU6ICdhbGwnLFxyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIG1lbnU6W1xyXG4gICAgeyBcclxuICAgIGlkOicxJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsXHJcbiAgICB1cmw6Jy9wb3N0cy8xJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMicsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgdXJsOicvcG9zdHMvMidcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzMnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic0JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgdXJsOicvcG9zdHMvNSdcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbnN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gc3RhdGVcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY29tbWVudDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRDb21tZW50ID0ge1xyXG4gIGJvYXJkX2lkOiBudWxsLFxyXG4gIGNvbW1lbnRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHdyaXRlcl9uaWNrOiBudWxsLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgcm9vdDogMCxcclxuICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgaW1hZ2U6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgdXBkYXRlZDogZmFsc2UsXHJcbiAgcmVwbHlfY250OiAwLFxyXG4gIHRhcmdldDogMCxcclxuICB0YXJnZXRfaWR4OiBudWxsLFxyXG4gIHRhcmdldF9uaWNrOiBudWxsLFxyXG4gIGlzV3JpdGVyOiB0cnVlLFxyXG4gIGlzTGlrZTogbnVsbCxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBBRERfQ09NTUVOVCA9ICdBRERfQ09NTUVOVCc7XHJcbmNvbnN0IEFERF9DT01NRU5UUyA9ICdBRERfQ09NTUVOVFMnO1xyXG5cclxuY29uc3QgUkVTRVRfQ09NTUVOVCA9ICdSRVNFVF9DT01NRU5UJztcclxuY29uc3QgREVMRVRFX0NPTU1FTlQgPSAnREVMRVRFX0NPTU1FTlQnO1xyXG5jb25zdCBVUERBVEVfQ09NTUVOVCA9ICdVUERBVEVfQ09NTUVOVCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnRzID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUmVwbHlzID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2V0Q29tbWVudCA9ICgpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6UkVTRVRfQ09NTUVOVCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVDb21tZW50ID0gKGRhdGEpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6VVBEQVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOmRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKGRhdGEpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOkRFTEVURV9DT01NRU5ULFxyXG4gICAgZGF0YTpkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgUkVTRVRfQ09NTUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGVcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UOlxyXG4gICAgICBpZiAoYWN0aW9uLmRhdGEucm9vdCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbkNvbW1lbnRzID0gc3RhdGUuY29tbWVudDtcclxuICAgICAgICBjb25zdCBjb21tZW50ID0ge1xyXG4gICAgICAgICAgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdDb21tZW50cyA9IFtjb21tZW50LCAuLi5vcmlnaW5Db21tZW50c107XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudDogbmV3Q29tbWVudHMsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdGVtcGxpc3QgPSBbLi4uc3RhdGUuY29tbWVudF1cclxuICAgICAgICBjb25zdCBuZXdSZXBseSA9IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcGxpc3QuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgICB2LnJlcGx5cyA9IFtuZXdSZXBseSwgLi4udi5yZXBseXNdXHJcbiAgICAgICAgICAgIHYucmVwbHlfY250ID0gdi5yZXBseV9jbnQgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudDp0ZW1wbGlzdCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UUzpcclxuICAgICAgY29uc3QgYWRkZWRDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50LCAuLi5hY3Rpb24uZGF0YV1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OiBhZGRlZENvbW1lbnRzLFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGNhc2UgVVBEQVRFX0NPTU1FTlQ6XHJcbiAgICAgIGxldCB1cGRhdGVkQ29tbWVudCA9IFsuLi5zdGF0ZS5jb21tZW50XTtcclxuICAgICAgdXBkYXRlZENvbW1lbnQuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgIHYuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgICB2LnVwZGF0ZWQ9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OlsuLi51cGRhdGVkQ29tbWVudF1cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ09NTUVOVDpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICBsZXQgdGVtcCA9IFsuLi5zdGF0ZS5jb21tZW50XTtcclxuICAgICAgdGVtcC5mb3JFYWNoKHY9PntcclxuICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhKXtcclxuICAgICAgICAgIHYuY29udGVudD0n7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC4nXHJcbiAgICAgICAgICB2LmlzV3JpdGVyPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OlsuLi50ZW1wXVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5pbXBvcnQgYm9hcmQgZnJvbSAnLi9ib2FyZCdcclxuaW1wb3J0IGFydGljbGUgZnJvbSAnLi9hcnRpY2xlJ1xyXG5pbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbW1lbnQnXHJcblxyXG5pbXBvcnQgeyBwZXJzaXN0UmV1ZGVyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIlxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlciwgYm9hcmQsIGNhdGVnb3J5LCBhcnRpY2xlLGNvbW1lbnRcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gIElzTG9naW46IGZhbHNlLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGltYWdlOiAnL2RlZmF1bHRQcm9maWwucG5nJyxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSAnVVNFUl9MT0dJTl9TVUNDRVNTJ1xyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gJ1VTRVJfTE9HSU5fRVJST1InXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goVXNlckxvZ2luUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgaW1hZ2U6IGFjdGlvbi5kYXRhLmltYWdlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGUsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIlxyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IGNyZWF0ZVNhZ2EgZnJvbSAncmVkdXgtc2FnYSdcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2EvaW5kZXgnXHJcblxyXG5cclxuXHJcbi8vL2Zyb20gICBodHRwczovL2dpdGh1Yi5jb20vZmF6bHVsa2FyaW13ZWIvd2l0aC1uZXh0LXJlZHV4LXdyYXBwZXItcmVkdXgtcGVyc2lzdCAg64Sl7Iqk7Yq4IOumrOuNleyKpCDtjbzsi5zsiqTtirjsl5Ag64+E7JuA7J2EIOykgCAg6rOg66eI7Jq0IOu2hOuTpF5eXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBsb2dnZXRyTWlkZGVsd2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGFjdGlvbik7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGRpc3BhdGNoKTsgXHJcbiAgLy8gY29uc29sZS5sb2coZ2V0U3RhdGUpO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYSgpOyBcclxuXHJcbiAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuICAvLyBTdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSkgXHJcblxyXG4gIHJldHVybiBTdG9yZVxyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoeyBpc1NlcnZlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dldHJNaWRkZWx3YXJlLCB0aHVua01pZGRsZXdhcmVdO1xyXG4gIC8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTsgXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIikuZGVmYXVsdDtcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAgICBrZXk6IFwicm9vdFwiLFxyXG4gICAgICBzdG9yYWdlLFxyXG4gICAgICB3aGl0ZWxpc3Q6IFtcImFydGljbGVcIiwgXCJib2FyZFwiLCBcInVzZXJcIl0sXHJcbiAgICAgIGJsYWNrbGlzdDpbJ2NvbW1lbnQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcik7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0ZWRSZWR1Y2VyLCBlbmhhbmNlcik7XHJcblxyXG4gICAgc3RvcmUuX19wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGF2ZWxvcG1lbnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==