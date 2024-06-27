import { ApiStatus } from "../enums/api-status";
import { ApiError } from "./api-error";

export interface BaseState {
    status: ApiStatus;
    apiError?: ApiError;
}