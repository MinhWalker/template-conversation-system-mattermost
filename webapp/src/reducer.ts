import { SHOW_MODAL, HIDE_MODAL } from "./action_type";
import { combineReducers } from "redux";

const modalStateReducer = (
  state = { isShow: false },
  action: { type: any; data: any }
) => {
  console.log("modalStateReducer-action", action);
  switch (action.type) {
    case SHOW_MODAL:
      return action.data;
    case HIDE_MODAL:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  modalStateReducer,
});
