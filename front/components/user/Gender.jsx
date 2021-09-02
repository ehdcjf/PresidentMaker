import { useState } from "react";
import styled from "styled-components";
import cn from "classnames";

const StyledGender = styled.div`
  & > .btn_box {
    & > .isSelected {
      border: 1px solid blue;
      background-color: cyan;
    }
  }
`;

const Gender = ({ title=null,value, onComplete, prev,next,handleNext,handlePrev }) => {
  const handleGender = (data) => {
    onComplete(data);
  };

  return (
    <StyledGender>
      {title!=null &&(<h2>{title}</h2>)}
      <div className="btn_box">
        <button
          className={cn({ isSelected: value == true })}
          onClick={() => {
            handleGender(true);
          }}
        >
          남자
        </button>

        <button
          className={cn({ isSelected: value == false })}
          onClick={() => {
            handleGender(false);
          }}
        >
          여자
        </button>
      </div>
      
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
    </StyledGender>
  );
};

export default Gender;
