import * as actions from './MainPageActions';
import * as types from './MainPageActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as router from 'react-router';
import callApi from '../../api/movies';

router.browserHistory = { push: () => {} };
const middlewares = [thunk.withExtraArgument(callApi)];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should receive movies', () => {
    const payload = { data: [{}, {}, {}], total: 3000 };
    const expectedAction = {
      type: types.ADD_MOVIES,
      payload,
    };
    expect(actions.receiveMoviesState(payload)).toEqual(expectedAction);
  });
});
