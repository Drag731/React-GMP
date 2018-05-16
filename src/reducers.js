import { combineReducers } from 'redux';

import MainPageReducer from './Features/MainPage/MainPageReducers';
import FilterBlockReducer from './Features/MainPage/components/FilterBlock/FilterBlockReducers';

export default combineReducers({
    movies: MainPageReducer,
    filter: FilterBlockReducer
});