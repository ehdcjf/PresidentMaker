import { imageUpload } from "../../components/api/joinRequest";
import styled from "styled-components";

const StyledProfil = styled.div`
  & > img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
`;

const ProfilImage = ({ value, onComplete, prev,next,handleNext,handlePrev }) => {
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
        <button onClick={handlePrev}>
          {prev}
        </button>
          <button onClick={handleNext}>
            {next}
          </button>
        
      </div>
    </StyledProfil>
  );
};

export default ProfilImage;
