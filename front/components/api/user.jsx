export const showUser = async(data) =>{
  const id = data;
  const url = `http://localhost:3002/user?id=${id}`;
  const options = {
    methode: "GET",
    mode: "cors",
    credentials: "include",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;


}