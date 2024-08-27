/* tslint:disable */
/* eslint-disable */
/**
 * Teams Public API
 * Teams Public API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PublicApiOverallCodedError,
  PublicApiTeamCreationPayload,
  PublicApiTeamResponse,
  PublicApiTeamResponseWithMembers,
  PublicApiTeamUpdatePayload,
} from '../models';

export interface CreateTeamRequest {
    orgId: string;
    publicApiTeamCreationPayload: PublicApiTeamCreationPayload;
}

export interface DeleteTeam1Request {
    orgId: string;
    teamId: string;
}

export interface GetTeam2Request {
    orgId: string;
    teamId: string;
    siteId?: string;
}

export interface UpdateTeamRequest {
    orgId: string;
    teamId: string;
    publicApiTeamUpdatePayload: PublicApiTeamUpdatePayload;
}

/**
 * 
 */
export class TeamsPublicAPIApi extends runtime.BaseAPI {

    /**
     * Creates a team, and adds the requesting user as the initial member.
     * Create a team.
     */
    async createTeamRaw(requestParameters: CreateTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicApiTeamResponseWithMembers>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createTeam.');
        }

        if (requestParameters.publicApiTeamCreationPayload === null || requestParameters.publicApiTeamCreationPayload === undefined) {
            throw new runtime.RequiredError('publicApiTeamCreationPayload','Required parameter requestParameters.publicApiTeamCreationPayload was null or undefined when calling createTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/gateway/api/public/teams/v1/org/{orgId}/teams/`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publicApiTeamCreationPayload,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a team, and adds the requesting user as the initial member.
     * Create a team.
     */
    async createTeam(requestParameters: CreateTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicApiTeamResponseWithMembers> {
        const response = await this.createTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a team.
     */
    async deleteTeam1Raw(requestParameters: DeleteTeam1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling deleteTeam1.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling deleteTeam1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gateway/api/public/teams/v1/org/{orgId}/teams/{teamId}`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))).replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a team.
     */
    async deleteTeam1(requestParameters: DeleteTeam1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTeam1Raw(requestParameters, initOverrides);
    }

    /**
     * Get a single team.
     */
    async getTeam2Raw(requestParameters: GetTeam2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicApiTeamResponse>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getTeam2.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling getTeam2.');
        }

        const queryParameters: any = {};

        if (requestParameters.siteId !== undefined) {
            queryParameters['siteId'] = requestParameters.siteId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gateway/api/public/teams/v1/org/{orgId}/teams/{teamId}`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))).replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a single team.
     */
    async getTeam2(requestParameters: GetTeam2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicApiTeamResponse> {
        const response = await this.getTeam2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will only update the fields that get passed in and leave the rest as unmodified.
     * Modify a team.
     */
    async updateTeamRaw(requestParameters: UpdateTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicApiTeamResponse>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateTeam.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling updateTeam.');
        }

        if (requestParameters.publicApiTeamUpdatePayload === null || requestParameters.publicApiTeamUpdatePayload === undefined) {
            throw new runtime.RequiredError('publicApiTeamUpdatePayload','Required parameter requestParameters.publicApiTeamUpdatePayload was null or undefined when calling updateTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/gateway/api/public/teams/v1/org/{orgId}/teams/{teamId}`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))).replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publicApiTeamUpdatePayload,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * This will only update the fields that get passed in and leave the rest as unmodified.
     * Modify a team.
     */
    async updateTeam(requestParameters: UpdateTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicApiTeamResponse> {
        const response = await this.updateTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

}