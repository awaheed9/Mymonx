export interface CreateClientDto {
    sid: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    date_of_birth: string;
    gender: string;
    mobile: string;
    prefix_mobile: string;
    ethnicity: string;
    privacy_jurisdiction: string;
    deleted: boolean;
    deleted_date: Date;
    created_datetime: Date;
    updated_datetime: Date;
}