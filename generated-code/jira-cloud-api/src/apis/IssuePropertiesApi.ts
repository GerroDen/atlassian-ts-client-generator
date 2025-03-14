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
  BulkIssuePropertyUpdateRequest,
  EntityProperty,
  ErrorCollection,
  IssueEntityProperties,
  IssueFilterForBulkPropertyDelete,
  MultiIssueEntityProperties,
  PropertyKeys,
} from '../models/index';

export interface BulkDeleteIssuePropertyRequest {
    propertyKey: string;
    issueFilterForBulkPropertyDelete: IssueFilterForBulkPropertyDelete;
}

export interface BulkSetIssuePropertiesByIssueRequest {
    multiIssueEntityProperties: MultiIssueEntityProperties;
}

export interface BulkSetIssuePropertyRequest {
    propertyKey: string;
    bulkIssuePropertyUpdateRequest: BulkIssuePropertyUpdateRequest;
}

export interface BulkSetIssuesPropertiesListRequest {
    issueEntityProperties: IssueEntityProperties;
}

export interface DeleteIssuePropertyRequest {
    issueIdOrKey: string;
    propertyKey: string;
}

export interface GetIssuePropertyRequest {
    issueIdOrKey: string;
    propertyKey: string;
}

export interface GetIssuePropertyKeysRequest {
    issueIdOrKey: string;
}

export interface SetIssuePropertyRequest {
    issueIdOrKey: string;
    propertyKey: string;
    body: any | null;
}

/**
 * 
 */
export class IssuePropertiesApi extends runtime.BaseAPI {

