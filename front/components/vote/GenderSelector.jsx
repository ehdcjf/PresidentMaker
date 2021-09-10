import styled from "styled-components";
import cn from "classnames";

const GenderSelect = ({value, onBitChange,}) => {
  return (
    <div>
      <h2>성별</h2>
      <div className="btn_box">
        <button
          className={cn({ isSelected: value&(1<<0) })}
          onClick={() => {
            onBitChange(0);
          }}
        >
          남자
        </button>
        <button
          className={cn({ isSelected: value&(1<<1) })}
          onClick={() => {
            onBitChange(1);
          }}
        >
          여자
        </button>
      </div>
    </div>
  );
};

export default GenderSelect;
