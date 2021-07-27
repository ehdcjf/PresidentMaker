import { useContext, useEffect } from "react";
import { kakaoCallback } from "../../components/api/kakaoCallback";
import Store from "../store/context";

const KakaoLogin = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    kakaoCallback(dispatch, code);
    // await dispatch(userActions.kakaoLogin(code));
  }, []);

  return (
    <>
      <span>카카오 로구인 즁입니돠</span>
      <br />
      <span>
        기다리게 해서 <strong>미안하돠</strong>
      </span>
      <br />
      <strong>고맙돠</strong>
    </>
  );
};

export default KakaoLogin;
