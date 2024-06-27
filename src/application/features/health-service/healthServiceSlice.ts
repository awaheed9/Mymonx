import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";
import { GlucoseStatsDto } from "./models/glucose-stats-dto";
import { getBpGraphAsync, getGlucoseGraphAsync, getGlucoseStatsAsync, getHrGraphAsync, getOxygenGraphAsync, getRespiratoryRateGraphAsync, getTempGraphAsync } from "./healthServiceThunk";
import { BpGraphDto, GlucoseGraphDto, HrGraphDto, OxygenGraphDto, RespiratoryRateGraphDto, TempGraphDto } from "./models/bp-graph-dto";
import { GlucoseGraphRequestDto, GraphRequestDto, HrGraphRequestDto, OxygenGraphRequestDto, RespiratoryRateGraphRequestDto, TempGraphRequestDto } from "./models/graph-request-dto";
import { getWeekEndDate, getWeekStartDate } from "../../common/helpers/date-helper";
import { GraphFilterDto } from "./models/graph-filter-dto";


export interface HealthServiceState extends BaseState {
    glucoseStats?: GlucoseStatsDto;
    bpGraphDto?: BpGraphDto;
    hrGraphDto?: HrGraphDto;
    oxygenGraphDto?: OxygenGraphDto;
    tempGraphDto?: TempGraphDto;
    glucoseGraphDto?: GlucoseGraphDto;
    respiratoryRateDto?: RespiratoryRateGraphDto;
    bpGraphRequest?: GraphRequestDto;
    oxygenGraphRequest?: OxygenGraphRequestDto;
    tempGraphRequest?: TempGraphRequestDto;
    glucoseGraphRequest?: GlucoseGraphRequestDto;
    respiratoryRateRequest?: RespiratoryRateGraphRequestDto;
    hrGraphRequest?: HrGraphRequestDto;
    graphFilterDto: GraphFilterDto[];
}

const initialState: HealthServiceState = {
    status: ApiStatus.IDLE,
    bpGraphRequest: {
        userId: '',
        startDate: getWeekStartDate(),
        endDate: getWeekEndDate(),
        graphType: '1week'
    },
    oxygenGraphRequest: {
        userId: '',
        startDate: getWeekStartDate(),
        endDate: getWeekEndDate(),
        graphType: '1week'
    },
    tempGraphRequest: {
        userId: '',
        startDate: getWeekStartDate(),
        endDate: getWeekEndDate(),
        graphType: '1week'
    },
    glucoseGraphRequest: {
        userId: '',
        startDate: getWeekStartDate(),
        endDate: getWeekEndDate(),
        graphType: '1week'
    },
    respiratoryRateRequest: {
        userId: '',
        startDate: getWeekStartDate(),
        endDate: getWeekEndDate(),
        graphType: '1week'
    },
    hrGraphRequest: {
        userId: '',
        startDate: getWeekStartDate(),
        endDate: getWeekEndDate(),
        graphType: '1week'
    },
    graphFilterDto: [
        {
            key: '1 Day',
            value: '1 Day'
        },
        {
            key: '1 Week',
            value: '1 Week'
        },
        {
            key: '1 Month',
            value: '1 Month'
        },
        {
            key: '3 Month',
            value: '3 Month'
        },
        {
            key: '6 Month',
            value: '6 Month'
        },
        {
            key: '1 Year',
            value: '1 Year'
        },
        {
            key: 'Periods',
            value: 'Periods'
        }
    ]
}

export const HealthServiceSlice = createSlice({
    name: 'healthService',
    initialState,
    reducers: {
        setBpGraphRequest(state, action: PayloadAction<GraphRequestDto>) {
            state.bpGraphRequest = action.payload
        },
        setOxygenGraphRequest(state, action: PayloadAction<OxygenGraphRequestDto>) {
            state.oxygenGraphRequest = action.payload
        },
        setTempGraphRequest(state, action: PayloadAction<TempGraphRequestDto>) {
            state.tempGraphRequest = action.payload
        },
        setGlucoseGraphRequest(state, action: PayloadAction<GlucoseGraphRequestDto>) {
            state.glucoseGraphRequest = action.payload
        },
        setRespiratoryRateGraphRequest(state, action: PayloadAction<RespiratoryRateGraphRequestDto>) {
            state.respiratoryRateRequest = action.payload
        },
        setHrGraphRequest(state, action: PayloadAction<HrGraphRequestDto>) {
            state.hrGraphRequest = action.payload
        },
        resetBpGraph(state) {
            state.bpGraphDto = undefined;
        },
        resetHrGraph(state) {
            state.hrGraphDto = undefined;
        },
        resetOxygenGraph(state) {
            state.oxygenGraphDto = undefined;
        },
        resetTempGraph(state) {
            state.tempGraphDto = undefined;
        },
        resetGlucoseGraph(state) {
            state.glucoseGraphDto = undefined;
        },
        resetRespiratoryRateGraph(state) {
            state.respiratoryRateDto = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGlucoseStatsAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getGlucoseStatsAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.glucoseStats = action.payload;
            })
            .addCase(getGlucoseStatsAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getBpGraphAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getBpGraphAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.bpGraphDto = action.payload;
            })
            .addCase(getBpGraphAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getOxygenGraphAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getOxygenGraphAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.oxygenGraphDto = action.payload;
            })
            .addCase(getOxygenGraphAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getHrGraphAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getHrGraphAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.hrGraphDto = action.payload;
            })
            .addCase(getHrGraphAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getTempGraphAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getTempGraphAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.tempGraphDto = action.payload;
            })
            .addCase(getTempGraphAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getGlucoseGraphAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getGlucoseGraphAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.glucoseGraphDto = action.payload;
            })
            .addCase(getGlucoseGraphAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });

        builder
            .addCase(getRespiratoryRateGraphAsync.pending, (state) => {
                state.status = ApiStatus.PENDING;
                state.apiError = undefined;
            })
            .addCase(getRespiratoryRateGraphAsync.fulfilled, (state, action) => {
                state.status = ApiStatus.IDLE;
                state.respiratoryRateDto = action.payload;
            })
            .addCase(getRespiratoryRateGraphAsync.rejected, (state, action) => {
                state.status = ApiStatus.FAILED;
                state.apiError = action.payload;
            });
    }
})

export const {setBpGraphRequest, setOxygenGraphRequest, resetBpGraph, 
    resetOxygenGraph, resetTempGraph, setTempGraphRequest, resetGlucoseGraph, setGlucoseGraphRequest,
    setRespiratoryRateGraphRequest, resetRespiratoryRateGraph,
    setHrGraphRequest, resetHrGraph
} = HealthServiceSlice.actions;
export default HealthServiceSlice.reducer;