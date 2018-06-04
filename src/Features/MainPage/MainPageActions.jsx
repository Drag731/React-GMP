import { call, put, all, takeLatest } from 'redux-saga/effects';
import getMovies from '../../api/movies'
export const ADD_MOVIES = 'ADD_MOVIES';
export const GO_TO_DESCRIPTION = 'GO_TO_DESCRIPTION'
import axios from 'axios';

// export const receiveMoviesDB = (q = '') => {
//     return (dispatch, getState, api) => {
//         api(`movies${q}`)
//             .then(response => {
//                 dispatch(receiveMoviesState(response.data));
//             })
//             .catch(() => {
//                 throw new Error('I crashed!');
//             })
//     };
// };

export const receiveMoviesState = payload => ({
    type: ADD_MOVIES,
    payload,
});

export const goToDescription = () => ({
    type: GO_TO_DESCRIPTION,
});

// Sagas
export function* receiveMoviesDB(q = '') {
    console.log('hi');
    const response = yield call(getMovies, q);

    yield put(receiveMoviesState(response));
}

export function* watchFetchMovies() {
    yield takeLatest(ADD_MOVIES, receiveMoviesDB);
}

export function* usersSaga() {
    yield all([
        watchFetchMovies(),
    ]);
}