export interface MedicalDataDto {
    allergies : AllergiesDataDto[];
    surgeries: SurgeriesDataDto[];
    diagnoses: DiagnosesDataDto[];
    medication: MedicationDataDto[];
    vaccination: VaccinationDataDto[];
    health_episodes: HealthEpisodesDataDto[];
    additional_information?: AdditionalInformationDataDto;

}

export interface AllergiesDataDto {
    sid: string;
    client_id: string;
    name: string;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}

export interface SurgeriesDataDto {
    sid: string;
    client_id: string;
    name: string;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}

export interface DiagnosesDataDto {
    sid: string;
    client_id: string;
    name: string;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}

export interface MedicationDataDto {
    sid: string;
    client_id: string;
    name: string;
    condition_name: string;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}

export interface VaccinationDataDto {
    sid: string;
    client_id: string;
    name: string;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}

export interface HealthEpisodesDataDto {
    sid: string;
    client_id: string;
    name: string;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}

export interface AdditionalInformationDataDto {
    sid: string;
    client_id: string;
    name: string;
    deleted: boolean;
    deleted_datetime: Date;
    created_datetime: Date;
    updated_datetime: Date;
}









