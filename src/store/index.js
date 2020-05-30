import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import tweetReducer from "./reducer/tweetReducer";
import followReducer from "./reducer/followReduce";

const rootReducer = combineReducers({
  user: userReducer,
  tweet: tweetReducer,
  follow: followReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
