# TemplateApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createContentTemplate**](TemplateApi.md#createcontenttemplate) | **POST** /wiki/rest/api/template | Create content template |
| [**getBlueprintTemplates**](TemplateApi.md#getblueprinttemplates) | **GET** /wiki/rest/api/template/blueprint | Get blueprint templates |
| [**getContentTemplate**](TemplateApi.md#getcontenttemplate) | **GET** /wiki/rest/api/template/{contentTemplateId} | Get content template |
| [**getContentTemplates**](TemplateApi.md#getcontenttemplates) | **GET** /wiki/rest/api/template/page | Get content templates |
| [**removeTemplate**](TemplateApi.md#removetemplate) | **DELETE** /wiki/rest/api/template/{contentTemplateId} | Remove template |
| [**updateContentTemplate**](TemplateApi.md#updatecontenttemplate) | **PUT** /wiki/rest/api/template | Update content template |



## createContentTemplate

> ContentTemplate createContentTemplate(body)

Create content template

Creates a new content template. Note, blueprint templates cannot be created via the REST API.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space to create a space template or \&#39;Confluence Administrator\&#39; global permission to create a global template.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from 'confluence-cloud-api-v1';
import type { CreateContentTemplateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TemplateApi(config);

  const body = {
    // ContentTemplateCreate | The content template to be created. The content body must be in \'storage\' format.
    body: ...,
  } satisfies CreateContentTemplateRequest;

  try {
    const data = await api.createContentTemplate(body);
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
| **body** | [ContentTemplateCreate](ContentTemplateCreate.md) | The content template to be created. The content body must be in \&#39;storage\&#39; format. | |

### Return type

[**ContentTemplate**](ContentTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the template is created. |  -  |
| **400** | Returned if template name is null or an empty string. |  -  |
| **403** | Returned if the calling user does not have permission to create the template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlueprintTemplates

> BlueprintTemplateArray getBlueprintTemplates(spaceKey, start, limit, expand)

Get blueprint templates

Returns all templates provided by blueprints. Use this method to retrieve all global blueprint templates or all blueprint templates in a space.  Note, all global blueprints are inherited by each space. Space blueprints can be customised without affecting the global blueprints.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space to view blueprints for the space and permission to access the Confluence site (\&#39;Can use\&#39; global permission) to view global blueprints.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from 'confluence-cloud-api-v1';
import type { GetBlueprintTemplatesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TemplateApi(config);

  const body = {
    // string | The key of the space to be queried for templates. If the `spaceKey` is not specified, global blueprint templates will be returned. (optional)
    spaceKey: spaceKey_example,
    // number | The starting index of the returned templates. (optional)
    start: 56,
    // number | The maximum number of templates to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
    // Array<'body' | 'body.storage'> | A multi-value parameter indicating which properties of the template to expand.  - `body` or `body.storage` returns the content of the template in storage format. (optional)
    expand: ...,
  } satisfies GetBlueprintTemplatesRequest;

  try {
    const data = await api.getBlueprintTemplates(body);
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
| **spaceKey** | `string` | The key of the space to be queried for templates. If the &#x60;spaceKey&#x60; is not specified, global blueprint templates will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned templates. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of templates to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |
| **expand** | `body`, `body.storage` | A multi-value parameter indicating which properties of the template to expand.  - &#x60;body&#x60; or &#x60;body.storage&#x60; returns the content of the template in storage format. | [Optional] [Enum: body, body.storage] |

### Return type

[**BlueprintTemplateArray**](BlueprintTemplateArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested templates are returned. |  -  |
| **403** | Returned if the calling user does not have permission to view blueprint templates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentTemplate

> ContentTemplate getContentTemplate(contentTemplateId, expand)

Get content template

Returns a content template. This includes information about template, like the name, the space or blueprint that the template is in, the body of the template, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space to view space templates and permission to access the Confluence site (\&#39;Can use\&#39; global permission) to view global templates.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from 'confluence-cloud-api-v1';
import type { GetContentTemplateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TemplateApi(config);

  const body = {
    // string | The ID of the content template to be returned.
    contentTemplateId: contentTemplateId_example,
    // Array<'body' | 'body.storage'> | A multi-value parameter indicating which properties of the template to expand.  - `body` or `body.storage` returns the content of the template in storage format. (optional)
    expand: ...,
  } satisfies GetContentTemplateRequest;

  try {
    const data = await api.getContentTemplate(body);
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
| **contentTemplateId** | `string` | The ID of the content template to be returned. | [Defaults to `undefined`] |
| **expand** | `body`, `body.storage` | A multi-value parameter indicating which properties of the template to expand.  - &#x60;body&#x60; or &#x60;body.storage&#x60; returns the content of the template in storage format. | [Optional] [Enum: body, body.storage] |

### Return type

[**ContentTemplate**](ContentTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested template is returned. |  -  |
| **403** | Returned if;  - There is no template with the given ID. - The calling user does not have permission to view the template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentTemplates

> ContentTemplateArray getContentTemplates(spaceKey, start, limit, expand)

Get content templates

Returns all content templates. Use this method to retrieve all global content templates or all content templates in a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space to view space templates and permission to access the Confluence site (\&#39;Can use\&#39; global permission) to view global templates.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from 'confluence-cloud-api-v1';
import type { GetContentTemplatesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TemplateApi(config);

  const body = {
    // string | The key of the space to be queried for templates. If the `spaceKey` is not specified, global templates will be returned. (optional)
    spaceKey: spaceKey_example,
    // number | The starting index of the returned templates. (optional)
    start: 56,
    // number | The maximum number of templates to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
    // Array<'body' | 'body.storage'> | A multi-value parameter indicating which properties of the template to expand.  - `body` or `body.storage` returns the content of the template in storage format. (optional)
    expand: ...,
  } satisfies GetContentTemplatesRequest;

  try {
    const data = await api.getContentTemplates(body);
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
| **spaceKey** | `string` | The key of the space to be queried for templates. If the &#x60;spaceKey&#x60; is not specified, global templates will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned templates. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of templates to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |
| **expand** | `body`, `body.storage` | A multi-value parameter indicating which properties of the template to expand.  - &#x60;body&#x60; or &#x60;body.storage&#x60; returns the content of the template in storage format. | [Optional] [Enum: body, body.storage] |

### Return type

[**ContentTemplateArray**](ContentTemplateArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested templates are returned. |  -  |
| **403** | Returned if the calling user does not have permission to view the content templates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeTemplate

> removeTemplate(contentTemplateId)

Remove template

Deletes a template. This results in different actions depending on the type of template:  - If the template is a content template, it is deleted. - If the template is a modified space-level blueprint template, it reverts to the template inherited from the global-level blueprint template. - If the template is a modified global-level blueprint template, it reverts to the default global-level blueprint template.   Note, unmodified blueprint templates cannot be deleted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:         \&#39;Admin\&#39; permission for the space to delete a space template or \&#39;Confluence Administrator\&#39;         global permission to delete a global template.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from 'confluence-cloud-api-v1';
import type { RemoveTemplateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TemplateApi(config);

  const body = {
    // string | The ID of the template to be deleted.
    contentTemplateId: contentTemplateId_example,
  } satisfies RemoveTemplateRequest;

  try {
    const data = await api.removeTemplate(body);
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
| **contentTemplateId** | `string` | The ID of the template to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the template has been successfully been deleted. |  -  |
| **403** | Returned if;  - There is no template with the given ID. - The calling user does not have permission to delete the template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContentTemplate

> ContentTemplate updateContentTemplate(body)

Update content template

Updates a content template. Note, blueprint templates cannot be updated via the REST API.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space to update a space template or \&#39;Confluence Administrator\&#39; global permission to update a global template.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from 'confluence-cloud-api-v1';
import type { UpdateContentTemplateRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TemplateApi(config);

  const body = {
    // ContentTemplateUpdate | The updated content template.
    body: ...,
  } satisfies UpdateContentTemplateRequest;

  try {
    const data = await api.updateContentTemplate(body);
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
| **body** | [ContentTemplateUpdate](ContentTemplateUpdate.md) | The updated content template. | |

### Return type

[**ContentTemplate**](ContentTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the template is updated. |  -  |
| **400** | Returned if template name is null or an empty string. |  -  |
| **403** | Returned if the calling user does not have permission. |  -  |
| **404** | Returned if the calling user does not have permission to update the template or if the template doesn\&#39;t exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

