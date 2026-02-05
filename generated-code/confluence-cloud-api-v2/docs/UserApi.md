# UserApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkAccessByEmail**](UserApi.md#checkaccessbyemailoperation) | **POST** /user/access/check-access-by-email | Check site access for a list of emails |
| [**createBulkUserLookup**](UserApi.md#createbulkuserlookupoperation) | **POST** /users-bulk | Create bulk user lookup using ids |
| [**inviteByEmail**](UserApi.md#invitebyemail) | **POST** /user/access/invite-by-email | Invite a list of emails to the site |



## checkAccessByEmail

> CheckAccessByEmail200Response checkAccessByEmail(checkAccessByEmailRequest)

Check site access for a list of emails

Returns the list of emails from the input list that do not have access to site.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'confluence-cloud-api-v2';
import type { CheckAccessByEmailOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // CheckAccessByEmailRequest
    checkAccessByEmailRequest: ...,
  } satisfies CheckAccessByEmailOperationRequest;

  try {
    const data = await api.checkAccessByEmail(body);
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
| **checkAccessByEmailRequest** | [CheckAccessByEmailRequest](CheckAccessByEmailRequest.md) |  | |

### Return type

[**CheckAccessByEmail200Response**](CheckAccessByEmail200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns object with list of emails without access to site. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to check access for emails on site. |  -  |
| **503** | Returned if API is disabled on site |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBulkUserLookup

> MultiEntityResultUser createBulkUserLookup(createBulkUserLookupRequest)

Create bulk user lookup using ids

Returns user details for the ids provided in the request body.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). The user must be able to view user profiles in the Confluence site.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'confluence-cloud-api-v2';
import type { CreateBulkUserLookupOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // CreateBulkUserLookupRequest
    createBulkUserLookupRequest: ...,
  } satisfies CreateBulkUserLookupOperationRequest;

  try {
    const data = await api.createBulkUserLookup(body);
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
| **createBulkUserLookupRequest** | [CreateBulkUserLookupRequest](CreateBulkUserLookupRequest.md) |  | |

### Return type

[**MultiEntityResultUser**](MultiEntityResultUser.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the user info is returned for the account IDs. &#x60;results&#x60; may be empty if no account IDs were found. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **404** | Returned if the calling user does not have permission to use Confluence or view user profiles. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## inviteByEmail

> inviteByEmail(checkAccessByEmailRequest)

Invite a list of emails to the site

Invite a list of emails to the site.  Ignores all invalid emails and no action is taken for the emails that already have access to the site.  &lt;b&gt;NOTE:&lt;/b&gt; This API is asynchronous and may take some time to complete.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'confluence-cloud-api-v2';
import type { InviteByEmailRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // CheckAccessByEmailRequest
    checkAccessByEmailRequest: ...,
  } satisfies InviteByEmailRequest;

  try {
    const data = await api.inviteByEmail(body);
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
| **checkAccessByEmailRequest** | [CheckAccessByEmailRequest](CheckAccessByEmailRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns object with list of emails without access to site. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to check access for emails on site. |  -  |
| **503** | Returned if API is disabled on site |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

