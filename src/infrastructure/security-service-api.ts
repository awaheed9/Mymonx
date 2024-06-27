import { LoginCredentialsDto } from "../application/features/security-service/models/login-credentials-dto";
import { RegisterClientCredentialsDto, RegisterClientResultDto, RegisterCredentialsDto, RegisterUserCredentialsDto } from "../application/features/security-service/models/register-credentials-dto";
import { config } from "./config";
import { createOrganisationPortalApi } from "./organisation-portal-api"

const organisationPortalApi = createOrganisationPortalApi(config.authBaseUrl);

const login = (loginCredentials: LoginCredentialsDto) => {
    return organisationPortalApi.post<any>("/v2/auth/login", loginCredentials,{
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
}

const register = (registerCredentials: RegisterCredentialsDto) => {
    return organisationPortalApi.post<string>("/v2/auth/register", registerCredentials);
}

const confirmEmail = (token: string) => {
  return organisationPortalApi.post<boolean>(`/v2/auth/confirm-email`, {token: token});
}

const registerClient = (registerCredentials: RegisterClientCredentialsDto) => {
  return organisationPortalApi.post<RegisterClientResultDto>("/v2/auth/register-client", registerCredentials);
}

const registerUser = (registerCredentials: RegisterUserCredentialsDto) => {
  return organisationPortalApi.post<RegisterClientResultDto>("/v2/auth/register-user", registerCredentials);
}


const SecurityServiceApi = {
    login,
    register,
    confirmEmail,
    registerClient,
    registerUser
}

export default SecurityServiceApi;