import styled from "styled-components";

const StyledWrap = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  width: 60%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;

const BoardLayout = ({ children }) => {
  return (
    <StyledWrap>
      <StyledContainer>
        <h1>자유게시판</h1>
        {children}
      </StyledContainer>
    </StyledWrap>
  );
};

export default BoardLayout;
