import useBitControll from "../../hooks/useBitControll";
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
  const gender = useBitControll(0);
  const minage = useBitControll(0);
  const maxage = useBitControll(120);
  const hometown = useBitControll(0);
  const residence = useBitControll(0);
  const vote19 = useBitControll(0);

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
    const data = { ...vote };
    const result = await showResult(data);
    if (result.success) {
      dispatch(UpdateVote(result))
      gender.onBitChange(data.gender);
      minage.onBitChange(data.minage);
      maxage.onBitChange(data.maxage);
      hometown.onBitChange(data.hometown);
      residence.onBitChange(data.residence);
      vote19.onBitChange(data.vote19);
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


 const handleSubmit = async()=>{
   const data = {
    gender : gender.value,
    minage : minage.value,
    maxage : maxage.value,
    hometown : hometown.value,
    residence : residence.value,
    vote19 : vote19.value,
   }
   const result = await showResult(data);
    if (result.success) {
      dispatch(UpdateVote(result))
    } else {
      alert(result.error);
    }
 }




  return (
    <>
      <div>
        <SearchForm>
          <GenderSelect {...gender}/>
          <DoubleRangeSlider minage={minage.value} maxage={maxage.value} handleMin={minage.onComplete} handleMax={maxage.onComplete}/>
          <AreaSelector  title='고향' {...hometown}/>
          <AreaSelector title='거주지' {...residence}/>
          <VoteSelector {...vote19}/>
          <button onClick={handleSubmit}>검색</button>
        </SearchForm>
        <div style={{ width: "500px", height: "500px" }}>
          <Doughnut data={vote.voteData} />
        </div>
      </div>
    </>
  );
};

export default VotePage;
