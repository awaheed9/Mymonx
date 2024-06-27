import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiError } from "../../common/models/api-error";
import { getErrorPayload } from "../../common/helpers/error-helper";
import { ClientDto } from "./models/client-dto";
import ClientServiceApi from "../../../infrastructure/client-service";
import { CreateClientDto } from "./models/create-client-dto";
import { addSuccessNotification } from "../common/notificationSlice";
import { CreateClientResultDto } from "./models/create-client-result-dto";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { PageAndFilterRequestDto } from "../../common/models/page-and-filter-request-dto";
import LocalStorageService from "../../../infrastructure/local-storage-service";

export const getClientsAsync = createAsyncThunk<PaginatedResult<ClientDto> ,PageAndFilterRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "clientService/getClients",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await ClientServiceApi.getClients(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getClientAsync = createAsyncThunk<ClientDto ,string,
    {rejectValue: ApiError | undefined}
>(
    "clientService/getClient",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await ClientServiceApi.getClient(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getClientStatsAsync = createAsyncThunk<any ,void,
    {rejectValue: ApiError | undefined}
>(
    "clientService/getClientStats",
    async (_, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await ClientServiceApi.getClientStats();
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const postClientAsync = createAsyncThunk< CreateClientResultDto,CreateClientDto,
    {rejectValue: ApiError | undefined}
>(
    "clientService/postClient",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await ClientServiceApi.createClient(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Client created successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const updateClientAsync = createAsyncThunk<CreateClientResultDto,CreateClientDto,
    {rejectValue: ApiError | undefined}
>(
    "clientService/updateClient",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await ClientServiceApi.updateClient(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Client updated successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)


export const deleteClientAsync = createAsyncThunk<boolean,string,
    {rejectValue: ApiError | undefined}
>(
    "clientService/deleteClient",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await ClientServiceApi.deleteClient(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Client deleted successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)