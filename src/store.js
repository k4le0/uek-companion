import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = {
        ...createStore(reducers, composeEnhancers(
            applyMiddleware()))
    };

    return store;
};

export default configureStore;


