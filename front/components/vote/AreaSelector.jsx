import { korea } from "../../public/korea";
import styled from "styled-components";
import classNames from "classnames";

const AreaSelector = ({title,value, onBitChange,}) => {

  const renderArea = () => {
    return korea.map((v, i) => {
      return (
        <button
          key={i}
          className={classNames({ isSelected: value&(1<<i) })}
          onClick={() => {
            onBitChange(i);
          }}
        >
          {v}
        </button>
      );
    });
  };




  return (
    <div>
      <h2>{title}</h2>
      <div>
        {renderArea()}
      </div>
    </div>
  );
}

export default AreaSelector;