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
  ConnectCustomFieldValues,
  EntityPropertyDetails,
  WorkflowRulesSearch,
  WorkflowRulesSearchDetails,
} from '../models';

export interface AppIssueFieldValueUpdateResourceUpdateIssueFieldsPutRequest {
    atlassianTransferId: string;
    connectCustomFieldValues: ConnectCustomFieldValues;
}

export interface MigrationResourceUpdateEntityPropertiesValuePutRequest {
    atlassianTransferId: string;
    entityType: MigrationResourceUpdateEntityPropertiesValuePutEntityTypeEnum;
    entityPropertyDetails: Array<EntityPropertyDetails>;
}

export interface MigrationResourceWorkflowRuleSearchPostRequest {
    atlassianTransferId: string;
    workflowRulesSearch: WorkflowRulesSearch;
}

/**
 * 
 */
export class AppMigrationApi extends runtime.BaseAPI {

    /**
     * Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom fields can be updated.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Bulk update custom field value
     */
    async appIssueFieldValueUpdateResourceUpdateIssueFieldsPutRaw(requestParameters: AppIssueFieldValueUpdateResourceUpdateIssueFieldsPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.atlassianTransferId === null || requestParameters.atlassianTransferId === undefined) {
            throw new runtime.RequiredError('atlassianTransferId','Required parameter requestParameters.atlassianTransferId was null or undefined when calling appIssueFieldValueUpdateResourceUpdateIssueFieldsPut.');
        }

        if (requestParameters.connectCustomFieldValues === null || requestParameters.connectCustomFieldValues === undefined) {
            throw new runtime.RequiredError('connectCustomFieldValues','Required parameter requestParameters.connectCustomFieldValues was null or undefined when calling appIssueFieldValueUpdateResourceUpdateIssueFieldsPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.atlassianTransferId !== undefined && requestParameters.atlassianTransferId !== null) {
            headerParameters['Atlassian-Transfer-Id'] = String(requestParameters.atlassianTransferId);
        }

        const response = await this.request({
            path: `/rest/atlassian-connect/1/migration/field`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.connectCustomFieldValues,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom fields can be updated.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Bulk update custom field value
     */
    async appIssueFieldValueUpdateResourceUpdateIssueFieldsPut(requestParameters: AppIssueFieldValueUpdateResourceUpdateIssueFieldsPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.appIssueFieldValueUpdateResourceUpdateIssueFieldsPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the values of multiple entity properties for an object, up to 50 updates per request. This operation is for use by Connect apps during app migration.
     * Bulk update entity properties
     */
    async migrationResourceUpdateEntityPropertiesValuePutRaw(requestParameters: MigrationResourceUpdateEntityPropertiesValuePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.atlassianTransferId === null || requestParameters.atlassianTransferId === undefined) {
            throw new runtime.RequiredError('atlassianTransferId','Required parameter requestParameters.atlassianTransferId was null or undefined when calling migrationResourceUpdateEntityPropertiesValuePut.');
        }

        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling migrationResourceUpdateEntityPropertiesValuePut.');
        }

        if (requestParameters.entityPropertyDetails === null || requestParameters.entityPropertyDetails === undefined) {
            throw new runtime.RequiredError('entityPropertyDetails','Required parameter requestParameters.entityPropertyDetails was null or undefined when calling migrationResourceUpdateEntityPropertiesValuePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.atlassianTransferId !== undefined && requestParameters.atlassianTransferId !== null) {
            headerParameters['Atlassian-Transfer-Id'] = String(requestParameters.atlassianTransferId);
        }

        const response = await this.request({
            path: `/rest/atlassian-connect/1/migration/properties/{entityType}`.replace(`{${"entityType"}}`, encodeURIComponent(String(requestParameters.entityType))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.entityPropertyDetails,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the values of multiple entity properties for an object, up to 50 updates per request. This operation is for use by Connect apps during app migration.
     * Bulk update entity properties
     */
    async migrationResourceUpdateEntityPropertiesValuePut(requestParameters: MigrationResourceUpdateEntityPropertiesValuePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.migrationResourceUpdateEntityPropertiesValuePutRaw(requestParameters, initOverrides);
    }

    /**
     * Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app.
     * Get workflow transition rule configurations
     */
    async migrationResourceWorkflowRuleSearchPostRaw(requestParameters: MigrationResourceWorkflowRuleSearchPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowRulesSearchDetails>> {
        if (requestParameters.atlassianTransferId === null || requestParameters.atlassianTransferId === undefined) {
            throw new runtime.RequiredError('atlassianTransferId','Required parameter requestParameters.atlassianTransferId was null or undefined when calling migrationResourceWorkflowRuleSearchPost.');
        }

        if (requestParameters.workflowRulesSearch === null || requestParameters.workflowRulesSearch === undefined) {
            throw new runtime.RequiredError('workflowRulesSearch','Required parameter requestParameters.workflowRulesSearch was null or undefined when calling migrationResourceWorkflowRuleSearchPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.atlassianTransferId !== undefined && requestParameters.atlassianTransferId !== null) {
            headerParameters['Atlassian-Transfer-Id'] = String(requestParameters.atlassianTransferId);
        }

        const response = await this.request({
            path: `/rest/atlassian-connect/1/migration/workflow/rule/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.workflowRulesSearch,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app.
     * Get workflow transition rule configurations
     */
    async migrationResourceWorkflowRuleSearchPost(requestParameters: MigrationResourceWorkflowRuleSearchPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowRulesSearchDetails> {
        const response = await this.migrationResourceWorkflowRuleSearchPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const MigrationResourceUpdateEntityPropertiesValuePutEntityTypeEnum = {
    IssueProperty: 'IssueProperty',
    CommentProperty: 'CommentProperty',
    DashboardItemProperty: 'DashboardItemProperty',
    IssueTypeProperty: 'IssueTypeProperty',
    ProjectProperty: 'ProjectProperty',
    UserProperty: 'UserProperty',
    WorklogProperty: 'WorklogProperty',
    BoardProperty: 'BoardProperty',
    SprintProperty: 'SprintProperty'
} as const;
export type MigrationResourceUpdateEntityPropertiesValuePutEntityTypeEnum = typeof MigrationResourceUpdateEntityPropertiesValuePutEntityTypeEnum[keyof typeof MigrationResourceUpdateEntityPropertiesValuePutEntityTypeEnum];