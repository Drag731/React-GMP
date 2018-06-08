import React from 'react';

import Button from '../../../../../../components/Button/Button';

const ChoiceBlock = ({handleTitleSearch, handleDirectorSearch, handleSearchButton}) => (
    <div className="b-header__choice choice-flex">
        <div className="choice-flex__item">
            <span className="b-header__choice-text">search by</span>
            <Button handler={handleTitleSearch}>title</Button>
            <Button handler={handleDirectorSearch}>genres</Button>
        </div>
        <div className="choice-flex__item">
            <Button handler={handleSearchButton}>search</Button>
        </div>
    </div>
);

export default ChoiceBlock;