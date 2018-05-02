import React from 'react';

import Button from '../../../../../../components/Button/Button';

// import './ChoiceBlock.scss'

const ChoiceBlock = ({handleTitleSearch, handleDirectorSearch}) => (
    <div className="b-header__choice choice-flex">
        <div className="choice-flex__item">
            <span className="b-header__choice-text">search by</span>
            <Button handler={handleTitleSearch}>title</Button>
            <Button handler={handleDirectorSearch}>genres</Button>
        </div>
        <div className="choice-flex__item">
            <Button handler={handleTitleSearch}>search</Button>
        </div>
    </div>
);

export default ChoiceBlock;
