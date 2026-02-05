# MigrationOfConnectModulesToForgeApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet**](MigrationOfConnectModulesToForgeApi.md#connecttoforgemigrationfetchtaskresourcefetchmigrationtaskget) | **GET** /rest/atlassian-connect/1/migration/{connectKey}/{jiraIssueFieldsKey}/task | Get Connect issue field migration task |



## connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet

> TaskProgress connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet(connectKey, jiraIssueFieldsKey)

Get Connect issue field migration task

Returns the details of a Connect issue field\&#39;s migration to Forge.  When migrating a Connect app to Forge, [Issue Field](https://developer.atlassian.com/cloud/jira/software/modules/issue-field/) modules must be converted to [Custom field](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/). When the Forge version of the app is installed, Forge creates a [background task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-group-tasks) to track the migration of field data across. This endpoint returns the status and other details of that background task.  For more details, see [Jira modules &gt; Jira Custom Fields](https://developer.atlassian.com/platform/adopting-forge-from-connect/migrate-jira-custom-fields/).  **[Permissions](#permissions) required:** Only Connect and Forge apps can make this request.

### Example

```ts
import {
  Configuration,
  MigrationOfConnectModulesToForgeApi,
} from 'jira-cloud-api';
import type { ConnectToForgeMigrationFetchTaskResourceFetchMigrationTaskGetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MigrationOfConnectModulesToForgeApi(config);

  const body = {
    // string | The key of the Connect app that contains the Jira issue field being migrated.
    connectKey: com.example.app,
    // string | The module key of the Connect issue field being migrated.
    jiraIssueFieldsKey: my-custom-field,
  } satisfies ConnectToForgeMigrationFetchTaskResourceFetchMigrationTaskGetRequest;

  try {
    const data = await api.connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet(body);
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
| **connectKey** | `string` | The key of the Connect app that contains the Jira issue field being migrated. | [Defaults to `undefined`] |
| **jiraIssueFieldsKey** | `string` | The module key of the Connect issue field being migrated. | [Defaults to `undefined`] |

### Return type

[**TaskProgress**](TaskProgress.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful and a migration task is found. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if: * no migrated Forge module with the given key is found. * no ongoing migration task exists for the custom field. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

