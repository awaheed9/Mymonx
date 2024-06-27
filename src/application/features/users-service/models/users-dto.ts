import { PageAndFilterRequestDto } from "../../../common/models/page-and-filter-request-dto";

export interface UsersGridDto {
    sid: string;
    first_name: string;
    last_name: string;
    username:string;
    roles: string;
    organisation_id: string;
    location: string;
}
export interface UsersRequest extends PageAndFilterRequestDto {
    org_id: string | undefined;
}