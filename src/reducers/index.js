import { combineReducers } from "redux";
import { homeReducer } from "../components/Home/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
});

export default rootReducer;
