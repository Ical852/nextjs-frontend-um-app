import { combineReducers } from "redux";
import { authReducers } from "./auth/reducers";

const reducers = combineReducers({
  auth: authReducers,
});

export default reducers;
