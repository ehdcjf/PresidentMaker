import Link from "next/link";
import NavToggle from "../NavToggle";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { KAKAO_AUTH_URL, KAKAO_LOGOUT_URL } from "../api/OAuth";

const HeaderContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 5vw;
    box-sizing:border-box;
    border-bottom:1px solid #ddd;
    font-family: "Syncopate", sans-serif;
    
`;

const Gnb = Styled.ul`
    //모바일
    display:flex;
    flex-direction:row;
    justify-content: space-between;
  padding: 50px 0;
  font: 24px;
  letter-spacing: 1px;
  font-family: "Syncopate", sans-serif;
  color: #464646;
  font-weight: 600;
  text-transform: uppercase;
    & > li {
        margin-left:20px;
    }
    //미디어쿼리 PC내용들
    @media only screen and (max-width:768px) {
        display:none;    
    }
`;

const LoginComponent = () => {
  return (
    <>
      <li>
        <Link href={KAKAO_AUTH_URL}>
          <a>로그인/회원가입</a>
        </Link>
      </li>
    </>
  );
};

const LogoutComponent = (props) => {
  return (
    <>
      <li>
        <Link href={KAKAO_LOGOUT_URL}>
          <a>로그아웃</a>
        </Link>
      </li>
      <li>
        <Link href="/user/join">
          <a>회원정보</a>
        </Link>
      </li>
    </>
  );
};

const Header = () => {
  const { IsLogin, nickname } = useSelector((state) => state.user);

  // console.log(IsLogin);

  return (
    <HeaderContainer>
      {/* 로고와 메뉴 */}
      <h1>pRESIDENT MAKER</h1>
      <Gnb>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>투표</a>
          </Link>
        </li>
        <li>
          <Link href="/board/list?type=all&rows=20&page=1">
            <a>게시판</a>
          </Link>
        </li>
        {IsLogin === false ? <LoginComponent /> : <LogoutComponent />}
      </Gnb>
      <NavToggle />
    </HeaderContainer>
  );
};

export default Header;
