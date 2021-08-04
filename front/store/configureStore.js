import { createWrapper } from "next-redux-wrapper"
import { applyMiddleware, compose, createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "../reducers"
import  thunkMiddleware  from "redux-thunk"

const loggetrMiddelware = ({dispatch,getState}) => (next) =>(action) => { 
  console.log(action); 
  console.log(dispatch); 
  console.log(getState);
  return next(action); 
}

const configureStore = () => {
  const middlewares = [loggetrMiddelware,thunkMiddleware]; 
  const enhancer = process.env.NODE_ENV ==='production'
  ?compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(...middlewares))
  const Store = createStore(reducer,enhancer)

  return Store
}

const wrapper = createWrapper(configureStore,{
  debug:process.env.NODE_ENV === 'davelopment'
})

export default wrapper
