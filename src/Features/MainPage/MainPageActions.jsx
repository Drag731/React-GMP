import { getMovies, callApi } from '../../api/movies';

export const ADD_MOVIES = 'ADD_MOVIES';

export const fetchMovies = (q) => {
    return (dispatch) => {
        return getMovies(q)
            .then(response => dispatch(addMovies(response)))
            .catch(() => { throw new Error('I crashed!')})
    };
};

export const receiveMoviesDB = (q = '') => {
    return (dispatch, getState, api) => {
        console.log("getState", getState());
        api(`movies${q}`)
            .then(response => {
                dispatch(receiveMoviesState(response.data));
            });
    };
};

const receiveMoviesState = response => ({
    type: ADD_MOVIES,
    response,
});

const addMovies = response => ({
    type: ADD_MOVIES,
    response,
});
