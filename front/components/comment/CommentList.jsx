import React, { useContext } from "react";
import CommentItem from "./CommentItem";
import { useState, useEffect } from "react";
import { showComment } from "../api/Comment";
import { useSelector, useDispatch } from "react-redux";
import { AddComments, AddReplys } from "../../reducers/article";

const CommentList = (props) => {
  const { root, isReply } = props;
  const dispatch = useDispatch();
  const { board_id, comment } = useSelector((state) => state.article);
  const [fetching, setFetching] = useState(false);
  const [skip, setSkip] = useState(0);

  useEffect(async () => {
    const data = {
      board_id: board_id,
      skip: skip,
      root: root,
    };
    const result = await showComment(data);
    if (!isReply) dispatch(AddComments(result));
    else dispatch(AddReplys(result));
    setSkip(skip + 10);
  }, [board_id]);

  const fetchMoreComment = async () => {
    setFetching(true);
    const data = {
      board_id: board_id,
      skip: skip,
      root: root,
    };
    const result = await showComment(data);
    dispatch(AddComments(result));
    setSkip(skip + 10);
    setFetching(false);
  };

  // const { loadding, commentItem, error } = state;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      fetching === false &&
      isReply === false
    ) {
      fetchMoreComment();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const randerItem = () => {
    let list = [];
    if (root === 0) list = comment;
    else {
      list = comment
        .filter((v) => {
          v.comment_id == root;
        })
        .map((v) => v.replys);
      console.log(
        comment.filter((v) => {
          v.comment_id == root;
        })
      );
    }
    return list.map((v, i) => {
      return (
        <CommentItem
          key={i}
          board_id={v.board_id}
          comment_id={v.comment_id}
          image={v.image}
          writer_nick={v.writer_nick}
          writer={v.writer}
          content={v.content}
          root={v.root}
          createdAt={v.createdAt}
          liked={v.liked}
          disliked={v.disliked}
          updated={v.updated}
          replys={v.replys}
          reply_cnt={v.reply_cnt}
          target_id={null}
          target_nick={null}
          isLike={v.isLike}
          isWriter={v.isWriter}
        />
      );
    });
  };

  // if (loadding) return <li>로딩중입니다^^</li>;
  // if (error) return <li>에러!!</li>;
  return <li>{randerItem()}</li>;
};

export default CommentList;
