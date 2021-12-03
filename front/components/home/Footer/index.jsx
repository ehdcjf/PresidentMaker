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


  .flexbox{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }


  *{
    border: none;
  }


  

  .silhouette{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 40%;
    height: 100%;
  }

  .slhouette_second{
    font-size: 5vh;
    padding: 1vw;
  }

  

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
      

          <SectionHeader className='grid_5' title="Who is Next" />
                  <div className='slhouette_second'>
              당신의 후보에게 투표하세요.
        </div>
          <div className='flexbox'>
          <div className='silhouette posi2'  style={{ backgroundImage: `url(/투명재명.png)` }}></div>
          <div className='silhouette posi1'  style={{ backgroundImage: `url(/투명석열.png)` }}></div>
          <div className='silhouette posi3'  style={{ backgroundImage: `url(/투명낙연.png)` }}></div>
          <div className='silhouette posi4'  style={{ backgroundImage: `url(/투명준표.png)` }}></div>
          </div>

    </StyledFooter>
  );
};

export default Footer;
