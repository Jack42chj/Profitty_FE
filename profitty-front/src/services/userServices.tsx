import axios from "axios";
const BASE_URL = "http://localhost:3001";

export const signin = (postData: object) => {
    return axios.post(`${BASE_URL}/signin`, postData);
};

export const signup = (postData: object) => {
    return axios.post(`${BASE_URL}/signup`, postData);
};

export const coach_register = (postData: object) => {
    return axios.post(`${BASE_URL}/coach_register`, postData, { 
            headers: { "Content-Type": "multipart/form-data" }
        }
    );
};

export const facility_register = (postData: object) => {
    return axios.post(`${BASE_URL}/facility_register`, postData, { 
            headers: { "Content-Type": "multipart/form-data" }
        }
    );
};

export const facility_search = (postData: object) => {
    return axios.post(`${BASE_URL}/search`, postData);
};