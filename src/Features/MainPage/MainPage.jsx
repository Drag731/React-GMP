import React, { Component } from 'react';
import { getMovies } from '../../api/movies'

import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock'

import './MainPage.css'

class MainPage extends Component {
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
        this.handleSearchButton = this.handleSearchButton.bind(this);
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
    }

    handleSearchButton() {
        this.loadMovies(`?search=${this.state.search}&searchBy=title`)
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

    render() {

        return (
                <React.Fragment>
                    <div className="main-page container">
                        <HeaderBlock
                            handleSearch={this.handleSearch}
                            handleTitleSearch={this.handleTitleSearch}
                            handleDirectorSearch={this.handleDirectorSearch}
                            handleSearchButton={this.handleSearchButton}
                            search={this.state.search}
                        />
                        {this.state.isLoadingMovies ?
                            "Loading..." :
                            <MovieItemsBlock movies={this.state.movies}/>
                        }
                    </div>
                </React.Fragment>
        )
    }
}

export default MainPage;