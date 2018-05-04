import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieItemsBlock from './MovieItemsBlock.jsx'

configure({ adapter: new Adapter() });

describe('<MovieItemsBlock  />', () => {
    it('Renders MovieItemsBlock component', () => {
        const tree = shallow(
            <MovieItemsBlock />
        );
        expect(tree.find('div.movie-items')).toHaveLength(1);
    });
});