import React, { Component } from 'react';

import { getMovie, getMovies } from '../../api/movie';
import ErrorBoundary from '../../components/ErrorBoundary';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';

import './DescriptionPage.scss'

class DescriptionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [],
            isLoadingMovie: true,
            isLoadingMovies: true
        };

        this.loadMovie = this.loadMovie.bind(this);
        this.loadMovies = this.loadMovies.bind(this);
        this.handlePop = this.handlePop.bind(this);
    }

    componentDidMount() {
        this.loadMovie(this.props.match.params.id);
    }

    componentWillMount() {
        addEventListener("popstate", this.handlePop)
    }

    componentWillUnmount() {
        removeEventListener("popstate", this.handlePop)
    }

    handlePop() {
        console.log("haddle.pop", this.props);
        this.loadMovie(this.props.match.params.id);
    };

    componentWillReceiveProps(nextProps) {
        const {id} = nextProps.match.params;
        if(id && this.props.match.params.id !== id) {
            this.loadMovie(id)
        }
    };

    loadMovie(id) {
        return getMovie(id)
            .then((res) => {
                return (
                    this.setState({
                        id: res.id,
                        title: res.title,
                        vote_average: res.vote_average,
                        vote_count: res.vote_count,
                        release_date: res.release_date,
                        poster_path: res.poster_path,
                        overview: res.overview,
                        genres: res.genres,
                        runtime: res.runtime,
                        tagline: res.tagline,
                    })
                )
            })
            .then(() => {
                this.loadMovies(`?${this.state.genres[0]}`)
            })
            .then(() => {
                this.setState({
                    isLoadingMovie: false
                });
            })
            .catch(() => {
                throw new Error('I crashed!');
            })
    }

    loadMovies(query) {
        return getMovies(query)
            .then((res) => {
                return (
                    this.setState({
                        movies: res.data,
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

    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    {this.state.isLoadingMovie && this.state.isLoadingMovies ?
                        "Loading..." :
                        <div className="description-page container">
                            <div className="description-page__header b-header">
                                <HeaderLogo description={true} />
                                <HeaderInfo {...this.state}/>
                            </div>
                            <div className="description-page__genre-result">
                                Film by {this.state.genres[0]} genre
                            </div>
                            <MovieItemsBlock
                                movies={this.state.movies}
                            />
                        </div>
                    }
                </React.Fragment>
            </ErrorBoundary>
        )
    }
}

export default DescriptionPage;
