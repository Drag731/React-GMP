import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { FilterBlockTest } from './FilterBlock'

configure({ adapter: new Adapter() });

describe('<FilterBlockTest  />', () => {
    const mockProps = {
        search: '',
        sortBy: '',
        searchBy: 'title',
        total: 3000,
        query: '',
        handleSearch: jest.fn(),
        receiveMoviesDB: jest.fn(),
        setSearchBy: jest.fn(),
        setSortBy: jest.fn(),
        handleSearchButton: jest.fn(),
        handleEnterPress: jest.fn()
    };
    const location = {
        search: "a"
    };

    it('Renders FilterBlockTest component', () => {
        const tree = shallow(
            < FilterBlockTest {...mockProps} location={location}/>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('Renders FilterBlockTest component snapshot2', () => {
        const tree = mount(
            < FilterBlockTest {...mockProps} location={location}/>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('should call receiveMoviesDB on init', () => {
        const receiveMoviesDB = jest.fn();
        const tree = shallow(
            <FilterBlockTest
                {...mockProps}
                receiveMoviesDB={receiveMoviesDB}
                location={location}
            />
        );

        expect(receiveMoviesDB).toHaveBeenCalled();
    });
    it('should call transitionToURL on init', () => {
        const tree = shallow(
            <FilterBlockTest
                {...mockProps}
                location={location}
            />
        );
        const { setSearchBy, setSortBy, handleSearch } = mockProps;
        expect(setSearchBy).toHaveBeenCalled();
        expect(setSortBy).toHaveBeenCalled();
        expect(handleSearch).toHaveBeenCalled();
    });
    it('FilterBlockTest gets new props', () => {
        const sortBy1 = 'date';
        const sortBy2 = 'rating';
        const receiveMoviesDB = jest.fn();
        const push = jest.fn();
        const history = {
            push
        };
        const tree = mount(
            <FilterBlockTest
                {...mockProps}
                sortBy={sortBy1}
                receiveMoviesDB={receiveMoviesDB}
                location={location}
                history={history}
            />
        );

        expect(tree.prop('sortBy')).toEqual(sortBy1);
        tree.setProps({sortBy: sortBy2});
        expect(tree.prop('sortBy')).toEqual(sortBy2);
        expect(receiveMoviesDB).toHaveBeenCalled();
        expect(history.push).toHaveBeenCalled();
    });
    it('should call handleReleaseDateSort on click with release_date', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location} sortBy="release_date"/>
        );
        const { setSortBy } = mockProps;
        tree.find('.b-result__sort-item_active').first().simulate('click');
        expect(setSortBy).toHaveBeenCalled();
    });
    it('should call handleRatingSort on click with vote_average', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location} sortBy="vote_average"/>
        );
        const { setSortBy } = mockProps;
        tree.find('.b-result__sort-item_active').simulate('click');
        expect(setSortBy).toHaveBeenCalled();
    });
    it('should call handleGenresSearch on click with genres', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location} searchBy="genres"/>
        );
        const { setSearchBy } = mockProps;
        tree.find('.b-header__button_active').at(1).simulate('click');
        expect(setSearchBy).toHaveBeenCalled();
    });
    it('should call handleGenresSearch on click with genres', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location} searchBy="title"/>
        );
        const { setSearchBy } = mockProps;
        tree.find('.b-header__button_active').at(0).simulate('click');
        expect(setSearchBy).toHaveBeenCalled();
    });
    it('should call handleEnterPress on press enter button', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location}/>
        );
        const { handleEnterPress, receiveMoviesDB } = mockProps;
        tree.find('input').simulate('keyDown', { keyCode: 13 });
        expect(handleEnterPress).toHaveBeenCalled();
        expect(receiveMoviesDB).toHaveBeenCalled();
    });
    it('should call handleSearchButton', () => {
        const push = jest.fn();
        const history = {
            push
        };
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location} history={history}/>
        );
        const { handleSearchButton, receiveMoviesDB } = mockProps;
        tree.find('Button').at(2).simulate('click');
        expect(handleSearchButton).toHaveBeenCalled();
        expect(receiveMoviesDB).toHaveBeenCalled();
        expect(history.push).toHaveBeenCalled();
    });
    it('should call handleSearch', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} location={location}/>
        );
        const { handleSearch } = mockProps;
        tree.find('input').simulate('change');
        expect(handleSearch).toHaveBeenCalled();
    });
});
