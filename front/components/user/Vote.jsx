import styled from "styled-components";
import classNames from "classnames";

const StyledVote = styled.div`
  & > ul {
    display: flex;
    flex-wrap: wrap;
  }

  & > ul > li {
    text-align: center;

    &.isSelected {
      border: 2px solid cyan;
    }
  }

  & > ul > li > div > div {
    display: block;
    width: 150px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Vote = ({ title, value, onComplete, list, prev,next,handleNext,handlePrev }) => {
  const renderCandidate = () => {
    return list.map((v, i) => {
      return (
        <li className={classNames({ isSelected: value == i })} key={i}>
          <div
            onClick={() => {
              onComplete(i);
            }}
          >
            <div style={{ backgroundImage: `url(${v.src})` }}></div>
            <h3>{v.name}</h3>
          </div>
        </li>
      );
    });
  };
  return (
    <StyledVote>
      <h2>{title}</h2>
      <ul>{renderCandidate()}</ul>
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
    </StyledVote>
  );
};

export default Vote;
