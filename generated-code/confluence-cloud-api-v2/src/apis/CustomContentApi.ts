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
  CreateCustomContentRequest,
  CustomContent,
  CustomContentBodyRepresentation,
  MultiEntityResultCustomContent,
  UpdateCustomContentRequest,
} from '../models';

export interface CreateCustomContentOperationRequest {
    createCustomContentRequest: CreateCustomContentRequest;
    serializeIdsAsStrings?: boolean;
}

export interface DeleteCustomContentRequest {
    id: number;
}

export interface GetCustomContentByIdRequest {
    id: number;
    bodyFormat?: CustomContentBodyRepresentation;
    version?: number;
    serializeIdsAsStrings?: boolean;
}

export interface GetCustomContentByTypeRequest {
    type: string;
    id?: Array<number>;
    cursor?: string;
    limit?: number;
    bodyFormat?: CustomContentBodyRepresentation;
    serializeIdsAsStrings?: boolean;
}

export interface GetCustomContentByTypeInBlogPostRequest {
    id: number;
    type: string;
    cursor?: string;
    limit?: number;
    bodyFormat?: CustomContentBodyRepresentation;
    serializeIdsAsStrings?: boolean;
}

export interface GetCustomContentByTypeInPageRequest {
    id: number;
    type: string;
    cursor?: string;
    limit?: number;
    bodyFormat?: CustomContentBodyRepresentation;
    serializeIdsAsStrings?: boolean;
}

export interface GetCustomContentByTypeInSpaceRequest {
    id: number;
    type: string;
    cursor?: string;
    limit?: number;
    bodyFormat?: CustomContentBodyRepresentation;
    serializeIdsAsStrings?: boolean;
}

export interface UpdateCustomContentOperationRequest {
    id: number;
    updateCustomContentRequest: UpdateCustomContentRequest;
    serializeIdsAsStrings?: boolean;
}

/**
 * 
 */
export class CustomContentApi extends runtime.BaseAPI {

    /**
     * Creates a new custom content in the given space, page, blogpost or other custom content.  Only one of `spaceId`, `pageId`, `blogPostId`, or `customContentId` is required in the request body. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create custom content in the space.
     * Create custom content
     */
    async createCustomContentRaw(requestParameters: CreateCustomContentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomContent>> {
        if (requestParameters.createCustomContentRequest === null || requestParameters.createCustomContentRequest === undefined) {
            throw new runtime.RequiredError('createCustomContentRequest','Required parameter requestParameters.createCustomContentRequest was null or undefined when calling createCustomContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createCustomContentRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new custom content in the given space, page, blogpost or other custom content.  Only one of `spaceId`, `pageId`, `blogPostId`, or `customContentId` is required in the request body. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create custom content in the space.
     * Create custom content
     */
    async createCustomContent(requestParameters: CreateCustomContentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomContent> {
        const response = await this.createCustomContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a custom content by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to delete custom content in the space.
     * Delete custom content
     */
    async deleteCustomContentRaw(requestParameters: DeleteCustomContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCustomContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["delete:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a custom content by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to delete custom content in the space.
     * Delete custom content
     */
    async deleteCustomContent(requestParameters: DeleteCustomContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomContentRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a specific piece of custom content.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
     * Get custom content by id
     */
    async getCustomContentByIdRaw(requestParameters: GetCustomContentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomContent>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomContentById.');
        }

        const queryParameters: any = {};

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a specific piece of custom content.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
     * Get custom content by id
     */
    async getCustomContentById(requestParameters: GetCustomContentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomContent> {
        const response = await this.getCustomContentByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all custom content for a given type. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
     * Get custom content by type
     */
    async getCustomContentByTypeRaw(requestParameters: GetCustomContentByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultCustomContent>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getCustomContentByType.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.id) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all custom content for a given type. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
     * Get custom content by type
     */
    async getCustomContentByType(requestParameters: GetCustomContentByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultCustomContent> {
        const response = await this.getCustomContentByTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all custom content for a given type within a given blogpost. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content (blog post), and the corresponding space.
     * Get custom content by type in blog post
     */
    async getCustomContentByTypeInBlogPostRaw(requestParameters: GetCustomContentByTypeInBlogPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultCustomContent>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomContentByTypeInBlogPost.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getCustomContentByTypeInBlogPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/blogposts/{id}/custom-content`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all custom content for a given type within a given blogpost. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content (blog post), and the corresponding space.
     * Get custom content by type in blog post
     */
    async getCustomContentByTypeInBlogPost(requestParameters: GetCustomContentByTypeInBlogPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultCustomContent> {
        const response = await this.getCustomContentByTypeInBlogPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all custom content for a given type within a given page. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content (page), and the corresponding space.
     * Get custom content by type in page
     */
    async getCustomContentByTypeInPageRaw(requestParameters: GetCustomContentByTypeInPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultCustomContent>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomContentByTypeInPage.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getCustomContentByTypeInPage.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/pages/{id}/custom-content`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all custom content for a given type within a given page. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content (page), and the corresponding space.
     * Get custom content by type in page
     */
    async getCustomContentByTypeInPage(requestParameters: GetCustomContentByTypeInPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultCustomContent> {
        const response = await this.getCustomContentByTypeInPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all custom content for a given type within a given space. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and the corresponding space.
     * Get custom content by type in space
     */
    async getCustomContentByTypeInSpaceRaw(requestParameters: GetCustomContentByTypeInSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultCustomContent>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomContentByTypeInSpace.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getCustomContentByTypeInSpace.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{id}/custom-content`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all custom content for a given type within a given space. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and the corresponding space.
     * Get custom content by type in space
     */
    async getCustomContentByTypeInSpace(requestParameters: GetCustomContentByTypeInSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultCustomContent> {
        const response = await this.getCustomContentByTypeInSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a custom content by id.  `spaceId` is always required and maximum one of `pageId`, `blogPostId`, or `customContentId` is allowed in the request body. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to update custom content in the space.
     * Update custom content
     */
    async updateCustomContentRaw(requestParameters: UpdateCustomContentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomContent>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCustomContent.');
        }

        if (requestParameters.updateCustomContentRequest === null || requestParameters.updateCustomContentRequest === undefined) {
            throw new runtime.RequiredError('updateCustomContentRequest','Required parameter requestParameters.updateCustomContentRequest was null or undefined when calling updateCustomContent.');
        }

        const queryParameters: any = {};

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateCustomContentRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a custom content by id.  `spaceId` is always required and maximum one of `pageId`, `blogPostId`, or `customContentId` is allowed in the request body. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to update custom content in the space.
     * Update custom content
     */
    async updateCustomContent(requestParameters: UpdateCustomContentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomContent> {
        const response = await this.updateCustomContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}