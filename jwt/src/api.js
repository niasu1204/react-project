import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // HttpOnly 쿠키를 자동으로 포함해서 보냄
});
