export interface CurrentUser {
    id: string;
    email: string;
    roles: UserRoleDto[];
    org_id: string;
}

export interface UserRoleDto {
    sid: string;
    name: string;
}