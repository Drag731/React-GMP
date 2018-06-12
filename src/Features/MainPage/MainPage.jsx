// @flow
import * as React from 'react';
import { List, Record } from 'immutable';
import { getMovies } from '../../api/movies'

import MovieItemsBlock from '../../components/MovieItemsBlock/MovieItemsBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock'

import './MainPage.css'

type Props = { };

const mainPageRecord = Record(({
    id: 0,
    poster_path: '',
    title: '',
    release_date: 0,
    genres: []
}: {
    id: number,
    poster_path: string,
    title: string,
    release_date: number,
    genres: Array<string>
}));

const mainPageRecordInstance = mainPageRecord();

type State = {
    movies: List<typeof mainPageRecordInstance>,
    total: number,
    search: string,
    ratingSort: boolean,
    dateSort: boolean,
    isLoadingMovies: boolean
};

class MainPage extends React.Component<Props, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            movies: List(),
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
        this.loadMovies(this.state.search);
    }

    loadMovies: (q: string) => void;
    loadMovies(q: string) {
        return getMovies(q)
            .then((res: {
                data: {
                    id: number,
                    poster_path: string,
                    title: string,
                    release_date: number,
                    genres: Array<string>
                }[],
                total: number
            }) => {
                return (
                    this.setState({
                        movies: List(res.data),
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

    handleSearch: (event: {target: {value: string}}) => void;
    handleSearch(event: {target: {value: string}}) {
        this.setState({
            search: event.target.value
        });
    }

    handleSearchButton: () => void;
    handleSearchButton() {
        this.loadMovies(`?search=${this.state.search}&searchBy=title`)
    }

    handleTitleSearch: () => void;
    handleTitleSearch() {
        if (!this.state.search) return;
        this.loadMovies(`?search=${this.state.search}&searchBy=title`)
    }

    handleDirectorSearch: () => void;
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