# AvatarsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAvatar**](AvatarsApi.md#deleteavatar) | **DELETE** /rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id} | Delete avatar |
| [**getAllSystemAvatars**](AvatarsApi.md#getallsystemavatars) | **GET** /rest/api/3/avatar/{type}/system | Get system avatars by type |
| [**getAvatarImageByID**](AvatarsApi.md#getavatarimagebyid) | **GET** /rest/api/3/universal_avatar/view/type/{type}/avatar/{id} | Get avatar image by ID |
| [**getAvatarImageByOwner**](AvatarsApi.md#getavatarimagebyowner) | **GET** /rest/api/3/universal_avatar/view/type/{type}/owner/{entityId} | Get avatar image by owner |
| [**getAvatarImageByType**](AvatarsApi.md#getavatarimagebytype) | **GET** /rest/api/3/universal_avatar/view/type/{type} | Get avatar image by type |
| [**getAvatars**](AvatarsApi.md#getavatars) | **GET** /rest/api/3/universal_avatar/type/{type}/owner/{entityId} | Get avatars |
| [**storeAvatar**](AvatarsApi.md#storeavatar) | **POST** /rest/api/3/universal_avatar/type/{type}/owner/{entityId} | Load avatar |



## deleteAvatar

> deleteAvatar(type, owningObjectId, id)

Delete avatar

Deletes an avatar from a project, issue type or priority.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { DeleteAvatarRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'project' | 'issuetype' | 'priority' | The avatar type.
    type: type_example,
    // string | The ID of the item the avatar is associated with.
    owningObjectId: owningObjectId_example,
    // number | The ID of the avatar.
    id: 789,
  } satisfies DeleteAvatarRequest;

  try {
    const data = await api.deleteAvatar(body);
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
| **type** | `project`, `issuetype`, `priority` | The avatar type. | [Defaults to `undefined`] [Enum: project, issuetype, priority] |
| **owningObjectId** | `string` | The ID of the item the avatar is associated with. | [Defaults to `undefined`] |
| **id** | `number` | The ID of the avatar. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the user does not have permission to delete the avatar, the avatar is not deletable. |  -  |
| **404** | Returned if the avatar type, associated item ID, or avatar ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllSystemAvatars

> SystemAvatars getAllSystemAvatars(type)

Get system avatars by type

Returns a list of system avatar details by owner type, where the owner types are issue type, project, user or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { GetAllSystemAvatarsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'issuetype' | 'project' | 'user' | 'priority' | The avatar type.
    type: project,
  } satisfies GetAllSystemAvatarsRequest;

  try {
    const data = await api.getAllSystemAvatars(body);
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
| **type** | `issuetype`, `project`, `user`, `priority` | The avatar type. | [Defaults to `undefined`] [Enum: issuetype, project, user, priority] |

### Return type

[**SystemAvatars**](SystemAvatars.md)

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
| **500** | Returned if an error occurs while retrieving the list of avatars. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvatarImageByID

> getAvatarImageByID(type, id, size, format)

Get avatar image by ID

Returns a project, issue type or priority avatar image by ID.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  For system avatars, none.  *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  For priority avatars, none.

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { GetAvatarImageByIDRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'issuetype' | 'project' | 'priority' | The icon type of the avatar.
    type: type_example,
    // number | The ID of the avatar.
    id: 789,
    // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | The size of the avatar image. If not provided the default size is returned. (optional)
    size: size_example,
    // 'png' | 'svg' | The format to return the avatar image in. If not provided the original content format is returned. (optional)
    format: format_example,
  } satisfies GetAvatarImageByIDRequest;

  try {
    const data = await api.getAvatarImageByID(body);
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
| **type** | `issuetype`, `project`, `priority` | The icon type of the avatar. | [Defaults to `undefined`] [Enum: issuetype, project, priority] |
| **id** | `number` | The ID of the avatar. | [Defaults to `undefined`] |
| **size** | `xsmall`, `small`, `medium`, `large`, `xlarge` | The size of the avatar image. If not provided the default size is returned. | [Optional] [Defaults to `undefined`] [Enum: xsmall, small, medium, large, xlarge] |
| **format** | `png`, `svg` | The format to return the avatar image in. If not provided the original content format is returned. | [Optional] [Defaults to `undefined`] [Enum: png, svg] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/json`, `image/png`, `image/svg+xml`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if an avatar is not found or an avatar matching the requested size is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvatarImageByOwner

> getAvatarImageByOwner(type, entityId, size, format)

Get avatar image by owner

Returns the avatar image for a project, issue type or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  For system avatars, none.  *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  For priority avatars, none.

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { GetAvatarImageByOwnerRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'issuetype' | 'project' | 'priority' | The icon type of the avatar.
    type: type_example,
    // string | The ID of the project or issue type the avatar belongs to.
    entityId: entityId_example,
    // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | The size of the avatar image. If not provided the default size is returned. (optional)
    size: size_example,
    // 'png' | 'svg' | The format to return the avatar image in. If not provided the original content format is returned. (optional)
    format: format_example,
  } satisfies GetAvatarImageByOwnerRequest;

  try {
    const data = await api.getAvatarImageByOwner(body);
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
| **type** | `issuetype`, `project`, `priority` | The icon type of the avatar. | [Defaults to `undefined`] [Enum: issuetype, project, priority] |
| **entityId** | `string` | The ID of the project or issue type the avatar belongs to. | [Defaults to `undefined`] |
| **size** | `xsmall`, `small`, `medium`, `large`, `xlarge` | The size of the avatar image. If not provided the default size is returned. | [Optional] [Defaults to `undefined`] [Enum: xsmall, small, medium, large, xlarge] |
| **format** | `png`, `svg` | The format to return the avatar image in. If not provided the original content format is returned. | [Optional] [Defaults to `undefined`] [Enum: png, svg] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/json`, `image/png`, `image/svg+xml`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if an avatar is not found or an avatar matching the requested size is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvatarImageByType

> getAvatarImageByType(type, size, format)

Get avatar image by type

Returns the default project, issue type or priority avatar image.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { GetAvatarImageByTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'issuetype' | 'project' | 'priority' | The icon type of the avatar.
    type: type_example,
    // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | The size of the avatar image. If not provided the default size is returned. (optional)
    size: size_example,
    // 'png' | 'svg' | The format to return the avatar image in. If not provided the original content format is returned. (optional)
    format: format_example,
  } satisfies GetAvatarImageByTypeRequest;

  try {
    const data = await api.getAvatarImageByType(body);
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
| **type** | `issuetype`, `project`, `priority` | The icon type of the avatar. | [Defaults to `undefined`] [Enum: issuetype, project, priority] |
| **size** | `xsmall`, `small`, `medium`, `large`, `xlarge` | The size of the avatar image. If not provided the default size is returned. | [Optional] [Defaults to `undefined`] [Enum: xsmall, small, medium, large, xlarge] |
| **format** | `png`, `svg` | The format to return the avatar image in. If not provided the original content format is returned. | [Optional] [Defaults to `undefined`] [Enum: png, svg] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/json`, `image/png`, `image/svg+xml`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if an avatar is not found or an avatar matching the requested size is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvatars

> Avatars getAvatars(type, entityId)

Get avatars

Returns the system and custom avatars for a project, issue type or priority.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  for custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.  *  for custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.  *  for system avatars, none.  *  for priority avatars, none.

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { GetAvatarsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'project' | 'issuetype' | 'priority' | The avatar type.
    type: type_example,
    // string | The ID of the item the avatar is associated with.
    entityId: entityId_example,
  } satisfies GetAvatarsRequest;

  try {
    const data = await api.getAvatars(body);
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
| **type** | `project`, `issuetype`, `priority` | The avatar type. | [Defaults to `undefined`] [Enum: project, issuetype, priority] |
| **entityId** | `string` | The ID of the item the avatar is associated with. | [Defaults to `undefined`] |

### Return type

[**Avatars**](Avatars.md)

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
| **404** | Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storeAvatar

> Avatar storeAvatar(type, entityId, size, body, x, y)

Load avatar

Loads a custom avatar for a project, issue type or priority.  Specify the avatar\&#39;s local file location in the body of the request. Also, include the following headers:   *  &#x60;X-Atlassian-Token: no-check&#x60; To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  &#x60;Content-Type: image/image type&#x60; Valid image types are JPEG, GIF, or PNG.  For example:   &#x60;curl --request POST &#x60;  &#x60;--user email@example.com:&lt;api_token&gt; &#x60;  &#x60;--header \&#39;X-Atlassian-Token: no-check\&#39; &#x60;  &#x60;--header \&#39;Content-Type: image/&lt; image_type&gt;\&#39; &#x60;  &#x60;--data-binary \&quot;&lt;@/path/to/file/with/your/avatar&gt;\&quot; &#x60;  &#x60;--url \&#39;https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}\&#39;&#x60;  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\&#39;s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use:   *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type\&#39;s displayed avatar.  *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project\&#39;s displayed avatar.  *  [Update priority](#api-rest-api-3-priority-id-put) to set it as the priority\&#39;s displayed avatar.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'jira-cloud-api';
import type { StoreAvatarRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'project' | 'issuetype' | 'priority' | The avatar type.
    type: type_example,
    // string | The ID of the item the avatar is associated with.
    entityId: entityId_example,
    // number | The length of each side of the crop region.
    size: 56,
    // any
    body: ...,
    // number | The X coordinate of the top-left corner of the crop region. (optional)
    x: 56,
    // number | The Y coordinate of the top-left corner of the crop region. (optional)
    y: 56,
  } satisfies StoreAvatarRequest;

  try {
    const data = await api.storeAvatar(body);
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
| **type** | `project`, `issuetype`, `priority` | The avatar type. | [Defaults to `undefined`] [Enum: project, issuetype, priority] |
| **entityId** | `string` | The ID of the item the avatar is associated with. | [Defaults to `undefined`] |
| **size** | `number` | The length of each side of the crop region. | [Defaults to `0`] |
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
| **400** | Returned if:   *  an image isn\&#39;t included in the request.  *  the image type is unsupported.  *  the crop parameters extend the crop area beyond the edge of the image. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permissions. |  -  |
| **404** | Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

