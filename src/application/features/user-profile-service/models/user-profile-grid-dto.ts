export interface UserProfileGridDto {
    sid: string;
    name: string;
    date_of_birth: string;
    years: number;
    health_status: string;
    care_location: string;
    user_sid: string;
}

export interface UserAlertGridDto {
    sid: string;
    name: string;
    alert_time: Date;
    alert_type: string;
    alert_description: string;
    health_status: string;
    location: string;
    resolved: boolean;
}