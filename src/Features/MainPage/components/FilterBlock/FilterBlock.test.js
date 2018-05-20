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
        handleSearch: () => {},
        receiveMoviesDB: () => {},
        setSearchBy: () => {},
        setSortBy: () => {},
        handleSearchButton: () => {},
        handleEnterPress: () => {},
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
});
