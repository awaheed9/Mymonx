import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { ApiError } from "../../common/models/api-error";
import { getErrorPayload } from "../../common/helpers/error-helper";
import { RoleDto, RoleGridDto } from "./models/role-grid-dto";
import { RoleRequestDto } from "./models/role-request-dto";
import RoleServiceApi from "../../../infrastructure/role-service";

export const getRolesAsync = createAsyncThunk<PaginatedResult<RoleGridDto> ,RoleRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "rolesService/getRoles",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await RoleServiceApi.getRoles(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getRoleDropdownAsync = createAsyncThunk<RoleDto[] ,string,
    {rejectValue: ApiError | undefined}
>(
    "rolesService/getRoleDropdown",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await RoleServiceApi.getRoleDropdown(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)