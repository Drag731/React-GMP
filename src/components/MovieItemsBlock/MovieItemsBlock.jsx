import React from 'react';

import MovieItem from './components/MovieItem'

const MovieItemsBlock = ({movies, reload}) => (
    <div className="movie-items">
        {movies && movies.map(item => (
            <MovieItem
                item={item}
                key={item.id}
                reload={reload}
            />
        ))}
    </div>
);

export default MovieItemsBlock;
