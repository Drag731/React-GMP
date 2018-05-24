import {
    ADD_MOVIE,
    CHANGE_LOADING
} from './DescriptionPageActions';

import {
    ADD_MOVIES,
    GO_TO_DESCRIPTION
} from '../MainPage/MainPageActions';

const initialState = {
    genres: [],
    isLoadingMovie: true,
    movie: {},
    movies: []
};

const DescriptionPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MOVIE: {
            return {
                ...state,
                isLoadingMovie: false,
                movie: action.payload,
                genres: action.payload.genres
            };
        }

        case ADD_MOVIES: {
            return {
                ...state,
                movies: action.payload.data,
            };
        }

        case CHANGE_LOADING: {
            return {
                ...state,
                isLoadingMovie: true
            };
        }

        case GO_TO_DESCRIPTION: {
            return {
                ...state,
                isLoadingMovie: true,
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