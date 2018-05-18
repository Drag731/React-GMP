import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from '../../components/ErrorBoundary';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';

import { receiveMovieDB, changeIsLoading, goToSearch } from './DescriptionPageActions';

import { getMovie, getMovies, getGenre, getIsLoadingMovie } from './DescriptionPageReducers';

import { receiveMoviesDB } from '../MainPage/MainPageActions';

import './DescriptionPage.scss'

const mapStateToProps = state => ({
    movie: getMovie(state),
    genres: getGenre(state),
    isLoadingMovie: getIsLoadingMovie(state),
    movies: getMovies(state)
});

const mapDispatchToProps = {
    receiveMovieDB: (id) => receiveMovieDB(id),
    receiveMoviesDB: (q) => receiveMoviesDB(q),
    changeIsLoading: () => changeIsLoading(),
    goToSearch: () => goToSearch()
};

class DescriptionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingMovie: true
        };

        this.handlePop = this.handlePop.bind(this);
    }

    componentDidMount() {
        this.props.receiveMovieDB(this.props.match.params.id);
        this.props.receiveMoviesDB()
    }

    componentWillMount() {
        addEventListener("popstate", this.handlePop)
    }

    componentWillUnmount() {
        removeEventListener("popstate", this.handlePop)
    }

    handlePop() {
        console.log("haddle.pop", this.props);
        this.props.changeIsLoading();
        this.props.receiveMovieDB(this.props.match.params.id);
        this.props.receiveMoviesDB(`?${this.props.genres[0]}`)
    };

    componentWillReceiveProps(nextProps) {
        const {id} = nextProps.match.params;
        if(id && this.props.match.params.id !== id) {
            this.props.changeIsLoading();
            this.props.receiveMovieDB(id);
            this.props.receiveMoviesDB(`?${nextProps.genres[0]}`)
        }
    };

    handleGoSearchPage = () => { this.props.goToSearch()};

    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    {this.props.isLoadingMovie ?
                        "Loading..." :
                        <div className="description-page container">
                            <div className="description-page__header b-header">
                                <HeaderLogo description={true} handleGoSearchPage={this.handleGoSearchPage} />
                                <HeaderInfo {...this.props.movie}/>
                            </div>
                            <div className="description-page__genre-result">
                                Film by {this.props.genres[0]} genre
                            </div>
                            <MovieItemsBlock
                                movies={this.props.movies}
                            />
                        </div>
                    }
                </React.Fragment>
            </ErrorBoundary>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage);
