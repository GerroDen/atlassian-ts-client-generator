# ProjectFeaturesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getFeaturesForProject**](ProjectFeaturesApi.md#getfeaturesforproject) | **GET** /rest/api/3/project/{projectIdOrKey}/features | Get project features |
| [**toggleFeatureForProject**](ProjectFeaturesApi.md#togglefeatureforproject) | **PUT** /rest/api/3/project/{projectIdOrKey}/features/{featureKey} | Set project feature state |



## getFeaturesForProject

> ContainerForProjectFeatures getFeaturesForProject(projectIdOrKey)

Get project features

Returns the list of features for a project.

### Example

```ts
import {
  Configuration,
  ProjectFeaturesApi,
} from 'jira-cloud-api';
import type { GetFeaturesForProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectFeaturesApi(config);

  const body = {
    // string | The ID or (case-sensitive) key of the project.
    projectIdOrKey: projectIdOrKey_example,
  } satisfies GetFeaturesForProjectRequest;

  try {
    const data = await api.getFeaturesForProject(body);
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
| **projectIdOrKey** | `string` | The ID or (case-sensitive) key of the project. | [Defaults to `undefined`] |

### Return type

[**ContainerForProjectFeatures**](ContainerForProjectFeatures.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## toggleFeatureForProject

> ContainerForProjectFeatures toggleFeatureForProject(projectIdOrKey, featureKey, projectFeatureState)

Set project feature state

Sets the state of a project feature.

### Example

```ts
import {
  Configuration,
  ProjectFeaturesApi,
} from 'jira-cloud-api';
import type { ToggleFeatureForProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectFeaturesApi(config);

  const body = {
    // string | The ID or (case-sensitive) key of the project.
    projectIdOrKey: projectIdOrKey_example,
    // string | The key of the feature.
    featureKey: featureKey_example,
    // ProjectFeatureState | Details of the feature state change.
    projectFeatureState: {"state":"ENABLED"},
  } satisfies ToggleFeatureForProjectRequest;

  try {
    const data = await api.toggleFeatureForProject(body);
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
| **projectIdOrKey** | `string` | The ID or (case-sensitive) key of the project. | [Defaults to `undefined`] |
| **featureKey** | `string` | The key of the feature. | [Defaults to `undefined`] |
| **projectFeatureState** | [ProjectFeatureState](ProjectFeatureState.md) | Details of the feature state change. | |

### Return type

[**ContainerForProjectFeatures**](ContainerForProjectFeatures.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the project or project feature is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

