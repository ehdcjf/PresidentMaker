import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min.js";
import { useEffect, useState, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import cn from "classnames";
const StyledFooter = styled.section`
  text-align: center;
  padding-bottom: 200px;

  .location {
    font-size: 15vw;
    text-transform: uppercase;
    font-family: "Bodoni Moda", serif;
    opacity: 0;

    &.is-reveal {
      opacity: 1;
    }
  }
`;
const Footer = () => {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

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

  return (
    <StyledFooter data-scroll-section>
      <SectionHeader title="Made in" />
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        Who is Next
      </h1>
    </StyledFooter>
  );
};

export default Footer;
