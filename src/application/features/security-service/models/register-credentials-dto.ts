export interface RegisterCredentialsDto {
    username: string;
    password: string;
}


export interface RegisterOrganisationCredentialsDto {
    organisation_name: string;
    location: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
    organisation_id: string;
}


export interface RegisterClientCredentialsDto {
    username: string;
    password: string;
    organisation_id: string;
}

export interface RegisterUserCredentialsDto {
    username: string;
    password: string;
    organisation_id: string;
    role_id: string;
}

export interface RegisterClientResultDto {
    user_sid: string;
}