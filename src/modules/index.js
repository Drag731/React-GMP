import { all } from 'redux-saga/effects';

import { moviesSaga } from '../Features/MainPage/MainPageActions';

import { descriptionSaga } from '../Features/DescriptionPage/DescriptionPageActions';

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    descriptionSaga(),
  ]);
}
