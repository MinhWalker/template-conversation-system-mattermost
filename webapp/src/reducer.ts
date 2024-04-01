import { SHOW_MODAL, HIDE_MODAL } from './action_type';
import {combineReducers} from 'redux';

const userInfo = (state  = {isShow:false}, action: { type: any }) => {
  switch (action.type) {
    case SHOW_MODAL:
      return state;
    case HIDE_MODAL:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  userInfo,
});
