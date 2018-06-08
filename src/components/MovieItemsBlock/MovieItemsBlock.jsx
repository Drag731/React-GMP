// @flow
import React from 'react';

import MovieItem from './components/MovieItem'

type Props = {
    movies: {
        id: number,
        poster_path: string,
        title: string,
        release_date: number,
        genres: Array<string>
    }[]
};

const MovieItemsBlock = (props: Props) => {
    const {movies} = props;
    return (
        <div className="movie-items">
            {movies && movies.map(item => (
                <MovieItem
                    item={item}
                    key={item.id}
                />
            ))}
        </div>
    )
};

export default MovieItemsBlock;