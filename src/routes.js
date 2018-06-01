import MainPage from './Features/MainPage/MainPage';
import DescriptionPage from './Features/DescriptionPage/DescriptionPage';
import PageNotFound from './components/PageNotFound/PageNotFound'
import { receiveMoviesDB } from "./Features/MainPage/MainPageActions";
import { receiveMovieDB } from "./Features/DescriptionPage/DescriptionPageActions"

export const routes = [
    {
        path: "/filmzilla",
        exact: true,
        component: MainPage,
        loadData: (q = '') => receiveMoviesDB(q)
    },
    {
        path: "/filmzilla/description/:id",
        component: DescriptionPage,
        loadData: (match) => receiveMovieDB(match.params.id)
    },
    {
        path: "*",
        component: PageNotFound
    },
];
