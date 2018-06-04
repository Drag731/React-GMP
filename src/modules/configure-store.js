import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';
// import callApi from './api/movies';
import {
    rootSaga
} from '../modules';
//
// const middlewares = applyMiddleware(thunk.withExtraArgument(callApi));

const sagaMiddleware = createSagaMiddleware();

let devTools = f => f;

if (process.browser &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}
//
// const configureStore = (initialState) => {
//     return createStore(
//         reducers,
//         initialState,
//         compose(
//             applyMiddleware(sagaMiddleware),
//             devTools
//         ),
//     );
// };

export default (initialState) => {
    const store = createStore(reducers, initialState, compose(applyMiddleware(sagaMiddleware), devTools));

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
};