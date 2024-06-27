import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import LocalStorageService from "../../../infrastructure/local-storage-service";
import { getCountriesAsync, getMedicalDataAsync } from "./saticDataServiceThunk";
import { MedicalDataDto } from "./models/medical-data-dto";


export interface StaticDataServiceState extends BaseState {
    contry_data: any;
    medicalData?: MedicalDataDto;
}

const initialState: StaticDataServiceState = {
    status: ApiStatus.IDLE,
    contry_data: []
}

export const StaticDataServiceSlice = createSlice({
    name: 'staticDataService',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCountriesAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getCountriesAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.contry_data = action.payload;
            })
            .addCase(getCountriesAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getMedicalDataAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getMedicalDataAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.medicalData = action.payload;
            })
            .addCase(getMedicalDataAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });
    }
})

export default StaticDataServiceSlice.reducer;