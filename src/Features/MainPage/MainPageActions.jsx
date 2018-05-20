export const ADD_MOVIES = 'ADD_MOVIES';

export const receiveMoviesDB = (q = '') => {
    return (dispatch, getState, api) => {
        api(`movies${q}`)
            .then(response => {
                dispatch(receiveMoviesState(response.data));
            })
            .catch(() => {
                throw new Error('I crashed!');
            })
    };
};

export const receiveMoviesState = payload => ({
    type: ADD_MOVIES,
    payload,
});
