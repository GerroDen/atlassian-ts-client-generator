# ContentStatesApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAvailableContentStates**](ContentStatesApi.md#getavailablecontentstates) | **GET** /wiki/rest/api/content/{id}/state/available | Gets available content states for content. |
| [**getContentState**](ContentStatesApi.md#getcontentstate) | **GET** /wiki/rest/api/content/{id}/state | Get content state |
| [**getContentStateSettings**](ContentStatesApi.md#getcontentstatesettings) | **GET** /wiki/rest/api/space/{spaceKey}/state/settings | Get content state settings for space |
| [**getContentsWithState**](ContentStatesApi.md#getcontentswithstate) | **GET** /wiki/rest/api/space/{spaceKey}/state/content | Get content in space with given content state |
| [**getCustomContentStates**](ContentStatesApi.md#getcustomcontentstates) | **GET** /wiki/rest/api/content-states | Get Custom Content States |
| [**getSpaceContentStates**](ContentStatesApi.md#getspacecontentstates) | **GET** /wiki/rest/api/space/{spaceKey}/state | Get space suggested content states |
| [**removeContentState**](ContentStatesApi.md#removecontentstate) | **DELETE** /wiki/rest/api/content/{id}/state | Removes the content state of a content and publishes a new version. |
| [**setContentState**](ContentStatesApi.md#setcontentstate) | **PUT** /wiki/rest/api/content/{id}/state | Set the content state of a content and publishes a new version of the content. |



## getAvailableContentStates

> AvailableContentStates getAvailableContentStates(id)

Gets available content states for content.

Gets content states that are available for the content to be set as. Will return all enabled Space Content States. Will only return most the 3 most recently published custom content states to match UI editor list. To get all custom content states, use the /content-states endpoint.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { GetAvailableContentStatesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | id of content to get available states for
    id: id_example,
  } satisfies GetAvailableContentStatesRequest;

  try {
    const data = await api.getAvailableContentStates(body);
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
| **id** | `string` | id of content to get available states for | [Defaults to `undefined`] |

### Return type

[**AvailableContentStates**](AvailableContentStates.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content is found and permission is valid. |  -  |
| **400** | Invalid status for content. Must be in [current,draft,archived]. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have content edit permission. |  -  |
| **404** | Returned if the content with given id can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentState

> ContentStateResponse getContentState(id, status)

Get content state

Gets the current content state of the draft or current version of content. To specify the draft version, set the parameter status to draft, otherwise archived or current will get the relevant published state. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { GetContentStateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | The id of the content whose content state is of interest.
    id: id_example,
    // 'current' | 'draft' | 'archived' | Set status to one of [current,draft,archived]. Default value is current. (optional)
    status: status_example,
  } satisfies GetContentStateRequest;

  try {
    const data = await api.getContentState(body);
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
| **id** | `string` | The id of the content whose content state is of interest. | [Defaults to `undefined`] |
| **status** | `current`, `draft`, `archived` | Set status to one of [current,draft,archived]. Default value is current. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, draft, archived] |

### Return type

[**ContentStateResponse**](ContentStateResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if permission allows viewing of content. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have content view permission. |  -  |
| **404** | Returned if the content with given id can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentStateSettings

> ContentStateSettings getContentStateSettings(spaceKey)

Get content state settings for space

Get object describing whether content states are allowed at all, if custom content states or space content states are restricted, and a list of space content states allowed for the space if they are not restricted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { GetContentStateSettingsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | The key of the space to be queried for its content state settings.
    spaceKey: spaceKey_example,
  } satisfies GetContentStateSettingsRequest;

  try {
    const data = await api.getContentStateSettings(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its content state settings. | [Defaults to `undefined`] |

### Return type

[**ContentStateSettings**](ContentStateSettings.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space exists, and user has space admin permission. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have space admin permission. |  -  |
| **404** | Returned if the space with given key can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentsWithState

> ContentArray getContentsWithState(spaceKey, stateId, expand, limit, start)

Get content in space with given content state

Returns all content that has the provided content state in a space.  If the expand query parameter is used with the &#x60;body.export_view&#x60; and/or &#x60;body.styled_view&#x60; properties, then the query limit parameter will be restricted to a maximum value of 25.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { GetContentsWithStateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | The key of the space to be queried for its content state settings.
    spaceKey: spaceKey_example,
    // number | The id of the content state to filter content by
    stateId: 56,
    // Array<string> | A multi-value parameter indicating which properties of the content to expand. Options include: space, version, history, children, etc.  Ex: space,version (optional)
    expand: ...,
    // number | Maximum number of results to return (optional)
    limit: 56,
    // number | Number of result to start returning. (0 indexed) (optional)
    start: 56,
  } satisfies GetContentsWithStateRequest;

  try {
    const data = await api.getContentsWithState(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its content state settings. | [Defaults to `undefined`] |
| **stateId** | `number` | The id of the content state to filter content by | [Defaults to `undefined`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the content to expand. Options include: space, version, history, children, etc.  Ex: space,version | [Optional] |
| **limit** | `number` | Maximum number of results to return | [Optional] [Defaults to `25`] |
| **start** | `number` | Number of result to start returning. (0 indexed) | [Optional] [Defaults to `undefined`] |

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if search was successful. |  -  |
| **400** | Returned if limit or start are out of range, stateId is omitted. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have space view permission. |  -  |
| **404** | Returned if the space with given key can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentStates

> Array&lt;ContentState&gt; getCustomContentStates()

Get Custom Content States

Get custom content states that authenticated user has created.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required** Must have user authentication.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { GetCustomContentStatesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  try {
    const data = await api.getCustomContentStates();
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

[**Array&lt;ContentState&gt;**](ContentState.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Custom Content States that user has crated. Returned if user authenticated. |  -  |
| **401** | Returned if user is not authenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceContentStates

> Array&lt;ContentState&gt; getSpaceContentStates(spaceKey)

Get space suggested content states

Get content states that are suggested in the space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { GetSpaceContentStatesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | The key of the space to be queried for its content state settings.
    spaceKey: spaceKey_example,
  } satisfies GetSpaceContentStatesRequest;

  try {
    const data = await api.getSpaceContentStates(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its content state settings. | [Defaults to `undefined`] |

### Return type

[**Array&lt;ContentState&gt;**](ContentState.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space exists, and user has space view permission. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have space admin permission. |  -  |
| **404** | Returned if the space with given key can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeContentState

> ContentStateResponse removeContentState(id, status)

Removes the content state of a content and publishes a new version.

Removes the content state of the content specified and creates a new version (publishes the content without changing the body) of the content with the new status.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { RemoveContentStateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | The Id of the content whose content state is to be set.
    id: id_example,
    // 'current' | 'draft' | status of content state from which to delete state. Can be draft or archived (optional)
    status: status_example,
  } satisfies RemoveContentStateRequest;

  try {
    const data = await api.removeContentState(body);
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
| **id** | `string` | The Id of the content whose content state is to be set. | [Defaults to `undefined`] |
| **status** | `current`, `draft` | status of content state from which to delete state. Can be draft or archived | [Optional] [Defaults to `undefined`] [Enum: current, draft] |

### Return type

[**ContentStateResponse**](ContentStateResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if content state is removed from content. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have content edit permission. |  -  |
| **404** | Returned if the content with given id can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setContentState

> ContentStateResponse setContentState(id, status, contentStateRestInput)

Set the content state of a content and publishes a new version of the content.

Sets the content state of the content specified and creates a new version (publishes the content without changing the body) of the content with the new state.  You may pass in either an id of a state, or the name and color of a desired new state. If all 3 are passed in, id will be used. If the name and color passed in already exist under the current user\&#39;s existing custom states, the existing state will be reused. If custom states are disabled in the space of the content (which can be determined by getting the content state space settings of the content\&#39;s space) then this set will fail.  You may not remove a content state via this PUT request. You must use the DELETE method. A specified state is required in the body of this request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentStatesApi,
} from 'confluence-cloud-api-v1';
import type { SetContentStateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentStatesApi(config);

  const body = {
    // string | The Id of the content whose content state is to be set.
    id: id_example,
    // 'current' | 'draft' | Status of content onto which state will be placed. If draft, then draft state will change. If current, state will be placed onto a new version of the content with same body as previous version.
    status: status_example,
    // ContentStateRestInput | Content state fields for state. Pass in id for an existing state, or new name and color for best matching existing state, or new state if allowed in space.
    contentStateRestInput: ...,
  } satisfies SetContentStateRequest;

  try {
    const data = await api.setContentState(body);
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
| **id** | `string` | The Id of the content whose content state is to be set. | [Defaults to `undefined`] |
| **status** | `current`, `draft` | Status of content onto which state will be placed. If draft, then draft state will change. If current, state will be placed onto a new version of the content with same body as previous version. | [Defaults to `undefined`] [Enum: current, draft] |
| **contentStateRestInput** | [ContentStateRestInput](ContentStateRestInput.md) | Content state fields for state. Pass in id for an existing state, or new name and color for best matching existing state, or new state if allowed in space. | |

### Return type

[**ContentStateResponse**](ContentStateResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if content state is set successfully. |  -  |
| **400** | Invalid Name/Color, non-existent id of content state, or type of state desired is not allowed. Name must be less than or exactly 20 characters. Color must be a valid hex string. Status must be in [draft,current]. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if user does not have content edit permission. |  -  |
| **404** | Returned if the content with given id can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

