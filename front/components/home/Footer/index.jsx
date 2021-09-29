import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min.js";
import { useEffect, useState, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import cn from "classnames";
import { listMain } from "../../../public/listMain";

const StyledFooter = styled.section`
  height: 90vh;
  text-align: center;
  position: relative;

  .location {
    width: 70vw;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 4vw;
    text-align: center;
    color: #755f4d;
    opacity: 0;

    &.is-reveal {
      opacity: 1;
    }
  }

  .pinkFont {
    color: hotpink;
    text-emphasis-style: dot;

    text-emphasis-position: over left;

    -webkit-text-emphasis-style: dot;

    -webkit-text-emphasis-position: over;
  }
  .goBtn {
    display: inline-block;
    width: 7vw;
    height: 7vw;
    font-size: 4vw;
    color: white;
    background-color: hotpink;
    margin-left: 2vw;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }

  .candidate_box {
    display: flex;
    width: 70vw;
    justify-content: center;
  }
`;
const Footer = () => {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);
  const rand = new Date().getDate() % 7;

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  const renderCandidate = () => {
    const candidate = [...listMain];
    for (let i = 0; i < rand; i++) {
      candidate.push(candidate.shift());
    }
    return candidate.map((v, i) => {
      return <img src={v.image} key={i} alt="" />;
    });
  };

  return (
    <StyledFooter data-scroll-section>
      <SectionHeader className="grid_5" title="Who is Next" />
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        <span>
          당신의 <b className="pinkFont">후보</b>에게 투표하세요!
        </span>
        <button className="goBtn">GO</button>
      </h1>
      <div className="candidate_box">{renderCandidate()}</div>
    </StyledFooter>
  );
};

export default Footer;
