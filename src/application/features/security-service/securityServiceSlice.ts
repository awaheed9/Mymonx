import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { confirmEmailAsync, loginAsync, registerAsync } from "./securityServiceThunk";
import LocalStorageService from "../../../infrastructure/local-storage-service";
import { CurrentUser } from "./models/current-user-dto";
import { getCurrentUserFromJwt } from "../../common/helpers/jwt-helper";


export interface SecurityServiceState extends BaseState {
    currentUser?: CurrentUser;
}

const initialState: SecurityServiceState = {
    status: ApiStatus.IDLE,
    currentUser:  getCurrentUserFromJwt()
}

export const securityServiceSlice = createSlice({
    name: 'securityService',
    initialState,
    reducers: {
        logout(state) {
            state.currentUser = undefined;
            LocalStorageService.removeAccessToken();
            state.apiError = undefined;
            state.status = ApiStatus.IDLE;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                LocalStorageService.setAccessToken(action.payload.access_token);
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(registerAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(confirmEmailAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(confirmEmailAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(confirmEmailAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })
    }
})

export const {logout} = securityServiceSlice.actions;
export default securityServiceSlice.reducer;