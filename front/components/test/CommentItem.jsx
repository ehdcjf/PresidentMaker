import { useState, useEffect } from "react";
import Link from "next/link";
import UpdateForm from "./CommentUpdateForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList"
import styled from "styled-components";
import { CommentCntUp } from "../../reducers/article";
import { KAKAO_AUTH_URL } from "../../components/api/OAuth";
import Router from "next/router";


import {
  createComment,
  showComment,
  destroyComment,
  updateComment,
} from "../api/Comment";
import { useDispatch, useSelector } from "react-redux";
import {CommentLikeBtn} from "./CommentLikeBtn";

const StyledCommentItem = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 10px 0;
& > .image {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
  }

&>ul{
  float: left;
    width: 85%;
    height: auto;
    overflow: hidden;
}

`



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
  target_id: null,
  target_nick: null,
  isWriter: true,
  isLike: null,
}









const CommentItem = ({
  board_id, comment_id,image,writer,writer_nick,content,root,createdAt,liked,disliked,updated,reply_cnt,target_id,target_nick,isLike,isWriter,handleDelete,handleModify,OriginhandleCreate
}) => {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [update, setUpdate] = useState(false);
  const [create, setCreate] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyCnt,setReplyCnt]= useState(reply_cnt)
  const {nickname,IsLogin} = useSelector((state)=>state.user)
  const clientImage = useSelector(state=>state.user.image)
  const dispatch = useDispatch(); 




  const handleUpdate = (value) => {
    if(IsLogin){
      setUpdate(value);
    }else{
      if(confirm('????????????????????????????')){
        Router.push(`${KAKAO_AUTH_URL}`)
      }
    }
  };

  const showReplyMakeForm = (value) => {
    setCreate(value);
  };

  const handleShow = (value) => {
    setShowReply(value)
  };

  const deleteRequest = () => {
    if(IsLogin){
      const answer = confirm("?????????????????????????");
      if (answer) {
        handleDelete();
      }
    }else{
      if(confirm('????????????????????????????')){
        Router.push(`${KAKAO_AUTH_URL}`)
      }
    }
  };

  /////////////////repli CRUD/////////////////////


   ///=====CREATE
 const handleCreate = async (v) => {
  const target = v.target===undefined ? 0 : v.target
  const data = {
    board_id: board_id,
    content: v.content,
    root:v.root,
    target:target
  };
  
  const result = await createComment(data);
  if (result.success) {
    const commentInfo = {
      ...defaultComment,
      board_id: board_id,
      comment_id: result.id,
      writer: result.writer,
      writer_nick: nickname,
      content: v.content,
      root: v.root,
      createdAt: result.createdAt,
      image: clientImage,
      target_id:v.target_id,
      target_nick:v.target_nick,
    };
      const newList = [commentInfo, ...list];
      setList(newList);
      setReplyCnt(replyCnt+1);
      dispatch(CommentCntUp()) 
  }
  else{
    alert(result.error)
  }
};






  //======READ

  useEffect(async () => {
    /* ?????? ????????? ??????????????? ???????????? ???????????????. ????????? ?????? ???????????? ?????? ?????? ?????? ????????? ?????????? ??????????????? ???????????? ?????????. 
    0-> 10-> 20->30 ?????? ????????? ?????????????????? ????????? ?????? 
    10?????? ??????????????????,  30?????? ?????? ??? ?????? ????????? ??????. 
    */ 
    const data = {
      board_id: board_id,
      skip: skip,
      root: comment_id,
      type:'old'
    };
    const result = await showComment(data);
    const newList = [...list, ...result].sort((a,b)=>{
      return a.comment_id-b.comment_id
    });
    setList(newList);
    setSkip(skip + 10);

    return () => {
      setList([]);
      setSkip(0);
    };
  },[]);



 



  const fetchMoreComment = async () => {
    const data = {
      board_id: board_id,
      skip: skip,
      root:comment_id,
      type:'old'
    };
    const result = await showComment(data);
    const newList = [...list, ...result];
    setList(newList);
    setSkip(skip + 10);
  };

  ////  reply Update

  const handleModifyReply = async (data) => {
    const result = await updateComment(data);
    if (result.success) {
      const newList = [...list];
      newList.forEach((v) => {
        if (v.comment_id == data.comment_id) {
          v.content = data.content;
          v.updated = true;
        }
      });
      setList(newList);
      alert("?????????????????????.");
    } else {
      alert(result.error);
    }
  };

  const handleDeleteReply = async (data) => {
    const result = await destroyComment(data);
    if (result.success) {
      const newList = [...list];
      newList.forEach((v) => {
        if (v.comment_id == data.comment_id) {
          v.content = "????????? ???????????????.";
          v.isWriter = false;
          // v.type = null;
        }
      });
      setList(newList);
      alert("?????????????????????.");
    } else {
      alert(result.error);
    }
  };

  return (
    <>
      <StyledCommentItem>
        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
        <ul>
          <li>
            <Link href="/user/info/:id" as={`/user/info/${writer}`}>
              <a>{writer_nick}</a>
            </Link>
            <span>{createdAt}</span>
            {updated && <span>(?????????)</span>}
            {isWriter && (
              <>
                <button onClick={() => handleUpdate(true)}>??????</button>
                <button onClick={deleteRequest}>??????</button>
              </>
            )}
          </li>
          {update ? (
            <UpdateForm
              content={content}
              handleUpdate={handleUpdate}
              handleModify={handleModify}
              comment_id={comment_id}
              writer={writer}
            />
          ) : (
            <li>
              {target_nick &&<Link href="/user/info/:id" as={`/user/info/${target_id}`}>
              <a>@{target_nick}</a>
            </Link>}
              
              {content}
              </li>
          )}

            {root===0 ?(
              <>
            <li>
            <span>
            <CommentLikeBtn liked={liked} disliked={disliked} isLike={isLike} type={'clike'} id={comment_id} />
            </span>
            {create === false ? (
              <span
                onClick={() => {
                  showReplyMakeForm(true);
                }}
              >
                ????????????
              </span>
            ) : (
              <span
                onClick={() => {
                  showReplyMakeForm(false);
                }}
              >
                ???????????? ??????
              </span>
            )}
          {create && <CommentForm  root={comment_id} handleCreate={handleCreate}  showReplyMakeForm={showReplyMakeForm} handleShow={handleShow}/>}
          </li>
          <li>
            {parseInt(replyCnt) > 0 && (
              <>
                {showReply === false ? (
                  <span
                    onClick={() => {
                      handleShow(true);
                    }}
                  >
                    ?????? {replyCnt}??? ??????
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      handleShow(false);
                      // clearReply();
                    }}
                  >
                    ?????? ?????????
                  </span>
                )}
              </>
            )}
          </li>
          {showReply && (
            <li>
              <ul>
                <CommentList
                  root={comment_id}
                  
                  origin
                  list={list}
                  handleDelete={handleDeleteReply}
                  handleModify={handleModifyReply}
                  OriginhandleCreate={handleCreate}
                />
                
                {replyCnt > list.length && (
                  <li>
                    <span onClick={fetchMoreComment}>?????? ?????????</span>
                  </li>
                )}
              </ul>
            </li>
          )}
              </>

            ) :
            <>
               <li>
            <span>
            <CommentLikeBtn liked={liked} disliked={disliked} isLike={isLike} type={'clike'} id={comment_id} />
            </span>
            {create === false ? (
              <span
                onClick={() => {
                  showReplyMakeForm(true);
                }}
              >
                ????????????
              </span>
            ) : (
              <span
                onClick={() => {
                  showReplyMakeForm(false);
                }}
              >
                ???????????? ??????
              </span>
            )}
          {create && <CommentForm root={root} target={writer} handleCreate={OriginhandleCreate} target_id={writer} target_nick={writer_nick} showReplyMakeForm={showReplyMakeForm} handleShow={handleShow}/>}
          </li>
            </>}

        </ul>
      </StyledCommentItem>
    </>
  );
};

export default CommentItem;
