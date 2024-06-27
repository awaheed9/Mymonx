import { PageAndFilterRequestDto } from "../application/common/models/page-and-filter-request-dto";
import { PaginatedResult } from "../application/common/models/paginated-result-dto";
import { OrganisationDto } from "../application/features/org-service/models/organisation-dto";
import { RegisterOrganisationResultDto } from "../application/features/org-service/models/organisation-result-dto";
import { RegisterOrganisationDto } from "../application/features/org-service/models/register-organisation-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.organisationBaseUrl);

const registerOrganisation = (organisation: RegisterOrganisationDto) => {
    return organisationPortalApi.post<RegisterOrganisationResultDto>("/api/v0/organisations/register", organisation);
}

const getOrganisations = (request: PageAndFilterRequestDto) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    return organisationPortalApi.get<PaginatedResult<OrganisationDto>>(`/api/v0/organisations?page_number=${request.page_number}&page_size=${request.page_size}${filter}`);
}

const getOrganisation = (org_id: string) => {
    return organisationPortalApi.get<OrganisationDto>(`/api/v0/organisations/${org_id}`);
}

const createOrganisation = (organisation: OrganisationDto) => {
    return organisationPortalApi.post<RegisterOrganisationResultDto>("/api/v0/organisations", organisation);
}

const updateOrganisation = (organisation: OrganisationDto) => {
    return organisationPortalApi.put<RegisterOrganisationResultDto>("/api/v0/organisations", organisation);
}

const deleteOrganisation = (sid: string) => {
    return organisationPortalApi.delete<boolean>(`/api/v0/organisations/${sid}`);
}

const OrgServiceApi = {
    getOrganisations,
    getOrganisation,
    registerOrganisation,
    createOrganisation,
    updateOrganisation,
    deleteOrganisation
}

export default OrgServiceApi;