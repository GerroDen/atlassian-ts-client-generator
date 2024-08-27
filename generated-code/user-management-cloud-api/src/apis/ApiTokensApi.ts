/* tslint:disable */
/* eslint-disable */
/**
 * IDv2: User management
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiTokenModel,
  NotFoundAccount,
  Unauthorized,
  UsersAccountIdManageApiTokensGet403Response,
  UsersAccountIdManageProfilePatch400Response,
} from '../models';

export interface UsersAccountIdManageApiTokensGetRequest {
    accountId: string;
}

export interface UsersAccountIdManageApiTokensTokenIdDeleteRequest {
    accountId: string;
    tokenId: string;
}

/**
 * 
 */
export class ApiTokensApi extends runtime.BaseAPI {

    /**
     * Gets the API tokens owned by the specified user.
     * Get API tokens
     */
    async usersAccountIdManageApiTokensGetRaw(requestParameters: UsersAccountIdManageApiTokensGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApiTokenModel>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageApiTokensGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/api-tokens`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets the API tokens owned by the specified user.
     * Get API tokens
     */
    async usersAccountIdManageApiTokensGet(requestParameters: UsersAccountIdManageApiTokensGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApiTokenModel>> {
        const response = await this.usersAccountIdManageApiTokensGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a specifid API token by ID.
     * Delete API token
     */
    async usersAccountIdManageApiTokensTokenIdDeleteRaw(requestParameters: UsersAccountIdManageApiTokensTokenIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageApiTokensTokenIdDelete.');
        }

        if (requestParameters.tokenId === null || requestParameters.tokenId === undefined) {
            throw new runtime.RequiredError('tokenId','Required parameter requestParameters.tokenId was null or undefined when calling usersAccountIdManageApiTokensTokenIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/api-tokens/{tokenId}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"tokenId"}}`, encodeURIComponent(String(requestParameters.tokenId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a specifid API token by ID.
     * Delete API token
     */
    async usersAccountIdManageApiTokensTokenIdDelete(requestParameters: UsersAccountIdManageApiTokensTokenIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersAccountIdManageApiTokensTokenIdDeleteRaw(requestParameters, initOverrides);
    }

}