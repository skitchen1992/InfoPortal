import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

export const API = axios.create({
    baseURL: __API__,
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';

    if (config.headers) {
        config.headers.authorization = token;
    }

    return config;
});
