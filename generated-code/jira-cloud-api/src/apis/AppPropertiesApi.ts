/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  EntityProperty,
  OperationMessage,
  PropertyKeys,
} from '../models';

export interface AddonPropertiesResourceDeleteAddonPropertyDeleteRequest {
    addonKey: string;
    propertyKey: string;
}

export interface AddonPropertiesResourceGetAddonPropertiesGetRequest {
    addonKey: string;
}

export interface AddonPropertiesResourceGetAddonPropertyGetRequest {
    addonKey: string;
    propertyKey: string;
}

export interface AddonPropertiesResourcePutAddonPropertyPutRequest {
    addonKey: string;
    propertyKey: string;
    body: any | null;
}

/**
 * 
 */
export class AppPropertiesApi extends runtime.BaseAPI {

    /**
     * Deletes an app\'s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Delete app property
     */
    async addonPropertiesResourceDeleteAddonPropertyDeleteRaw(requestParameters: AddonPropertiesResourceDeleteAddonPropertyDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.addonKey === null || requestParameters.addonKey === undefined) {
            throw new runtime.RequiredError('addonKey','Required parameter requestParameters.addonKey was null or undefined when calling addonPropertiesResourceDeleteAddonPropertyDelete.');
        }

        if (requestParameters.propertyKey === null || requestParameters.propertyKey === undefined) {
            throw new runtime.RequiredError('propertyKey','Required parameter requestParameters.propertyKey was null or undefined when calling addonPropertiesResourceDeleteAddonPropertyDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}`.replace(`{${"addonKey"}}`, encodeURIComponent(String(requestParameters.addonKey))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters.propertyKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an app\'s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Delete app property
     */
    async addonPropertiesResourceDeleteAddonPropertyDelete(requestParameters: AddonPropertiesResourceDeleteAddonPropertyDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addonPropertiesResourceDeleteAddonPropertyDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Gets all the properties of an app.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Get app properties
     */
    async addonPropertiesResourceGetAddonPropertiesGetRaw(requestParameters: AddonPropertiesResourceGetAddonPropertiesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyKeys>> {
        if (requestParameters.addonKey === null || requestParameters.addonKey === undefined) {
            throw new runtime.RequiredError('addonKey','Required parameter requestParameters.addonKey was null or undefined when calling addonPropertiesResourceGetAddonPropertiesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rest/atlassian-connect/1/addons/{addonKey}/properties`.replace(`{${"addonKey"}}`, encodeURIComponent(String(requestParameters.addonKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets all the properties of an app.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Get app properties
     */
    async addonPropertiesResourceGetAddonPropertiesGet(requestParameters: AddonPropertiesResourceGetAddonPropertiesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
        const response = await this.addonPropertiesResourceGetAddonPropertiesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the key and value of an app\'s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Get app property
     */
    async addonPropertiesResourceGetAddonPropertyGetRaw(requestParameters: AddonPropertiesResourceGetAddonPropertyGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityProperty>> {
        if (requestParameters.addonKey === null || requestParameters.addonKey === undefined) {
            throw new runtime.RequiredError('addonKey','Required parameter requestParameters.addonKey was null or undefined when calling addonPropertiesResourceGetAddonPropertyGet.');
        }

        if (requestParameters.propertyKey === null || requestParameters.propertyKey === undefined) {
            throw new runtime.RequiredError('propertyKey','Required parameter requestParameters.propertyKey was null or undefined when calling addonPropertiesResourceGetAddonPropertyGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}`.replace(`{${"addonKey"}}`, encodeURIComponent(String(requestParameters.addonKey))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters.propertyKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the key and value of an app\'s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Get app property
     */
    async addonPropertiesResourceGetAddonPropertyGet(requestParameters: AddonPropertiesResourceGetAddonPropertyGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
        const response = await this.addonPropertiesResourceGetAddonPropertyGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the value of an app\'s property. Use this resource to store custom data for your app.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Set app property
     */
    async addonPropertiesResourcePutAddonPropertyPutRaw(requestParameters: AddonPropertiesResourcePutAddonPropertyPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OperationMessage>> {
        if (requestParameters.addonKey === null || requestParameters.addonKey === undefined) {
            throw new runtime.RequiredError('addonKey','Required parameter requestParameters.addonKey was null or undefined when calling addonPropertiesResourcePutAddonPropertyPut.');
        }

        if (requestParameters.propertyKey === null || requestParameters.propertyKey === undefined) {
            throw new runtime.RequiredError('propertyKey','Required parameter requestParameters.propertyKey was null or undefined when calling addonPropertiesResourcePutAddonPropertyPut.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addonPropertiesResourcePutAddonPropertyPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}`.replace(`{${"addonKey"}}`, encodeURIComponent(String(requestParameters.addonKey))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters.propertyKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Sets the value of an app\'s property. Use this resource to store custom data for your app.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * Set app property
     */
    async addonPropertiesResourcePutAddonPropertyPut(requestParameters: AddonPropertiesResourcePutAddonPropertyPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OperationMessage> {
        const response = await this.addonPropertiesResourcePutAddonPropertyPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}