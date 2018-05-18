import React from 'react';

// import './SearchBlock.scss'

const SearchBlock = ({handleSearch, handleEnterPress, search}) => (
    <div className="b-header__search">
        <span className="b-header__search-title">find your movie</span>
        <input
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={(e) => handleEnterPress(e)}
            className="b-header__search-input"
            type="search"
            placeholder="search"
            value={search}
        />
    </div>
);

export default SearchBlock;
