import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-54-147-4-94.compute-1.amazonaws.com/v1'
});

export default api;
