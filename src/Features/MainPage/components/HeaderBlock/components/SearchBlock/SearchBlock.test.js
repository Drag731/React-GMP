import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBlock from './SearchBlock.jsx'

configure({ adapter: new Adapter() });

describe('<SearchBlock  />', () => {
    it('Renders SearchBlock component', () => {
        const handleSearch = jest.fn();
        const search = 'search';
        const tree = shallow(
            <SearchBlock
                handleSearch={handleSearch}
                search={search}
            />
        );
        expect(tree.find('.b-header__search')).toHaveLength(1);
    });
    it('check SearchBlock component click', () => {
        const handleSearch = jest.fn();
        const search = 'search';
        const tree = shallow(
            <SearchBlock
                handleSearch={handleSearch}
                search={search}
            />
        );
        tree.find('input').simulate('change');

        expect(handleSearch).toHaveBeenCalled();
    });
});
