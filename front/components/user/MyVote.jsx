const MyVote = ({value, list}) => {
  const myvote = list[value];

  return (
    <div>
      <div style={{ backgroundImage: `url(${myvote.src})` }} />  
      <h3>{myvote.name}</h3>
    </div>
  );
}

export default MyVote;