import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://192.168.15.10:8000',
})