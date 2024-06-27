import { paginationDTO } from "../application/features/staticData-service/models/country-data-dto";
import { MedicalDataDto } from "../application/features/staticData-service/models/medical-data-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.staticDataBaseUrl);


const getCointries = (paging: paginationDTO) => {
    return organisationPortalApi.get<any>(`/api/v0/CountryData?page=${paging.page}&per_page=${paging.per_page}`);
}


const getMedicalData = (client_id: string) => {
    return organisationPortalApi.get<MedicalDataDto>(`/api/v0/medical-data/${client_id}`);
}



const StaticDataServiceApi = {
    getCointries,
    getMedicalData
}

export default StaticDataServiceApi;