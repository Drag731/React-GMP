import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieItem from './MovieItem.jsx'

configure({ adapter: new Adapter() });

describe('<MovieItem  />', () => {
    const item = {
        poster_path: 'http',
        id: 1,
        title: 'title',
        release_date: 2001,
        genres: ['Comedy']
    };
    it('Snapshot one', () => {
        const tree = renderer
            .create(<BrowserRouter><MovieItem item={item} /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders MovieItem component', () => {
        const tree = shallow(
            <MovieItem item={item}/>
        );
        expect(tree.find('.movie-items__item')).toHaveLength(1);
    });
});
