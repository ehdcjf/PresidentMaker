
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
  comments:[],
  
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
  replys:[],
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

const COMMENT_CNT_UP = 'COMMENT_CNT_UP'

const ADD_COMMENT = 'ADD_COMMENT';
const GET_COMMENTS = 'GET_COMMENTS';
const Add_REPLY = 'Add_REPLY';
const GET_REPLYS = 'GET_REPLYS';
const CLEAR_REPLYS = 'CLEAR_REPLYS';
const DELETE_COMMENT = 'DELETE_COMMENT';
const DELETE_REPLY = 'DELETE_REPLY';





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

export const CommentCntUp = ()=>{
  return{
    type:COMMENT_CNT_UP,
  }
}




export const AddComment = (data) => {

  return {
    type: ADD_COMMENT,
    data: data,
  }
}

export const GetComments = (data)=>{
  return {
    type:GET_COMMENTS,
    data:data
  }
}

export const AddReply = (data)=>{
  return{
    type:Add_REPLY,
    data:data
  }
}

export const GetReplys = (data)=>{
  return{
    type:GET_REPLYS,
    data:data,
  }
}

export const ClearReplys = (data)=>{
  return{
    type:CLEAR_REPLYS,
    data:data,
  }
}

export const DeleteComment = (data)=>{
  return{
    type:DELETE_COMMENT,
    data:data,
  }
}

export const DeleteReply = (data)=>{
  return{
    type:DELETE_Reply,
    data:data,
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
      
    case COMMENT_CNT_UP:
      console.log(state.comment_cnt)
      return {
        ...state,
          comment_cnt:state.comment_cnt+1,
      }

      case ADD_COMMENT:
        const newComment = {...defaultComment,...action.data}
        return{
          ...state,
          comments:[newComment,...state.comments],
          comment_cnt:state.comment_cnt+1,
        }

      ///중복되는거 아래 replys에서 제거한거처럼 제거해주기.
      case GET_COMMENTS:
        let tempComments = [...state.comments,...action.data];
        // const comments=[];
        // const commentCheck = [];
        // for(let i = 0; i<tempComments.length; i++){
        //   if(!commentCheck.includes(tempComments[i].comment_id)){
        //     commentCheck.push(tempComments[i].comment_id)
        //     comments.push(tempComments[i])
        //   }
        // }
        return{
          ...state,
          comments:tempComments,
        }

      case Add_REPLY:
        const newReply = {...defaultComment,...action.data}
        let replytemp = [...state.comments];
        replytemp.forEach(v=>{
          if(v.comment_id==action.data.root){
              v.replys=[newReply,...v.replys];
              v.reply_cnt = v.reply_cnt+1;
          }
        })
        return{
          ...state,
          comments:replytemp,
          comment_cnt:state.comment_cnt+1,
        }
      
      case GET_REPLYS: 
        const root = action.data[0].root
        let replystemp = [...state.comments];
        replystemp.forEach(v=>{
          if(v.comment_id==root){
              v.replys=[...v.replys,...action.data];
              let check = [];
              let replys = [];
              for(let i = 0; i<v.replys.length; i++){
                if(!check.includes(v.replys[i].comment_id)){
                  check.push(v.replys[i].comment_id)
                  replys.push(v.replys[i])
                }
              }
              v.replys=replys
          }
        })
        return {
          ...state,
          comments:replystemp,
        }
      
      case CLEAR_REPLYS:
        let clearReplys = [...state.comments];
        clearReplys.forEach(v=>{
          if(v.comment_id==action.data){
              v.replys=[];
          }
        })
        return {
          ...state,
          comments:clearReplys,
        }
      
      case DELETE_COMMENT:
        return{...state}
      
      case DELETE_REPLY:
        return{...state}


    default:
      return state
  }
}

export default reducer