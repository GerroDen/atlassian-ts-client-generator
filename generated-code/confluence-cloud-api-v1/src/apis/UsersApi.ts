/* tslint:disable */
/* eslint-disable */
/**
 * The Confluence Cloud REST API
 * This document describes the REST API and resources provided by Confluence. The REST APIs are for developers who want to integrate Confluence into their application and for administrators who want to script interactions with the Confluence server.Confluence\'s REST APIs provide access to resources (data entities) via URI paths. To use a REST API, your application will make an HTTP request and parse the response. The response format is JSON. Your methods will be the standard HTTP methods like GET, PUT, POST and DELETE. Because the REST API is based on open standards, you can use any web development language to access the API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountIdEmailRecord,
  BulkUserLookupArray,
  GroupArrayWithLinks,
  User,
  UserAnonymous,
} from '../models/index';

export interface GetAnonymousUserRequest {
    expand?: Array<GetAnonymousUserExpandEnum>;
}

export interface GetBulkUserLookupRequest {
    accountId: string;
    expand?: Array<GetBulkUserLookupExpandEnum>;
}

export interface GetCurrentUserRequest {
    expand?: Array<GetCurrentUserExpandEnum>;
}

export interface GetGroupMembershipsForUserRequest {
    accountId: string;
    start?: number;
    limit?: number;
}

export interface GetPrivacyUnsafeUserEmailRequest {
    accountId: string;
}

export interface GetPrivacyUnsafeUserEmailBulkRequest {
    accountId: Array<string>;
}

export interface GetUserRequest {
    accountId: string;
    expand?: Array<GetUserExpandEnum>;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Returns information about how anonymous users are represented, like the profile picture and display name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get anonymous user
     */
    async getAnonymousUserRaw(requestParameters: GetAnonymousUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAnonymous>> {
        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:confluence-user"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/anonymous`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns information about how anonymous users are represented, like the profile picture and display name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get anonymous user
     */
    async getAnonymousUser(requestParameters: GetAnonymousUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAnonymous> {
        const response = await this.getAnonymousUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns user details for the ids provided in the request. Currently this API returns a maximum of 100 results. If more than 100 account ids are passed in, then the first 100 will be returned.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get multiple users using ids
     */
    async getBulkUserLookupRaw(requestParameters: GetBulkUserLookupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BulkUserLookupArray>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getBulkUserLookup().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:confluence-user"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/bulk`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns user details for the ids provided in the request. Currently this API returns a maximum of 100 results. If more than 100 account ids are passed in, then the first 100 will be returned.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get multiple users using ids
     */
    async getBulkUserLookup(requestParameters: GetBulkUserLookupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BulkUserLookupArray> {
        const response = await this.getBulkUserLookupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the currently logged-in user. This includes information about the user, like the display name, userKey, account ID, profile picture, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get current user
     */
    async getCurrentUserRaw(requestParameters: GetCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:confluence-user"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/current`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the currently logged-in user. This includes information about the user, like the display name, userKey, account ID, profile picture, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get current user
     */
    async getCurrentUser(requestParameters: GetCurrentUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getCurrentUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the groups that a user is a member of.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get group memberships for user
     */
    async getGroupMembershipsForUserRaw(requestParameters: GetGroupMembershipsForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupArrayWithLinks>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getGroupMembershipsForUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:confluence-user"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/memberof`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the groups that a user is a member of.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get group memberships for user
     */
    async getGroupMembershipsForUser(requestParameters: GetGroupMembershipsForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupArrayWithLinks> {
        const response = await this.getGroupMembershipsForUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a user\'s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user email address
     */
    async getPrivacyUnsafeUserEmailRaw(requestParameters: GetPrivacyUnsafeUserEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountIdEmailRecord>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getPrivacyUnsafeUserEmail().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/rest/api/user/email`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a user\'s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user email address
     */
    async getPrivacyUnsafeUserEmail(requestParameters: GetPrivacyUnsafeUserEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountIdEmailRecord> {
        const response = await this.getPrivacyUnsafeUserEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a user\'s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.  Any accounts which are not available will not be included in the result.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user email addresses in batch
     */
    async getPrivacyUnsafeUserEmailBulkRaw(requestParameters: GetPrivacyUnsafeUserEmailBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AccountIdEmailRecord>>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getPrivacyUnsafeUserEmailBulk().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/rest/api/user/email/bulk`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a user\'s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.  Any accounts which are not available will not be included in the result.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user email addresses in batch
     */
    async getPrivacyUnsafeUserEmailBulk(requestParameters: GetPrivacyUnsafeUserEmailBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AccountIdEmailRecord>> {
        const response = await this.getPrivacyUnsafeUserEmailBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a user. This includes information about the user, such as the display name, account ID, profile picture, and more. The information returned may be restricted by the user\'s profile visibility settings.  **Note:** to add, edit, or delete users in your organization, see the [user management REST API](/cloud/admin/user-management/about/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:confluence-user"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a user. This includes information about the user, such as the display name, account ID, profile picture, and more. The information returned may be restricted by the user\'s profile visibility settings.  **Note:** to add, edit, or delete users in your organization, see the [user management REST API](/cloud/admin/user-management/about/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAnonymousUserExpandEnum = {
    Operations: 'operations'
} as const;
export type GetAnonymousUserExpandEnum = typeof GetAnonymousUserExpandEnum[keyof typeof GetAnonymousUserExpandEnum];
/**
 * @export
 */
export const GetBulkUserLookupExpandEnum = {
    Operations: 'operations',
    PersonalSpace: 'personalSpace',
    IsExternalCollaborator: 'isExternalCollaborator'
} as const;
export type GetBulkUserLookupExpandEnum = typeof GetBulkUserLookupExpandEnum[keyof typeof GetBulkUserLookupExpandEnum];
/**
 * @export
 */
export const GetCurrentUserExpandEnum = {
    Operations: 'operations',
    PersonalSpace: 'personalSpace',
    IsExternalCollaborator: 'isExternalCollaborator'
} as const;
export type GetCurrentUserExpandEnum = typeof GetCurrentUserExpandEnum[keyof typeof GetCurrentUserExpandEnum];
/**
 * @export
 */
export const GetUserExpandEnum = {
    Operations: 'operations',
    PersonalSpace: 'personalSpace',
    IsExternalCollaborator: 'isExternalCollaborator'
} as const;
export type GetUserExpandEnum = typeof GetUserExpandEnum[keyof typeof GetUserExpandEnum];
