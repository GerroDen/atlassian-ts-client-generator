# DashboardApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPullRequestSuggestions**](DashboardApi.md#getpullrequestsuggestions) | **GET** /api/latest/dashboard/pull-request-suggestions | Get pull request suggestions |
| [**getPullRequests1**](DashboardApi.md#getpullrequests1) | **GET** /api/latest/dashboard/pull-requests | Get pull requests for a user |



## getPullRequestSuggestions

> GetPullRequestSuggestions200Response getPullRequestSuggestions(changesSince, limit)

Get pull request suggestions

Retrieves a page of suggestions for pull requests that the currently authenticated user may wish to raise. Such suggestions are based on ref changes occurring and so contain the ref change that prompted the suggestion plus the time the change event occurred. Changes will be returned in descending order based on the time the change that prompted the suggestion occurred.   Note that although the response is a page object, the interface does not support paging, however a limit can be applied to the size of the returned page.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'bitbucket-api';
import type { GetPullRequestSuggestionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DashboardApi();

  const body = {
    // string | restrict pull request suggestions to be based on events that occurred since some timein the past. This is expressed in seconds since \"now\". So to return suggestionsbased only on activity within the past 48 hours, pass a value of 172800. (optional)
    changesSince: changesSince_example,
    // string | restricts the result set to return at most this many suggestions. (optional)
    limit: limit_example,
  } satisfies GetPullRequestSuggestionsRequest;

  try {
    const data = await api.getPullRequestSuggestions(body);
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
| **changesSince** | `string` | restrict pull request suggestions to be based on events that occurred since some timein the past. This is expressed in seconds since \&quot;now\&quot;. So to return suggestionsbased only on activity within the past 48 hours, pass a value of 172800. | [Optional] [Defaults to `undefined`] |
| **limit** | `string` | restricts the result set to return at most this many suggestions. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPullRequestSuggestions200Response**](GetPullRequestSuggestions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of pull requests that match the search criteria. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The current user is not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequests1

> GetPullRequests1200Response getPullRequests1(closedSince, role, participantStatus, state, user, order, start, limit)

Get pull requests for a user

Retrieve a page of pull requests where a user is involved as either a reviewer, author or a participant. The request may be filtered by pull request state, role or participant status.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'bitbucket-api';
import type { GetPullRequests1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DashboardApi();

  const body = {
    // string | (optional, defaults to returning pull requests regardless of closed since date). Permits returning only pull requests with a closed timestamp set more recently that (now - closedSince). Units are in seconds. So for example if closed since 86400 is set only pull requests closed in the previous 24 hours will be returned. (optional)
    closedSince: closedSince_example,
    // string | (optional, defaults to returning pull requests for any role). If a role is supplied only pull requests where the authenticated user is a participant in the given role will be returned. Either <strong>REVIEWER</strong>, <strong>AUTHOR</strong> or <strong>PARTICIPANT</strong>. (optional)
    role: role_example,
    // string | (optional, defaults to returning pull requests with any participant status). A comma separated list of participant status. That is, one or more of <strong>UNAPPROVED</strong>, <strong>NEEDS_WORK</strong>, or <strong>APPROVED</strong>. (optional)
    participantStatus: participantStatus_example,
    // string | (optional, defaults to returning pull requests in any state). If a state is supplied only pull requests in the specified state will be returned. Either <strong>OPEN</strong>, <strong>DECLINED</strong> or <strong>MERGED</strong>. Omit this parameter to return pull request in any state. (optional)
    state: state_example,
    // string | The name of the involved user, defaults to the current user. (optional)
    user: user_example,
    // string | (optional, defaults to <strong>NEWEST</strong>) the order/(s) to return pull requests in; can choose from <strong>OLDEST</strong> (as in: \"oldest first\"), <strong>NEWEST</strong>, <strong>DRAFT_STATUS</strong>, <strong>PARTICIPANT_STATUS</strong>, and/or <strong>CLOSED_DATE</strong>. Where <strong>CLOSED_DATE</strong> is specified and the result set includes pull requests that are not in the closed state, these pull requests will appear first in the result set, followed by most recently closed pull requests. (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetPullRequests1Request;

  try {
    const data = await api.getPullRequests1(body);
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
| **closedSince** | `string` | (optional, defaults to returning pull requests regardless of closed since date). Permits returning only pull requests with a closed timestamp set more recently that (now - closedSince). Units are in seconds. So for example if closed since 86400 is set only pull requests closed in the previous 24 hours will be returned. | [Optional] [Defaults to `undefined`] |
| **role** | `string` | (optional, defaults to returning pull requests for any role). If a role is supplied only pull requests where the authenticated user is a participant in the given role will be returned. Either &lt;strong&gt;REVIEWER&lt;/strong&gt;, &lt;strong&gt;AUTHOR&lt;/strong&gt; or &lt;strong&gt;PARTICIPANT&lt;/strong&gt;. | [Optional] [Defaults to `undefined`] |
| **participantStatus** | `string` | (optional, defaults to returning pull requests with any participant status). A comma separated list of participant status. That is, one or more of &lt;strong&gt;UNAPPROVED&lt;/strong&gt;, &lt;strong&gt;NEEDS_WORK&lt;/strong&gt;, or &lt;strong&gt;APPROVED&lt;/strong&gt;. | [Optional] [Defaults to `undefined`] |
| **state** | `string` | (optional, defaults to returning pull requests in any state). If a state is supplied only pull requests in the specified state will be returned. Either &lt;strong&gt;OPEN&lt;/strong&gt;, &lt;strong&gt;DECLINED&lt;/strong&gt; or &lt;strong&gt;MERGED&lt;/strong&gt;. Omit this parameter to return pull request in any state. | [Optional] [Defaults to `undefined`] |
| **user** | `string` | The name of the involved user, defaults to the current user. | [Optional] [Defaults to `undefined`] |
| **order** | `string` | (optional, defaults to &lt;strong&gt;NEWEST&lt;/strong&gt;) the order/(s) to return pull requests in; can choose from &lt;strong&gt;OLDEST&lt;/strong&gt; (as in: \&quot;oldest first\&quot;), &lt;strong&gt;NEWEST&lt;/strong&gt;, &lt;strong&gt;DRAFT_STATUS&lt;/strong&gt;, &lt;strong&gt;PARTICIPANT_STATUS&lt;/strong&gt;, and/or &lt;strong&gt;CLOSED_DATE&lt;/strong&gt;. Where &lt;strong&gt;CLOSED_DATE&lt;/strong&gt; is specified and the result set includes pull requests that are not in the closed state, these pull requests will appear first in the result set, followed by most recently closed pull requests. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPullRequests1200Response**](GetPullRequests1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of pull requests that match the search criteria. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The current user is not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

