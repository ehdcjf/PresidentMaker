import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showArticle, deleteArticle } from "../../../components/api/Article";
import { ShowArticleAction } from "../../../reducers/article";
import { DeleteArticleAction } from "../../../reducers/board";
import Link from "next/link";
import Router from "next/router";

const View = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.article);
  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    if (id !== undefined) {
      const data = { id: id };
      const result = await showArticle(data);
      dispatch(ShowArticleAction(result));
    }
  }, [id]);

  const deleteHandler = async () => {
    const data = {
      id,
      useridx: view.useridx,
    };
    const result = await deleteArticle(data);
    if (result.success === true) {
      dispatch(DeleteArticleAction(result));
      //  Router.back();
    } else {
      confirm("당신에게는 이 글에 대한 삭제 권한이 없습니다.");
    }
  };

  const renderArticleAction = () => {
    if (view.del === 0 && view.isWriter === true) {
      return (
        <>
          <button>수정</button>
          <button onClick={deleteHandler}>삭제</button>
        </>
      );
    }
  };

  return (
    <div>
      <h2>{view.subject}</h2>
      작성일: <span>{view.createdAt}</span>
      <br />
      작성자:{" "}
      <span>
        <Link href="/user/info/:[useridx]" as={`/user/info/${view.useridx}`}>
          <a>{view.nickname}</a>
        </Link>
      </span>
      <br />
      조회수: <span>{view.hit}</span>
      <br />
      추천수: <span>{view.like}</span>
      <div dangerouslySetInnerHTML={{ __html: view.content }}></div>
      {renderArticleAction()}
    </div>
  );
};

export default View;
