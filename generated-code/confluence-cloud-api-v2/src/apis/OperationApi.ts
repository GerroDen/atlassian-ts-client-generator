/* tslint:disable */
/* eslint-disable */
/**
 * The Confluence Cloud REST API v2
 * This document describes Confluence\'s v2 APIs. This is intended to be an iteration on the existing Confluence Cloud REST API with improvements in both endpoint definitions and performance.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PermittedOperationsResponse,
} from '../models/index';

export interface GetAttachmentOperationsRequest {
    id: string;
}

export interface GetBlogPostOperationsRequest {
    id: number;
}

export interface GetCustomContentOperationsRequest {
    id: number;
}

export interface GetDatabaseOperationsRequest {
    id: number;
}

export interface GetFolderOperationsRequest {
    id: number;
}

export interface GetFooterCommentOperationsRequest {
    id: number;
}

export interface GetInlineCommentOperationsRequest {
    id: number;
}

export interface GetPageOperationsRequest {
    id: number;
}

export interface GetSmartLinkOperationsRequest {
    id: number;
}

export interface GetSpaceOperationsRequest {
    id: number;
}

export interface GetWhiteboardOperationsRequest {
    id: number;
}

/**
 * 
 */
export class OperationApi extends runtime.BaseAPI {

    /**
     * Returns the permitted operations on specific attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the attachment and its corresponding space.
     * Get permitted operations for attachment
     */
    async getAttachmentOperationsRaw(requestParameters: GetAttachmentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getAttachmentOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:attachment:confluence"]);
        }

        const response = await this.request({
            path: `/attachments/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the attachment and its corresponding space.
     * Get permitted operations for attachment
     */
    async getAttachmentOperations(requestParameters: GetAttachmentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getAttachmentOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the blog post and its corresponding space.
     * Get permitted operations for blog post
     */
    async getBlogPostOperationsRaw(requestParameters: GetBlogPostOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getBlogPostOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:page:confluence"]);
        }

        const response = await this.request({
            path: `/blogposts/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the blog post and its corresponding space.
     * Get permitted operations for blog post
     */
    async getBlogPostOperations(requestParameters: GetBlogPostOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getBlogPostOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the custom content and its corresponding space.
     * Get permitted operations for custom content
     */
    async getCustomContentOperationsRaw(requestParameters: GetCustomContentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCustomContentOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the custom content and its corresponding space.
     * Get permitted operations for custom content
     */
    async getCustomContentOperations(requestParameters: GetCustomContentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getCustomContentOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database and its corresponding space.
     * Get permitted operations for a database
     */
    async getDatabaseOperationsRaw(requestParameters: GetDatabaseOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDatabaseOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:database:confluence"]);
        }

        const response = await this.request({
            path: `/databases/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database and its corresponding space.
     * Get permitted operations for a database
     */
    async getDatabaseOperations(requestParameters: GetDatabaseOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getDatabaseOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder and its corresponding space.
     * Get permitted operations for a folder
     */
    async getFolderOperationsRaw(requestParameters: GetFolderOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getFolderOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:folder:confluence"]);
        }

        const response = await this.request({
            path: `/folders/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder and its corresponding space.
     * Get permitted operations for a folder
     */
    async getFolderOperations(requestParameters: GetFolderOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getFolderOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific footer comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the footer comment and its corresponding space.
     * Get permitted operations for footer comment
     */
    async getFooterCommentOperationsRaw(requestParameters: GetFooterCommentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getFooterCommentOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:comment:confluence"]);
        }

        const response = await this.request({
            path: `/footer-comments/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific footer comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the footer comment and its corresponding space.
     * Get permitted operations for footer comment
     */
    async getFooterCommentOperations(requestParameters: GetFooterCommentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getFooterCommentOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific inline comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the inline comment and its corresponding space.
     * Get permitted operations for inline comment
     */
    async getInlineCommentOperationsRaw(requestParameters: GetInlineCommentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getInlineCommentOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:comment:confluence"]);
        }

        const response = await this.request({
            path: `/inline-comments/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific inline comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the inline comment and its corresponding space.
     * Get permitted operations for inline comment
     */
    async getInlineCommentOperations(requestParameters: GetInlineCommentOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getInlineCommentOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the page and its corresponding space.
     * Get permitted operations for page
     */
    async getPageOperationsRaw(requestParameters: GetPageOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPageOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:page:confluence"]);
        }

        const response = await this.request({
            path: `/pages/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the page and its corresponding space.
     * Get permitted operations for page
     */
    async getPageOperations(requestParameters: GetPageOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getPageOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree and its corresponding space.
     * Get permitted operations for a Smart Link in the content tree
     */
    async getSmartLinkOperationsRaw(requestParameters: GetSmartLinkOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSmartLinkOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:embed:confluence"]);
        }

        const response = await this.request({
            path: `/embeds/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree and its corresponding space.
     * Get permitted operations for a Smart Link in the content tree
     */
    async getSmartLinkOperations(requestParameters: GetSmartLinkOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getSmartLinkOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space.
     * Get permitted operations for space
     */
    async getSpaceOperationsRaw(requestParameters: GetSpaceOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSpaceOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space.
     * Get permitted operations for space
     */
    async getSpaceOperations(requestParameters: GetSpaceOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getSpaceOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the permitted operations on specific whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard and its corresponding space.
     * Get permitted operations for a whiteboard
     */
    async getWhiteboardOperationsRaw(requestParameters: GetWhiteboardOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedOperationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getWhiteboardOperations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:whiteboard:confluence"]);
        }

        const response = await this.request({
            path: `/whiteboards/{id}/operations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the permitted operations on specific whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard and its corresponding space.
     * Get permitted operations for a whiteboard
     */
    async getWhiteboardOperations(requestParameters: GetWhiteboardOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedOperationsResponse> {
        const response = await this.getWhiteboardOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
