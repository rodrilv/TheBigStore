import axios from 'axios'

console.log(import.meta.env.VITE_API_URL)
export const AXIOS = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
})