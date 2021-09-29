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


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\\uC0C8 \uD3F4\uB354\\PresidentMaker\\front\\pages\\_app.jsx";









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
      return _objectSpread(_objectSpread({}, state), {}, {
        voteData: _objectSpread(_objectSpread({}, state.voteData), {}, {
          labels: [...action.data.label],
          datasets: [_objectSpread(_objectSpread({}, state.voteData.datasets[0]), {}, {
            data: [...action.data.data],
            backgroundColor: [...action.data.color],
            hoverBackgroundColor: [...action.data.color]
          })]
        }),
        error: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2JvYXJkLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvdm90ZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsImJvYXJkX2lkIiwid3JpdGVyIiwic3ViamVjdCIsIm5pY2tuYW1lIiwiY3JlYXRlZEF0IiwidXBkYXRlIiwiaGl0IiwiY29udGVudCIsImlzTGlrZSIsImxpa2VkIiwiZGlzbGlrZWQiLCJkZWwiLCJpc1dyaXRlciIsImNvbW1lbnRfY250IiwiY29tbWVudHMiLCJjb21tZW50X3R5cGUiLCJza2lwIiwiZGVmYXVsdENvbW1lbnQiLCJjb21tZW50X2lkIiwid3JpdGVyX25pY2siLCJyb290IiwiaW1hZ2UiLCJ1cGRhdGVkIiwicmVwbHlfY250IiwidGFyZ2V0IiwidGFyZ2V0X2lkeCIsInRhcmdldF9uaWNrIiwicmVwbHlzIiwiU0hPV19BUlRJQ0xFX1JFUVVFU1QiLCJTSE9XX0FSVElDTEVfU1VDQ0VTUyIsIlNIT1dfQVJUSUNMRV9FUlJPUiIsIklOU0VSVF9CX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0JfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQl9MSUtFX0FDVElPTiIsIkRFTEVURV9CX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0JfTElLRV9BQ1RJT04iLCJVUERBVEVfQl9ESVNMSUtFX0FDVElPTiIsIklOU0VSVF9DX0xJS0VfQUNUSU9OIiwiSU5TRVJUX0NfRElTTElLRV9BQ1RJT04iLCJERUxFVEVfQ19MSUtFX0FDVElPTiIsIkRFTEVURV9DX0RJU0xJS0VfQUNUSU9OIiwiVVBEQVRFX0NfTElLRV9BQ1RJT04iLCJVUERBVEVfQ19ESVNMSUtFX0FDVElPTiIsIkNIQU5HRV9DT01NRU5UX1RZUEUiLCJBRERfQ09NTUVOVCIsIkdFVF9DT01NRU5UUyIsIkFkZF9SRVBMWSIsIkdFVF9SRVBMWVMiLCJDTEVBUl9SRVBMWVMiLCJERUxFVEVfQ09NTUVOVCIsIkRFTEVURV9SRVBMWSIsIlVQREFURV9DT01NRU5UIiwiVVBEQVRFX1JFUExZIiwiU2hvd0FydGljbGVBY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJTaG93QXJ0aWNsZVJlcXVlc3QiLCJzdWNjZXNzIiwiU2hvd0FydGljbGVTdWNjZXNzIiwiU2hvd0FydGljbGVFcnJvciIsImUiLCJ0eXBlIiwiSW5zZXJ0Qkxpa2VBY3Rpb24iLCJEZWxldGVCTGlrZUFjdGlvbiIsIlVwZGF0ZUJMaWtlQWN0aW9uIiwiSW5zZXJ0Q0xpa2VBY3Rpb24iLCJEZWxldGVDTGlrZUFjdGlvbiIsIlVwZGF0ZUNMaWtlQWN0aW9uIiwiQWRkQ29tbWVudCIsIkdldENvbW1lbnRzIiwiQWRkUmVwbHkiLCJHZXRSZXBseXMiLCJDbGVhclJlcGx5cyIsIlVwZGF0ZUNvbW1lbnQiLCJVcGRhdGVSZXBseSIsIkRlbGV0ZUNvbW1lbnQiLCJEZWxldGVSZXBseSIsIkNoYW5nZUNvbW1lbnRUeXBlIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJhY3Rpb24iLCJmb3JFYWNoIiwidiIsImMiLCJyIiwibmV3Q29tbWVudCIsInRlbXBDb21tZW50cyIsIm5ld1JlcGx5IiwicmVwbHl0ZW1wIiwicmVwbHlzdGVtcCIsImNoZWNrIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInVwZGF0ZUNvbW1lbnRzIiwidXBkYXRlUmVwbHkiLCJjbGVhclJlcGx5cyIsImRsdENvbW1lbnRzIiwiZGx0UmVwbHkiLCJzZWFyY2giLCJrZXl3b3JkIiwicGFnZSIsInJvd3MiLCJwYWdlYmxvY2siLCJlbmRwYWdlIiwibGlzdCIsIlNIT1dfTElTVF9SRVFVRVNUIiwiU0hPV19MSVNUX1NVQ0NFU1MiLCJTSE9XX0xJU1RfRVJST1IiLCJERUxFVEVfQVJUSUNMRV9SRVFVRVNUIiwiREVMRVRFX0FSVElDTEVfU1VDQ0VTUyIsIkRFTEVURV9BUlRJQ0xFX0VSUk9SIiwiQ1JFQVRFX0FSVElDTEVfQUNUSU9OIiwiU2hvd0xpc3RBY3Rpb24iLCJTaG93TGlzdFJlcXVlc3QiLCJyZXN1bHQiLCJTaG93TGlzdFN1Y2Nlc3MiLCJTaG93TGlzdEVycm9yIiwiRGVsZXRlQXJ0aWNsZUFjdGlvbiIsIkRlbGV0ZUFydGljbGVSZXF1ZXN0IiwiRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MiLCJEZWxldGVBcnRpY2xlRXJyb3IiLCJDcmVhdGVBcnRpY2xlQWN0aW9uIiwicmVzdWx0cyIsInRvdGFsUGFnZSIsImlkIiwibmV3TGlzdCIsIm1hcCIsIm1lbnUiLCJjYXRlZ29yeSIsInVybCIsImNvbW1lbnQiLCJBRERfQ09NTUVOVFMiLCJSRVNFVF9DT01NRU5UIiwiQWRkQ29tbWVudHMiLCJBZGRSZXBseXMiLCJBRERfUkVQTFlTIiwiUmVzZXRDb21tZW50Iiwib3JpZ2luQ29tbWVudHMiLCJuZXdDb21tZW50cyIsInRlbXBsaXN0IiwiYWRkZWRDb21tZW50cyIsInVwZGF0ZWRDb21tZW50IiwidGVtcCIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwiYm9hcmQiLCJhcnRpY2xlIiwidm90ZSIsIklzTG9naW4iLCJ1c2VyX2lkIiwiVVNFUl9VUERBVEVfQUNUSU9OIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiVXNlckxvZ2luUmVxdWVzdCIsIlVzZXJMb2dpblN1Y2Nlc3MiLCJVc2VyTG9naW5FcnJvciIsIlVzZXJVcGRhdGVBY3Rpb24iLCJVc2VyTG9nb3V0QWN0aW9uIiwibG9hZGluZyIsImVycm9yIiwiZ2VuZGVyIiwibWluYWdlIiwibWF4YWdlIiwiaG9tZXRvd24iLCJyZXNpZGVuY2UiLCJ2b3RlMTkiLCJ2b3RlRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJVUERBVEVfVk9URV9SRVFVRVNUIiwiVVBEQVRFX1ZPVEVfU1VDQ0VTUyIsIlVQREFURV9WT1RFX0VSUk9SIiwiVXBkYXRlVm90ZSIsIlVwZGF0ZVZvdGVSZXF1ZXN0IiwiVXBkYXRlVm90ZVN1Y2Nlc3MiLCJVcGRhdGVWb3RlRXJyb3IiLCJsYWJlbCIsImNvbG9yIiwibG9nZ2V0ck1pZGRlbHdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsIlN0b3JlIiwiY3JlYXRlU3RvcmUiLCJlbmhhbmNlciIsIm1ha2VTdG9yZSIsImlzU2VydmVyIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwicmVxdWlyZSIsInN0b3JhZ2UiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwid2hpdGVsaXN0IiwiYmxhY2tsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQzdCLFFBQU1DLEtBQUssR0FBR0MscURBQVEsQ0FBRUMsS0FBRCxJQUFXQSxLQUFaLENBQXRCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDLDJCQUZQO0FBR0UsbUJBQVcsRUFB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Z2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS9zdHlsZS5jc3NcIjtcclxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJ1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJ0cnVlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1ImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9IGxvYWRpbmc9ezxkaXY+TG9hZGluZzwvZGl2Pn0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiB0cnVlLFxyXG4gIGJvYXJkX2lkOiBudWxsLFxyXG4gIHdyaXRlcjogbnVsbCxcclxuICBzdWJqZWN0OiBudWxsLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICB1cGRhdGU6IG51bGwsXHJcbiAgaGl0OiBudWxsLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG4gIGxpa2VkOiAwLFxyXG4gIGRpc2xpa2VkOiAwLFxyXG4gIGRlbDogbnVsbCxcclxuICBpc1dyaXRlcjogZmFsc2UsXHJcbiAgY29tbWVudF9jbnQ6IDAsXHJcbiAgY29tbWVudHM6IFtdLFxyXG4gIGNvbW1lbnRfdHlwZTonbGlrZScsXHJcbiAgc2tpcDowLFxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRDb21tZW50ID0ge1xyXG4gIGJvYXJkX2lkOiBudWxsLFxyXG4gIGNvbW1lbnRfaWQ6IG51bGwsXHJcbiAgd3JpdGVyOiBudWxsLFxyXG4gIHdyaXRlcl9uaWNrOiBudWxsLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgcm9vdDogMCxcclxuICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgaW1hZ2U6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbiAgbGlrZWQ6IDAsXHJcbiAgZGlzbGlrZWQ6IDAsXHJcbiAgdXBkYXRlZDogZmFsc2UsXHJcbiAgcmVwbHlfY250OiAwLFxyXG4gIHRhcmdldDogMCxcclxuICB0YXJnZXRfaWR4OiBudWxsLFxyXG4gIHRhcmdldF9uaWNrOiBudWxsLFxyXG4gIGlzV3JpdGVyOiB0cnVlLFxyXG4gIGlzTGlrZTogbnVsbCxcclxuICByZXBseXM6IFtdLFxyXG4gIHNraXA6MCxcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU0hPV19BUlRJQ0xFX1JFUVVFU1QgPSAnU0hPV19BUlRJQ0xFX1JFUVVFU1QnXHJcbmNvbnN0IFNIT1dfQVJUSUNMRV9TVUNDRVNTID0gJ1NIT1dfQVJUSUNMRV9TVUNDRVNTJ1xyXG5jb25zdCBTSE9XX0FSVElDTEVfRVJST1IgPSAnU0hPV19BUlRJQ0xFX0VSUk9SJ1xyXG5cclxuY29uc3QgSU5TRVJUX0JfTElLRV9BQ1RJT04gPSAnSU5TRVJUX0JfTElLRV9BQ1RJT04nXHJcbmNvbnN0IElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9CX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBERUxFVEVfQl9MSUtFX0FDVElPTiA9ICdERUxFVEVfQl9MSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0JfRElTTElLRV9BQ1RJT04gPSAnREVMRVRFX0JfRElTTElLRV9BQ1RJT04nXHJcbmNvbnN0IFVQREFURV9CX0xJS0VfQUNUSU9OID0gJ1VQREFURV9CX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQl9ESVNMSUtFX0FDVElPTiA9ICdVUERBVEVfQl9ESVNMSUtFX0FDVElPTidcclxuXHJcbmNvbnN0IElOU0VSVF9DX0xJS0VfQUNUSU9OID0gJ0lOU0VSVF9DX0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBJTlNFUlRfQ19ESVNMSUtFX0FDVElPTiA9ICdJTlNFUlRfQ19ESVNMSUtFX0FDVElPTidcclxuY29uc3QgREVMRVRFX0NfTElLRV9BQ1RJT04gPSAnREVMRVRFX0NfTElLRV9BQ1RJT04nXHJcbmNvbnN0IERFTEVURV9DX0RJU0xJS0VfQUNUSU9OID0gJ0RFTEVURV9DX0RJU0xJS0VfQUNUSU9OJ1xyXG5jb25zdCBVUERBVEVfQ19MSUtFX0FDVElPTiA9ICdVUERBVEVfQ19MSUtFX0FDVElPTidcclxuY29uc3QgVVBEQVRFX0NfRElTTElLRV9BQ1RJT04gPSAnVVBEQVRFX0NfRElTTElLRV9BQ1RJT04nXHJcblxyXG5jb25zdCBDSEFOR0VfQ09NTUVOVF9UWVBFID0gJ0NIQU5HRV9DT01NRU5UX1RZUEUnXHJcblxyXG5jb25zdCBBRERfQ09NTUVOVCA9ICdBRERfQ09NTUVOVCc7XHJcbmNvbnN0IEdFVF9DT01NRU5UUyA9ICdHRVRfQ09NTUVOVFMnO1xyXG5jb25zdCBBZGRfUkVQTFkgPSAnQWRkX1JFUExZJztcclxuY29uc3QgR0VUX1JFUExZUyA9ICdHRVRfUkVQTFlTJztcclxuY29uc3QgQ0xFQVJfUkVQTFlTID0gJ0NMRUFSX1JFUExZUyc7XHJcbmNvbnN0IERFTEVURV9DT01NRU5UID0gJ0RFTEVURV9DT01NRU5UJztcclxuY29uc3QgREVMRVRFX1JFUExZID0gJ0RFTEVURV9SRVBMWSc7XHJcbmNvbnN0IFVQREFURV9DT01NRU5UID0gJ1VQREFURV9DT01NRU5UJ1xyXG5jb25zdCBVUERBVEVfUkVQTFkgPSAnVVBEQVRFX1JFUExZJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFNob3dBcnRpY2xlUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goU2hvd0FydGljbGVTdWNjZXNzKGRhdGEpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goU2hvd0FydGljbGVFcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChTaG93QXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FydGljbGVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0FSVElDTEVfUkVRVUVTVCxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNob3dBcnRpY2xlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNIT1dfQVJUSUNMRV9FUlJPUixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbnNlcnRCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IElOU0VSVF9CX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQl9ESVNMSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVCTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9CX0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0JfRElTTElLRV9BQ1RJT04sXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUJMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVVBEQVRFX0JfTElLRV9BQ1RJT04sXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9CX0RJU0xJS0VfQUNUSU9OLFxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IEluc2VydENMaWtlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHJcbiAgaWYgKGRhdGEuaXNMaWtlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBJTlNFUlRfQ19MSUtFX0FDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogSU5TRVJUX0NfRElTTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ0xpa2VBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cclxuICBpZiAoZGF0YS5pc0xpa2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IERFTEVURV9DX0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOmRhdGFcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogREVMRVRFX0NfRElTTElLRV9BQ1RJT04sXHJcbiAgICAgIGRhdGE6ZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVDTGlrZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKGRhdGEuaXNMaWtlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ19MSUtFX0FDVElPTixcclxuICAgICAgZGF0YTpkYXRhXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFVQREFURV9DX0RJU0xJS0VfQUNUSU9OLFxyXG4gICAgICBkYXRhOmRhdGFcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZENvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldENvbW1lbnRzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogR0VUX0NPTU1FTlRTLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFJlcGx5ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWRkX1JFUExZLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldFJlcGx5cyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEdFVF9SRVBMWVMsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyUmVwbHlzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ0xFQVJfUkVQTFlTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVJlcGx5ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1JFUExZLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9DT01NRU5ULFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVSZXBseSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IERFTEVURV9SRVBMWSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNvbW1lbnRUeXBlID0gKGRhdGEpPT57XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6Q0hBTkdFX0NPTU1FTlRfVFlQRSxcclxuICAgIGRhdGE6ZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIFNIT1dfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24uZGF0YSxcclxuICAgICAgICBza2lwOjEwLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0FSVElDTEVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIElOU0VSVF9CX0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICBsaWtlZDogc3RhdGUubGlrZWQgKyAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIElOU0VSVF9CX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogZmFsc2UsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkICsgMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQl9MSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IG51bGwsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkIC0gMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBERUxFVEVfQl9ESVNMSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IG51bGwsXHJcbiAgICAgICAgZGlzbGlrZWQ6IHN0YXRlLmRpc2xpa2VkIC0gMSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfQl9MSUtFX0FDVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkICsgMSxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgLSAxLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVQREFURV9CX0RJU0xJS0VfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTGlrZTogZmFsc2UsXHJcbiAgICAgICAgbGlrZWQ6IHN0YXRlLmxpa2VkIC0gMSxcclxuICAgICAgICBkaXNsaWtlZDogc3RhdGUuZGlzbGlrZWQgKyAxLFxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGNhc2UgSU5TRVJUX0NfTElLRV9BQ1RJT046XHJcbiAgICAgIGlmKGFjdGlvbi5kYXRhLnJvb3Q9PTApe1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgdi5pc0xpa2U9dHJ1ZTtcclxuICAgICAgICAgICAgdi5saWtlZCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjPT57XHJcbiAgICAgICAgICBpZihjLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLnJvb3Qpe1xyXG4gICAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgICBpZihyLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICAgICAgci5pc0xpa2U9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHIubGlrZWQrKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY2FzZSBJTlNFUlRfQ19ESVNMSUtFX0FDVElPTjpcclxuICAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT1mYWxzZTtcclxuICAgICAgICAgICAgdi5kaXNsaWtlZCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjPT57XHJcbiAgICAgICAgICBpZihjLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLnJvb3Qpe1xyXG4gICAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgICBpZihyLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICAgICAgci5pc0xpa2U9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByLmRpc2xpa2VkKys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NfTElLRV9BQ1RJT046XHJcbiAgICAgaWYoYWN0aW9uLmRhdGEucm9vdD09MCl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICB2LmlzTGlrZT1udWxsO1xyXG4gICAgICAgICAgICB2Lmxpa2VkLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT1udWxsO1xyXG4gICAgICAgICAgICAgICAgci5saWtlZC0tO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX0NfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIGlmKGFjdGlvbi5kYXRhLnJvb3Q9PTApe1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgdi5pc0xpa2U9bnVsbDtcclxuICAgICAgICAgICAgdi5kaXNsaWtlZC0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjPT57XHJcbiAgICAgICAgICBpZihjLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLnJvb3Qpe1xyXG4gICAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgICBpZihyLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICAgICAgci5pc0xpa2U9bnVsbDtcclxuICAgICAgICAgICAgICAgIHIuZGlzbGlrZWQtLTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX0NfTElLRV9BQ1RJT046XHJcbiAgICAgIGlmKGFjdGlvbi5kYXRhLnJvb3Q9PTApe1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgdi5pc0xpa2U9dHJ1ZTtcclxuICAgICAgICAgICAgdi5kaXNsaWtlZC0tO1xyXG4gICAgICAgICAgICB2Lmxpa2VkKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpjb21tZW50cyxcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGM9PntcclxuICAgICAgICAgIGlmKGMuY29tbWVudF9pZD09YWN0aW9uLmRhdGEucm9vdCl7XHJcbiAgICAgICAgICAgIGMucmVwbHlzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAgIGlmKHIuY29tbWVudF9pZD09YWN0aW9uLmRhdGEuY29tbWVudF9pZCl7XHJcbiAgICAgICAgICAgICAgICByLmlzTGlrZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgci5kaXNsaWtlZC0tO1xyXG4gICAgICAgICAgICAgICAgci5saWtlZCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNvbW1lbnRzOmNvbW1lbnRzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgVVBEQVRFX0NfRElTTElLRV9BQ1RJT046XHJcbiAgICAgIGlmKGFjdGlvbi5kYXRhLnJvb3Q9PTApe1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzXVxyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgaWYodi5jb21tZW50X2lkPT1hY3Rpb24uZGF0YS5jb21tZW50X2lkKXtcclxuICAgICAgICAgICAgdi5pc0xpa2U9ZmFsc2U7XHJcbiAgICAgICAgICAgIHYuZGlzbGlrZWQrKztcclxuICAgICAgICAgICAgdi5saWtlZC0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjPT57XHJcbiAgICAgICAgICBpZihjLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLnJvb3Qpe1xyXG4gICAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgICBpZihyLmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgICAgICAgci5pc0xpa2U9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByLmRpc2xpa2VkKys7XHJcbiAgICAgICAgICAgICAgICByLmxpa2VkLS07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY29tbWVudHM6Y29tbWVudHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVDpcclxuICAgICAgY29uc3QgbmV3Q29tbWVudCA9IHsgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogW25ld0NvbW1lbnQsIC4uLnN0YXRlLmNvbW1lbnRzXSxcclxuICAgICAgICBjb21tZW50X2NudDogc3RhdGUuY29tbWVudF9jbnQgKyAxLFxyXG4gICAgICB9XHJcblxyXG4gICAgLy8v7KSR67O165CY64qU6rGwIOyVhOuemCByZXBseXPsl5DshJwg7KCc6rGw7ZWc6rGw7LKY65+8IOygnOqxsO2VtOyjvOq4sC5cclxuICAgIGNhc2UgR0VUX0NPTU1FTlRTOlxyXG4gICAgICBsZXQgdGVtcENvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnRzLCAuLi5hY3Rpb24uZGF0YV07XHJcbiAgICAgIC8vIGNvbnN0IGNvbW1lbnRzPVtdO1xyXG4gICAgICAvLyBjb25zdCBjb21tZW50Q2hlY2sgPSBbXTtcclxuICAgICAgLy8gZm9yKGxldCBpID0gMDsgaTx0ZW1wQ29tbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAvLyAgIGlmKCFjb21tZW50Q2hlY2suaW5jbHVkZXModGVtcENvbW1lbnRzW2ldLmNvbW1lbnRfaWQpKXtcclxuICAgICAgLy8gICAgIGNvbW1lbnRDaGVjay5wdXNoKHRlbXBDb21tZW50c1tpXS5jb21tZW50X2lkKVxyXG4gICAgICAvLyAgICAgY29tbWVudHMucHVzaCh0ZW1wQ29tbWVudHNbaV0pXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHRlbXBDb21tZW50cyxcclxuICAgICAgICBza2lwOnN0YXRlLnNraXArMTAsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFkZF9SRVBMWTpcclxuICAgICAgY29uc3QgbmV3UmVwbHkgPSB7IC4uLmRlZmF1bHRDb21tZW50LCAuLi5hY3Rpb24uZGF0YSB9XHJcbiAgICAgIGxldCByZXBseXRlbXAgPSBbLi4uc3RhdGUuY29tbWVudHNdO1xyXG4gICAgICByZXBseXRlbXAuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLnJvb3QpIHtcclxuICAgICAgICAgIHYucmVwbHlzID0gW25ld1JlcGx5LCAuLi52LnJlcGx5c107XHJcbiAgICAgICAgICB2LnJlcGx5X2NudCA9IHYucmVwbHlfY250ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHJlcGx5dGVtcCxcclxuICAgICAgICBjb21tZW50X2NudDogc3RhdGUuY29tbWVudF9jbnQgKyAxLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBHRVRfUkVQTFlTOlxyXG4gICAgICBjb25zdCByb290ID0gYWN0aW9uLmRhdGFbMF0ucm9vdFxyXG4gICAgICBsZXQgcmVwbHlzdGVtcCA9IFsuLi5zdGF0ZS5jb21tZW50c107XHJcbiAgICAgIHJlcGx5c3RlbXAuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAodi5jb21tZW50X2lkID09IHJvb3QpIHtcclxuICAgICAgICAgIHYucmVwbHlzID0gWy4uLnYucmVwbHlzLCAuLi5hY3Rpb24uZGF0YV07XHJcbiAgICAgICAgICBsZXQgY2hlY2sgPSBbXTtcclxuICAgICAgICAgIGxldCByZXBseXMgPSBbXTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5yZXBseXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVjay5pbmNsdWRlcyh2LnJlcGx5c1tpXS5jb21tZW50X2lkKSkge1xyXG4gICAgICAgICAgICAgIGNoZWNrLnB1c2godi5yZXBseXNbaV0uY29tbWVudF9pZClcclxuICAgICAgICAgICAgICByZXBseXMucHVzaCh2LnJlcGx5c1tpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdi5yZXBseXMgPSByZXBseXNcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHJlcGx5c3RlbXAsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFVQREFURV9DT01NRU5UOlxyXG4gICAgICBsZXQgdXBkYXRlQ29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgIHVwZGF0ZUNvbW1lbnRzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgaWYgKGMuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5jb21tZW50X2lkKSB7XHJcbiAgICAgICAgICBjLnVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYy5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogdXBkYXRlQ29tbWVudHNcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgVVBEQVRFX1JFUExZOlxyXG4gICAgICBsZXQgdXBkYXRlUmVwbHkgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgIHVwZGF0ZVJlcGx5LmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgaWYgKGMuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5yb290KSB7XHJcbiAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpIHtcclxuICAgICAgICAgICAgICByLnVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHIuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogdXBkYXRlUmVwbHksXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjYXNlIENMRUFSX1JFUExZUzpcclxuICAgICAgbGV0IGNsZWFyUmVwbHlzID0gWy4uLnN0YXRlLmNvbW1lbnRzXTtcclxuICAgICAgY2xlYXJSZXBseXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAodi5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhKSB7XHJcbiAgICAgICAgICB2LnJlcGx5cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogY2xlYXJSZXBseXMsXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9DT01NRU5UOlxyXG4gICAgICBsZXQgZGx0Q29tbWVudHMgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgIGRsdENvbW1lbnRzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgaWYgKGMuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YSkge1xyXG4gICAgICAgICAgYy5kZWwgPSAxO1xyXG4gICAgICAgICAgYy5jb250ZW50ID0gJ+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJ1xyXG4gICAgICAgICAgYy5pc1dyaXRlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogZGx0Q29tbWVudHNcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgREVMRVRFX1JFUExZOlxyXG4gICAgICBsZXQgZGx0UmVwbHkgPSBbLi4uc3RhdGUuY29tbWVudHNdXHJcbiAgICAgIGRsdFJlcGx5LmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgaWYgKGMuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5yb290KSB7XHJcbiAgICAgICAgICBjLnJlcGx5cy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5jb21tZW50X2lkID09IGFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpIHtcclxuICAgICAgICAgICAgICByLmRlbCA9IDE7XHJcbiAgICAgICAgICAgICAgci5jb250ZW50ID0gJ+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJztcclxuICAgICAgICAgICAgICByLmlzV3JpdGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiBkbHRSZXBseSxcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBDSEFOR0VfQ09NTUVOVF9UWVBFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50czpbLi4uYWN0aW9uLmRhdGEuY29tbWVudHNdLFxyXG4gICAgICAgICAgY29tbWVudF90eXBlOmFjdGlvbi5kYXRhLnR5cGUsXHJcbiAgICAgICAgICBza2lwOmFjdGlvbi5kYXRhLmNvbW1lbnRzLmxlbmd0aCxcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHR5cGU6ICdhbGwnLFxyXG4gIHNlYXJjaDogbnVsbCxcclxuICBrZXl3b3JkOiBudWxsLFxyXG4gIHBhZ2U6IDEsXHJcbiAgcm93czogMzAsXHJcbiAgcGFnZWJsb2NrOiBbXSxcclxuICBlbmRwYWdlOiBudWxsLFxyXG4gIGxpc3Q6IFtdLFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFNIT1dfTElTVF9SRVFVRVNUID0gJ1NIT1dfTElTVF9SRVFVRVNUJ1xyXG5jb25zdCBTSE9XX0xJU1RfU1VDQ0VTUyA9ICdTSE9XX0xJU1RfU1VDQ0VTUydcclxuY29uc3QgU0hPV19MSVNUX0VSUk9SID0gJ1NIT1dfTElTVF9FUlJPUidcclxuY29uc3QgREVMRVRFX0FSVElDTEVfUkVRVUVTVCA9ICdERUxFVEVfQVJUSUNMRV9SRVFVRVNUJ1xyXG5jb25zdCBERUxFVEVfQVJUSUNMRV9TVUNDRVNTID0gJ0RFTEVURV9BUlRJQ0xFX1NVQ0NFU1MnXHJcbmNvbnN0IERFTEVURV9BUlRJQ0xFX0VSUk9SID0gJ0RFTEVURV9BUlRJQ0xFX0VSUk9SJ1xyXG5jb25zdCBDUkVBVEVfQVJUSUNMRV9BQ1RJT04gPSAnQ1JFQVRFX0FSVElDTEVfQUNUSU9OJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChTaG93TGlzdFJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhO1xyXG4gICAgICByZXN1bHQuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goU2hvd0xpc3RTdWNjZXNzKHJlc3VsdCkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChTaG93TGlzdEVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFNob3dMaXN0RXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVBcnRpY2xlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChEZWxldGVBcnRpY2xlUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChEZWxldGVBcnRpY2xlRXJyb3IoKSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGlzcGF0Y2goRGVsZXRlQXJ0aWNsZUVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dMaXN0UmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19MSVNUX1JFUVVFU1QsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBTaG93TGlzdEVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSE9XX0xJU1RfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGVsZXRlQXJ0aWNsZVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBERUxFVEVfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFydGljbGVFcnJvciA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogREVMRVRFX0FSVElDTEVfRVJST1IsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUFydGljbGVBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENSRUFURV9BUlRJQ0xFX0FDVElPTixcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBTSE9XX0xJU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0hPV19MSVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGlzdDogWy4uLmFjdGlvbi5kYXRhLnJlc3VsdHNdLFxyXG4gICAgICAgIHBhZ2U6IGFjdGlvbi5kYXRhLnBhZ2UsXHJcbiAgICAgICAgcm93czogYWN0aW9uLmRhdGEucm93cyxcclxuICAgICAgICBwYWdlYmxvY2s6IGFjdGlvbi5kYXRhLnBhZ2VibG9jayxcclxuICAgICAgICBlbmRwYWdlOiBhY3Rpb24uZGF0YS50b3RhbFBhZ2UsXHJcbiAgICAgICAgdHlwZTphY3Rpb24uZGF0YS50eXBlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBTSE9XX0xJU1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQVJUSUNMRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGFjdGlvbi5kYXRhLmlkO1xyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnN0YXRlLmxpc3RdLm1hcCgodikgPT4ge1xyXG4gICAgICAgIGlmICh2LmlkID09IHRhcmdldCkge1xyXG4gICAgICAgICAgdi5zdWJqZWN0ID0gXCLsgq3soJzrkJwg6rKM7Iuc6riA7J6F64uI64ukLlwiXHJcbiAgICAgICAgICB2LmRlbCA9IDFcclxuICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxpc3Q6IFsuLi5uZXdMaXN0XSxcclxuXHJcbiAgICAgICAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIERFTEVURV9BUlRJQ0xFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBDUkVBVEVfQVJUSUNMRV9BQ1RJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdHlwZTogJ2FsbCcsXHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgbWVudTpbXHJcbiAgICB7IFxyXG4gICAgaWQ6JzEnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQxJyxcclxuICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOicyJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MicsXHJcbiAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMycsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgdXJsOicvcG9zdHMvMydcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzQnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic1JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NScsXHJcbiAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9Pntcclxuc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgZGVmYXVsdDpcclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjb21tZW50OiBbXSxcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZGVmYXVsdENvbW1lbnQgPSB7XHJcbiAgYm9hcmRfaWQ6IG51bGwsXHJcbiAgY29tbWVudF9pZDogbnVsbCxcclxuICB3cml0ZXI6IG51bGwsXHJcbiAgd3JpdGVyX25pY2s6IG51bGwsXHJcbiAgY29udGVudDogbnVsbCxcclxuICByb290OiAwLFxyXG4gIGNyZWF0ZWRBdDogbnVsbCxcclxuICBpbWFnZTogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBsaWtlZDogMCxcclxuICBkaXNsaWtlZDogMCxcclxuICB1cGRhdGVkOiBmYWxzZSxcclxuICByZXBseV9jbnQ6IDAsXHJcbiAgdGFyZ2V0OiAwLFxyXG4gIHRhcmdldF9pZHg6IG51bGwsXHJcbiAgdGFyZ2V0X25pY2s6IG51bGwsXHJcbiAgaXNXcml0ZXI6IHRydWUsXHJcbiAgaXNMaWtlOiBudWxsLFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEFERF9DT01NRU5UID0gJ0FERF9DT01NRU5UJztcclxuY29uc3QgQUREX0NPTU1FTlRTID0gJ0FERF9DT01NRU5UUyc7XHJcblxyXG5jb25zdCBSRVNFVF9DT01NRU5UID0gJ1JFU0VUX0NPTU1FTlQnO1xyXG5jb25zdCBERUxFVEVfQ09NTUVOVCA9ICdERUxFVEVfQ09NTUVOVCc7XHJcbmNvbnN0IFVQREFURV9DT01NRU5UID0gJ1VQREFURV9DT01NRU5UJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50ID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5ULFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudHMgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRSZXBseXMgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX1JFUExZUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVzZXRDb21tZW50ID0gKCk9PntcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpSRVNFVF9DT01NRU5ULFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbW1lbnQgPSAoZGF0YSk9PntcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTpVUERBVEVfQ09NTUVOVCxcclxuICAgIGRhdGE6ZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUNvbW1lbnQgPSAoZGF0YSkgPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6REVMRVRFX0NPTU1FTlQsXHJcbiAgICBkYXRhOmRhdGFcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBSRVNFVF9DT01NRU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGNhc2UgQUREX0NPTU1FTlQ6XHJcbiAgICAgIGlmIChhY3Rpb24uZGF0YS5yb290ID09PSAwKSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luQ29tbWVudHMgPSBzdGF0ZS5jb21tZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0Q29tbWVudCwgLi4uYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnRzID0gW2NvbW1lbnQsIC4uLm9yaWdpbkNvbW1lbnRzXTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50OiBuZXdDb21tZW50cyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0ZW1wbGlzdCA9IFsuLi5zdGF0ZS5jb21tZW50XVxyXG4gICAgICAgIGNvbnN0IG5ld1JlcGx5ID0ge1xyXG4gICAgICAgICAgLi4uZGVmYXVsdENvbW1lbnQsIC4uLmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wbGlzdC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgaWYgKHYuY29tbWVudF9pZCA9PSBhY3Rpb24uZGF0YS5yb290KSB7XHJcbiAgICAgICAgICAgIHYucmVwbHlzID0gW25ld1JlcGx5LCAuLi52LnJlcGx5c11cclxuICAgICAgICAgICAgdi5yZXBseV9jbnQgPSB2LnJlcGx5X2NudCArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjb21tZW50OnRlbXBsaXN0LFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQUREX0NPTU1FTlRTOlxyXG4gICAgICBjb25zdCBhZGRlZENvbW1lbnRzID0gWy4uLnN0YXRlLmNvbW1lbnQsIC4uLmFjdGlvbi5kYXRhXVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnQ6IGFkZGVkQ29tbWVudHMsXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgY2FzZSBVUERBVEVfQ09NTUVOVDpcclxuICAgICAgbGV0IHVwZGF0ZWRDb21tZW50ID0gWy4uLnN0YXRlLmNvbW1lbnRdO1xyXG4gICAgICB1cGRhdGVkQ29tbWVudC5mb3JFYWNoKHY9PntcclxuICAgICAgICBpZih2LmNvbW1lbnRfaWQ9PWFjdGlvbi5kYXRhLmNvbW1lbnRfaWQpe1xyXG4gICAgICAgICAgdi5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgICAgIHYudXBkYXRlZD10cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnQ6Wy4uLnVwZGF0ZWRDb21tZW50XVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjYXNlIERFTEVURV9DT01NRU5UOlxyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGxldCB0ZW1wID0gWy4uLnN0YXRlLmNvbW1lbnRdO1xyXG4gICAgICB0ZW1wLmZvckVhY2godj0+e1xyXG4gICAgICAgIGlmKHYuY29tbWVudF9pZD09YWN0aW9uLmRhdGEpe1xyXG4gICAgICAgICAgdi5jb250ZW50PSfsgq3soJzrkJwg64yT6riA7J6F64uI64ukLidcclxuICAgICAgICAgIHYuaXNXcml0ZXI9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnQ6Wy4uLnRlbXBdXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcbmltcG9ydCBib2FyZCBmcm9tICcuL2JvYXJkJ1xyXG5pbXBvcnQgYXJ0aWNsZSBmcm9tICcuL2FydGljbGUnXHJcbmltcG9ydCBjb21tZW50IGZyb20gJy4vY29tbWVudCdcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi92b3RlJ1xyXG5cclxuaW1wb3J0IHsgcGVyc2lzdFJldWRlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsIGJvYXJkLCBjYXRlZ29yeSwgYXJ0aWNsZSwgY29tbWVudCwgdm90ZSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGRpbmc6IGZhbHNlLFxyXG4gIElzTG9naW46IGZhbHNlLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIGltYWdlOiAnL2RlZmF1bHRQcm9maWwucG5nJyxcclxuICB1c2VyX2lkOm51bGwsXHJcbn1cclxuXHJcblxyXG5jb25zdCBVU0VSX1VQREFURV9BQ1RJT04gPSAnVVNFUl9VUERBVEVfQUNUSU9OJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSAnVVNFUl9MT0dJTl9TVUNDRVNTJ1xyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gJ1VTRVJfTE9HSU5fRVJST1InXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goVXNlckxvZ2luUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MoZGF0YSkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJVcGRhdGVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOlVTRVJfVVBEQVRFX0FDVElPTixcclxuICAgIGRhdGE6ZGF0YSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9SRVFVRVNULFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX0VSUk9SLFxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBJc0xvZ2luOiB0cnVlLFxyXG4gICAgICAgIG5pY2tuYW1lOiBhY3Rpb24uZGF0YS5uaWNrbmFtZSxcclxuICAgICAgICBpbWFnZTogYWN0aW9uLmRhdGEuaW1hZ2UsXHJcbiAgICAgICAgdXNlcl9pZDphY3Rpb24uZGF0YS51c2VyX2lkLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9VUERBVEVfQUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5pY2tuYW1lOmFjdGlvbi5kYXRhLm5pY2tuYW1lLFxyXG4gICAgICAgIGltYWdlOiBhY3Rpb24uZGF0YS5pbWFnZSxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkaW5nOmZhbHNlLFxyXG4gIGVycm9yOmZhbHNlLFxyXG4gIGdlbmRlcjogMCxcclxuICBtaW5hZ2U6IDAsXHJcbiAgbWF4YWdlOiAxMjAsXHJcbiAgaG9tZXRvd246IDAsXHJcbiAgcmVzaWRlbmNlOiAwLFxyXG4gIHZvdGUxOTogMCxcclxuICB2b3RlRGF0YToge1xyXG4gICAgbGFiZWxzOiBbXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtdLFxyXG4gICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXSxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IFVQREFURV9WT1RFX1JFUVVFU1QgPSAnVVBEQVRFX1ZPVEVfUkVRVUVTVCdcclxuY29uc3QgVVBEQVRFX1ZPVEVfU1VDQ0VTUyA9ICdVUERBVEVfVk9URV9TVUNDRVNTJ1xyXG5jb25zdCBVUERBVEVfVk9URV9FUlJPUiA9ICdVUERBVEVfVk9URV9FUlJPUidcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVWb3RlID0gKGRhdGEpPT57XHJcbiAgcmV0dXJuIChkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKFVwZGF0ZVZvdGVSZXF1ZXN0KCkpO1xyXG4gICAgdHJ5e1xyXG4gICAgICBkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZVxyXG4gICAgICA/IGRpc3BhdGNoKFVwZGF0ZVZvdGVTdWNjZXNzKGRhdGEpKVxyXG4gICAgICA6ZGlzcGF0Y2goVXBkYXRlVm90ZUVycm9yKCkpXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgIGRpc3BhdGNoKFVwZGF0ZVZvdGVFcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVZvdGVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVUERBVEVfVk9URV9SRVFVRVNULFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXBkYXRlVm90ZVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX1ZPVEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVcGRhdGVWb3RlRXJyb3IgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVQREFURV9WT1RFX0VSUk9SLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBEQVRFX1ZPVEVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBEQVRFX1ZPVEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2b3RlRGF0YTp7XHJcbiAgICAgICAgICAuLi5zdGF0ZS52b3RlRGF0YSxcclxuICAgICAgICAgIGxhYmVsczogWy4uLmFjdGlvbi5kYXRhLmxhYmVsXSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5zdGF0ZS52b3RlRGF0YS5kYXRhc2V0c1swXSxcclxuICAgICAgICAgICAgICBkYXRhOiBbLi4uYWN0aW9uLmRhdGEuZGF0YV0sXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbLi4uYWN0aW9uLmRhdGEuY29sb3JdLFxyXG4gICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbLi4uYWN0aW9uLmRhdGEuY29sb3JdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZhbHNlLFxyXG4gICAgICAgIGxvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUERBVEVfVk9URV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiXHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5cclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgY3JlYXRlU2FnYSBmcm9tICdyZWR1eC1zYWdhJ1xyXG4vLyBpbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYS9pbmRleCdcclxuXHJcblxyXG5cclxuLy8vZnJvbSAgIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXpsdWxrYXJpbXdlYi93aXRoLW5leHQtcmVkdXgtd3JhcHBlci1yZWR1eC1wZXJzaXN0ICDrhKXsiqTtirgg66as642V7IqkIO2NvOyLnOyKpO2KuOyXkCDrj4Tsm4DsnYQg7KSAICDqs6Drp4jsmrQg67aE65OkXl5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGxvZ2dldHJNaWRkZWx3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coYWN0aW9uKTsgXHJcbiAgLy8gY29uc29sZS5sb2coZGlzcGF0Y2gpOyBcclxuICAvLyBjb25zb2xlLmxvZyhnZXRTdGF0ZSk7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhKCk7IFxyXG5cclxuICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKVxyXG4gIC8vIFN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKSBcclxuXHJcbiAgcmV0dXJuIFN0b3JlXHJcbn1cclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICh7IGlzU2VydmVyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbbG9nZ2V0ck1pZGRlbHdhcmUsIHRodW5rTWlkZGxld2FyZV07XHJcbiAgLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdOyBcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIpLmRlZmF1bHQ7XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAga2V5OiBcInJvb3RcIixcclxuICAgICAgc3RvcmFnZSxcclxuICAgICAgd2hpdGVsaXN0OiBbIFwidXNlclwiLFwiYXJ0aWNsZVwiLCBcImJvYXJkXCIsJ3ZvdGUnXSwgXHJcbiAgICAgIGJsYWNrbGlzdDpbJ2NvbW1lbnQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcik7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0ZWRSZWR1Y2VyLCBlbmhhbmNlcik7XHJcblxyXG4gICAgc3RvcmUuX19wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGF2ZWxvcG1lbnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9