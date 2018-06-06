import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { getMovie }  from '../../api/movies'
export const ADD_MOVIE = 'ADD_MOVIE';
export const GO_TO_SEARCH = 'GO_TO_SEARCH';
export const FETCH_MOVIE = 'FETCH_MOVIE';

export const goToSearch = () => ({
    type: GO_TO_SEARCH,
});

export const fetchMovie = (id) => ({
    type: FETCH_MOVIE,
    id
});

export const receiveMovieState = payload => ({
    type: ADD_MOVIE,
    payload,
});

// Sagas
export function* receiveMovieDB({id}) {
    const response = yield call(getMovie, id);

    yield put(receiveMovieState(response));
}

export function* watchFetchMovie() {
    yield takeLatest('FETCH_MOVIE', receiveMovieDB);
}

export function* descriptionSaga() {
    yield all([
        watchFetchMovie(),
    ]);
}
