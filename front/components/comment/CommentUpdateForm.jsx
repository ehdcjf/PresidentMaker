import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComment } from "../api/Comment";
import { UpdateComment } from "../../reducers/comment";
const UpdateForm = ({content,handleUpdate,comment_id,writer}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(content);

  const handleChange = (e) => {
    const { value } = { ...e.target };
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      comment_id: comment_id,
      content: input,
      writer: writer,
    };
    setInput("");
    handleUpdate(false);
    const result = await updateComment(data);
    if (result.success) {
      dispatch(UpdateComment(result));
    } else {
      alert(result.error);
    }
  };

  return (
    <li className="comment-form">
      <form onSubmit={handleSubmit}>
        <span className="ps_box">
          <input
            type="text"
            className="int"
            // placeholder="댓글을 입력해주세요."
            onChange={handleChange}
            value={input}
          />
        </span>
        <div>
          <button type="submit" className="btn">
            등록
          </button>
          <button
            onClick={() => {
              handleUpdate(false);
            }}
          >
            취소
          </button>
        </div>
      </form>
    </li>
  );
};

export default UpdateForm;