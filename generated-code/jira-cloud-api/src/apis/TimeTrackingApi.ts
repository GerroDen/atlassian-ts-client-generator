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
  TimeTrackingConfiguration,
  TimeTrackingProvider,
} from '../models';

export interface SelectTimeTrackingImplementationRequest {
    timeTrackingProvider: TimeTrackingProvider;
}

export interface SetSharedTimeTrackingConfigurationRequest {
    timeTrackingConfiguration: TimeTrackingConfiguration;
}

/**
 * 
 */
export class TimeTrackingApi extends runtime.BaseAPI {

    /**
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all time tracking providers
     */
    async getAvailableTimeTrackingImplementationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TimeTrackingProvider>>> {
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
            path: `/rest/api/3/configuration/timetracking/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all time tracking providers
     */
    async getAvailableTimeTrackingImplementations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TimeTrackingProvider>> {
        const response = await this.getAvailableTimeTrackingImplementationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get selected time tracking provider
     */
    async getSelectedTimeTrackingImplementationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeTrackingProvider>> {
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
            path: `/rest/api/3/configuration/timetracking`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get selected time tracking provider
     */
    async getSelectedTimeTrackingImplementation(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeTrackingProvider> {
        const response = await this.getSelectedTimeTrackingImplementationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get time tracking settings
     */
    async getSharedTimeTrackingConfigurationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeTrackingConfiguration>> {
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
            path: `/rest/api/3/configuration/timetracking/options`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get time tracking settings
     */
    async getSharedTimeTrackingConfiguration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeTrackingConfiguration> {
        const response = await this.getSharedTimeTrackingConfigurationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Selects a time tracking provider.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Select time tracking provider
     */
    async selectTimeTrackingImplementationRaw(requestParameters: SelectTimeTrackingImplementationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.timeTrackingProvider === null || requestParameters.timeTrackingProvider === undefined) {
            throw new runtime.RequiredError('timeTrackingProvider','Required parameter requestParameters.timeTrackingProvider was null or undefined when calling selectTimeTrackingImplementation.');
        }

        const queryParameters: any = {};

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
            path: `/rest/api/3/configuration/timetracking`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.timeTrackingProvider,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Selects a time tracking provider.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Select time tracking provider
     */
    async selectTimeTrackingImplementation(requestParameters: SelectTimeTrackingImplementationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.selectTimeTrackingImplementationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the time tracking settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set time tracking settings
     */
    async setSharedTimeTrackingConfigurationRaw(requestParameters: SetSharedTimeTrackingConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeTrackingConfiguration>> {
        if (requestParameters.timeTrackingConfiguration === null || requestParameters.timeTrackingConfiguration === undefined) {
            throw new runtime.RequiredError('timeTrackingConfiguration','Required parameter requestParameters.timeTrackingConfiguration was null or undefined when calling setSharedTimeTrackingConfiguration.');
        }

        const queryParameters: any = {};

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
            path: `/rest/api/3/configuration/timetracking/options`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.timeTrackingConfiguration,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Sets the time tracking settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set time tracking settings
     */
    async setSharedTimeTrackingConfiguration(requestParameters: SetSharedTimeTrackingConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeTrackingConfiguration> {
        const response = await this.setSharedTimeTrackingConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}