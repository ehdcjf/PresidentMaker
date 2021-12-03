import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min.js";
import { useEffect, useState, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import cn from "classnames";
const StyledFooter = styled.section`
  padding-bottom: 100px;
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

  



  .location {
    font-size: 10vw;
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
