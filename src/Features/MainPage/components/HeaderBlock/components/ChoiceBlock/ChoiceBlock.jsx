import React from 'react';

import Button from '../../../../../../components/Button/Button';

// import './ChoiceBlock.scss'

const ChoiceBlock = ({handleTitleSearch, handleGenresSearch, handleSearchButton, searchBy, search}) => (
    <div className="b-header__choice choice-flex">
        <div className="choice-flex__item">
            <span className="b-header__choice-text">search by</span>
            <Button
                handler={handleTitleSearch}
                className="b-header__button"
                style={{
                    background: searchBy === 'title' ? 'aqua' : '#ccc',
                    pointerEvents: searchBy === 'title' ? 'none' : 'auto'
                }}
            >title
            </Button>
            <Button
                handler={handleGenresSearch}
                className="b-header__button"
                style={{
                    background: searchBy === 'title' ? '#ccc' : 'aqua',
                    pointerEvents: searchBy === 'genres' ? 'none' : 'auto'
                }}
            >genres
            </Button>
        </div>
        <div className="choice-flex__item">
            <Button
                handler={handleSearchButton}
                style={
                    {
                        background: search === '' ? '#ccc' : 'red',
                        pointerEvents: search === '' ? 'none' : 'auto'
                    }
                }
            >search
            </Button>
        </div>
    </div>
);

export default ChoiceBlock;
