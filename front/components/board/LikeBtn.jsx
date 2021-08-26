import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeAction } from "../api/like";
import { KAKAO_AUTH_URL } from "../../components/api/OAuth";
import Router from "next/router";

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
width: 9vw;
display: flex;
justify-content: space-around;
align-items: center;


  &>div>span{
    font-size: 40px;
  }

`

export const LikeBtn = (props) => {
  const {type,id,liked,disliked,isLike} = props
  const {IsLogin} = useSelector(state=>state.user)
  
  const dispatch = useDispatch();

  const handleOutlineLike = (value) => {
    if(IsLogin){
      if (isLike === null) {
        handleInsert(value);
      } else {
        handleUpdate(value);
      }
    }else{
      if(confirm('로그인하시겠습니까?')){
        Router.push(`${KAKAO_AUTH_URL}`)
      }
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
    console.log(result.isLike)
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
    console.log(result.isLike)

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
    console.log(result.isLike)

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
          <AiFillLike size={40} />
        </span>
      ) : (
        <span
        onClick={() => {
          handleOutlineLike(true);
        }}
        >
          <AiOutlineLike  size={40}/>
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
          <AiFillDislike size={40} />
        </span>
      ) : (
        <span
          onClick={() => {
            handleOutlineLike(false);
          }}
          >
          <AiOutlineDislike size={40} />
        </span>
      )}
      <span className="disliked">{disliked}</span>
      </div>
    </StyledBoardLikeBtn>
  );
};
