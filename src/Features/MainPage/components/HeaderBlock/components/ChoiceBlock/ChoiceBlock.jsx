import React from 'react';

import Button from '../../../../../../components/Button/Button';

// import './ChoiceBlock.scss'

const ChoiceBlock = ({handleTitleSearch, handleGenresSearch, handleSearchButton, searchBy, search}) => (
    <div className="b-header__choice choice-flex">
        <div className="choice-flex__item">
            <span className="b-header__choice-text">search by</span>
            <Button
                handler={handleTitleSearch}
                style={{ background: searchBy === 'title' ? 'aqua' : '#ccc'}}
            >title
            </Button>
            <Button
                handler={handleGenresSearch}
                style={{ background: searchBy === 'title' ? '#ccc' : 'aqua'}}
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
