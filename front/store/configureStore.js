import { createWrapper } from "next-redux-wrapper"
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "../reducers"
import { persistStore } from 'redux-persist';

import thunkMiddleware from "redux-thunk"
// import createSaga from 'redux-saga'
// import rootSaga from '../saga/index'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["article", "board", "user"]
};






const loggetrMiddelware = ({ dispatch, getState }) => (next) => (action) => {
  // console.log(action); 
  // console.log(dispatch); 
  // console.log(getState);
  return next(action);
}




const configureStore = () => {
  // const sagaMiddleware = createSaga(); 
  const middlewares = [loggetrMiddelware, thunkMiddleware];
  // const middlewares = [sagaMiddleware]; 
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
  const Store = createStore(reducer, enhancer)
  // Store.sagaTask = sagaMiddleware.run(rootSaga) 

  return Store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'davelopment'
})

export default wrapper
