import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
// import { DestroyComment } from "../../reducers/comment";
import { destroyComment } from "../api/Comment";
// import UpdateForm from "./CommentUpdateForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
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
  replys,
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
      const data = { id: id, writer: writer };
      const result = await destroyComment(data);
      if (result.success) {
        dispatch(DestroyComment(result.id));
      } else {
        alert(result.error);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          <img src={image} alt="" style={{ width: "40px", height: "40px" }} />
        </div>
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
            <span>
              {liked}/{disliked}
            </span>
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
            <CommentForm root={comment_id} handleCreate={handleCreate} />
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
                <CommentList root={comment_id} isReply={true} />
              </ul>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CommentItem;
