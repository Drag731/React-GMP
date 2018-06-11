// @flow
import React from 'react';
import {ThemeProvider} from 'react-jss'

import Button from '../../../../../../components/Button/Button';

type Props = {
    handleSearchButton: Function,
    handleTitleSearch: Function,
    handleDirectorSearch: Function,
};

const searchButtonStyle = {
    colorPrimary: 'red',
    textTransform: 'uppercase'
};

const searchByButtonStyle = {
    colorPrimary: 'black',
    textTransform: 'none'
};

const ChoiceBlock = (props: Props) => {
    const {handleTitleSearch, handleDirectorSearch, handleSearchButton} = props;
    return (
        <div className="b-header__choice choice-flex">
            <div className="choice-flex__item">
                <span className="b-header__choice-text">search by</span>
                <ThemeProvider theme={searchByButtonStyle}>
                    <Button handler={handleTitleSearch}>title</Button>
                </ThemeProvider>
                <ThemeProvider theme={searchByButtonStyle}>
                    <Button handler={handleDirectorSearch}>genres</Button>
                </ThemeProvider>
            </div>
            <div className="choice-flex__item">
                <ThemeProvider theme={searchButtonStyle}>
                    <Button handler={handleSearchButton}>search</Button>
                </ThemeProvider>
            </div>
        </div>
    )
};

export default ChoiceBlock;