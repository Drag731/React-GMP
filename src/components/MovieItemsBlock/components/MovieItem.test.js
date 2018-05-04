import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieItem from './MovieItem.jsx'

configure({ adapter: new Adapter() });

describe('<MovieItem  />', () => {
    it('Renders MovieItem component', () => {
        const item = {
            poster_path: 'http',
            id: 1,
            title: 'title',
            release_date: 2001,
            genres: ['Comedy']
        };

        const tree = shallow(
            <MovieItem item={item}/>
        );
        expect(tree.find('.movie-items__item')).toHaveLength(1);
    });
});