import * as actions from './DescriptionPageActions';
import * as actionsMP from '../MainPage/MainPageActions';
import DescriptionPageReducer from './DescriptionPageReducers';

describe('reducer DescriptionPageReducer', () => {
    const state = {
        genres: [],
        isLoadingMovie: true,
        movie: {},
        movies: []
    };

    it('should return the initial state = {}', () => {
        expect(DescriptionPageReducer(undefined, {})).toEqual(state)
    });
    it('should handle CHANGE_LOADING, return isLoadingMovie: true', () => {
        expect(
            DescriptionPageReducer({},
                actions.changeIsLoading()
            )
        ).toEqual(
            {
                isLoadingMovie: true,
            }
        )
    });
    it('should handle GO_TO_DESCRIPTION, return isLoadingMovie: true', () => {
        expect(
            DescriptionPageReducer({},
                actionsMP.goToDescription()
            )
        ).toEqual(
            {
                isLoadingMovie: true,
            }
        )
    });
    it('should handle ADD_MOVIE, return movie', () => {
        const payload = {
            id:424785,
            genres: ["A", "B"]
        };
        expect(
            DescriptionPageReducer(state,
                actions.receiveMovieState(payload)
            )
        ).toEqual(
            {
                isLoadingMovie: false,
                movie: {id:424785, genres: ["A", "B"] },
                genres: ["A", "B"],
                movies: []
            }
        )
    });
    it('should handle ADD_MOVIES, return movies', () => {
        expect(
            DescriptionPageReducer(state,
                actionsMP.receiveMoviesState({data: [{}, {}, {}]})
            )
        ).toEqual(
            {
                ...state,
                movies: [{}, {}, {}]
            }
        )
    });
});