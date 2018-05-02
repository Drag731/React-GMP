import React, { Component } from 'react';

import { getMovies } from '../../api/movie';
import ErrorBoundary from '../../components/ErrorBoundary';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import NoFilmsFound from '../../components/NoFilmsFound/NoFilmsFound';
import ResultBlock from './components/ResultBlock/ResultBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';

import './MainPage.scss'

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            total: 0,
            search: "",
            ratingSort: true,
            dateSort: true,
            isLoadingMovies: true
        };

        this.loadMovies = this.loadMovies.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTitleSearch = this.handleTitleSearch.bind(this);
        this.handleDirectorSearch = this.handleDirectorSearch.bind(this);
        this.handleReleaseDateSort = this.handleReleaseDateSort.bind(this);
        this.handleRatingSort = this.handleRatingSort.bind(this);
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies(q) {
        return getMovies(q)
            .then((res) => {
                return (
                    this.setState({
                        movies: res.data,
                        total: res.total
                    })
                )
            })
            .then(() => {
                this.setState({
                    isLoadingMovies: false
                });
            })
            .catch(() => {
                throw new Error('I crashed!');
            })
    }

    handleSearch(event) {
        this.setState({
            search: event.target.value
        });
        this.loadMovies(`?search=${event.target.value}&searchBy=title`)
    }

    handleTitleSearch() {
        if (!this.state.search) return;
        this.loadMovies(`?search=${this.state.search}&searchBy=title`)
    }

    handleDirectorSearch() {
        if (!this.state.search) return;
        const genres = this.state.search[0].toUpperCase() + this.state.search.slice(1);
        this.loadMovies(`?search=${genres}&searchBy=genres`)
    }

    handleReleaseDateSort() {
        this.setState({
            dateSort: !this.state.dateSort,
            isLoadingMovies: true
        });
        this.loadMovies(`?sortBy=release_date&sortOrder=${this.state.dateSort ? "desc" : "asc"}`)
    }

    handleRatingSort() {
        this.setState({
            ratingSort: !this.state.ratingSort,
            isLoadingMovies: true
        });
        this.loadMovies(`?sortBy=vote_average&sortOrder=${this.state.ratingSort ? "desc" : "asc"}`)
    }

    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>

                        <div className="main-page container">
                            <HeaderBlock
                                handleSearch={this.handleSearch}
                                handleTitleSearch={this.handleTitleSearch}
                                handleDirectorSearch={this.handleDirectorSearch}
                                search={this.state.search}
                            />
                            <ResultBlock
                                total={this.state.total}
                                handleReleaseDateSort={this.handleReleaseDateSort}
                                handleRatingSort={this.handleRatingSort}
                            />
                            {this.state.isLoadingMovies ?
                                "Loading..." :
                                this.state.total ?
                                    <MovieItemsBlock movies={this.state.movies}/> :
                                    <NoFilmsFound/>

                            }
                        </div>

                </React.Fragment>
            </ErrorBoundary>
        )
    }
}

export default MainPage;
