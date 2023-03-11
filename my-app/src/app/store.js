import postsReducer from '../features/posts/postsSlice';
import thunkMiddleware from "redux-thunk" ;
import { createStore, applyMiddleware, combineReducers } from 'redux';

const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      // your code
    };
  };
};

const loggerMiddleware2 = (store) => (next) => (action) => {
  console.log("action", action);
  console.log("store", store);
  next(action);
};

const loggerMiddleware3 = (store) => (next) => (action) => {
  console.log("action", action);
  // action.payload = 3;
  next(action);
};

const loggerMiddleware4 = (store) => (next) => (action) => {
  console.log("action", action);
};

const rootReducer = combineReducers({
  posts: postsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store