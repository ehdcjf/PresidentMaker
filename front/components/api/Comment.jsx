export const createComment = async (data) => {
  const { board_id, content, master } = data;
  let url = `http://localhost:3002/board/comment/${board_id}/${master}`;
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      content,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
