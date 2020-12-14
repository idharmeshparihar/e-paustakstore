import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  home: reducer,
});

export default rootReducer;
