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
  Avatar,
  ProjectAvatars,
} from '../models';

export interface CreateProjectAvatarRequest {
    projectIdOrKey: string;
    body: any | null;
    x?: number;
    y?: number;
    size?: number;
}

export interface DeleteProjectAvatarRequest {
    projectIdOrKey: string;
    id: number;
}

export interface GetAllProjectAvatarsRequest {
    projectIdOrKey: string;
}

export interface UpdateProjectAvatarRequest {
    projectIdOrKey: string;
    requestBody: { [key: string]: any; };
}

/**
 * 
 */
export class ProjectAvatarsApi extends runtime.BaseAPI {

    /**
     * Loads an avatar for a project.  Specify the avatar\'s local file location in the body of the request. Also, include the following headers:   *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.  For example:   `curl --request POST `  `--user email@example.com:<api_token> `  `--header \'X-Atlassian-Token: no-check\' `  `--header \'Content-Type: image/< image_type>\' `  `--data-binary \"<@/path/to/file/with/your/avatar>\" `  `--url \'https://your-domain.atlassian.net/rest/api/3/project/{projectIdOrKey}/avatar2\'`  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\'s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project\'s displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Load project avatar
     */
    async createProjectAvatarRaw(requestParameters: CreateProjectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling createProjectAvatar.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createProjectAvatar.');
        }

        const queryParameters: any = {};

        if (requestParameters.x !== undefined) {
            queryParameters['x'] = requestParameters.x;
        }

        if (requestParameters.y !== undefined) {
            queryParameters['y'] = requestParameters.y;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
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
            path: `/rest/api/3/project/{projectIdOrKey}/avatar2`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Loads an avatar for a project.  Specify the avatar\'s local file location in the body of the request. Also, include the following headers:   *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.  For example:   `curl --request POST `  `--user email@example.com:<api_token> `  `--header \'X-Atlassian-Token: no-check\' `  `--header \'Content-Type: image/< image_type>\' `  `--data-binary \"<@/path/to/file/with/your/avatar>\" `  `--url \'https://your-domain.atlassian.net/rest/api/3/project/{projectIdOrKey}/avatar2\'`  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\'s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project\'s displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Load project avatar
     */
    async createProjectAvatar(requestParameters: CreateProjectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.createProjectAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Delete project avatar
     */
    async deleteProjectAvatarRaw(requestParameters: DeleteProjectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling deleteProjectAvatar.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteProjectAvatar.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/project/{projectIdOrKey}/avatar/{id}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Delete project avatar
     */
    async deleteProjectAvatar(requestParameters: DeleteProjectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProjectAvatarRaw(requestParameters, initOverrides);
    }

    /**
     * Returns all project avatars, grouped by system and custom avatars.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get all project avatars
     */
    async getAllProjectAvatarsRaw(requestParameters: GetAllProjectAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectAvatars>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getAllProjectAvatars.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/avatars`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all project avatars, grouped by system and custom avatars.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get all project avatars
     */
    async getAllProjectAvatars(requestParameters: GetAllProjectAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectAvatars> {
        const response = await this.getAllProjectAvatarsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the avatar displayed for a project.  Use [Load project avatar](#api-rest-api-3-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Set project avatar
     */
    async updateProjectAvatarRaw(requestParameters: UpdateProjectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling updateProjectAvatar.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateProjectAvatar.');
        }

        const queryParameters: any = {};

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
            path: `/rest/api/3/project/{projectIdOrKey}/avatar`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Sets the avatar displayed for a project.  Use [Load project avatar](#api-rest-api-3-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * Set project avatar
     */
    async updateProjectAvatar(requestParameters: UpdateProjectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateProjectAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

}