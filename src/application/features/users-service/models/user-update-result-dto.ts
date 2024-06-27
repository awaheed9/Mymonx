export interface UserUpdateResultDto {
    user_sid: string;
}

export interface UserDto {
    sid: string;
    first_name: string;
    last_name: string;
    username: string;
    roles: string[];
    org_id: string; 
}