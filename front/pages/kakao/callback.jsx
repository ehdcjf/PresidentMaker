import { useContext, useEffect } from "react";
import { kakaoCallback } from "../../components/api/kakaoCallback";
import Store from "../store/context";
import Router from "next/router";

const KakaoLogin = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const result =await kakaoCallback(dispatch, code);

    //이 아래 부분을 kakaoCallback 함수에서 다 처리하고 싶은데 방법을 못찾음.
    if(!result.isUser){
      
      Router.push(`/user/join?id=${result.userid}`) 
    }else{ 
      //dispatch해주고?.,,     
      Router.push(`/`)
    }
  }, []);

  return (
    <>
      <span>카카오 로구인 즁입니돠</span>
    </>
  );
};

export default KakaoLogin;
