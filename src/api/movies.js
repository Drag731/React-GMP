import axios from 'axios';

const API_URL = 'http://react-cdp-api.herokuapp.com';

export default function callApi(endpoint, method = 'get', body) {
    return axios[method](`${API_URL}/${endpoint}`, body );
}

export const getMovies = (query = '') => axios.get(`http://react-cdp-api.herokuapp.com/movies${query}`)
    .then(res => res.data);
