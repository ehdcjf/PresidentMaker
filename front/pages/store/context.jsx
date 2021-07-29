import { createContext } from "react";

export const initialState = {
  IsLogin: false,
  board:{
    type:'ALL',
    page:'1',
    searchType:null,
    searchValue:null,
    list:[], 
  },
  join:{
    userid:null,
  nickname:null,
  homtowm:null,
  residence:null,
  gender:null,
  age:null,
  show:'00000'
  }

};
const Store = createContext(initialState); //store도 컴포넌트

export default Store;
