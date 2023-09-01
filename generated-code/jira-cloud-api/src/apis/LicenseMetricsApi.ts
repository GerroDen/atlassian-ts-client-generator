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
  LicenseMetric,
} from '../models';

export interface GetApproximateApplicationLicenseCountRequest {
    applicationKey: string;
}

/**
 * 
 */
export class LicenseMetricsApi extends runtime.BaseAPI {

    /**
     * Returns the total approximate user account for a specific `jira licence application key`. Please note this information is cached with a 7-day lifecycle and could be stale at the time of call.  #### Application Key ####  An application key represents a specific version of Jira. See \\{@link ApplicationKey\\} for details  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate application license count
     */
    async getApproximateApplicationLicenseCountRaw(requestParameters: GetApproximateApplicationLicenseCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LicenseMetric>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling getApproximateApplicationLicenseCount.');
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
            path: `/rest/api/3/license/approximateLicenseCount/product/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the total approximate user account for a specific `jira licence application key`. Please note this information is cached with a 7-day lifecycle and could be stale at the time of call.  #### Application Key ####  An application key represents a specific version of Jira. See \\{@link ApplicationKey\\} for details  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate application license count
     */
    async getApproximateApplicationLicenseCount(requestParameters: GetApproximateApplicationLicenseCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LicenseMetric> {
        const response = await this.getApproximateApplicationLicenseCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the total approximate user account across all jira licenced application keys. Please note this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
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
     * Returns the total approximate user account across all jira licenced application keys. Please note this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get approximate license count
     */
    async getApproximateLicenseCount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LicenseMetric> {
        const response = await this.getApproximateLicenseCountRaw(initOverrides);
        return await response.value();
    }

}