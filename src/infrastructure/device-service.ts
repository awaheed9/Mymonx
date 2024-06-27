import { MapDeviceDto } from "../application/features/device-service/models/MapDeviceDto";
import { MapDeviceResultDto } from "../application/features/device-service/models/MapDeviceResultDto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api";

const organisationPortalApi = createOrganisationPortalApi(config.deviceBaseUrl);



const MapDevice = (map_device: MapDeviceDto) => {
    return organisationPortalApi.put<MapDeviceResultDto>("/api/v0/map-device", map_device);
}

const DeviceServiceApi = {
    MapDevice
}

export default DeviceServiceApi;