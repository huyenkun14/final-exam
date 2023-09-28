import axios from "axios";
import httpClient from "../httpClient";
import { URL } from "../httpClient/api";

export const getAllCandidate = () => {
    return httpClient.get(URL.CANDIDATE)
}

export const getCandidateById = (id: string) => {
    return httpClient.get(`${URL.CANDIDATE}/${id}`)
}

export const addCandidate = (data: {}) => {
    return httpClient.post(URL.CANDIDATE, data)
}

export const updateCandidate = (data: {}) => {
    return httpClient.put(URL.CANDIDATE, data)
}

export const deleteCandidate = (id: string) => {
    return httpClient.delete(`${URL.CANDIDATE}/${id}`)
}



