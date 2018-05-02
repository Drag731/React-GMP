import React from 'react';

import HeaderLogo from '../../../../components/HeaderLogo/HeaderLogo';
import SearchBlock from './components/SearchBlock/SearchBlock';
import ChoiceBlock from './components/ChoiceBlock/ChoiceBlock';

// import './NoFilmsFound.scss'

const HeaderBlock = ({handleSearch, handleTitleSearch, handleDirectorSearch, search}) => (
    <div className="main-page__header b-header">
        <HeaderLogo description={false} />
        <SearchBlock
            handleSearch={handleSearch}
            search={search}
        />
        <ChoiceBlock
            handleTitleSearch={handleTitleSearch}
            handleDirectorSearch={handleDirectorSearch}
        />
    </div>
);

export default HeaderBlock;
