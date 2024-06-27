import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { ClientDashboardStats, UserProfileDto } from "./models/user-profile-dto";
import { deleteUserProfileAsync, getClientDashboardAsync, getDeviceByUserId, getDevices, getHighRiskProfilesAsync, getOrgAlertsAsync, getProfileAsync, getProfilesAsync, getUserAlertsAsync, mapDeviceAsync, postProfileAsync, postProfileClientAsync, postProfileUserAsync, updateProfileAsync, updateProfileClientAsync } from "./userProfileServiceThunk";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { PageAndFilterRequestDto } from "../../common/models/page-and-filter-request-dto";
import { appConstants } from "../../common/constants/app-constant";
import { UserAlertGridDto, UserProfileGridDto } from "./models/user-profile-grid-dto";
import { UserAlertRequestDto, UserOrgAlertRequestDto, UserProfileRequestDto } from "./models/user-profile-request-dto";
import { getOrgFromJwt, getUserFromJwt } from "../../common/helpers/jwt-helper";
import { DeviceDto } from "../device-service/models/DeviceDto";
import { DeviceResultByUserIdDto } from "../device-service/models/DeviceResultDto";

export interface UserProfileServiceState extends BaseState {
    userProfileRequest: UserProfileRequestDto;
    userAlertRequest: UserAlertRequestDto;
    orgAlertRequest: UserOrgAlertRequestDto;
    userAlerts?: PaginatedResult<UserAlertGridDto>;
    user_profiles?: PaginatedResult<UserProfileGridDto>;
    high_risk_profiles?: UserProfileGridDto[];
    user_profile?: UserProfileDto;
    devices?: any;
    user_stats?: ClientDashboardStats;
    device_result?: DeviceResultByUserIdDto;
}


const initialClientRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined,
    devices: [],
    org_id: getOrgFromJwt()
}

const initialUserAlertRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined,
    org_id: getOrgFromJwt(),
    user_id: undefined
}

const initialOrgAlertRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined,
    org_id: getOrgFromJwt(),
    user_id: undefined
}


const initialState: UserProfileServiceState = {
    status: ApiStatus.IDLE,
    userProfileRequest: initialClientRequest,
    userAlertRequest: initialUserAlertRequest,
    orgAlertRequest: initialOrgAlertRequest
}

export const userProfileServiceSlice = createSlice({
    name: 'userProfileService',
    initialState,
    reducers: {
        setProfileRequest(state, action: PayloadAction<UserProfileRequestDto>){
            state.userProfileRequest = action.payload;
        },
        setAlertRequest(state, action: PayloadAction<UserAlertRequestDto>){
            state.userAlertRequest = action.payload;
        },
        setOrgAlertRequest(state, action: PayloadAction<UserOrgAlertRequestDto>){
            state.orgAlertRequest = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder
        .addCase(getDevices.pending, (state) => {
            state.status = ApiStatus.PENDING;
            state.apiError = undefined;
        })
        .addCase(getDevices.fulfilled, (state, action) => {
            state.status = ApiStatus.IDLE;
            state.devices = action.payload;
        })
        .addCase(getDevices.rejected, (state, action) => {
            state.status = ApiStatus.FAILED;
            state.apiError = action.payload;
        })

        builder
        .addCase(getDeviceByUserId.pending, (state) => {
            state.status = ApiStatus.PENDING;
            state.apiError = undefined;
        })
        .addCase(getDeviceByUserId.fulfilled, (state, action) => {
            state.status = ApiStatus.IDLE;
            state.device_result = action.payload;
        })
        .addCase(getDeviceByUserId.rejected, (state, action) => {
            state.status = ApiStatus.FAILED;
            state.apiError = action.payload;
        })

        builder
            .addCase(getProfilesAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getProfilesAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.user_profiles = action.payload;
            })
            .addCase(getProfilesAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(getUserAlertsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getUserAlertsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.userAlerts = action.payload;
            })
            .addCase(getUserAlertsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

            builder
            .addCase(getOrgAlertsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getOrgAlertsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.userAlerts = action.payload;
            })
            .addCase(getOrgAlertsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(getHighRiskProfilesAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getHighRiskProfilesAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.high_risk_profiles = action.payload;
            })
            .addCase(getHighRiskProfilesAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(getProfileAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getProfileAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.user_profile = action.payload;
            })
            .addCase(getProfileAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(getClientDashboardAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getClientDashboardAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.user_stats = action.payload;
            })
            .addCase(getClientDashboardAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(postProfileAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(postProfileAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(postProfileAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(postProfileClientAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(postProfileClientAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(postProfileClientAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })
            builder
            .addCase(mapDeviceAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(mapDeviceAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(mapDeviceAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(postProfileUserAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(postProfileUserAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(postProfileUserAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(updateProfileAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(updateProfileAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(updateProfileAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(updateProfileClientAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(updateProfileClientAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(updateProfileClientAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(deleteUserProfileAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(deleteUserProfileAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(deleteUserProfileAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })
    }
})

export const {setProfileRequest, setAlertRequest, setOrgAlertRequest} = userProfileServiceSlice.actions;
export default userProfileServiceSlice.reducer;