import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBlock from './SearchBlock.jsx'

configure({ adapter: new Adapter() });

describe('<SearchBlock  />', () => {
    it('Renders HeaderBlock component', () => {
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
});