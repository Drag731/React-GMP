import * as actions from './MainPageActions';
import * as actionsFB from './components/FilterBlock/FilterBlockActions';
import * as actionsDP from '../DescriptionPage/DescriptionPageActions';
import MainPageReducer from './MainPageReducers';

describe('reducer MainPageReducer', () => {
    const state = {
        movies: [],
        total: 0,
        isLoadingMovies: true
    };

    it('should return the initial state = {}', () => {
        expect(MainPageReducer(undefined, {})).toEqual(state)
    });
    it('should handle ADD_MOVIES, return movies', () => {
        expect(
            MainPageReducer(state,
                actions.receiveMoviesState({data: [{}, {}, {}], total: 3000})
            )
        ).toEqual(
            {
                ...state,
                isLoadingMovies: false,
                movies: [{}, {}, {}],
                total: 3000
            }
        )
    });
    it('should handle SEARCH_BUTTON, return isLoadingMovies: true,', () => {
        expect(
            MainPageReducer(state,
                actionsFB.handleSearchButton()
            )
        ).toEqual(
            {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            }
        )
    });
    it('should handle GO_TO_SEARCH, return isLoadingMovies: true,', () => {
        expect(
            MainPageReducer(state,
                actionsDP.goToSearch()
            )
        ).toEqual(
            {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            }
        )
    });
    it('should handle SET_SORT_BY, return isLoadingMovies: true,', () => {
        expect(
            MainPageReducer(state,
                actionsFB.setSortBy()
            )
        ).toEqual(
            {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            }
        )
    });
    it('should handle PRESS_ENTER_BUTTON, return isLoadingMovies: true,', () => {
        expect(
            MainPageReducer(state,
                actionsFB.handleEnterPress()
            )
        ).toEqual(
            {
                ...state,
                isLoadingMovies: true,
                movies: [],
                total: 0
            }
        )
    });
});