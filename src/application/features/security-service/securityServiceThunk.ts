import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentialsDto } from "./models/login-credentials-dto";
import { ApiError } from "../../common/models/api-error";
import { getErrorPayload } from "../../common/helpers/error-helper";
import SecurityServiceApi from "../../../infrastructure/security-service-api";
import { RegisterClientCredentialsDto, RegisterClientResultDto, RegisterCredentialsDto, RegisterUserCredentialsDto } from "./models/register-credentials-dto";
import LocalStorageService from "../../../infrastructure/local-storage-service";
import { addErrorNotification, addSuccessNotification } from "../common/notificationSlice";

export const loginAsync = createAsyncThunk<any ,LoginCredentialsDto,
    {rejectValue: ApiError | undefined}
>(
    "securityService/login",
    async (loginCredentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await SecurityServiceApi.login(loginCredentials);
            return fulfillWithValue(response.data);
        } catch (error: any) {
            dispatch(addErrorNotification(error.response.data))
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const registerAsync = createAsyncThunk<string ,RegisterCredentialsDto,
    {rejectValue: ApiError | undefined}
>(
    "securityService/register",
    async (registerCredentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await SecurityServiceApi.register(registerCredentials);
            dispatch(addSuccessNotification('register successfully'));
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            dispatch(addErrorNotification(apiError.detail));
            return rejectWithValue(apiError);
        }
    }
)

export const confirmEmailAsync = createAsyncThunk<boolean ,string,
    {rejectValue: ApiError | undefined}
>(
    "securityService/confirmEmail",
    async (registerCredentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await SecurityServiceApi.confirmEmail(registerCredentials);
            dispatch(addSuccessNotification('email confirmation successfully'));
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            dispatch(addErrorNotification(apiError.detail));
            return rejectWithValue(apiError);
        }
    }
)


export const registerClientAsync = createAsyncThunk<RegisterClientResultDto ,RegisterClientCredentialsDto,
    {rejectValue: ApiError | undefined}
>(
    "securityService/registerClient",
    async (registerCredentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await SecurityServiceApi.registerClient(registerCredentials);
            const result = fulfillWithValue(response.data);
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            dispatch(addErrorNotification(apiError.detail));
            return rejectWithValue(apiError);
        }
    }
)

export const registerUserAsync = createAsyncThunk<RegisterClientResultDto ,RegisterUserCredentialsDto,
    {rejectValue: ApiError | undefined}
>(
    "securityService/registerUser",
    async (registerCredentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await SecurityServiceApi.registerUser(registerCredentials);
            const result = fulfillWithValue(response.data);
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            dispatch(addErrorNotification(apiError.detail));
            return rejectWithValue(apiError);
        }
    }
)