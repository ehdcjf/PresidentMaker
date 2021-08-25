import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeAction } from "../api/like";
import {
  InsertBLikeAction,
  DeleteBLikeAction,
  UpdateBLikeAction,
} from "../../reducers/article";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import styled from 'styled-components';

const StyledBoardLikeBtn = styled.div`
width: 15vw;
display: flex;
justify-content: center;

`

export const LikeBtn = (props) => {
  const {type,id,liked,disliked,isLike} = props
  console.log(props.isLike==true)
  const dispatch = useDispatch();

  const handleOutlineLike = (value) => {
    if (isLike === null) {
      handleInsert(value);
    } else {
      handleUpdate(value);
    }
  };

  const handleInsert = async (value) => {
    const data = {
      id: id,
      isLike: value,
      type: type,
      action: "INSERT",
    };

    const result = await likeAction(data);
    if(result.success){
        dispatch(InsertBLikeAction(result.isLike));
    }
  };

  const handleDelte = async (value) => {
    const data = {
      id: id,
      type: type,
      action: "DELETE",
    };
    const result = await likeAction(data);
    if(result.success){
      dispatch(DeleteBLikeAction(value));
    };
  }

  const handleUpdate = async (value) => {
    const data = {
      id: id,
      isLike: value,
      type: type,
      action: "UPDATE",
    };

    const result = await likeAction(data);
    if(result.success){
        dispatch(UpdateBLikeAction(value));
    }
  };

  return (
    <StyledBoardLikeBtn>
      <div>

      {isLike == true ? (
        <span
        onClick={() => {
          handleDelte(true);
        }}
        >
          <AiFillLike />
        </span>
      ) : (
        <span
        onClick={() => {
          handleOutlineLike(true);
        }}
        >
          <AiOutlineLike />
        </span>
      )}
      <span className="liked">{liked}</span>
      </div>
      <div>
      {isLike == false ? (
        <span
        onClick={() => {
          handleDelte(false);
        }}
        >
          <AiFillDislike />
        </span>
      ) : (
        <span
          onClick={() => {
            handleOutlineLike(false);
          }}
          >
          <AiOutlineDislike />
        </span>
      )}
      <span className="disliked">{disliked}</span>
      </div>
    </StyledBoardLikeBtn>
  );
};
