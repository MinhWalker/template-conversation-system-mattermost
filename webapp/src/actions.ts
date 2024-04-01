import { HIDE_MODAL, SHOW_MODAL } from "action_type";

export function showModal() {
  return dispatch({ type: SHOW_MODAL, data: { isShow: true } });
}

export function hideModal() {
  return dispatch({ type: HIDE_MODAL, data: { isShow: false } });
}
