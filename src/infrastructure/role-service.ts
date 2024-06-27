import { PaginatedResult } from "../application/common/models/paginated-result-dto";
import { createOrganisationPortalApi } from "./organisation-portal-api"
import { CreateRoleDto, RoleDto, RoleGridDto, UpdateRoleDto } from "../application/features/role-service/models/role-grid-dto";
import { DeleteRoleResultDto, RoleResultDto } from "../application/features/role-service/models/role-result-dto";
import { RoleRequestDto } from "../application/features/role-service/models/role-request-dto";
import { config } from "./config";


const organisationPortalApi = createOrganisationPortalApi(config.authBaseUrl);

const getRoles = (request: RoleRequestDto) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    return organisationPortalApi.get<PaginatedResult<RoleGridDto>>(`/v2/roles?page_number=${request.page_number}&page_size=${request.page_size}${filter}`);
}

const getRole = (role_id: string) => {
    return organisationPortalApi.get<RoleDto>(`/v2/roles/${role_id}`);
}

const createRole = (request: CreateRoleDto) => {
    return organisationPortalApi.post<RoleResultDto[]>(`/v2/roles`, request);
}

const updateRole = (request: UpdateRoleDto) => {
    return organisationPortalApi.put<RoleResultDto[]>(`/v2/roles`, request);
}

const deleteRole = (role_id: string) => {
    return organisationPortalApi.delete<DeleteRoleResultDto>(`/v2/roles/${role_id}`);
}

const getRoleDropdown = (role_id: string) => {
    return organisationPortalApi.get<RoleDto[]>(`/v2/roles/${role_id}/dropdown`);
}

const RoleServiceApi = {
    getRoles,
    getRole,
    getRoleDropdown,
    createRole,
    updateRole,
    deleteRole
}

export default RoleServiceApi;