# ExperimentalApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLabelsToSpace**](ExperimentalApi.md#addlabelstospace) | **POST** /wiki/rest/api/space/{spaceKey}/label | Add labels to a space |
| [**deleteLabelFromSpace**](ExperimentalApi.md#deletelabelfromspace) | **DELETE** /wiki/rest/api/space/{spaceKey}/label | Remove label from a space |
| [**deletePageTree**](ExperimentalApi.md#deletepagetree) | **DELETE** /wiki/rest/api/content/{id}/pageTree | Delete page tree |
| [**getLabelsForSpace**](ExperimentalApi.md#getlabelsforspace) | **GET** /wiki/rest/api/space/{spaceKey}/label | Get Space Labels |



## addLabelsToSpace

> LabelArray addLabelsToSpace(spaceKey, labelCreate)

Add labels to a space

Adds labels to a piece of content. Does not modify the existing labels.  Notes:  - Labels can also be added when creating content ([Create content](#api-content-post)). - Labels can be updated when updating content ([Update content](#api-content-id-put)). This will delete the existing labels and replace them with the labels in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ExperimentalApi,
} from 'confluence-cloud-api-v1';
import type { AddLabelsToSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ExperimentalApi(config);

  const body = {
    // string | The key of the space to add labels to.
    spaceKey: spaceKey_example,
    // Array<LabelCreate> | The labels to add to the content.
    labelCreate: ...,
  } satisfies AddLabelsToSpaceRequest;

  try {
    const data = await api.addLabelsToSpace(body);
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
| **spaceKey** | `string` | The key of the space to add labels to. | [Defaults to `undefined`] |
| **labelCreate** | `Array<LabelCreate>` | The labels to add to the content. | |

### Return type

[**LabelArray**](LabelArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the labels are added to the content. |  -  |
| **400** | Returned if;  - The body contains labels with invalid characters or too many characters. - The body contains too many labels. - The target content would contain too many labels after the operation. - The calling user does not have permission to edit labels. |  -  |
| **403** | Returned if the calling user can view but not edit the content. |  -  |
| **404** | Returned if; - There is no space with the given space key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteLabelFromSpace

> deleteLabelFromSpace(spaceKey, name, prefix)

Remove label from a space



### Example

```ts
import {
  Configuration,
  ExperimentalApi,
} from 'confluence-cloud-api-v1';
import type { DeleteLabelFromSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ExperimentalApi(config);

  const body = {
    // string | The key of the space to remove a labels from.
    spaceKey: spaceKey_example,
    // string | The name of the label to remove
    name: name_example,
    // string | The prefix of the label to remove. If not provided defaults to global. (optional)
    prefix: prefix_example,
  } satisfies DeleteLabelFromSpaceRequest;

  try {
    const data = await api.deleteLabelFromSpace(body);
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
| **spaceKey** | `string` | The key of the space to remove a labels from. | [Defaults to `undefined`] |
| **name** | `string` | The name of the label to remove | [Defaults to `undefined`] |
| **prefix** | `string` | The prefix of the label to remove. If not provided defaults to global. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the label was successfully deleted. |  -  |
| **400** | Returned if; - The user does not provide a label name |  -  |
| **404** | Returned if; - There is no space with the given space key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePageTree

> LongTask deletePageTree(id)

Delete page tree

Moves a pagetree rooted at a page to the space\&#39;s trash:  - If the content\&#39;s type is &#x60;page&#x60; and its status is &#x60;current&#x60;, it will be trashed including all its descendants. - For every other combination of content type and status, this API is not supported.  This API accepts the pageTree delete request and returns a task ID. The delete process happens asynchronously.   Response example:  &lt;pre&gt;&lt;code&gt;  {       \&quot;id\&quot; : \&quot;1180606\&quot;,       \&quot;links\&quot; : {            \&quot;status\&quot; : \&quot;/rest/api/longtask/1180606\&quot;       }  }  &lt;/code&gt;&lt;/pre&gt;  Use the &#x60;/longtask/&lt;taskId&gt;&#x60; REST API to get the copy task status.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Delete\&#39; permission for the space that the content is in.

### Example

```ts
import {
  Configuration,
  ExperimentalApi,
} from 'confluence-cloud-api-v1';
import type { DeletePageTreeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ExperimentalApi(config);

  const body = {
    // string | The ID of the content which forms root of the page tree, to be deleted.
    id: id_example,
  } satisfies DeletePageTreeRequest;

  try {
    const data = await api.deletePageTree(body);
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
| **id** | `string` | The ID of the content which forms root of the page tree, to be deleted. | [Defaults to `undefined`] |

### Return type

[**LongTask**](LongTask.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returned if the request to trash content and all its current page descendants, is successfully accepted. |  -  |
| **400** | Returned if the content id is invalid or id does not represents a \&#39;CURRENT\&#39; page. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the calling user can not delete the content with specified id. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The requesting user does not have permission to trash the content or any of it\&#39;s descendant pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabelsForSpace

> LabelArray getLabelsForSpace(spaceKey, prefix, start, limit)

Get Space Labels

Returns a list of labels associated with a space. Can provide a prefix as well as other filters to select different types of labels.

### Example

```ts
import {
  Configuration,
  ExperimentalApi,
} from 'confluence-cloud-api-v1';
import type { GetLabelsForSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ExperimentalApi(config);

  const body = {
    // string | The key of the space to get labels for.
    spaceKey: spaceKey_example,
    // 'global' | 'my' | 'team' | Filters the results to labels with the specified prefix. If this parameter is not specified, then labels with any prefix will be returned.  - `global` prefix is used by labels that are on content within the provided space. - `my` prefix can be explicitly added by a user when adding a label via the UI, e.g. \'my:example-label\'. - `team` prefix is used for labels applied to the space. (optional)
    prefix: prefix_example,
    // number | The starting index of the returned labels. (optional)
    start: 56,
    // number | The maximum number of labels to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetLabelsForSpaceRequest;

  try {
    const data = await api.getLabelsForSpace(body);
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
| **spaceKey** | `string` | The key of the space to get labels for. | [Defaults to `undefined`] |
| **prefix** | `global`, `my`, `team` | Filters the results to labels with the specified prefix. If this parameter is not specified, then labels with any prefix will be returned.  - &#x60;global&#x60; prefix is used by labels that are on content within the provided space. - &#x60;my&#x60; prefix can be explicitly added by a user when adding a label via the UI, e.g. \&#39;my:example-label\&#39;. - &#x60;team&#x60; prefix is used for labels applied to the space. | [Optional] [Defaults to `undefined`] [Enum: global, my, team] |
| **start** | `number` | The starting index of the returned labels. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of labels to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `200`] |

### Return type

[**LabelArray**](LabelArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the list of labels is returned. |  -  |
| **404** | Returned if; - There is no space with the given space key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

