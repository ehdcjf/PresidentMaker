export const kakaoCallback = async (dispatch, code) => {
  try {
    const response = await fetch(
      `http://localhost:3002/api/kakao?code=${code}`
    );
    const data = await response.json();

    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (e) {
    dispatch({ type: "LOGIN_ERROR", payload: e });
  }
};
