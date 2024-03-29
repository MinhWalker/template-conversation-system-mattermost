// src/store/actions.ts
import * as actionTypes from './actionTypes';

export const showModal = () => ({
    type: actionTypes.SHOW_MODAL,
});

export const hideModal = () => ({
    type: actionTypes.HIDE_MODAL,
});
