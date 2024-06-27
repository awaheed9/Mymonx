import { PageAndFilterRequestDto } from "../application/common/models/page-and-filter-request-dto";
import { PaginatedResult } from "../application/common/models/paginated-result-dto";
import { DeviceByUserIdDto, DeviceDto } from "../application/features/device-service/models/DeviceDto";
import { DeviceResultByUserIdDto, DeviceResultDto } from "../application/features/device-service/models/DeviceResultDto";
import { MapDeviceDto } from "../application/features/device-service/models/MapDeviceDto";
import { MapDeviceResultDto } from "../application/features/device-service/models/MapDeviceResultDto";
import { CreateUserDto } from "../application/features/user-profile-service/models/create-user-dto";
import { ClientDashboardStats, UserProfileDto } from "../application/features/user-profile-service/models/user-profile-dto";
import { UserAlertGridDto, UserProfileGridDto } from "../application/features/user-profile-service/models/user-profile-grid-dto";
import { UserAlertRequestDto, UserOrgAlertRequestDto, UserProfileRequestDto } from "../application/features/user-profile-service/models/user-profile-request-dto";
import { UserProfileResultDto } from "../application/features/user-profile-service/models/user-profile-result-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.userProfileBaseUrl);
const DeviceOrganisationPortalApi = createOrganisationPortalApi(config.deviceBaseUrl);
const getProfiles = (request: UserProfileRequestDto) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    const org_id = `&org_id=${request.org_id === undefined ? '' : request.org_id}`
    return organisationPortalApi.get<PaginatedResult<UserProfileGridDto>>(`/api/v0/user/profiles?page_number=${request.page_number}&page_size=${request.page_size}${filter}${org_id}`);
}


const getHighRiskProfiles = (orgId: string | undefined) => {
    const org_id = `org_id=${orgId === undefined ? '' : orgId}`
    return organisationPortalApi.get<UserProfileGridDto[]>(`/api/v0/user/profiles_high_risk?${org_id}`);
}


const getProfile = (sid: string) => {
    return organisationPortalApi.get<UserProfileDto>(`/api/v0/user/profiles/${sid}`);
}

const createProfile = (user_profile: UserProfileDto) => {
    return organisationPortalApi.post<UserProfileResultDto>("/api/v0/user/profiles", user_profile);
}

const createProfileClient = (user_profile: UserProfileDto) => {
    return organisationPortalApi.post<UserProfileResultDto>("/api/v0/user/profiles/client", user_profile);
}

const createProfileUser = (user_profile: CreateUserDto) => {
    return organisationPortalApi.post<UserProfileResultDto>("/api/v0/user/profiles/user", user_profile);
}

const updateProfile = (user_profile: UserProfileDto) => {
    return organisationPortalApi.put<UserProfileResultDto>("/api/v0/user/profiles", user_profile);
}

const updateProfileClient = (user_profile: UserProfileDto) => {
    return organisationPortalApi.put<UserProfileResultDto>("/api/v0/user/profiles/client", user_profile);
}

const deleteProfile = (sid: string) => {
    return organisationPortalApi.delete<boolean>(`/api/v0/user/profiles/${sid}`);
}

const getClientStats = (org_id: string | undefined) => {
    return organisationPortalApi.get<ClientDashboardStats>(`/api/v0/user/profiles_stats?org_id=${org_id}`);
}

const getClientAlerts = (request: UserAlertRequestDto) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    const org_id = `&org_id=${request.org_id === undefined ? '' : request.org_id}`
    const user_id = `&user_id=${request.user_id === undefined ? '' : request.user_id}`
    return organisationPortalApi.get<PaginatedResult<UserAlertGridDto>>(`/api/v0/user/alerts/client?page_number=${request.page_number}&page_size=${request.page_size}${filter}${org_id}${user_id}`);
}

const getOrgClientAlerts = (request: UserOrgAlertRequestDto) => {
    const filter = `&filter_by=${request.filter_by === undefined ? '' : request.filter_by}`
    const org_id = `&org_id=${request.org_id === undefined ? '' : request.org_id}`
    return organisationPortalApi.get<PaginatedResult<UserAlertGridDto>>(`/api/v0/user/alerts/org?page_number=${request.page_number}&page_size=${request.page_size}${filter}${org_id}`);
}

const mapDevice = (map_device: MapDeviceDto) => {
    return DeviceOrganisationPortalApi.put<MapDeviceResultDto>("/api/v0/device/map", map_device);
}
const getDevices = (map_device: DeviceDto) => {
    return DeviceOrganisationPortalApi.get<DeviceResultDto>(`/api/v0/devices/${map_device.org_id}`);
}
const getDeviceByUserId = (map_device: DeviceByUserIdDto) => {
    return DeviceOrganisationPortalApi.get<DeviceResultByUserIdDto>(`/api/v0/device/user/${map_device.user_id}`);
}
const UserProfileServiceApi = {
    getProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile,
    getClientStats,
    getHighRiskProfiles,
    updateProfileClient,
    createProfileClient,
    createProfileUser,
    getClientAlerts,
    getOrgClientAlerts,
    mapDevice,
    getDevices,
    getDeviceByUserId
}

export default UserProfileServiceApi;