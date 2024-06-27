import { PageAndFilterRequestDto } from "../application/common/models/page-and-filter-request-dto";
import { PaginatedResult } from "../application/common/models/paginated-result-dto";
import { ClientDto } from "../application/features/client-service/models/client-dto";
import { CreateClientDto } from "../application/features/client-service/models/create-client-dto";
import { CreateClientResultDto } from "../application/features/client-service/models/create-client-result-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.organisationBaseUrl);


const getClients = (request: PageAndFilterRequestDto) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    return organisationPortalApi.get<PaginatedResult<ClientDto>>(`/api/v0/clients?page_number=${request.page_number}&page_size=${request.page_size}${filter}`);
}

const getClientStats = () => {
    return organisationPortalApi.get<any>(`/api/v0/clients/stats`);
}

const getClient = (id: string) => {
    return organisationPortalApi.get<ClientDto>(`/api/v0/clients/${id}`);
}

const createClient = (client: CreateClientDto) => {
    return organisationPortalApi.post<CreateClientResultDto>("/api/v0/clients", client);
}

const updateClient = (client: CreateClientDto) => {
    return organisationPortalApi.put<CreateClientResultDto>("/api/v0/clients", client);
}

const deleteClient = (sid: string) => {
    return organisationPortalApi.delete<boolean>(`/api/v0/clients/${sid}`);
}

const ClientServiceApi = {
    getClients,
    getClientStats,
    getClient,
    createClient,
    updateClient,
    deleteClient
}

export default ClientServiceApi;