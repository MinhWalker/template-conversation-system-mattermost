export function showModal() {
  return async (dispatch) => {
    return dispatch({ type: "SHOW_MODAL", isShow: true });
  };
}

export function hideModal() {
  return async (dispatch) => {
    return dispatch({ type: "HIDE_MODAL", isShow: false });
  };
}
