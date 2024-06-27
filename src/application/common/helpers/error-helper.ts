import { AxiosError } from "axios";
import { ApiError } from "../models/api-error";

export const getErrorPayload = (error: unknown): ApiError => {
    if(!error || typeof error != "object")
        return internalServerError;

        const axiosError = error as AxiosError<ApiError>;

        if(axiosError.response)
            return {...axiosError.response?.data, status: axiosError.response.status};
        else
            return internalServerError;
}


const internalServerError = {
    detail: 'Internal Server Error',
    status: 500
}