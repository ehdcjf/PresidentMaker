const yymmdd = (date) => {
  const now = new Date(date);
  const y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;
  return `${y}-${m}-${d}`

}

module.exports = { yymmdd }