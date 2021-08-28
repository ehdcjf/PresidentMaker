import FormLayout from "../../components/FormLayout";
import Head from "next/head";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import { imageUpload, joinRequest } from "../../components/api/joinRequest";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../reducers/user";

const Join = () => {
  const dispatch = useDispatch();
  const [kakao, setKakao] = useState();
  const nickname = useInput("");
  const birth = useInput("");
  const [gender, setGender] = useState({ male: false, female: false });
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const [hometown, setHomtown] = useState();
  const [residence, setResidence] = useState();
  const [image, setImage] = useState();

  useEffect(async () => {
    const code = new URL(window.location.href).searchParams.get("id");
    setKakao(code);
  }, []);

  const handleTerm = () => {
    setTermError(term === true);
    setTerm(!term);
  };

  const handleGender = (e) => {
    let temp = { male: false, female: false };
    temp[e.target.value] = e.target.checked;
    setGender(temp);
  };

  const handleHometown = (e) => {
    setHomtown(e.target.value);
  };

  const handleResidence = (e) => {
    setResidence(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageURI = "http://localhost:3001/defaultProfil";
    if (image != undefined) {
      imageURI = await imageUpload(image);
      imageURI = "http://localhost:3002/" + imageURI;
    }

    let sex;
    if (gender.male) {
      sex = 0;
    } else {
      sex = 1;
    }

    const data = {
      kakao: kakao,
      nickname: nickname.value,
      birth: birth.value,
      hometown: hometown,
      residence: residence,
      gender: sex,
      image: imageURI,
      // 투표까지 추가
    };
    const result = await joinRequest(data);
    console.log(result);
    await dispatch(UserLoginAction(result));
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Join</title>
      </Head>
      <FormLayout>
        <h2>회원가입</h2>

        <form onSubmit={handleSubmit}>
          프로필 이미지: <input type="file" onChange={handleImage} />
          <br />
          닉네임:{" "}
          <input
            type="text"
            {...nickname}
            placeholder="닉네임을 입력해주세요"
          />
          <br />
          성별: 남:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender.male}
            onChange={handleGender}
          />
          여:
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender.female}
            onChange={handleGender}
          />
          <br />
          출생 연도:{" "}
          <input type="number" {...birth} placeholder="출생연도 입력해주세요" />
          <br />
          고향:{" "}
          <select name="hometown" onChange={handleHometown}>
            <option value={null}>고향</option>
            <option value={1}>서울특별시</option>
            <option value={2}>부산광역시</option>
            <option value={3}>대구광역시</option>
            <option value={4}>인천광역시</option>
            <option value={5}>광주광역시</option>
            <option value={6}>대전광역시</option>
            <option value={7}>울산광역시</option>
            <option value={8}>세종특별자치시</option>
            <option value={9}>경기도</option>
            <option value={10}>강원도</option>
            <option value={11}>충청북도</option>
            <option value={12}>충청남도</option>
            <option value={13}>전라북도</option>
            <option value={14}>전라남도</option>
            <option value={15}>경상북도</option>
            <option value={16}>경상남도</option>
            <option value={17}>제주특별자치도</option>
          </select>
          <br />
          거주지:{" "}
          <select name="residence" onChange={handleResidence}>
            <option value={null}>거주지</option>
            <option value={1}>서울특별시</option>
            <option value={2}>부산광역시</option>
            <option value={3}>대구광역시</option>
            <option value={4}>인천광역시</option>
            <option value={5}>광주광역시</option>
            <option value={6}>대전광역시</option>
            <option value={7}>울산광역시</option>
            <option value={8}>세종특별자치시</option>
            <option value={9}>경기도</option>
            <option value={10}>강원도</option>
            <option value={11}>충청북도</option>
            <option value={12}>충청남도</option>
            <option value={13}>전라북도</option>
            <option value={14}>전라남도</option>
            <option value={15}>경상북도</option>
            <option value={16}>경상남도</option>
            <option value={17}>제주특별자치도</option>
          </select>
          <br />
          <input
            type="checkbox"
            checked={term}
            onChange={handleTerm}
            id="term"
          />
          <label htmlFor="term">약관에 동의해주세요.</label>
          <br />
          {termError && (
            <div style={{ color: "red" }}>약관에 동의해주세요.</div>
          )}
          <button type="submit">회원가입</button>
        </form>
      </FormLayout>
    </>
  );
};

export default Join;
