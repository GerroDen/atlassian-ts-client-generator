# FiltersApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**changeFilterOwner**](FiltersApi.md#changefilterowner) | **PUT** /rest/api/3/filter/{id}/owner | Change filter owner |
| [**createFilter**](FiltersApi.md#createfilter) | **POST** /rest/api/3/filter | Create filter |
| [**deleteFavouriteForFilter**](FiltersApi.md#deletefavouriteforfilter) | **DELETE** /rest/api/3/filter/{id}/favourite | Remove filter as favorite |
| [**deleteFilter**](FiltersApi.md#deletefilter) | **DELETE** /rest/api/3/filter/{id} | Delete filter |
| [**getColumns**](FiltersApi.md#getcolumns) | **GET** /rest/api/3/filter/{id}/columns | Get columns |
| [**getFavouriteFilters**](FiltersApi.md#getfavouritefilters) | **GET** /rest/api/3/filter/favourite | Get favorite filters |
| [**getFilter**](FiltersApi.md#getfilter) | **GET** /rest/api/3/filter/{id} | Get filter |
| [**getFiltersPaginated**](FiltersApi.md#getfilterspaginated) | **GET** /rest/api/3/filter/search | Search for filters |
| [**getMyFilters**](FiltersApi.md#getmyfilters) | **GET** /rest/api/3/filter/my | Get my filters |
| [**resetColumns**](FiltersApi.md#resetcolumns) | **DELETE** /rest/api/3/filter/{id}/columns | Reset columns |
| [**setColumns**](FiltersApi.md#setcolumns) | **PUT** /rest/api/3/filter/{id}/columns | Set columns |
| [**setFavouriteForFilter**](FiltersApi.md#setfavouriteforfilter) | **PUT** /rest/api/3/filter/{id}/favourite | Add filter as favorite |
| [**updateFilter**](FiltersApi.md#updatefilter) | **PUT** /rest/api/3/filter/{id} | Update filter |



## changeFilterOwner

> any changeFilterOwner(id, changeFilterOwner)

Change filter owner

Changes the owner of the filter.  **[Permissions](#permissions) required:** Permission to access Jira. However, the user must own the filter or have the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { ChangeFilterOwnerRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter to update.
    id: 789,
    // ChangeFilterOwner | The account ID of the new owner of the filter.
    changeFilterOwner: {"accountId":"0000-0000-0000-0000"},
  } satisfies ChangeFilterOwnerRequest;

  try {
    const data = await api.changeFilterOwner(body);
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
| **id** | `number` | The ID of the filter to update. | [Defaults to `undefined`] |
| **changeFilterOwner** | [ChangeFilterOwner](ChangeFilterOwner.md) | The account ID of the new owner of the filter. | |

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
| **400** | Returned when:   *  The new owner of the filter owns a filter with the same name.  *  An attempt is made to change owner of the default filter. |  -  |
| **403** | Returned if the requesting user is not an owner of the filter or does not have *Administer Jira* global permission. |  -  |
| **404** | Returned if the filter or the new owner of the filter is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFilter

> Filter createFilter(filter, expand, overrideSharePermissions)

Create filter

Creates a filter. The filter is shared according to the [default share scope](#api-rest-api-3-filter-post). The filter is not selected as a favorite.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { CreateFilterRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // Filter | The filter to create.
    filter: {"description":"Lists all open bugs","jql":"type = Bug and resolution is empty","name":"All Open Bugs"},
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
    // boolean | EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideSharePermissions: true,
  } satisfies CreateFilterRequest;

  try {
    const data = await api.createFilter(body);
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
| **filter** | [Filter](Filter.md) | The filter to create. | |
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |
| **overrideSharePermissions** | `boolean` | EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request object is invalid. For example, the &#x60;name&#x60; is not unique or the project ID is not specified for a project role share permission. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFavouriteForFilter

> Filter deleteFavouriteForFilter(id, expand)

Remove filter as favorite

Removes a filter as a favorite for the user. Note that this operation only removes filters visible to the user from the user\&#39;s favorites list. For example, if the user favorites a public filter that is subsequently made private (and is therefore no longer visible on their favorites list) they cannot remove it from their favorites list.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { DeleteFavouriteForFilterRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
  } satisfies DeleteFavouriteForFilterRequest;

  try {
    const data = await api.deleteFavouriteForFilter(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the filter is not found.  *  the user does not have permission to view the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFilter

> deleteFilter(id)

Delete filter

Delete a filter.  **[Permissions](#permissions) required:** Permission to access Jira, however filters can only be deleted by the creator of the filter or a user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { DeleteFilterRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter to delete.
    id: 789,
  } satisfies DeleteFilterRequest;

  try {
    const data = await api.deleteFilter(body);
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
| **id** | `number` | The ID of the filter to delete. | [Defaults to `undefined`] |

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
| **400** | Returned if the filter is not found. |  -  |
| **401** | Returned if the user does not have permission to delete the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getColumns

> Array&lt;ColumnItem&gt; getColumns(id)

Get columns

Returns the columns configured for a filter. The column configuration is used when the filter\&#39;s results are viewed in *List View* with the *Columns* set to *Filter*.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, column details are only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { GetColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
  } satisfies GetColumnsRequest;

  try {
    const data = await api.getColumns(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |

### Return type

[**Array&lt;ColumnItem&gt;**](ColumnItem.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the user does not have permission to view the filter. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if a column configuration is not set for the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFavouriteFilters

> Array&lt;Filter&gt; getFavouriteFilters(expand)

Get favorite filters

Returns the visible favorite filters of the user.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** A favorite filter is only visible to the user where the filter is:   *  owned by the user.  *  shared with a group that the user is a member of.  *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  shared with a public project.  *  shared with the public.  For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { GetFavouriteFiltersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
  } satisfies GetFavouriteFiltersRequest;

  try {
    const data = await api.getFavouriteFilters(body);
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
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Filter&gt;**](Filter.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFilter

> Filter getFilter(id, expand, overrideSharePermissions)

Get filter

Returns a filter.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, the filter is only returned where it is:   *  owned by the user.  *  shared with a group that the user is a member of.  *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  shared with a public project.  *  shared with the public.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { GetFilterRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter to return.
    id: 789,
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
    // boolean | EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideSharePermissions: true,
  } satisfies GetFilterRequest;

  try {
    const data = await api.getFilter(body);
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
| **id** | `number` | The ID of the filter to return. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |
| **overrideSharePermissions** | `boolean` | EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the filter is not found or the user does not have permission to view it. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFiltersPaginated

> PageBeanFilterDetails getFiltersPaginated(filterName, accountId, owner, groupname, groupId, projectId, id, orderBy, startAt, maxResults, expand, overrideSharePermissions, isSubstringMatch)

Search for filters

Returns a [paginated](#pagination) list of filters. Use this operation to get:   *  specific filters, by defining &#x60;id&#x60; only.  *  filters that match all of the specified attributes. For example, all filters for a user with a particular word in their name. When multiple attributes are specified only filters matching all attributes are returned.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, only the following filters that match the query parameters are returned:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { GetFiltersPaginatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // string | String used to perform a case-insensitive partial match with `name`. (optional)
    filterName: filterName_example,
    // string | User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`. (optional)
    accountId: accountId_example,
    // string | This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`. (optional)
    owner: owner_example,
    // string | As a group\'s name can change, use of `groupId` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`. This parameter cannot be used with the `groupId` parameter. (optional)
    groupname: groupname_example,
    // string | Group ID used to returns filters that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter. (optional)
    groupId: groupId_example,
    // number | Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`. (optional)
    projectId: 789,
    // Set<number> | The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Do not exceed 200 filter IDs. (optional)
    id: ...,
    // 'description' | '-description' | '+description' | 'favourite_count' | '-favourite_count' | '+favourite_count' | 'id' | '-id' | '+id' | 'is_favourite' | '-is_favourite' | '+is_favourite' | 'name' | '-name' | '+name' | 'owner' | '-owner' | '+owner' | 'is_shared' | '-is_shared' | '+is_shared' | [Order](#ordering) the results by a field:   *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.  *  `is_favourite` Sorts by whether the filter is marked as a favorite.  *  `id` Sorts by filter ID.  *  `name` Sorts by filter name.  *  `owner` Sorts by the ID of the filter owner.  *  `is_shared` Sorts by whether the filter is shared. (optional)
    orderBy: orderBy_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the filter.  *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.  *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.  *  `jql` Returns the JQL query that the filter uses.  *  `owner` Returns the owner of the filter.  *  `searchUrl` Returns a URL to perform the filter\'s JQL query.  *  `sharePermissions` Returns the share permissions defined for the filter.  *  `editPermissions` Returns the edit permissions defined for the filter.  *  `isWritable` Returns whether the current user has permission to edit the filter.  *  `approximateLastUsed` \\[Experimental\\] Returns the approximate date and time when the filter was last evaluated.  *  `subscriptions` Returns the users that are subscribed to the filter.  *  `viewUrl` Returns a URL to view the filter. (optional)
    expand: expand_example,
    // boolean | EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideSharePermissions: true,
    // boolean | When `true` this will perform a case-insensitive substring match for the provided `filterName`. When `false` the filter name will be searched using [full text search syntax](https://support.atlassian.com/jira-software-cloud/docs/search-for-issues-using-the-text-field/). (optional)
    isSubstringMatch: true,
  } satisfies GetFiltersPaginatedRequest;

  try {
    const data = await api.getFiltersPaginated(body);
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
| **filterName** | `string` | String used to perform a case-insensitive partial match with &#x60;name&#x60;. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | User account ID used to return filters with the matching &#x60;owner.accountId&#x60;. This parameter cannot be used with &#x60;owner&#x60;. | [Optional] [Defaults to `undefined`] |
| **owner** | `string` | This parameter is deprecated because of privacy changes. Use &#x60;accountId&#x60; instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching &#x60;owner.name&#x60;. This parameter cannot be used with &#x60;accountId&#x60;. | [Optional] [Defaults to `undefined`] |
| **groupname** | `string` | As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended to identify a group. Group name used to returns filters that are shared with a group that matches &#x60;sharePermissions.group.groupname&#x60;. This parameter cannot be used with the &#x60;groupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | Group ID used to returns filters that are shared with a group that matches &#x60;sharePermissions.group.groupId&#x60;. This parameter cannot be used with the &#x60;groupname&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **projectId** | `number` | Project ID used to returns filters that are shared with a project that matches &#x60;sharePermissions.project.id&#x60;. | [Optional] [Defaults to `undefined`] |
| **id** | `Set<number>` | The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. Do not exceed 200 filter IDs. | [Optional] |
| **orderBy** | `description`, `-description`, `+description`, `favourite_count`, `-favourite_count`, `+favourite_count`, `id`, `-id`, `+id`, `is_favourite`, `-is_favourite`, `+is_favourite`, `name`, `-name`, `+name`, `owner`, `-owner`, `+owner`, `is_shared`, `-is_shared`, `+is_shared` | [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  &#x60;favourite_count&#x60; Sorts by the count of how many users have this filter as a favorite.  *  &#x60;is_favourite&#x60; Sorts by whether the filter is marked as a favorite.  *  &#x60;id&#x60; Sorts by filter ID.  *  &#x60;name&#x60; Sorts by filter name.  *  &#x60;owner&#x60; Sorts by the ID of the filter owner.  *  &#x60;is_shared&#x60; Sorts by whether the filter is shared. | [Optional] [Defaults to `&#39;name&#39;`] [Enum: description, -description, +description, favourite_count, -favourite_count, +favourite_count, id, -id, +id, is_favourite, -is_favourite, +is_favourite, name, -name, +name, owner, -owner, +owner, is_shared, -is_shared, +is_shared] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;description&#x60; Returns the description of the filter.  *  &#x60;favourite&#x60; Returns an indicator of whether the user has set the filter as a favorite.  *  &#x60;favouritedCount&#x60; Returns a count of how many users have set this filter as a favorite.  *  &#x60;jql&#x60; Returns the JQL query that the filter uses.  *  &#x60;owner&#x60; Returns the owner of the filter.  *  &#x60;searchUrl&#x60; Returns a URL to perform the filter\&#39;s JQL query.  *  &#x60;sharePermissions&#x60; Returns the share permissions defined for the filter.  *  &#x60;editPermissions&#x60; Returns the edit permissions defined for the filter.  *  &#x60;isWritable&#x60; Returns whether the current user has permission to edit the filter.  *  &#x60;approximateLastUsed&#x60; \\[Experimental\\] Returns the approximate date and time when the filter was last evaluated.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter.  *  &#x60;viewUrl&#x60; Returns a URL to view the filter. | [Optional] [Defaults to `undefined`] |
| **overrideSharePermissions** | `boolean` | EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |
| **isSubstringMatch** | `boolean` | When &#x60;true&#x60; this will perform a case-insensitive substring match for the provided &#x60;filterName&#x60;. When &#x60;false&#x60; the filter name will be searched using [full text search syntax](https://support.atlassian.com/jira-software-cloud/docs/search-for-issues-using-the-text-field/). | [Optional] [Defaults to `false`] |

### Return type

[**PageBeanFilterDetails**](PageBeanFilterDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;owner&#x60; and &#x60;accountId&#x60; are provided.  *  &#x60;expand&#x60; includes an invalid value.  *  &#x60;orderBy&#x60; is invalid.  *  &#x60;id&#x60; identifies more than 200 filter IDs. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMyFilters

> Array&lt;Filter&gt; getMyFilters(expand, includeFavourites)

Get my filters

Returns the filters owned by the user. If &#x60;includeFavourites&#x60; is &#x60;true&#x60;, the user\&#39;s visible favorite filters are also returned.  **[Permissions](#permissions) required:** Permission to access Jira, however, a favorite filters is only visible to the user where the filter is:   *  owned by the user.  *  shared with a group that the user is a member of.  *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  shared with a public project.  *  shared with the public.  For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { GetMyFiltersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
    // boolean | Include the user\'s favorite filters in the response. (optional)
    includeFavourites: true,
  } satisfies GetMyFiltersRequest;

  try {
    const data = await api.getMyFilters(body);
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
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |
| **includeFavourites** | `boolean` | Include the user\&#39;s favorite filters in the response. | [Optional] [Defaults to `false`] |

### Return type

[**Array&lt;Filter&gt;**](Filter.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetColumns

> resetColumns(id)

Reset columns

Reset the user\&#39;s column configuration for the filter to the default.  **[Permissions](#permissions) required:** Permission to access Jira, however, columns are only reset for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { ResetColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
  } satisfies ResetColumnsRequest;

  try {
    const data = await api.resetColumns(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |

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
| **400** | Returned if:   *  the filter is not found.  *  the user does not have permission to view the filter. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setColumns

> any setColumns(id, columnRequestBody)

Set columns

Sets the columns for a filter. Only navigable fields can be set as columns. Use [Get fields](#api-rest-api-3-field-get) to get the list fields in Jira. A navigable field has &#x60;navigable&#x60; set to &#x60;true&#x60;.  The parameters for this resource are expressed as HTML form data. For example, in curl:  &#x60;curl -X PUT -d columns&#x3D;summary -d columns&#x3D;description https://your-domain.atlassian.net/rest/api/3/filter/10000/columns&#x60;  **[Permissions](#permissions) required:** Permission to access Jira, however, columns are only set for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { SetColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
    // ColumnRequestBody | The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`.
    columnRequestBody: ...,
  } satisfies SetColumnsRequest;

  try {
    const data = await api.setColumns(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |
| **columnRequestBody** | [ColumnRequestBody](ColumnRequestBody.md) | The IDs of the fields to set as columns. In the form data, specify each field as &#x60;columns&#x3D;id&#x60;, where &#x60;id&#x60; is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-&lt;ver&gt;-field-get)). For example, &#x60;columns&#x3D;summary&#x60;. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  a non-navigable field is set as a column.  *  the user does not have permission to view the filter. |  -  |
| **403** | Returned if the requesting user is not an owner of the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setFavouriteForFilter

> Filter setFavouriteForFilter(id, expand)

Add filter as favorite

Add a filter as a favorite for the user.  **[Permissions](#permissions) required:** Permission to access Jira, however, the user can only favorite:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { SetFavouriteForFilterRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
  } satisfies SetFavouriteForFilterRequest;

  try {
    const data = await api.setFavouriteForFilter(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the filter is not found.  *  the user does not have permission to favorite the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFilter

> Filter updateFilter(id, filter, expand, overrideSharePermissions)

Update filter

Updates a filter. Use this operation to update a filter\&#39;s name, description, JQL, or sharing.  **[Permissions](#permissions) required:** Permission to access Jira, however the user must own the filter.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from 'jira-cloud-api';
import type { UpdateFilterRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FiltersApi(config);

  const body = {
    // number | The ID of the filter to update.
    id: 789,
    // Filter | The filter to update.
    filter: {"description":"Lists all open bugs","jql":"type = Bug and resolution is empty","name":"All Open Bugs"},
    // string | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\'t specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn\'t list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don\'t specify `subscriptions`, the `subscriptions` object is returned but it doesn\'t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. (optional)
    expand: expand_example,
    // boolean | EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideSharePermissions: true,
  } satisfies UpdateFilterRequest;

  try {
    const data = await api.updateFilter(body);
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
| **id** | `number` | The ID of the filter to update. | [Defaults to `undefined`] |
| **filter** | [Filter](Filter.md) | The filter to update. | |
| **expand** | `string` | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don\&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn\&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don\&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn\&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [Optional] [Defaults to `undefined`] |
| **overrideSharePermissions** | `boolean` | EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request object is invalid. For example, the &#x60;name&#x60; is not unique or the project ID is not specified for a project role share permission. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

