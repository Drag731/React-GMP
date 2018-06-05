import {
    SEARCH_MOVIE,
    SET_SORT_BY,
    SET_SEARCH_BY,
} from './FilterBlockActions';

import {
    DEFAULT_SORT,
    DEFAULT_SEARCH
} from '../../../../constants/constants'

const initialState = {
    search: '',
    sortBy: DEFAULT_SORT,
    searchBy: DEFAULT_SEARCH
};

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SORT_BY: {
            return {
                ...state,
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

        default: {
            return state;
        }
    }
};

export const getQuery = state => {
    let {search, searchBy, sortBy} = state.filter;
    if (searchBy === 'genres' && search !== '') {
        search = search[0].toUpperCase() + search.slice(1);
    }
    return `?search=${search}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc`
};

export default FilterReducer;