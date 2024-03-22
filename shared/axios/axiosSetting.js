import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com' //바꾸어 놓을 것
});