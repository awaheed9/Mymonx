import { PageAndFilterRequestDto } from "../../../common/models/page-and-filter-request-dto";

export interface UserProfileRequestDto extends PageAndFilterRequestDto {
    org_id: string | undefined;
}

export interface UserAlertRequestDto extends PageAndFilterRequestDto {
    org_id: string | undefined;
    user_id: string | undefined;
}

export interface UserOrgAlertRequestDto extends PageAndFilterRequestDto {
    org_id: string | undefined;
}