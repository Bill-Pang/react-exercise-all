import * as actionTypes from "./actionTypes";
let defaultVal = {
  inputVal: "hello,i from reducer",
  moodList: [1, 2, 3, 4, 5],
};

export default (state = defaultVal, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.ADD:
      newState.moodList.unshift(action.value);
      console.log(newState);
      return newState;
    case actionTypes.DEAL:
      newState.moodList.splice(action.value, 1);
      return newState;
    case actionTypes.GETMOOD:
      newState.moodList = action.value;
      // console.log(newState);
      return newState;
    default: {
      return state;
    }
  }
};
