import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { ClientDto } from "./models/client-dto";
import { deleteClientAsync, getClientAsync, getClientStatsAsync, getClientsAsync, postClientAsync, updateClientAsync } from "./clientServiceThunk";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { PageAndFilterRequestDto } from "../../common/models/page-and-filter-request-dto";
import { appConstants } from "../../common/constants/app-constant";

export interface ClientServiceState extends BaseState {
    clientRequest: PageAndFilterRequestDto;
    clients?: PaginatedResult<ClientDto>;
    client?: ClientDto;
    clientStats?: number;
}

const initialClientRequest = {
    page_number: appConstants.GRID_DEFAULT_PAGE_NUMBER,
    page_size: appConstants.GRID_DEFAULT_PAGE_SIZE,
    filter_by: undefined
}

const initialState: ClientServiceState = {
    status: ApiStatus.IDLE,
    clientRequest: initialClientRequest
}

export const clientServiceSlice = createSlice({
    name: 'clientService',
    initialState,
    reducers: {
        setClientRequest(state, action: PayloadAction<PageAndFilterRequestDto>){
            state.clientRequest = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getClientsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getClientsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.clients = action.payload;
            })
            .addCase(getClientsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

            builder
            .addCase(getClientStatsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getClientStatsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.clientStats = action.payload.clients as number;
            })
            .addCase(getClientStatsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getClientAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getClientAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.client = action.payload;
            })
            .addCase(getClientAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(postClientAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(postClientAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(postClientAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(updateClientAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(updateClientAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(updateClientAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })

        builder
            .addCase(deleteClientAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(deleteClientAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
            })
            .addCase(deleteClientAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            })
    }
})

export const {setClientRequest} = clientServiceSlice.actions;
export default clientServiceSlice.reducer;