    /**
     * Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.  The criteria the filter used to identify eligible issues are:   *  `entityIds` Only issues from this list are eligible.  *  `currentValue` Only issues with the property set to this value are eligible.  If both criteria is specified, they are joined with the logical *AND*: only issues that satisfy both criteria are considered eligible.  If no filter criteria are specified, all the issues visible to the user and where the user has the EDIT\\_ISSUES permission for the issue are considered eligible.  This operation is:   *  transactional, either the property is deleted from all eligible issues or, when errors occur, no properties are deleted.  *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* [ project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
     * Bulk delete issue property
     */
    async bulkDeleteIssuePropertyRaw(requestParameters: BulkDeleteIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling bulkDeleteIssueProperty().'
            );
        }

        if (requestParameters['issueFilterForBulkPropertyDelete'] == null) {
            throw new runtime.RequiredError(
                'issueFilterForBulkPropertyDelete',
                'Required parameter "issueFilterForBulkPropertyDelete" was null or undefined when calling bulkDeleteIssueProperty().'
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
            path: `/rest/api/3/issue/properties/{propertyKey}`.replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['issueFilterForBulkPropertyDelete'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.  The criteria the filter used to identify eligible issues are:   *  `entityIds` Only issues from this list are eligible.  *  `currentValue` Only issues with the property set to this value are eligible.  If both criteria is specified, they are joined with the logical *AND*: only issues that satisfy both criteria are considered eligible.  If no filter criteria are specified, all the issues visible to the user and where the user has the EDIT\\_ISSUES permission for the issue are considered eligible.  This operation is:   *  transactional, either the property is deleted from all eligible issues or, when errors occur, no properties are deleted.  *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* [ project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
     * Bulk delete issue property
     */
    async bulkDeleteIssueProperty(requestParameters: BulkDeleteIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bulkDeleteIssuePropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Sets or updates entity property values on issues. Up to 10 entity properties can be specified for each issue and up to 100 issues included in the request.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON.  This operation is:   *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  *  non-transactional. Updating some entities may fail. Such information will available in the task result.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Bulk set issue properties by issue
     */
    async bulkSetIssuePropertiesByIssueRaw(requestParameters: BulkSetIssuePropertiesByIssueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['multiIssueEntityProperties'] == null) {
            throw new runtime.RequiredError(
                'multiIssueEntityProperties',
                'Required parameter "multiIssueEntityProperties" was null or undefined when calling bulkSetIssuePropertiesByIssue().'
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
            path: `/rest/api/3/issue/properties/multi`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['multiIssueEntityProperties'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets or updates entity property values on issues. Up to 10 entity properties can be specified for each issue and up to 100 issues included in the request.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON.  This operation is:   *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  *  non-transactional. Updating some entities may fail. Such information will available in the task result.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Bulk set issue properties by issue
     */
    async bulkSetIssuePropertiesByIssue(requestParameters: BulkSetIssuePropertiesByIssueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bulkSetIssuePropertiesByIssueRaw(requestParameters, initOverrides);
    }

    /**
     * Sets a property value on multiple issues.  The value set can be a constant or determined by a [Jira expression](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/). Expressions must be computable with constant complexity when applied to a set of issues. Expressions must also comply with the [restrictions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions) that apply to all Jira expressions.  The issues to be updated can be specified by a filter.  The filter identifies issues eligible for update using these criteria:   *  `entityIds` Only issues from this list are eligible.  *  `currentValue` Only issues with the property set to this value are eligible.  *  `hasProperty`:           *  If *true*, only issues with the property are eligible.      *  If *false*, only issues without the property are eligible.  If more than one criteria is specified, they are joined with the logical *AND*: only issues that satisfy all criteria are eligible.  If an invalid combination of criteria is provided, an error is returned. For example, specifying a `currentValue` and `hasProperty` as *false* would not match any issues (because without the property the property cannot have a value).  The filter is optional. Without the filter all the issues visible to the user and where the user has the EDIT\\_ISSUES permission for the issue are considered eligible.  This operation is:   *  transactional, either all eligible issues are updated or, when errors occur, none are updated.  *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
     * Bulk set issue property
     */
    async bulkSetIssuePropertyRaw(requestParameters: BulkSetIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling bulkSetIssueProperty().'
            );
        }

        if (requestParameters['bulkIssuePropertyUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'bulkIssuePropertyUpdateRequest',
                'Required parameter "bulkIssuePropertyUpdateRequest" was null or undefined when calling bulkSetIssueProperty().'
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
            path: `/rest/api/3/issue/properties/{propertyKey}`.replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['bulkIssuePropertyUpdateRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets a property value on multiple issues.  The value set can be a constant or determined by a [Jira expression](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/). Expressions must be computable with constant complexity when applied to a set of issues. Expressions must also comply with the [restrictions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions) that apply to all Jira expressions.  The issues to be updated can be specified by a filter.  The filter identifies issues eligible for update using these criteria:   *  `entityIds` Only issues from this list are eligible.  *  `currentValue` Only issues with the property set to this value are eligible.  *  `hasProperty`:           *  If *true*, only issues with the property are eligible.      *  If *false*, only issues without the property are eligible.  If more than one criteria is specified, they are joined with the logical *AND*: only issues that satisfy all criteria are eligible.  If an invalid combination of criteria is provided, an error is returned. For example, specifying a `currentValue` and `hasProperty` as *false* would not match any issues (because without the property the property cannot have a value).  The filter is optional. Without the filter all the issues visible to the user and where the user has the EDIT\\_ISSUES permission for the issue are considered eligible.  This operation is:   *  transactional, either all eligible issues are updated or, when errors occur, none are updated.  *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
     * Bulk set issue property
     */
    async bulkSetIssueProperty(requestParameters: BulkSetIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bulkSetIssuePropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Sets or updates a list of entity property values on issues. A list of up to 10 entity properties can be specified along with up to 10,000 issues on which to set or update that list of entity properties.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON. The maximum length of single issue property value is 32768 characters. This operation can be accessed anonymously.  This operation is:   *  transactional, either all properties are updated in all eligible issues or, when errors occur, no properties are updated.  *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Bulk set issues properties by list
     */
    async bulkSetIssuesPropertiesListRaw(requestParameters: BulkSetIssuesPropertiesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['issueEntityProperties'] == null) {
            throw new runtime.RequiredError(
                'issueEntityProperties',
                'Required parameter "issueEntityProperties" was null or undefined when calling bulkSetIssuesPropertiesList().'
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
            path: `/rest/api/3/issue/properties`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['issueEntityProperties'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets or updates a list of entity property values on issues. A list of up to 10 entity properties can be specified along with up to 10,000 issues on which to set or update that list of entity properties.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON. The maximum length of single issue property value is 32768 characters. This operation can be accessed anonymously.  This operation is:   *  transactional, either all properties are updated in all eligible issues or, when errors occur, no properties are updated.  *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Bulk set issues properties by list
     */
    async bulkSetIssuesPropertiesList(requestParameters: BulkSetIssuesPropertiesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bulkSetIssuesPropertiesListRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes an issue\'s property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Delete issue property
     */
    async deleteIssuePropertyRaw(requestParameters: DeleteIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['issueIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'issueIdOrKey',
                'Required parameter "issueIdOrKey" was null or undefined when calling deleteIssueProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling deleteIssueProperty().'
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
            path: `/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters['issueIdOrKey']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an issue\'s property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Delete issue property
     */
    async deleteIssueProperty(requestParameters: DeleteIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIssuePropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the key and value of an issue\'s property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get issue property
     */
    async getIssuePropertyRaw(requestParameters: GetIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityProperty>> {
        if (requestParameters['issueIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'issueIdOrKey',
                'Required parameter "issueIdOrKey" was null or undefined when calling getIssueProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling getIssueProperty().'
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
            path: `/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters['issueIdOrKey']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the key and value of an issue\'s property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get issue property
     */
    async getIssueProperty(requestParameters: GetIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
        const response = await this.getIssuePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the URLs and keys of an issue\'s properties.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Property details are only returned where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get issue property keys
     */
    async getIssuePropertyKeysRaw(requestParameters: GetIssuePropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyKeys>> {
        if (requestParameters['issueIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'issueIdOrKey',
                'Required parameter "issueIdOrKey" was null or undefined when calling getIssuePropertyKeys().'
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
            path: `/rest/api/3/issue/{issueIdOrKey}/properties`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters['issueIdOrKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the URLs and keys of an issue\'s properties.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Property details are only returned where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get issue property keys
     */
    async getIssuePropertyKeys(requestParameters: GetIssuePropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
        const response = await this.getIssuePropertyKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the value of an issue\'s property. Use this resource to store custom data against an issue.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Set issue property
     */
    async setIssuePropertyRaw(requestParameters: SetIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['issueIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'issueIdOrKey',
                'Required parameter "issueIdOrKey" was null or undefined when calling setIssueProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling setIssueProperty().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling setIssueProperty().'
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
            path: `/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters['issueIdOrKey']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
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
     * Sets the value of an issue\'s property. Use this resource to store custom data against an issue.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Set issue property
     */
    async setIssueProperty(requestParameters: SetIssuePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setIssuePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
