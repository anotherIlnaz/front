import axios from "axios";
import { apiUrl } from "./urls";

export const axiosInstance = axios.create({ baseURL: apiUrl });

axiosInstance.interceptors.request.use((config: any) => {
   const accessToken = localStorage.getItem("access");
   config.headers.Authorization = `Bearer ${accessToken}`;
   return config;
});

axiosInstance.interceptors.response.use(({ data }) => {
   return data;
});
