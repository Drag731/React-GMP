import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieItemsBlock from './MovieItemsBlock.jsx'
import MovieItem from './components/MovieItem.jsx'

configure({ adapter: new Adapter() });

describe('<MovieItemsBlock  />', () => {
    it('Renders MovieItemsBlock component', () => {
        const tree = shallow(
            <MovieItemsBlock />
        );
        expect(tree.find('div.movie-items')).toHaveLength(1);
    });
    it('expect MovieItem component in MovieItemsBlock', () => {
        const movies = [{id:1}, {id:2}];
        const tree = shallow(
            <MovieItemsBlock movies={movies}/>
        );
        expect(tree.find(MovieItem)).toHaveLength(2);
    });
});
