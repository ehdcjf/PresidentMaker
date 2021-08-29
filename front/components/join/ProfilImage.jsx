import { imageUpload } from "../../components/api/joinRequest";
import styled from "styled-components";

const StyledProfil = styled.div`
  & > img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
`;

const ProfilImage = ({ value, onComplete, step, handleStep }) => {
  const handleImage = async (e) => {
    const imageURI = await imageUpload(e.target.files[0]);
    onComplete("http://localhost:3002/" + imageURI);
  };

  return (
    <StyledProfil>
      <h2>프로필사진</h2>
      <img src={value} alt="프로필 사진" />
      <input type="file" onChange={handleImage} />

      <div>
        <button
          onClick={() => {
            handleStep(step - 1);
          }}
        >
          이전
        </button>
        {value !== null && (
          <button
            onClick={() => {
              handleStep(step + 1);
            }}
          >
            다음
          </button>
        )}
      </div>
    </StyledProfil>
  );
};

export default ProfilImage;
