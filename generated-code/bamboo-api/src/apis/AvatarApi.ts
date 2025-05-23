/* tslint:disable */
/* eslint-disable */
/**
 * Bamboo
 * This is the reference document for the Atlassian Bamboo REST API. The REST API is for developers who want to:    - integrate Bamboo with other applications;   - create scripts that interact with Bamboo; or   - develop plugins that enhance the Bamboo UI, using REST to interact with the backend.    You can read more about developing Bamboo plugins in the [Bamboo Developer Documentation](https://developer.atlassian.com/bamboo/server/docs/latest/).
 *
 * The version of the OpenAPI document: 11.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface RetrieveAvatarRequest {
    userName: string;
    s?: number;
}

export interface UploadAvatarRequest {
    contentType?: string;
    formField?: boolean;
    inputStream?: object;
    name?: string;
    size?: number;
    value?: string;
}

/**
 * 
 */
export class AvatarApi extends runtime.BaseAPI {

    /**
     * Deletes the current avatar for the currently authenticated user.
     */
    async deleteAvatarRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/avatar/user/avatar.png`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the current avatar for the currently authenticated user.
     */
    async deleteAvatar(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAvatarRaw(initOverrides);
    }

    /**
     * Returns either the avatar file for a specified user or the gravatar URL. The priority order: custom user avatar as a file, gravatar URL, default avatar as a file. The endpoint supports Last-Modified/If-Modified-Since headers and sets cache policy with expiration equal by default to 90 seconds.
     */
    async retrieveAvatarRaw(requestParameters: RetrieveAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userName'] == null) {
            throw new runtime.RequiredError(
                'userName',
                'Required parameter "userName" was null or undefined when calling retrieveAvatar().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['s'] != null) {
            queryParameters['s'] = requestParameters['s'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/avatar/user/{userName}/avatar.png`.replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters['userName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns either the avatar file for a specified user or the gravatar URL. The priority order: custom user avatar as a file, gravatar URL, default avatar as a file. The endpoint supports Last-Modified/If-Modified-Since headers and sets cache policy with expiration equal by default to 90 seconds.
     */
    async retrieveAvatar(requestParameters: RetrieveAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.retrieveAvatarRaw(requestParameters, initOverrides);
    }

    /**
     * Updated the avatar for the currently authenticated user.
     */
    async uploadAvatarRaw(requestParameters: UploadAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['contentType'] != null) {
            formParams.append('contentType', requestParameters['contentType'] as any);
        }

        if (requestParameters['formField'] != null) {
            formParams.append('formField', requestParameters['formField'] as any);
        }

        if (requestParameters['inputStream'] != null) {

            formParams.append('inputStream', new Blob([JSON.stringify(requestParameters['inputStream'])], { type: "application/json", }));
        }

        if (requestParameters['name'] != null) {
            formParams.append('name', requestParameters['name'] as any);
        }

        if (requestParameters['size'] != null) {
            formParams.append('size', requestParameters['size'] as any);
        }

        if (requestParameters['value'] != null) {
            formParams.append('value', requestParameters['value'] as any);
        }

        const response = await this.request({
            path: `/api/latest/avatar/user/avatar.png`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updated the avatar for the currently authenticated user.
     */
    async uploadAvatar(requestParameters: UploadAvatarRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.uploadAvatarRaw(requestParameters, initOverrides);
    }

}
