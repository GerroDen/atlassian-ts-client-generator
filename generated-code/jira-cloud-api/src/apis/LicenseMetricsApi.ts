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
  ErrorCollection,
  License,
  LicenseMetric,
} from '../models/index';

export interface GetApproximateApplicationLicenseCountRequest {
    applicationKey: GetApproximateApplicationLicenseCountApplicationKeyEnum;
}

/**
 * 
 */
export class LicenseMetricsApi extends runtime.BaseAPI {

    /**
     * Returns the total approximate number of user accounts for a single Jira license. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate application license count
     */
    async getApproximateApplicationLicenseCountRaw(requestParameters: GetApproximateApplicationLicenseCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LicenseMetric>> {
        if (requestParameters['applicationKey'] == null) {
            throw new runtime.RequiredError(
                'applicationKey',
                'Required parameter "applicationKey" was null or undefined when calling getApproximateApplicationLicenseCount().'
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
            path: `/rest/api/3/license/approximateLicenseCount/product/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters['applicationKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the total approximate number of user accounts for a single Jira license. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate application license count
     */
    async getApproximateApplicationLicenseCount(requestParameters: GetApproximateApplicationLicenseCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LicenseMetric> {
        const response = await this.getApproximateApplicationLicenseCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the approximate number of user accounts across all Jira licenses. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate license count
     */
    async getApproximateLicenseCountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LicenseMetric>> {
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
            path: `/rest/api/3/license/approximateLicenseCount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the approximate number of user accounts across all Jira licenses. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate license count
     */
    async getApproximateLicenseCount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LicenseMetric> {
        const response = await this.getApproximateLicenseCountRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns licensing information about the Jira instance.  **[Permissions](#permissions) required:** None.
     * Get license
     */
    async getLicenseRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<License>> {
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
            path: `/rest/api/3/instance/license`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns licensing information about the Jira instance.  **[Permissions](#permissions) required:** None.
     * Get license
     */
    async getLicense(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<License> {
        const response = await this.getLicenseRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetApproximateApplicationLicenseCountApplicationKeyEnum = {
    Core: 'jira-core',
    ProductDiscovery: 'jira-product-discovery',
    Software: 'jira-software',
    Servicedesk: 'jira-servicedesk'
} as const;
export type GetApproximateApplicationLicenseCountApplicationKeyEnum = typeof GetApproximateApplicationLicenseCountApplicationKeyEnum[keyof typeof GetApproximateApplicationLicenseCountApplicationKeyEnum];
