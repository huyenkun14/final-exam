import axios from "axios";
import { BASE_URL } from "./api";

const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        
    }
})

export default httpClient