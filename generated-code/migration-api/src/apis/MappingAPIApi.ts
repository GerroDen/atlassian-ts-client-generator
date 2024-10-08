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
  MigrationMappingDto,
  MigrationMappingItem,
} from '../models/index';

export interface FindByNamespaceAndKeysUsingPOST1Request {
    namespace: string;
    transferId: string;
    requestBody: Array<string>;
}

export interface GetMigrationContextForNamespaceUsingGET1Request {
    transferId: string;
    namespace: string;
    lastEntity?: string;
    pageSize?: number;
}

/**
 * 
 */
export class MappingAPIApi extends runtime.BaseAPI {

    /**
     * Retrieves mappings for a specific namespace filtering by the keys provided on the payload
     * Get mappings by keys
     */
    async findByNamespaceAndKeysUsingPOST1Raw(requestParameters: FindByNamespaceAndKeysUsingPOST1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MigrationMappingItem>> {
        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling findByNamespaceAndKeysUsingPOST1().'
            );
        }

        if (requestParameters['transferId'] == null) {
            throw new runtime.RequiredError(
                'transferId',
                'Required parameter "transferId" was null or undefined when calling findByNamespaceAndKeysUsingPOST1().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling findByNamespaceAndKeysUsingPOST1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mapping/{transferId}/find`.replace(`{${"transferId"}}`, encodeURIComponent(String(requestParameters['transferId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves mappings for a specific namespace filtering by the keys provided on the payload
     * Get mappings by keys
     */
    async findByNamespaceAndKeysUsingPOST1(requestParameters: FindByNamespaceAndKeysUsingPOST1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MigrationMappingItem> {
        const response = await this.findByNamespaceAndKeysUsingPOST1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns mappings for a given namespace
     * Get mappings in pages
     */
    async getMigrationContextForNamespaceUsingGET1Raw(requestParameters: GetMigrationContextForNamespaceUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MigrationMappingDto>> {
        if (requestParameters['transferId'] == null) {
            throw new runtime.RequiredError(
                'transferId',
                'Required parameter "transferId" was null or undefined when calling getMigrationContextForNamespaceUsingGET1().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling getMigrationContextForNamespaceUsingGET1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        if (requestParameters['lastEntity'] != null) {
            queryParameters['lastEntity'] = requestParameters['lastEntity'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mapping/{transferId}/page`.replace(`{${"transferId"}}`, encodeURIComponent(String(requestParameters['transferId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns mappings for a given namespace
     * Get mappings in pages
     */
    async getMigrationContextForNamespaceUsingGET1(requestParameters: GetMigrationContextForNamespaceUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MigrationMappingDto> {
        const response = await this.getMigrationContextForNamespaceUsingGET1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
