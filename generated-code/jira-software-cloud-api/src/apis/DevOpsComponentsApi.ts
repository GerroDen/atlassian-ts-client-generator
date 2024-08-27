/* tslint:disable */
/* eslint-disable */
/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorMessage1,
  GetComponentById200Response,
  SubmitDevopsComponentsRequest,
  SubmitDevopsComponentsResponse,
} from '../models/index';

export interface DeleteComponentByIdRequest {
    authorization: string;
    componentId: string;
}

export interface DeleteComponentsByPropertyRequest {
    authorization: string;
}

export interface GetComponentByIdRequest {
    authorization: string;
    componentId: string;
}

export interface SubmitComponentsRequest {
    authorization: string;
    submitDevopsComponentsRequest: SubmitDevopsComponentsRequest;
}

/**
 * 
 */
export class DevOpsComponentsApi extends runtime.BaseAPI {

    /**
     * Delete the Component data currently stored for the given ID.  Deletion is performed asynchronously. The getComponentById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete a Component by ID
     */
    async deleteComponentByIdRaw(requestParameters: DeleteComponentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteComponentById().'
            );
        }

        if (requestParameters['componentId'] == null) {
            throw new runtime.RequiredError(
                'componentId',
                'Required parameter "componentId" was null or undefined when calling deleteComponentById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devopscomponents/1.0/{componentId}`.replace(`{${"componentId"}}`, encodeURIComponent(String(requestParameters['componentId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the Component data currently stored for the given ID.  Deletion is performed asynchronously. The getComponentById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete a Component by ID
     */
    async deleteComponentById(requestParameters: DeleteComponentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteComponentByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Bulk delete all Components that match the given request.  One or more query params must be supplied to specify Properties to delete by. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). See the documentation for the submitComponents operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456  Deletion is performed asynchronously. The getComponentById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete DevOps Components by Property
     */
    async deleteComponentsByPropertyRaw(requestParameters: DeleteComponentsByPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteComponentsByProperty().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devopscomponents/1.0/bulkByProperties`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk delete all Components that match the given request.  One or more query params must be supplied to specify Properties to delete by. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). See the documentation for the submitComponents operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456  Deletion is performed asynchronously. The getComponentById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete DevOps Components by Property
     */
    async deleteComponentsByProperty(requestParameters: DeleteComponentsByPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteComponentsByPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the currently stored Component data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'READ\' scope for Connect apps. 
     * Get a Component by ID
     */
    async getComponentByIdRaw(requestParameters: GetComponentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetComponentById200Response>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getComponentById().'
            );
        }

        if (requestParameters['componentId'] == null) {
            throw new runtime.RequiredError(
                'componentId',
                'Required parameter "componentId" was null or undefined when calling getComponentById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devopscomponents/1.0/{componentId}`.replace(`{${"componentId"}}`, encodeURIComponent(String(requestParameters['componentId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve the currently stored Component data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'READ\' scope for Connect apps. 
     * Get a Component by ID
     */
    async getComponentById(requestParameters: GetComponentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetComponentById200Response> {
        const response = await this.getComponentByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update / insert DevOps Component data.  Components are identified by their ID, and existing Component data for the same ID will be replaced if it exists and the updateSequenceNumber of existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getComponentById operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Components being submitted in one request, each is validated individually prior to submission. Details of which Components failed submission (if any) are available in the response object.  A maximum of 1000 components can be submitted in one request.  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'WRITE\' scope for Connect apps. 
     * Submit DevOps Components
     */
    async submitComponentsRaw(requestParameters: SubmitComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubmitDevopsComponentsResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling submitComponents().'
            );
        }

        if (requestParameters['submitDevopsComponentsRequest'] == null) {
            throw new runtime.RequiredError(
                'submitDevopsComponentsRequest',
                'Required parameter "submitDevopsComponentsRequest" was null or undefined when calling submitComponents().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devopscomponents/1.0/bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['submitDevopsComponentsRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update / insert DevOps Component data.  Components are identified by their ID, and existing Component data for the same ID will be replaced if it exists and the updateSequenceNumber of existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getComponentById operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Components being submitted in one request, each is validated individually prior to submission. Details of which Components failed submission (if any) are available in the response object.  A maximum of 1000 components can be submitted in one request.  Only Connect apps that define the `jiraDevOpsComponentProvider` module can access this resource. This resource requires the \'WRITE\' scope for Connect apps. 
     * Submit DevOps Components
     */
    async submitComponents(requestParameters: SubmitComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubmitDevopsComponentsResponse> {
        const response = await this.submitComponentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}