import React from 'react';

// import './ResultBlock.scss'

const ResultBlock = ({handleReleaseDateSort, handleRatingSort, total, sortBy}) => (
    <div className="main-page__result b-result">
        <div className="b-result__text-wrap">
            <span className="b-result__text">
                {total} movies found
            </span>
        </div>
        <div className="b-result__sort-wrap">
            <span className="b-result__sort-text">Sort by:</span>
            <span
                onClick={handleReleaseDateSort}
                className="b-result__sort-item"
                style={
                    {
                        color: sortBy === 'release_date' ? 'red' : '#000',
                        pointerEvents: sortBy === 'release_date' ? 'none' : 'auto'
                    }
                }
            >
                release date
            </span>
            <span
                onClick={handleRatingSort}
                className="b-result__sort-item"
                style={
                    {
                        color: sortBy === 'vote_average' ? 'red' : '#000',
                        pointerEvents: sortBy === 'vote_average' ? 'none' : 'auto'
                    }
                }
            >
                rating
            </span>
        </div>
    </div>
);

export default ResultBlock;
