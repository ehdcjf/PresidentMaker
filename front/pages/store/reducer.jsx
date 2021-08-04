export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    case "LOGOUT":
      return {
        ...state,
        IsLogin: false,
      };

    case "GET_USERID_SUCCESS":
      // console.log(state);
      //   console.log(action.payload);
      return {
        ...state,
        state: {
          join: {
            ...state.join,
            userid: action.payload,
          },
        },
      };
  }
};
