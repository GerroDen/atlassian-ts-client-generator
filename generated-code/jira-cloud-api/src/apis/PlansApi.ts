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
  CreatePlanRequest,
  DuplicatePlanRequest,
  ErrorCollection,
  GetPlanResponse,
  PageWithCursorGetPlanResponseForPage,
} from '../models/index';

export interface ArchivePlanRequest {
    planId: number;
}

export interface CreatePlanOperationRequest {
    createPlanRequest: CreatePlanRequest;
    useGroupId?: boolean;
}

export interface DuplicatePlanOperationRequest {
    planId: number;
    duplicatePlanRequest: DuplicatePlanRequest;
}

export interface GetPlanRequest {
    planId: number;
    useGroupId?: boolean;
}

export interface GetPlansRequest {
    includeTrashed?: boolean;
    includeArchived?: boolean;
    cursor?: string;
    maxResults?: number;
}

export interface TrashPlanRequest {
    planId: number;
}

export interface UpdatePlanRequest {
    planId: number;
    body: object;
    useGroupId?: boolean;
}

/**
 * 
 */
export class PlansApi extends runtime.BaseAPI {

    /**
     * Archives a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Archive plan
     */
    async archivePlanRaw(requestParameters: ArchivePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['planId'] == null) {
            throw new runtime.RequiredError(
                'planId',
                'Required parameter "planId" was null or undefined when calling archivePlan().'
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
            path: `/rest/api/3/plans/plan/{planId}/archive`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters['planId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Archives a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Archive plan
     */
    async archivePlan(requestParameters: ArchivePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.archivePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create plan
     */
    async createPlanRaw(requestParameters: CreatePlanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['createPlanRequest'] == null) {
            throw new runtime.RequiredError(
                'createPlanRequest',
                'Required parameter "createPlanRequest" was null or undefined when calling createPlan().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['useGroupId'] != null) {
            queryParameters['useGroupId'] = requestParameters['useGroupId'];
        }

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
            path: `/rest/api/3/plans/plan`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['createPlanRequest'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Creates a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create plan
     */
    async createPlan(requestParameters: CreatePlanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.createPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Duplicates a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Duplicate plan
     */
    async duplicatePlanRaw(requestParameters: DuplicatePlanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['planId'] == null) {
            throw new runtime.RequiredError(
                'planId',
                'Required parameter "planId" was null or undefined when calling duplicatePlan().'
            );
        }

        if (requestParameters['duplicatePlanRequest'] == null) {
            throw new runtime.RequiredError(
                'duplicatePlanRequest',
                'Required parameter "duplicatePlanRequest" was null or undefined when calling duplicatePlan().'
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
            path: `/rest/api/3/plans/plan/{planId}/duplicate`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters['planId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['duplicatePlanRequest'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Duplicates a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Duplicate plan
     */
    async duplicatePlan(requestParameters: DuplicatePlanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.duplicatePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get plan
     */
    async getPlanRaw(requestParameters: GetPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlanResponse>> {
        if (requestParameters['planId'] == null) {
            throw new runtime.RequiredError(
                'planId',
                'Required parameter "planId" was null or undefined when calling getPlan().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['useGroupId'] != null) {
            queryParameters['useGroupId'] = requestParameters['useGroupId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/plans/plan/{planId}`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters['planId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get plan
     */
    async getPlan(requestParameters: GetPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlanResponse> {
        const response = await this.getPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of plans.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get plans paginated
     */
    async getPlansRaw(requestParameters: GetPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageWithCursorGetPlanResponseForPage>> {
        const queryParameters: any = {};

        if (requestParameters['includeTrashed'] != null) {
            queryParameters['includeTrashed'] = requestParameters['includeTrashed'];
        }

        if (requestParameters['includeArchived'] != null) {
            queryParameters['includeArchived'] = requestParameters['includeArchived'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/plans/plan`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of plans.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get plans paginated
     */
    async getPlans(requestParameters: GetPlansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageWithCursorGetPlanResponseForPage> {
        const response = await this.getPlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Moves a plan to trash.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Trash plan
     */
    async trashPlanRaw(requestParameters: TrashPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['planId'] == null) {
            throw new runtime.RequiredError(
                'planId',
                'Required parameter "planId" was null or undefined when calling trashPlan().'
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
            path: `/rest/api/3/plans/plan/{planId}/trash`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters['planId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Moves a plan to trash.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Trash plan
     */
    async trashPlan(requestParameters: TrashPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.trashPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates any of the following details of a plan using [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902).   *  name  *  leadAccountId  *  scheduling           *  estimation with StoryPoints, Days or Hours as possible values      *  startDate                   *  type with DueDate, TargetStartDate, TargetEndDate or DateCustomField as possible values          *  dateCustomFieldId      *  endDate                   *  type with DueDate, TargetStartDate, TargetEndDate or DateCustomField as possible values          *  dateCustomFieldId      *  inferredDates with None, SprintDates or ReleaseDates as possible values      *  dependencies with Sequential or Concurrent as possible values  *  issueSources           *  type with Board, Project or Filter as possible values      *  value  *  exclusionRules           *  numberOfDaysToShowCompletedIssues      *  issueIds      *  workStatusIds      *  workStatusCategoryIds      *  issueTypeIds      *  releaseIds  *  crossProjectReleases           *  name      *  releaseIds  *  customFields           *  customFieldId      *  filter  *  permissions           *  type with View or Edit as possible values      *  holder                   *  type with Group or AccountId as possible values          *  value  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *Note that \"add\" operations do not respect array indexes in target locations. Call the \"Get plan\" endpoint to find out the order of array elements.*
     * Update plan
     */
    async updatePlanRaw(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['planId'] == null) {
            throw new runtime.RequiredError(
                'planId',
                'Required parameter "planId" was null or undefined when calling updatePlan().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updatePlan().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['useGroupId'] != null) {
            queryParameters['useGroupId'] = requestParameters['useGroupId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/plans/plan/{planId}`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters['planId']))),
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
     * Updates any of the following details of a plan using [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902).   *  name  *  leadAccountId  *  scheduling           *  estimation with StoryPoints, Days or Hours as possible values      *  startDate                   *  type with DueDate, TargetStartDate, TargetEndDate or DateCustomField as possible values          *  dateCustomFieldId      *  endDate                   *  type with DueDate, TargetStartDate, TargetEndDate or DateCustomField as possible values          *  dateCustomFieldId      *  inferredDates with None, SprintDates or ReleaseDates as possible values      *  dependencies with Sequential or Concurrent as possible values  *  issueSources           *  type with Board, Project or Filter as possible values      *  value  *  exclusionRules           *  numberOfDaysToShowCompletedIssues      *  issueIds      *  workStatusIds      *  workStatusCategoryIds      *  issueTypeIds      *  releaseIds  *  crossProjectReleases           *  name      *  releaseIds  *  customFields           *  customFieldId      *  filter  *  permissions           *  type with View or Edit as possible values      *  holder                   *  type with Group or AccountId as possible values          *  value  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *Note that \"add\" operations do not respect array indexes in target locations. Call the \"Get plan\" endpoint to find out the order of array elements.*
     * Update plan
     */
    async updatePlan(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updatePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
