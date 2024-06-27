import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { UsersGridDto, UsersRequest } from "./models/users-dto";
import { ApiError } from "../../common/models/api-error";
import UsersServiceApi from "../../../infrastructure/users-service";
import { getErrorPayload } from "../../common/helpers/error-helper";
import { CareTeamDto } from "./models/care-team-dto";
import { CreateUserDto } from "../user-profile-service/models/create-user-dto";
import { UserDto, UserUpdateResultDto } from "./models/user-update-result-dto";
import { addSuccessNotification } from "../common/notificationSlice";
import { RegisterCredentialsDto, RegisterUserCredentialsDto } from "../security-service/models/register-credentials-dto";

export const getUsersAsync = createAsyncThunk<PaginatedResult<UsersGridDto> ,UsersRequest,
    {rejectValue: ApiError | undefined}
>(
    "usersService/getUsers",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await UsersServiceApi.getUsers(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getUserAsync = createAsyncThunk<UserDto ,string,
    {rejectValue: ApiError | undefined}
>(
    "usersService/getUser",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await UsersServiceApi.getUser(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const deleteUserAsync = createAsyncThunk<boolean ,string,
    {rejectValue: ApiError | undefined}
>(
    "usersService/deleteUser",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await UsersServiceApi.deleteUser(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const updateUserAsync = createAsyncThunk<UserUpdateResultDto,RegisterUserCredentialsDto,
    {rejectValue: ApiError | undefined}
>(
    "userService/updateUsers",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await UsersServiceApi.updateUsers(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('User updated successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)
export const getCareTeamsAsync = createAsyncThunk<CareTeamDto[] ,void,
    {rejectValue: ApiError | undefined}
>(
    "usersService/getCareTeams",
    async (_, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await UsersServiceApi.getCareTeams();
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)