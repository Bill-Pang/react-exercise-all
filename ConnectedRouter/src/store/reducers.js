import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./history";
import anyFile from "./anyFile";
let reducers = {
  //...
  router: connectRouter(history),
  anyFile: anyFile,
};
export default combineReducers(reducers);
