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
  Avatar,
  Avatars,
  ErrorCollection,
  SystemAvatars,
} from '../models/index';

export interface DeleteAvatarRequest {
    type: DeleteAvatarTypeEnum;
    owningObjectId: string;
    id: number;
}

export interface GetAllSystemAvatarsRequest {
    type: GetAllSystemAvatarsTypeEnum;
}

export interface GetAvatarImageByIDRequest {
    type: GetAvatarImageByIDTypeEnum;
    id: number;
    size?: GetAvatarImageByIDSizeEnum;
    format?: GetAvatarImageByIDFormatEnum;
}

export interface GetAvatarImageByOwnerRequest {
    type: GetAvatarImageByOwnerTypeEnum;
    entityId: string;
    size?: GetAvatarImageByOwnerSizeEnum;
    format?: GetAvatarImageByOwnerFormatEnum;
}

export interface GetAvatarImageByTypeRequest {
    type: GetAvatarImageByTypeTypeEnum;
    size?: GetAvatarImageByTypeSizeEnum;
    format?: GetAvatarImageByTypeFormatEnum;
}

export interface GetAvatarsRequest {
    type: GetAvatarsTypeEnum;
    entityId: string;
}

export interface StoreAvatarRequest {
    type: StoreAvatarTypeEnum;
    entityId: string;
    size: number;
    body: any | null;
    x?: number;
    y?: number;
}

/**
 * 
 */
export class AvatarsApi extends runtime.BaseAPI {

