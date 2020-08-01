const defaultVal = {
  info: {
    name: "Bill-Pang",
    six: "man",
    skill: ["vue", "react", "node"],
  },
};

export default (state = defaultVal.info, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "addObj": {
      console.log();
      newState["lover"] = "孙南芳";
      console.log(newState);
      return newState;
    }
    default: {
    }
  }
  return state;
};
