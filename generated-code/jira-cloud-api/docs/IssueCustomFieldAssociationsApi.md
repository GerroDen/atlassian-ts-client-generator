# IssueCustomFieldAssociationsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAssociations**](IssueCustomFieldAssociationsApi.md#createassociations) | **PUT** /rest/api/3/field/association | Create associations |
| [**removeAssociations**](IssueCustomFieldAssociationsApi.md#removeassociations) | **DELETE** /rest/api/3/field/association | Remove associations |



## createAssociations

> any createAssociations(fieldAssociationsRequest)

Create associations

Associates fields with projects.  Fields will be associated with each issue type on the requested projects.  Fields will be associated with all projects that share the same field configuration which the provided projects are using. This means that while the field will be associated with the requested projects, it will also be associated with any other projects that share the same field configuration.  If a success response is returned it means that the field association has been created in any applicable contexts where it wasn\&#39;t already present.  Up to 50 fields and up to 100 projects can be associated in a single request. If more fields or projects are provided a 400 response will be returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldAssociationsApi,
} from 'jira-cloud-api';
import type { CreateAssociationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldAssociationsApi(config);

  const body = {
    // FieldAssociationsRequest | Payload containing the fields to associate and the projects to associate them to.
    fieldAssociationsRequest: {"associationContexts":[{"identifier":10000,"type":"PROJECT_ID"},{"identifier":10001,"type":"PROJECT_ID"}],"fields":[{"identifier":"customfield_10000","type":"FIELD_ID"},{"identifier":"customfield_10001","type":"FIELD_ID"}]},
  } satisfies CreateAssociationsRequest;

  try {
    const data = await api.createAssociations(body);
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
| **fieldAssociationsRequest** | [FieldAssociationsRequest](FieldAssociationsRequest.md) | Payload containing the fields to associate and the projects to associate them to. | |

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
| **204** | Returned if the field association validation passes. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the field, project, or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeAssociations

> any removeAssociations(fieldAssociationsRequest)

Remove associations

Unassociates a set of fields with a project and issue type context.  Fields will be unassociated with all projects/issue types that share the same field configuration which the provided project and issue types are using. This means that while the field will be unassociated with the provided project and issue types, it will also be unassociated with any other projects and issue types that share the same field configuration.  If a success response is returned it means that the field association has been removed in any applicable contexts where it was present.  Up to 50 fields and up to 100 projects and issue types can be unassociated in a single request. If more fields or projects are provided a 400 response will be returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldAssociationsApi,
} from 'jira-cloud-api';
import type { RemoveAssociationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldAssociationsApi(config);

  const body = {
    // FieldAssociationsRequest | Payload containing the fields to uassociate and the projects and issue types to unassociate them to.
    fieldAssociationsRequest: {"associationContexts":[{"identifier":10000,"type":"PROJECT_ID"},{"identifier":10001,"type":"PROJECT_ID"}],"fields":[{"identifier":"customfield_10000","type":"FIELD_ID"},{"identifier":"customfield_10001","type":"FIELD_ID"}]},
  } satisfies RemoveAssociationsRequest;

  try {
    const data = await api.removeAssociations(body);
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
| **fieldAssociationsRequest** | [FieldAssociationsRequest](FieldAssociationsRequest.md) | Payload containing the fields to uassociate and the projects and issue types to unassociate them to. | |

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
| **204** | Returned if the field association validation passes. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the field, project, or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

