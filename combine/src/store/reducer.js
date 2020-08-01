import { combineReducers } from "redux";
import list from "./reducers/list";
import info from "./reducers/info";

export default combineReducers({
  list,
  info,
});

//使用combineReducer对reducer进行模块化处理
//reducer里面的state有命名空间(store.getState().list )，action木有,如果不同模块的action重名了，不会报错，而是都进行action调用
