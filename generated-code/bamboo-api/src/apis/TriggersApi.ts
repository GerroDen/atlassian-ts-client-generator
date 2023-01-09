/* tslint:disable */
/* eslint-disable */
/**
 * Bamboo
 * This is the reference document for the Atlassian Bamboo REST API. The REST API is for developers who want to:    - integrate Bamboo with other applications;   - create scripts that interact with Bamboo; or   - develop plugins that enhance the Bamboo UI, using REST to interact with the backend.    You can read more about developing Bamboo plugins in the [Bamboo Developer Documentation](https://developer.atlassian.com/bamboo/server/docs/latest/).
 *
 * The version of the OpenAPI document: 9.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface ScheduleChangeDetectionRequest {
    planKey: string;
    skipBranches?: boolean;
}

/**
 * 
 */
export class TriggersApi extends runtime.BaseAPI {

    /**
     * Schedule change detection
     */
    async scheduleChangeDetectionRaw(requestParameters: ScheduleChangeDetectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.planKey === null || requestParameters.planKey === undefined) {
            throw new runtime.RequiredError('planKey','Required parameter requestParameters.planKey was null or undefined when calling scheduleChangeDetection.');
        }

        const queryParameters: any = {};

        if (requestParameters.skipBranches !== undefined) {
            queryParameters['skipBranches'] = requestParameters.skipBranches;
        }

        if (requestParameters.planKey !== undefined) {
            queryParameters['planKey'] = requestParameters.planKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/triggers/latest/remote/changeDetection`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Schedule change detection
     */
    async scheduleChangeDetection(requestParameters: ScheduleChangeDetectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.scheduleChangeDetectionRaw(requestParameters, initOverrides);
    }

}