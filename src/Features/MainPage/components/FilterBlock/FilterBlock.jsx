import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResultBlock from '../ResultBlock/ResultBlock';
import HeaderBlock from '../HeaderBlock/HeaderBlock';

import {
    handleSearch,
    handleSearchButton,
    setSearchBy,
    setSortBy,
    handleEnterPress
} from './FilterBlockActions';

import { getQuery } from './FilterBlockReducers';

import { fetchMovies } from '../../MainPageActions';
import { getTotal } from '../../MainPageReducers';

const mapStateToProps = state => ({
    total: getTotal(state),
    query: getQuery(state),
    search: state.filter.search,
    searchBy: state.filter.searchBy,
    sortBy: state.filter.sortBy,
});

const mapDispatchToProps = dispatch => bindActionCreators ({
    handleSearch: (search) => handleSearch(search),
    setSearchBy: payload => setSearchBy(payload),
    setSortBy: payload => setSortBy(payload),
    handleSearchButton: () => handleSearchButton(),
    handleEnterPress: () => handleEnterPress(),
    fetchMovies: (query) => fetchMovies(query)
}, dispatch);


class FilterBlock extends React.Component {
    constructor(props) {
        super(props);

        this.handlePop = this.handlePop.bind(this);
    }

    // componentDidMount() {
    //     if (this.props.location.search !== "") {
    //         this.transitionToURL();
    //     }
    //     this.props.receiveMoviesDB(this.props.location.search);
    // }

    componentWillReceiveProps(nextProps) {
        if (this.props.sortBy !== nextProps.sortBy) {
            this.props.fetchMovies(nextProps.query);
            this.setUrlParams(nextProps);
        }
    }

    componentWillMount() {
        if (!this.props.staticContext || !this.props.staticContext.isServer) {
            addEventListener("popstate", this.handlePop)
        }
        if (!this.props.staticContext && this.props.location.search !== "") {
            this.transitionToURL();
        }

        this.props.fetchMovies(this.props.location.search);
    }

    componentWillUnmount() {
        removeEventListener("popstate", this.handlePop)
    }

    handlePop() {
        if (this.props.location.search !== "") {
            this.transitionToURL();
        }
        this.props.fetchMovies(this.props.location.search);
    };

    handleSearch = (search) => { this.props.handleSearch(search) };

    handleSearchButton = () => {
        this.props.handleSearchButton();
        this.props.fetchMovies(this.props.query);
        this.setUrlParams();
    };

    setUrlParams = (props = this.props) => {
        props.history.push({
            pathname: props.location.pathname,
            search: props.query
        });
    };

    handleTitleSearch = () => { this.props.setSearchBy('title')};

    handleGenresSearch = () => { this.props.setSearchBy('genres')};

    handleReleaseDateSort = () => { this.props.setSortBy('release_date') };

    handleRatingSort = () => { this.props.setSortBy('vote_average') };

    handleEnterPress = (e) => {
        if(e.keyCode === 13) {
            this.props.handleEnterPress();
            this.props.fetchMovies(this.props.query);
            this.setUrlParams();
        }
    };

    transitionToURL = () => {
        const params = new URLSearchParams(this.props.location.search);
        this.props.setSearchBy(params.get('searchBy'));
        this.props.setSortBy(params.get('sortBy'));
        this.props.handleSearch(params.get('search'));
    };

    render() {
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
export const FilterBlockTest = FilterBlock;
