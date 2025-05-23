/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-006326f44f7f2ca50c1f9c8c88f70b27eb18a140
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ProjectType,
} from '../models/index';

export interface GetAccessibleProjectTypeByKeyRequest {
    projectTypeKey: GetAccessibleProjectTypeByKeyProjectTypeKeyEnum;
}

export interface GetProjectTypeByKeyRequest {
    projectTypeKey: GetProjectTypeByKeyProjectTypeKeyEnum;
}

/**
 * 
 */
export class ProjectTypesApi extends runtime.BaseAPI {

    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get accessible project type by key
     */
    async getAccessibleProjectTypeByKeyRaw(requestParameters: GetAccessibleProjectTypeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectType>> {
        if (requestParameters['projectTypeKey'] == null) {
            throw new runtime.RequiredError(
                'projectTypeKey',
                'Required parameter "projectTypeKey" was null or undefined when calling getAccessibleProjectTypeByKey().'
            );
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
            path: `/rest/api/3/project/type/{projectTypeKey}/accessible`.replace(`{${"projectTypeKey"}}`, encodeURIComponent(String(requestParameters['projectTypeKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get accessible project type by key
     */
    async getAccessibleProjectTypeByKey(requestParameters: GetAccessibleProjectTypeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectType> {
        const response = await this.getAccessibleProjectTypeByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license.
     * Get licensed project types
     */
    async getAllAccessibleProjectTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectType>>> {
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
            path: `/rest/api/3/project/type/accessible`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license.
     * Get licensed project types
     */
    async getAllAccessibleProjectTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectType>> {
        const response = await this.getAllAccessibleProjectTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid license for each type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get all project types
     */
    async getAllProjectTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectType>>> {
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
            path: `/rest/api/3/project/type`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid license for each type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get all project types
     */
    async getAllProjectTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectType>> {
        const response = await this.getAllProjectTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get project type by key
     */
    async getProjectTypeByKeyRaw(requestParameters: GetProjectTypeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectType>> {
        if (requestParameters['projectTypeKey'] == null) {
            throw new runtime.RequiredError(
                'projectTypeKey',
                'Required parameter "projectTypeKey" was null or undefined when calling getProjectTypeByKey().'
            );
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
            path: `/rest/api/3/project/type/{projectTypeKey}`.replace(`{${"projectTypeKey"}}`, encodeURIComponent(String(requestParameters['projectTypeKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get project type by key
     */
    async getProjectTypeByKey(requestParameters: GetProjectTypeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectType> {
        const response = await this.getProjectTypeByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAccessibleProjectTypeByKeyProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business',
    ProductDiscovery: 'product_discovery'
} as const;
export type GetAccessibleProjectTypeByKeyProjectTypeKeyEnum = typeof GetAccessibleProjectTypeByKeyProjectTypeKeyEnum[keyof typeof GetAccessibleProjectTypeByKeyProjectTypeKeyEnum];
/**
 * @export
 */
export const GetProjectTypeByKeyProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business',
    ProductDiscovery: 'product_discovery'
} as const;
export type GetProjectTypeByKeyProjectTypeKeyEnum = typeof GetProjectTypeByKeyProjectTypeKeyEnum[keyof typeof GetProjectTypeByKeyProjectTypeKeyEnum];
