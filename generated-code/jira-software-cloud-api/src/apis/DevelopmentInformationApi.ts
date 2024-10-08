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
  DevInformation,
  ErrorMessages,
  ExistsForPropertiesResponse,
  Repository,
  StoreDevinfoResult,
} from '../models/index';

export interface DeleteByPropertiesRequest {
    authorization: string;
    updateSequenceId?: number;
}

export interface DeleteEntityRequest {
    repositoryId: string;
    entityType: DeleteEntityEntityTypeEnum;
    entityId: string;
    authorization: string;
    updateSequenceId?: number;
}

export interface DeleteRepositoryRequest {
    repositoryId: string;
    authorization: string;
    updateSequenceId?: number;
}

export interface ExistsByPropertiesRequest {
    authorization: string;
    updateSequenceId?: number;
}

export interface GetRepositoryRequest {
    repositoryId: string;
    authorization: string;
}

export interface StoreDevelopmentInformationRequest {
    authorization: string;
    devInformation: DevInformation;
}

/**
 * 
 */
export class DevelopmentInformationApi extends runtime.BaseAPI {

    /**
     * Deletes development information entities which have all the provided properties. Repositories which have properties that match ALL of the properties (i.e. treated as an AND), and all their related development information (such as commits, branches and pull requests), will be deleted. For example if request is `DELETE bulk?accountId=123&projectId=ABC` entities which have properties `accountId=123` and `projectId=ABC` will be deleted. Optional param `_updateSequenceId` is no longer supported. Deletion is performed asynchronously: specified entities will eventually be removed from Jira. 
     * Delete development information by properties
     */
    async deleteByPropertiesRaw(requestParameters: DeleteByPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteByProperties().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['updateSequenceId'] != null) {
            queryParameters['_updateSequenceId'] = requestParameters['updateSequenceId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devinfo/0.10/bulkByProperties`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes development information entities which have all the provided properties. Repositories which have properties that match ALL of the properties (i.e. treated as an AND), and all their related development information (such as commits, branches and pull requests), will be deleted. For example if request is `DELETE bulk?accountId=123&projectId=ABC` entities which have properties `accountId=123` and `projectId=ABC` will be deleted. Optional param `_updateSequenceId` is no longer supported. Deletion is performed asynchronously: specified entities will eventually be removed from Jira. 
     * Delete development information by properties
     */
    async deleteByProperties(requestParameters: DeleteByPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteByPropertiesRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes particular development information entity. Deletion is performed asynchronously.
     * Delete development information entity
     */
    async deleteEntityRaw(requestParameters: DeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['repositoryId'] == null) {
            throw new runtime.RequiredError(
                'repositoryId',
                'Required parameter "repositoryId" was null or undefined when calling deleteEntity().'
            );
        }

        if (requestParameters['entityType'] == null) {
            throw new runtime.RequiredError(
                'entityType',
                'Required parameter "entityType" was null or undefined when calling deleteEntity().'
            );
        }

        if (requestParameters['entityId'] == null) {
            throw new runtime.RequiredError(
                'entityId',
                'Required parameter "entityId" was null or undefined when calling deleteEntity().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteEntity().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['updateSequenceId'] != null) {
            queryParameters['_updateSequenceId'] = requestParameters['updateSequenceId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devinfo/0.10/repository/{repositoryId}/{entityType}/{entityId}`.replace(`{${"repositoryId"}}`, encodeURIComponent(String(requestParameters['repositoryId']))).replace(`{${"entityType"}}`, encodeURIComponent(String(requestParameters['entityType']))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters['entityId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes particular development information entity. Deletion is performed asynchronously.
     * Delete development information entity
     */
    async deleteEntity(requestParameters: DeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEntityRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes the repository data stored by the given ID and all related development information entities. Deletion is performed asynchronously.
     * Delete repository
     */
    async deleteRepositoryRaw(requestParameters: DeleteRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['repositoryId'] == null) {
            throw new runtime.RequiredError(
                'repositoryId',
                'Required parameter "repositoryId" was null or undefined when calling deleteRepository().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteRepository().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['updateSequenceId'] != null) {
            queryParameters['_updateSequenceId'] = requestParameters['updateSequenceId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devinfo/0.10/repository/{repositoryId}`.replace(`{${"repositoryId"}}`, encodeURIComponent(String(requestParameters['repositoryId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the repository data stored by the given ID and all related development information entities. Deletion is performed asynchronously.
     * Delete repository
     */
    async deleteRepository(requestParameters: DeleteRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRepositoryRaw(requestParameters, initOverrides);
    }

    /**
     * Checks if repositories which have all the provided properties exists. For example, if request is `GET existsByProperties?accountId=123&projectId=ABC` then result will be positive only if there is at least one repository with both properties `accountId=123` and `projectId=ABC`. Special property `_updateSequenceId` can be used to filter all entities with updateSequenceId less or equal than the value specified. In addition to the optional `_updateSequenceId`, one or more query params must be supplied to specify properties to search by. 
     * Check if data exists for the supplied properties
     */
    async existsByPropertiesRaw(requestParameters: ExistsByPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExistsForPropertiesResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling existsByProperties().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['updateSequenceId'] != null) {
            queryParameters['_updateSequenceId'] = requestParameters['updateSequenceId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devinfo/0.10/existsByProperties`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Checks if repositories which have all the provided properties exists. For example, if request is `GET existsByProperties?accountId=123&projectId=ABC` then result will be positive only if there is at least one repository with both properties `accountId=123` and `projectId=ABC`. Special property `_updateSequenceId` can be used to filter all entities with updateSequenceId less or equal than the value specified. In addition to the optional `_updateSequenceId`, one or more query params must be supplied to specify properties to search by. 
     * Check if data exists for the supplied properties
     */
    async existsByProperties(requestParameters: ExistsByPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExistsForPropertiesResponse> {
        const response = await this.existsByPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * For the specified repository ID, retrieves the repository and the most recent 400 development information entities. The result will be what is currently stored, ignoring any pending updates or deletes.
     * Get repository
     */
    async getRepositoryRaw(requestParameters: GetRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Repository>> {
        if (requestParameters['repositoryId'] == null) {
            throw new runtime.RequiredError(
                'repositoryId',
                'Required parameter "repositoryId" was null or undefined when calling getRepository().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getRepository().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devinfo/0.10/repository/{repositoryId}`.replace(`{${"repositoryId"}}`, encodeURIComponent(String(requestParameters['repositoryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * For the specified repository ID, retrieves the repository and the most recent 400 development information entities. The result will be what is currently stored, ignoring any pending updates or deletes.
     * Get repository
     */
    async getRepository(requestParameters: GetRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Repository> {
        const response = await this.getRepositoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stores development information provided in the request to make it available when viewing issues in Jira. Existing repository and entity data for the same ID will be replaced if the updateSequenceId of existing data is less than the incoming data. Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times.
     * Store development information
     */
    async storeDevelopmentInformationRaw(requestParameters: StoreDevelopmentInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StoreDevinfoResult>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling storeDevelopmentInformation().'
            );
        }

        if (requestParameters['devInformation'] == null) {
            throw new runtime.RequiredError(
                'devInformation',
                'Required parameter "devInformation" was null or undefined when calling storeDevelopmentInformation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/rest/devinfo/0.10/bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['devInformation'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Stores development information provided in the request to make it available when viewing issues in Jira. Existing repository and entity data for the same ID will be replaced if the updateSequenceId of existing data is less than the incoming data. Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times.
     * Store development information
     */
    async storeDevelopmentInformation(requestParameters: StoreDevelopmentInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StoreDevinfoResult> {
        const response = await this.storeDevelopmentInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const DeleteEntityEntityTypeEnum = {
    Commit: 'commit',
    Branch: 'branch',
    PullRequest: 'pull_request'
} as const;
export type DeleteEntityEntityTypeEnum = typeof DeleteEntityEntityTypeEnum[keyof typeof DeleteEntityEntityTypeEnum];
