// @flow
import React from 'react';
import injectSheet from 'react-jss'

import MovieItem from './components/MovieItem'

type Props = {
    movies: {
        id: number,
        poster_path: string,
        title: string,
        release_date: number,
        genres: Array<string>
    }[],
    classes: {'movie-items': {}}
};

const styles = {
    'movie-items' : {
        display: 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'space-between'
    }
};

const MovieItemsBlock = (props: Props) => {
    const {movies, classes} = props;
    return (
        <div className={classes['movie-items']}>
            {movies && movies.map(item => (
                <MovieItem
                    item={item}
                    key={item.id}
                />
            ))}
        </div>
    )
};

const StyledMovieItemsBlock = injectSheet(styles)(MovieItemsBlock);
export default StyledMovieItemsBlock;