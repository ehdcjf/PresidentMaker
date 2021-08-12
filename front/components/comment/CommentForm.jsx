import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../api/Comment";

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.article);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = { ...e.target };
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      board_id: id,
      content: input,
      master: props.master,
    };
    const result = await createComment(data);
    console.log(result);
    // createComment(dispatch, payload);
    setInput("");
  };

  return (
    <>
      <li className="comment-form">
        <form onSubmit={handleSubmit}>
          <span className="ps_box">
            <input
              type="text"
              className="int"
              placeholder="댓글을 입력해주세요."
              onChange={handleChange}
              value={input}
            />
          </span>
          <button type="submit" className="btn">
            등록
          </button>
        </form>
      </li>
    </>
  );
};

export default CommentForm;
