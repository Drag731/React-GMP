import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { getMovies }  from '../../api/movies'
export const ADD_MOVIES = 'ADD_MOVIES';
export const GO_TO_DESCRIPTION = 'GO_TO_DESCRIPTION';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = (query) => ({
    type: FETCH_MOVIES,
    query
});

export const receiveMoviesState = payload => ({
    type: ADD_MOVIES,
    payload,
});

export const goToDescription = () => ({
    type: GO_TO_DESCRIPTION,
});

// Sagas
export function* receiveMoviesDB({query}) {
    const response = yield call(getMovies, query);

    yield put(receiveMoviesState(response));
}

export function* watchFetchMovies() {
    yield takeLatest('FETCH_MOVIES', receiveMoviesDB);
}

export function* moviesSaga() {
    yield all([
        watchFetchMovies(),
    ]);
}