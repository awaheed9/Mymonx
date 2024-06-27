export interface BpGraphDto {
    categories: string[];
    series: GraphSeriesDto[];
    data: BpGraphDataDto[];
}

export interface BpGraphDataDto {
    key: string;
    systolic: number;	
    diastolic: number;
    max_systolic: number;	
    min_systolic: number;	
    max_diastolic: number;	
    min_diastolic: number;	
    color: string;
}

export interface GraphSeriesDto {
    name: string;
    data: number[];
}




export interface OxygenGraphDto {
    categories: string[];
    max: number[];
    min: number[];
    series: GraphSeriesDto[];
    data: OxygenGraphDataDto[];
}

export interface OxygenGraphDataDto {
    key: string;
    value: number;	
    max_value: number;	
    min_value: number;
}

//#region 
export interface TempGraphDto {
    categories: string[];
    series: GraphSeriesDto[];
    data: TempGraphDataDto[];
}

export interface TempGraphDataDto {
    key: string;
    body_temp: number;	
    ambient_temp: number;
    max_body_temp: number;	
    min_body_temp: number;	
    max_ambient_temp: number;	
    min_ambient_temp: number;	
    color: string;
}
//#endregion


//#region 
export interface GlucoseGraphDto {
    categories: string[];
    series: GraphSeriesDto[];
    data: GlucoseGraphDataDto[];
}

export interface GlucoseGraphDataDto {
    key: string;
    body_glucose: number;
    max_body_glucose: number;	
    min_body_glucose: number;	
    color: string;
}
//#endregion


//#region 
export interface RespiratoryRateGraphDto {
    categories: string[];
    series: GraphSeriesDto[];
    data: RespiratoryRateGraphDataDto[];
}

export interface RespiratoryRateGraphDataDto {
    key: string;
    respiratory_rate: number;
    max_respiratory_rate: number;	
    min_respiratory_rate: number;	
    color: string;
}
//#endregion

//#region 

export interface HrGraphDto {
    categories: string[];
    series: GraphSeriesDto[];
    data: HrGraphDataDto[];
}

export interface HrGraphDataDto {
    key: string;
    heart_rate: number;
    max_heart_rate: number;	
    min_heart_rate: number;	
    color: string;
}

//#endregion