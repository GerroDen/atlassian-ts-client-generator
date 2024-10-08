/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b3300bcdd36d8c214940b3035162ea6fa1d58aa8
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  JiraStatus,
  PageOfStatuses,
  StatusCreateRequest,
  StatusUpdateRequest,
} from '../models/index';

export interface CreateStatusesRequest {
    statusCreateRequest: StatusCreateRequest;
}

export interface DeleteStatusesByIdRequest {
    id: Array<string>;
}

export interface GetStatusesByIdRequest {
    id: Array<string>;
    expand?: string;
}

export interface SearchRequest {
    expand?: string;
    projectId?: string;
    startAt?: number;
    maxResults?: number;
    searchString?: string;
    statusCategory?: string;
}

export interface UpdateStatusesRequest {
    statusUpdateRequest: StatusUpdateRequest;
}

/**
 * 
 */
export class StatusApi extends runtime.BaseAPI {

    /**
     * Creates statuses for a global or project scope.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk create statuses
     */
    async createStatusesRaw(requestParameters: CreateStatusesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JiraStatus>>> {
        if (requestParameters['statusCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'statusCreateRequest',
                'Required parameter "statusCreateRequest" was null or undefined when calling createStatuses().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/statuses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['statusCreateRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates statuses for a global or project scope.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk create statuses
     */
    async createStatuses(requestParameters: CreateStatusesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JiraStatus>> {
        const response = await this.createStatusesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes statuses by ID.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk delete Statuses
     */
    async deleteStatusesByIdRaw(requestParameters: DeleteStatusesByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteStatusesById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/statuses`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Deletes statuses by ID.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk delete Statuses
     */
    async deleteStatusesById(requestParameters: DeleteStatusesByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteStatusesByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of the statuses specified by one or more status IDs.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk get statuses
     */
    async getStatusesByIdRaw(requestParameters: GetStatusesByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JiraStatus>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getStatusesById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/statuses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of the statuses specified by one or more status IDs.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk get statuses
     */
    async getStatusesById(requestParameters: GetStatusesByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JiraStatus>> {
        const response = await this.getStatusesByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of statuses that match a search on name or project.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Search statuses paginated
     */
    async searchRaw(requestParameters: SearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageOfStatuses>> {
        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['searchString'] != null) {
            queryParameters['searchString'] = requestParameters['searchString'];
        }

        if (requestParameters['statusCategory'] != null) {
            queryParameters['statusCategory'] = requestParameters['statusCategory'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/statuses/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of statuses that match a search on name or project.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Search statuses paginated
     */
    async search(requestParameters: SearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageOfStatuses> {
        const response = await this.searchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates statuses by ID.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk update statuses
     */
    async updateStatusesRaw(requestParameters: UpdateStatusesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['statusUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'statusUpdateRequest',
                'Required parameter "statusUpdateRequest" was null or undefined when calling updateStatuses().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/statuses`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['statusUpdateRequest'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Updates statuses by ID.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
     * Bulk update statuses
     */
    async updateStatuses(requestParameters: UpdateStatusesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateStatusesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
