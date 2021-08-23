
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
  comment: [],
}

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
}



const SHOW_ARTICLE_REQUEST = 'SHOW_ARTICLE_REQUEST'
const SHOW_ARTICLE_SUCCESS = 'SHOW_ARTICLE_SUCCESS'
const SHOW_ARTICLE_ERROR = 'SHOW_ARTICLE_ERROR'
const INSERT_B_LIKE_ACTION = 'INSERT_B_LIKE_ACTION'
const INSERT_B_DISLIKE_ACTION = 'INSERT_B_DISLIKE_ACTION'
const DELETE_B_LIKE_ACTION = 'DELETE_B_LIKE_ACTION'
const DELETE_B_DISLIKE_ACTION = 'DELETE_B_DISLIKE_ACTION'
const UPDATE_B_LIKE_ACTION = 'UPDATE_B_LIKE_ACTION'
const UPDATE_B_DISLIKE_ACTION = 'UPDATE_B_DISLIKE_ACTION'

const ADD_COMMENT = 'ADD_COMMENT';
const ADD_COMMENTS = 'ADD_COMMENTS';
const ADD_REPLYS = 'ADD_REPLYS';



export const ShowArticleAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowArticleRequest());
    try {
      data.success === true
        ? dispatch(ShowArticleSuccess(data))
        : dispatch(ShowArticleError())
    } catch (e) {
      dispatch(ShowArticleError())
    }
  }
}

export const ShowArticleRequest = () => {
  return {
    type: SHOW_ARTICLE_REQUEST,
  }
}
export const ShowArticleSuccess = (data) => {
  return {
    type: SHOW_ARTICLE_SUCCESS,
    data: data,
  }
}
export const ShowArticleError = () => {
  return {
    type: SHOW_ARTICLE_ERROR,
  }
}

export const InsertBLikeAction = (data) => {
  if (data) {
    return {
      type: INSERT_B_LIKE_ACTION,
      data: data,
    }
  } else {
    return {
      type: INSERT_B_DISLIKE_ACTION,
      data: data,
    }
  }
}

export const DeleteBLikeAction = (data) => {
  if (data) {
    return {
      type: DELETE_B_LIKE_ACTION,

    }
  } else {
    return {
      type: DELETE_B_DISLIKE_ACTION,

    }
  }
}

export const UpdateBLikeAction = (data) => {
  if (data) {
    return {
      type: UPDATE_B_LIKE_ACTION,
    }
  } else {
    return {
      type: UPDATE_B_DISLIKE_ACTION,

    }
  }
}

export const AddComment = (data) => {

  return {
    type: ADD_COMMENT,
    data: data,
  }
}


export const AddComments = (data) => {

  return {
    type: ADD_COMMENTS,
    data: data,
  }
}

export const AddReplys = (data) => {

  return {
    type: ADD_REPLYS,
    data: data,
  }
}








const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SHOW_ARTICLE_REQUEST:
      return {
        ...state,
        loadding: true,

      }
    case SHOW_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.data,
        loadding: false,
      }
    case SHOW_ARTICLE_ERROR:
      return {
        ...state,
        loadding: false,
      }
    case INSERT_B_LIKE_ACTION:
      return {
        ...state,
        isLike: true,
        liked: state.liked + 1,
      }
    case INSERT_B_DISLIKE_ACTION:
      return {
        ...state,
        isLike: false,
        disliked: state.disliked + 1,
      }
    case DELETE_B_LIKE_ACTION:
      return {
        ...state,
        isLike: null,
        liked: state.liked - 1,
      }
    case DELETE_B_DISLIKE_ACTION:
      return {
        ...state,
        isLike: null,
        disliked: state.disliked - 1,
      }
    case UPDATE_B_LIKE_ACTION:
      return {
        ...state,
        isLike: true,
        liked: state.liked + 1,
        disliked: state.disliked - 1,
      }
    case UPDATE_B_DISLIKE_ACTION:
      return {
        ...state,
        isLike: false,
        liked: state.liked - 1,
        disliked: state.disliked + 1,
      }

    case ADD_COMMENT:
      if (action.data.root === 0) {
        const originComments = state.comment;
        const comment = {
          ...defaultComment, ...action.data,
        }
        const newComments = [comment, ...originComments];
        return {
          ...state,
          comment: newComments,
        }

      } else {
        const newReply = {
          ...defaultComment, ...action.data,
        }
        state.comment.forEach(v => {
          if (v.comment_id == action.data.root) {
            v.replys = [newReply, ...v.replys]
            v.reply_cnt = v.reply_cnt + 1;
          }
        })
        return {
          ...state,
        }
      }

    case ADD_COMMENTS:
      const addedComments = [...state.comment, ...action.data]
      return {
        ...state,
        comment: addedComments,
      }

    case ADD_REPLYS:
      console.log(action.data[0].root)
      state.comment.forEach(v => {
        if (v.comment_id == action.data[0].root) {
          v.replys = [...v.replys, ...action.data]
        }
      })
      return {
        ...state,
      }

    default:
      return state
  }
}

export default reducer