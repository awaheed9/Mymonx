import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiError } from "../../common/models/api-error";
import { getErrorPayload } from "../../common/helpers/error-helper";
import { ClientDashboardStats, UserProfileDto } from "./models/user-profile-dto";
import UserProfileServiceApi from "../../../infrastructure/user-profile-service";
import { addSuccessNotification } from "../common/notificationSlice";
import { UserProfileResultDto } from "./models/user-profile-result-dto";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { UserAlertGridDto, UserProfileGridDto } from "./models/user-profile-grid-dto";
import { UserAlertRequestDto, UserOrgAlertRequestDto, UserProfileRequestDto } from "./models/user-profile-request-dto";
import { CreateUserDto } from "./models/create-user-dto";
import { MapDeviceResultDto } from "../device-service/models/MapDeviceResultDto";
import { MapDeviceDto } from "../device-service/models/MapDeviceDto";
import { DeviceResultByUserIdDto, DeviceResultDto } from "../device-service/models/DeviceResultDto";
import { DeviceByUserIdDto, DeviceDto } from "../device-service/models/DeviceDto";

export const getProfilesAsync = createAsyncThunk<PaginatedResult<UserProfileGridDto>, UserProfileRequestDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getProfiles",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getProfiles(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getUserAlertsAsync = createAsyncThunk<PaginatedResult<UserAlertGridDto>, UserAlertRequestDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getUserAlert",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getClientAlerts(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)


export const getOrgAlertsAsync = createAsyncThunk<PaginatedResult<UserAlertGridDto>, UserOrgAlertRequestDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getOrgAlert",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getOrgClientAlerts(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getHighRiskProfilesAsync = createAsyncThunk<UserProfileGridDto[], string,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getHighRiskProfiles",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getHighRiskProfiles(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getProfileAsync = createAsyncThunk<UserProfileDto, string,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getProfile",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getProfile(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getClientDashboardAsync = createAsyncThunk<ClientDashboardStats, string | undefined,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getClientDashboard",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getClientStats(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const postProfileAsync = createAsyncThunk<UserProfileResultDto, UserProfileDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/postProfile",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.createProfile(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Profile created successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const postProfileClientAsync = createAsyncThunk<UserProfileResultDto, UserProfileDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/postProfileClient",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.createProfileClient(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Profile created successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)


export const postProfileUserAsync = createAsyncThunk<UserProfileResultDto, CreateUserDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/postProfileUser",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.createProfileUser(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('User created successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const updateProfileAsync = createAsyncThunk<UserProfileResultDto, UserProfileDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/updateProfile",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.updateProfile(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Profile updated successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const updateProfileClientAsync = createAsyncThunk<UserProfileResultDto, UserProfileDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/updateProfileClient",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.updateProfileClient(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Profile updated successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const mapDeviceAsync = createAsyncThunk<MapDeviceResultDto, MapDeviceDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/mapDevice",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.mapDevice(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Device Map successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)
export const getDevices = createAsyncThunk<DeviceResultDto, DeviceDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getDevices",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getDevices(request);
            const result = fulfillWithValue(response.data);
            //dispatch(addSuccessNotification('Device Map successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)
export const getDeviceByUserId = createAsyncThunk<DeviceResultByUserIdDto, DeviceByUserIdDto,
    { rejectValue: ApiError | undefined }
>(
    "profileService/getDeviceByUserId",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.getDeviceByUserId(request);
            const result = fulfillWithValue(response.data);
            //dispatch(addSuccessNotification('Device Map successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const deleteUserProfileAsync = createAsyncThunk<boolean, string,
    { rejectValue: ApiError | undefined }
>(
    "profileService/deleteUserProfile",
    async (request, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await UserProfileServiceApi.deleteProfile(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Profile deleted successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)