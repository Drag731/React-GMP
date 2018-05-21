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
    it('should call handleRatingSort on click', () => {
        const tree = mount(
            <FilterBlockTest {...mockProps} sortBy="release_date"/>
        );
        console.log(tree.debug());
        console.log("elem", tree.find('.b-result__sort-item_active').first());
        const spy = jest.spyOn(tree.instance(), 'handleRatingSort');
        // tree.update();
        // tree.find('.b-result__sort-item_active').simulate('click');
        // expect(spy).toHaveBeenCalled();
    });
});
