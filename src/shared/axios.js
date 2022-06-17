import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.125.4.231",
  headers: localStorage.getItem("token") ? {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  } : {}
});

export const login = async (users) => await instance.post("/api/login", users);
export const register = async (users) => await instance.post("/api/register", users);