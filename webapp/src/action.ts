export function showModal() {
  return dispatch({ isShow: true });
}

export function hideModal() {
  return dispatch({ isShow: false });
}