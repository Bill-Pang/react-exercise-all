import * as actionTypes from "./actionTypes";

const defaultState = {
  iptVal: "你好彪哥 我来自reducer",
  list: [
    "吃饭了嘛",
    "睡觉了嘛",
    "心情咋样嘛",
    "学习了嘛",
    "今天运动了嘛",
    "喝不喝咖啡嘛",
  ],
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.ADD: {
      newState.list.unshift(action.value);
      return newState;
    }
    case actionTypes.REDUCE: {
      newState.list.splice(action.value, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
};
