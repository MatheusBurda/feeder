import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.183.11.93:3333/api/v1'
});

export default api;
