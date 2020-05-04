import { combineReducers } from "redux";
import {sessionReducer} from "./sessionReducer";
import {groupReducer} from "./groupReducer";
import {messageReducer} from "./messageReducer";

const rootReducer = combineReducers({
  session:sessionReducer,
  group:groupReducer,
  messages:messageReducer,
});

export default rootReducer;
