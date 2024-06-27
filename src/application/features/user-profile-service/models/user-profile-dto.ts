export interface UserProfileDto {
    sid: string;
    email: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    gender: string;
    mobile_prefix: string;
    mobile: string;
    health_status: string;
    nationality: string;
    weight: number;
    weight_unit: string;
    height: number;
    height_unit: string;
    location: string;
    care_team: string;
    user_sid: string;
    org_id: string;
    serial_number: string;
    setup_date: Date | null;
    nationality_name: string;
    location_name: string;
    care_team_name: string;
}


export interface EmergencyContactDto {
    sid: string;
    first_name: string;
    last_name: string;
    phone: string;
}


export interface ClientDashboardStats {
    total_client: string;
    total_high_risk_client: string;
    last_hour_alerts: string;
}