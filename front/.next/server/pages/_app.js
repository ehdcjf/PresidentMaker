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
/* harmony export */   "InsertCLikeAction": function() { return /* binding */ InsertCLikeAction; },
/* harmony export */   "DeleteCLikeAction": function() { return /* binding */ DeleteCLikeAction; },
/* harmony export */   "UpdateCLikeAction": function() { return /* binding */ UpdateCLikeAction; },
/* harmony export */   "AddComment": function() { return /* binding */ AddComment; },
/* harmony export */   "GetComments": function() { return /* binding */ GetComments; },
/* harmony export */   "AddReply": function() { return /* binding */ AddReply; },
/* harmony export */   "GetReplys": function() { return /* binding */ GetReplys; },
/* harmony export */   "ClearReplys": function() { return /* binding */ ClearReplys; },
/* harmony export */   "UpdateComment": function() { return /* binding */ UpdateComment; },
/* harmony export */   "UpdateReply": function() { return /* binding */ UpdateReply; },
/* harmony export */   "DeleteComment": function() { return /* binding */ DeleteComment; },
/* harmony export */   "DeleteReply": function() { return /* binding */ DeleteReply; },
/* harmony export */   "ChangeCommentType": function() { return /* binding */ ChangeCommentType; }
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
  comments: [],
  comment_type: 'like',
  skip: 0
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
  replys: [],
  skip: 0
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
const INSERT_C_LIKE_ACTION = 'INSERT_C_LIKE_ACTION';
const INSERT_C_DISLIKE_ACTION = 'INSERT_C_DISLIKE_ACTION';
const DELETE_C_LIKE_ACTION = 'DELETE_C_LIKE_ACTION';
const DELETE_C_DISLIKE_ACTION = 'DELETE_C_DISLIKE_ACTION';
const UPDATE_C_LIKE_ACTION = 'UPDATE_C_LIKE_ACTION';
const UPDATE_C_DISLIKE_ACTION = 'UPDATE_C_DISLIKE_ACTION';
const CHANGE_COMMENT_TYPE = 'CHANGE_COMMENT_TYPE';
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
const InsertCLikeAction = data => {
  if (data.isLike) {
    return {
      type: INSERT_C_LIKE_ACTION,
      data: data
    };
  } else {
    return {
      type: INSERT_C_DISLIKE_ACTION,
      data: data
    };
  }
};
const DeleteCLikeAction = data => {
  if (data.isLike) {
    return {
      type: DELETE_C_LIKE_ACTION,
      data: data
    };
  } else {
    return {
      type: DELETE_C_DISLIKE_ACTION,
      data: data
    };
  }
};
const UpdateCLikeAction = data => {
  if (data.isLike) {
    return {
      type: UPDATE_C_LIKE_ACTION,
      data: data
    };
  } else {
    return {
      type: UPDATE_C_DISLIKE_ACTION,
      data: data
    };
  }
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
const ChangeCommentType = data => {
  console.log(data);
  return {
    type: CHANGE_COMMENT_TYPE,
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
        skip: 10,
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

    case INSERT_C_LIKE_ACTION:
      if (action.data.root == 0) {
        const comments = [...state.comments];
        comments.forEach(v => {
          if (v.comment_id == action.data.comment_id) {
            v.isLike = true;
            v.liked++;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      } else {
        const comments = [...state.comments];
        comments.forEach(c => {
          if (c.comment_id == action.data.root) {
            c.replys.forEach(r => {
              if (r.comment_id == action.data.comment_id) {
                r.isLike = true;
                r.liked++;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      }

    case INSERT_C_DISLIKE_ACTION:
      if (action.data.root == 0) {
        const comments = [...state.comments];
        comments.forEach(v => {
          if (v.comment_id == action.data.comment_id) {
            v.isLike = false;
            v.disliked++;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      } else {
        const comments = [...state.comments];
        comments.forEach(c => {
          if (c.comment_id == action.data.root) {
            c.replys.forEach(r => {
              if (r.comment_id == action.data.comment_id) {
                r.isLike = false;
                r.disliked++;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      }

    case DELETE_C_LIKE_ACTION:
      if (action.data.root == 0) {
        const comments = [...state.comments];
        comments.forEach(v => {
          if (v.comment_id == action.data.comment_id) {
            v.isLike = null;
            v.liked--;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      } else {
        const comments = [...state.comments];
        comments.forEach(c => {
          if (c.comment_id == action.data.root) {
            c.replys.forEach(r => {
              if (r.comment_id == action.data.comment_id) {
                r.isLike = null;
                r.liked--;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      }

    case DELETE_C_DISLIKE_ACTION:
      if (action.data.root == 0) {
        const comments = [...state.comments];
        comments.forEach(v => {
          if (v.comment_id == action.data.comment_id) {
            v.isLike = null;
            v.disliked--;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      } else {
        const comments = [...state.comments];
        comments.forEach(c => {
          if (c.comment_id == action.data.root) {
            c.replys.forEach(r => {
              if (r.comment_id == action.data.comment_id) {
                r.isLike = null;
                r.disliked--;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      }

    case UPDATE_C_LIKE_ACTION:
      if (action.data.root == 0) {
        const comments = [...state.comments];
        comments.forEach(v => {
          if (v.comment_id == action.data.comment_id) {
            v.isLike = true;
            v.disliked--;
            v.liked++;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      } else {
        const comments = [...state.comments];
        comments.forEach(c => {
          if (c.comment_id == action.data.root) {
            c.replys.forEach(r => {
              if (r.comment_id == action.data.comment_id) {
                r.isLike = true;
                r.disliked--;
                r.liked++;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      }

    case UPDATE_C_DISLIKE_ACTION:
      if (action.data.root == 0) {
        const comments = [...state.comments];
        comments.forEach(v => {
          if (v.comment_id == action.data.comment_id) {
            v.isLike = false;
            v.disliked++;
            v.liked--;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      } else {
        const comments = [...state.comments];
        comments.forEach(c => {
          if (c.comment_id == action.data.root) {
            c.replys.forEach(r => {
              if (r.comment_id == action.data.comment_id) {
                r.isLike = false;
                r.disliked++;
                r.liked--;
              }
            });
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          comments: comments
        });
      }

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
        comments: tempComments,
        skip: state.skip + 10
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

    case CHANGE_COMMENT_TYPE:
      console.log(action.data);
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: [...action.data.comments],
        comment_type: action.data.type,
        skip: action.data.comments.length
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
/* harmony export */   "UserUpdateAction": function() { return /* binding */ UserUpdateAction; },
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
  image: '/defaultProfil.png',
  user_id: null
};
const USER_UPDATE_ACTION = 'USER_UPDATE_ACTION';
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
const UserUpdateAction = data => {
  return {
    type: USER_UPDATE_ACTION,
    data: data
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
        user_id: action.data.user_id,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), initialState);

    case USER_UPDATE_ACTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        nickname: action.data.nickname,
        image: action.data.image
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiY29tbWVudHMiLCJjb21tZW50X3R5cGUiLCJza2lwIiwiZGVmYXVsdENvbW1lbnQiLCJjb21tZW50X2lkIiwid3JpdGVyX25pY2siLCJyb290IiwiaW1hZ2UiLCJ1cGRhdGVkIiwicmVwbHlfY250IiwidGFyZ2V0IiwidGFyZ2V0X2lkeCIsInRhcmdldF9uaWNrIiwicmVwbHlzIiwiU0hPV19BUlRJQ0xFX1JFUVVFU1QiLCJTSE9XX0FSVElDTEVfU1VDQ0VTUyIsIlNIT1dfQVJUSUNMRV9FUlJPUiIsIklOU0VSVF9CX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0JfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQl9MSUtFX0FDVElPTiIsIkRFTEVURV9CX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0JfTElLRV9BQ1RJT04iLCJVUERBVEVfQl9ESVNMSUtFX0FDVElPTiIsIklOU0VSVF9DX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0NfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQ19MSUtFX0FDVElPTiIsIkRFTEVURV9DX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0NfTElLRV9BQ1RJT04iLCJVUERBVEVfQ19ESVNMSUtFX0FDVElPTiIsIkNIQU5HRV9DT01NRU5UX1RZUEUiLCJBRERfQ09NTUVOVCIsIkdFVF9DT01NRU5UUyIsIkFkZF9SRVBMWSIsIkdFVF9SRVBMWVMiLCJDTEVBUl9SRVBMWVMiLCJERUxFVEVfQ09NTUVOVCIsIkRFTEVURV9SRVBMWSIsIlVQREFURV9DT01NRU5UIiwiVVBEQVRFX1JFUExZIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiSW5zZXJ0Q0xpa2VBY3Rpb24iLCJEZWxldGVDTGlrZUFjdGlvbiIsIlVwZGF0ZUNMaWtlQWN0aW9uIiwiQWRkQ29tbWVudCIsIkdldENvbW1lbnRzIiwiQWRkUmVwbHkiLCJHZXRSZXBseXMiLCJDbGVhclJlcGx5cyIsIlVwZGF0ZUNvbW1lbnQiLCJVcGRhdGVSZXBseSIsIkRlbGV0ZUNvbW1lbnQiLCJEZWxldGVSZXBseSIsIkNoYW5nZUNvbW1lbnRUeXBlIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJhY3Rpb24iLCJmb3JFYWNoIiwidiIsImMiLCJyIiwibmV3Q29tbWVudCIsInRlbXBDb21tZW50cyIsIm5ld1JlcGx5IiwicmVwbHl0ZW1wIiwicmVwbHlzdGVtcCIsImNoZWNrIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInVwZGF0ZUNvbW1lbnRzIiwidXBkYXRlUmVwbHkiLCJjbGVhclJlcGx5cyIsImRsdENvbW1lbnRzIiwiZGx0UmVwbHkiLCJzZWFyY2giLCJrZXl3b3JkIiwicGFnZSIsInJvd3MiLCJwYWdlYmxvY2siLCJlbmRwYWdlIiwibGlzdCIsIlNIT1dfTElTVF9SRVFVRVNUIiwiU0hPV19MSVNUX1NVQ0NFU1MiLCJTSE9XX0xJU1RfRVJST1IiLCJERUxFVEVfQVJUSUNMRV9SRVFVRVNUIiwiREVMRVRFX0FSVElDTEVfU1VDQ0VTUyIsIkRFTEVURV9BUlRJQ0xFX0VSUk9SIiwiQ1JFQVRFX0FSVElDTEVfQUNUSU9OIiwiU2hvd0xpc3RBY3Rpb24iLCJTaG93TGlzdFJlcXVlc3QiLCJyZXN1bHQiLCJTaG93TGlzdFN1Y2Nlc3MiLCJTaG93TGlzdEVycm9yIiwiRGVsZXRlQXJ0aWNsZUFjdGlvbiIsIkRlbGV0ZUFydGljbGVSZXF1ZXN0IiwiRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MiLCJEZWxldGVBcnRpY2xlRXJyb3IiLCJDcmVhdGVBcnRpY2xlQWN0aW9uIiwicmVzdWx0cyIsInRvdGFsUGFnZSIsImlkIiwibmV3TGlzdCIsIm1hcCIsIm1lbnUiLCJjYXRlZ29yeSIsInVybCIsImNvbW1lbnQiLCJBRERfQ09NTUVOVFMiLCJSRVNFVF9DT01NRU5UIiwiQWRkQ29tbWVudHMiLCJBZGRSZXBseXMiLCJBRERfUkVQTFlTIiwiUmVzZXRDb21tZW50Iiwib3JpZ2luQ29tbWVudHMiLCJuZXdDb21tZW50cyIsInRlbXBsaXN0IiwiYWRkZWRDb21tZW50cyIsInVwZGF0ZWRDb21tZW50IiwidGVtcCIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwiYm9hcmQiLCJhcnRpY2xlIiwiSXNMb2dpbiIsInVzZXJfaWQiLCJVU0VSX1VQREFURV9BQ1RJT04iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwiVXNlclVwZGF0ZUFjdGlvbiIsIlVzZXJMb2dvdXRBY3Rpb24iLCJsb2dnZXRyTWlkZGVsd2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwiU3RvcmUiLCJjcmVhdGVTdG9yZSIsImVuaGFuY2VyIiwibWFrZVN0b3JlIiwiaXNTZXJ2ZXIiLCJtaWRkbGV3YXJlcyIsInRodW5rTWlkZGxld2FyZSIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJyZXF1aXJlIiwic3RvcmFnZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJibGFja2xpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDN0IsUUFBTUMsS0FBSyxHQUFHQyxxREFBUSxDQUFFQyxLQUFELElBQVdBLEtBQVosQ0FBdEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsMkJBRlA7QUFHRSxtQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQU9FO0FBQ0UsWUFBSSxFQUFDLG9FQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFjRSw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLHdFQUFEO0FBQWEsaUJBQVMsRUFBRUYsS0FBSyxDQUFDRyxXQUE5QjtBQUEyQyxlQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQSxrQkFERjtBQXNCRCxDQXhCRDs7QUF5QkEsK0RBQWVDLG9FQUFBLENBQWtC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QUFLLENBQUNHLFdBQU4sR0FBb0J3TCxZQUFZLENBQUMzTCxLQUFELENBQWhDO0FBRUEsV0FBT0EsS0FBUDtBQUVEO0FBQ0YsQ0E5QkQ7O0FBb0NBLE1BQU1JLE9BQU8sR0FBR2dNLGlFQUFhLENBQUNoQixTQUFELEVBQVk7QUFDdkNpQixPQUFLO0FBRGtDLENBQVosQ0FBN0I7QUFJQSwrREFBZWpNLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZz17PGRpdj5Mb2FkaW5nPC9kaXY+fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IHRydWUsXHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHN1YmplY3Q6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIHVwZGF0ZTogbnVsbCxcclxuICBoaXQ6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICBpc0xpa2U6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgZGVsOiBudWxsLFxyXG4gIGlzV3JpdGVyOiBmYWxzZSxcclxuICBjb21tZW50X2NudDogMCxcclxuICBjb21tZW50czogW10sXHJcbiAgY29tbWVudF90eXBlOidsaWtlJyxcclxuICBza2lwOjAsXHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdENvbW1lbnQgPSB7XHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgY29tbWVudF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgd3JpdGVyX25pY2s6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICByb290OiAwLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICB1cGRhdGVkOiBmYWxzZSxcclxuICByZXBseV9jbnQ6IDAsXHJcbiAgdGFyZ2V0OiAwLFxyXG4gIHRhcmdldF9pZHg6IG51bGwsXHJcbiAgdGFyZ2V0X25pY2s6IG51bGwsXHJcbiAgaXNXcml0ZXI6IHRydWUsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG4gIHJlcGx5czogW10sXHJcbiAgc2tpcDowLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0FSVElDTEVfUkVRVUVTVCA9ICdTSE9XX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgU0hPV19BUlRJQ0xFX1NVQ0NFU1MgPSAnU0hPV19BUlRJQ0xFX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9FUlJPUiA9ICdTSE9XX0FSVElDTEVfRVJST1InXHJcblxyXG5jb25zdCBJTlNFUlRfQl9MSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9MSUtFX0FDVElPTidcclxuY29uc3QgSU5TRVJUX0JfRElTTElLRV9BQ1RJT04gPSAnSU5TRVJUX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQl9ESVNMSUtFX0FDVElPTiA9ICdERUxFVEVfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OID0gJ1VQREFURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5cclxuY29uc3QgSU5TRVJUX0NfTElLRV9BQ1RJT04gPSAnSU5TRVJUX0NfTElLRV9BQ1RJT04nXHJcbmNvbnN0IElOU0VSVF9DX0RJU0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9DX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQ19MSUtFX0FDVElPTiA9ICdERUxFVEVfQ19MSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0NfRElTTElLRV9BQ1RJT04gPSAnREVMRVRFX0NfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9DX0xJS0VfQUNUSU9OID0gJ1VQREFURV9DX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQ19ESVNMSUtFX0FDVElPTiA9ICdVUERBVEVfQ19ESVNMSUtFX0FDVElPTidcclxuXHJcbmNvbnN0IENIQU5HRV9DT01NRU5UX1RZUEUgPSAnQ0hBTkdFX0NPTU1FTlRfVFlQRSdcclxuXHJcbmNvbnN0IEFERF9DT01NRU5UID0gJ0FERF9DT01NRU5UJztcclxuY29uc3QgR0VUX0NPTU1FTlRTID0gJ0dFVF9DT01NRU5UUyc7XHJcbmNvbnN0IEFkZF9SRVBMWSA9ICdBZGRfUkVQTFknO1xyXG5jb25zdCBHRVRfUkVQTFlTID0gJ0dFVF9SRVBMWVMnO1xyXG5jb25zdCBDTEVBUl9SRVBMWVMgPSAnQ0xFQVJfUkVQTFlTJztcclxuY29uc3QgREVMRVRFX0NPTU1FTlQgPSAnREVMRVRFX0NPTU1FTlQnO1xyXG5jb25zdCBERUxFVEVfUkVQTFkgPSAnREVMRVRFX1JFUExZJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcbmNvbnN0IFVQREFURV9SRVBMWSA9ICdVUERBVEVfUkVQTFknXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0FydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93QXJ0aWNsZVN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEluc2VydEJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0JfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQl9ESVNMSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQl9MSUtFX0FDVElPTixcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgSW5zZXJ0Q0xpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cclxuICBpZiAoZGF0YS5pc0xpa2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9DX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQ19ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblxyXG4gIGlmIChkYXRhLmlzTGlrZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0NfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6ZGF0YVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQ19ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTpkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YS5pc0xpa2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9DX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOmRhdGFcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0NfRElTTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6ZGF0YVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0Q29tbWVudHMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBHRVRfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBZGRfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0UmVwbHlzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogR0VUX1JFUExZUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJSZXBseXMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDTEVBUl9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVJlcGx5ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX1JFUExZLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ29tbWVudFR5cGUgPSAoZGF0YSk9PntcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpDSEFOR0VfQ09NTUVOVF9UWVBFLFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIHNraXA6MTAsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgKyAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVQREFURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgKyAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBJTlNFUlRfQ19MSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICB2Lmxpa2VkKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgci5saWtlZCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIElOU0VSVF9DX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPWZhbHNlO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHIuZGlzbGlrZWQrKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ19MSUtFX0FDVElPTjpcclxuICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPW51bGw7XHJcbiAgICAgICAgICAgIHYubGlrZWQtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPW51bGw7XHJcbiAgICAgICAgICAgICAgICByLmxpa2VkLS07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ19ESVNMSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT1udWxsO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1udWxsO1xyXG4gICAgICAgICAgICAgICAgci5kaXNsaWtlZC0tO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQ19MSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkLS07XHJcbiAgICAgICAgICAgIHYubGlrZWQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPXRydWU7XHJcbiAgICAgICAgICAgICAgICByLmRpc2xpa2VkLS07XHJcbiAgICAgICAgICAgICAgICByLmxpa2VkKys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBVUERBVEVfQ19ESVNMSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgdi5kaXNsaWtlZCsrO1xyXG4gICAgICAgICAgICB2Lmxpa2VkLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHIuZGlzbGlrZWQrKztcclxuICAgICAgICAgICAgICAgIHIubGlrZWQtLTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UOlxyXG4gICAgICBjb25zdCBuZXdDb21tZW50ID0geyAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbbmV3Q29tbWVudCwgLi4uc3RhdGUuY29tbWVudHNdLFxyXG4gICAgICAgIGNvbW1lbnRfY250OiBzdGF0ZS5jb21tZW50X2NudCArIDEsXHJcbiAgICAgIH1cclxuXHJcbiAgICAvLy/spJHrs7XrkJjripTqsbAg7JWE656YIHJlcGx5c+yXkOyEnCDsoJzqsbDtlZzqsbDsspjrn7wg7KCc6rGw7ZW07KO86riwLlxyXG4gICAgY2FzZSBHRVRfQ09NTUVOVFM6XHJcbiAgICAgIGxldCB0ZW1wQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHMsIC4uLmFjdGlvbi5kYXRhXTtcclxuICAgICAgLy8gY29uc3QgY29tbWVudHM9W107XHJcbiAgICAgIC8vIGNvbnN0IGNvbW1lbnRDaGVjayA9IFtdO1xyXG4gICAgICAvLyBmb3IobGV0IGkgPSAwOyBpPHRlbXBDb21tZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIC8vICAgaWYoIWNvbW1lbnRDaGVjay5pbmNsdWRlcyh0ZW1wQ29tbWVudHNbaV0uY29tbWVudF9pZCkpe1xyXG4gICAgICAvLyAgICAgY29tbWVudENoZWNrLnB1c2godGVtcENvbW1lbnRzW2ldLmNvbW1lbnRfaWQpXHJcbiAgICAgIC8vICAgICBjb21tZW50cy5wdXNoKHRlbXBDb21tZW50c1tpXSlcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogdGVtcENvbW1lbnRzLFxyXG4gICAgICAgIHNraXA6c3RhdGUuc2tpcCsxMCxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQWRkX1JFUExZOlxyXG4gICAgICBjb25zdCBuZXdSZXBseSA9IHsgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhIH1cclxuICAgICAgbGV0IHJlcGx5dGVtcCA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgIHJlcGx5dGVtcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXTtcclxuICAgICAgICAgIHYucmVwbHlfY250ID0gdi5yZXBseV9jbnQgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogcmVwbHl0ZW1wLFxyXG4gICAgICAgIGNvbW1lbnRfY250OiBzdGF0ZS5jb21tZW50X2NudCArIDEsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEdFVF9SRVBMWVM6XHJcbiAgICAgIGNvbnN0IHJvb3QgPSBhY3Rpb24uZGF0YVswXS5yb290XHJcbiAgICAgIGxldCByZXBseXN0ZW1wID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgcmVwbHlzdGVtcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gcm9vdCkge1xyXG4gICAgICAgICAgdi5yZXBseXMgPSBbLi4udi5yZXBseXMsIC4uLmFjdGlvbi5kYXRhXTtcclxuICAgICAgICAgIGxldCBjaGVjayA9IFtdO1xyXG4gICAgICAgICAgbGV0IHJlcGx5cyA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2LnJlcGx5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrLmluY2x1ZGVzKHYucmVwbHlzW2ldLmNvbW1lbnRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2sucHVzaCh2LnJlcGx5c1tpXS5jb21tZW50X2lkKVxyXG4gICAgICAgICAgICAgIHJlcGx5cy5wdXNoKHYucmVwbHlzW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IHJlcGx5c1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogcmVwbHlzdGVtcCxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgVVBEQVRFX0NPTU1FTlQ6XHJcbiAgICAgIGxldCB1cGRhdGVDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgdXBkYXRlQ29tbWVudHMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpIHtcclxuICAgICAgICAgIGMudXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICBjLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiB1cGRhdGVDb21tZW50c1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBVUERBVEVfUkVQTFk6XHJcbiAgICAgIGxldCB1cGRhdGVSZXBseSA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgdXBkYXRlUmVwbHkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEuY29tbWVudF9pZCkge1xyXG4gICAgICAgICAgICAgIHIudXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgci5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiB1cGRhdGVSZXBseSxcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNhc2UgQ0xFQVJfUkVQTFlTOlxyXG4gICAgICBsZXQgY2xlYXJSZXBseXMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICBjbGVhclJlcGx5cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICAgIHYucmVwbHlzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBjbGVhclJlcGx5cyxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NPTU1FTlQ6XHJcbiAgICAgIGxldCBkbHRDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgZGx0Q29tbWVudHMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhKSB7XHJcbiAgICAgICAgICBjLmRlbCA9IDE7XHJcbiAgICAgICAgICBjLmNvbnRlbnQgPSAn7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC4nXHJcbiAgICAgICAgICBjLmlzV3JpdGVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBkbHRDb21tZW50c1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfUkVQTFk6XHJcbiAgICAgIGxldCBkbHRSZXBseSA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgZGx0UmVwbHkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEuY29tbWVudF9pZCkge1xyXG4gICAgICAgICAgICAgIHIuZGVsID0gMTtcclxuICAgICAgICAgICAgICByLmNvbnRlbnQgPSAn7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC4nO1xyXG4gICAgICAgICAgICAgIHIuaXNXcml0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGRsdFJlcGx5LFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIENIQU5HRV9DT01NRU5UX1RZUEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOlsuLi5hY3Rpb24uZGF0YS5jb21tZW50c10sXHJcbiAgICAgICAgICBjb21tZW50X3R5cGU6YWN0aW9uLmRhdGEudHlwZSxcclxuICAgICAgICAgIHNraXA6YWN0aW9uLmRhdGEuY29tbWVudHMubGVuZ3RoLFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdHlwZTogJ2FsbCcsXHJcbiAgc2VhcmNoOiBudWxsLFxyXG4gIGtleXdvcmQ6IG51bGwsXHJcbiAgcGFnZTogMSxcclxuICByb3dzOiAzMCxcclxuICBwYWdlYmxvY2s6IFtdLFxyXG4gIGVuZHBhZ2U6IG51bGwsXHJcbiAgbGlzdDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19MSVNUX1JFUVVFU1QgPSAnU0hPV19MSVNUX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfTElTVF9TVUNDRVNTID0gJ1NIT1dfTElTVF9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0xJU1RfRVJST1IgPSAnU0hPV19MSVNUX0VSUk9SJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9SRVFVRVNUID0gJ0RFTEVURV9BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MgPSAnREVMRVRFX0FSVElDTEVfU1VDQ0VTUydcclxuY29uc3QgREVMRVRFX0FSVElDTEVfRVJST1IgPSAnREVMRVRFX0FSVElDTEVfRVJST1InXHJcbmNvbnN0IENSRUFURV9BUlRJQ0xFX0FDVElPTiA9ICdDUkVBVEVfQVJUSUNMRV9BQ1RJT04nXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dMaXN0UmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICAgIHJlc3VsdC5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93TGlzdFN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dMaXN0RXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChEZWxldGVBcnRpY2xlU3VjY2VzcyhkYXRhKSlcclxuICAgICAgICA6IGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0RXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQXJ0aWNsZUFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ1JFQVRFX0FSVElDTEVfQUNUSU9OLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfTElTVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4uYWN0aW9uLmRhdGEucmVzdWx0c10sXHJcbiAgICAgICAgcGFnZTogYWN0aW9uLmRhdGEucGFnZSxcclxuICAgICAgICByb3dzOiBhY3Rpb24uZGF0YS5yb3dzLFxyXG4gICAgICAgIHBhZ2VibG9jazogYWN0aW9uLmRhdGEucGFnZWJsb2NrLFxyXG4gICAgICAgIGVuZHBhZ2U6IGFjdGlvbi5kYXRhLnRvdGFsUGFnZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19MSVNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBhY3Rpb24uZGF0YS5pZDtcclxuICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5zdGF0ZS5saXN0XS5tYXAoKHYpID0+IHtcclxuICAgICAgICBpZiAodi5pZCA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgIHYuc3ViamVjdCA9IFwi7IKt7KCc65CcIOqyjOyLnOq4gOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgdi5kZWwgPSAxXHJcbiAgICAgICAgICByZXR1cm4gdlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cobmV3TGlzdCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLm5ld0xpc3RdLFxyXG5cclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIENSRUFURV9BUlRJQ0xFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0eXBlOiAnYWxsJyxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBtZW51OltcclxuICAgIHsgXHJcbiAgICBpZDonMScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gICAgdXJsOicvcG9zdHMvMSdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzInLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgIHVybDonL3Bvc3RzLzInXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOiczJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNCcsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgdXJsOicvcG9zdHMvNCdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzUnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgIHVybDonL3Bvc3RzLzUnXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG5zd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuICBkZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNvbW1lbnQ6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0Q29tbWVudCA9IHtcclxuICBib2FyZF9pZDogbnVsbCxcclxuICBjb21tZW50X2lkOiBudWxsLFxyXG4gIHdyaXRlcjogbnVsbCxcclxuICB3cml0ZXJfbmljazogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIHJvb3Q6IDAsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIGltYWdlOiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlcGx5X2NudDogMCxcclxuICB0YXJnZXQ6IDAsXHJcbiAgdGFyZ2V0X2lkeDogbnVsbCxcclxuICB0YXJnZXRfbmljazogbnVsbCxcclxuICBpc1dyaXRlcjogdHJ1ZSxcclxuICBpc0xpa2U6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBBRERfQ09NTUVOVFMgPSAnQUREX0NPTU1FTlRTJztcclxuXHJcbmNvbnN0IFJFU0VUX0NPTU1FTlQgPSAnUkVTRVRfQ09NTUVOVCc7XHJcbmNvbnN0IERFTEVURV9DT01NRU5UID0gJ0RFTEVURV9DT01NRU5UJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFJlcGx5cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUkVQTFlTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZXNldENvbW1lbnQgPSAoKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlJFU0VUX0NPTU1FTlQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ29tbWVudCA9IChkYXRhKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlVQREFURV9DT01NRU5ULFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChkYXRhKSA9PntcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpERUxFVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6ZGF0YVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFJFU0VUX0NPTU1FTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVDpcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLnJvb3QgPT09IDApIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5Db21tZW50cyA9IHN0YXRlLmNvbW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudHMgPSBbY29tbWVudCwgLi4ub3JpZ2luQ29tbWVudHNdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IG5ld0NvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRlbXBsaXN0ID0gWy4uLnN0YXRlLmNvbW1lbnRdXHJcbiAgICAgICAgY29uc3QgbmV3UmVwbHkgPSB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBsaXN0LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXVxyXG4gICAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6dGVtcGxpc3QsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVFM6XHJcbiAgICAgIGNvbnN0IGFkZGVkQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudCwgLi4uYWN0aW9uLmRhdGFdXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDogYWRkZWRDb21tZW50cyxcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjYXNlIFVQREFURV9DT01NRU5UOlxyXG4gICAgICBsZXQgdXBkYXRlZENvbW1lbnQgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHVwZGF0ZWRDb21tZW50LmZvckVhY2godj0+e1xyXG4gICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgdi51cGRhdGVkPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udXBkYXRlZENvbW1lbnRdXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NPTU1FTlQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgbGV0IHRlbXAgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHRlbXAuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YSl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQ9J+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJ1xyXG4gICAgICAgICAgdi5pc1dyaXRlcj1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udGVtcF1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuaW1wb3J0IGJvYXJkIGZyb20gJy4vYm9hcmQnXHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSdcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50J1xyXG5cclxuaW1wb3J0IHsgcGVyc2lzdFJldWRlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsIGJvYXJkLCBjYXRlZ29yeSwgYXJ0aWNsZSxjb21tZW50XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiBmYWxzZSxcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBpbWFnZTogJy9kZWZhdWx0UHJvZmlsLnBuZycsXHJcbiAgdXNlcl9pZDpudWxsLFxyXG59XHJcblxyXG5cclxuY29uc3QgVVNFUl9VUERBVEVfQUNUSU9OID0gJ1VTRVJfVVBEQVRFX0FDVElPTidcclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyVXBkYXRlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpVU0VSX1VQREFURV9BQ1RJT04sXHJcbiAgICBkYXRhOmRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fUkVRVUVTVCxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgaW1hZ2U6IGFjdGlvbi5kYXRhLmltYWdlLFxyXG4gICAgICAgIHVzZXJfaWQ6YWN0aW9uLmRhdGEudXNlcl9pZCxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfVVBEQVRFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuaWNrbmFtZTphY3Rpb24uZGF0YS5uaWNrbmFtZSxcclxuICAgICAgICBpbWFnZTogYWN0aW9uLmRhdGEuaW1hZ2UsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIlxyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IGNyZWF0ZVNhZ2EgZnJvbSAncmVkdXgtc2FnYSdcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2EvaW5kZXgnXHJcblxyXG5cclxuXHJcbi8vL2Zyb20gICBodHRwczovL2dpdGh1Yi5jb20vZmF6bHVsa2FyaW13ZWIvd2l0aC1uZXh0LXJlZHV4LXdyYXBwZXItcmVkdXgtcGVyc2lzdCAg64Sl7Iqk7Yq4IOumrOuNleyKpCDtjbzsi5zsiqTtirjsl5Ag64+E7JuA7J2EIOykgCAg6rOg66eI7Jq0IOu2hOuTpF5eXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBsb2dnZXRyTWlkZGVsd2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGFjdGlvbik7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGRpc3BhdGNoKTsgXHJcbiAgLy8gY29uc29sZS5sb2coZ2V0U3RhdGUpO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYSgpOyBcclxuXHJcbiAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuICAvLyBTdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSkgXHJcblxyXG4gIHJldHVybiBTdG9yZVxyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoeyBpc1NlcnZlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dldHJNaWRkZWx3YXJlLCB0aHVua01pZGRsZXdhcmVdO1xyXG4gIC8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTsgXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIikuZGVmYXVsdDtcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAgICBrZXk6IFwicm9vdFwiLFxyXG4gICAgICBzdG9yYWdlLFxyXG4gICAgICB3aGl0ZWxpc3Q6IFtcImFydGljbGVcIiwgXCJib2FyZFwiLCBcInVzZXJcIl0sXHJcbiAgICAgIGJsYWNrbGlzdDpbJ2NvbW1lbnQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcik7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0ZWRSZWR1Y2VyLCBlbmhhbmNlcik7XHJcblxyXG4gICAgc3RvcmUuX19wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGF2ZWxvcG1lbnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==