import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledCommentForm = styled.div`
  width: 100%;
  height: 80px;
  padding-bottom: 20px;
  & > .image {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
  }

  & > .content {
    float: left;
    width: 90%;
    height: 90px;

    & > input {
      display: block;
      width: 100%;
      height: 40px;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid #666;
      background-color: transparent;

      &:focus {
        outline: none;
        background-color: #fff;
      }
    }

    & > .action_box {
      width: 100%;
      height: 40px;
      text-align: right;

      button {
        border: none;
        padding: 7px 14px;
      }

      .cancle_btn {
        background-color: #666;
      }

      .submit_btn {
        background-color: cyan;
      }
    }
  }
`;




const CommentForm = ({ handleCreate, root,showReplyMakeForm ,handleShow, target} ) => {
  const {image} = useSelector((state)=>state.user)  
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = { ...e.target };
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      content: input,
      root: root,
    };
    if(target!==undefined) data.target = target
    if(root!=0){
      showReplyMakeForm(false)
      handleShow(true)
    }
    // if (sub_master != undefined) data.sub_master = sub_master;
    handleCreate(data);
    setInput("");
    //
  };

  return (
    <StyledCommentForm>
    <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    <form className="content" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="댓글을 입력해주세요."
        style={{ border: "none", borderRight: "0px", borderLeft: "0px" }}
        onChange={handleChange}
        value={input}
      />
      <div className="action_box">
        <button className="cancle_btn">취소</button>
        <button type="submit" className="submit_btn">
          등록
        </button>
      </div>
    </form>
  </StyledCommentForm>
  );
};

export default CommentForm;
