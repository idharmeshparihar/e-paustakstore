import { combineReducers } from "redux";
import reducer from "./reducer";
// Define Root Reducer

const rootReducer = combineReducers({
  home: reducer,
});

export default rootReducer;
