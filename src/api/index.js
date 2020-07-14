import axios from 'axios';

// baseUrl
import { BASE_URL } from '../constants/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2500,
});


export default axiosInstance;
