import {
    ADD_MOVIES,
} from './MainPageActions';

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
                movies: action.response.data,
                total: action.response.total
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