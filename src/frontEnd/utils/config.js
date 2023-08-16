import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000/api",
  timeout: 2500, // Set timeout (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
