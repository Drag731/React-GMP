import { all } from 'redux-saga/effects';

import {
    usersSaga,
} from '../Features/MainPage/MainPageActions';

function* rootSaga() {
    yield all([
        usersSaga(),
    ]);
}

export {
    rootSaga
};