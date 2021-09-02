import SearchForm from '../../components/vote/SearchForm'; 
import useComplete from '../../hooks/useComplete';
import { useEffect, useState } from 'react';
import { showResult } from '../../components/api/vote';
import { Doughnut } from 'react-chartjs-2';
import { list19 } from "../../public/list19";
import { list20 } from "../../public/list20";




const VotePage = () => {

  // const gender = useComplete(null);
  // const minage = useComplete(null);
  // const maxage = useComplete(null);
  // const hometown = useComplete(null);
  // const residence = useComplete(null);
  // const vote19 = useComplete(null);
  const [data,setData] = useState( {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  });


  useEffect(async () => {
    const queryStr = new URL(window.location.href).searchParams;
    const query = {
      gender: queryStr.get("gender"),
      minage: queryStr.get("minage"),
      maxage: queryStr.get("maxage"),
      hometown: queryStr.get("hometown"),
      residence: queryStr.get("residence"),
      vote19: queryStr.get("vote19"),
    };

    const result = await showResult(query);
    const newLabel = result.label.map(v=>list20[v].name);

    if(result.success){
      setData({
        ...data,
        labels:newLabel,
        datasets:[
          {
          ...data.datasets[0],
          data:result.data,
          }
        ]
      });
    }else{
      alert(result.error)
    }
  }, []);




  const legend = {
    display: true,
    labels: {
      fontColor: "black",
    },
    position: "top", //label를 넣어주지 않으면 position이 먹히지 않음
  };

  return (
    <div>
      {/* <SearchForm/> */}
      <div style={{width:'500px',height:'500px'}}>
      <Doughnut data={data}/>
      </div>
    </div>
  );
}

export default VotePage;