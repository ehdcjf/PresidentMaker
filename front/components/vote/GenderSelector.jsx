import styled from "styled-components";
import cn from "classnames";

const GenderSelect = () => {
  return (
    <div>
      <div className="btn_box">
        <button
          // className={cn({ isSelected: value == true })}
          // onClick={() => {
          //   handleGender(true);
          // }}
        >
          남자
        </button>

        <button
          // className={cn({ isSelected: value == false })}
          // onClick={() => {
          //   handleGender(false);
          // }}
        >
          여자
        </button>
      </div>
    </div>
  );
};

export default GenderSelect;
