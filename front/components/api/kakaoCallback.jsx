import { Router } from "next/router";
import { useEffect } from "react";


export const kakaoCallback = async (dispatch, code) => {
  try {
    const response = await fetch(
      `http://localhost:3002/api/kakao?code=${code}`
    );
    const data = await response.json();
    return data
  }

  catch (e){ 
    return e; 
  }
}

//     if(!data.isUser){
//         return data.userid
//     }else{
//       return 
//       Router.push(`/`)
//     }



//     dispatch({ type: "LOGIN_SUCCESS", payload: data });
//   } catch (e) {
//     dispatch({ type: "LOGIN_ERROR", payload: e });
//   }
// };
