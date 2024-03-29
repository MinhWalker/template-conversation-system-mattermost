// store.ts
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from './reducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    // Add other reducers here
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
