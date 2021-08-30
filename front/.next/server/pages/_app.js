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
        user_id: action.data.user_id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiY29tbWVudHMiLCJjb21tZW50X3R5cGUiLCJza2lwIiwiZGVmYXVsdENvbW1lbnQiLCJjb21tZW50X2lkIiwid3JpdGVyX25pY2siLCJyb290IiwiaW1hZ2UiLCJ1cGRhdGVkIiwicmVwbHlfY250IiwidGFyZ2V0IiwidGFyZ2V0X2lkeCIsInRhcmdldF9uaWNrIiwicmVwbHlzIiwiU0hPV19BUlRJQ0xFX1JFUVVFU1QiLCJTSE9XX0FSVElDTEVfU1VDQ0VTUyIsIlNIT1dfQVJUSUNMRV9FUlJPUiIsIklOU0VSVF9CX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0JfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQl9MSUtFX0FDVElPTiIsIkRFTEVURV9CX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0JfTElLRV9BQ1RJT04iLCJVUERBVEVfQl9ESVNMSUtFX0FDVElPTiIsIklOU0VSVF9DX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0NfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQ19MSUtFX0FDVElPTiIsIkRFTEVURV9DX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0NfTElLRV9BQ1RJT04iLCJVUERBVEVfQ19ESVNMSUtFX0FDVElPTiIsIkNIQU5HRV9DT01NRU5UX1RZUEUiLCJBRERfQ09NTUVOVCIsIkdFVF9DT01NRU5UUyIsIkFkZF9SRVBMWSIsIkdFVF9SRVBMWVMiLCJDTEVBUl9SRVBMWVMiLCJERUxFVEVfQ09NTUVOVCIsIkRFTEVURV9SRVBMWSIsIlVQREFURV9DT01NRU5UIiwiVVBEQVRFX1JFUExZIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiSW5zZXJ0Q0xpa2VBY3Rpb24iLCJEZWxldGVDTGlrZUFjdGlvbiIsIlVwZGF0ZUNMaWtlQWN0aW9uIiwiQWRkQ29tbWVudCIsIkdldENvbW1lbnRzIiwiQWRkUmVwbHkiLCJHZXRSZXBseXMiLCJDbGVhclJlcGx5cyIsIlVwZGF0ZUNvbW1lbnQiLCJVcGRhdGVSZXBseSIsIkRlbGV0ZUNvbW1lbnQiLCJEZWxldGVSZXBseSIsIkNoYW5nZUNvbW1lbnRUeXBlIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJhY3Rpb24iLCJmb3JFYWNoIiwidiIsImMiLCJyIiwibmV3Q29tbWVudCIsInRlbXBDb21tZW50cyIsIm5ld1JlcGx5IiwicmVwbHl0ZW1wIiwicmVwbHlzdGVtcCIsImNoZWNrIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInVwZGF0ZUNvbW1lbnRzIiwidXBkYXRlUmVwbHkiLCJjbGVhclJlcGx5cyIsImRsdENvbW1lbnRzIiwiZGx0UmVwbHkiLCJzZWFyY2giLCJrZXl3b3JkIiwicGFnZSIsInJvd3MiLCJwYWdlYmxvY2siLCJlbmRwYWdlIiwibGlzdCIsIlNIT1dfTElTVF9SRVFVRVNUIiwiU0hPV19MSVNUX1NVQ0NFU1MiLCJTSE9XX0xJU1RfRVJST1IiLCJERUxFVEVfQVJUSUNMRV9SRVFVRVNUIiwiREVMRVRFX0FSVElDTEVfU1VDQ0VTUyIsIkRFTEVURV9BUlRJQ0xFX0VSUk9SIiwiQ1JFQVRFX0FSVElDTEVfQUNUSU9OIiwiU2hvd0xpc3RBY3Rpb24iLCJTaG93TGlzdFJlcXVlc3QiLCJyZXN1bHQiLCJTaG93TGlzdFN1Y2Nlc3MiLCJTaG93TGlzdEVycm9yIiwiRGVsZXRlQXJ0aWNsZUFjdGlvbiIsIkRlbGV0ZUFydGljbGVSZXF1ZXN0IiwiRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MiLCJEZWxldGVBcnRpY2xlRXJyb3IiLCJDcmVhdGVBcnRpY2xlQWN0aW9uIiwicmVzdWx0cyIsInRvdGFsUGFnZSIsImlkIiwibmV3TGlzdCIsIm1hcCIsIm1lbnUiLCJjYXRlZ29yeSIsInVybCIsImNvbW1lbnQiLCJBRERfQ09NTUVOVFMiLCJSRVNFVF9DT01NRU5UIiwiQWRkQ29tbWVudHMiLCJBZGRSZXBseXMiLCJBRERfUkVQTFlTIiwiUmVzZXRDb21tZW50Iiwib3JpZ2luQ29tbWVudHMiLCJuZXdDb21tZW50cyIsInRlbXBsaXN0IiwiYWRkZWRDb21tZW50cyIsInVwZGF0ZWRDb21tZW50IiwidGVtcCIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwiYm9hcmQiLCJhcnRpY2xlIiwiSXNMb2dpbiIsInVzZXJfaWQiLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJVc2VyTG9naW5SZXF1ZXN0IiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwiVXNlckxvZ291dEFjdGlvbiIsImxvZ2dldHJNaWRkZWx3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwiZW5oYW5jZXIiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInJlcXVpcmUiLCJzdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsImJsYWNrbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUM3QixRQUFNQyxLQUFLLEdBQUdDLHFEQUFRLENBQUVDLEtBQUQsSUFBV0EsS0FBWixDQUF0QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQywyQkFGUDtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBT0U7QUFDRSxZQUFJLEVBQUMsb0VBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWNFLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0UsOERBQUMsd0VBQUQ7QUFBYSxpQkFBUyxFQUFFRixLQUFLLENBQUNHLFdBQTlCO0FBQTJDLGVBQU8sZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcEQ7QUFBQSwrQkFDRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBLGtCQURGO0FBc0JELENBeEJEOztBQXlCQSwrREFBZUMsb0VBQUEsQ0FBa0JOLEdBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcydcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwidHJ1ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8Q29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfSBsb2FkaW5nPXs8ZGl2PkxvYWRpbmc8L2Rpdj59PlxyXG4gICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcclxuIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkZGluZzogdHJ1ZSxcclxuICBib2FyZF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgc3ViamVjdDogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgdXBkYXRlOiBudWxsLFxyXG4gIGhpdDogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIGlzTGlrZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICBkZWw6IG51bGwsXHJcbiAgaXNXcml0ZXI6IGZhbHNlLFxyXG4gIGNvbW1lbnRfY250OiAwLFxyXG4gIGNvbW1lbnRzOiBbXSxcclxuICBjb21tZW50X3R5cGU6J2xpa2UnLFxyXG4gIHNraXA6MCxcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0Q29tbWVudCA9IHtcclxuICBib2FyZF9pZDogbnVsbCxcclxuICBjb21tZW50X2lkOiBudWxsLFxyXG4gIHdyaXRlcjogbnVsbCxcclxuICB3cml0ZXJfbmljazogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIHJvb3Q6IDAsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIGltYWdlOiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlcGx5X2NudDogMCxcclxuICB0YXJnZXQ6IDAsXHJcbiAgdGFyZ2V0X2lkeDogbnVsbCxcclxuICB0YXJnZXRfbmljazogbnVsbCxcclxuICBpc1dyaXRlcjogdHJ1ZSxcclxuICBpc0xpa2U6IG51bGwsXHJcbiAgcmVwbHlzOiBbXSxcclxuICBza2lwOjAsXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9SRVFVRVNUID0gJ1NIT1dfQVJUSUNMRV9SRVFVRVNUJ1xyXG5jb25zdCBTSE9XX0FSVElDTEVfU1VDQ0VTUyA9ICdTSE9XX0FSVElDTEVfU1VDQ0VTUydcclxuY29uc3QgU0hPV19BUlRJQ0xFX0VSUk9SID0gJ1NIT1dfQVJUSUNMRV9FUlJPUidcclxuXHJcbmNvbnN0IElOU0VSVF9CX0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0JfTElLRV9BQ1RJT04gPSAnREVMRVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0RJU0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQl9MSUtFX0FDVElPTiA9ICdVUERBVEVfQl9MSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfRElTTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfRElTTElLRV9BQ1RJT04nXHJcblxyXG5jb25zdCBJTlNFUlRfQ19MSUtFX0FDVElPTiA9ICdJTlNFUlRfQ19MSUtFX0FDVElPTidcclxuY29uc3QgSU5TRVJUX0NfRElTTElLRV9BQ1RJT04gPSAnSU5TRVJUX0NfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9DX0xJS0VfQUNUSU9OID0gJ0RFTEVURV9DX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQ19ESVNMSUtFX0FDVElPTiA9ICdERUxFVEVfQ19ESVNMSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0NfTElLRV9BQ1RJT04gPSAnVVBEQVRFX0NfTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9DX0RJU0xJS0VfQUNUSU9OID0gJ1VQREFURV9DX0RJU0xJS0VfQUNUSU9OJ1xyXG5cclxuY29uc3QgQ0hBTkdFX0NPTU1FTlRfVFlQRSA9ICdDSEFOR0VfQ09NTUVOVF9UWVBFJ1xyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBHRVRfQ09NTUVOVFMgPSAnR0VUX0NPTU1FTlRTJztcclxuY29uc3QgQWRkX1JFUExZID0gJ0FkZF9SRVBMWSc7XHJcbmNvbnN0IEdFVF9SRVBMWVMgPSAnR0VUX1JFUExZUyc7XHJcbmNvbnN0IENMRUFSX1JFUExZUyA9ICdDTEVBUl9SRVBMWVMnO1xyXG5jb25zdCBERUxFVEVfQ09NTUVOVCA9ICdERUxFVEVfQ09NTUVOVCc7XHJcbmNvbnN0IERFTEVURV9SRVBMWSA9ICdERUxFVEVfUkVQTFknO1xyXG5jb25zdCBVUERBVEVfQ09NTUVOVCA9ICdVUERBVEVfQ09NTUVOVCdcclxuY29uc3QgVVBEQVRFX1JFUExZID0gJ1VQREFURV9SRVBMWSdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChTaG93QXJ0aWNsZVJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFNob3dBcnRpY2xlU3VjY2VzcyhkYXRhKSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0FydGljbGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW5zZXJ0Qkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQl9MSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0JfRElTTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQl9MSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9CX0RJU0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9CX0xJS0VfQUNUSU9OLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQl9ESVNMSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBJbnNlcnRDTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblxyXG4gIGlmIChkYXRhLmlzTGlrZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0NfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9DX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUNMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHJcbiAgaWYgKGRhdGEuaXNMaWtlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQ19MSUtFX0FDVElPTixcclxuICAgICAgZGF0YTpkYXRhXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9DX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOmRhdGEsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ0xpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhLmlzTGlrZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0NfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6ZGF0YVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ19ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTpkYXRhXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50ID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5ULFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXRDb21tZW50cyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEdFVF9DT01NRU5UUyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRSZXBseSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFkZF9SRVBMWSxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXRSZXBseXMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBHRVRfUkVQTFlTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhclJlcGx5cyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENMRUFSX1JFUExZUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVQREFURV9DT01NRU5ULFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVSZXBseSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVQREFURV9SRVBMWSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDb21tZW50VHlwZSA9IChkYXRhKT0+e1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOkNIQU5HRV9DT01NRU5UX1RZUEUsXHJcbiAgICBkYXRhOmRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgc2tpcDoxMCxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9MSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkICsgMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBudWxsLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkIC0gMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCAtIDEsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkICsgMSxcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIElOU0VSVF9DX0xJS0VfQUNUSU9OOlxyXG4gICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPXRydWU7XHJcbiAgICAgICAgICAgIHYubGlrZWQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPXRydWU7XHJcbiAgICAgICAgICAgICAgICByLmxpa2VkKys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGNhc2UgSU5TRVJUX0NfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIGlmKGFjdGlvbi5kYXRhLnJvb3Q9PTApe1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgdi5pc0xpa2U9ZmFsc2U7XHJcbiAgICAgICAgICAgIHYuZGlzbGlrZWQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgci5kaXNsaWtlZCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIERFTEVURV9DX0xJS0VfQUNUSU9OOlxyXG4gICAgIGlmKGFjdGlvbi5kYXRhLnJvb3Q9PTApe1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgdi5pc0xpa2U9bnVsbDtcclxuICAgICAgICAgICAgdi5saWtlZC0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjPT57XHJcbiAgICAgICAgICBpZihjLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLnJvb3Qpe1xyXG4gICAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgICBpZihyLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICAgICAgci5pc0xpa2U9bnVsbDtcclxuICAgICAgICAgICAgICAgIHIubGlrZWQtLTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9DX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPW51bGw7XHJcbiAgICAgICAgICAgIHYuZGlzbGlrZWQtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPW51bGw7XHJcbiAgICAgICAgICAgICAgICByLmRpc2xpa2VkLS07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVQREFURV9DX0xJS0VfQUNUSU9OOlxyXG4gICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPXRydWU7XHJcbiAgICAgICAgICAgIHYuZGlzbGlrZWQtLTtcclxuICAgICAgICAgICAgdi5saWtlZCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjPT57XHJcbiAgICAgICAgICBpZihjLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLnJvb3Qpe1xyXG4gICAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgICBpZihyLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICAgICAgci5pc0xpa2U9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHIuZGlzbGlrZWQtLTtcclxuICAgICAgICAgICAgICAgIHIubGlrZWQrKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFVQREFURV9DX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPWZhbHNlO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkKys7XHJcbiAgICAgICAgICAgIHYubGlrZWQtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgci5kaXNsaWtlZCsrO1xyXG4gICAgICAgICAgICAgICAgci5saWtlZC0tO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQUREX0NPTU1FTlQ6XHJcbiAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7IC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IFtuZXdDb21tZW50LCAuLi5zdGF0ZS5jb21tZW50c10sXHJcbiAgICAgICAgY29tbWVudF9jbnQ6IHN0YXRlLmNvbW1lbnRfY250ICsgMSxcclxuICAgICAgfVxyXG5cclxuICAgIC8vL+ykkeuzteuQmOuKlOqxsCDslYTrnpggcmVwbHlz7JeQ7IScIOygnOqxsO2VnOqxsOyymOufvCDsoJzqsbDtlbTso7zquLAuXHJcbiAgICBjYXNlIEdFVF9DT01NRU5UUzpcclxuICAgICAgbGV0IHRlbXBDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50cywgLi4uYWN0aW9uLmRhdGFdO1xyXG4gICAgICAvLyBjb25zdCBjb21tZW50cz1bXTtcclxuICAgICAgLy8gY29uc3QgY29tbWVudENoZWNrID0gW107XHJcbiAgICAgIC8vIGZvcihsZXQgaSA9IDA7IGk8dGVtcENvbW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgLy8gICBpZighY29tbWVudENoZWNrLmluY2x1ZGVzKHRlbXBDb21tZW50c1tpXS5jb21tZW50X2lkKSl7XHJcbiAgICAgIC8vICAgICBjb21tZW50Q2hlY2sucHVzaCh0ZW1wQ29tbWVudHNbaV0uY29tbWVudF9pZClcclxuICAgICAgLy8gICAgIGNvbW1lbnRzLnB1c2godGVtcENvbW1lbnRzW2ldKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiB0ZW1wQ29tbWVudHMsXHJcbiAgICAgICAgc2tpcDpzdGF0ZS5za2lwKzEwLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBZGRfUkVQTFk6XHJcbiAgICAgIGNvbnN0IG5ld1JlcGx5ID0geyAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEgfVxyXG4gICAgICBsZXQgcmVwbHl0ZW1wID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgcmVwbHl0ZW1wLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5yb290KSB7XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IFtuZXdSZXBseSwgLi4udi5yZXBseXNdO1xyXG4gICAgICAgICAgdi5yZXBseV9jbnQgPSB2LnJlcGx5X2NudCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiByZXBseXRlbXAsXHJcbiAgICAgICAgY29tbWVudF9jbnQ6IHN0YXRlLmNvbW1lbnRfY250ICsgMSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgR0VUX1JFUExZUzpcclxuICAgICAgY29uc3Qgcm9vdCA9IGFjdGlvbi5kYXRhWzBdLnJvb3RcclxuICAgICAgbGV0IHJlcGx5c3RlbXAgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICByZXBseXN0ZW1wLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSByb290KSB7XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IFsuLi52LnJlcGx5cywgLi4uYWN0aW9uLmRhdGFdO1xyXG4gICAgICAgICAgbGV0IGNoZWNrID0gW107XHJcbiAgICAgICAgICBsZXQgcmVwbHlzID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYucmVwbHlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2suaW5jbHVkZXModi5yZXBseXNbaV0uY29tbWVudF9pZCkpIHtcclxuICAgICAgICAgICAgICBjaGVjay5wdXNoKHYucmVwbHlzW2ldLmNvbW1lbnRfaWQpXHJcbiAgICAgICAgICAgICAgcmVwbHlzLnB1c2godi5yZXBseXNbaV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHYucmVwbHlzID0gcmVwbHlzXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiByZXBseXN0ZW1wLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBVUERBVEVfQ09NTUVOVDpcclxuICAgICAgbGV0IHVwZGF0ZUNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICB1cGRhdGVDb21tZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEuY29tbWVudF9pZCkge1xyXG4gICAgICAgICAgYy51cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGMuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHVwZGF0ZUNvbW1lbnRzXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFVQREFURV9SRVBMWTpcclxuICAgICAgbGV0IHVwZGF0ZVJlcGx5ID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICB1cGRhdGVSZXBseS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5jb21tZW50X2lkKSB7XHJcbiAgICAgICAgICAgICAgci51cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICByLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHVwZGF0ZVJlcGx5LFxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgY2FzZSBDTEVBUl9SRVBMWVM6XHJcbiAgICAgIGxldCBjbGVhclJlcGx5cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgIGNsZWFyUmVwbHlzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YSkge1xyXG4gICAgICAgICAgdi5yZXBseXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGNsZWFyUmVwbHlzLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ09NTUVOVDpcclxuICAgICAgbGV0IGRsdENvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICBkbHRDb21tZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICAgIGMuZGVsID0gMTtcclxuICAgICAgICAgIGMuY29udGVudCA9ICfsgq3soJzrkJwg64yT6riA7J6F64uI64ukLidcclxuICAgICAgICAgIGMuaXNXcml0ZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGRsdENvbW1lbnRzXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9SRVBMWTpcclxuICAgICAgbGV0IGRsdFJlcGx5ID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICBkbHRSZXBseS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGlmIChjLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5jb21tZW50X2lkKSB7XHJcbiAgICAgICAgICAgICAgci5kZWwgPSAxO1xyXG4gICAgICAgICAgICAgIHIuY29udGVudCA9ICfsgq3soJzrkJwg64yT6riA7J6F64uI64ukLic7XHJcbiAgICAgICAgICAgICAgci5pc1dyaXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogZGx0UmVwbHksXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgQ0hBTkdFX0NPTU1FTlRfVFlQRTpcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Wy4uLmFjdGlvbi5kYXRhLmNvbW1lbnRzXSxcclxuICAgICAgICAgIGNvbW1lbnRfdHlwZTphY3Rpb24uZGF0YS50eXBlLFxyXG4gICAgICAgICAgc2tpcDphY3Rpb24uZGF0YS5jb21tZW50cy5sZW5ndGgsXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0eXBlOiAnYWxsJyxcclxuICBzZWFyY2g6IG51bGwsXHJcbiAga2V5d29yZDogbnVsbCxcclxuICBwYWdlOiAxLFxyXG4gIHJvd3M6IDMwLFxyXG4gIHBhZ2VibG9jazogW10sXHJcbiAgZW5kcGFnZTogbnVsbCxcclxuICBsaXN0OiBbXSxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0xJU1RfUkVRVUVTVCA9ICdTSE9XX0xJU1RfUkVRVUVTVCdcclxuY29uc3QgU0hPV19MSVNUX1NVQ0NFU1MgPSAnU0hPV19MSVNUX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfTElTVF9FUlJPUiA9ICdTSE9XX0xJU1RfRVJST1InXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QgPSAnREVMRVRFX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgREVMRVRFX0FSVElDTEVfU1VDQ0VTUyA9ICdERUxFVEVfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9FUlJPUiA9ICdERUxFVEVfQVJUSUNMRV9FUlJPUidcclxuY29uc3QgQ1JFQVRFX0FSVElDTEVfQUNUSU9OID0gJ0NSRUFURV9BUlRJQ0xFX0FDVElPTidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0xpc3RSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YTtcclxuICAgICAgcmVzdWx0LnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFNob3dMaXN0U3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93TGlzdEVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKERlbGV0ZUFydGljbGVTdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVBcnRpY2xlQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDUkVBVEVfQVJUSUNMRV9BQ1RJT04sXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0hPV19MSVNUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxpc3Q6IFsuLi5hY3Rpb24uZGF0YS5yZXN1bHRzXSxcclxuICAgICAgICBwYWdlOiBhY3Rpb24uZGF0YS5wYWdlLFxyXG4gICAgICAgIHJvd3M6IGFjdGlvbi5kYXRhLnJvd3MsXHJcbiAgICAgICAgcGFnZWJsb2NrOiBhY3Rpb24uZGF0YS5wYWdlYmxvY2ssXHJcbiAgICAgICAgZW5kcGFnZTogYWN0aW9uLmRhdGEudG90YWxQYWdlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGFjdGlvbi5kYXRhLmlkO1xyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnN0YXRlLmxpc3RdLm1hcCgodikgPT4ge1xyXG4gICAgICAgIGlmICh2LmlkID09IHRhcmdldCkge1xyXG4gICAgICAgICAgdi5zdWJqZWN0ID0gXCLsgq3soJzrkJwg6rKM7Iuc6riA7J6F64uI64ukLlwiXHJcbiAgICAgICAgICB2LmRlbCA9IDFcclxuICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhuZXdMaXN0KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4ubmV3TGlzdF0sXHJcblxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ1JFQVRFX0FSVElDTEVfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHR5cGU6ICdhbGwnLFxyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIG1lbnU6W1xyXG4gICAgeyBcclxuICAgIGlkOicxJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsXHJcbiAgICB1cmw6Jy9wb3N0cy8xJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMicsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgdXJsOicvcG9zdHMvMidcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzMnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic0JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgdXJsOicvcG9zdHMvNSdcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbnN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gc3RhdGVcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY29tbWVudDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRDb21tZW50ID0ge1xyXG4gIGJvYXJkX2lkOiBudWxsLFxyXG4gIGNvbW1lbnRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHdyaXRlcl9uaWNrOiBudWxsLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgcm9vdDogMCxcclxuICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgaW1hZ2U6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgdXBkYXRlZDogZmFsc2UsXHJcbiAgcmVwbHlfY250OiAwLFxyXG4gIHRhcmdldDogMCxcclxuICB0YXJnZXRfaWR4OiBudWxsLFxyXG4gIHRhcmdldF9uaWNrOiBudWxsLFxyXG4gIGlzV3JpdGVyOiB0cnVlLFxyXG4gIGlzTGlrZTogbnVsbCxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBBRERfQ09NTUVOVCA9ICdBRERfQ09NTUVOVCc7XHJcbmNvbnN0IEFERF9DT01NRU5UUyA9ICdBRERfQ09NTUVOVFMnO1xyXG5cclxuY29uc3QgUkVTRVRfQ09NTUVOVCA9ICdSRVNFVF9DT01NRU5UJztcclxuY29uc3QgREVMRVRFX0NPTU1FTlQgPSAnREVMRVRFX0NPTU1FTlQnO1xyXG5jb25zdCBVUERBVEVfQ09NTUVOVCA9ICdVUERBVEVfQ09NTUVOVCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnRzID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUmVwbHlzID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2V0Q29tbWVudCA9ICgpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6UkVTRVRfQ09NTUVOVCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVDb21tZW50ID0gKGRhdGEpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6VVBEQVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOmRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKGRhdGEpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOkRFTEVURV9DT01NRU5ULFxyXG4gICAgZGF0YTpkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgUkVTRVRfQ09NTUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGVcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UOlxyXG4gICAgICBpZiAoYWN0aW9uLmRhdGEucm9vdCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbkNvbW1lbnRzID0gc3RhdGUuY29tbWVudDtcclxuICAgICAgICBjb25zdCBjb21tZW50ID0ge1xyXG4gICAgICAgICAgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdDb21tZW50cyA9IFtjb21tZW50LCAuLi5vcmlnaW5Db21tZW50c107XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudDogbmV3Q29tbWVudHMsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdGVtcGxpc3QgPSBbLi4uc3RhdGUuY29tbWVudF1cclxuICAgICAgICBjb25zdCBuZXdSZXBseSA9IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcGxpc3QuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgICB2LnJlcGx5cyA9IFtuZXdSZXBseSwgLi4udi5yZXBseXNdXHJcbiAgICAgICAgICAgIHYucmVwbHlfY250ID0gdi5yZXBseV9jbnQgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudDp0ZW1wbGlzdCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UUzpcclxuICAgICAgY29uc3QgYWRkZWRDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50LCAuLi5hY3Rpb24uZGF0YV1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OiBhZGRlZENvbW1lbnRzLFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGNhc2UgVVBEQVRFX0NPTU1FTlQ6XHJcbiAgICAgIGxldCB1cGRhdGVkQ29tbWVudCA9IFsuLi5zdGF0ZS5jb21tZW50XTtcclxuICAgICAgdXBkYXRlZENvbW1lbnQuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgIHYuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgICB2LnVwZGF0ZWQ9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OlsuLi51cGRhdGVkQ29tbWVudF1cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ09NTUVOVDpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICBsZXQgdGVtcCA9IFsuLi5zdGF0ZS5jb21tZW50XTtcclxuICAgICAgdGVtcC5mb3JFYWNoKHY9PntcclxuICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhKXtcclxuICAgICAgICAgIHYuY29udGVudD0n7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC4nXHJcbiAgICAgICAgICB2LmlzV3JpdGVyPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50OlsuLi50ZW1wXVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5pbXBvcnQgYm9hcmQgZnJvbSAnLi9ib2FyZCdcclxuaW1wb3J0IGFydGljbGUgZnJvbSAnLi9hcnRpY2xlJ1xyXG5pbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbW1lbnQnXHJcblxyXG5pbXBvcnQgeyBwZXJzaXN0UmV1ZGVyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIlxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlciwgYm9hcmQsIGNhdGVnb3J5LCBhcnRpY2xlLGNvbW1lbnRcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gIElzTG9naW46IGZhbHNlLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGltYWdlOiAnL2RlZmF1bHRQcm9maWwucG5nJyxcclxuICB1c2VyX2lkOm51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5SZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1JFUVVFU1QsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fRVJST1IsXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IHRydWUsXHJcbiAgICAgICAgbmlja25hbWU6IGFjdGlvbi5kYXRhLm5pY2tuYW1lLFxyXG4gICAgICAgIGltYWdlOiBhY3Rpb24uZGF0YS5pbWFnZSxcclxuICAgICAgICB1c2VyX2lkOmFjdGlvbi5kYXRhLnVzZXJfaWQsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiXHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5cclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgY3JlYXRlU2FnYSBmcm9tICdyZWR1eC1zYWdhJ1xyXG4vLyBpbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYS9pbmRleCdcclxuXHJcblxyXG5cclxuLy8vZnJvbSAgIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXpsdWxrYXJpbXdlYi93aXRoLW5leHQtcmVkdXgtd3JhcHBlci1yZWR1eC1wZXJzaXN0ICDrhKXsiqTtirgg66as642V7IqkIO2NvOyLnOyKpO2KuOyXkCDrj4Tsm4DsnYQg7KSAICDqs6Drp4jsmrQg67aE65OkXl5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGxvZ2dldHJNaWRkZWx3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coYWN0aW9uKTsgXHJcbiAgLy8gY29uc29sZS5sb2coZGlzcGF0Y2gpOyBcclxuICAvLyBjb25zb2xlLmxvZyhnZXRTdGF0ZSk7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhKCk7IFxyXG5cclxuICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKVxyXG4gIC8vIFN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKSBcclxuXHJcbiAgcmV0dXJuIFN0b3JlXHJcbn1cclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICh7IGlzU2VydmVyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbbG9nZ2V0ck1pZGRlbHdhcmUsIHRodW5rTWlkZGxld2FyZV07XHJcbiAgLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdOyBcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKS5kZWZhdWx0O1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICAgIGtleTogXCJyb290XCIsXHJcbiAgICAgIHN0b3JhZ2UsXHJcbiAgICAgIHdoaXRlbGlzdDogW1wiYXJ0aWNsZVwiLCBcImJvYXJkXCIsIFwidXNlclwiXSxcclxuICAgICAgYmxhY2tsaXN0OlsnY29tbWVudCddXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIsIGVuaGFuY2VyKTtcclxuXHJcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkYXZlbG9wbWVudCdcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9