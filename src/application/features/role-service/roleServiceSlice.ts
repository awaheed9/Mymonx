import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { appConstants } from "../../common/constants/app-constant";
import { getOrgFromJwt, getRoleFromJwt } from "../../common/helpers/jwt-helper";
import { RoleRequestDto } from "./models/role-request-dto";
import { RoleDto, RoleGridDto } from "./models/role-grid-dto";
import { getRoleDropdownAsync, getRolesAsync } from "./roleServiceThunk";

export interface RolesServiceState extends BaseState {
    roleRequest: RoleRequestDto;
    roles?: PaginatedResult<RoleGridDto>;
    roleDropdown: RoleDto[];
}

const initialClientRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined,
    role_id: getRoleFromJwt()
}

const initialState: RolesServiceState = {
    status: ApiStatus.IDLE,
    roleRequest: initialClientRequest,
    roleDropdown: []
}

export const rolesServiceSlice = createSlice({
    name: 'rolesService',
    initialState,
    reducers: {
        setRolesRequest(state, action: PayloadAction<RoleRequestDto>){
            state.roleRequest = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRolesAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getRolesAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.roles = action.payload;
            })
            .addCase(getRolesAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });


        builder
            .addCase(getRoleDropdownAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getRoleDropdownAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.roleDropdown = action.payload;
            })
            .addCase(getRoleDropdownAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });
    }
})

export const {setRolesRequest} = rolesServiceSlice.actions;
export default rolesServiceSlice.reducer;