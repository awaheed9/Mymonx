import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { PageAndFilterRequestDto } from "../../common/models/page-and-filter-request-dto";
import { appConstants } from "../../common/constants/app-constant";
import { OrganisationDto } from "./models/organisation-dto";
import { deleteOrganisationAsync, getOrganisationAsync, getOrganisationsAsync, postOrganisationAsync, postRegisterOrganisationAsync, updateOrganisationAsync } from "./orgServiceThunk";

export interface OrgServiceState extends BaseState {
    orgRequest: PageAndFilterRequestDto;
    organisations?: PaginatedResult<OrganisationDto>;
    organisation?: OrganisationDto;
}

const initialClientRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined
}

const initialState: OrgServiceState = {
    status: ApiStatus.IDLE,
    orgRequest: initialClientRequest
}

export const orgServiceSlice = createSlice({
    name: 'organisationService',
    initialState,
    reducers: {
        setOrgRequest(state, action: PayloadAction<PageAndFilterRequestDto>){
            state.orgRequest = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrganisationsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getOrganisationsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.organisations = action.payload;
            })
            .addCase(getOrganisationsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getOrganisationAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getOrganisationAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.organisation = action.payload;
            })
            .addCase(getOrganisationAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })
            
        builder
            .addCase(postRegisterOrganisationAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(postRegisterOrganisationAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(postRegisterOrganisationAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(postOrganisationAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(postOrganisationAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(postOrganisationAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(updateOrganisationAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(updateOrganisationAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(updateOrganisationAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(deleteOrganisationAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(deleteOrganisationAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(deleteOrganisationAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })
    }
})

export const {setOrgRequest} = orgServiceSlice.actions;
export default orgServiceSlice.reducer;