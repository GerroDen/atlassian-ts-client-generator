/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  IssueLinkType,
  IssueLinkTypes,
} from '../models';

export interface CreateIssueLinkTypeRequest {
    issueLinkType: IssueLinkType;
}

export interface DeleteIssueLinkTypeRequest {
    issueLinkTypeId: string;
}

export interface GetIssueLinkTypeRequest {
    issueLinkTypeId: string;
}

export interface UpdateIssueLinkTypeRequest {
    issueLinkTypeId: string;
    issueLinkType: IssueLinkType;
}

/**
 * 
 */
export class IssueLinkTypesApi extends runtime.BaseAPI {

    /**
     * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link\'s inward and outward relationships.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create issue link type
     */
    async createIssueLinkTypeRaw(requestParameters: CreateIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueLinkType>> {
        if (requestParameters.issueLinkType === null || requestParameters.issueLinkType === undefined) {
            throw new runtime.RequiredError('issueLinkType','Required parameter requestParameters.issueLinkType was null or undefined when calling createIssueLinkType.');
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
            path: `/rest/api/3/issueLinkType`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueLinkType,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link\'s inward and outward relationships.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create issue link type
     */
    async createIssueLinkType(requestParameters: CreateIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueLinkType> {
        const response = await this.createIssueLinkTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete issue link type
     */
    async deleteIssueLinkTypeRaw(requestParameters: DeleteIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.issueLinkTypeId === null || requestParameters.issueLinkTypeId === undefined) {
            throw new runtime.RequiredError('issueLinkTypeId','Required parameter requestParameters.issueLinkTypeId was null or undefined when calling deleteIssueLinkType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issueLinkType/{issueLinkTypeId}`.replace(`{${"issueLinkTypeId"}}`, encodeURIComponent(String(requestParameters.issueLinkTypeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete issue link type
     */
    async deleteIssueLinkType(requestParameters: DeleteIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIssueLinkTypeRaw(requestParameters, initOverrides);
    }

    /**
     * Returns an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     * Get issue link type
     */
    async getIssueLinkTypeRaw(requestParameters: GetIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueLinkType>> {
        if (requestParameters.issueLinkTypeId === null || requestParameters.issueLinkTypeId === undefined) {
            throw new runtime.RequiredError('issueLinkTypeId','Required parameter requestParameters.issueLinkTypeId was null or undefined when calling getIssueLinkType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issueLinkType/{issueLinkTypeId}`.replace(`{${"issueLinkTypeId"}}`, encodeURIComponent(String(requestParameters.issueLinkTypeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     * Get issue link type
     */
    async getIssueLinkType(requestParameters: GetIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueLinkType> {
        const response = await this.getIssueLinkTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all issue link types.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     * Get issue link types
     */
    async getIssueLinkTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueLinkTypes>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issueLinkType`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of all issue link types.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
     * Get issue link types
     */
    async getIssueLinkTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueLinkTypes> {
        const response = await this.getIssueLinkTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update issue link type
     */
    async updateIssueLinkTypeRaw(requestParameters: UpdateIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueLinkType>> {
        if (requestParameters.issueLinkTypeId === null || requestParameters.issueLinkTypeId === undefined) {
            throw new runtime.RequiredError('issueLinkTypeId','Required parameter requestParameters.issueLinkTypeId was null or undefined when calling updateIssueLinkType.');
        }

        if (requestParameters.issueLinkType === null || requestParameters.issueLinkType === undefined) {
            throw new runtime.RequiredError('issueLinkType','Required parameter requestParameters.issueLinkType was null or undefined when calling updateIssueLinkType.');
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
            path: `/rest/api/3/issueLinkType/{issueLinkTypeId}`.replace(`{${"issueLinkTypeId"}}`, encodeURIComponent(String(requestParameters.issueLinkTypeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueLinkType,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update issue link type
     */
    async updateIssueLinkType(requestParameters: UpdateIssueLinkTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueLinkType> {
        const response = await this.updateIssueLinkTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}