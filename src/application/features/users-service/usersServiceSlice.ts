import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { appConstants } from "../../common/constants/app-constant";
import { deleteUserAsync, getCareTeamsAsync, getUserAsync, getUsersAsync } from "./usersServiceThunk";
import { UsersGridDto, UsersRequest } from "./models/users-dto";
import { getOrgFromJwt } from "../../common/helpers/jwt-helper";
import { CareTeamDto } from "./models/care-team-dto";
import { CreateUserDto } from "../user-profile-service/models/create-user-dto";
import { UserDto } from "./models/user-update-result-dto";

export interface UsersServiceState extends BaseState {
    usersRequest: UsersRequest;
    users?: PaginatedResult<UsersGridDto>;
    user?: CreateUserDto;
    care_teams: CareTeamDto[];
    user_result?: UserDto;
}

const initialClientRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined,
    org_id: getOrgFromJwt()
}

const initialState: UsersServiceState = {
    status: ApiStatus.IDLE,
    usersRequest: initialClientRequest,
    care_teams: []
}

export const usersServiceSlice = createSlice({
    name: 'usersService',
    initialState,
    reducers: {
        setUsersRequest(state, action: PayloadAction<UsersRequest>) {
            state.usersRequest = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.users = action.payload;
            })
            .addCase(getUsersAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });


            builder
            .addCase(getUserAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.user_result = action.payload;
            })
            .addCase(getUserAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

            builder
            .addCase(deleteUserAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(deleteUserAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(deleteUserAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });


        builder
            .addCase(getCareTeamsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getCareTeamsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.care_teams = action.payload;
            })
            .addCase(getCareTeamsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });
    }
})

export const { setUsersRequest } = usersServiceSlice.actions;
export default usersServiceSlice.reducer;