import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { DeleteComment } from "../../reducers/comment";
import { destroyComment } from "../api/Comment";
import UpdateForm from "./CommentUpdateForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import styled from "styled-components";
import { LikeBtn } from "../board/LikeBtn";

const StyledCommentItem = styled.div`
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
    width: 90%;
    height: auto;
    overflow: hidden;
}

`



const CommentItem = ({
  board_id,
  comment_id,
  image,
  writer_nick,
  writer,
  content,
  root,
  createdAt,
  updated,
  liked,
  disliked,
  reply_cnt,
  target_id,
  target_nick,
  isLike,
  isWriter,
}) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [createReply, setCreateReply] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const handleUpdate = (value) => {
    setUpdate(value);
  };

  const handleCreate = (value) => {
    setCreateReply(value);
  };

  const handleShow = (value) => {
    setTimeout(setShowReply(value), 1000);
  };

  const handleDelete = async () => {
    const answer = confirm("삭제하시겠습니까?");
    if (answer) {
      const data = { comment_id: comment_id, writer: writer };
      const result = await destroyComment(data);
      if (result.success) {
        dispatch(DeleteComment(comment_id));
      } else {
        alert(result.error);
      }
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
            {updated && <span>(수정됨)</span>}
            {isWriter && (
              <>
                <button onClick={() => handleUpdate(true)}>수정</button>
                <button onClick={handleDelete}>삭제</button>
              </>
            )}
          </li>
          {update ? (
            <UpdateForm
              content={content}
              handleUpdate={handleUpdate}
              comment_id={comment_id}
              writer={writer} //확인용.
            />
          ) : (
            <li>{content}</li>
          )}

          <li>
            
              <LikeBtn liked={liked} disliked={disLiked} isLike={isLike} type={'clike'} id={comment_id} />
            
            {createReply === false ? (
              <span
                onClick={() => {
                  handleCreate(true);
                }}
              >
                답글쓰기
              </span>
            ) : (
              <span
                onClick={() => {
                  handleCreate(false);
                }}
              >
                답글쓰기 취소
              </span>
            )}
          </li>
          {createReply && (
            <CommentForm root={comment_id} handleCreate={handleCreate} board_id={board_id}/>
          )}
          <li>
            {parseInt(reply_cnt) > 0 && (
              <>
                {showReply === false ? (
                  <span
                    onClick={() => {
                      handleShow(true);
                    }}
                  >
                    답글 {reply_cnt}개 보기
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      handleShow(false);
                    }}
                  >
                    답글 숨기기
                  </span>
                )}
              </>
            )}
          </li>
          {showReply && (
            <li>
              <ul>
                <CommentList root={comment_id} isReply={true} board_id={board_id}/>
              </ul>
            </li>
          )}
        </ul>
      </StyledCommentItem>
    </>
  );
};

export default CommentItem;
