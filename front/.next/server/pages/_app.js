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


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\PresidentMaker\\front\\pages\\_app.jsx";









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
/* harmony export */   "UpdateComment": function() { return /* binding */ UpdateComment; },
/* harmony export */   "UpdateReply": function() { return /* binding */ UpdateReply; },
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
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_REPLY = 'UPDATE_REPLY';
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
const UpdateComment = data => {
  return {
    type: UPDATE_COMMENT,
    data: data
  };
};
const UpdateReply = data => {
  return {
    type: UPDATE_REPLY,
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
    type: DELETE_REPLY,
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

    case UPDATE_COMMENT:
      let updateComments = [...state.comments];
      updateComments.forEach(c => {
        if (c.comment_id == action.data.comment_id) {
          c.updated = true;
          c.content = action.data.content;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: updateComments
      });

    case UPDATE_REPLY:
      let updateReply = [...state.comments];
      updateReply.forEach(c => {
        if (c.comment_id == action.data.root) {
          c.replys.forEach(r => {
            if (r.comment_id == action.data.comment_id) {
              r.updated = true;
              r.content = action.data.content;
            }
          });
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: updateReply
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
      let dltComments = [...state.comments];
      dltComments.forEach(c => {
        if (c.comment_id == action.data) {
          c.del = 1;
          c.content = '삭제된 댓글입니다.';
          c.isWriter = false;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: dltComments
      });

    case DELETE_REPLY:
      let dltReply = [...state.comments];
      dltReply.forEach(c => {
        if (c.comment_id == action.data.root) {
          c.replys.forEach(r => {
            if (r.comment_id == action.data.comment_id) {
              r.del = 1;
              r.content = '삭제된 댓글입니다.';
              r.isWriter = false;
            }
          });
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: dltReply
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiY29tbWVudHMiLCJkZWZhdWx0Q29tbWVudCIsImNvbW1lbnRfaWQiLCJ3cml0ZXJfbmljayIsInJvb3QiLCJpbWFnZSIsInVwZGF0ZWQiLCJyZXBseV9jbnQiLCJ0YXJnZXQiLCJ0YXJnZXRfaWR4IiwidGFyZ2V0X25pY2siLCJyZXBseXMiLCJTSE9XX0FSVElDTEVfUkVRVUVTVCIsIlNIT1dfQVJUSUNMRV9TVUNDRVNTIiwiU0hPV19BUlRJQ0xFX0VSUk9SIiwiSU5TRVJUX0JfTElLRV9BQ1RJT04iLCJJTlNFUlRfQl9ESVNMSUtFX0FDVElPTiIsIkRFTEVURV9CX0xJS0VfQUNUSU9OIiwiREVMRVRFX0JfRElTTElLRV9BQ1RJT04iLCJVUERBVEVfQl9MSUtFX0FDVElPTiIsIlVQREFURV9CX0RJU0xJS0VfQUNUSU9OIiwiQ09NTUVOVF9DTlRfVVAiLCJBRERfQ09NTUVOVCIsIkdFVF9DT01NRU5UUyIsIkFkZF9SRVBMWSIsIkdFVF9SRVBMWVMiLCJDTEVBUl9SRVBMWVMiLCJERUxFVEVfQ09NTUVOVCIsIkRFTEVURV9SRVBMWSIsIlVQREFURV9DT01NRU5UIiwiVVBEQVRFX1JFUExZIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiQ29tbWVudENudFVwIiwiQWRkQ29tbWVudCIsIkdldENvbW1lbnRzIiwiQWRkUmVwbHkiLCJHZXRSZXBseXMiLCJDbGVhclJlcGx5cyIsIlVwZGF0ZUNvbW1lbnQiLCJVcGRhdGVSZXBseSIsIkRlbGV0ZUNvbW1lbnQiLCJEZWxldGVSZXBseSIsInJlZHVjZXIiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibmV3Q29tbWVudCIsInRlbXBDb21tZW50cyIsIm5ld1JlcGx5IiwicmVwbHl0ZW1wIiwiZm9yRWFjaCIsInYiLCJyZXBseXN0ZW1wIiwiY2hlY2siLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwidXBkYXRlQ29tbWVudHMiLCJjIiwidXBkYXRlUmVwbHkiLCJyIiwiY2xlYXJSZXBseXMiLCJkbHRDb21tZW50cyIsImRsdFJlcGx5Iiwic2VhcmNoIiwia2V5d29yZCIsInBhZ2UiLCJyb3dzIiwicGFnZWJsb2NrIiwiZW5kcGFnZSIsImxpc3QiLCJTSE9XX0xJU1RfUkVRVUVTVCIsIlNIT1dfTElTVF9TVUNDRVNTIiwiU0hPV19MSVNUX0VSUk9SIiwiREVMRVRFX0FSVElDTEVfUkVRVUVTVCIsIkRFTEVURV9BUlRJQ0xFX1NVQ0NFU1MiLCJERUxFVEVfQVJUSUNMRV9FUlJPUiIsIkNSRUFURV9BUlRJQ0xFX0FDVElPTiIsIlNob3dMaXN0QWN0aW9uIiwiU2hvd0xpc3RSZXF1ZXN0IiwicmVzdWx0IiwiU2hvd0xpc3RTdWNjZXNzIiwiU2hvd0xpc3RFcnJvciIsIkRlbGV0ZUFydGljbGVBY3Rpb24iLCJEZWxldGVBcnRpY2xlUmVxdWVzdCIsIkRlbGV0ZUFydGljbGVTdWNjZXNzIiwiRGVsZXRlQXJ0aWNsZUVycm9yIiwiQ3JlYXRlQXJ0aWNsZUFjdGlvbiIsInJlc3VsdHMiLCJ0b3RhbFBhZ2UiLCJpZCIsIm5ld0xpc3QiLCJtYXAiLCJtZW51IiwiY2F0ZWdvcnkiLCJ1cmwiLCJjb21tZW50IiwiQUREX0NPTU1FTlRTIiwiUkVTRVRfQ09NTUVOVCIsIkFkZENvbW1lbnRzIiwiQWRkUmVwbHlzIiwiQUREX1JFUExZUyIsIlJlc2V0Q29tbWVudCIsIm9yaWdpbkNvbW1lbnRzIiwibmV3Q29tbWVudHMiLCJ0ZW1wbGlzdCIsImFkZGVkQ29tbWVudHMiLCJ1cGRhdGVkQ29tbWVudCIsInRlbXAiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsImJvYXJkIiwiYXJ0aWNsZSIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwiVXNlckxvZ291dEFjdGlvbiIsImxvZ2dldHJNaWRkZWx3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwiZW5oYW5jZXIiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInJlcXVpcmUiLCJzdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsImJsYWNrbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUM3QixRQUFNQyxLQUFLLEdBQUdDLHFEQUFR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LEdBRkQsTUFFTztBQUNMLFVBQU07QUFBRVEsa0JBQUY7QUFBZ0JDO0FBQWhCLFFBQW1DQyxtQkFBTyxDQUFDLG9DQUFELENBQWhEOztBQUNBLFVBQU1DLE9BQU8sR0FBR0QseUZBQWhCOztBQUVBLFVBQU1FLGFBQWEsR0FBRztBQUNwQkMsU0FBRyxFQUFFLE1BRGU7QUFFcEJGLGFBRm9CO0FBR3BCRyxlQUFTLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixNQUFyQixDQUhTO0FBSXBCQyxlQUFTLEVBQUMsQ0FBQyxTQUFEO0FBSlUsS0FBdEI7QUFPQSxVQUFNQyxnQkFBZ0IsR0FBR1AsY0FBYyxDQUFDRyxhQUFELEVBQWdCdkcsOENBQWhCLENBQXZDO0FBRUEsVUFBTTFFLEtBQUssR0FBR29LLGtEQUFXLENBQUNpQixnQkFBRCxFQUFtQmhCLFFBQW5CLENBQXpCO0FBRUFySyxTQUFLLENBQUNHLFdBQU4sR0FBb0IwSyxZQUFZLENBQUM3SyxLQUFELENBQWhDO0FBRUEsV0FBT0EsS0FBUDtBQUVEO0FBQ0YsQ0E5QkQ7O0FBb0NBLE1BQU1JLE9BQU8sR0FBR2tMLGlFQUFhLENBQUNoQixTQUFELEVBQVk7QUFDdkNpQixPQUFLO0FBRGtDLENBQVosQ0FBN0I7QUFJQSwrREFBZW5MLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZz17PGRpdj5Mb2FkaW5nPC9kaXY+fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IHRydWUsXHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHN1YmplY3Q6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIHVwZGF0ZTogbnVsbCxcclxuICBoaXQ6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICBpc0xpa2U6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgZGVsOiBudWxsLFxyXG4gIGlzV3JpdGVyOiBmYWxzZSxcclxuICBjb21tZW50X2NudDogMCxcclxuICBjb21tZW50czogW10sXHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdENvbW1lbnQgPSB7XHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgY29tbWVudF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgd3JpdGVyX25pY2s6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICByb290OiAwLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICB1cGRhdGVkOiBmYWxzZSxcclxuICByZXBseV9jbnQ6IDAsXHJcbiAgdGFyZ2V0OiAwLFxyXG4gIHRhcmdldF9pZHg6IG51bGwsXHJcbiAgdGFyZ2V0X25pY2s6IG51bGwsXHJcbiAgaXNXcml0ZXI6IHRydWUsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG4gIHJlcGx5czogW10sXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9SRVFVRVNUID0gJ1NIT1dfQVJUSUNMRV9SRVFVRVNUJ1xyXG5jb25zdCBTSE9XX0FSVElDTEVfU1VDQ0VTUyA9ICdTSE9XX0FSVElDTEVfU1VDQ0VTUydcclxuY29uc3QgU0hPV19BUlRJQ0xFX0VSUk9SID0gJ1NIT1dfQVJUSUNMRV9FUlJPUidcclxuXHJcbmNvbnN0IElOU0VSVF9CX0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0JfTElLRV9BQ1RJT04gPSAnREVMRVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0RJU0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQl9MSUtFX0FDVElPTiA9ICdVUERBVEVfQl9MSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfRElTTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfRElTTElLRV9BQ1RJT04nXHJcblxyXG5jb25zdCBDT01NRU5UX0NOVF9VUCA9ICdDT01NRU5UX0NOVF9VUCdcclxuXHJcbmNvbnN0IEFERF9DT01NRU5UID0gJ0FERF9DT01NRU5UJztcclxuY29uc3QgR0VUX0NPTU1FTlRTID0gJ0dFVF9DT01NRU5UUyc7XHJcbmNvbnN0IEFkZF9SRVBMWSA9ICdBZGRfUkVQTFknO1xyXG5jb25zdCBHRVRfUkVQTFlTID0gJ0dFVF9SRVBMWVMnO1xyXG5jb25zdCBDTEVBUl9SRVBMWVMgPSAnQ0xFQVJfUkVQTFlTJztcclxuY29uc3QgREVMRVRFX0NPTU1FTlQgPSAnREVMRVRFX0NPTU1FTlQnO1xyXG5jb25zdCBERUxFVEVfUkVQTFkgPSAnREVMRVRFX1JFUExZJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcbmNvbnN0IFVQREFURV9SRVBMWSA9ICdVUERBVEVfUkVQTFknXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0FydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93QXJ0aWNsZVN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEluc2VydEJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0JfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQl9ESVNMSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQl9MSUtFX0FDVElPTixcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRDbnRVcCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ09NTUVOVF9DTlRfVVAsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0Q29tbWVudHMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBHRVRfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBZGRfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0UmVwbHlzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogR0VUX1JFUExZUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJSZXBseXMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDTEVBUl9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVJlcGx5ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX1JFUExZLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9MSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkICsgMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkIC0gMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkICsgMSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQ09NTUVOVF9DTlRfVVA6XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmNvbW1lbnRfY250KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRfY250OiBzdGF0ZS5jb21tZW50X2NudCArIDEsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UOlxyXG4gICAgICBjb25zdCBuZXdDb21tZW50ID0geyAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbbmV3Q29tbWVudCwgLi4uc3RhdGUuY29tbWVudHNdLFxyXG4gICAgICAgIGNvbW1lbnRfY250OiBzdGF0ZS5jb21tZW50X2NudCArIDEsXHJcbiAgICAgIH1cclxuXHJcbiAgICAvLy/spJHrs7XrkJjripTqsbAg7JWE656YIHJlcGx5c+yXkOyEnCDsoJzqsbDtlZzqsbDsspjrn7wg7KCc6rGw7ZW07KO86riwLlxyXG4gICAgY2FzZSBHRVRfQ09NTUVOVFM6XHJcbiAgICAgIGxldCB0ZW1wQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHMsIC4uLmFjdGlvbi5kYXRhXTtcclxuICAgICAgLy8gY29uc3QgY29tbWVudHM9W107XHJcbiAgICAgIC8vIGNvbnN0IGNvbW1lbnRDaGVjayA9IFtdO1xyXG4gICAgICAvLyBmb3IobGV0IGkgPSAwOyBpPHRlbXBDb21tZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIC8vICAgaWYoIWNvbW1lbnRDaGVjay5pbmNsdWRlcyh0ZW1wQ29tbWVudHNbaV0uY29tbWVudF9pZCkpe1xyXG4gICAgICAvLyAgICAgY29tbWVudENoZWNrLnB1c2godGVtcENvbW1lbnRzW2ldLmNvbW1lbnRfaWQpXHJcbiAgICAgIC8vICAgICBjb21tZW50cy5wdXNoKHRlbXBDb21tZW50c1tpXSlcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogdGVtcENvbW1lbnRzLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBZGRfUkVQTFk6XHJcbiAgICAgIGNvbnN0IG5ld1JlcGx5ID0geyAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEgfVxyXG4gICAgICBsZXQgcmVwbHl0ZW1wID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgcmVwbHl0ZW1wLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5yb290KSB7XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IFtuZXdSZXBseSwgLi4udi5yZXBseXNdO1xyXG4gICAgICAgICAgdi5yZXBseV9jbnQgPSB2LnJlcGx5X2NudCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiByZXBseXRlbXAsXHJcbiAgICAgICAgY29tbWVudF9jbnQ6IHN0YXRlLmNvbW1lbnRfY250ICsgMSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgR0VUX1JFUExZUzpcclxuICAgICAgY29uc3Qgcm9vdCA9IGFjdGlvbi5kYXRhWzBdLnJvb3RcclxuICAgICAgbGV0IHJlcGx5c3RlbXAgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICByZXBseXN0ZW1wLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSByb290KSB7XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IFsuLi52LnJlcGx5cywgLi4uYWN0aW9uLmRhdGFdO1xyXG4gICAgICAgICAgbGV0IGNoZWNrID0gW107XHJcbiAgICAgICAgICBsZXQgcmVwbHlzID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYucmVwbHlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2suaW5jbHVkZXModi5yZXBseXNbaV0uY29tbWVudF9pZCkpIHtcclxuICAgICAgICAgICAgICBjaGVjay5wdXNoKHYucmVwbHlzW2ldLmNvbW1lbnRfaWQpXHJcbiAgICAgICAgICAgICAgcmVwbHlzLnB1c2godi5yZXBseXNbaV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHYucmVwbHlzID0gcmVwbHlzXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiByZXBseXN0ZW1wLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBVUERBVEVfQ09NTUVOVDpcclxuICAgICAgbGV0IHVwZGF0ZUNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICB1cGRhdGVDb21tZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEuY29tbWVudF9pZCkge1xyXG4gICAgICAgICAgYy51cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGMuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHVwZGF0ZUNvbW1lbnRzXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFVQREFURV9SRVBMWTpcclxuICAgICAgbGV0IHVwZGF0ZVJlcGx5ID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICB1cGRhdGVSZXBseS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5jb21tZW50X2lkKSB7XHJcbiAgICAgICAgICAgICAgci51cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICByLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHVwZGF0ZVJlcGx5LFxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgY2FzZSBDTEVBUl9SRVBMWVM6XHJcbiAgICAgIGxldCBjbGVhclJlcGx5cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgIGNsZWFyUmVwbHlzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YSkge1xyXG4gICAgICAgICAgdi5yZXBseXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGNsZWFyUmVwbHlzLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ09NTUVOVDpcclxuICAgICAgbGV0IGRsdENvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICBkbHRDb21tZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICAgIGMuZGVsID0gMTtcclxuICAgICAgICAgIGMuY29udGVudCA9ICfsgq3soJzrkJwg64yT6riA7J6F64uI64ukLidcclxuICAgICAgICAgIGMuaXNXcml0ZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGRsdENvbW1lbnRzXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9SRVBMWTpcclxuICAgICAgbGV0IGRsdFJlcGx5ID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICBkbHRSZXBseS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5jb21tZW50X2lkKSB7XHJcbiAgICAgICAgICAgICAgci5kZWwgPSAxO1xyXG4gICAgICAgICAgICAgIHIuY29udGVudCA9ICfsgq3soJzrkJwg64yT6riA7J6F64uI64ukLic7XHJcbiAgICAgICAgICAgICAgci5pc1dyaXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGRsdFJlcGx5LFxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdHlwZTogJ2FsbCcsXHJcbiAgc2VhcmNoOiBudWxsLFxyXG4gIGtleXdvcmQ6IG51bGwsXHJcbiAgcGFnZTogMSxcclxuICByb3dzOiAzMCxcclxuICBwYWdlYmxvY2s6IFtdLFxyXG4gIGVuZHBhZ2U6IG51bGwsXHJcbiAgbGlzdDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19MSVNUX1JFUVVFU1QgPSAnU0hPV19MSVNUX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfTElTVF9TVUNDRVNTID0gJ1NIT1dfTElTVF9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0xJU1RfRVJST1IgPSAnU0hPV19MSVNUX0VSUk9SJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9SRVFVRVNUID0gJ0RFTEVURV9BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MgPSAnREVMRVRFX0FSVElDTEVfU1VDQ0VTUydcclxuY29uc3QgREVMRVRFX0FSVElDTEVfRVJST1IgPSAnREVMRVRFX0FSVElDTEVfRVJST1InXHJcbmNvbnN0IENSRUFURV9BUlRJQ0xFX0FDVElPTiA9ICdDUkVBVEVfQVJUSUNMRV9BQ1RJT04nXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dMaXN0UmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICAgIHJlc3VsdC5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93TGlzdFN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dMaXN0RXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChEZWxldGVBcnRpY2xlU3VjY2VzcyhkYXRhKSlcclxuICAgICAgICA6IGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0RXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQXJ0aWNsZUFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ1JFQVRFX0FSVElDTEVfQUNUSU9OLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfTElTVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4uYWN0aW9uLmRhdGEucmVzdWx0c10sXHJcbiAgICAgICAgcGFnZTogYWN0aW9uLmRhdGEucGFnZSxcclxuICAgICAgICByb3dzOiBhY3Rpb24uZGF0YS5yb3dzLFxyXG4gICAgICAgIHBhZ2VibG9jazogYWN0aW9uLmRhdGEucGFnZWJsb2NrLFxyXG4gICAgICAgIGVuZHBhZ2U6IGFjdGlvbi5kYXRhLnRvdGFsUGFnZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19MSVNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBhY3Rpb24uZGF0YS5pZDtcclxuICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5zdGF0ZS5saXN0XS5tYXAoKHYpID0+IHtcclxuICAgICAgICBpZiAodi5pZCA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgIHYuc3ViamVjdCA9IFwi7IKt7KCc65CcIOqyjOyLnOq4gOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgdi5kZWwgPSAxXHJcbiAgICAgICAgICByZXR1cm4gdlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cobmV3TGlzdCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLm5ld0xpc3RdLFxyXG5cclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIENSRUFURV9BUlRJQ0xFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0eXBlOiAnYWxsJyxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBtZW51OltcclxuICAgIHsgXHJcbiAgICBpZDonMScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gICAgdXJsOicvcG9zdHMvMSdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzInLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgIHVybDonL3Bvc3RzLzInXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOiczJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNCcsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgdXJsOicvcG9zdHMvNCdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzUnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgIHVybDonL3Bvc3RzLzUnXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG5zd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuICBkZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNvbW1lbnQ6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0Q29tbWVudCA9IHtcclxuICBib2FyZF9pZDogbnVsbCxcclxuICBjb21tZW50X2lkOiBudWxsLFxyXG4gIHdyaXRlcjogbnVsbCxcclxuICB3cml0ZXJfbmljazogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIHJvb3Q6IDAsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIGltYWdlOiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlcGx5X2NudDogMCxcclxuICB0YXJnZXQ6IDAsXHJcbiAgdGFyZ2V0X2lkeDogbnVsbCxcclxuICB0YXJnZXRfbmljazogbnVsbCxcclxuICBpc1dyaXRlcjogdHJ1ZSxcclxuICBpc0xpa2U6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBBRERfQ09NTUVOVFMgPSAnQUREX0NPTU1FTlRTJztcclxuXHJcbmNvbnN0IFJFU0VUX0NPTU1FTlQgPSAnUkVTRVRfQ09NTUVOVCc7XHJcbmNvbnN0IERFTEVURV9DT01NRU5UID0gJ0RFTEVURV9DT01NRU5UJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFJlcGx5cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUkVQTFlTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZXNldENvbW1lbnQgPSAoKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlJFU0VUX0NPTU1FTlQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ29tbWVudCA9IChkYXRhKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlVQREFURV9DT01NRU5ULFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChkYXRhKSA9PntcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpERUxFVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6ZGF0YVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFJFU0VUX0NPTU1FTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVDpcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLnJvb3QgPT09IDApIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5Db21tZW50cyA9IHN0YXRlLmNvbW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudHMgPSBbY29tbWVudCwgLi4ub3JpZ2luQ29tbWVudHNdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IG5ld0NvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRlbXBsaXN0ID0gWy4uLnN0YXRlLmNvbW1lbnRdXHJcbiAgICAgICAgY29uc3QgbmV3UmVwbHkgPSB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBsaXN0LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXVxyXG4gICAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6dGVtcGxpc3QsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVFM6XHJcbiAgICAgIGNvbnN0IGFkZGVkQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudCwgLi4uYWN0aW9uLmRhdGFdXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDogYWRkZWRDb21tZW50cyxcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjYXNlIFVQREFURV9DT01NRU5UOlxyXG4gICAgICBsZXQgdXBkYXRlZENvbW1lbnQgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHVwZGF0ZWRDb21tZW50LmZvckVhY2godj0+e1xyXG4gICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgdi51cGRhdGVkPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udXBkYXRlZENvbW1lbnRdXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NPTU1FTlQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgbGV0IHRlbXAgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHRlbXAuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YSl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQ9J+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJ1xyXG4gICAgICAgICAgdi5pc1dyaXRlcj1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udGVtcF1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuaW1wb3J0IGJvYXJkIGZyb20gJy4vYm9hcmQnXHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSdcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50J1xyXG5cclxuaW1wb3J0IHsgcGVyc2lzdFJldWRlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsIGJvYXJkLCBjYXRlZ29yeSwgYXJ0aWNsZSxjb21tZW50XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiBmYWxzZSxcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBpbWFnZTogJy9kZWZhdWx0UHJvZmlsLnBuZycsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5SZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1JFUVVFU1QsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fRVJST1IsXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IHRydWUsXHJcbiAgICAgICAgbmlja25hbWU6IGFjdGlvbi5kYXRhLm5pY2tuYW1lLFxyXG4gICAgICAgIGltYWdlOiBhY3Rpb24uZGF0YS5pbWFnZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCJcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcblxyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiXHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBjcmVhdGVTYWdhIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhL2luZGV4J1xyXG5cclxuXHJcblxyXG4vLy9mcm9tICAgaHR0cHM6Ly9naXRodWIuY29tL2Zhemx1bGthcmltd2ViL3dpdGgtbmV4dC1yZWR1eC13cmFwcGVyLXJlZHV4LXBlcnNpc3QgIOuEpeyKpO2KuCDrpqzrjZXsiqQg7Y287Iuc7Iqk7Yq47JeQIOuPhOybgOydhCDspIAgIOqzoOuniOyatCDrtoTrk6ReXlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbG9nZ2V0ck1pZGRlbHdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pOyBcclxuICAvLyBjb25zb2xlLmxvZyhkaXNwYXRjaCk7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFN0YXRlKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2EoKTsgXHJcblxyXG4gIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpXHJcbiAgLy8gU3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpIFxyXG5cclxuICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKHsgaXNTZXJ2ZXIgfSkgPT4ge1xyXG5cclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtsb2dnZXRyTWlkZGVsd2FyZSwgdGh1bmtNaWRkbGV3YXJlXTtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07IFxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpLmRlZmF1bHQ7XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAga2V5OiBcInJvb3RcIixcclxuICAgICAgc3RvcmFnZSxcclxuICAgICAgd2hpdGVsaXN0OiBbXCJhcnRpY2xlXCIsIFwiYm9hcmRcIiwgXCJ1c2VyXCJdLFxyXG4gICAgICBibGFja2xpc3Q6Wydjb21tZW50J11cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlciwgZW5oYW5jZXIpO1xyXG5cclxuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RhdmVsb3BtZW50J1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=