# IssueLinkTypesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssueLinkType**](IssueLinkTypesApi.md#createissuelinktype) | **POST** /rest/api/3/issueLinkType | Create issue link type |
| [**deleteIssueLinkType**](IssueLinkTypesApi.md#deleteissuelinktype) | **DELETE** /rest/api/3/issueLinkType/{issueLinkTypeId} | Delete issue link type |
| [**getIssueLinkType**](IssueLinkTypesApi.md#getissuelinktype) | **GET** /rest/api/3/issueLinkType/{issueLinkTypeId} | Get issue link type |
| [**getIssueLinkTypes**](IssueLinkTypesApi.md#getissuelinktypes) | **GET** /rest/api/3/issueLinkType | Get issue link types |
| [**updateIssueLinkType**](IssueLinkTypesApi.md#updateissuelinktype) | **PUT** /rest/api/3/issueLinkType/{issueLinkTypeId} | Update issue link type |



## createIssueLinkType

> IssueLinkType createIssueLinkType(issueLinkType)

Create issue link type

Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link\&#39;s inward and outward relationships.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueLinkTypesApi,
} from 'jira-cloud-api';
import type { CreateIssueLinkTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinkTypesApi(config);

  const body = {
    // IssueLinkType
    issueLinkType: {"inward":"Duplicated by","name":"Duplicate","outward":"Duplicates"},
  } satisfies CreateIssueLinkTypeRequest;

  try {
    const data = await api.createIssueLinkType(body);
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
| **issueLinkType** | [IssueLinkType](IssueLinkType.md) |  | |

### Return type

[**IssueLinkType**](IssueLinkType.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the issue link type name is in use.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueLinkType

> deleteIssueLinkType(issueLinkTypeId)

Delete issue link type

Deletes an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueLinkTypesApi,
} from 'jira-cloud-api';
import type { DeleteIssueLinkTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinkTypesApi(config);

  const body = {
    // string | The ID of the issue link type.
    issueLinkTypeId: issueLinkTypeId_example,
  } satisfies DeleteIssueLinkTypeRequest;

  try {
    const data = await api.deleteIssueLinkType(body);
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
| **issueLinkTypeId** | `string` | The ID of the issue link type. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the issue link type ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the issue link type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueLinkType

> IssueLinkType getIssueLinkType(issueLinkTypeId)

Get issue link type

Returns an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.

### Example

```ts
import {
  Configuration,
  IssueLinkTypesApi,
} from 'jira-cloud-api';
import type { GetIssueLinkTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinkTypesApi(config);

  const body = {
    // string | The ID of the issue link type.
    issueLinkTypeId: issueLinkTypeId_example,
  } satisfies GetIssueLinkTypeRequest;

  try {
    const data = await api.getIssueLinkType(body);
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
| **issueLinkTypeId** | `string` | The ID of the issue link type. | [Defaults to `undefined`] |

### Return type

[**IssueLinkType**](IssueLinkType.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the issue link type ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the issue link type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueLinkTypes

> IssueLinkTypes getIssueLinkTypes()

Get issue link types

Returns a list of all issue link types.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.

### Example

```ts
import {
  Configuration,
  IssueLinkTypesApi,
} from 'jira-cloud-api';
import type { GetIssueLinkTypesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinkTypesApi(config);

  try {
    const data = await api.getIssueLinkTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**IssueLinkTypes**](IssueLinkTypes.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if issue linking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueLinkType

> IssueLinkType updateIssueLinkType(issueLinkTypeId, issueLinkType)

Update issue link type

Updates an issue link type.  To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueLinkTypesApi,
} from 'jira-cloud-api';
import type { UpdateIssueLinkTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinkTypesApi(config);

  const body = {
    // string | The ID of the issue link type.
    issueLinkTypeId: issueLinkTypeId_example,
    // IssueLinkType
    issueLinkType: {"inward":"Duplicated by","name":"Duplicate","outward":"Duplicates"},
  } satisfies UpdateIssueLinkTypeRequest;

  try {
    const data = await api.updateIssueLinkType(body);
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
| **issueLinkTypeId** | `string` | The ID of the issue link type. | [Defaults to `undefined`] |
| **issueLinkType** | [IssueLinkType](IssueLinkType.md) |  | |

### Return type

[**IssueLinkType**](IssueLinkType.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the issue link type ID or the request body are invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the issue link type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

