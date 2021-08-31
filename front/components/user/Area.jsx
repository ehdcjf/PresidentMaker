import styled from "styled-components";
import classNames from "classnames";
import { korea } from "../../public/korea";

const StyledArea = styled.div`
  & > div > button.isSelected {
    outline: blue;
    background-color: cyan;
  }
`;

const Area = ({ value, onComplete, title, prev,next,handleNext,handlePrev }) => {
  const renderArea = () => {
    return korea.map((v, i) => {
      return (
        <button
          key={i}
          className={classNames({ isSelected: value == i })}
          onClick={() => {
            onComplete(i);
          }}
        >
          {v}
        </button>
      );
    });
  };

  return (
    <StyledArea>
      {title === '고향' ? <h2>고향</h2> : <h2>거주지</h2>}
      <div>{renderArea()}</div>
      
      <div>
        <button onClick={handlePrev}>
          {prev}
        </button>
        {value !== null && (
          <button onClick={handleNext}>
            {next}
          </button>
        )}
      </div>
      
    </StyledArea>
  );
};

export default Area;
