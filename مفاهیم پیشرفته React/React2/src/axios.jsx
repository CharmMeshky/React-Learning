import axios from "axios";

export const axiosJp = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
})