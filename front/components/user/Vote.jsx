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

const Vote = ({
  title = null,
  value,
  onComplete,
  list,
  prev,
  next,
  handleNext,
  handlePrev,
}) => {

  console.log(list)
  const renderCandidate = () => {
    return list.map((v, i) => {
      return (
        <li
          className={classNames({ isSelected: value == v.politician_id })}
          key={i}
        >
          <div
            onClick={() => {
              onComplete(v.politician_id);
            }}
          >
            <div
              style={{ backgroundImage: `url(${v.politician_image})` }}
            ></div>
            <h3>{v.politician_name}</h3>
          </div>
        </li>
      );
    });
  };
  return (
    <StyledVote>
      {title != null && <h2>{title}</h2>}
      <ul>{renderCandidate()}</ul>
      {title != null && (
        <div>
          <button onClick={handlePrev}>{prev}</button>
          {value !== null && <button onClick={handleNext}>{next}</button>}
        </div>
      )}
    </StyledVote>
  );
};

export default Vote;
