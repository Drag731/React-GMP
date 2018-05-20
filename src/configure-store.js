import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers';
import thunk from 'redux-thunk';
import callApi from './api/movies';

const persistConfig = {
    key: 'root',
    version: 0,
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = applyMiddleware(thunk.withExtraArgument(callApi));

let devTools = f => f;

if (process.browser &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

// const configureStore = () => {
//     return createStore(
//         reducers,
//         compose(
//             middlewares,
//             devTools,
//         ),
//     );
// };

export default () => {
    let store = createStore(persistedReducer, compose(
        middlewares,
        devTools
    ));
    let persistor = persistStore(store);
    return { store, persistor }
}

// export default configureStore;