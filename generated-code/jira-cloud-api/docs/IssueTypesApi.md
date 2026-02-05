# IssueTypesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssueType**](IssueTypesApi.md#createissuetype) | **POST** /rest/api/3/issuetype | Create issue type |
| [**createIssueTypeAvatar**](IssueTypesApi.md#createissuetypeavatar) | **POST** /rest/api/3/issuetype/{id}/avatar2 | Load issue type avatar |
| [**deleteIssueType**](IssueTypesApi.md#deleteissuetype) | **DELETE** /rest/api/3/issuetype/{id} | Delete issue type |
| [**getAlternativeIssueTypes**](IssueTypesApi.md#getalternativeissuetypes) | **GET** /rest/api/3/issuetype/{id}/alternatives | Get alternative issue types |
| [**getIssueAllTypes**](IssueTypesApi.md#getissuealltypes) | **GET** /rest/api/3/issuetype | Get all issue types for user |
| [**getIssueType**](IssueTypesApi.md#getissuetype) | **GET** /rest/api/3/issuetype/{id} | Get issue type |
| [**getIssueTypesForProject**](IssueTypesApi.md#getissuetypesforproject) | **GET** /rest/api/3/issuetype/project | Get issue types for project |
| [**updateIssueType**](IssueTypesApi.md#updateissuetype) | **PUT** /rest/api/3/issuetype/{id} | Update issue type |



## createIssueType

> IssueTypeDetails createIssueType(issueTypeCreateBean)

Create issue type

Creates an issue type.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { CreateIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // IssueTypeCreateBean
    issueTypeCreateBean: {"description":"description","name":"name","type":"standard"},
  } satisfies CreateIssueTypeRequest;

  try {
    const data = await api.createIssueType(body);
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
| **issueTypeCreateBean** | [IssueTypeCreateBean](IssueTypeCreateBean.md) |  | |

### Return type

[**IssueTypeDetails**](IssueTypeDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid because:   *  no content is sent.  *  the issue type name exceeds 60 characters.  *  a subtask issue type is requested on an instance where subtasks are disabled. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **409** | Returned if the issue type name is in use. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssueTypeAvatar

> Avatar createIssueTypeAvatar(id, size, body, x, y)

Load issue type avatar

Loads an avatar for the issue type.  Specify the avatar\&#39;s local file location in the body of the request. Also, include the following headers:   *  &#x60;X-Atlassian-Token: no-check&#x60; To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  &#x60;Content-Type: image/image type&#x60; Valid image types are JPEG, GIF, or PNG.  For example:   &#x60;curl --request POST \\ --user email@example.com:&lt;api_token&gt; \\ --header \&#39;X-Atlassian-Token: no-check\&#39; \\ --header \&#39;Content-Type: image/&lt; image_type&gt;\&#39; \\ --data-binary \&quot;&lt;@/path/to/file/with/your/avatar&gt;\&quot; \\ --url \&#39;https://your-domain.atlassian.net/rest/api/3/issuetype/{issueTypeId}\&#39;This&#x60;  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\&#39;s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar, use [ Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type\&#39;s displayed avatar.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { CreateIssueTypeAvatarRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // string | The ID of the issue type.
    id: id_example,
    // number | The length of each side of the crop region.
    size: 56,
    // any
    body: ...,
    // number | The X coordinate of the top-left corner of the crop region. (optional)
    x: 56,
    // number | The Y coordinate of the top-left corner of the crop region. (optional)
    y: 56,
  } satisfies CreateIssueTypeAvatarRequest;

  try {
    const data = await api.createIssueTypeAvatar(body);
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
| **id** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **size** | `number` | The length of each side of the crop region. | [Defaults to `undefined`] |
| **body** | `any` |  | |
| **x** | `number` | The X coordinate of the top-left corner of the crop region. | [Optional] [Defaults to `0`] |
| **y** | `number` | The Y coordinate of the top-left corner of the crop region. | [Optional] [Defaults to `0`] |

### Return type

[**Avatar**](Avatar.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  an image isn\&#39;t included in the request.  *  the image type is unsupported.  *  the crop parameters extend the crop area beyond the edge of the image.  *  &#x60;cropSize&#x60; is missing.  *  the issue type ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueType

> deleteIssueType(id, alternativeIssueTypeId)

Delete issue type

Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (&#x60;alternativeIssueTypeId&#x60;). A list of alternative issue types are obtained from the [Get alternative issue types](#api-rest-api-3-issuetype-id-alternatives-get) resource.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { DeleteIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // string | The ID of the issue type.
    id: id_example,
    // string | The ID of the replacement issue type. (optional)
    alternativeIssueTypeId: alternativeIssueTypeId_example,
  } satisfies DeleteIssueTypeRequest;

  try {
    const data = await api.deleteIssueType(body);
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
| **id** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **alternativeIssueTypeId** | `string` | The ID of the replacement issue type. | [Optional] [Defaults to `undefined`] |

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
| **400** | Returned if any issues cannot be updated with the alternative issue type. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if:   *  the issue type is in use and an alternative issue type is not specified.  *  the issue type or alternative issue type is not found. |  -  |
| **409** | Returned if the issue type is in use and:   *  also specified as the alternative issue type.  *  is a *standard* issue type and the alternative issue type is a *subtask*. |  -  |
| **423** | Returned if a resource related to deletion is locked. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAlternativeIssueTypes

> Array&lt;IssueTypeDetails&gt; getAlternativeIssueTypes(id)

Get alternative issue types

Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { GetAlternativeIssueTypesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // string | The ID of the issue type.
    id: id_example,
  } satisfies GetAlternativeIssueTypesRequest;

  try {
    const data = await api.getAlternativeIssueTypes(body);
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
| **id** | `string` | The ID of the issue type. | [Defaults to `undefined`] |

### Return type

[**Array&lt;IssueTypeDetails&gt;**](IssueTypeDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **404** | Returned if:   *  the issue type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueAllTypes

> Array&lt;IssueTypeDetails&gt; getIssueAllTypes()

Get all issue types for user

Returns all issue types.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Issue types are only returned as follows:   *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), all issue types are returned.  *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, the issue types associated with the projects the user has permission to browse are returned.  *  if the user is anonymous then they will be able to access projects with the *Browse projects* for anonymous users  *  if the user authentication is incorrect they will fall back to anonymous

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { GetIssueAllTypesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  try {
    const data = await api.getIssueAllTypes();
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

[**Array&lt;IssueTypeDetails&gt;**](IssueTypeDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueType

> IssueTypeDetails getIssueType(id)

Get issue type

Returns an issue type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in a project the issue type is associated with or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { GetIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // string | The ID of the issue type.
    id: id_example,
  } satisfies GetIssueTypeRequest;

  try {
    const data = await api.getIssueType(body);
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
| **id** | `string` | The ID of the issue type. | [Defaults to `undefined`] |

### Return type

[**IssueTypeDetails**](IssueTypeDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the issue type ID is invalid. |  -  |
| **404** | Returned if:   *  the issue type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueTypesForProject

> Array&lt;IssueTypeDetails&gt; getIssueTypesForProject(projectId, level)

Get issue types for project

Returns issue types for a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in the relevant project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { GetIssueTypesForProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // number | The ID of the project.
    projectId: 789,
    // number | The level of the issue type to filter by. Use:   *  `-1` for Subtask.  *  `0` for Base.  *  `1` for Epic. (optional)
    level: 56,
  } satisfies GetIssueTypesForProjectRequest;

  try {
    const data = await api.getIssueTypesForProject(body);
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
| **projectId** | `number` | The ID of the project. | [Defaults to `undefined`] |
| **level** | `number` | The level of the issue type to filter by. Use:   *  &#x60;-1&#x60; for Subtask.  *  &#x60;0&#x60; for Base.  *  &#x60;1&#x60; for Epic. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;IssueTypeDetails&gt;**](IssueTypeDetails.md)

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
| **404** | Returned if:   *  the project is not found.  *  the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueType

> IssueTypeDetails updateIssueType(id, issueTypeUpdateBean)

Update issue type

Updates the issue type.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypesApi,
} from 'jira-cloud-api';
import type { UpdateIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypesApi(config);

  const body = {
    // string | The ID of the issue type.
    id: id_example,
    // IssueTypeUpdateBean
    issueTypeUpdateBean: {"avatarId":1,"description":"description","name":"name"},
  } satisfies UpdateIssueTypeRequest;

  try {
    const data = await api.updateIssueType(body);
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
| **id** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **issueTypeUpdateBean** | [IssueTypeUpdateBean](IssueTypeUpdateBean.md) |  | |

### Return type

[**IssueTypeDetails**](IssueTypeDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid because:   *  no content is sent.  *  the issue type name exceeds 60 characters.  *  the avatar is not associated with this issue type. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the issue type is not found. |  -  |
| **409** | Returned if the issue type name is in use. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

