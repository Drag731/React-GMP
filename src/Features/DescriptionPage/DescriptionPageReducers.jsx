import {
    ADD_MOVIE,
    CHANGE_LOADING
} from './DescriptionPageActions';

import {
    ADD_MOVIES,
} from '../MainPage/MainPageActions';

const initialState = {
    genres: [],
    isLoadingMovie: true,
    movie: {},
    movies: []
};

const DescriptionPageReducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {

        case ADD_MOVIE: {
            return {
                ...state,
                isLoadingMovie: false,
                movie: action.response.data,
                genres: action.response.data.genres
            };
        }

        case ADD_MOVIES: {
            return {
                ...state,
                movies: action.response.data,
            };
        }

        case CHANGE_LOADING: {
            return {
                ...state,
                isLoadingMovie: true
            };
        }

        default: {
            return state;
        }
    }
};

export const getIsLoadingMovie = state => state.description.isLoadingMovie;
export const getMovie = state => state.description.movie;
export const getMovies = state => state.description.movies;
export const getGenre = state => state.description.genres;

export default DescriptionPageReducer;