import Link from 'next/link'
import styled from 'styled-components';

const StyledLinkBtn = styled.div`
  display: inline;
  padding: 7px 14px;
  color:black;
  border: 1px solid black;
  border-radius: 5px;
`


export const LinkBtn = (props) => {
  const {value,link} = props; 
  return(
    <StyledLinkBtn>
      <Link href={link}><a> {value} </a></Link>
    </StyledLinkBtn>
  )
}


//div는 나중에 스타일드 컴포넌트 주기.
//img도 받아서 버튼에 이미지도 넣어주기. 글쓰기는 펜, 검색은 돋보기. 인기글은 별 이런식으로