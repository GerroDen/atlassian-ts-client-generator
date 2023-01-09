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
  CreateUpdateRoleRequestBean,
  ProjectRole,
  ProjectRoleDetails,
} from '../models';

export interface CreateProjectRoleRequest {
    createUpdateRoleRequestBean: CreateUpdateRoleRequestBean;
}

export interface DeleteProjectRoleRequest {
    id: number;
    swap?: number;
}

export interface FullyUpdateProjectRoleRequest {
    id: number;
    createUpdateRoleRequestBean: CreateUpdateRoleRequestBean;
}

export interface GetProjectRoleRequest {
    projectIdOrKey: string;
    id: number;
    excludeInactiveUsers?: boolean;
}

export interface GetProjectRoleByIdRequest {
    id: number;
}

export interface GetProjectRoleDetailsRequest {
    projectIdOrKey: string;
    currentMember?: boolean;
    excludeConnectAddons?: boolean;
}

export interface GetProjectRolesRequest {
    projectIdOrKey: string;
}

export interface PartialUpdateProjectRoleRequest {
    id: number;
    createUpdateRoleRequestBean: CreateUpdateRoleRequestBean;
}

/**
 * 
 */
export class ProjectRolesApi extends runtime.BaseAPI {

    /**
     * Creates a new project role with no [default actors](#api-rest-api-3-resolution-get). You can use the [Add default actors to project role](#api-rest-api-3-role-id-actors-post) operation to add default actors to the project role after creating it.  *Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*<  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create project role
     */
    async createProjectRoleRaw(requestParameters: CreateProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.createUpdateRoleRequestBean === null || requestParameters.createUpdateRoleRequestBean === undefined) {
            throw new runtime.RequiredError('createUpdateRoleRequestBean','Required parameter requestParameters.createUpdateRoleRequestBean was null or undefined when calling createProjectRole.');
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
            path: `/rest/api/3/role`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createUpdateRoleRequestBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new project role with no [default actors](#api-rest-api-3-resolution-get). You can use the [Add default actors to project role](#api-rest-api-3-role-id-actors-post) operation to add default actors to the project role after creating it.  *Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*<  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create project role
     */
    async createProjectRole(requestParameters: CreateProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.createProjectRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete project role
     */
    async deleteProjectRoleRaw(requestParameters: DeleteProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteProjectRole.');
        }

        const queryParameters: any = {};

        if (requestParameters.swap !== undefined) {
            queryParameters['swap'] = requestParameters.swap;
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
            path: `/rest/api/3/role/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete project role
     */
    async deleteProjectRole(requestParameters: DeleteProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProjectRoleRaw(requestParameters, initOverrides);
    }

    /**
     * Updates the project role\'s name and description. You must include both a name and a description in the request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Fully update project role
     */
    async fullyUpdateProjectRoleRaw(requestParameters: FullyUpdateProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fullyUpdateProjectRole.');
        }

        if (requestParameters.createUpdateRoleRequestBean === null || requestParameters.createUpdateRoleRequestBean === undefined) {
            throw new runtime.RequiredError('createUpdateRoleRequestBean','Required parameter requestParameters.createUpdateRoleRequestBean was null or undefined when calling fullyUpdateProjectRole.');
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
            path: `/rest/api/3/role/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createUpdateRoleRequestBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates the project role\'s name and description. You must include both a name and a description in the request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Fully update project role
     */
    async fullyUpdateProjectRole(requestParameters: FullyUpdateProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.fullyUpdateProjectRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of all project roles, complete with project role details and default actors.  ### About project roles ###  [Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications).  Project roles are used in [permission schemes](#api-rest-api-3-permissionscheme-get), [email notification schemes](#api-rest-api-3-notificationscheme-get), [issue security levels](#api-rest-api-3-issuesecurityschemes-get), [comment visibility](#api-rest-api-3-comment-list-post), and workflow conditions.  #### Members and actors ####  In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role.  Actors may be set as [default members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying\'defaultmembers\'foraprojectrole) of the project role or set at the project level:   *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired.  *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all project roles
     */
    async getAllProjectRolesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectRole>>> {
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
            path: `/rest/api/3/role`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a list of all project roles, complete with project role details and default actors.  ### About project roles ###  [Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications).  Project roles are used in [permission schemes](#api-rest-api-3-permissionscheme-get), [email notification schemes](#api-rest-api-3-notificationscheme-get), [issue security levels](#api-rest-api-3-issuesecurityschemes-get), [comment visibility](#api-rest-api-3-comment-list-post), and workflow conditions.  #### Members and actors ####  In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role.  Actors may be set as [default members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying\'defaultmembers\'foraprojectrole) of the project role or set at the project level:   *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired.  *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all project roles
     */
    async getAllProjectRoles(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectRole>> {
        const response = await this.getAllProjectRolesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns a project role\'s details and actors associated with the project. The list of actors is sorted by display name.  To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-3-user-get) with the `groups` expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get project role for project
     */
    async getProjectRoleRaw(requestParameters: GetProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getProjectRole.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProjectRole.');
        }

        const queryParameters: any = {};

        if (requestParameters.excludeInactiveUsers !== undefined) {
            queryParameters['excludeInactiveUsers'] = requestParameters.excludeInactiveUsers;
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
            path: `/rest/api/3/project/{projectIdOrKey}/role/{id}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a project role\'s details and actors associated with the project. The list of actors is sorted by display name.  To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-3-user-get) with the `groups` expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get project role for project
     */
    async getProjectRole(requestParameters: GetProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.getProjectRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get project role by ID
     */
    async getProjectRoleByIdRaw(requestParameters: GetProjectRoleByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProjectRoleById.');
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
            path: `/rest/api/3/role/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get project role by ID
     */
    async getProjectRoleById(requestParameters: GetProjectRoleByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.getProjectRoleByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the list of project roles is common to all projects.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project role details
     */
    async getProjectRoleDetailsRaw(requestParameters: GetProjectRoleDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectRoleDetails>>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getProjectRoleDetails.');
        }

        const queryParameters: any = {};

        if (requestParameters.currentMember !== undefined) {
            queryParameters['currentMember'] = requestParameters.currentMember;
        }

        if (requestParameters.excludeConnectAddons !== undefined) {
            queryParameters['excludeConnectAddons'] = requestParameters.excludeConnectAddons;
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
            path: `/rest/api/3/project/{projectIdOrKey}/roledetails`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the list of project roles is common to all projects.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project role details
     */
    async getProjectRoleDetails(requestParameters: GetProjectRoleDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectRoleDetails>> {
        const response = await this.getProjectRoleDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and self URL for each role.  Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-3-role-get) for more information.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get project roles for project
     */
    async getProjectRolesRaw(requestParameters: GetProjectRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getProjectRoles.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/role`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and self URL for each role.  Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-3-role-get) for more information.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get project roles for project
     */
    async getProjectRoles(requestParameters: GetProjectRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.getProjectRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates either the project role\'s name or its description.  You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Partial update project role
     */
    async partialUpdateProjectRoleRaw(requestParameters: PartialUpdateProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateProjectRole.');
        }

        if (requestParameters.createUpdateRoleRequestBean === null || requestParameters.createUpdateRoleRequestBean === undefined) {
            throw new runtime.RequiredError('createUpdateRoleRequestBean','Required parameter requestParameters.createUpdateRoleRequestBean was null or undefined when calling partialUpdateProjectRole.');
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
            path: `/rest/api/3/role/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createUpdateRoleRequestBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates either the project role\'s name or its description.  You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Partial update project role
     */
    async partialUpdateProjectRole(requestParameters: PartialUpdateProjectRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.partialUpdateProjectRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}