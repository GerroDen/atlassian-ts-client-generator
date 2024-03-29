/* tslint:disable */
/* eslint-disable */
/**
 * Bitbucket Server
 * This is the reference document for the Atlassian Bitbucket REST API. The REST API is for developers who want to:    - integrate Bitbucket with other applications;   - create scripts that interact with Bitbucket; or   - develop plugins that enhance the Bitbucket UI, using REST to interact with the backend.    You can read more about developing Bitbucket plugins in the [Bitbucket Developer Documentation](https://developer.atlassian.com/bitbucket/server/docs/latest/).
 *
 * The version of the OpenAPI document: 8.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  EnrichedRepository,
  GetAll401Response,
  GetAllReposForProject200Response,
  ListMirrors200Response,
  ListRequests200Response,
  RestAnalyticsSettings,
  RestApplicationUserWithPermissions,
  RestAuthenticationRequest,
  RestMirrorServer,
  RestMirrorUpgradeRequest,
  RestMirroredRepositoryDescriptor,
  RestMirroringRequest,
  RestProject,
  RestRepositoryMirrorEvent,
} from '../models';

interface DeleteRequest {
    mirroringRequestId: string;
}

interface AcceptRequest {
    mirroringRequestId: string;
}

interface AuthenticateRequest {
    restAuthenticationRequest?: RestAuthenticationRequest;
}

interface GetRequest {
    mirroringRequestId: string;
}

interface Get1Request {
    mirrorId: string;
}

interface GetAllRequest {
    includeDefaultBranch?: GetAllIncludeDefaultBranchEnum;
}

interface GetAllReposForProjectRequest {
    projectId: string;
    includeDefaultBranch?: GetAllReposForProjectIncludeDefaultBranchEnum;
    start?: number;
    limit?: number;
}

interface GetByIdRequest {
    projectId: string;
}

interface GetById1Request {
    repoId: string;
    includeDefaultBranch?: boolean;
}

interface GetMirrorRequest {
    mirrorId: string;
}

interface GetRepositoryMirrorsRequest {
    repoId: string;
}

interface ListMirrorsRequest {
    start?: number;
    limit?: number;
}

interface ListRequestsRequest {
    state?: ListRequestsStateEnum;
    start?: number;
    limit?: number;
}

interface PublishEventRequest {
    mirrorId: string;
    restRepositoryMirrorEvent?: RestRepositoryMirrorEvent;
}

interface RegisterRequest {
    restMirroringRequest?: RestMirroringRequest;
}

interface RejectRequest {
    mirroringRequestId: string;
}

interface RemoveRequest {
    mirrorId: string;
}

interface SetPreferredMirrorIdRequest {
    body?: string;
}

interface UpgradeRequest {
    mirrorId: string;
    restMirrorUpgradeRequest?: RestMirrorUpgradeRequest;
}

/**
 * 
 */
export class MirroringUpstreamApi extends runtime.BaseAPI {

