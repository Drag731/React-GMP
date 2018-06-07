import * as actions from './FilterBlockActions';
import * as types from './FilterBlockActions';

describe('actions', () => {
  it('should change search value', () => {
    const search = 'A';
    const expectedAction = {
      type: types.SEARCH_MOVIE,
      search,
    };
    expect(actions.handleSearch(search)).toEqual(expectedAction);
  });
  it('should change flag isLoadingMovie: true', () => {
    const expectedAction = {
      type: types.SEARCH_BUTTON,
    };
    expect(actions.handleSearchButton()).toEqual(expectedAction);
  });
});
