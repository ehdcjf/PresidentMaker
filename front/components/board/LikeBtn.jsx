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

export const LikeBtn = (props) => {
  const dispatch = useDispatch();
  const { liked, disliked } = props;
  const { isLike, type, board_id } = props;

  const handleOutlineLike = (value) => {
    if (isLike === null) {
      handleInsert(value);
    } else {
      handleUpdate(value);
    }
  };

  const handleInsert = async (value) => {
    const data = {
      board_id: board_id,
      isLike: value,
      type: type,
      action: "INSERT",
    };

    const result = await likeAction(data);
    if (type === "blike") {
      dispatch(InsertBLikeAction(result.isLike));
    }
  };

  const handleDelte = async (value) => {
    const data = {
      board_id: board_id,
      type: type,
      action: "DELETE",
    };
    const result = await likeAction(data);
    if (type === "blike") {
      dispatch(DeleteBLikeAction(value));
    }
  };

  const handleUpdate = async (value) => {
    const data = {
      board_id: board_id,
      isLike: value,
      type: type,
      action: "UPDATE",
    };

    const result = await likeAction(data);
    if (type === "blike") {
      dispatch(UpdateBLikeAction(value));
    }
  };

  return (
    <>
      <h3 className="liked">{liked}</h3>
      {isLike === true ? (
        <h2
          onClick={() => {
            handleDelte(true);
          }}
        >
          <AiFillLike />
        </h2>
      ) : (
        <h2
          onClick={() => {
            handleOutlineLike(true);
          }}
        >
          <AiOutlineLike />
        </h2>
      )}
      {isLike === false ? (
        <h2
          onClick={() => {
            handleDelte(false);
          }}
        >
          <AiFillDislike />
        </h2>
      ) : (
        <h2
          onClick={() => {
            handleOutlineLike(false);
          }}
        >
          <AiOutlineDislike />
        </h2>
      )}
      <h3 className="disliked">{disliked}</h3>
    </>
  );
};
