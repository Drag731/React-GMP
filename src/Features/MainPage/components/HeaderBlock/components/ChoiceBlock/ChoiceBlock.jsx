// @flow
import React from 'react';

import Button from '../../../../../../components/Button/Button';

type Props = {
    handleSearchButton: Function,
    handleTitleSearch: Function,
    handleDirectorSearch: Function,
};

const ChoiceBlock = (props: Props) => {
    const {handleTitleSearch, handleDirectorSearch, handleSearchButton} = props;
    return (
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
    )
};

export default ChoiceBlock;