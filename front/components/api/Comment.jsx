export const createComment = async (data) => {
  const { board_id, content, root, target = 0 } = data;
  let url = `http://localhost:3002/board/comment/${board_id}/${root}/${target}`;
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

export const showComment = async (data) => {
  const { board_id, root, skip } = data;
  let url = `http://localhost:3002/board/comment/${board_id}/${root}/${skip}`;
  let options = {
    method: "GET",
    mode: "cors",
    credentials: "include",
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const destroyComment = async (data) => {
  const { comment_id, writer } = data;
  let url = `http://localhost:3002/board/comment/${comment_id}/${writer}`;
  let options = {
    method: "DELETE",
    mode: "cors",
    credentials: "include",
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const updateComment = async (data) => {
  const { comment_id, writer, content } = data;
  let url = `http://localhost:3002/board/comment/${comment_id}/${writer}`;
  let options = {
    method: "PATCH",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      content: content,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
