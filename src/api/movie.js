import axios from 'axios';

export const getMovies = (query = '') => axios.get(`http://react-cdp-api.herokuapp.com/movies${query}`)
    .then(res => res.data);

export const getMovie = (id) => axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => res.data);