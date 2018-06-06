import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ErrorBoundary from '../../components/ErrorBoundary';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

import { goToSearch, fetchMovie } from './DescriptionPageActions';

import { getMovie, getMovies, getGenre, getIsLoadingMovie } from './DescriptionPageReducers';

import { fetchMovies } from '../MainPage/MainPageActions';

import './DescriptionPage.scss'

const mapStateToProps = state => ({
    movie: getMovie(state),
    genres: getGenre(state),
    isLoadingMovie: getIsLoadingMovie(state),
    movies: getMovies(state)
});

const mapDispatchToProps = dispatch => bindActionCreators ({
    goToSearch: () => goToSearch(),
    fetchMovie: (id) => fetchMovie(id),
    fetchMovies: () => fetchMovies(),
}, dispatch);

class DescriptionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.movies.length) {
            this.props.fetchMovie(this.props.match.params.id);
            this.props.fetchMovies()
        }
    }

    componentWillReceiveProps(nextProps) {
        const {id} = nextProps.match.params;
        if(id && this.props.match.params.id !== id) {
            this.props.fetchMovie(id);
            this.props.fetchMovies(`?${nextProps.genres[0]}`)
        }
    };

    handleGoSearchPage = () => { this.props.goToSearch()};

    render() {
        const { movie, isLoadingMovie } = this.props;
        return (
            <ErrorBoundary>
                <React.Fragment>
                    {isLoadingMovie ?
                        "Loading..." :
                        movie.genres ?
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
                        </div> :
                        <PageNotFound/>
                    }
                </React.Fragment>
            </ErrorBoundary>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage);
export const DescriptionPageTest = DescriptionPage;
