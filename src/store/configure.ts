declare var window: Window & {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any};

import {
    createStore,
    applyMiddleware,
    compose,
    AnyAction
} from 'redux';
import reduxPender from 'redux-pender';
import modules from './modules';

const middlewares = [reduxPender()];

// Development mode
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState is ServerSideRendering initalState
const configure = (preloadedState?: AnyAction) => createStore(
    modules,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default configure;
