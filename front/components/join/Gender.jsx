import { useState } from "react";

const Gender = ({ value, onComplete }) => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            onComplete(true);
          }}
        >
          남자
        </button>
        <button
          onClick={() => {
            onComplete(false);
          }}
        >
          여자
        </button>
      </div>
      <div>
        <div>{value !== null && <button>다음</button>}</div>
      </div>
    </div>
  );
};

export default Gender;
