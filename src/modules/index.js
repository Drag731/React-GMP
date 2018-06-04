import { all } from 'redux-saga/effects';

import {
    moviesSaga,
} from '../Features/MainPage/MainPageActions';

import {
    descriptionSaga,
} from '../Features/DescriptionPage/DescriptionPageActions';

function* rootSaga() {
    yield all([
        moviesSaga(),
        descriptionSaga()
    ]);
}

export {
    rootSaga
};