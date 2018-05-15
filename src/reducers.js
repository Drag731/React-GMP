import { combineReducers } from 'redux';

import MainPageReducer from './Features/MainPage/MainPageReducers';

export default combineReducers({
    movies: MainPageReducer,
});