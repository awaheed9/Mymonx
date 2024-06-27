import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiError } from "../../common/models/api-error";
import { getErrorPayload } from "../../common/helpers/error-helper";
import OrgServiceApi from "../../../infrastructure/org-service";
import { addSuccessNotification } from "../common/notificationSlice";
import { PaginatedResult } from "../../common/models/paginated-result-dto";
import { PageAndFilterRequestDto } from "../../common/models/page-and-filter-request-dto";
import LocalStorageService from "../../../infrastructure/local-storage-service";
import { OrganisationDto } from "./models/organisation-dto";
import { RegisterOrganisationDto } from "./models/register-organisation-dto";
import { RegisterOrganisationResultDto } from "./models/organisation-result-dto";

export const getOrganisationsAsync = createAsyncThunk<PaginatedResult<OrganisationDto> ,PageAndFilterRequestDto,
    {rejectValue: ApiError | undefined}
>(
    "organisationService/getOrganisations",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await OrgServiceApi.getOrganisations(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const getOrganisationAsync = createAsyncThunk<OrganisationDto ,string,
    {rejectValue: ApiError | undefined}
>(
    "organisationService/getOrganisation",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await OrgServiceApi.getOrganisation(request);
            return fulfillWithValue(response.data);
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const postRegisterOrganisationAsync = createAsyncThunk< RegisterOrganisationResultDto,RegisterOrganisationDto,
    {rejectValue: ApiError | undefined}
>(
    "organisationService/registerOrganisation",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await OrgServiceApi.registerOrganisation(request);
            const result = fulfillWithValue(response.data);
            
            if(response.data.organisation_id)
                LocalStorageService.setOrg(response.data.organisation_id);

            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const postOrganisationAsync = createAsyncThunk< RegisterOrganisationResultDto,OrganisationDto,
    {rejectValue: ApiError | undefined}
>(
    "organisationService/postOrganisation",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await OrgServiceApi.createOrganisation(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Organisation created successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)

export const updateOrganisationAsync = createAsyncThunk<RegisterOrganisationResultDto,OrganisationDto,
    {rejectValue: ApiError | undefined}
>(
    "organisationService/updateOrganisation",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await OrgServiceApi.updateOrganisation(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Organisation updated successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)


export const deleteOrganisationAsync = createAsyncThunk<boolean,string,
    {rejectValue: ApiError | undefined}
>(
    "organisationService/deleteOrganisation",
    async (request, {dispatch, rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await OrgServiceApi.deleteOrganisation(request);
            const result = fulfillWithValue(response.data);
            dispatch(addSuccessNotification('Organisation deleted successfully'));
            return result;
        } catch (error) {
            const apiError = getErrorPayload(error);
            return rejectWithValue(apiError);
        }
    }
)