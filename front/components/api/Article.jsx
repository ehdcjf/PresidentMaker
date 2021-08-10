export const showArticle = async (data) => {
  const { id } = data;
  const url = `http://localhost:3002/board/${id}`;
  const options = {
    methode: "GET",
    mode: "cors",
    credentials: "include",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const deleteArticle = async (data) => {
  const { id, useridx } = data;
  const url = `http://localhost:3002/board/${id}/${useridx}`;
  const options = {
    method: "delete",
    mode: "cors",
    credentials: "include",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
