import React from 'react';

const SearchBlock = ({handleSearch, search}) => (
    <div className="b-header__search">
        <span className="b-header__search-title">find your movie</span>
        <input
            onChange={(e) => handleSearch(e)}
            className="b-header__search-input"
            type="search"
            placeholder="search"
            value={search}
        />
    </div>
);

export default SearchBlock;