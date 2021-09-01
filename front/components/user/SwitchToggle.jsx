import styled from "styled-components";

const StyledSwitchToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & > .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #aaa;
    transition: 0.4s;
    border-radius: 34px;
  }

  & > .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  & > input:checked + .slider:before {
    transform: translateX(26px);
  }

  & > input:checked + .slider {
    background-color: #2196f3;
  }
`;

const SwitchToggle = ({ isToggled, onToggle }) => {
  return (
    <StyledSwitchToggle>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </StyledSwitchToggle>
  );
};

export default SwitchToggle;
