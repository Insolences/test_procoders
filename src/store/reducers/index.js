import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  notification: notificationReducer,
});

export default rootReducer;
