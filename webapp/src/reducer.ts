import { SHOW_MODAL, HIDE_MODAL } from './store/actionTypes';
import {combineReducers} from 'redux';

const userInfo = (state = {}, action) => {
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