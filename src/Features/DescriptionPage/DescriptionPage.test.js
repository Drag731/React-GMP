import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import { DescriptionPageTest } from './DescriptionPage';

configure({ adapter: new Adapter() });

describe('<DescriptionPageTest  />', () => {
  const mockProps = {
    genres: [],
    isLoadingMovie: true,
    movie: {},
    movies: [],
    fetchMovie: jest.fn(),
    fetchMovies: jest.fn(),
    goToSearch: jest.fn(),
  };
  const match = {
    params: {
      id: 1,
    },
  };

  it('Renders DescriptionPageTest component', () => {
    const tree = shallow(< DescriptionPageTest {...mockProps} match={match} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('Renders DescriptionPageTest component snapshot2', () => {
    const tree = shallow(< DescriptionPageTest {...mockProps} match={match} isLoadingMovie={false} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('should call receiveMovieDB on init', () => {
    const fetchMovie = jest.fn();
    const fetchMovies = jest.fn();
    const tree = shallow(<DescriptionPageTest
                    {...mockProps}
                    match={match}
                    fetchMovie={fetchMovie}
                    fetchMovies={fetchMovies}
                />);
    expect(fetchMovie).toHaveBeenCalled();
    expect(fetchMovies).toHaveBeenCalled();
  });
  it('DescriptionPage gets new props', () => {
    const match1 = {
      params: {
        id: 1,
      },
    };
    const match2 = {
      params: {
        id: 2,
      },
    };
    const changeIsLoading = jest.fn();
    const fetchMovie = jest.fn();
    const fetchMovies = jest.fn();
    const tree = mount(<DescriptionPageTest
                    {...mockProps}
                    match={match1}
                    fetchMovie={fetchMovie}
                    fetchMovies={fetchMovies}
                />);

    expect(tree.prop('match')).toEqual(match1);
    tree.setProps({ match: match2 });
    expect(tree.prop('match')).toEqual(match2);
    expect(fetchMovie).toHaveBeenCalled();
    expect(fetchMovies).toHaveBeenCalled();
  });
  it('should call handleGoSearchPage', () => {
    const movie = {
      genres: ['A'],
    };
    const tree = mount(<BrowserRouter><DescriptionPageTest {...mockProps} match={match} isLoadingMovie={false} movie={movie}/></BrowserRouter>);
    const { goToSearch } = mockProps;
    tree.find('.b-header__logo-link').first().simulate('click');
    expect(goToSearch).toHaveBeenCalled();
  });
});
