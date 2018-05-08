import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import MovieItemsBlock from './MovieItemsBlock.jsx'
import MovieItem from './components/MovieItem.jsx'

configure({ adapter: new Adapter() });

describe('<MovieItemsBlock  />', () => {
    it('Snapshot one', () => {
        const tree = renderer
            .create(<MovieItemsBlock />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Snapshot two', () => {
        const movie = [{
            "id": 447365,
            "title": "Guardians of the Galaxy Vol. 3",
            "tagline": "",
            "vote_average": 0,
            "vote_count": 9,
            "release_date": "2020-05-01",
            "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
            "overview": "The third film based on Marvel's Guardians of the Galaxy.",
            "budget": 0,
            "revenue": 0,
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "runtime": null
        }];

        const tree = renderer
            .create(<BrowserRouter><MovieItemsBlock movies={movie} /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
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
