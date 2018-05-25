import React from 'react';

import MovieItem from './components/MovieItem'

const MovieItemsBlock = ({movies, handleGoToDescriptionPage}) => (
    <div className="movie-items">
        {movies && movies.map(item => (
            <MovieItem
                item={item}
                key={item.id}
                handleGoToDescriptionPage={handleGoToDescriptionPage}
            />
        ))}
    </div>
);

export default MovieItemsBlock;
