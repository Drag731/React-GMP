import { getMovies } from '../../api/movie';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const ADD_MOVIES = 'ADD_MOVIES';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SEARCH_BUTTON = 'SEARCH_BUTTON';

export const fetchMovies = (q) => {
    return (dispatch) => {
        return getMovies(q)
            .then(response => dispatch(addMovies(response)))
            .catch(() => { throw new Error('I crashed!')})
    };
};

const addMovies = response => ({
    type: ADD_MOVIES,
    response,
});

export const handleSearch = (search) => ({
    type: SEARCH_MOVIE,
    search
});

export const handleSearchButton = () => ({
    type: SEARCH_BUTTON,
});

export const setSearchBy = (payload) => ({
    type: SET_SEARCH_BY,
    payload
});

export const setSortBy = (payload) => ({
    type: SET_SORT_BY,
    payload
});