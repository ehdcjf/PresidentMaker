import { useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { nicknameCheck } from "../api/joinRequest";

const StyledNickname = styled.div``;

const Nickname = ({ value, onComplete }) => {
  const nickname = useInput("");

  // const [complete,setComplete] = useState(false);
  const [available, setAvailable] = useState(null);

  const handleCheck = async () => {
    const data = {
      nickname: nickname.value,
    };

    const result = await nicknameCheck(data);
    if (result.success) {
      setAvailable(true);
      onComplete(data.nickname);
    } else if (result.success == false) {
      setAvailable(false);
      onComplete(null);
    } else {
      alert(result.error);
    }
  };

  return (
    <StyledNickname>
      <div>
        <input type="text" {...nickname} placeholder="닉네임을 입력해주세요" />
        <button onClick={handleCheck}>중복 확인</button>
      </div>
      {available === true && <span>사용가능한 닉네임입니다.</span>}
      {available === false && <span>이미 사용중인 닉네임입니다.</span>}
      <div>{value !== null && <button>다음</button>}</div>
    </StyledNickname>
  );
};

export default Nickname;
