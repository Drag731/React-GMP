import React from 'react';

import MovieItem from './components/MovieItem'

const MovieItemsBlock = ({movies}) => (
    <div className="movie-items">
        {movies && movies.map(item => (
            <MovieItem
                item={item}
                key={item.id}
            />
        ))}
    </div>
);

export default MovieItemsBlock;
