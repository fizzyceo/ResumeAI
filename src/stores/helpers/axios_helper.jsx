/* eslint-disable no-debugger */
import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "http://localhost:1337";
const token = import.meta.env.VITE_STRAPI_API_KEY;
console.log(token);

export const axiosHelper = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// // Axios Defaults
// axiosHelper.defaults.baseURL = baseURL;
// axiosHelper.defaults.headers.post["Content-Type"] = "application/json";

// // interceptors
// axiosHelper.interceptors.request.use(
//   (config) => {

//     config.headers.common["Authorization"] = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     // alert(error.response.data.message);
//     throw error;
//   }
// );
