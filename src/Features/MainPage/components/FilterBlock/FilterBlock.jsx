import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultBlock from '../ResultBlock/ResultBlock';
import HeaderBlock from '../HeaderBlock/HeaderBlock';

import {
    handleSearch,
    handleSearchButton,
    setSearchBy,
    setSortBy,
    handleEnterPress
} from './FilterBlockActions';

import { getQuery, getSearch } from './FilterBlockReducers';

import { receiveMoviesDB } from '../../MainPageActions';
import { getTotal } from '../../MainPageReducers';

const mapStateToProps = state => ({
    total: getTotal(state),
    query: getQuery(state),
    search: getSearch(state),
    searchBy: state.filter.searchBy,
    sortBy: state.filter.sortBy,
});

const mapDispatchToProps = {
    receiveMoviesDB: (q) => receiveMoviesDB(q),
    handleSearch: (search) => handleSearch(search),
    setSearchBy: payload => setSearchBy(payload),
    setSortBy: payload => setSortBy(payload),
    handleSearchButton: () => handleSearchButton(),
    handleEnterPress: () => handleEnterPress()
};

class FilterBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.sortBy !== nextProps.sortBy) {
            this.props.receiveMoviesDB(nextProps.query);
        }
    }

    handleSearch = (search) => { this.props.handleSearch(search)};

    handleSearchButton = () => {
        this.props.handleSearchButton();
        this.props.receiveMoviesDB(this.props.query);
    };

    handleTitleSearch = () => { this.props.setSearchBy('title')};

    handleGenresSearch = () => { this.props.setSearchBy('genres')};

    handleReleaseDateSort = () => { this.props.setSortBy('release_date')};

    handleRatingSort = () => { this.props.setSortBy('vote_average')};

    handleEnterPress = (e) => {
        if(e.keyCode === 13) {
            this.props.handleEnterPress();
            this.props.receiveMoviesDB(this.props.query);
        }
    };

    render() {
        console.log(this.props);
        const { search, total, searchBy, sortBy } = this.props;
        return (
            <React.Fragment>
                <HeaderBlock
                    handleSearch={this.handleSearch}
                    handleSearchButton={this.handleSearchButton}
                    handleTitleSearch={this.handleTitleSearch}
                    handleGenresSearch={this.handleGenresSearch}
                    handleEnterPress={this.handleEnterPress}
                    search={search}
                    searchBy={searchBy}
                />
                <ResultBlock
                    total={total}
                    handleReleaseDateSort={this.handleReleaseDateSort}
                    handleRatingSort={this.handleRatingSort}
                    sortBy={sortBy}
                />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);
