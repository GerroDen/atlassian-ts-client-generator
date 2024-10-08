/* tslint:disable */
/* eslint-disable */
/**
 * Service Management Public REST API
 * Public REST API for Jira Service Management
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b3300bcdd36d8c214940b3035162ea6fa1d58aa8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  PagedDTOArticleDTO,
} from '../models/index';

export interface GetArticlesRequest {
    query: string;
    highlight: boolean;
    start?: number;
    limit?: number;
}

/**
 * 
 */
export class KnowledgebaseApi extends runtime.BaseAPI {

    /**
     * Returns articles which match the given query string across all service desks.  **[Permissions](#permissions) required**: Permission to access the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).
     * Get articles
     */
    async getArticlesRaw(requestParameters: GetArticlesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedDTOArticleDTO>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling getArticles().'
            );
        }

        if (requestParameters['highlight'] == null) {
            throw new runtime.RequiredError(
                'highlight',
                'Required parameter "highlight" was null or undefined when calling getArticles().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['highlight'] != null) {
            queryParameters['highlight'] = requestParameters['highlight'];
        }

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:servicedesk-request"]);
        }

        const response = await this.request({
            path: `/rest/servicedeskapi/knowledgebase/article`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns articles which match the given query string across all service desks.  **[Permissions](#permissions) required**: Permission to access the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).
     * Get articles
     */
    async getArticles(requestParameters: GetArticlesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedDTOArticleDTO> {
        const response = await this.getArticlesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
