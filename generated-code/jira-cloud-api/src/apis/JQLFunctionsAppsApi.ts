/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b3300bcdd36d8c214940b3035162ea6fa1d58aa8
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  JqlFunctionPrecomputationUpdateRequestBean,
  PageBeanJqlFunctionPrecomputationBean,
} from '../models/index';

export interface GetPrecomputationsRequest {
    functionKey?: Array<string>;
    startAt?: number;
    maxResults?: number;
    orderBy?: string;
}

export interface UpdatePrecomputationsRequest {
    jqlFunctionPrecomputationUpdateRequestBean: JqlFunctionPrecomputationUpdateRequestBean;
}

/**
 * 
 */
export class JQLFunctionsAppsApi extends runtime.BaseAPI {

    /**
     * Returns the list of a function\'s precomputations along with information about when they were created, updated, and last used. Each precomputation has a `value` \\- the JQL fragment to replace the custom function clause with.  **[Permissions](#permissions) required:** This API is only accessible to apps and apps can only inspect their own functions.  The new `read:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Get precomputations (apps)
     */
    async getPrecomputationsRaw(requestParameters: GetPrecomputationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanJqlFunctionPrecomputationBean>> {
        const queryParameters: any = {};

        if (requestParameters['functionKey'] != null) {
            queryParameters['functionKey'] = requestParameters['functionKey'];
        }

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['orderBy'] = requestParameters['orderBy'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/jql/function/computation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the list of a function\'s precomputations along with information about when they were created, updated, and last used. Each precomputation has a `value` \\- the JQL fragment to replace the custom function clause with.  **[Permissions](#permissions) required:** This API is only accessible to apps and apps can only inspect their own functions.  The new `read:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Get precomputations (apps)
     */
    async getPrecomputations(requestParameters: GetPrecomputationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanJqlFunctionPrecomputationBean> {
        const response = await this.getPrecomputationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the precomputation value of a function created by a Forge/Connect app.  **[Permissions](#permissions) required:** An API for apps to update their own precomputations.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Update precomputations (apps)
     */
    async updatePrecomputationsRaw(requestParameters: UpdatePrecomputationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['jqlFunctionPrecomputationUpdateRequestBean'] == null) {
            throw new runtime.RequiredError(
                'jqlFunctionPrecomputationUpdateRequestBean',
                'Required parameter "jqlFunctionPrecomputationUpdateRequestBean" was null or undefined when calling updatePrecomputations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/jql/function/computation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['jqlFunctionPrecomputationUpdateRequestBean'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update the precomputation value of a function created by a Forge/Connect app.  **[Permissions](#permissions) required:** An API for apps to update their own precomputations.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Update precomputations (apps)
     */
    async updatePrecomputations(requestParameters: UpdatePrecomputationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updatePrecomputationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
