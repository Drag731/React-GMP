import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from '../../components/ErrorBoundary';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import NoFilmsFound from '../../components/NoFilmsFound/NoFilmsFound';
import ResultBlock from './components/ResultBlock/ResultBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';

import { fetchMovies, handleSearch, handleSearchButton, setSearchBy, setSortBy } from './MainPageActions';

import { getQuery, getData, getSearch, getTotal, getisLoadingMovies } from './MainPageReducers';

import './MainPage.scss'

const mapStateToProps = state => ({
    query: getQuery(state),
    movies: getData(state),
    search: getSearch(state),
    total: getTotal(state),
    isLoadingMovies: getisLoadingMovies(state),
    searchBy: state.movies.searchBy,
    sortBy: state.movies.sortBy,
});

const mapDispatchToProps = {
    fetchMovies: (q) => fetchMovies(q),
    handleSearch: (search) => handleSearch(search),
    setSearchBy: payload => setSearchBy(payload),
    setSortBy: payload => setSortBy(payload),
    handleSearchButton: () => handleSearchButton()
};

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.query !== nextProps.query) {
    //         this.props.fetchMovies(nextProps.query);
    //     }
    // }

    handleSearch = (search) => { this.props.handleSearch(search)};

    handleSearchButton = () => {
        this.props.handleSearchButton();
        this.props.fetchMovies(this.props.query);
    };

    handleTitleSearch = () => { this.props.setSearchBy('title')};

    handleGenresSearch = () => { this.props.setSearchBy('genres')};

    handleReleaseDateSort = () => {
        this.props.setSortBy('release_date');
        this.props.fetchMovies(this.props.query);
    };

    handleRatingSort = () => {
        this.props.setSortBy('vote_average');
        this.props.fetchMovies(this.props.query);
    };

    render() {
        console.log(this.props);
        const { movies, search, total, isLoadingMovies, searchBy } = this.props;
        return (
            <ErrorBoundary>
                <React.Fragment>
                        <div className="main-page container">
                            <HeaderBlock
                                handleSearch={this.handleSearch}
                                handleSearchButton={this.handleSearchButton}
                                handleTitleSearch={this.handleTitleSearch}
                                handleGenresSearch={this.handleGenresSearch}
                                search={search}
                                searchBy={searchBy}
                            />
                            <ResultBlock
                                total={total}
                                handleReleaseDateSort={this.handleReleaseDateSort}
                                handleRatingSort={this.handleRatingSort}
                            />
                            {isLoadingMovies ?
                                "Loading..." :
                                total ?
                                    <MovieItemsBlock movies={movies}/> :
                                    <NoFilmsFound/>

                            }
                        </div>
                </React.Fragment>
            </ErrorBoundary>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
