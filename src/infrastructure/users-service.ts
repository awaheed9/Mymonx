import { getOrgFromJwt } from "../application/common/helpers/jwt-helper";
import { PaginatedResult } from "../application/common/models/paginated-result-dto";
import { RegisterUserCredentialsDto } from "../application/features/security-service/models/register-credentials-dto";
import { CreateUserDto } from "../application/features/user-profile-service/models/create-user-dto";
import { CareTeamDto } from "../application/features/users-service/models/care-team-dto";
import { UserDto, UserUpdateResultDto } from "../application/features/users-service/models/user-update-result-dto";
import { UsersGridDto, UsersRequest } from "../application/features/users-service/models/users-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.authBaseUrl);

const getUsers = (request: UsersRequest) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    const org_id = `org_id=${request.org_id === undefined ? '' : request.org_id}`
    return organisationPortalApi.get<PaginatedResult<UsersGridDto>>(`/v2/users?${org_id}&page_number=${request.page_number}&page_size=${request.page_size}${filter}`);
}

const updateUsers = (user_profile: RegisterUserCredentialsDto) => {
    return organisationPortalApi.put<UserUpdateResultDto>("/v2/users/", user_profile);
}

const getUser = (user_id: string) => {
    return organisationPortalApi.get<UserDto>(`/v2/users/${user_id}`);
}

const deleteUser = (user_id: string) => {
    return organisationPortalApi.delete<boolean>(`/v2/users/${user_id}`);
}


const getCareTeams = () => {
    const org_id = getOrgFromJwt();
    return organisationPortalApi.get<CareTeamDto[]>(`/v2/users/care_teams?org_id=${org_id}`);
}


const UsersServiceApi = {
    getUsers,
    updateUsers,
    getCareTeams,
    getUser,
    deleteUser
}

export default UsersServiceApi;