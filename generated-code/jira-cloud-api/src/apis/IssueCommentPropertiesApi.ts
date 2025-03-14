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
  EntityProperty,
  PropertyKeys,
} from '../models/index';

export interface DeleteCommentPropertyRequest {
    commentId: string;
    propertyKey: string;
}

export interface GetCommentPropertyRequest {
    commentId: string;
    propertyKey: string;
}

export interface GetCommentPropertyKeysRequest {
    commentId: string;
}

export interface SetCommentPropertyRequest {
    commentId: string;
    propertyKey: string;
    body: any | null;
}

/**
 * 
 */
export class IssueCommentPropertiesApi extends runtime.BaseAPI {

    /**
     * Deletes a comment property.  **[Permissions](#permissions) required:** either of:   *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from any comment.  *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from a comment created by the user.  Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
     * Delete comment property
     */
    async deleteCommentPropertyRaw(requestParameters: DeleteCommentPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['commentId'] == null) {
            throw new runtime.RequiredError(
                'commentId',
                'Required parameter "commentId" was null or undefined when calling deleteCommentProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling deleteCommentProperty().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/comment/{commentId}/properties/{propertyKey}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters['commentId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a comment property.  **[Permissions](#permissions) required:** either of:   *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from any comment.  *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from a comment created by the user.  Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
     * Delete comment property
     */
    async deleteCommentProperty(requestParameters: DeleteCommentPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCommentPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the value of a comment property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * Get comment property
     */
    async getCommentPropertyRaw(requestParameters: GetCommentPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityProperty>> {
        if (requestParameters['commentId'] == null) {
            throw new runtime.RequiredError(
                'commentId',
                'Required parameter "commentId" was null or undefined when calling getCommentProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling getCommentProperty().'
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
            path: `/rest/api/3/comment/{commentId}/properties/{propertyKey}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters['commentId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the value of a comment property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * Get comment property
     */
    async getCommentProperty(requestParameters: GetCommentPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
        const response = await this.getCommentPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the keys of all the properties of a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * Get comment property keys
     */
    async getCommentPropertyKeysRaw(requestParameters: GetCommentPropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyKeys>> {
        if (requestParameters['commentId'] == null) {
            throw new runtime.RequiredError(
                'commentId',
                'Required parameter "commentId" was null or undefined when calling getCommentPropertyKeys().'
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
            path: `/rest/api/3/comment/{commentId}/properties`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters['commentId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the keys of all the properties of a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * Get comment property keys
     */
    async getCommentPropertyKeys(requestParameters: GetCommentPropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
        const response = await this.getCommentPropertyKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** either of:   *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on any comment.  *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on a comment created by the user.  Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
     * Set comment property
     */
    async setCommentPropertyRaw(requestParameters: SetCommentPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['commentId'] == null) {
            throw new runtime.RequiredError(
                'commentId',
                'Required parameter "commentId" was null or undefined when calling setCommentProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling setCommentProperty().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling setCommentProperty().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/comment/{commentId}/properties/{propertyKey}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters['commentId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** either of:   *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on any comment.  *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on a comment created by the user.  Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
     * Set comment property
     */
    async setCommentProperty(requestParameters: SetCommentPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setCommentPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
