import {
    ADD_MOVIES,
} from './MainPageActions';

import {
    SEARCH_BUTTON,
    SET_SORT_BY,
    PRESS_ENTER_BUTTON
} from './components/FilterBlock/FilterBlockActions';

import {
    GO_TO_SEARCH
} from '../DescriptionPage/DescriptionPageActions';

const initialState = {
    movies: [],
    total: 0,
    isLoadingMovies: true
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MOVIES: {
            return {
                ...state,
                isLoadingMovies: false,
                movies: action.payload.data,
                total: action.payload.total
            };
        }

        case SEARCH_BUTTON: {
            return {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            };
        }

        case GO_TO_SEARCH: {
            return {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            };
        }

        case SET_SORT_BY: {
            return {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            };
        }

        case PRESS_ENTER_BUTTON: {
            return {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            };
        }

        default: {
            return state;
        }
    }
};

export const getIsLoadingMovies = state => state.movies.isLoadingMovies;
export const getData = state => state.movies.movies;
export const getTotal = state => state.movies.total;

export default MoviesReducer;