import { RoleBaseDto } from "./role-base-dto";

export interface RoleGridDto extends RoleBaseDto {
    created_datetime: Date;
    updated_datetime: Date;
    is_active: boolean;
}

export interface CreateRoleDto extends RoleBaseDto {

}

export interface UpdateRoleDto extends RoleBaseDto {

}

export interface RoleDto extends RoleBaseDto {

}