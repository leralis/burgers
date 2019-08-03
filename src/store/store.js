import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import logger from "redux-logger"
import ReduxThunk from 'redux-thunk'

const middleWares = [ReduxThunk, logger]; 

const store = createStore(
    reducer,
    applyMiddleware(...middleWares)
  )

export default store;