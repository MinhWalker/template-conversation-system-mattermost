import { SHOW_MODAL, HIDE_MODAL } from './store/actionTypes';

interface ModalState {
    isModalVisible: boolean;
}

const initialState: ModalState = {
    isModalVisible: false,
};

export function modalReducer(state: ModalState = initialState, action: { type: string }): ModalState {
    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, isModalVisible: true };
        case HIDE_MODAL:
            return { ...state, isModalVisible: false };
        default:
            return state;
    }
}
