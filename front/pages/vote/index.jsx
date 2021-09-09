import useComplete from "../../hooks/useComplete";
import { useEffect, useState } from "react";
import { showResult } from "../../components/api/vote";
import { Doughnut } from "react-chartjs-2";
import { list19 } from "../../public/list19";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "../../components/vote/SearchForm";
import GenderSelect from "../../components/vote/GenderSelector";
import DoubleRangeSlider from '../../components/vote/DoubleRangeSlider'
import AreaSelector from '../../components/vote/AreaSelector'
import VoteSelector from '../../components/vote/VoteSelector'
import {UpdateVote} from '../../reducers/vote'
const VotePage = () => {
  const dispatch = useDispatch();
  const vote = useSelector((state) => state.vote);
  const gender = useComplete(null);
  const minage = useComplete(null);
  const maxage = useComplete(null);
  const hometown = useComplete(null);
  const residence = useComplete(null);
  const vote19 = useComplete(null);

  // const [voteData, setData] = useState({
  //   labels: ["Red", "Green", "Yellow"],
  //   datasets: [
  //     {
  //       data: [300, 50, 100],
  //       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //     },
  //   ],
  // });

  useEffect(async () => {
    console.log('x')
    const data = { ...vote };
    const result = await showResult(data);
    if (result.success) {
      dispatch(UpdateVote(result))
    } else {
      alert(result.error);
    }
  }, []);

  // const legend = {
  //   display: true,
  //   labels: {
  //     fontColor: "black",
  //   },
  //   position: "top", //label를 넣어주지 않으면 position이 먹히지 않음
  // };
  if(vote.loading) return <div>로딩중</div>
  return (
    <>
      <div>
        <SearchForm>
          <GenderSelect {...gender}/>
          <DoubleRangeSlider minage={minage.value} maxage={maxage.value} handleMin={minage.onComplete} handleMax={maxage.onComplete}/>
          <AreaSelector {...hometown}/>
          <AreaSelector {...residence}/>
          <VoteSelector {...vote19}/>

          
        </SearchForm>
        <div style={{ width: "500px", height: "500px" }}>
          <Doughnut data={vote.voteData} />
        </div>
      </div>
    </>
  );
};

export default VotePage;
