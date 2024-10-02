/* tslint:disable */
/* eslint-disable */
/**
 * Service Management Public REST API
 * Public REST API for Jira Service Management
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b3300bcdd36d8c214940b3035162ea6fa1d58aa8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  PagedDTOAssetsWorkspaceDTO,
  PagedDTOInsightWorkspaceDTO,
} from '../models/index';

export interface GetAssetsWorkspacesRequest {
    start?: number;
    limit?: number;
}

export interface GetInsightWorkspacesRequest {
    start?: number;
    limit?: number;
}

/**
 * 
 */
export class AssetsApi extends runtime.BaseAPI {

    /**
     * Returns a list of Assets workspace IDs. Include a workspace ID in the path to access the [Assets REST APIs](https://developer.atlassian.com/cloud/assets/rest).  **[Permissions](#permissions) required**: Any
     * Get assets workspaces
     */
    async getAssetsWorkspacesRaw(requestParameters: GetAssetsWorkspacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedDTOAssetsWorkspaceDTO>> {
        const queryParameters: any = {};

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:servicedesk-request"]);
        }

        const response = await this.request({
            path: `/rest/servicedeskapi/assets/workspace`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of Assets workspace IDs. Include a workspace ID in the path to access the [Assets REST APIs](https://developer.atlassian.com/cloud/assets/rest).  **[Permissions](#permissions) required**: Any
     * Get assets workspaces
     */
    async getAssetsWorkspaces(requestParameters: GetAssetsWorkspacesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedDTOAssetsWorkspaceDTO> {
        const response = await this.getAssetsWorkspacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint is deprecated, please use /assets/workspace/.
     * Get insight workspaces
     */
    async getInsightWorkspacesRaw(requestParameters: GetInsightWorkspacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedDTOInsightWorkspaceDTO>> {
        const queryParameters: any = {};

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:servicedesk-request"]);
        }

        const response = await this.request({
            path: `/rest/servicedeskapi/insight/workspace`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * This endpoint is deprecated, please use /assets/workspace/.
     * Get insight workspaces
     */
    async getInsightWorkspaces(requestParameters: GetInsightWorkspacesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedDTOInsightWorkspaceDTO> {
        const response = await this.getInsightWorkspacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}