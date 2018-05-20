import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from '../../components/ErrorBoundary';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import NoFilmsFound from '../../components/NoFilmsFound/NoFilmsFound';
import FilterBlock from './components/FilterBlock/FilterBlock';

import { receiveMoviesDB } from './MainPageActions';

import { getData, getTotal, getIsLoadingMovies } from './MainPageReducers';

import { handleSearchButton } from './components/FilterBlock/FilterBlockActions'
import { getQuery } from './components/FilterBlock/FilterBlockReducers';

import './MainPage.scss'

const mapStateToProps = state => ({
    query: getQuery(state),
    movies: getData(state),
    total: getTotal(state),
    isLoadingMovies: getIsLoadingMovies(state),
});

const mapDispatchToProps = {
    receiveMoviesDB: (q) => receiveMoviesDB(q),
    handleSearchButton: () => handleSearchButton()
};

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // if (JSON.parse(localStorage.getItem('persist:root')).filter.search !== '') {
        //     this.props.handleSearchButton();
        //     this.props.receiveMoviesDB(this.props.query);
        //     return;
        // }
        this.props.receiveMoviesDB();
    }

    render() {
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
export const MainPageTest = MainPage;