    /**
     * Deletes an avatar from a project, issue type or priority.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete avatar
     */
    async deleteAvatarRaw(requestParameters: DeleteAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling deleteAvatar().'
            );
        }

        if (requestParameters['owningObjectId'] == null) {
            throw new runtime.RequiredError(
                'owningObjectId',
                'Required parameter "owningObjectId" was null or undefined when calling deleteAvatar().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteAvatar().'
            );
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
            path: `/rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"owningObjectId"}}`, encodeURIComponent(String(requestParameters['owningObjectId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an avatar from a project, issue type or priority.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete avatar
     */
    async deleteAvatar(requestParameters: DeleteAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAvatarRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a list of system avatar details by owner type, where the owner types are issue type, project, user or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get system avatars by type
     */
    async getAllSystemAvatarsRaw(requestParameters: GetAllSystemAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SystemAvatars>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getAllSystemAvatars().'
            );
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
            path: `/rest/api/3/avatar/{type}/system`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of system avatar details by owner type, where the owner types are issue type, project, user or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get system avatars by type
     */
    async getAllSystemAvatars(requestParameters: GetAllSystemAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SystemAvatars> {
        const response = await this.getAllSystemAvatarsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a project, issue type or priority avatar image by ID.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  For system avatars, none.  *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  For priority avatars, none.
     * Get avatar image by ID
     */
    async getAvatarImageByIDRaw(requestParameters: GetAvatarImageByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getAvatarImageByID().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getAvatarImageByID().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
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
            path: `/rest/api/3/universal_avatar/view/type/{type}/avatar/{id}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns a project, issue type or priority avatar image by ID.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  For system avatars, none.  *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  For priority avatars, none.
     * Get avatar image by ID
     */
    async getAvatarImageByID(requestParameters: GetAvatarImageByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getAvatarImageByIDRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the avatar image for a project, issue type or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  For system avatars, none.  *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  For priority avatars, none.
     * Get avatar image by owner
     */
    async getAvatarImageByOwnerRaw(requestParameters: GetAvatarImageByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getAvatarImageByOwner().'
            );
        }

        if (requestParameters['entityId'] == null) {
            throw new runtime.RequiredError(
                'entityId',
                'Required parameter "entityId" was null or undefined when calling getAvatarImageByOwner().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
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
            path: `/rest/api/3/universal_avatar/view/type/{type}/owner/{entityId}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters['entityId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns the avatar image for a project, issue type or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  For system avatars, none.  *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  For priority avatars, none.
     * Get avatar image by owner
     */
    async getAvatarImageByOwner(requestParameters: GetAvatarImageByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getAvatarImageByOwnerRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the default project, issue type or priority avatar image.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get avatar image by type
     */
    async getAvatarImageByTypeRaw(requestParameters: GetAvatarImageByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getAvatarImageByType().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
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
            path: `/rest/api/3/universal_avatar/view/type/{type}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns the default project, issue type or priority avatar image.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get avatar image by type
     */
    async getAvatarImageByType(requestParameters: GetAvatarImageByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getAvatarImageByTypeRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the system and custom avatars for a project, issue type or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  for custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  for custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  for system avatars, none.  *  for priority avatars, none.
     * Get avatars
     */
    async getAvatarsRaw(requestParameters: GetAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatars>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getAvatars().'
            );
        }

        if (requestParameters['entityId'] == null) {
            throw new runtime.RequiredError(
                'entityId',
                'Required parameter "entityId" was null or undefined when calling getAvatars().'
            );
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
            path: `/rest/api/3/universal_avatar/type/{type}/owner/{entityId}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters['entityId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the system and custom avatars for a project, issue type or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  for custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  for custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  for system avatars, none.  *  for priority avatars, none.
     * Get avatars
     */
    async getAvatars(requestParameters: GetAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatars> {
        const response = await this.getAvatarsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Loads a custom avatar for a project, issue type or priority.  Specify the avatar\'s local file location in the body of the request. Also, include the following headers:   *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.  For example:   `curl --request POST `  `--user email@example.com:<api_token> `  `--header \'X-Atlassian-Token: no-check\' `  `--header \'Content-Type: image/< image_type>\' `  `--data-binary \"<@/path/to/file/with/your/avatar>\" `  `--url \'https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}\'`  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\'s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use:   *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type\'s displayed avatar.  *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project\'s displayed avatar.  *  [Update priority](#api-rest-api-3-priority-id-put) to set it as the priority\'s displayed avatar.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Load avatar
     */
    async storeAvatarRaw(requestParameters: StoreAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling storeAvatar().'
            );
        }

        if (requestParameters['entityId'] == null) {
            throw new runtime.RequiredError(
                'entityId',
                'Required parameter "entityId" was null or undefined when calling storeAvatar().'
            );
        }

        if (requestParameters['size'] == null) {
            throw new runtime.RequiredError(
                'size',
                'Required parameter "size" was null or undefined when calling storeAvatar().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling storeAvatar().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['x'] != null) {
            queryParameters['x'] = requestParameters['x'];
        }

        if (requestParameters['y'] != null) {
            queryParameters['y'] = requestParameters['y'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

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
            path: `/rest/api/3/universal_avatar/type/{type}/owner/{entityId}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters['entityId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Loads a custom avatar for a project, issue type or priority.  Specify the avatar\'s local file location in the body of the request. Also, include the following headers:   *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.  For example:   `curl --request POST `  `--user email@example.com:<api_token> `  `--header \'X-Atlassian-Token: no-check\' `  `--header \'Content-Type: image/< image_type>\' `  `--data-binary \"<@/path/to/file/with/your/avatar>\" `  `--url \'https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}\'`  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\'s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use:   *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type\'s displayed avatar.  *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project\'s displayed avatar.  *  [Update priority](#api-rest-api-3-priority-id-put) to set it as the priority\'s displayed avatar.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Load avatar
     */
    async storeAvatar(requestParameters: StoreAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.storeAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const DeleteAvatarTypeEnum = {
    Project: 'project',
    Issuetype: 'issuetype',
    Priority: 'priority'
} as const;
export type DeleteAvatarTypeEnum = typeof DeleteAvatarTypeEnum[keyof typeof DeleteAvatarTypeEnum];
/**
 * @export
 */
export const GetAllSystemAvatarsTypeEnum = {
    Issuetype: 'issuetype',
    Project: 'project',
    User: 'user',
    Priority: 'priority'
} as const;
export type GetAllSystemAvatarsTypeEnum = typeof GetAllSystemAvatarsTypeEnum[keyof typeof GetAllSystemAvatarsTypeEnum];
/**
 * @export
 */
export const GetAvatarImageByIDTypeEnum = {
    Issuetype: 'issuetype',
    Project: 'project',
    Priority: 'priority'
} as const;
export type GetAvatarImageByIDTypeEnum = typeof GetAvatarImageByIDTypeEnum[keyof typeof GetAvatarImageByIDTypeEnum];
/**
 * @export
 */
export const GetAvatarImageByIDSizeEnum = {
    Xsmall: 'xsmall',
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Xlarge: 'xlarge'
} as const;
export type GetAvatarImageByIDSizeEnum = typeof GetAvatarImageByIDSizeEnum[keyof typeof GetAvatarImageByIDSizeEnum];
/**
 * @export
 */
export const GetAvatarImageByIDFormatEnum = {
    Png: 'png',
    Svg: 'svg'
} as const;
export type GetAvatarImageByIDFormatEnum = typeof GetAvatarImageByIDFormatEnum[keyof typeof GetAvatarImageByIDFormatEnum];
/**
 * @export
 */
export const GetAvatarImageByOwnerTypeEnum = {
    Issuetype: 'issuetype',
    Project: 'project',
    Priority: 'priority'
} as const;
export type GetAvatarImageByOwnerTypeEnum = typeof GetAvatarImageByOwnerTypeEnum[keyof typeof GetAvatarImageByOwnerTypeEnum];
/**
 * @export
 */
export const GetAvatarImageByOwnerSizeEnum = {
    Xsmall: 'xsmall',
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Xlarge: 'xlarge'
} as const;
export type GetAvatarImageByOwnerSizeEnum = typeof GetAvatarImageByOwnerSizeEnum[keyof typeof GetAvatarImageByOwnerSizeEnum];
/**
 * @export
 */
export const GetAvatarImageByOwnerFormatEnum = {
    Png: 'png',
    Svg: 'svg'
} as const;
export type GetAvatarImageByOwnerFormatEnum = typeof GetAvatarImageByOwnerFormatEnum[keyof typeof GetAvatarImageByOwnerFormatEnum];
/**
 * @export
 */
export const GetAvatarImageByTypeTypeEnum = {
    Issuetype: 'issuetype',
    Project: 'project',
    Priority: 'priority'
} as const;
export type GetAvatarImageByTypeTypeEnum = typeof GetAvatarImageByTypeTypeEnum[keyof typeof GetAvatarImageByTypeTypeEnum];
/**
 * @export
 */
export const GetAvatarImageByTypeSizeEnum = {
    Xsmall: 'xsmall',
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Xlarge: 'xlarge'
} as const;
export type GetAvatarImageByTypeSizeEnum = typeof GetAvatarImageByTypeSizeEnum[keyof typeof GetAvatarImageByTypeSizeEnum];
/**
 * @export
 */
export const GetAvatarImageByTypeFormatEnum = {
    Png: 'png',
    Svg: 'svg'
} as const;
export type GetAvatarImageByTypeFormatEnum = typeof GetAvatarImageByTypeFormatEnum[keyof typeof GetAvatarImageByTypeFormatEnum];
/**
 * @export
 */
export const GetAvatarsTypeEnum = {
    Project: 'project',
    Issuetype: 'issuetype',
    Priority: 'priority'
} as const;
export type GetAvatarsTypeEnum = typeof GetAvatarsTypeEnum[keyof typeof GetAvatarsTypeEnum];
/**
 * @export
 */
export const StoreAvatarTypeEnum = {
    Project: 'project',
    Issuetype: 'issuetype',
    Priority: 'priority'
} as const;
export type StoreAvatarTypeEnum = typeof StoreAvatarTypeEnum[keyof typeof StoreAvatarTypeEnum];
