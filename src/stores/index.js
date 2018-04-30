// ./src/store/configureStore.js
import {createStore, applyMiddleware} from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export function configureStore(initialState) {
    return createStore(rootReducer, initialState,
        // Apply to store
        applyMiddleware(thunk)
    );
}