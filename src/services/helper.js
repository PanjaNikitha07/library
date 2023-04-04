import axios from "axios";

export const BASE_URL = "http://localhost:8098";
// const headers = {
//     "Content-Type": "application/json",
//     Authorization: apiKey,
//   };

export const myAxios = axios.create({
    baseURL: BASE_URL, 

})