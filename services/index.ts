import httpClient from "../httpClient";
import { URL } from "../httpClient/api";

export const getAllCandidate = () => {
    return httpClient.get(URL.GET_ALL)
}

export const getCandidateById = (id: string) => {
    return httpClient.get(`/${id}`)
}

export const addCandidate = (data: {}) => {
    return httpClient.post(URL.CREATE, data)
}

export const updateCandidate = (data: {}) => {
    return httpClient.put(URL.UPDATE, data)
}

export const deleteCandidate = (id: string) => {
    return httpClient.delete(`${id}`)
}



