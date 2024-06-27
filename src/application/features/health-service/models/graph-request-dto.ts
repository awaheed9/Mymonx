export interface GraphRequestDto {
    userId: string;
    startDate: string;
    endDate: string;
    graphType: string;
}

export interface OxygenGraphRequestDto extends GraphRequestDto {
    
}

export interface TempGraphRequestDto extends GraphRequestDto {
    
}

export interface GlucoseGraphRequestDto extends GraphRequestDto {
    
}

export interface RespiratoryRateGraphRequestDto extends GraphRequestDto {
    
}

export interface HrGraphRequestDto extends GraphRequestDto {
    
}