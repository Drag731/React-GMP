import axios from 'axios';

export const getMovies = (query = '') => axios.get(`http://react-cdp-api.herokuapp.com/movies${query}`)
    .then(res => res.data);

export const getMovie = (id) => axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => res.data);

// import axios from 'axios';
const API_URL = 'http://react-cdp-api.herokuapp.com';
//
export default function callApi(endpoint, method = 'get', body) {
    return axios[method](`${API_URL}/${endpoint}`, body );
}
//
// export const receiveMoviesDB = () => {
//     return (dispatch, state, api) => {
//         api(`movies${state.queryStr}`)
//             .then(response => {
//                 dispatch(receiveMoviesState(response.data));
//             });
//     };
// };
//
// export const getMovieDB = (id) => {
//     return (dispatch, state, api) => {
//         api(`movies/${id}`)
//             .then(response => {
//                 dispatch(getMovieState(id));
//             });
//     };
// };