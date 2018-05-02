import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({item, reload=((id) => true)}) => (
    <div className="movie-items__item b-item">
        <div className="b-item__img-wrap">
            <img className="b-item__img-pic" src={item.poster_path} alt=""/>
        </div>
        <div className="b-item__title-wrap">
            <Link
                to={`/filmzilla/description/${item.id}`}
                onClick={() => reload(item.id)}
            >
                <span className="b-item__title-text">{item.title}</span>
            </Link>
            <span className="b-item__title-year">{item.release_date}</span>
        </div>
        <div className="b-item__ganre-wrap">
            <span className="b-item__ganre-text">{item.genres}</span>
        </div>
    </div>
);

export default MovieItem;