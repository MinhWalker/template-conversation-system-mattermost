import { SHOW_MODAL, HIDE_MODAL } from "./action_type";

export const getModalState = (
  state = { isShow: false },
  action: { type: any; data: any }
) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.data.isShow;
    case HIDE_MODAL:
      return action.data.isShow;
    default:
      return state;
  }
};
