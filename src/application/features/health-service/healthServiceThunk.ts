import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlucoseStatsDto } from "./models/glucose-stats-dto";
import { ApiError } from "../../common/models/api-error";
import HealthServiceApi from "../../../infrastructure/health-service";
import { getErrorPayload } from "../../common/helpers/error-helper";
import { GlucoseGraphRequestDto, GraphRequestDto, OxygenGraphRequestDto, RespiratoryRateGraphRequestDto, TempGraphRequestDto } from "./models/graph-request-dto";
import { BpGraphDto, GlucoseGraphDto, HrGraphDto, OxygenGraphDto, RespiratoryRateGraphDto, TempGraphDto } from "./models/bp-graph-dto";

export const getGlucoseStatsAsync = createAsyncThunk<GlucoseStatsDto ,string,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getGlucose",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getGlucoseStats(credentials);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)


export const getBpGraphAsync = createAsyncThunk<BpGraphDto ,GraphRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getBpGraph",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getBpGraphStats(credentials.userId, credentials.startDate, credentials.endDate, credentials.graphType);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getOxygenGraphAsync = createAsyncThunk<OxygenGraphDto ,OxygenGraphRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getOxygenGraph",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getOxygenGraphStats(credentials.userId, credentials.startDate, credentials.endDate, credentials.graphType);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getHrGraphAsync = createAsyncThunk<HrGraphDto ,GraphRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getHrGraph",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getHrGraphStats(credentials.userId, credentials.startDate, credentials.endDate, credentials.graphType);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getTempGraphAsync = createAsyncThunk<TempGraphDto ,TempGraphRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getTempGraph",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getTempGraphStats(credentials.userId, credentials.startDate, credentials.endDate, credentials.graphType);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getGlucoseGraphAsync = createAsyncThunk<GlucoseGraphDto ,GlucoseGraphRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getGlucoseGraph",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getGlucoseGraph(credentials.userId, credentials.startDate, credentials.endDate, credentials.graphType);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getRespiratoryRateGraphAsync = createAsyncThunk<RespiratoryRateGraphDto ,RespiratoryRateGraphRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "healthService/getRespiratoryRateGraph",
    async (credentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await HealthServiceApi.getRespiratoryRateGraph(credentials.userId, credentials.startDate, credentials.endDate, credentials.graphType);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)