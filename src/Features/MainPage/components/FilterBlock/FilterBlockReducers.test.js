import * as actions from './FilterBlockActions';
import FilterBlockReducer from './FilterBlockReducers';

describe('reducer MainPageReducer', () => {
  const state = {
    search: '',
    sortBy: 'release_date',
    searchBy: 'title',
  };

  it('should return the initial state = {}', () => {
    expect(FilterBlockReducer(undefined, {})).toEqual(state);
  });
  it('should handle SET_SORT_BY, return sortBy', () => {
    expect(FilterBlockReducer(
      state,
      actions.setSortBy('date'),
    )).toEqual({
      ...state,
      sortBy: 'date',
    });
  });
  it('should handle SET_SEARCH_BY, return searchBy', () => {
    expect(FilterBlockReducer(
      state,
      actions.setSearchBy('title'),
    )).toEqual({
      ...state,
      searchBy: 'title',
    });
  });
  it('should handle SEARCH_MOVIE, return search', () => {
    expect(FilterBlockReducer(
      state,
      actions.handleSearch('title'),
    )).toEqual({
      ...state,
      search: 'title',
    });
  });
});
