# SpaceApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSpace**](SpaceApi.md#createspaceoperation) | **POST** /spaces | Create space |
| [**getSpaceById**](SpaceApi.md#getspacebyid) | **GET** /spaces/{id} | Get space by id |
| [**getSpaces**](SpaceApi.md#getspaces) | **GET** /spaces | Get spaces |



## createSpace

> CreateSpace201Response createSpace(createSpaceRequest)

Create space

Creates a Space as specified in the payload.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to create spaces.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v2';
import type { CreateSpaceOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // CreateSpaceRequest
    createSpaceRequest: ...,
  } satisfies CreateSpaceOperationRequest;

  try {
    const data = await api.createSpace(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createSpaceRequest** | [CreateSpaceRequest](CreateSpaceRequest.md) |  | |

### Return type

[**CreateSpace201Response**](CreateSpace201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the requested space is created. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to create spaces. |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceById

> GetSpaceById200Response getSpaceById(id, descriptionFormat, includeIcon, includeOperations, includeProperties, includePermissions, includeRoleAssignments, includeLabels)

Get space by id

Returns a specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the space.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v2';
import type { GetSpaceByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // number | The ID of the space to be returned.
    id: 789,
    // SpaceDescriptionBodyRepresentation | The content format type to be returned in the `description` field of the response. If available, the representation will be available under a response field of the same name under the `description` field. (optional)
    descriptionFormat: ...,
    // boolean | If the icon for the space should be fetched or not. (optional)
    includeIcon: true,
    // boolean | Includes operations associated with this space in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes space properties associated with this space in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes space permissions associated with this space in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includePermissions: true,
    // boolean | Includes role assignments associated with this space in the response. This parameter is only accepted for EAP sites. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeRoleAssignments: true,
    // boolean | Includes labels associated with this space in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLabels: true,
  } satisfies GetSpaceByIdRequest;

  try {
    const data = await api.getSpaceById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the space to be returned. | [Defaults to `undefined`] |
| **descriptionFormat** | `SpaceDescriptionBodyRepresentation` | The content format type to be returned in the &#x60;description&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;description&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: plain, view] |
| **includeIcon** | `boolean` | If the icon for the space should be fetched or not. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this space in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes space properties associated with this space in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includePermissions** | `boolean` | Includes space permissions associated with this space in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeRoleAssignments** | `boolean` | Includes role assignments associated with this space in the response. This parameter is only accepted for EAP sites. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeLabels** | `boolean` | Includes labels associated with this space in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |

### Return type

[**GetSpaceById200Response**](GetSpaceById200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaces

> MultiEntityResultSpace getSpaces(ids, keys, type, status, labels, favoritedBy, notFavoritedBy, sort, descriptionFormat, includeIcon, cursor, limit)

Get spaces

Returns all spaces. The results will be sorted by id ascending. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only spaces that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v2';
import type { GetSpacesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // Array<number> | Filter the results to spaces based on their IDs. Multiple IDs can be specified as a comma-separated list. (optional)
    ids: ...,
    // Array<string> | Filter the results to spaces based on their keys. Multiple keys can be specified as a comma-separated list. (optional)
    keys: ...,
    // 'global' | 'collaboration' | 'knowledge_base' | 'personal' | 'system' | 'onboarding' | 'xflow_sample_space' | Filter the results to spaces based on their type. (optional)
    type: type_example,
    // 'current' | 'archived' | Filter the results to spaces based on their status. (optional)
    status: status_example,
    // Array<string> | Filter the results to spaces based on their labels. Multiple labels can be specified as a comma-separated list. (optional)
    labels: ...,
    // string | Filter the results to spaces favorited by the user with the specified account ID. (optional)
    favoritedBy: favoritedBy_example,
    // string | Filter the results to spaces NOT favorited by the user with the specified account ID. (optional)
    notFavoritedBy: notFavoritedBy_example,
    // SpaceSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // SpaceDescriptionBodyRepresentation | The content format type to be returned in the `description` field of the response. If available, the representation will be available under a response field of the same name under the `description` field. (optional)
    descriptionFormat: ...,
    // boolean | If the icon for the space should be fetched or not. (optional)
    includeIcon: true,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of spaces per result to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetSpacesRequest;

  try {
    const data = await api.getSpaces(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ids** | `Array<number>` | Filter the results to spaces based on their IDs. Multiple IDs can be specified as a comma-separated list. | [Optional] |
| **keys** | `Array<string>` | Filter the results to spaces based on their keys. Multiple keys can be specified as a comma-separated list. | [Optional] |
| **type** | `global`, `collaboration`, `knowledge_base`, `personal`, `system`, `onboarding`, `xflow_sample_space` | Filter the results to spaces based on their type. | [Optional] [Defaults to `undefined`] [Enum: global, collaboration, knowledge_base, personal, system, onboarding, xflow_sample_space] |
| **status** | `current`, `archived` | Filter the results to spaces based on their status. | [Optional] [Defaults to `undefined`] [Enum: current, archived] |
| **labels** | `Array<string>` | Filter the results to spaces based on their labels. Multiple labels can be specified as a comma-separated list. | [Optional] |
| **favoritedBy** | `string` | Filter the results to spaces favorited by the user with the specified account ID. | [Optional] [Defaults to `undefined`] |
| **notFavoritedBy** | `string` | Filter the results to spaces NOT favorited by the user with the specified account ID. | [Optional] [Defaults to `undefined`] |
| **sort** | `SpaceSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, key, -key, name, -name] |
| **descriptionFormat** | `SpaceDescriptionBodyRepresentation` | The content format type to be returned in the &#x60;description&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;description&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: plain, view] |
| **includeIcon** | `boolean` | If the icon for the space should be fetched or not. | [Optional] [Defaults to `false`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of spaces per result to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultSpace**](MultiEntityResultSpace.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested spaces are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/spaces?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

