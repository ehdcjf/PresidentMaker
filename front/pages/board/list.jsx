import { LinkBtn } from "../../components/public/LinkBtn"

const List = () => { 

  return(
    <>
      {/* <LinkBtn value='전체글' link="/board/list?type=all&page=1"/> */}
      {/* <LinkBtn value='인기글' link="/board/list?type=hot&page=1?"/> */}
      
      <button >전체글</button>
      <button >인기글</button>
      <LinkBtn value='글쓰기' link="/board/write"/>
    </>
  )
}

export default List



/*
link 접근이 잘못된거 같음. 
서버에 URI로 요청을 보내는게 아니니까 
전체글, 인기글의 경우 
이니셜스토어에 board 항목을 추가해서 type, page, searchType, searchValue, list 등의 값을 줘야함. 
리듀서로 전달받은 값을 서버에 보낸다음에 조건에 맞는 게시글의 리스트를 배열로 받아와서
상태를 변경하면 화면을 바꿔줘야함. 

글쓰기 같은 경우는 다른 페이지를 보여주는 거니까 링크 거는게 맞는 거 같고. 
*/ 