import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todos-api.public.tiko.energy/api/",
  headers: {'Content-Type': 'application/json'}
});

export default axiosInstance;
