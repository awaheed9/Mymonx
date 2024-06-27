export interface PaginatedResult<T> {
    data: T[];
    total_count: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
    page: number;
    per_page: number;
}