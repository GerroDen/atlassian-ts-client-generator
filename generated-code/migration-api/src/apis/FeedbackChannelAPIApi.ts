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
  CloudFeedback,
} from '../models/index';

export interface ReceiveFeedbackUsingPOSTRequest {
    transferId: string;
    cloudFeedback: CloudFeedback;
}

/**
 * 
 */
export class FeedbackChannelAPIApi extends runtime.BaseAPI {

    /**
     * Feeds the app migration listener back with basic info coming from cloud
     * Send information to server app
     */
    async receiveFeedbackUsingPOSTRaw(requestParameters: ReceiveFeedbackUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['transferId'] == null) {
            throw new runtime.RequiredError(
                'transferId',
                'Required parameter "transferId" was null or undefined when calling receiveFeedbackUsingPOST().'
            );
        }

        if (requestParameters['cloudFeedback'] == null) {
            throw new runtime.RequiredError(
                'cloudFeedback',
                'Required parameter "cloudFeedback" was null or undefined when calling receiveFeedbackUsingPOST().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/feedback/{transferId}`.replace(`{${"transferId"}}`, encodeURIComponent(String(requestParameters['transferId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['cloudFeedback'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Feeds the app migration listener back with basic info coming from cloud
     * Send information to server app
     */
    async receiveFeedbackUsingPOST(requestParameters: ReceiveFeedbackUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.receiveFeedbackUsingPOSTRaw(requestParameters, initOverrides);
    }

}
