import axios, { AxiosHeaders } from "axios";
import LocalStorageService from "./local-storage-service";

// Create Axios instance with base URL as a parameter
export const createOrganisationPortalApi = (baseUrl: string) => {
    // Create Axios instance
    const organisationPortalApi = axios.create({
        baseURL: baseUrl, // Set base URL from parameter
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    // Request interceptor
    organisationPortalApi.interceptors.request.use(async (config) => {
        // Later we will get from jwt
        const accessToken = LocalStorageService.getAccessToken();

        if (config.headers && accessToken)
            (config.headers as AxiosHeaders).set(
                "Authorization",
                `Bearer ${accessToken}`
            );

        return config;
    });

    // Response interceptor
    organisationPortalApi.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const config = error.config;

            if (error.response && error.response.status === 401 && !config._retry) {
                return Promise.reject(error);
            }

            return Promise.reject(error);
        }
    );

    return organisationPortalApi;
};

// export const organisationPortalApi = axios.create({
//     baseURL: baseUrl,
//     headers: {
//         "accept": "application/json",
//         "Content-Type": "application/json"
//     }
// });

// organisationPortalApi.interceptors.request.use(async (config) => {
//     //later we will get from jwt
//     const accessToken = LocalStorageService.getAccessToken();

//     if(config.headers)
//         (config.headers as AxiosHeaders).set(
//             "Authorization",
//             `Bearer ${accessToken}`
//     )

//     return config;
// });

// organisationPortalApi.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const config = error.config;

//         if(error.response && error.response.status === 401 && !config._retry) {
//            return Promise.reject(error);
//         }

//         return Promise.reject(error);
//     }
// )