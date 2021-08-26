
const RowBtn = ({handlePage,rows}) => {
  const handleRows = (e) => {
    const data = { rows:e.target.value}
    handlePage(data)
  };

  return (
    <>
    <select name="rows" value={rows} onChange={handleRows}>
      <option value="30">30개</option>
      <option value="50">50개</option>
      <option value="100">100개</option>
    </select>
    </>
  );
}


export default RowBtn;