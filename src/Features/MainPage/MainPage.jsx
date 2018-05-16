import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from '../../components/ErrorBoundary';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import NoFilmsFound from '../../components/NoFilmsFound/NoFilmsFound';
import FilterBlock from './components/FilterBlock/FilterBlock';

import { receiveMoviesDB } from './MainPageActions';

import { getData, getTotal, getIsLoadingMovies } from './MainPageReducers';

import './MainPage.scss'

const mapStateToProps = state => ({
    movies: getData(state),
    total: getTotal(state),
    isLoadingMovies: getIsLoadingMovies(state),
});

const mapDispatchToProps = {
    receiveMoviesDB: (q) => receiveMoviesDB(q),
};

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.receiveMoviesDB();
    }

    render() {
        console.log(this.props);
        const { movies, total, isLoadingMovies } = this.props;
        return (
            <ErrorBoundary>
                <React.Fragment>
                        <div className="main-page container">
                            <FilterBlock />
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
