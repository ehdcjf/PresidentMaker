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
        type: action.data.type,
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
/* harmony import */ var _vote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vote */ "./reducers/vote.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9__);
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
  comment: _comment__WEBPACK_IMPORTED_MODULE_6__.default,
  vote: _vote__WEBPACK_IMPORTED_MODULE_7__.default
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

/***/ "./reducers/vote.js":
/*!**************************!*\
  !*** ./reducers/vote.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVote": function() { return /* binding */ UpdateVote; },
/* harmony export */   "UpdateVoteRequest": function() { return /* binding */ UpdateVoteRequest; },
/* harmony export */   "UpdateVoteSuccess": function() { return /* binding */ UpdateVoteSuccess; },
/* harmony export */   "UpdateVoteError": function() { return /* binding */ UpdateVoteError; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loading: false,
  error: false,
  gender: 0,
  minage: 0,
  maxage: 120,
  hometown: 0,
  residence: 0,
  vote19: 0,
  voteData: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: []
    }]
  }
};
const UPDATE_VOTE_REQUEST = 'UPDATE_VOTE_REQUEST';
const UPDATE_VOTE_SUCCESS = 'UPDATE_VOTE_SUCCESS';
const UPDATE_VOTE_ERROR = 'UPDATE_VOTE_ERROR';
const UpdateVote = data => {
  return dispatch => {
    dispatch(UpdateVoteRequest());

    try {
      data.success == true ? dispatch(UpdateVoteSuccess(data)) : dispatch(UpdateVoteError());
    } catch (e) {
      dispatch(UpdateVoteError());
    }
  };
};
const UpdateVoteRequest = () => {
  return {
    type: UPDATE_VOTE_REQUEST
  };
};
const UpdateVoteSuccess = data => {
  return {
    type: UPDATE_VOTE_SUCCESS,
    data: data
  };
};
const UpdateVoteError = () => {
  return {
    type: UPDATE_VOTE_ERROR
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VOTE_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case UPDATE_VOTE_SUCCESS:
      console.log('xxxxxxx');
      return _objectSpread(_objectSpread({}, state), {}, {
        voteData: _objectSpread(_objectSpread({}, state.voteData), {}, {
          labels: [...action.data.label],
          datasets: [_objectSpread(_objectSpread({}, state.voteData.datasets[0]), {}, {
            data: [...action.data.data],
            backgroundColor: [...action.data.color],
            hoverBackgroundColor: [...action.data.color]
          })]
        }),
        loadding: false
      });

    case UPDATE_VOTE_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false,
        error: true
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
      whitelist: ["user", "article", "board", 'vote'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvdm90ZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiY29tbWVudHMiLCJjb21tZW50X3R5cGUiLCJza2lwIiwiZGVmYXVsdENvbW1lbnQiLCJjb21tZW50X2lkIiwid3JpdGVyX25pY2siLCJyb290IiwiaW1hZ2UiLCJ1cGRhdGVkIiwicmVwbHlfY250IiwidGFyZ2V0IiwidGFyZ2V0X2lkeCIsInRhcmdldF9uaWNrIiwicmVwbHlzIiwiU0hPV19BUlRJQ0xFX1JFUVVFU1QiLCJTSE9XX0FSVElDTEVfU1VDQ0VTUyIsIlNIT1dfQVJUSUNMRV9FUlJPUiIsIklOU0VSVF9CX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0JfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQl9MSUtFX0FDVElPTiIsIkRFTEVURV9CX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0JfTElLRV9BQ1RJT04iLCJVUERBVEVfQl9ESVNMSUtFX0FDVElPTiIsIklOU0VSVF9DX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0NfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQ19MSUtFX0FDVElPTiIsIkRFTEVURV9DX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0NfTElLRV9BQ1RJT04iLCJVUERBVEVfQ19ESVNMSUtFX0FDVElPTiIsIkNIQU5HRV9DT01NRU5UX1RZUEUiLCJBRERfQ09NTUVOVCIsIkdFVF9DT01NRU5UUyIsIkFkZF9SRVBMWSIsIkdFVF9SRVBMWVMiLCJDTEVBUl9SRVBMWVMiLCJERUxFVEVfQ09NTUVOVCIsIkRFTEVURV9SRVBMWSIsIlVQREFURV9DT01NRU5UIiwiVVBEQVRFX1JFUExZIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiSW5zZXJ0Q0xpa2VBY3Rpb24iLCJEZWxldGVDTGlrZUFjdGlvbiIsIlVwZGF0ZUNMaWtlQWN0aW9uIiwiQWRkQ29tbWVudCIsIkdldENvbW1lbnRzIiwiQWRkUmVwbHkiLCJHZXRSZXBseXMiLCJDbGVhclJlcGx5cyIsIlVwZGF0ZUNvbW1lbnQiLCJVcGRhdGVSZXBseSIsIkRlbGV0ZUNvbW1lbnQiLCJEZWxldGVSZXBseSIsIkNoYW5nZUNvbW1lbnRUeXBlIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJhY3Rpb24iLCJmb3JFYWNoIiwidiIsImMiLCJyIiwibmV3Q29tbWVudCIsInRlbXBDb21tZW50cyIsIm5ld1JlcGx5IiwicmVwbHl0ZW1wIiwicmVwbHlzdGVtcCIsImNoZWNrIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInVwZGF0ZUNvbW1lbnRzIiwidXBkYXRlUmVwbHkiLCJjbGVhclJlcGx5cyIsImRsdENvbW1lbnRzIiwiZGx0UmVwbHkiLCJzZWFyY2giLCJrZXl3b3JkIiwicGFnZSIsInJvd3MiLCJwYWdlYmxvY2siLCJlbmRwYWdlIiwibGlzdCIsIlNIT1dfTElTVF9SRVFVRVNUIiwiU0hPV19MSVNUX1NVQ0NFU1MiLCJTSE9XX0xJU1RfRVJST1IiLCJERUxFVEVfQVJUSUNMRV9SRVFVRVNUIiwiREVMRVRFX0FSVElDTEVfU1VDQ0VTUyIsIkRFTEVURV9BUlRJQ0xFX0VSUk9SIiwiQ1JFQVRFX0FSVElDTEVfQUNUSU9OIiwiU2hvd0xpc3RBY3Rpb24iLCJTaG93TGlzdFJlcXVlc3QiLCJyZXN1bHQiLCJTaG93TGlzdFN1Y2Nlc3MiLCJTaG93TGlzdEVycm9yIiwiRGVsZXRlQXJ0aWNsZUFjdGlvbiIsIkRlbGV0ZUFydGljbGVSZXF1ZXN0IiwiRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MiLCJEZWxldGVBcnRpY2xlRXJyb3IiLCJDcmVhdGVBcnRpY2xlQWN0aW9uIiwicmVzdWx0cyIsInRvdGFsUGFnZSIsImlkIiwibmV3TGlzdCIsIm1hcCIsIm1lbnUiLCJjYXRlZ29yeSIsInVybCIsImNvbW1lbnQiLCJBRERfQ09NTUVOVFMiLCJSRVNFVF9DT01NRU5UIiwiQWRkQ29tbWVudHMiLCJBZGRSZXBseXMiLCJBRERfUkVQTFlTIiwiUmVzZXRDb21tZW50Iiwib3JpZ2luQ29tbWVudHMiLCJuZXdDb21tZW50cyIsInRlbXBsaXN0IiwiYWRkZWRDb21tZW50cyIsInVwZGF0ZWRDb21tZW50IiwidGVtcCIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwiYm9hcmQiLCJhcnRpY2xlIiwidm90ZSIsIklzTG9naW4iLCJ1c2VyX2lkIiwiVVNFUl9VUERBVEVfQUNUSU9OIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiVXNlckxvZ2luUmVxdWVzdCIsIlVzZXJMb2dpblN1Y2Nlc3MiLCJVc2VyTG9naW5FcnJvciIsIlVzZXJVcGRhdGVBY3Rpb24iLCJVc2VyTG9nb3V0QWN0aW9uIiwibG9hZGluZyIsImVycm9yIiwiZ2VuZGVyIiwibWluYWdlIiwibWF4YWdlIiwiaG9tZXRvd24iLCJyZXNpZGVuY2UiLCJ2b3RlMTkiLCJ2b3RlRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJVUERBVEVfVk9URV9SRVFVRVNUIiwiVVBEQVRFX1ZPVEVfU1VDQ0VTUyIsIlVQREFURV9WT1RFX0VSUk9SIiwiVXBkYXRlVm90ZSIsIlVwZGF0ZVZvdGVSZXF1ZXN0IiwiVXBkYXRlVm90ZVN1Y2Nlc3MiLCJVcGRhdGVWb3RlRXJyb3IiLCJsYWJlbCIsImNvbG9yIiwibG9nZ2V0ck1pZGRlbHdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsIlN0b3JlIiwiY3JlYXRlU3RvcmUiLCJlbmhhbmNlciIsIm1ha2VTdG9yZSIsImlzU2VydmVyIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwicmVxdWlyZSIsInN0b3JhZ2UiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwid2hpdGVsaXN0IiwiYmxhY2tsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQzdCLFFBQU1DLEtBQUssR0FBR0MscURBQVEsQ0FBRUMsS0FBRCxJQUFXQSxLQUFaLENBQXRCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDLDJCQUZQO0FBR0UsbUJBQVcsRUFB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LCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZz17PGRpdj5Mb2FkaW5nPC9kaXY+fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IHRydWUsXHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHN1YmplY3Q6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIHVwZGF0ZTogbnVsbCxcclxuICBoaXQ6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICBpc0xpa2U6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgZGVsOiBudWxsLFxyXG4gIGlzV3JpdGVyOiBmYWxzZSxcclxuICBjb21tZW50X2NudDogMCxcclxuICBjb21tZW50czogW10sXHJcbiAgY29tbWVudF90eXBlOidsaWtlJyxcclxuICBza2lwOjAsXHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdENvbW1lbnQgPSB7XHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgY29tbWVudF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgd3JpdGVyX25pY2s6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICByb290OiAwLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICB1cGRhdGVkOiBmYWxzZSxcclxuICByZXBseV9jbnQ6IDAsXHJcbiAgdGFyZ2V0OiAwLFxyXG4gIHRhcmdldF9pZHg6IG51bGwsXHJcbiAgdGFyZ2V0X25pY2s6IG51bGwsXHJcbiAgaXNXcml0ZXI6IHRydWUsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG4gIHJlcGx5czogW10sXHJcbiAgc2tpcDowLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTSE9XX0FSVElDTEVfUkVRVUVTVCA9ICdTSE9XX0FSVElDTEVfUkVRVUVTVCdcclxuY29uc3QgU0hPV19BUlRJQ0xFX1NVQ0NFU1MgPSAnU0hPV19BUlRJQ0xFX1NVQ0NFU1MnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9FUlJPUiA9ICdTSE9XX0FSVElDTEVfRVJST1InXHJcblxyXG5jb25zdCBJTlNFUlRfQl9MSUtFX0FDVElPTiA9ICdJTlNFUlRfQl9MSUtFX0FDVElPTidcclxuY29uc3QgSU5TRVJUX0JfRElTTElLRV9BQ1RJT04gPSAnSU5TRVJUX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9CX0xJS0VfQUNUSU9OID0gJ0RFTEVURV9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQl9ESVNMSUtFX0FDVElPTiA9ICdERUxFVEVfQl9ESVNMSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0JfTElLRV9BQ1RJT04gPSAnVVBEQVRFX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OID0gJ1VQREFURV9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5cclxuY29uc3QgSU5TRVJUX0NfTElLRV9BQ1RJT04gPSAnSU5TRVJUX0NfTElLRV9BQ1RJT04nXHJcbmNvbnN0IElOU0VSVF9DX0RJU0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9DX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQ19MSUtFX0FDVElPTiA9ICdERUxFVEVfQ19MSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0NfRElTTElLRV9BQ1RJT04gPSAnREVMRVRFX0NfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9DX0xJS0VfQUNUSU9OID0gJ1VQREFURV9DX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQ19ESVNMSUtFX0FDVElPTiA9ICdVUERBVEVfQ19ESVNMSUtFX0FDVElPTidcclxuXHJcbmNvbnN0IENIQU5HRV9DT01NRU5UX1RZUEUgPSAnQ0hBTkdFX0NPTU1FTlRfVFlQRSdcclxuXHJcbmNvbnN0IEFERF9DT01NRU5UID0gJ0FERF9DT01NRU5UJztcclxuY29uc3QgR0VUX0NPTU1FTlRTID0gJ0dFVF9DT01NRU5UUyc7XHJcbmNvbnN0IEFkZF9SRVBMWSA9ICdBZGRfUkVQTFknO1xyXG5jb25zdCBHRVRfUkVQTFlTID0gJ0dFVF9SRVBMWVMnO1xyXG5jb25zdCBDTEVBUl9SRVBMWVMgPSAnQ0xFQVJfUkVQTFlTJztcclxuY29uc3QgREVMRVRFX0NPTU1FTlQgPSAnREVMRVRFX0NPTU1FTlQnO1xyXG5jb25zdCBERUxFVEVfUkVQTFkgPSAnREVMRVRFX1JFUExZJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcbmNvbnN0IFVQREFURV9SRVBMWSA9ICdVUERBVEVfUkVQTFknXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goU2hvd0FydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93QXJ0aWNsZVN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93QXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19BUlRJQ0xFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEluc2VydEJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0JfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQl9ESVNMSUtFX0FDVElPTixcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQkxpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQl9MSUtFX0FDVElPTixcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgSW5zZXJ0Q0xpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cclxuICBpZiAoZGF0YS5pc0xpa2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9DX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQ19ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblxyXG4gIGlmIChkYXRhLmlzTGlrZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0NfTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6ZGF0YVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBERUxFVEVfQ19ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTpkYXRhLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YS5pc0xpa2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9DX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOmRhdGFcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0NfRElTTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6ZGF0YVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0Q29tbWVudHMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBHRVRfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBZGRfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0UmVwbHlzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogR0VUX1JFUExZUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJSZXBseXMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDTEVBUl9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUmVwbHkgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfUkVQTFksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVJlcGx5ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX1JFUExZLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ29tbWVudFR5cGUgPSAoZGF0YSk9PntcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpDSEFOR0VfQ09NTUVOVF9UWVBFLFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0hPV19BUlRJQ0xFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIHNraXA6MTAsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIGxpa2VkOiBzdGF0ZS5saWtlZCArIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgSU5TRVJUX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgKyAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9CX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogbnVsbCxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVQREFURV9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgKyAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCAtIDEsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0JfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgLSAxLFxyXG4gICAgICAgIGRpc2xpa2VkOiBzdGF0ZS5kaXNsaWtlZCArIDEsXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBJTlNFUlRfQ19MSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICB2Lmxpa2VkKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgci5saWtlZCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIElOU0VSVF9DX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPWZhbHNlO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHIuZGlzbGlrZWQrKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ19MSUtFX0FDVElPTjpcclxuICAgICBpZihhY3Rpb24uZGF0YS5yb290PT0wKXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgIHYuaXNMaWtlPW51bGw7XHJcbiAgICAgICAgICAgIHYubGlrZWQtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPW51bGw7XHJcbiAgICAgICAgICAgICAgICByLmxpa2VkLS07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ19ESVNMSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT1udWxsO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1udWxsO1xyXG4gICAgICAgICAgICAgICAgci5kaXNsaWtlZC0tO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQ19MSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICB2LmRpc2xpa2VkLS07XHJcbiAgICAgICAgICAgIHYubGlrZWQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goYz0+e1xyXG4gICAgICAgICAgaWYoYy5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5yb290KXtcclxuICAgICAgICAgICAgYy5yZXBseXMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgICAgaWYoci5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgICAgIHIuaXNMaWtlPXRydWU7XHJcbiAgICAgICAgICAgICAgICByLmRpc2xpa2VkLS07XHJcbiAgICAgICAgICAgICAgICByLmxpa2VkKys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBVUERBVEVfQ19ESVNMSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgdi5kaXNsaWtlZCsrO1xyXG4gICAgICAgICAgICB2Lmxpa2VkLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHIuZGlzbGlrZWQrKztcclxuICAgICAgICAgICAgICAgIHIubGlrZWQtLTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UOlxyXG4gICAgICBjb25zdCBuZXdDb21tZW50ID0geyAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbbmV3Q29tbWVudCwgLi4uc3RhdGUuY29tbWVudHNdLFxyXG4gICAgICAgIGNvbW1lbnRfY250OiBzdGF0ZS5jb21tZW50X2NudCArIDEsXHJcbiAgICAgIH1cclxuXHJcbiAgICAvLy/spJHrs7XrkJjripTqsbAg7JWE656YIHJlcGx5c+yXkOyEnCDsoJzqsbDtlZzqsbDsspjrn7wg7KCc6rGw7ZW07KO86riwLlxyXG4gICAgY2FzZSBHRVRfQ09NTUVOVFM6XHJcbiAgICAgIGxldCB0ZW1wQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHMsIC4uLmFjdGlvbi5kYXRhXTtcclxuICAgICAgLy8gY29uc3QgY29tbWVudHM9W107XHJcbiAgICAgIC8vIGNvbnN0IGNvbW1lbnRDaGVjayA9IFtdO1xyXG4gICAgICAvLyBmb3IobGV0IGkgPSAwOyBpPHRlbXBDb21tZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIC8vICAgaWYoIWNvbW1lbnRDaGVjay5pbmNsdWRlcyh0ZW1wQ29tbWVudHNbaV0uY29tbWVudF9pZCkpe1xyXG4gICAgICAvLyAgICAgY29tbWVudENoZWNrLnB1c2godGVtcENvbW1lbnRzW2ldLmNvbW1lbnRfaWQpXHJcbiAgICAgIC8vICAgICBjb21tZW50cy5wdXNoKHRlbXBDb21tZW50c1tpXSlcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogdGVtcENvbW1lbnRzLFxyXG4gICAgICAgIHNraXA6c3RhdGUuc2tpcCsxMCxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQWRkX1JFUExZOlxyXG4gICAgICBjb25zdCBuZXdSZXBseSA9IHsgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhIH1cclxuICAgICAgbGV0IHJlcGx5dGVtcCA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgIHJlcGx5dGVtcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEucm9vdCkge1xyXG4gICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXTtcclxuICAgICAgICAgIHYucmVwbHlfY250ID0gdi5yZXBseV9jbnQgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogcmVwbHl0ZW1wLFxyXG4gICAgICAgIGNvbW1lbnRfY250OiBzdGF0ZS5jb21tZW50X2NudCArIDEsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEdFVF9SRVBMWVM6XHJcbiAgICAgIGNvbnN0IHJvb3QgPSBhY3Rpb24uZGF0YVswXS5yb290XHJcbiAgICAgIGxldCByZXBseXN0ZW1wID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgcmVwbHlzdGVtcC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gcm9vdCkge1xyXG4gICAgICAgICAgdi5yZXBseXMgPSBbLi4udi5yZXBseXMsIC4uLmFjdGlvbi5kYXRhXTtcclxuICAgICAgICAgIGxldCBjaGVjayA9IFtdO1xyXG4gICAgICAgICAgbGV0IHJlcGx5cyA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2LnJlcGx5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrLmluY2x1ZGVzKHYucmVwbHlzW2ldLmNvbW1lbnRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2sucHVzaCh2LnJlcGx5c1tpXS5jb21tZW50X2lkKVxyXG4gICAgICAgICAgICAgIHJlcGx5cy5wdXNoKHYucmVwbHlzW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IHJlcGx5c1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogcmVwbHlzdGVtcCxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgVVBEQVRFX0NPTU1FTlQ6XHJcbiAgICAgIGxldCB1cGRhdGVDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgdXBkYXRlQ29tbWVudHMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpIHtcclxuICAgICAgICAgIGMudXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICBjLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiB1cGRhdGVDb21tZW50c1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBVUERBVEVfUkVQTFk6XHJcbiAgICAgIGxldCB1cGRhdGVSZXBseSA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgdXBkYXRlUmVwbHkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEuY29tbWVudF9pZCkge1xyXG4gICAgICAgICAgICAgIHIudXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgci5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiB1cGRhdGVSZXBseSxcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNhc2UgQ0xFQVJfUkVQTFlTOlxyXG4gICAgICBsZXQgY2xlYXJSZXBseXMgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICBjbGVhclJlcGx5cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICAgIHYucmVwbHlzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBjbGVhclJlcGx5cyxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NPTU1FTlQ6XHJcbiAgICAgIGxldCBkbHRDb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgZGx0Q29tbWVudHMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhKSB7XHJcbiAgICAgICAgICBjLmRlbCA9IDE7XHJcbiAgICAgICAgICBjLmNvbnRlbnQgPSAn7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC4nXHJcbiAgICAgICAgICBjLmlzV3JpdGVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBkbHRDb21tZW50c1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfUkVQTFk6XHJcbiAgICAgIGxldCBkbHRSZXBseSA9IFsuLi5zdGF0ZS5jb21tZW50c11cclxuICAgICAgZGx0UmVwbHkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICBpZiAoYy5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvbW1lbnRfaWQgPT0gYWN0aW9uLmRhdGEuY29tbWVudF9pZCkge1xyXG4gICAgICAgICAgICAgIHIuZGVsID0gMTtcclxuICAgICAgICAgICAgICByLmNvbnRlbnQgPSAn7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC4nO1xyXG4gICAgICAgICAgICAgIHIuaXNXcml0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IGRsdFJlcGx5LFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIENIQU5HRV9DT01NRU5UX1RZUEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOlsuLi5hY3Rpb24uZGF0YS5jb21tZW50c10sXHJcbiAgICAgICAgICBjb21tZW50X3R5cGU6YWN0aW9uLmRhdGEudHlwZSxcclxuICAgICAgICAgIHNraXA6YWN0aW9uLmRhdGEuY29tbWVudHMubGVuZ3RoLFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdHlwZTogJ2FsbCcsXHJcbiAgc2VhcmNoOiBudWxsLFxyXG4gIGtleXdvcmQ6IG51bGwsXHJcbiAgcGFnZTogMSxcclxuICByb3dzOiAzMCxcclxuICBwYWdlYmxvY2s6IFtdLFxyXG4gIGVuZHBhZ2U6IG51bGwsXHJcbiAgbGlzdDogW10sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19MSVNUX1JFUVVFU1QgPSAnU0hPV19MSVNUX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfTElTVF9TVUNDRVNTID0gJ1NIT1dfTElTVF9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0xJU1RfRVJST1IgPSAnU0hPV19MSVNUX0VSUk9SJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9SRVFVRVNUID0gJ0RFTEVURV9BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MgPSAnREVMRVRFX0FSVElDTEVfU1VDQ0VTUydcclxuY29uc3QgREVMRVRFX0FSVElDTEVfRVJST1IgPSAnREVMRVRFX0FSVElDTEVfRVJST1InXHJcbmNvbnN0IENSRUFURV9BUlRJQ0xFX0FDVElPTiA9ICdDUkVBVEVfQVJUSUNMRV9BQ1RJT04nXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dMaXN0UmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICAgIHJlc3VsdC5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChTaG93TGlzdFN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFNob3dMaXN0RXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goU2hvd0xpc3RFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKERlbGV0ZUFydGljbGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YS5zdWNjZXNzID09PSB0cnVlXHJcbiAgICAgICAgPyBkaXNwYXRjaChEZWxldGVBcnRpY2xlU3VjY2VzcyhkYXRhKSlcclxuICAgICAgICA6IGRpc3BhdGNoKERlbGV0ZUFydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0RXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfTElTVF9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZUVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQXJ0aWNsZUFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ1JFQVRFX0FSVElDTEVfQUNUSU9OLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfTElTVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsaXN0OiBbLi4uYWN0aW9uLmRhdGEucmVzdWx0c10sXHJcbiAgICAgICAgcGFnZTogYWN0aW9uLmRhdGEucGFnZSxcclxuICAgICAgICByb3dzOiBhY3Rpb24uZGF0YS5yb3dzLFxyXG4gICAgICAgIHBhZ2VibG9jazogYWN0aW9uLmRhdGEucGFnZWJsb2NrLFxyXG4gICAgICAgIGVuZHBhZ2U6IGFjdGlvbi5kYXRhLnRvdGFsUGFnZSxcclxuICAgICAgICB0eXBlOmFjdGlvbi5kYXRhLnR5cGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNIT1dfTElTVF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gYWN0aW9uLmRhdGEuaWQ7XHJcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4uc3RhdGUubGlzdF0ubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgaWYgKHYuaWQgPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICB2LnN1YmplY3QgPSBcIuyCreygnOuQnCDqsozsi5zquIDsnoXri4jri6QuXCJcclxuICAgICAgICAgIHYuZGVsID0gMVxyXG4gICAgICAgICAgcmV0dXJuIHZcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLm5ld0xpc3RdLFxyXG5cclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgREVMRVRFX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIENSRUFURV9BUlRJQ0xFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0eXBlOiAnYWxsJyxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBtZW51OltcclxuICAgIHsgXHJcbiAgICBpZDonMScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gICAgdXJsOicvcG9zdHMvMSdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzInLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgIHVybDonL3Bvc3RzLzInXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOiczJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNCcsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgdXJsOicvcG9zdHMvNCdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzUnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgIHVybDonL3Bvc3RzLzUnXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG5zd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuICBkZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNvbW1lbnQ6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0Q29tbWVudCA9IHtcclxuICBib2FyZF9pZDogbnVsbCxcclxuICBjb21tZW50X2lkOiBudWxsLFxyXG4gIHdyaXRlcjogbnVsbCxcclxuICB3cml0ZXJfbmljazogbnVsbCxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIHJvb3Q6IDAsXHJcbiAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIGltYWdlOiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlcGx5X2NudDogMCxcclxuICB0YXJnZXQ6IDAsXHJcbiAgdGFyZ2V0X2lkeDogbnVsbCxcclxuICB0YXJnZXRfbmljazogbnVsbCxcclxuICBpc1dyaXRlcjogdHJ1ZSxcclxuICBpc0xpa2U6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5jb25zdCBBRERfQ09NTUVOVFMgPSAnQUREX0NPTU1FTlRTJztcclxuXHJcbmNvbnN0IFJFU0VUX0NPTU1FTlQgPSAnUkVTRVRfQ09NTUVOVCc7XHJcbmNvbnN0IERFTEVURV9DT01NRU5UID0gJ0RFTEVURV9DT01NRU5UJztcclxuY29uc3QgVVBEQVRFX0NPTU1FTlQgPSAnVVBEQVRFX0NPTU1FTlQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVFMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFJlcGx5cyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUkVQTFlTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZXNldENvbW1lbnQgPSAoKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlJFU0VUX0NPTU1FTlQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ29tbWVudCA9IChkYXRhKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlVQREFURV9DT01NRU5ULFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChkYXRhKSA9PntcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpERUxFVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6ZGF0YVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFJFU0VUX0NPTU1FTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVDpcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLnJvb3QgPT09IDApIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5Db21tZW50cyA9IHN0YXRlLmNvbW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudHMgPSBbY29tbWVudCwgLi4ub3JpZ2luQ29tbWVudHNdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IG5ld0NvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRlbXBsaXN0ID0gWy4uLnN0YXRlLmNvbW1lbnRdXHJcbiAgICAgICAgY29uc3QgbmV3UmVwbHkgPSB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBsaXN0LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgICAgdi5yZXBseXMgPSBbbmV3UmVwbHksIC4uLnYucmVwbHlzXVxyXG4gICAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6dGVtcGxpc3QsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVFM6XHJcbiAgICAgIGNvbnN0IGFkZGVkQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudCwgLi4uYWN0aW9uLmRhdGFdXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDogYWRkZWRDb21tZW50cyxcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjYXNlIFVQREFURV9DT01NRU5UOlxyXG4gICAgICBsZXQgdXBkYXRlZENvbW1lbnQgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHVwZGF0ZWRDb21tZW50LmZvckVhY2godj0+e1xyXG4gICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgdi51cGRhdGVkPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udXBkYXRlZENvbW1lbnRdXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NPTU1FTlQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgbGV0IHRlbXAgPSBbLi4uc3RhdGUuY29tbWVudF07XHJcbiAgICAgIHRlbXAuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YSl7XHJcbiAgICAgICAgICB2LmNvbnRlbnQ9J+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJ1xyXG4gICAgICAgICAgdi5pc1dyaXRlcj1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudDpbLi4udGVtcF1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuaW1wb3J0IGJvYXJkIGZyb20gJy4vYm9hcmQnXHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSdcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50J1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuL3ZvdGUnXHJcblxyXG5pbXBvcnQgeyBwZXJzaXN0UmV1ZGVyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIlxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlciwgYm9hcmQsIGNhdGVnb3J5LCBhcnRpY2xlLCBjb21tZW50LCB2b3RlLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkZGluZzogZmFsc2UsXHJcbiAgSXNMb2dpbjogZmFsc2UsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgaW1hZ2U6ICcvZGVmYXVsdFByb2ZpbC5wbmcnLFxyXG4gIHVzZXJfaWQ6bnVsbCxcclxufVxyXG5cclxuXHJcbmNvbnN0IFVTRVJfVVBEQVRFX0FDVElPTiA9ICdVU0VSX1VQREFURV9BQ1RJT04nXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSAnVVNFUl9MT0dJTl9FUlJPUidcclxuY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChVc2VyTG9naW5SZXF1ZXN0KCkpO1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luU3VjY2VzcyhkYXRhKSlcclxuICAgICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclVwZGF0ZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6VVNFUl9VUERBVEVfQUNUSU9OLFxyXG4gICAgZGF0YTpkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5SZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1JFUVVFU1QsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfTE9HSU5fRVJST1IsXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIElzTG9naW46IHRydWUsXHJcbiAgICAgICAgbmlja25hbWU6IGFjdGlvbi5kYXRhLm5pY2tuYW1lLFxyXG4gICAgICAgIGltYWdlOiBhY3Rpb24uZGF0YS5pbWFnZSxcclxuICAgICAgICB1c2VyX2lkOmFjdGlvbi5kYXRhLnVzZXJfaWQsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX1VQREFURV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmlja25hbWU6YWN0aW9uLmRhdGEubmlja25hbWUsXHJcbiAgICAgICAgaW1hZ2U6IGFjdGlvbi5kYXRhLmltYWdlLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRpbmc6ZmFsc2UsXHJcbiAgZXJyb3I6ZmFsc2UsXHJcbiAgZ2VuZGVyOiAwLFxyXG4gIG1pbmFnZTogMCxcclxuICBtYXhhZ2U6IDEyMCxcclxuICBob21ldG93bjogMCxcclxuICByZXNpZGVuY2U6IDAsXHJcbiAgdm90ZTE5OiAwLFxyXG4gIHZvdGVEYXRhOiB7XHJcbiAgICBsYWJlbHM6IFtdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW10sXHJcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtdLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgVVBEQVRFX1ZPVEVfUkVRVUVTVCA9ICdVUERBVEVfVk9URV9SRVFVRVNUJ1xyXG5jb25zdCBVUERBVEVfVk9URV9TVUNDRVNTID0gJ1VQREFURV9WT1RFX1NVQ0NFU1MnXHJcbmNvbnN0IFVQREFURV9WT1RFX0VSUk9SID0gJ1VQREFURV9WT1RFX0VSUk9SJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVZvdGUgPSAoZGF0YSk9PntcclxuICByZXR1cm4gKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goVXBkYXRlVm90ZVJlcXVlc3QoKSk7XHJcbiAgICB0cnl7XHJcbiAgICAgIGRhdGEuc3VjY2VzcyA9PSB0cnVlXHJcbiAgICAgID8gZGlzcGF0Y2goVXBkYXRlVm90ZVN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgIDpkaXNwYXRjaChVcGRhdGVWb3RlRXJyb3IoKSlcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgZGlzcGF0Y2goVXBkYXRlVm90ZUVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlVm90ZVJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVQREFURV9WT1RFX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVcGRhdGVWb3RlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfVk9URV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVZvdGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1ZPVEVfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUERBVEVfVk9URV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfVk9URV9TVUNDRVNTOlxyXG4gICAgICBjb25zb2xlLmxvZygneHh4eHh4eCcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdm90ZURhdGE6e1xyXG4gICAgICAgICAgLi4uc3RhdGUudm90ZURhdGEsXHJcbiAgICAgICAgICBsYWJlbHM6IFsuLi5hY3Rpb24uZGF0YS5sYWJlbF0sXHJcbiAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uc3RhdGUudm90ZURhdGEuZGF0YXNldHNbMF0sXHJcbiAgICAgICAgICAgICAgZGF0YTogWy4uLmFjdGlvbi5kYXRhLmRhdGFdLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWy4uLmFjdGlvbi5kYXRhLmNvbG9yXSxcclxuICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogWy4uLmFjdGlvbi5kYXRhLmNvbG9yXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX1ZPVEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOnRydWVcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIlxyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IGNyZWF0ZVNhZ2EgZnJvbSAncmVkdXgtc2FnYSdcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2EvaW5kZXgnXHJcblxyXG5cclxuXHJcbi8vL2Zyb20gICBodHRwczovL2dpdGh1Yi5jb20vZmF6bHVsa2FyaW13ZWIvd2l0aC1uZXh0LXJlZHV4LXdyYXBwZXItcmVkdXgtcGVyc2lzdCAg64Sl7Iqk7Yq4IOumrOuNleyKpCDtjbzsi5zsiqTtirjsl5Ag64+E7JuA7J2EIOykgCAg6rOg66eI7Jq0IOu2hOuTpF5eXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBsb2dnZXRyTWlkZGVsd2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGFjdGlvbik7IFxyXG4gIC8vIGNvbnNvbGUubG9nKGRpc3BhdGNoKTsgXHJcbiAgLy8gY29uc29sZS5sb2coZ2V0U3RhdGUpO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYSgpOyBcclxuXHJcbiAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuICAvLyBTdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSkgXHJcblxyXG4gIHJldHVybiBTdG9yZVxyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoeyBpc1NlcnZlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dldHJNaWRkZWx3YXJlLCB0aHVua01pZGRsZXdhcmVdO1xyXG4gIC8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTsgXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiKS5kZWZhdWx0O1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICAgIGtleTogXCJyb290XCIsXHJcbiAgICAgIHN0b3JhZ2UsXHJcbiAgICAgIHdoaXRlbGlzdDogWyBcInVzZXJcIixcImFydGljbGVcIiwgXCJib2FyZFwiLCd2b3RlJ10sIFxyXG4gICAgICBibGFja2xpc3Q6Wydjb21tZW50J11cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlciwgZW5oYW5jZXIpO1xyXG5cclxuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RhdmVsb3BtZW50J1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==