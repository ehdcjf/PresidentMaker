import { useEffect, useState } from "react";

const Birth = ({ value, onComplete, step, handleStep }) => {
  const [full, setFull] = useState(0);
  const [hundred, setHundred] = useState(null);
  const [ten, setTen] = useState(null);
  const [one, setOne] = useState(null);
  const now = String(new Date().getFullYear());

  const handleHundred = (data) => {
    setHundred(data);
    setFull(full | 1);
  };
  const handleTen = (data) => {
    setTen(data);
    setFull(full | 2);
  };
  const handleOne = (data) => {
    setTimeout(setOne(data));
    setFull(full | 4);
  };

  useEffect(() => {
    if (full == 7) {
      onComplete(Number(hundred + ten + one));
      console.log(hundred + ten + one);
    }
  }, [full]);

  const handleReset = () => {
    setFull(0);
    onComplete(null);
  };

  const renderTen = () => {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (hundred == 19) {
      return list.map((v, i) => {
        return (
          <button key={i} onClick={() => handleTen(v)}>
            {v + "0"}
          </button>
        );
      });
    } else {
      return list
        .filter((v) => v <= now[2])
        .map((v, i) => {
          return (
            <button key={i} onClick={() => handleTen(`${v}`)}>
              {v + "0"}
            </button>
          );
        });
    }
  };

  const renderOne = () => {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (hundred == 20 && ten == now[2]) {
      return list
        .filter((v) => v <= now[3])
        .map((v, i) => {
          return (
            <button key={i} onClick={() => handleOne(`${v}`)}>
              {v}
            </button>
          );
        });
    } else {
      return list.map((v, i) => {
        return (
          <button key={i} onClick={() => handleOne(`${v}`)}>
            {v}
          </button>
        );
      });
    }
  };

  if (value != null) {
    return (
      <div>
        <div>{value}</div>
        <button onClick={handleReset}>다시 입력</button>
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
    );
  } else if (full < 1) {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              handleHundred("19");
            }}
          >
            1900
          </button>
          <button
            onClick={() => {
              handleHundred("20");
            }}
          >
            2000
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleStep(step - 1);
            }}
          >
            이전
          </button>
        </div>
      </div>
    );
  } else if (full < 3) {
    return (
      <div>
        <div>{hundred}</div>
        <div>{renderTen()}</div>
        <div>
          <button
            onClick={() => {
              handleStep(step - 1);
            }}
          >
            이전
          </button>
        </div>
      </div>
    );
  } else if (full < 7) {
    return (
      <div>
        <div>{hundred + ten}</div>
        <div>{renderOne()}</div>
        <div>
          <button
            onClick={() => {
              handleStep(step - 1);
            }}
          >
            이전
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>{hundred + ten + one}</div>
        <button onClick={handleReset}>다시 입력</button>
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
    );
  }
};

export default Birth;
