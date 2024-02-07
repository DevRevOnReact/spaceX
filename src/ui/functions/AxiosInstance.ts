import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru:3000/api",
  timeout: 1000
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error?.response?.status === 401) {
      console.log("error")
    }
  }
);
