import styled from "styled-components";
import { korea } from "../../public/korea";
import { list19 } from "../../public/list19";
import { list20 } from "../../public/list20";
import { joinRequest } from "../../components/api/joinRequest";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../reducers/user";



const StyledResult = styled.div`
  width: 60vw;
  height: auto;
  overflow: hidden;

  & > ul {
  }
  & > ul > li {
    width: 50vw;
  }
`;

const Result = ({
  kakao,
  step,
  handleStep,
  nickname,
  gender,
  birth,
  hometown,
  residence,
  vote19,
  vote20,
  profil,
}) => {
  const dispatch = useDispatch();
  const myvote19 = list19[vote19.value];
  const myvote20 = list20[vote20.value];
  const myhometown = korea[hometown.value];
  const myresidence = korea[residence.value];

  const handleSubmit = async () => {
    const data = {
      kakao,
      nickname:nickname.value,
      birth:birth.value,
      hometown:hometown.value,
      residence:residence.value,
      gender:gender.value,
      image:profil.value,
      vote19:vote19.value,
      vote20:vote20.value,
    };
    const result = await joinRequest(data);
    dispatch(UserLoginAction(result));
    Router.push("/");
  };





  return (
    <div>
      <ul>
        <li>
          <span>프로필사진</span>
          <div>
            <img src={profil.value} alt="프로필 사진" />
          </div>
        </li>
        <li>
          <span>닉네임</span>
          <div>
            <span>{nickname.value}</span>
          </div>
        </li>
        <li>
          <span>성별</span>
          <div>
            <span>{gender.value}</span>
          </div>
        </li>
        <li>
          <span>출생 연도</span>
          <div>
            <span>{birth.value}</span>
          </div>
        </li>
        <li>
          <span>고향</span>
          <div>
            <span>{myhometown}</span>
          </div>
        </li>
        <li>
          <span>거주지</span>
          <div>
            <span>{myresidence}</span>
          </div>
        </li>
        <li>
          <span>19대 대선 지지 후보</span>
          <div>
            <div style={{ backgroundImage: `url(${myvote19.src})` }} />
          </div>
          <h3>{myvote19.name}</h3>
        </li>
        <li>
          <span>20대 대선 지지 후보</span>
          <div>
            <div style={{ backgroundImage: `url(${myvote20.src})` }} />
          </div>
          <h3>{myvote20.name}</h3>
        </li>
      </ul>
      <div>
        <button
          onClick={() => {
            handleStep(step - 1);
          }}
        >
          이전
        </button>

        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Result;
