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
  ProgressEndpointDto,
} from '../models/index';

export interface SetProgressUsingPOSTRequest {
    transferId: string;
    progressEndpointDto: ProgressEndpointDto;
}

/**
 * 
 */
export class StatusAPIApi extends runtime.BaseAPI {

    /**
     * Updates migration status for a given transfer ID.    When you  [implement the listener interface](/platform/app-migration/prepare-server-app/) in your server app, your cloud app **must** use this operation to:    - Report progress on your app migration so that admin users can monitor it in the Cloud Migration Assistant.    - Settle the transfer at the end of your migration by updating its status to `SUCCESS`, `INCOMPLETE`, or `FAILED` so that admin users know it\'s finished.    Once a transfer is settled, subsequent requests for that transfer ID return an HTTP 403 error.
     * Send migration progress
     */
    async setProgressUsingPOSTRaw(requestParameters: SetProgressUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProgressEndpointDto>> {
        if (requestParameters['transferId'] == null) {
            throw new runtime.RequiredError(
                'transferId',
                'Required parameter "transferId" was null or undefined when calling setProgressUsingPOST().'
            );
        }

        if (requestParameters['progressEndpointDto'] == null) {
            throw new runtime.RequiredError(
                'progressEndpointDto',
                'Required parameter "progressEndpointDto" was null or undefined when calling setProgressUsingPOST().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/progress/{transferId}`.replace(`{${"transferId"}}`, encodeURIComponent(String(requestParameters['transferId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['progressEndpointDto'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates migration status for a given transfer ID.    When you  [implement the listener interface](/platform/app-migration/prepare-server-app/) in your server app, your cloud app **must** use this operation to:    - Report progress on your app migration so that admin users can monitor it in the Cloud Migration Assistant.    - Settle the transfer at the end of your migration by updating its status to `SUCCESS`, `INCOMPLETE`, or `FAILED` so that admin users know it\'s finished.    Once a transfer is settled, subsequent requests for that transfer ID return an HTTP 403 error.
     * Send migration progress
     */
    async setProgressUsingPOST(requestParameters: SetProgressUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProgressEndpointDto | null | undefined > {
        const response = await this.setProgressUsingPOSTRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 200:
                return await response.value();
            case 201:
                return null;
            default:
                return await response.value();
        }
    }

}