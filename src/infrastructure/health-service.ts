import { BpGraphDto, GlucoseGraphDto, HrGraphDto, OxygenGraphDto, RespiratoryRateGraphDto, TempGraphDto } from "../application/features/health-service/models/bp-graph-dto";
import { GlucoseStatsDto } from "../application/features/health-service/models/glucose-stats-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.healthBaseUrl);


const getGlucoseStats = (userId: string) => {
    return organisationPortalApi.get<GlucoseStatsDto>(`/api/v0/health/body_glucose/stats/${userId}`);
}


const getBpGraphStats = (userId: string, startDate: string, endDate: string, graphType: string) => {
    return organisationPortalApi.get<BpGraphDto>(`/api/v0/health/blood_pressure_graph?user_sid=${userId}&start_date=${startDate}&end_date=${endDate}&graph_type=${graphType}`);
}

const getOxygenGraphStats = (userId: string, startDate: string, endDate: string, graphType: string) => {
    return organisationPortalApi.get<OxygenGraphDto>(`/api/v0/health/oxygen_graph?user_sid=${userId}&start_date=${startDate}&end_date=${endDate}&graph_type=${graphType}`);
}

const getHrGraphStats = (userId: string, startDate: string, endDate: string, graphType: string) => {
    return organisationPortalApi.get<HrGraphDto>(`/api/v0/health/heart_rates_graph?user_sid=${userId}&start_date=${startDate}&end_date=${endDate}&graph_type=${graphType}`);
}

const getTempGraphStats = (userId: string, startDate: string, endDate: string, graphType: string) => {
    return organisationPortalApi.get<TempGraphDto>(`/api/v0/health/temp_graph?user_sid=${userId}&start_date=${startDate}&end_date=${endDate}&graph_type=${graphType}`);
}

const getGlucoseGraph = (userId: string, startDate: string, endDate: string, graphType: string) => {
    return organisationPortalApi.get<GlucoseGraphDto>(`/api/v0/health/glucose_graph?user_sid=${userId}&start_date=${startDate}&end_date=${endDate}&graph_type=${graphType}`);
}

const getRespiratoryRateGraph = (userId: string, startDate: string, endDate: string, graphType: string) => {
    return organisationPortalApi.get<RespiratoryRateGraphDto>(`/api/v0/health/respiratory_rate_graph?user_sid=${userId}&start_date=${startDate}&end_date=${endDate}&graph_type=${graphType}`);
}


const HealthServiceApi = {
    getGlucoseStats,
    getBpGraphStats,
    getHrGraphStats,
    getOxygenGraphStats,
    getTempGraphStats,
    getGlucoseGraph,
    getRespiratoryRateGraph
}

export default HealthServiceApi;