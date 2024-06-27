import { jwtDecode } from "jwt-decode";
import LocalStorageService from "../../../infrastructure/local-storage-service";
import { CurrentUser, UserRoleDto } from "../../features/security-service/models/current-user-dto";

export const getCurrentUserFromJwt = (token?: string): CurrentUser | undefined => {
    const authToken = token || LocalStorageService.getAccessToken();
    if(authToken != null && authToken !== undefined) {
        const decodedJWT = jwtDecode<any>(authToken);

        const currentUser = {
            accessToken: authToken,
            id: decodedJWT["id"],
            email: decodedJWT["email"],
            roles: decodedJWT["roles"],
            org_id: decodedJWT["org_id"]
        } as CurrentUser;

        return currentUser;
    }
    return undefined;
}

export const getOrgFromJwt = (token?: string): string | undefined => {
    const authToken = token || LocalStorageService.getAccessToken();
    if(authToken != null && authToken !== undefined) {
        const decodedJWT = jwtDecode<any>(authToken);

        return decodedJWT["org_id"];
    }
    return undefined;
}


export const getUserFromJwt = (token?: string): string | undefined => {
    const authToken = token || LocalStorageService.getAccessToken();
    if(authToken != null && authToken !== undefined) {
        const decodedJWT = jwtDecode<any>(authToken);

        return decodedJWT["id"];
    }
    return undefined;
}


export const getRoleFromJwt = (): string | undefined => {
    const authToken = LocalStorageService.getAccessToken();
    if(authToken != null && authToken !== undefined) {
        const decodedJWT = jwtDecode<any>(authToken);

        const roleList = decodedJWT["roles"] as UserRoleDto[];
        return roleList[0].sid;
    }
    return undefined;
}