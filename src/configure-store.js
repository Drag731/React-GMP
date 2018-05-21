import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import callApi from './api/movies';

const middlewares = applyMiddleware(thunk.withExtraArgument(callApi));

let devTools = f => f;

if (process.browser &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const configureStore = () => {
    return createStore(
        reducers,
        compose(
            middlewares,
            devTools,
        ),
    );
};

export default configureStore;