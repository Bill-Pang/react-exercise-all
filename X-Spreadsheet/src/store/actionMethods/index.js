import store from "../index";
import * as actionTypes from "../actionTypes";

export const AddAction = (value) => ({
  type: actionTypes.ADD,
  value,
});

export const RuduceAction = (value) => ({
  type: actionTypes.REDUCE,
  value,
});
