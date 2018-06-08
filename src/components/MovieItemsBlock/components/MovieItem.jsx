// @flow
import React from 'react';

type Props = {
    item: {
        poster_path: string,
        title: string,
        release_date: number,
        genres: Array<string>
    }
};

const MovieItem = (props: Props) => {
    const {item} = props;
    return (
        <div className="movie-items__item b-item">
            <div className="b-item__img-wrap">
                <img className="b-item__img-pic" src={item.poster_path} alt=""/>
            </div>
            <div className="b-item__title-wrap">
                <span className="b-item__title-text">{item.title}</span>
                <span className="b-item__title-year">{item.release_date}</span>
            </div>
            <div className="b-item__ganre-wrap">
                <span className="b-item__ganre-text">{item.genres.join(' & ')}</span>
            </div>
        </div>
    )
};

export default MovieItem;