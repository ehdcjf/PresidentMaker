import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { KAKAO_AUTH_URL, KAKAO_LOGOUT_URL } from "../../api/OAuth";
import Link from "next/link";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  font: 24px;
  letter-spacing: 1px;
  font-family: "Syncopate", sans-serif;

  color: #464646;
  font-weight: 600;
  text-transform: uppercase;
`;



const LoginComponent = () => {
  return (
    <>
      <div>
        <Link href={KAKAO_AUTH_URL}>
          <a>Login/Join</a>
        </Link>
      </div>
    </>
  );
};

const LogoutComponent = (props) => {
  const { user_id } = useSelector((state) => state.user);
  const userinfo = `/user/${user_id}`
  return (
    <>
      <div>
        <Link href={KAKAO_LOGOUT_URL}>
          <a>Logout</a>
        </Link>
        <span>/</span>
        <Link href={userinfo}>
          <a>User Info</a>
        </Link>
      </div>
    </>
  );
};

const NavBar = () => {
  const { IsLogin, nickname } = useSelector((state) => state.user);

  return (
    <StyledNavbar data-scroll-section>
      <div>
        <Link href="/">
          <a>president maker</a>
        </Link>
      </div>
      <div>
        <Link href="/vote">
          <a>vote</a>
        </Link>
      </div>
      <div>
        <Link href="/board/list?type=all&rows=30&page=1">
          <a>board</a>
        </Link>
      </div>
      {IsLogin === false ? <LoginComponent /> : <LogoutComponent />}
    </StyledNavbar>
  );
};

export default NavBar;
