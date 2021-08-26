import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showList } from "../../components/api/showList";
import { ShowListAction } from "../../reducers/board";
import { Pageblock } from "../../components/board/Pageblock";
import Router from "next/router";
import RowBtn from "../../components/board/RowBtn";
import SearchBox from "../../components/board/SearchBox";
import BoardType from "../../components/board/BoardType";
import { KAKAO_AUTH_URL } from "../../components/api/OAuth";

const List = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const {IsLogin} = useSelector(state=>state.user);

  useEffect(async () => {
    const queryStr = new URL(window.location.href).searchParams;
    const data = {
      type: queryStr.get("type"),
      rows: queryStr.get("rows"),
      page: queryStr.get("page"),
      search: queryStr.get("search"),
      keyword: queryStr.get("keyword"),
    };

    const result = await showList(data);
    if(result.success){
      await dispatch(ShowListAction(result));
    }else{
      alert(result.error)
    }
  }, []);


  const handlePage = async (data) => {
    const updatePage = { ...board, ...data, };
    let url = `/board/list?type=${updatePage.type}&rows=${updatePage.rows}&page=${updatePage.page}`
    if(  updatePage.search!=null &&updatePage.keyword!=null) url+=`&search=${updatePage.search}&keyword=${updatePage.keyword}`
    const result = await showList(updatePage);
    if(result.success){
      dispatch(ShowListAction(result));

      Router.push(
        {
          pathname: `/board/list`,
          query: updatePage,
        },
        url,
        { shallow: true }
        );
      }else{
        alert(result.error); 
      }
  };

  const moveWrite = () =>{
    if(IsLogin){
    Router.push(`/board/write`);
    }else{
      if(confirm('로그인하시겠습니까?')){
        Router.push(`${KAKAO_AUTH_URL}`)
      }
    }
  }



  const renderList = (list) => {
    return list.map((v) => {
      return (
        <tr key={v.board_id}>
          <td>{v.board_id}</td>
          <td>
            <Link
              href="/board/view/:[board_id]"
              as={`/board/view/${v.board_id}`}
            >
              <a>{v.subject}
              {v.comment_cnt>0 && <span>
              [{v.comment_cnt}]
              </span>}
              </a>
            </Link>
          </td>
          <td>{v.nickname}</td>
          <td>{v.createdAt}</td>
          <td>{v.hit}</td>
          <td>{v.liked}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div>
        <div>
        <BoardType
          handlePage={handlePage}
          type={board.type}
        />
        </div>
        <div>
          <span onClick={moveWrite}>글쓰기</span>
          {/* <Link href="/board/write">
            <a>글쓰기</a>
          </Link> */}
          <RowBtn
            rows={board.rows}
            handlePage={handlePage}
          />

        </div>

        <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>닉네임</th>
              <th>작성일</th>
              <th>조회수</th>
              <th>추천수</th>
            </tr>
          </thead>
          <tbody>{renderList(board.list)}</tbody>
        </table>
      </div>
      <Pageblock
        pageblock={board.pageblock}
        endpage={board.endpage}
        handlePage={handlePage}
      />
      <SearchBox
        search={board.search}
        keyword={board.keyword}
        handlePage={handlePage}
      />
    </>
  );
};

export default List;
