// src/store/reducers/modalReducer.ts
import * as actionTypes from '../actionTypes';
import { ModalState, initialState } from '../stateTypes';

// Defining the Action type to handle actions in the reducer
type ModalAction =
    | { type: typeof actionTypes.SHOW_MODAL }
    | { type: typeof actionTypes.HIDE_MODAL };

export const modalReducer = (state: ModalState = initialState, action: ModalAction): ModalState => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                isModalVisible: true,
            };
        case actionTypes.HIDE_MODAL:
            return {
                ...state,
                isModalVisible: false,
            };
        default:
            return state;
    }
};
