import styled from "styled-components";
import { korea } from "../../public/korea";
import { list19 } from "../../public/list19";

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
  prev,
  handlePrev,
  nickname,
  gender,
  birth,
  hometown,
  residence,
  vote19,
  vote20,
  profil,
  voteId,
  latestVote,
  voteTitle,
  voteContent,
  voteDate,
}) => {
  const dispatch = useDispatch();
  const myvote19 = list19.filter((v) => v.politician_id == vote19.value)[0];
  const myvote20 = latestVote.filter((v) => v.politician_id == vote20.value)[0];
  const myhometown = korea[hometown.value];
  const myresidence = korea[residence.value];

  const handleSubmit = async () => {
    const data = {
      kakao,
      nickname: nickname.value,
      birth: birth.value,
      hometown: hometown.value,
      residence: residence.value,
      gender: gender.value,
      image: profil.value,
      vote19: vote19.value,
      vote20: vote20.value,
      vote_id: voteId,
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
            {gender.value ? <span>남자</span> :<span>여자</span>}
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
            <div
              style={{ backgroundImage: `url(${myvote19.politician_image})` }}
            />
          </div>
          <h3>{myvote19.politician_name}</h3>
        </li>
        <li>
          <span>{voteTitle}</span>
          <span>{voteContent}</span>
          <span>{voteDate}</span>
          <div>
            <div
              style={{ backgroundImage: `url(${myvote20.politician_image})` }}
            />
          </div>
          <h3>{myvote20.politician_name}</h3>
        </li>
      </ul>

      <div>
        <button onClick={handlePrev}>{prev}</button>
        <button onClick={handleSubmit}>회원가입</button>
      </div>
    </div>
  );
};

export default Result;
