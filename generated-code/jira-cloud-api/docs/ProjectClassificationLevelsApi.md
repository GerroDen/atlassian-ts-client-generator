# ProjectClassificationLevelsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDefaultProjectClassification**](ProjectClassificationLevelsApi.md#getdefaultprojectclassification) | **GET** /rest/api/3/project/{projectIdOrKey}/classification-level/default | Get the default data classification level of a project |
| [**removeDefaultProjectClassification**](ProjectClassificationLevelsApi.md#removedefaultprojectclassification) | **DELETE** /rest/api/3/project/{projectIdOrKey}/classification-level/default | Remove the default data classification level from a project |
| [**updateDefaultProjectClassification**](ProjectClassificationLevelsApi.md#updatedefaultprojectclassification) | **PUT** /rest/api/3/project/{projectIdOrKey}/classification-level/default | Update the default data classification level of a project |



## getDefaultProjectClassification

> any getDefaultProjectClassification(projectIdOrKey)

Get the default data classification level of a project

Returns the default data classification for a project.  **[Permissions](#permissions) required:**   *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  *Administer jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectClassificationLevelsApi,
} from 'jira-cloud-api';
import type { GetDefaultProjectClassificationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectClassificationLevelsApi(config);

  const body = {
    // string | The project ID or project key (case-sensitive).
    projectIdOrKey: projectIdOrKey_example,
  } satisfies GetDefaultProjectClassificationRequest;

  try {
    const data = await api.getDefaultProjectClassification(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case-sensitive). | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeDefaultProjectClassification

> any removeDefaultProjectClassification(projectIdOrKey)

Remove the default data classification level from a project

Remove the default data classification level for a project.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  *Administer jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectClassificationLevelsApi,
} from 'jira-cloud-api';
import type { RemoveDefaultProjectClassificationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectClassificationLevelsApi(config);

  const body = {
    // string | The project ID or project key (case-sensitive).
    projectIdOrKey: projectIdOrKey_example,
  } satisfies RemoveDefaultProjectClassificationRequest;

  try {
    const data = await api.removeDefaultProjectClassification(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case-sensitive). | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDefaultProjectClassification

> any updateDefaultProjectClassification(projectIdOrKey, updateDefaultProjectClassificationBean)

Update the default data classification level of a project

Updates the default data classification level for a project.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  *Administer jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectClassificationLevelsApi,
} from 'jira-cloud-api';
import type { UpdateDefaultProjectClassificationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectClassificationLevelsApi(config);

  const body = {
    // string | The project ID or project key (case-sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // UpdateDefaultProjectClassificationBean
    updateDefaultProjectClassificationBean: {"id":"ari:cloud:platform::classification-tag/dec24c48-5073-4c25-8fef-9d81a992c30c"},
  } satisfies UpdateDefaultProjectClassificationRequest;

  try {
    const data = await api.updateDefaultProjectClassification(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case-sensitive). | [Defaults to `undefined`] |
| **updateDefaultProjectClassificationBean** | [UpdateDefaultProjectClassificationBean](UpdateDefaultProjectClassificationBean.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

