export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SEARCH_BUTTON = 'SEARCH_BUTTON';
export const PRESS_ENTER_BUTTON = 'PRESS_ENTER_BUTTON';

export const handleSearch = (search) => ({
    type: SEARCH_MOVIE,
    search
});

export const handleSearchButton = () => ({
    type: SEARCH_BUTTON,
});

export const handleEnterPress = () => ({
    type: PRESS_ENTER_BUTTON,
});

export const setSearchBy = (payload) => ({
    type: SET_SEARCH_BY,
    payload
});

export const setSortBy = (payload) => ({
    type: SET_SORT_BY,
    payload
});