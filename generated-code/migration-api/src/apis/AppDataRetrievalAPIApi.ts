/* tslint:disable */
/* eslint-disable */
/**
 * App Migration
 * Endpoints available in Jira and Confluence cloud instances to support app migrations
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetMigrationObjectUsingGET200Response,
  UploadedDataDto,
} from '../models/index';

export interface GetMigrationObjectUsingGETRequest {
    s3Key: string;
}

export interface GetUploadeds3KeysUsingGETRequest {
    transferId: string;
}

/**
 * 
 */
export class AppDataRetrievalAPIApi extends runtime.BaseAPI {

    /**
     * Returns an object containing a signed url to retrieve app data
     * Get app data export signed URL
     */
    async getMigrationObjectUsingGETRaw(requestParameters: GetMigrationObjectUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMigrationObjectUsingGET200Response>> {
        if (requestParameters['s3Key'] == null) {
            throw new runtime.RequiredError(
                's3Key',
                'Required parameter "s3Key" was null or undefined when calling getMigrationObjectUsingGET().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/{s3Key}`.replace(`{${"s3Key"}}`, encodeURIComponent(String(requestParameters['s3Key']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns an object containing a signed url to retrieve app data
     * Get app data export signed URL
     */
    async getMigrationObjectUsingGET(requestParameters: GetMigrationObjectUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMigrationObjectUsingGET200Response> {
        const response = await this.getMigrationObjectUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all uploaded data keys for a transferId
     * Get list of app data exports
     */
    async getUploadeds3KeysUsingGETRaw(requestParameters: GetUploadeds3KeysUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UploadedDataDto>>> {
        if (requestParameters['transferId'] == null) {
            throw new runtime.RequiredError(
                'transferId',
                'Required parameter "transferId" was null or undefined when calling getUploadeds3KeysUsingGET().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/{transferId}/all`.replace(`{${"transferId"}}`, encodeURIComponent(String(requestParameters['transferId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all uploaded data keys for a transferId
     * Get list of app data exports
     */
    async getUploadeds3KeysUsingGET(requestParameters: GetUploadeds3KeysUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UploadedDataDto>> {
        const response = await this.getUploadeds3KeysUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
