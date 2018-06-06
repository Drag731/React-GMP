import {
    ADD_MOVIE,
    FETCH_MOVIE
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

        case FETCH_MOVIE: {
            return {
                ...state,
                isLoadingMovie: true,
            };
        }

        case ADD_MOVIES: {
            return {
                ...state,
                movies: action.payload.data,
            };
        }

        case GO_TO_DESCRIPTION: {
            return {
                ...state,
                isLoadingMovie: true,
                movies: []
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