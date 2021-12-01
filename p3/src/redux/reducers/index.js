import { combineReducers } from "redux";
import logReducer from "./log.reducer";
import technicianReducer from "./technician.reducer";

export default combineReducers({
  log: logReducer,
  technician: technicianReducer
});