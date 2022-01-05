import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import notificationReducer from "./notificationReducer";
import authenticationReducer from "./authenticationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  authentication: authenticationReducer,
  news: newsReducer,
  notification: notificationReducer,
});

export default rootReducer;
