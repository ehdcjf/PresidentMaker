
import Head from "next/head";
import { useContext, useEffect, useReducer } from "react";
import { reducer } from "../store/reducer";
import Store from "../store/context";


const Join = () => {

  const { state,dispatch } = useContext(Store);

  useEffect(async () => {
    const id = new URL(window.location.href).searchParams.get("id"); 
   
    dispatch({ type: 'GET_USERID_SUCCESS', payload: id })
    console.log(state); 
},[])


  return (
    <>
      <Head>
        <title>Join</title>
      </Head>
      {/* <FormLayout>hello JOIN</FormLayout> */}

      
    </>
  );
};

export default Join;





