import Head from "next/head";
import { useState, useEffect } from "react";
import { joinRequest } from "../../components/api/joinRequest";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../reducers/user";
import useComplete from "../../hooks/useComplete";
import Nickname from "../../components/join/Nickname";
import ProfilImage from "../../components/join/ProfilImage";
import Gender from "../../components/join/Gender";
import Birth from "../../components/join/Birth";
import Area from "../../components/join/Area";
import Vote from "../../components/join/Vote";
import { list19 } from "../../public/list19";
import { list20 } from "../../public/list20";
import Result from "../../components/join/Result";
import Router from "next/router";

const Join = () => {
  const dispatch = useDispatch();
  const [kakao, setKakao] = useState();
  const nickname = useComplete("");
  const gender = useComplete(null);
  const birth = useComplete(null);
  const hometown = useComplete(null);
  const residence = useComplete(null);
  const vote19 = useComplete(null);
  const vote20 = useComplete(null);
  const profil = useComplete("/defaultProfil.png");
  const [step, setStep] = useState(0);

  useEffect(async () => {
    const code = new URL(window.location.href).searchParams.get("id");
    setKakao(code);
  }, []);

  const handleStep = (data) => {
    setStep(data);
  };

  const handleSubmit = async () => {
    const data = {
      kakao: kakao,
      nickname: nickname.value,
      birth: birth.value,
      hometown: hometown.value,
      residence: residence.value,
      gender: gender.value,
      image: profil.value,
      vote19: vote19.value,
      vote20: vote20.value,
    };
    const result = await joinRequest(data);
    dispatch(UserLoginAction(result));
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Join</title>
      </Head>
      {step === 0 && (
        <Nickname {...nickname} step={step} handleStep={handleStep} />
      )}
      {step === 1 && (
        <ProfilImage {...profil} step={step} handleStep={handleStep} />
      )}
      {step === 2 && <Gender {...gender} step={step} handleStep={handleStep} />}
      {step === 3 && <Birth {...birth} step={step} handleStep={handleStep} />}
      {step === 4 && <Area {...hometown} step={step} handleStep={handleStep} />}
      {step === 5 && (
        <Area {...residence} step={step} handleStep={handleStep} />
      )}
      {step === 6 && (
        <Vote
          {...vote19}
          title="19대 대선 지지 후보"
          list={list19}
          step={step}
          handleStep={handleStep}
        />
      )}
      {step === 7 && (
        <Vote
          {...vote20}
          title="20대 대선 지지 후보"
          list={list20}
          step={step}
          handleStep={handleStep}
        />
      )}
      {step === 8 && (
        <Result
          list19={list19}
          list20={list20}
          nickname={nickname}
          gender={gender}
          birth={birth}
          hometown={hometown}
          residence={residence}
          vote19={vote19}
          vote20={vote20}
          profil={profil}
          step={step}
          handleStep={handleStep}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Join;
