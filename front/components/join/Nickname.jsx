import { useState } from "react";
import styled from "styled-components";
import { nicknameCheck } from "../api/joinRequest";

const StyledNickname = styled.div``;

const Nickname = ({ value, onComplete, step, handleStep }) => {
  const [nickname, setNickname] = useState(value);

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  // const [complete,setComplete] = useState(false);
  const [available, setAvailable] = useState(null);

  const handleCheck = async () => {
    const data = {
      nickname: nickname,
    };

    const result = await nicknameCheck(data);
    console.log(data);
    if (result.success) {
      setAvailable(true);
      onComplete(data.nickname);
    } else if (result.success == false) {
      setAvailable(false);
      onComplete("");
    } else {
      alert(result.error);
    }
  };

  return (
    <StyledNickname>
      <div>
        <input
          type="text"
          value={nickname}
          onChange={handleChange}
          placeholder="닉네임을 입력해주세요"
        />
        <button onClick={handleCheck}>중복 확인</button>
      </div>
      {(available === true || value !== "") && (
        <span>사용가능한 닉네임입니다.</span>
      )}
      {available === false && <span>이미 사용중인 닉네임입니다.</span>}
      <div>
        {value !== "" && (
          <button
            onClick={() => {
              handleStep(step + 1);
            }}
          >
            다음
          </button>
        )}
      </div>
    </StyledNickname>
  );
};

export default Nickname;
