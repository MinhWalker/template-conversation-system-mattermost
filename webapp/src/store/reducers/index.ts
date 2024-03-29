// src/store/reducers/index.ts
import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    // Add other reducers here as needed
});

export default rootReducer;
