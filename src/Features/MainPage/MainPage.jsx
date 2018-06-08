// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from '../../components/ErrorBoundary';
import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import NoFilmsFound from '../../components/NoFilmsFound/NoFilmsFound';
import FilterBlock from './components/FilterBlock/FilterBlock';

import { goToDescription } from './MainPageActions';

import { getData, getTotal, getIsLoadingMovies } from './MainPageReducers';

import './MainPage.scss';

type Props = {
    movies: {}[],
    total: number,
    isLoadingMovies: boolean,
    goToDescription: () => {}
};

const mapStateToProps = state => ({
    movies: getData(state),
    total: getTotal(state),
    isLoadingMovies: getIsLoadingMovies(state),
});

const mapDispatchToProps = {
    goToDescription: () => goToDescription()
};

class MainPage extends React.Component<Props> {

    handleGoToDescriptionPage = () => { this.props.goToDescription()};

    render() {
        const { movies, total, isLoadingMovies } = this.props;
        return (
            <ErrorBoundary>
                <React.Fragment>
                        <div className="main-page container">
                            <FilterBlock {...this.props}/>
                            {isLoadingMovies ?
                                "Loading..." :
                                total ?
                                    <MovieItemsBlock
                                        movies={movies}
                                        handleGoToDescriptionPage={this.handleGoToDescriptionPage}
                                    /> :
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
