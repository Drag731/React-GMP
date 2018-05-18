export const ADD_MOVIE = 'ADD_MOVIE';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const GO_TO_SEARCH = 'GO_TO_SEARCH';

export const receiveMovieDB = (id) => {
    return (dispatch, getState, api) => {
        console.log("getState", getState());
        api(`movies/${id}`)
            .then(response => {
                dispatch(receiveMovieState(response));
            })
            .catch(() => {
                    throw new Error('I crashed!');
            })
    };
};

const receiveMovieState = response => ({
    type: ADD_MOVIE,
    response,
});

export const changeIsLoading = () => ({
    type: CHANGE_LOADING,
});

export const goToSearch = () => ({
    type: GO_TO_SEARCH,
});


