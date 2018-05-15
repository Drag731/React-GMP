import {
    ADD_MOVIES,
    SEARCH_MOVIE,
    SET_SORT_BY,
    SET_SEARCH_BY,
    SEARCH_BUTTON
} from './MainPageActions';

const initialState = {
    movies: [],
    total: 0,
    search: '',
    sortBy: '',
    searchBy: 'title',
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

        case SET_SORT_BY: {
            return {
                ...state,
                isLoadingMovies: true,
                sortBy: action.payload
            };
        }

        case SET_SEARCH_BY: {
            return {
                ...state,
                searchBy: action.payload
            };
        }

        case SEARCH_MOVIE: {
            return {
                ...state,
                search: action.search
            };
        }

        case SEARCH_BUTTON: {
            return {
                ...state,
                isLoadingMovies: true
            };
        }

        default: {
            return state;
        }
    }
};

export const getisLoadingMovies = state => state.movies.isLoadingMovies;
export const getData = state => state.movies.movies;
export const getSearch = state => state.movies.search;
export const getTotal = state => state.movies.total;

export const getQuery = state => {
    let {search, searchBy, sortBy} = state.movies;
    if (searchBy === 'genres' && search !== '') {
        search = search[0].toUpperCase() + search.slice(1);
    }
   return `?search=${search}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc`
};

export default MoviesReducer;