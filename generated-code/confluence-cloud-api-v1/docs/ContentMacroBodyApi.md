# ContentMacroBodyApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAndAsyncConvertMacroBodyByMacroId**](ContentMacroBodyApi.md#getandasyncconvertmacrobodybymacroid) | **GET** /wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}/convert/async/{to} | Get macro body by macro ID and convert representation Asynchronously |
| [**getAndConvertMacroBodyByMacroId**](ContentMacroBodyApi.md#getandconvertmacrobodybymacroid) | **GET** /wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}/convert/{to} | Get macro body by macro ID and convert the representation synchronously |
| [**getMacroBodyByMacroId**](ContentMacroBodyApi.md#getmacrobodybymacroid) | **GET** /wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId} | Get macro body by macro ID |



## getAndAsyncConvertMacroBodyByMacroId

> AsyncId getAndAsyncConvertMacroBodyByMacroId(id, version, macroId, to, expand, allowCache, spaceKeyContext, embeddedContentRender)

Get macro body by macro ID and convert representation Asynchronously

Returns Async Id of the conversion task which will convert the macro into a content body of the desired format. The result will be available for 5 minutes after completion of the conversion.  About the macro ID: When a macro is created in a new version of content, Confluence will generate a random ID for it, unless an ID is specified (by an app). The macro ID will look similar to this: \&#39;884bd9-0cb8-41d5-98be-f80943c14f96\&#39;. The ID is then persisted as new versions of content are created, and is only modified by Confluence if there are conflicting IDs.  For Forge macros, the value for macro ID is the \&quot;local ID\&quot; of that particular ADF node. This value can be retrieved either client-side by calling view.getContext() and accessing \&quot;localId\&quot; on the resulting object, or server-side by examining the \&quot;local-id\&quot; parameter node inside the \&quot;parameters\&quot; node.  Note that there are other attributes named \&quot;local-id\&quot;, but only this particular one is used to store the macro ID.  Example: &lt;ac:adf-node type&#x3D;\&quot;extension\&quot;&gt;   &lt;ac:adf-attribute key&#x3D;\&quot;extension-type\&quot;&gt;com.atlassian.ecosystem&lt;/ac:adf-attribute&gt;   &lt;ac:adf-attribute key&#x3D;\&quot;parameters\&quot;&gt;       &lt;ac:adf-parameter key&#x3D;\&quot;local-id\&quot;&gt;e9c4aa10-73fa-417c-888d-48c719ae4165&lt;/ac:adf-parameter&gt;   &lt;/ac:adf-parameter&gt; &lt;/ac:adf-node&gt;  Note, to preserve backwards compatibility this resource will also match on the hash of the macro body, even if a macro ID is found. This check will eventually become redundant, as macro IDs are generated for pages and transparently propagate out to all instances.  This backwards compatibility logic does not apply to Forge macros; those can only be retrieved by their ID.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content that the macro is in.

### Example

```ts
import {
  Configuration,
  ContentMacroBodyApi,
} from 'confluence-cloud-api-v1';
import type { GetAndAsyncConvertMacroBodyByMacroIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentMacroBodyApi(config);

  const body = {
    // string | The ID for the content that contains the macro.
    id: id_example,
    // number | The version of the content that contains the macro. Specifying `0` as the `version` will return the macro body for the latest content version.
    version: 56,
    // string | The ID of the macro. For apps, this is passed to the macro by the Connect/Forge framework. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, \'/content/196611/version/7?expand=content.body.storage\'.
    macroId: macroId_example,
    // 'export_view' | 'view' | 'styled_view' | The content representation to return the macro in. Currently, the following conversions are allowed:  - `export_view` - `styled_view` - `view`
    to: to_example,
    // Array<string> | A multi-value parameter indicating which properties of the content to expand and populate. Expands are dependent on the `to` conversion format and may be irrelevant for certain conversions (e.g. `macroRenderedOutput` is redundant when converting to `view` format).   If rendering to `view` format, and the body content being converted includes arbitrary nested content (such as macros); then it is  necessary to include webresource expands in the request. Webresources for content body are the batched JS and CSS dependencies for any nested dynamic content (i.e. macros).  - `embeddedContent` returns metadata for nested content (e.g. page included using page include macro) - `mediaToken` returns JWT token for retrieving attachment data from Media API - `macroRenderedOutput` additionally converts body to view format - `webresource.superbatch.uris.js` returns all common JS dependencies as static URLs - `webresource.superbatch.uris.css` returns all common CSS dependencies as static URLs - `webresource.superbatch.uris.all` returns all common dependencies as static URLs - `webresource.superbatch.tags.all` returns all common JS dependencies as html `<script>` tags - `webresource.superbatch.tags.css` returns all common CSS dependencies as html `<style>` tags - `webresource.superbatch.tags.js` returns all common dependencies as html `<script>` and `<style>` tags - `webresource.uris.js` returns JS dependencies specific to conversion - `webresource.uris.css` returns CSS dependencies specific to conversion - `webresource.uris.all` returns all dependencies specific to conversion      - `webresource.tags.all` returns common JS dependencies as html `<script>` tags - `webresource.tags.css` returns common CSS dependencies as html `<style>` tags - `webresource.tags.js` returns common dependencies as html `<script>` and `<style>` tags (optional)
    expand: ...,
    // boolean | Controls whether conversion results are cached and reused for identical requests.  - `false`: Each request creates a new conversion task, even if an identical request was made previously. - `true`: Enables caching behavior for identical requests from the same user.   - If no cached result exists, a new conversion task is created   - If a cached result exists, the existing task is marked as RERUNNING and will complete with status COMPLETED   - Returns the same task ID for identical requests, allowing you to retrieve the cached result  For large macros that are slow to convert and for which it is acceptable to show cached data, set this field to `true`. (optional)
    allowCache: true,
    // string | The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link `<ac:link><ri:page ri:content-title=\"Example page\" /><ac:link>` and the `spaceKeyContext=TEST` parameter is provided, then the link will be converted to a link to the \"Example page\" page in the \"TEST\" space. (optional)
    spaceKeyContext: spaceKeyContext_example,
    // 'current' | 'version-at-save' | Mode used for rendering embedded content, like attachments.  - `current` renders the embedded content using the latest version. - `version-at-save` renders the embedded content using the version at the time of save. (optional)
    embeddedContentRender: embeddedContentRender_example,
  } satisfies GetAndAsyncConvertMacroBodyByMacroIdRequest;

  try {
    const data = await api.getAndAsyncConvertMacroBodyByMacroId(body);
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
| **id** | `string` | The ID for the content that contains the macro. | [Defaults to `undefined`] |
| **version** | `number` | The version of the content that contains the macro. Specifying &#x60;0&#x60; as the &#x60;version&#x60; will return the macro body for the latest content version. | [Defaults to `undefined`] |
| **macroId** | `string` | The ID of the macro. For apps, this is passed to the macro by the Connect/Forge framework. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, \&#39;/content/196611/version/7?expand&#x3D;content.body.storage\&#39;. | [Defaults to `undefined`] |
| **to** | `export_view`, `view`, `styled_view` | The content representation to return the macro in. Currently, the following conversions are allowed:  - &#x60;export_view&#x60; - &#x60;styled_view&#x60; - &#x60;view&#x60; | [Defaults to `undefined`] [Enum: export_view, view, styled_view] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the content to expand and populate. Expands are dependent on the &#x60;to&#x60; conversion format and may be irrelevant for certain conversions (e.g. &#x60;macroRenderedOutput&#x60; is redundant when converting to &#x60;view&#x60; format).   If rendering to &#x60;view&#x60; format, and the body content being converted includes arbitrary nested content (such as macros); then it is  necessary to include webresource expands in the request. Webresources for content body are the batched JS and CSS dependencies for any nested dynamic content (i.e. macros).  - &#x60;embeddedContent&#x60; returns metadata for nested content (e.g. page included using page include macro) - &#x60;mediaToken&#x60; returns JWT token for retrieving attachment data from Media API - &#x60;macroRenderedOutput&#x60; additionally converts body to view format - &#x60;webresource.superbatch.uris.js&#x60; returns all common JS dependencies as static URLs - &#x60;webresource.superbatch.uris.css&#x60; returns all common CSS dependencies as static URLs - &#x60;webresource.superbatch.uris.all&#x60; returns all common dependencies as static URLs - &#x60;webresource.superbatch.tags.all&#x60; returns all common JS dependencies as html &#x60;&lt;script&gt;&#x60; tags - &#x60;webresource.superbatch.tags.css&#x60; returns all common CSS dependencies as html &#x60;&lt;style&gt;&#x60; tags - &#x60;webresource.superbatch.tags.js&#x60; returns all common dependencies as html &#x60;&lt;script&gt;&#x60; and &#x60;&lt;style&gt;&#x60; tags - &#x60;webresource.uris.js&#x60; returns JS dependencies specific to conversion - &#x60;webresource.uris.css&#x60; returns CSS dependencies specific to conversion - &#x60;webresource.uris.all&#x60; returns all dependencies specific to conversion      - &#x60;webresource.tags.all&#x60; returns common JS dependencies as html &#x60;&lt;script&gt;&#x60; tags - &#x60;webresource.tags.css&#x60; returns common CSS dependencies as html &#x60;&lt;style&gt;&#x60; tags - &#x60;webresource.tags.js&#x60; returns common dependencies as html &#x60;&lt;script&gt;&#x60; and &#x60;&lt;style&gt;&#x60; tags | [Optional] |
| **allowCache** | `boolean` | Controls whether conversion results are cached and reused for identical requests.  - &#x60;false&#x60;: Each request creates a new conversion task, even if an identical request was made previously. - &#x60;true&#x60;: Enables caching behavior for identical requests from the same user.   - If no cached result exists, a new conversion task is created   - If a cached result exists, the existing task is marked as RERUNNING and will complete with status COMPLETED   - Returns the same task ID for identical requests, allowing you to retrieve the cached result  For large macros that are slow to convert and for which it is acceptable to show cached data, set this field to &#x60;true&#x60;. | [Optional] [Defaults to `false`] |
| **spaceKeyContext** | `string` | The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link &#x60;&lt;ac:link&gt;&lt;ri:page ri:content-title&#x3D;\&quot;Example page\&quot; /&gt;&lt;ac:link&gt;&#x60; and the &#x60;spaceKeyContext&#x3D;TEST&#x60; parameter is provided, then the link will be converted to a link to the \&quot;Example page\&quot; page in the \&quot;TEST\&quot; space. | [Optional] [Defaults to `undefined`] |
| **embeddedContentRender** | `current`, `version-at-save` | Mode used for rendering embedded content, like attachments.  - &#x60;current&#x60; renders the embedded content using the latest version. - &#x60;version-at-save&#x60; renders the embedded content using the version at the time of save. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, version-at-save] |

### Return type

[**AsyncId**](AsyncId.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested macro conversion request is created. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - The macro does not exist in the specified version. - There is no macro matching the given macro ID or hash. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAndConvertMacroBodyByMacroId

> ContentBody getAndConvertMacroBodyByMacroId(id, version, macroId, to, expand, spaceKeyContext, embeddedContentRender)

Get macro body by macro ID and convert the representation synchronously

Returns the body of a macro in format specified in path, for the given macro ID. This includes information like the name of the macro, the body of the macro, and any macro parameters.  About the macro ID: When a macro is created in a new version of content, Confluence will generate a random ID for it, unless an ID is specified (by an app). The macro ID will look similar to this: \&#39;50884bd9-0cb8-41d5-98be-f80943c14f96\&#39;. The ID is then persisted as new versions of content are created, and is only modified by Confluence if there are conflicting IDs.  For Forge macros, the value for macro ID is the \&quot;local ID\&quot; of that particular ADF node. This value can be retrieved either client-side by calling view.getContext() and accessing \&quot;localId\&quot; on the resulting object, or server-side by examining the \&quot;local-id\&quot; parameter node inside the \&quot;parameters\&quot; node.  Note that there are other attributes named \&quot;local-id\&quot;, but only this particular one is used to store the macro ID.  Example: &lt;ac:adf-node type&#x3D;\&quot;extension\&quot;&gt;   &lt;ac:adf-attribute key&#x3D;\&quot;extension-type\&quot;&gt;com.atlassian.ecosystem&lt;/ac:adf-attribute&gt;   &lt;ac:adf-attribute key&#x3D;\&quot;parameters\&quot;&gt;       &lt;ac:adf-parameter key&#x3D;\&quot;local-id\&quot;&gt;e9c4aa10-73fa-417c-888d-48c719ae4165&lt;/ac:adf-parameter&gt;   &lt;/ac:adf-parameter&gt; &lt;/ac:adf-node&gt;  Note, to preserve backwards compatibility this resource will also match on the hash of the macro body, even if a macro ID is found. This check will eventually become redundant, as macro IDs are generated for pages and transparently propagate out to all instances.  This backwards compatibility logic does not apply to Forge macros; those can only be retrieved by their ID.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content that the macro is in.

### Example

```ts
import {
  Configuration,
  ContentMacroBodyApi,
} from 'confluence-cloud-api-v1';
import type { GetAndConvertMacroBodyByMacroIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentMacroBodyApi(config);

  const body = {
    // string | The ID for the content that contains the macro.
    id: id_example,
    // number | The version of the content that contains the macro. Specifying `0` as the `version` will return the macro body for the latest content version.
    version: 56,
    // string | The ID of the macro. This is usually passed by the app that the macro is in. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, \'/content/196611/version/7?expand=content.body.storage\'.
    macroId: macroId_example,
    // string | The content representation to return the macro in.
    to: to_example,
    // Array<string> | A multi-value parameter indicating which properties of the content to expand and populate. Expands are dependent on the `to` conversion format and may be irrelevant for certain conversions (e.g. `macroRenderedOutput` is redundant when converting to `view` format).   If rendering to `view` format, and the body content being converted includes arbitrary nested content (such as macros); then it is  necessary to include webresource expands in the request. Webresources for content body are the batched JS and CSS dependencies for any nested dynamic content (i.e. macros).  - `embeddedContent` returns metadata for nested content (e.g. page included using page include macro) - `mediaToken` returns JWT token for retrieving attachment data from Media API - `macroRenderedOutput` additionally converts body to view format - `webresource.superbatch.uris.js` returns all common JS dependencies as static URLs - `webresource.superbatch.uris.css` returns all common CSS dependencies as static URLs - `webresource.superbatch.uris.all` returns all common dependencies as static URLs - `webresource.superbatch.tags.all` returns all common JS dependencies as html `<script>` tags - `webresource.superbatch.tags.css` returns all common CSS dependencies as html `<style>` tags - `webresource.superbatch.tags.js` returns all common dependencies as html `<script>` and `<style>` tags - `webresource.uris.js` returns JS dependencies specific to conversion - `webresource.uris.css` returns CSS dependencies specific to conversion - `webresource.uris.all` returns all dependencies specific to conversion      - `webresource.tags.all` returns common JS dependencies as html `<script>` tags - `webresource.tags.css` returns common CSS dependencies as html `<style>` tags - `webresource.tags.js` returns common dependencies as html `<script>` and `<style>` tags (optional)
    expand: ...,
    // string | The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link `<ac:link><ri:page ri:content-title=\"Example page\" /><ac:link>` and the `spaceKeyContext=TEST` parameter is provided, then the link will be converted to a link to the \"Example page\" page in the \"TEST\" space. (optional)
    spaceKeyContext: spaceKeyContext_example,
    // 'current' | 'version-at-save' | Mode used for rendering embedded content, like attachments.  - `current` renders the embedded content using the latest version. - `version-at-save` renders the embedded content using the version at the time of save. (optional)
    embeddedContentRender: embeddedContentRender_example,
  } satisfies GetAndConvertMacroBodyByMacroIdRequest;

  try {
    const data = await api.getAndConvertMacroBodyByMacroId(body);
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
| **id** | `string` | The ID for the content that contains the macro. | [Defaults to `undefined`] |
| **version** | `number` | The version of the content that contains the macro. Specifying &#x60;0&#x60; as the &#x60;version&#x60; will return the macro body for the latest content version. | [Defaults to `undefined`] |
| **macroId** | `string` | The ID of the macro. This is usually passed by the app that the macro is in. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, \&#39;/content/196611/version/7?expand&#x3D;content.body.storage\&#39;. | [Defaults to `undefined`] |
| **to** | `string` | The content representation to return the macro in. | [Defaults to `undefined`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the content to expand and populate. Expands are dependent on the &#x60;to&#x60; conversion format and may be irrelevant for certain conversions (e.g. &#x60;macroRenderedOutput&#x60; is redundant when converting to &#x60;view&#x60; format).   If rendering to &#x60;view&#x60; format, and the body content being converted includes arbitrary nested content (such as macros); then it is  necessary to include webresource expands in the request. Webresources for content body are the batched JS and CSS dependencies for any nested dynamic content (i.e. macros).  - &#x60;embeddedContent&#x60; returns metadata for nested content (e.g. page included using page include macro) - &#x60;mediaToken&#x60; returns JWT token for retrieving attachment data from Media API - &#x60;macroRenderedOutput&#x60; additionally converts body to view format - &#x60;webresource.superbatch.uris.js&#x60; returns all common JS dependencies as static URLs - &#x60;webresource.superbatch.uris.css&#x60; returns all common CSS dependencies as static URLs - &#x60;webresource.superbatch.uris.all&#x60; returns all common dependencies as static URLs - &#x60;webresource.superbatch.tags.all&#x60; returns all common JS dependencies as html &#x60;&lt;script&gt;&#x60; tags - &#x60;webresource.superbatch.tags.css&#x60; returns all common CSS dependencies as html &#x60;&lt;style&gt;&#x60; tags - &#x60;webresource.superbatch.tags.js&#x60; returns all common dependencies as html &#x60;&lt;script&gt;&#x60; and &#x60;&lt;style&gt;&#x60; tags - &#x60;webresource.uris.js&#x60; returns JS dependencies specific to conversion - &#x60;webresource.uris.css&#x60; returns CSS dependencies specific to conversion - &#x60;webresource.uris.all&#x60; returns all dependencies specific to conversion      - &#x60;webresource.tags.all&#x60; returns common JS dependencies as html &#x60;&lt;script&gt;&#x60; tags - &#x60;webresource.tags.css&#x60; returns common CSS dependencies as html &#x60;&lt;style&gt;&#x60; tags - &#x60;webresource.tags.js&#x60; returns common dependencies as html &#x60;&lt;script&gt;&#x60; and &#x60;&lt;style&gt;&#x60; tags | [Optional] |
| **spaceKeyContext** | `string` | The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link &#x60;&lt;ac:link&gt;&lt;ri:page ri:content-title&#x3D;\&quot;Example page\&quot; /&gt;&lt;ac:link&gt;&#x60; and the &#x60;spaceKeyContext&#x3D;TEST&#x60; parameter is provided, then the link will be converted to a link to the \&quot;Example page\&quot; page in the \&quot;TEST\&quot; space. | [Optional] [Defaults to `undefined`] |
| **embeddedContentRender** | `current`, `version-at-save` | Mode used for rendering embedded content, like attachments.  - &#x60;current&#x60; renders the embedded content using the latest version. - &#x60;version-at-save&#x60; renders the embedded content using the version at the time of save. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, version-at-save] |

### Return type

[**ContentBody**](ContentBody.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content body is returned. |  -  |
| **400** | Returned if invalid content representation is requested, or context is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - The macro does not exist in the specified version. - There is no macro matching the given macro ID or hash. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMacroBodyByMacroId

> MacroInstance getMacroBodyByMacroId(id, version, macroId)

Get macro body by macro ID

Returns the body of a macro in storage format, for the given macro ID. This includes information like the name of the macro, the body of the macro, and any macro parameters. This method is mainly used by Cloud apps.  About the macro ID: When a macro is created in a new version of content, Confluence will generate a random ID for it, unless an ID is specified (by an app). The macro ID will look similar to this: \&#39;50884bd9-0cb8-41d5-98be-f80943c14f96\&#39;. The ID is then persisted as new versions of content are created, and is only modified by Confluence if there are conflicting IDs.  For Forge macros, the value for macro ID is the \&quot;local ID\&quot; of that particular ADF node. This value can be retrieved either client-side by calling view.getContext() and accessing \&quot;localId\&quot; on the resulting object, or server-side by examining the \&quot;local-id\&quot; parameter node inside the \&quot;parameters\&quot; node.  Note that there are other attributes named \&quot;local-id\&quot;, but only this particular one is used to store the macro ID.  Example: &lt;ac:adf-node type&#x3D;\&quot;extension\&quot;&gt;   &lt;ac:adf-attribute key&#x3D;\&quot;extension-type\&quot;&gt;com.atlassian.ecosystem&lt;/ac:adf-attribute&gt;   &lt;ac:adf-attribute key&#x3D;\&quot;parameters\&quot;&gt;       &lt;ac:adf-parameter key&#x3D;\&quot;local-id\&quot;&gt;e9c4aa10-73fa-417c-888d-48c719ae4165&lt;/ac:adf-parameter&gt;   &lt;/ac:adf-parameter&gt; &lt;/ac:adf-node&gt;  Note, to preserve backwards compatibility this resource will also match on the hash of the macro body, even if a macro ID is found. This check will eventually become redundant, as macro IDs are generated for pages and transparently propagate out to all instances.  This backwards compatibility logic does not apply to Forge macros; those can only be retrieved by their ID.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content that the macro is in.

### Example

```ts
import {
  Configuration,
  ContentMacroBodyApi,
} from 'confluence-cloud-api-v1';
import type { GetMacroBodyByMacroIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentMacroBodyApi(config);

  const body = {
    // string | The ID for the content that contains the macro.
    id: id_example,
    // number | The version of the content that contains the macro. Specifying `0` as the `version` will return the macro body for the latest content version.
    version: 56,
    // string | The ID of the macro. This is usually passed by the app that the macro is in. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, \'/content/196611/version/7?expand=content.body.storage\'.
    macroId: macroId_example,
  } satisfies GetMacroBodyByMacroIdRequest;

  try {
    const data = await api.getMacroBodyByMacroId(body);
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
| **id** | `string` | The ID for the content that contains the macro. | [Defaults to `undefined`] |
| **version** | `number` | The version of the content that contains the macro. Specifying &#x60;0&#x60; as the &#x60;version&#x60; will return the macro body for the latest content version. | [Defaults to `undefined`] |
| **macroId** | `string` | The ID of the macro. This is usually passed by the app that the macro is in. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, \&#39;/content/196611/version/7?expand&#x3D;content.body.storage\&#39;. | [Defaults to `undefined`] |

### Return type

[**MacroInstance**](MacroInstance.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested macro body is returned. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - The macro does not exist in the specified version. - There is no macro matching the given macro ID or hash. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

