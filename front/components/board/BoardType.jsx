

const BoardType = ({handlePage,type}) => {
  return (
    <div>
      <button onClick={()=>{handlePage({type:'all'})}}>전체글</button>
      <button onClick={()=>{handlePage({type:'hot'})}}>인기글</button>
    </div>
  );
}

export default BoardType;