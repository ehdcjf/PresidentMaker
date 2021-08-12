import React, { useContext } from "react";
import CommentItem from "./CommentItem";
// import Store from "./Store/context";

const CommentList = () => {
  const { state } = useContext(Store); // {state,dispatch}
  const list = state.commentItem;
  const { loadding, commentItem, error } = state;

  const Item = list.map((v, k) => {
    return (
      <CommentItem
      // key={k}
      // userid={v.userid}
      // content={v.content}
      // date={v.date}
      // index={v.id}
      // location={k}
      />
    );
  });

  if (loadding) return <li>로딩중입니다^^</li>;
  if (error) return <li>에러!!</li>;
  return <li>{Item}</li>;
};

export default CommentList;
