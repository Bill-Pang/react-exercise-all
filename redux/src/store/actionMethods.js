// 对actionType进行一次封装 方便维护
import * as actionTypes from "./actionTypes";
import axios from "axios";
import store from "./index";
export const AddList = (value) => ({
  type: actionTypes.ADD,
  value,
});
export const DealList = (value) => ({
  type: actionTypes.DEAL,
  value,
});

export const GetMood = (value) => ({
  type: actionTypes.GETMOOD,
  value,
});

export const GetMoodThunk = (dispatch) => {
  // 因为引用了thunk 所以返回一个函数（之前是对象）
  return () => {
    axios.get("http://biaoblog.run:3000/blogData/mood").then((res) => {
      let action = GetMood(res.data.message);
      store.dispatch(action);
    });
  };
};
