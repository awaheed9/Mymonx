export interface ApiError {
    error?: string;
    validationErrors?: string[];
    status: number;
    detail: string;
}