    /**
     * Deletes a mirroring request
     * Delete a mirroring request
     */
    async _deleteRaw(requestParameters: DeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mirroringRequestId === null || requestParameters.mirroringRequestId === undefined) {
            throw new runtime.RequiredError('mirroringRequestId','Required parameter requestParameters.mirroringRequestId was null or undefined when calling _delete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/requests/{mirroringRequestId}`.replace(`{${"mirroringRequestId"}}`, encodeURIComponent(String(requestParameters.mirroringRequestId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a mirroring request
     * Delete a mirroring request
     */
    async _delete(requestParameters: DeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this._deleteRaw(requestParameters, initOverrides);
    }

    /**
     * Accepts a mirroring request
     * Accept a mirroring request
     */
    async acceptRaw(requestParameters: AcceptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirrorServer>> {
        if (requestParameters.mirroringRequestId === null || requestParameters.mirroringRequestId === undefined) {
            throw new runtime.RequiredError('mirroringRequestId','Required parameter requestParameters.mirroringRequestId was null or undefined when calling accept.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/requests/{mirroringRequestId}/accept`.replace(`{${"mirroringRequestId"}}`, encodeURIComponent(String(requestParameters.mirroringRequestId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Accepts a mirroring request
     * Accept a mirroring request
     */
    async accept(requestParameters: AcceptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirrorServer> {
        const response = await this.acceptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async analyticsSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAnalyticsSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/analyticsSettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async analyticsSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAnalyticsSettings> {
        const response = await this.analyticsSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Authenticates on behalf of a user. Used by mirrors to check the credentials supplied to them by users. If successful a user and their effective permissions is returned. Currently only username/password and SSH credentials are supported.
     */
    async authenticateRaw(requestParameters: AuthenticateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestApplicationUserWithPermissions>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mirroring/latest/authenticate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.restAuthenticationRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Authenticates on behalf of a user. Used by mirrors to check the credentials supplied to them by users. If successful a user and their effective permissions is returned. Currently only username/password and SSH credentials are supported.
     */
    async authenticate(requestParameters: AuthenticateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestApplicationUserWithPermissions> {
        const response = await this.authenticateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes the current user\'s preferred mirror
     * Remove preferred mirror
     */
    async deletePreferredMirrorIdRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/account/settings/preferred-mirror`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes the current user\'s preferred mirror
     * Remove preferred mirror
     */
    async deletePreferredMirrorId(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePreferredMirrorIdRaw(initOverrides);
    }

    /**
     * Retrieves a mirroring request
     * Get a mirroring request
     */
    async getRaw(requestParameters: GetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirroringRequest>> {
        if (requestParameters.mirroringRequestId === null || requestParameters.mirroringRequestId === undefined) {
            throw new runtime.RequiredError('mirroringRequestId','Required parameter requestParameters.mirroringRequestId was null or undefined when calling get.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/requests/{mirroringRequestId}`.replace(`{${"mirroringRequestId"}}`, encodeURIComponent(String(requestParameters.mirroringRequestId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a mirroring request
     * Get a mirroring request
     */
    async get(requestParameters: GetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirroringRequest> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async get1Raw(requestParameters: Get1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mirrorId === null || requestParameters.mirrorId === undefined) {
            throw new runtime.RequiredError('mirrorId','Required parameter requestParameters.mirrorId was null or undefined when calling get1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/mirrorServers/{mirrorId}/webPanels/config`.replace(`{${"mirrorId"}}`, encodeURIComponent(String(requestParameters.mirrorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async get1(requestParameters: Get1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.get1Raw(requestParameters, initOverrides);
    }

    /**
     * Returns a page of repositories enriched with a content hash and default branch
     * Get content hashes for repositories
     */
    async getAllRaw(requestParameters: GetAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnrichedRepository>> {
        const queryParameters: any = {};

        if (requestParameters.includeDefaultBranch !== undefined) {
            queryParameters['includeDefaultBranch'] = requestParameters.includeDefaultBranch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/repos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a page of repositories enriched with a content hash and default branch
     * Get content hashes for repositories
     */
    async getAll(requestParameters: GetAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnrichedRepository> {
        const response = await this.getAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a page of repositories for a given project, enriched with a content hash
     * Get hashes for repositories in project
     */
    async getAllReposForProjectRaw(requestParameters: GetAllReposForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllReposForProject200Response>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getAllReposForProject.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeDefaultBranch !== undefined) {
            queryParameters['includeDefaultBranch'] = requestParameters.includeDefaultBranch;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/projects/{projectId}/repos`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a page of repositories for a given project, enriched with a content hash
     * Get hashes for repositories in project
     */
    async getAllReposForProject(requestParameters: GetAllReposForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllReposForProject200Response> {
        const response = await this.getAllReposForProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the requested project using its primary key ID.<br> Since 6.7
     * Get project
     */
    async getByIdRaw(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestProject>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the requested project using its primary key ID.<br> Since 6.7
     * Get project
     */
    async getById(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestProject> {
        const response = await this.getByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a repository enriched with a content hash and default branch
     * Get content hash for a repository
     */
    async getById1Raw(requestParameters: GetById1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnrichedRepository>> {
        if (requestParameters.repoId === null || requestParameters.repoId === undefined) {
            throw new runtime.RequiredError('repoId','Required parameter requestParameters.repoId was null or undefined when calling getById1.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeDefaultBranch !== undefined) {
            queryParameters['includeDefaultBranch'] = requestParameters.includeDefaultBranch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/repos/{repoId}`.replace(`{${"repoId"}}`, encodeURIComponent(String(requestParameters.repoId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a repository enriched with a content hash and default branch
     * Get content hash for a repository
     */
    async getById1(requestParameters: GetById1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnrichedRepository> {
        const response = await this.getById1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the mirror specified by a mirror ID
     * Get mirror by ID
     */
    async getMirrorRaw(requestParameters: GetMirrorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirrorServer>> {
        if (requestParameters.mirrorId === null || requestParameters.mirrorId === undefined) {
            throw new runtime.RequiredError('mirrorId','Required parameter requestParameters.mirrorId was null or undefined when calling getMirror.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/mirrorServers/{mirrorId}`.replace(`{${"mirrorId"}}`, encodeURIComponent(String(requestParameters.mirrorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the mirror specified by a mirror ID
     * Get mirror by ID
     */
    async getMirror(requestParameters: GetMirrorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirrorServer> {
        const response = await this.getMirrorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the current user\'s preferred mirror server
     * Get preferred mirror
     */
    async getPreferredMirrorIdRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirrorServer>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/account/settings/preferred-mirror`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the current user\'s preferred mirror server
     * Get preferred mirror
     */
    async getPreferredMirrorId(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirrorServer> {
        const response = await this.getPreferredMirrorIdRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns a page of mirrors for a repository. This resource will return <strong>all mirrors</strong> along with authorized links to the mirror\'s repository REST resource. To determine if a repository is available on the mirror, the returned URL needs to be called.
     * Get mirrors for repository
     */
    async getRepositoryMirrorsRaw(requestParameters: GetRepositoryMirrorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirroredRepositoryDescriptor>> {
        if (requestParameters.repoId === null || requestParameters.repoId === undefined) {
            throw new runtime.RequiredError('repoId','Required parameter requestParameters.repoId was null or undefined when calling getRepositoryMirrors.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/repos/{repoId}/mirrors`.replace(`{${"repoId"}}`, encodeURIComponent(String(requestParameters.repoId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a page of mirrors for a repository. This resource will return <strong>all mirrors</strong> along with authorized links to the mirror\'s repository REST resource. To determine if a repository is available on the mirror, the returned URL needs to be called.
     * Get mirrors for repository
     */
    async getRepositoryMirrors(requestParameters: GetRepositoryMirrorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirroredRepositoryDescriptor> {
        const response = await this.getRepositoryMirrorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of mirrors
     * Get all mirrors
     */
    async listMirrorsRaw(requestParameters: ListMirrorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListMirrors200Response>> {
        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/mirrorServers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of mirrors
     * Get all mirrors
     */
    async listMirrors(requestParameters: ListMirrorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListMirrors200Response> {
        const response = await this.listMirrorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a mirroring request
     * Get mirroring requests
     */
    async listRequestsRaw(requestParameters: ListRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListRequests200Response>> {
        const queryParameters: any = {};

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/requests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a mirroring request
     * Get mirroring requests
     */
    async listRequests(requestParameters: ListRequestsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListRequests200Response> {
        const response = await this.listRequestsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Publishes a RepositoryMirrorEvent on the event queue.
     * Publish RepositoryMirrorEvent
     */
    async publishEventRaw(requestParameters: PublishEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mirrorId === null || requestParameters.mirrorId === undefined) {
            throw new runtime.RequiredError('mirrorId','Required parameter requestParameters.mirrorId was null or undefined when calling publishEvent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mirroring/latest/mirrorServers/{mirrorId}/events`.replace(`{${"mirrorId"}}`, encodeURIComponent(String(requestParameters.mirrorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.restRepositoryMirrorEvent,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Publishes a RepositoryMirrorEvent on the event queue.
     * Publish RepositoryMirrorEvent
     */
    async publishEvent(requestParameters: PublishEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publishEventRaw(requestParameters, initOverrides);
    }

    /**
     * Creates a new mirroring request
     * Create a mirroring request
     */
    async registerRaw(requestParameters: RegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirroringRequest>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mirroring/latest/requests`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.restMirroringRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new mirroring request
     * Create a mirroring request
     */
    async register(requestParameters: RegisterRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirroringRequest> {
        const response = await this.registerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Rejects a mirroring request
     * Reject a mirroring request
     */
    async rejectRaw(requestParameters: RejectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirrorServer>> {
        if (requestParameters.mirroringRequestId === null || requestParameters.mirroringRequestId === undefined) {
            throw new runtime.RequiredError('mirroringRequestId','Required parameter requestParameters.mirroringRequestId was null or undefined when calling reject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/requests/{mirroringRequestId}/reject`.replace(`{${"mirroringRequestId"}}`, encodeURIComponent(String(requestParameters.mirroringRequestId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Rejects a mirroring request
     * Reject a mirroring request
     */
    async reject(requestParameters: RejectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirrorServer> {
        const response = await this.rejectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes a mirror, disabling all access and notifications for the mirror server in question
     * Delete mirror by ID
     */
    async removeRaw(requestParameters: RemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mirrorId === null || requestParameters.mirrorId === undefined) {
            throw new runtime.RequiredError('mirrorId','Required parameter requestParameters.mirrorId was null or undefined when calling remove.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mirroring/latest/mirrorServers/{mirrorId}`.replace(`{${"mirrorId"}}`, encodeURIComponent(String(requestParameters.mirrorId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes a mirror, disabling all access and notifications for the mirror server in question
     * Delete mirror by ID
     */
    async remove(requestParameters: RemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeRaw(requestParameters, initOverrides);
    }

    /**
     * Sets the mirror specified by a mirror ID as the current user\'s preferred mirror
     * Set preferred mirror
     */
    async setPreferredMirrorIdRaw(requestParameters: SetPreferredMirrorIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mirroring/latest/account/settings/preferred-mirror`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets the mirror specified by a mirror ID as the current user\'s preferred mirror
     * Set preferred mirror
     */
    async setPreferredMirrorId(requestParameters: SetPreferredMirrorIdRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.setPreferredMirrorIdRaw(requestParameters, initOverrides);
    }

    /**
     * Upgrades the add-on for the mirror server in question This endpoint can only be called by the mirror instance or system administrators<br>Since 5.8
     * Upgrade add-on for a mirror
     */
    async upgradeRaw(requestParameters: UpgradeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMirrorServer>> {
        if (requestParameters.mirrorId === null || requestParameters.mirrorId === undefined) {
            throw new runtime.RequiredError('mirrorId','Required parameter requestParameters.mirrorId was null or undefined when calling upgrade.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mirroring/latest/mirrorServers/{mirrorId}`.replace(`{${"mirrorId"}}`, encodeURIComponent(String(requestParameters.mirrorId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.restMirrorUpgradeRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Upgrades the add-on for the mirror server in question This endpoint can only be called by the mirror instance or system administrators<br>Since 5.8
     * Upgrade add-on for a mirror
     */
    async upgrade(requestParameters: UpgradeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMirrorServer> {
        const response = await this.upgradeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAllIncludeDefaultBranchEnum = {
    True: 'true',
    False: 'false'
} as const;
export type GetAllIncludeDefaultBranchEnum = typeof GetAllIncludeDefaultBranchEnum[keyof typeof GetAllIncludeDefaultBranchEnum];
/**
 * @export
 */
export const GetAllReposForProjectIncludeDefaultBranchEnum = {
    True: 'true',
    False: 'false'
} as const;
export type GetAllReposForProjectIncludeDefaultBranchEnum = typeof GetAllReposForProjectIncludeDefaultBranchEnum[keyof typeof GetAllReposForProjectIncludeDefaultBranchEnum];
/**
 * @export
 */
export const ListRequestsStateEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type ListRequestsStateEnum = typeof ListRequestsStateEnum[keyof typeof ListRequestsStateEnum];
