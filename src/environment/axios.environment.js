import axios from "axios";

export const AXIOS = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
});
