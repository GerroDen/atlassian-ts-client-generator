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
  MultiEntityResultAncestor,
} from '../models';

export interface GetPageAncestorsRequest {
    id: number;
    limit?: number;
}

/**
 * 
 */
export class AncestorsApi extends runtime.BaseAPI {

    /**
     * Returns all ancestors for a given page by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get all ancestors of page
     */
    async getPageAncestorsRaw(requestParameters: GetPageAncestorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultAncestor>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPageAncestors.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", []);
        }

        const response = await this.request({
            path: `/pages/{id}/ancestors`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all ancestors for a given page by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get all ancestors of page
     */
    async getPageAncestors(requestParameters: GetPageAncestorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultAncestor> {
        const response = await this.getPageAncestorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}