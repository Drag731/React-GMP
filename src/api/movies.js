import axios from 'axios';

const API_URL = 'http://react-cdp-api.herokuapp.com';

export default function callApi(endpoint, method = 'get', body) {
    return axios[method](`${API_URL}/${endpoint}`, body );
}
