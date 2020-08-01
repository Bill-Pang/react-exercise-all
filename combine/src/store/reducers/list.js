export default (state = [1, 2, 3, 4, 6], action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "add": {
      newState.push(action.value);
      console.log(newState);
      return newState;
    }
    default: {
    }
  }
  return state;
};
