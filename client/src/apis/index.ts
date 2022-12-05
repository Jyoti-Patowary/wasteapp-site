import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
});

API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("access_token");
  config.headers = { Authorization: `Bearer ${token}` };
  return config;
});

export default API;
