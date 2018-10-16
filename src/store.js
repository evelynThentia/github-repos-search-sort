import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  loggedIn: false,
  username: "",
  firstName: "",
  profile: {},
  events: [],
  pullRequests: [],
  sort: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload
      }
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        profile: {}
      }
    case "GET_EVENTS":
      return {
        ...state,
        events: action.payload
      }
    case "GET_PULL_REQUESTS": {
      return {
        ...state,
        pullRequests: action.payload
      }
    }
    case "SORT": {
      return {
        ...state,
        sort: action.payload
      }
    }
    default:
      return state;
  }
};
  
export default createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);