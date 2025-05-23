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
  IdBean,
  PermissionScheme,
  ProjectIssueSecurityLevels,
  SecurityScheme,
} from '../models/index';

export interface AssignPermissionSchemeRequest {
    projectKeyOrId: string;
    idBean: IdBean;
    expand?: string;
}

export interface GetAssignedPermissionSchemeRequest {
    projectKeyOrId: string;
    expand?: string;
}

export interface GetProjectIssueSecuritySchemeRequest {
    projectKeyOrId: string;
}

export interface GetSecurityLevelsForProjectRequest {
    projectKeyOrId: string;
}

/**
 * 
 */
export class ProjectPermissionSchemesApi extends runtime.BaseAPI {

    /**
     * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)
     * Assign permission scheme
     */
    async assignPermissionSchemeRaw(requestParameters: AssignPermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionScheme>> {
        if (requestParameters['projectKeyOrId'] == null) {
            throw new runtime.RequiredError(
                'projectKeyOrId',
                'Required parameter "projectKeyOrId" was null or undefined when calling assignPermissionScheme().'
            );
        }

        if (requestParameters['idBean'] == null) {
            throw new runtime.RequiredError(
                'idBean',
                'Required parameter "idBean" was null or undefined when calling assignPermissionScheme().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/project/{projectKeyOrId}/permissionscheme`.replace(`{${"projectKeyOrId"}}`, encodeURIComponent(String(requestParameters['projectKeyOrId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['idBean'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)
     * Assign permission scheme
     */
    async assignPermissionScheme(requestParameters: AssignPermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionScheme> {
        const response = await this.assignPermissionSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Get assigned permission scheme
     */
    async getAssignedPermissionSchemeRaw(requestParameters: GetAssignedPermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionScheme>> {
        if (requestParameters['projectKeyOrId'] == null) {
            throw new runtime.RequiredError(
                'projectKeyOrId',
                'Required parameter "projectKeyOrId" was null or undefined when calling getAssignedPermissionScheme().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/project/{projectKeyOrId}/permissionscheme`.replace(`{${"projectKeyOrId"}}`, encodeURIComponent(String(requestParameters['projectKeyOrId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Get assigned permission scheme
     */
    async getAssignedPermissionScheme(requestParameters: GetAssignedPermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionScheme> {
        const response = await this.getAssignedPermissionSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Get project issue security scheme
     */
    async getProjectIssueSecuritySchemeRaw(requestParameters: GetProjectIssueSecuritySchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SecurityScheme>> {
        if (requestParameters['projectKeyOrId'] == null) {
            throw new runtime.RequiredError(
                'projectKeyOrId',
                'Required parameter "projectKeyOrId" was null or undefined when calling getProjectIssueSecurityScheme().'
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
            path: `/rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme`.replace(`{${"projectKeyOrId"}}`, encodeURIComponent(String(requestParameters['projectKeyOrId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Get project issue security scheme
     */
    async getProjectIssueSecurityScheme(requestParameters: GetProjectIssueSecuritySchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SecurityScheme> {
        const response = await this.getProjectIssueSecuritySchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.
     * Get project issue security levels
     */
    async getSecurityLevelsForProjectRaw(requestParameters: GetSecurityLevelsForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectIssueSecurityLevels>> {
        if (requestParameters['projectKeyOrId'] == null) {
            throw new runtime.RequiredError(
                'projectKeyOrId',
                'Required parameter "projectKeyOrId" was null or undefined when calling getSecurityLevelsForProject().'
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
            path: `/rest/api/3/project/{projectKeyOrId}/securitylevel`.replace(`{${"projectKeyOrId"}}`, encodeURIComponent(String(requestParameters['projectKeyOrId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.
     * Get project issue security levels
     */
    async getSecurityLevelsForProject(requestParameters: GetSecurityLevelsForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectIssueSecurityLevels> {
        const response = await this.getSecurityLevelsForProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
