import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiError } from "../../common/models/api-error";
import { getErrorPayload } from "../../common/helpers/error-helper";
import StaticDataServiceApi from "../../../infrastructure/static-data-service-api";
import { paginationDTO } from "./models/country-data-dto";
import { MedicalDataDto } from "./models/medical-data-dto";

export const getCountriesAsync = createAsyncThunk<string ,paginationDTO,
    {rejectValue: ApiError | undefined}
>(
    "staticDataService/getCointries",
    async (loginCredentials, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await StaticDataServiceApi.getCointries(loginCredentials);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getMedicalDataAsync = createAsyncThunk<MedicalDataDto ,string,
    {rejectValue: ApiError | undefined}
>(
    "staticDataService/getMedicalData",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await StaticDataServiceApi.getMedicalData(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)
