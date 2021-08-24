import CommentLayout from "./CommentLayout";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  createComment,
  showComment,
  destroyComment,
  updateComment,
} from "../api/Comment";


const defaultComment = {
  board_id: null,
  comment_id: null,
  writer: null,
  writer_nick: null,
  content: null,
  root: 0,
  createdAt: null,
  image: null,
  nickname: null,
  liked: 0,
  disliked: 0,
  updated: false,
  reply_cnt: 0,
  target: 0,
  target_id: null,
  target_nick: null,
  isWriter: true,
  isLike: null,
}


const Comment = ({board_id}) => {
  const {image,nickname} = useSelector((state)=>state.user)
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [fetching, setFetching] = useState(false);

  //===== init

  ///=====CREATE
  const handleCreate = async (v) => {
    const data = {
      board_id: board_id,
      content: v.content,
      root:v.root,
    };
    const result = await createComment(data);
    if (result.success) {
      const commentInfo = {
        ...defaultComment,
        board_id: board_id,
        comment_id: result.id,
        writer: result.writer,
        writer_nick: nickname,
        content: v.content,
        root: v.root,
        createdAt: result.createdAt,
        image: image,
      };
        const newList = [commentInfo, ...list];
        setList(newList);
        ///아티클에서 댓글 수 추가해주기.
      
    }
    else{
      alert(result.error)
    }
  };

  //======READ

  useEffect(async () => {
    const data = {
      board_id: board_id,
      skip: skip,
      root: 0,
    };
    const result = await showComment(data);
    const newList = [...list, ...result];
    setList(newList);
    setSkip(skip + 10);
  }, []);

  //////==== infinity
  const fetchMoreComment = async () => {
    setFetching(true);
    const data = {
      board_id: board_id,
      skip: skip,
      root: 0,
    };
    const result = await showComment(data);
    const newList = [...list, ...result];
    setList(newList);
    setSkip(skip + 10);

    setFetching(false);
  };

  // const { loadding, commentItem, error } = state;

  const fetchReply = async (v) => {
    const data = {
      board_id: board_id,
      skip: v.skip,
      root: v.root,
    }
    const result = await showComment(data);
    const newList = list.map(ele=>{
      if(ele.comment_id==v.root){
        if(result.length!=0)
        ele.replys = [result,...ele.replys];
      }
      return ele
    })
    setList([...newList])
  }



  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      fetchMoreComment();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //=====UPDATE
  const handleModify = async (data) => {
    const result = await updateComment(data);
    if (result.success) {
      const newList = [...list];
      newList.forEach((v) => {
        if (v.comment_id == data.comment_id) {
          v.content = data.content;
          v.update = true;
        }
      });
      setList(newList);
      alert("수정되었습니다.");
    } else {
      alert(result.error);
    }
  };

  //====DELETE
  const handleDelete = async (data) => {
    const result = await destroyComment(data);
    if (result.success) {
      const newList = [...list];
      newList.forEach((v) => {
        if (v.comment_id == data.comment_id) {
          v.content = "삭제된 댓글입니다.";
          v.isWriter = false;
        }
      });
      setList(newList);
      alert("삭제되었습니다.");
    } else {
      alert(result.error);
    }
  };

  return (
    <CommentLayout>
      <CommentForm root={0} handleCreate={handleCreate} />
      <CommentList
        list={list}
        root={0}
        handleDelete={handleDelete}
        handleModify={handleModify}
        fetchReply={fetchReply}
      />
    </CommentLayout>
  );
};

export default Comment;
