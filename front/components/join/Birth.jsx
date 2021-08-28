import { useState } from "react";

const Birth = ({ value, onComplete }) => {
  const [full, setFull] = useState(0);
  const [hundred, setHundred] = useState(null);
  const [ten, setTen] = useState(null);
  const [one, setOne] = useState(null);

  const handleHundred = (data) => {
    setHundred(data);
    setFull(full | 4);
  };
  const handleTen = (data) => {
    setTen(data);
    setFull(full | 2);
  };
  const handleOne = (data) => {
    setOne(data);
    setFull(full | 1);
  };

  if (full < 7) {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              handleHundred("19");
            }}
          >
            19
          </button>
          <button
            onClick={() => {
              handleHundred("20");
            }}
          >
            20
          </button>
        </div>
        <div>
          <button onClick={() => handleTen("0")}>0</button>
          <button onClick={() => handleTen("1")}>1</button>
          <button onClick={() => handleTen("2")}>2</button>
          <button onClick={() => handleTen("3")}>3</button>
          <button onClick={() => handleTen("4")}>4</button>
          <button onClick={() => handleTen("5")}>5</button>
          <button onClick={() => handleTen("6")}>6</button>
          <button onClick={() => handleTen("7")}>7</button>
          <button onClick={() => handleTen("8")}>8</button>
          <button onClick={() => handleTen("9")}>9</button>
        </div>
        <div>
          <button onClick={() => handleOne("0")}>0</button>
          <button onClick={() => handleOne("1")}>1</button>
          <button onClick={() => handleOne("2")}>2</button>
          <button onClick={() => handleOne("3")}>3</button>
          <button onClick={() => handleOne("4")}>4</button>
          <button onClick={() => handleOne("5")}>5</button>
          <button onClick={() => handleOne("6")}>6</button>
          <button onClick={() => handleOne("7")}>7</button>
          <button onClick={() => handleOne("8")}>8</button>
          <button onClick={() => handleOne("9")}>9</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>{hundred + ten + one}</div>
        <div>다시 입력</div>
        <div>확인</div>
        <div>{value !== null && <button>다음</button>}</div>
      </div>
    );
  }
};

export default Birth;
