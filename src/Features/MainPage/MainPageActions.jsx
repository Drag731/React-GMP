export const ADD_MOVIES = 'ADD_MOVIES';

export const receiveMoviesDB = (q = '') => {
    return (dispatch, getState, api) => {
        console.log("getState", getState());
        api(`movies${q}`)
            .then(response => {
                dispatch(receiveMoviesState(response.data));
            })
            .catch(() => {
                throw new Error('I crashed!');
            })
    };
};

const receiveMoviesState = response => ({
    type: ADD_MOVIES,
    response,
});
