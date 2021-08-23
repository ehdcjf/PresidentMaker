import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min.js";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import cn from "classnames";
const StyledAbout = styled.section`
  /* height: 100vh; */
  p {
    font-size: 4.375rem;
    line-height: 1.12;
    font-family: "East Sea Dokdo", cursive;
    opacity: 0;

    div {
      opacity: 0;
      transform: translate(0);
    }

    &.is-reveal {
      opacity: 1;
    }
  }
`;

const About = () => {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <StyledAbout data-scroll-section>
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        대한민국 군대들 지금까지 뭐 했노, 이기 나도 군대 갔다 왔고, 예비군
        훈련까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이
        돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들
        나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고
        "나 국방장관이오!" "나 참모총장이오!" 그렇게 별들 달고
        끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고
        줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까? (박수 소리)
      </p>
    </StyledAbout>
  );
};

export default About;
