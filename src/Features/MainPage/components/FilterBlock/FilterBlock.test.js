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
        handleEnterPress: jest.fn(),
    };

    it('Renders FilterBlockTest component', () => {
        const tree = shallow(
            < FilterBlockTest {...mockProps} />
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('Renders FilterBlockTest component snapshot2', () => {
        const tree = mount(
            < FilterBlockTest {...mockProps} />
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('FilterBlockTest gets new props', () => {
        const sortBy1 = 'date';
        const sortBy2 = 'rating';
        const receiveMoviesDB = jest.fn();
        const tree = mount(
            <FilterBlockTest
                {...mockProps}
                sortBy={sortBy1}
                receiveMoviesDB={receiveMoviesDB}
            />
        );

        expect(tree.prop('sortBy')).toEqual(sortBy1);
        tree.setProps({sortBy: sortBy2});
        expect(tree.prop('sortBy')).toEqual(sortBy2);
        expect(receiveMoviesDB).toHaveBeenCalled();
    });
    it('should call handleReleaseDateSort on click with release_date', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} sortBy="release_date"/>
        );
        const { setSortBy } = mockProps;
        tree.find('.b-result__sort-item_active').first().simulate('click');
        expect(setSortBy).toHaveBeenCalled();
    });
    it('should call handleRatingSort on click with vote_average', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} sortBy="vote_average"/>
        );
        const { setSortBy } = mockProps;
        tree.find('.b-result__sort-item_active').simulate('click');
        expect(setSortBy).toHaveBeenCalled();
    });
    it('should call handleGenresSearch on click with genres', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} searchBy="genres"/>
        );
        const { setSearchBy } = mockProps;
        tree.find('.b-header__button_active').at(1).simulate('click');
        expect(setSearchBy).toHaveBeenCalled();
    });
    it('should call handleGenresSearch on click with genres', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} searchBy="title"/>
        );
        const { setSearchBy } = mockProps;
        tree.find('.b-header__button_active').at(0).simulate('click');
        expect(setSearchBy).toHaveBeenCalled();
    });
    it('should call handleEnterPress on press enter button', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps}/>
        );
        const { handleEnterPress, receiveMoviesDB } = mockProps;
        tree.find('input').simulate('keyDown', { keyCode: 13 });
        expect(handleEnterPress).toHaveBeenCalled();
        expect(receiveMoviesDB).toHaveBeenCalled();
    });
    it('should call handleSearchButton', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps}/>
        );
        const { handleSearchButton, receiveMoviesDB } = mockProps;
        tree.find('Button').at(2).simulate('click');
        expect(handleSearchButton).toHaveBeenCalled();
        expect(receiveMoviesDB).toHaveBeenCalled();
    });
    it('should call handleSearch', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps}/>
        );
        const { handleSearch } = mockProps;
        tree.find('input').simulate('change');
        expect(handleSearch).toHaveBeenCalled();
    });
});
