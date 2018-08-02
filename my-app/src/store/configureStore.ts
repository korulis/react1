import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import GlobalState from './State';

export default function configureStore(initialState?: GlobalState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            reduxImmutableStateInvariant()
        )
    );
} 