
const initialState = {
  loadding: true,
  isWriter: false,
  id: null,
  subject: null,
  content: null,
  hit: null,
  like: null,
  del: null,
  createAt: null,
  updateAt: null,
  nickname: null,
  useridx: null,
  comment: [],
}



const SHOW_ARTICLE_REQUEST = 'SHOW_ARTICLE_REQUEST'
const SHOW_ARTICLE_SUCCESS = 'SHOW_ARTICLE_SUCCESS'
const SHOW_ARTICLE_ERROR = 'SHOW_ARTICLE_ERROR'



export const ShowArticleAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowArticleRequest());
    try {
      const result = data;
      result.success === true
        ? dispatch(ShowArticleSuccess(result))
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
    default:
      return state
  }
}

export default reducer