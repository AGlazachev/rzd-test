import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json', 'Content-Type': 'application/json'
    }
});

export const getProducts = () => {
    return apiClient.get('/products');
};

export const getCategories = () => {
    return apiClient.get('/products/categories');
};
