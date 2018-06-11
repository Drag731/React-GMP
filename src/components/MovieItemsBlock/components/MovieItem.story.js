import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieItem from './MovieItem';

storiesOf('MovieItem', module)
    .add('with text', () => {
        const item = {
            "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
            "title": "Guardians of the Galaxy Vol. 3",
            "release_date": "2020-05-01",
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ]
        };

        return (
            <MovieItem item={item}>My Button</MovieItem>
        )
    });
