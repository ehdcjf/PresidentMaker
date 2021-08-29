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

const Gender = ({ value, onComplete, step, handleStep }) => {
  const handleGender = (data) => {
    onComplete(data);
  };

  return (
    <StyledGender>
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
      </div>
    </StyledGender>
  );
};

export default Gender;
