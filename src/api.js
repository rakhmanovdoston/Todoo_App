import axios from "axios";

export const api =axios.create({
    baseURL:"https://todos-server-267u.onrender.com"
})