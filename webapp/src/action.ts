export function showModal() {
  return dispatch({ type: "SHOW_MODAL", isShow: true });
}

export function hideModal() {
  return dispatch({ type: "HIDE_MODAL", isShow: false });
}
