import * as actions from './DescriptionPageActions';
import * as types from './DescriptionPageActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as router from 'react-router';
import callApi from '../../api/movies';

router.browserHistory = { push: () => {} };
const middlewares = [thunk.withExtraArgument(callApi)];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should change flag isLoadingMovie: true', () => {
    const expectedAction = {
      type: types.GO_TO_SEARCH,
    };
    expect(actions.goToSearch()).toEqual(expectedAction);
  });
  it('should create an action to receive json file ', () => {
    const payload = { data: [{}, {}, {}], total: 3000 };
    const expectedAction = {
      type: types.ADD_MOVIE,
      payload,
    };
    expect(actions.receiveMovieState(payload)).toEqual(expectedAction);
  });
  // afterEach(() => {
  //     nock.cleanAll()
  // });
  // it('receive movie from server', () => {
  //
  //     const movie = { id: 1, genres: ['A', 'B'] };
  //
  //     nock('http://react-cdp-api.herokuapp.com')
  //         .get('/movies/1')
  //         .reply(200, movie);
  //
  //     const expectedActions = [
  //         { type: types.ADD_MOVIE, payload: movie }
  //     ];
  //
  //     const store = mockStore({ movie: {} });
  //
  //     return store.dispatch(actions.receiveMovieDB(1)).then(() => {
  //         // return of async actions
  //         expect(store.getActions()).toEqual(expectedActions)
  //     })
  // });
});
