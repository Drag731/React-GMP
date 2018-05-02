import React from 'react';

// import './ResultBlock.scss'

const ResultBlock = ({handleReleaseDateSort, handleRatingSort, total}) => (
    <div className="main-page__result b-result">
        <div className="b-result__text-wrap">
            <span className="b-result__text">
                {total} movies found
            </span>
        </div>
        <div className="b-result__sort-wrap">
            <span>Sort by:</span>
            <span onClick={handleReleaseDateSort}>release date</span>
            <span onClick={handleRatingSort}>rating</span>
        </div>
    </div>
);

export default ResultBlock;
