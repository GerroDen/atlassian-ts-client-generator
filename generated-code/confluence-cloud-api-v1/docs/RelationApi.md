# RelationApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRelationship**](RelationApi.md#createrelationship) | **PUT** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Create relationship |
| [**deleteRelationship**](RelationApi.md#deleterelationship) | **DELETE** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Delete relationship |
| [**findSourcesForTarget**](RelationApi.md#findsourcesfortarget) | **GET** /wiki/rest/api/relation/{relationName}/to/{targetType}/{targetKey}/from/{sourceType} | Find source entities related to a target entity |
| [**findTargetFromSource**](RelationApi.md#findtargetfromsource) | **GET** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType} | Find target entities related to a source entity |
| [**getRelationship**](RelationApi.md#getrelationship) | **GET** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Find relationship from source to target |



## createRelationship

> Relation createRelationship(relationName, sourceType, sourceKey, targetType, targetKey, sourceStatus, targetStatus, sourceVersion, targetVersion)

Create relationship

Creates a relationship between two entities (user, space, content). The \&#39;favourite\&#39; relationship is supported by default, but you can use this method to create any type of relationship between two entities.  For example, the following method creates a \&#39;sibling\&#39; relationship between two pieces of content: &#x60;PUT /wiki/rest/api/relation/sibling/from/content/123/to/content/456&#x60;  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  RelationApi,
} from 'confluence-cloud-api-v1';
import type { CreateRelationshipRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RelationApi(config);

  const body = {
    // string | The name of the relationship. This method supports the \'favourite\' (i.e. \'save for later\') relationship. You can also specify any other value for this parameter to create a custom relationship type.
    relationName: relationName_example,
    // 'user' | 'content' | 'space' | The source entity type of the relationship. This must be \'user\', if the `relationName` is \'favourite\'.
    sourceType: sourceType_example,
    // string | - The identifier for the source entity:  - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `sourceType` is \'content\', then specify the content ID. - If `sourceType` is \'space\', then specify the space key.
    sourceKey: sourceKey_example,
    // 'user' | 'content' | 'space' | The target entity type of the relationship. This must be \'space\' or \'content\', if the `relationName` is \'favourite\'.
    targetType: targetType_example,
    // string | - The identifier for the target entity:  - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `targetType` is \'content\', then specify the content ID. - If `targetType` is \'space\', then specify the space key.
    targetKey: targetKey_example,
    // string | The status of the source. This parameter is only used when the `sourceType` is \'content\'. (optional)
    sourceStatus: sourceStatus_example,
    // string | The status of the target. This parameter is only used when the `targetType` is \'content\'. (optional)
    targetStatus: targetStatus_example,
    // number | The version of the source. This parameter is only used when the `sourceType` is \'content\' and the `sourceStatus` is \'historical\'. (optional)
    sourceVersion: 56,
    // number | The version of the target. This parameter is only used when the `targetType` is \'content\' and the `targetStatus` is \'historical\'. (optional)
    targetVersion: 56,
  } satisfies CreateRelationshipRequest;

  try {
    const data = await api.createRelationship(body);
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
| **relationName** | `string` | The name of the relationship. This method supports the \&#39;favourite\&#39; (i.e. \&#39;save for later\&#39;) relationship. You can also specify any other value for this parameter to create a custom relationship type. | [Defaults to `undefined`] |
| **sourceType** | `user`, `content`, `space` | The source entity type of the relationship. This must be \&#39;user\&#39;, if the &#x60;relationName&#x60; is \&#39;favourite\&#39;. | [Defaults to `undefined`] [Enum: user, content, space] |
| **sourceKey** | `string` | - The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;sourceType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;sourceType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **targetType** | `user`, `content`, `space` | The target entity type of the relationship. This must be \&#39;space\&#39; or \&#39;content\&#39;, if the &#x60;relationName&#x60; is \&#39;favourite\&#39;. | [Defaults to `undefined`] [Enum: user, content, space] |
| **targetKey** | `string` | - The identifier for the target entity:  - If &#x60;targetType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;targetType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;targetType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **sourceStatus** | `string` | The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetStatus** | `string` | The status of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **sourceVersion** | `number` | The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39; and the &#x60;sourceStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetVersion** | `number` | The version of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39; and the &#x60;targetStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |

### Return type

[**Relation**](Relation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the relationship is created. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have permission to use Confluence. |  -  |
| **404** | Returned if the user, space or content could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRelationship

> deleteRelationship(relationName, sourceType, sourceKey, targetType, targetKey, sourceStatus, targetStatus, sourceVersion, targetVersion)

Delete relationship

Deletes a relationship between two entities (user, space, content).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). For favourite relationships, the current user can only delete their own favourite relationships. A space administrator can delete favourite relationships for any user.

### Example

```ts
import {
  Configuration,
  RelationApi,
} from 'confluence-cloud-api-v1';
import type { DeleteRelationshipRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RelationApi(config);

  const body = {
    // string | The name of the relationship.
    relationName: relationName_example,
    // 'user' | 'content' | 'space' | The source entity type of the relationship. This must be \'user\', if the `relationName` is \'favourite\'.
    sourceType: sourceType_example,
    // string | - The identifier for the source entity:  - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `sourceType` is \'content\', then specify the content ID. - If `sourceType` is \'space\', then specify the space key.
    sourceKey: sourceKey_example,
    // 'user' | 'content' | 'space' | The target entity type of the relationship. This must be \'space\' or \'content\', if the `relationName` is \'favourite\'.
    targetType: targetType_example,
    // string | - The identifier for the target entity:  - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `targetType` is \'content\', then specify the content ID. - If `targetType` is \'space\', then specify the space key.
    targetKey: targetKey_example,
    // string | The status of the source. This parameter is only used when the `sourceType` is \'content\'. (optional)
    sourceStatus: sourceStatus_example,
    // string | The status of the target. This parameter is only used when the `targetType` is \'content\'. (optional)
    targetStatus: targetStatus_example,
    // number | The version of the source. This parameter is only used when the `sourceType` is \'content\' and the `sourceStatus` is \'historical\'. (optional)
    sourceVersion: 56,
    // number | The version of the target. This parameter is only used when the `targetType` is \'content\' and the `targetStatus` is \'historical\'. (optional)
    targetVersion: 56,
  } satisfies DeleteRelationshipRequest;

  try {
    const data = await api.deleteRelationship(body);
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
| **relationName** | `string` | The name of the relationship. | [Defaults to `undefined`] |
| **sourceType** | `user`, `content`, `space` | The source entity type of the relationship. This must be \&#39;user\&#39;, if the &#x60;relationName&#x60; is \&#39;favourite\&#39;. | [Defaults to `undefined`] [Enum: user, content, space] |
| **sourceKey** | `string` | - The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;sourceType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;sourceType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **targetType** | `user`, `content`, `space` | The target entity type of the relationship. This must be \&#39;space\&#39; or \&#39;content\&#39;, if the &#x60;relationName&#x60; is \&#39;favourite\&#39;. | [Defaults to `undefined`] [Enum: user, content, space] |
| **targetKey** | `string` | - The identifier for the target entity:  - If &#x60;targetType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;targetType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;targetType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **sourceStatus** | `string` | The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetStatus** | `string` | The status of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **sourceVersion** | `number` | The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39; and the &#x60;sourceStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetVersion** | `number` | The version of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39; and the &#x60;targetStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |

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
| **204** | Returned if the relationship is deleted or the relationship didn\&#39;t exist. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have permission to delete the relationship. |  -  |
| **404** | Returned if the user, space or content could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findSourcesForTarget

> RelationArray findSourcesForTarget(relationName, sourceType, targetType, targetKey, sourceStatus, targetStatus, sourceVersion, targetVersion, expand, start, limit)

Find source entities related to a target entity

Returns all target entities that have a particular relationship to the source entity. Note, relationships are one way.  For example, the following method finds all users that have a \&#39;collaborator\&#39; relationship to a piece of content with an ID of \&#39;1234\&#39;: &#x60;GET /wiki/rest/api/relation/collaborator/to/content/1234/from/user&#x60; Note, \&#39;collaborator\&#39; is an example custom relationship type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.

### Example

```ts
import {
  Configuration,
  RelationApi,
} from 'confluence-cloud-api-v1';
import type { FindSourcesForTargetRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RelationApi(config);

  const body = {
    // string | The name of the relationship. This method supports relationships created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put). Note, this method does not support \'like\' or \'favourite\' relationships.
    relationName: relationName_example,
    // 'user' | 'content' | 'space' | The source entity type of the relationship.
    sourceType: sourceType_example,
    // 'user' | 'content' | 'space' | The target entity type of the relationship.
    targetType: targetType_example,
    // string | The identifier for the target entity:  - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `targetType` is \'content\', then specify the content ID. - If `targetType` is \'space\', then specify the space key.
    targetKey: targetKey_example,
    // string | The status of the source. This parameter is only used when the `sourceType` is \'content\'. (optional)
    sourceStatus: sourceStatus_example,
    // string | The status of the target. This parameter is only used when the `targetType` is \'content\'. (optional)
    targetStatus: targetStatus_example,
    // number | The version of the source. This parameter is only used when the `sourceType` is \'content\' and the `sourceStatus` is \'historical\'. (optional)
    sourceVersion: 56,
    // number | The version of the target. This parameter is only used when the `targetType` is \'content\' and the `targetStatus` is \'historical\'. (optional)
    targetVersion: 56,
    // Array<'relationData' | 'source' | 'target'> | A multi-value parameter indicating which properties of the response object to expand.  - `relationData` returns information about the relationship, such as who created it and when it was created. - `source` returns the source entity. - `target` returns the target entity. (optional)
    expand: ...,
    // number | The starting index of the returned relationships. (optional)
    start: 56,
    // number | The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies FindSourcesForTargetRequest;

  try {
    const data = await api.findSourcesForTarget(body);
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
| **relationName** | `string` | The name of the relationship. This method supports relationships created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put). Note, this method does not support \&#39;like\&#39; or \&#39;favourite\&#39; relationships. | [Defaults to `undefined`] |
| **sourceType** | `user`, `content`, `space` | The source entity type of the relationship. | [Defaults to `undefined`] [Enum: user, content, space] |
| **targetType** | `user`, `content`, `space` | The target entity type of the relationship. | [Defaults to `undefined`] [Enum: user, content, space] |
| **targetKey** | `string` | The identifier for the target entity:  - If &#x60;targetType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;targetType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;targetType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **sourceStatus** | `string` | The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetStatus** | `string` | The status of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **sourceVersion** | `number` | The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39; and the &#x60;sourceStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetVersion** | `number` | The version of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39; and the &#x60;targetStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **expand** | `relationData`, `source`, `target` | A multi-value parameter indicating which properties of the response object to expand.  - &#x60;relationData&#x60; returns information about the relationship, such as who created it and when it was created. - &#x60;source&#x60; returns the source entity. - &#x60;target&#x60; returns the target entity. | [Optional] [Enum: relationData, source, target] |
| **start** | `number` | The starting index of the returned relationships. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |

### Return type

[**RelationArray**](RelationArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested relationships are returned. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the user does not have permission to view the relationship |  -  |
| **404** | Returned if the target entity does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findTargetFromSource

> RelationArray findTargetFromSource(relationName, sourceType, sourceKey, targetType, sourceStatus, targetStatus, sourceVersion, targetVersion, expand, start, limit)

Find target entities related to a source entity

Returns all target entities that have a particular relationship to the source entity. Note, relationships are one way.  For example, the following method finds all content that the current user has an \&#39;ignore\&#39; relationship with: &#x60;GET /wiki/rest/api/relation/ignore/from/user/current/to/content&#x60; Note, \&#39;ignore\&#39; is an example custom relationship type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.

### Example

```ts
import {
  Configuration,
  RelationApi,
} from 'confluence-cloud-api-v1';
import type { FindTargetFromSourceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RelationApi(config);

  const body = {
    // string | The name of the relationship. This method supports relationships created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put). Note, this method does not support \'like\' or \'favourite\' relationships.
    relationName: relationName_example,
    // 'user' | 'content' | 'space' | The source entity type of the relationship.
    sourceType: sourceType_example,
    // string | The identifier for the source entity:  - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `sourceType` is \'content\', then specify the content ID. - If `sourceType` is \'space\', then specify the space key.
    sourceKey: sourceKey_example,
    // 'user' | 'content' | 'space' | The target entity type of the relationship.
    targetType: targetType_example,
    // string | The status of the source. This parameter is only used when the `sourceType` is \'content\'. (optional)
    sourceStatus: sourceStatus_example,
    // string | The status of the target. This parameter is only used when the `targetType` is \'content\'. (optional)
    targetStatus: targetStatus_example,
    // number | The version of the source. This parameter is only used when the `sourceType` is \'content\' and the `sourceStatus` is \'historical\'. (optional)
    sourceVersion: 56,
    // number | The version of the target. This parameter is only used when the `targetType` is \'content\' and the `targetStatus` is \'historical\'. (optional)
    targetVersion: 56,
    // Array<'relationData' | 'source' | 'target'> | A multi-value parameter indicating which properties of the response object to expand.  - `relationData` returns information about the relationship, such as who created it and when it was created. - `source` returns the source entity. - `target` returns the target entity. (optional)
    expand: ...,
    // number | The starting index of the returned relationships. (optional)
    start: 56,
    // number | The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies FindTargetFromSourceRequest;

  try {
    const data = await api.findTargetFromSource(body);
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
| **relationName** | `string` | The name of the relationship. This method supports relationships created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put). Note, this method does not support \&#39;like\&#39; or \&#39;favourite\&#39; relationships. | [Defaults to `undefined`] |
| **sourceType** | `user`, `content`, `space` | The source entity type of the relationship. | [Defaults to `undefined`] [Enum: user, content, space] |
| **sourceKey** | `string` | The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;sourceType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;sourceType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **targetType** | `user`, `content`, `space` | The target entity type of the relationship. | [Defaults to `undefined`] [Enum: user, content, space] |
| **sourceStatus** | `string` | The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetStatus** | `string` | The status of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **sourceVersion** | `number` | The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39; and the &#x60;sourceStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetVersion** | `number` | The version of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39; and the &#x60;targetStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **expand** | `relationData`, `source`, `target` | A multi-value parameter indicating which properties of the response object to expand.  - &#x60;relationData&#x60; returns information about the relationship, such as who created it and when it was created. - &#x60;source&#x60; returns the source entity. - &#x60;target&#x60; returns the target entity. | [Optional] [Enum: relationData, source, target] |
| **start** | `number` | The starting index of the returned relationships. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |

### Return type

[**RelationArray**](RelationArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested relationships are returned. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the user does not have permission to view the relationships. |  -  |
| **404** | Returned if the target entity does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRelationship

> Relation getRelationship(relationName, sourceType, sourceKey, targetType, targetKey, sourceStatus, targetStatus, sourceVersion, targetVersion, expand)

Find relationship from source to target

Find whether a particular type of relationship exists from a source entity to a target entity. Note, relationships are one way.  For example, you can use this method to find whether the current user has selected a particular page as a favorite (i.e. \&#39;save for later\&#39;): &#x60;GET /wiki/rest/api/relation/favourite/from/user/current/to/content/123&#x60;  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.

### Example

```ts
import {
  Configuration,
  RelationApi,
} from 'confluence-cloud-api-v1';
import type { GetRelationshipRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RelationApi(config);

  const body = {
    // string | The name of the relationship. This method supports the \'favourite\' (i.e. \'save for later\') relationship as well as any other relationship types created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put).
    relationName: relationName_example,
    // 'user' | 'content' | 'space' | The source entity type of the relationship. This must be \'user\', if the `relationName` is \'favourite\'.
    sourceType: sourceType_example,
    // string | - The identifier for the source entity:  - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `sourceType` is \'content\', then specify the content ID. - If `sourceType` is \'space\', then specify the space key.
    sourceKey: sourceKey_example,
    // 'user' | 'content' | 'space' | The target entity type of the relationship. This must be \'space\' or \'content\', if the `relationName` is \'favourite\'.
    targetType: targetType_example,
    // string | The identifier for the target entity:  - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `targetType` is \'content\', then specify the content ID. - If `targetType` is \'space\', then specify the space key.
    targetKey: targetKey_example,
    // string | The status of the source. This parameter is only used when the `sourceType` is \'content\'. (optional)
    sourceStatus: sourceStatus_example,
    // string | The status of the target. This parameter is only used when the `targetType` is \'content\'. (optional)
    targetStatus: targetStatus_example,
    // number | The version of the source. This parameter is only used when the `sourceType` is \'content\' and the `sourceStatus` is \'historical\'. (optional)
    sourceVersion: 56,
    // number | The version of the target. This parameter is only used when the `targetType` is \'content\' and the `targetStatus` is \'historical\'. (optional)
    targetVersion: 56,
    // Array<'relationData' | 'source' | 'target'> | A multi-value parameter indicating which properties of the response object to expand.  - `relationData` returns information about the relationship, such as who created it and when it was created. - `source` returns the source entity. - `target` returns the target entity. (optional)
    expand: ...,
  } satisfies GetRelationshipRequest;

  try {
    const data = await api.getRelationship(body);
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
| **relationName** | `string` | The name of the relationship. This method supports the \&#39;favourite\&#39; (i.e. \&#39;save for later\&#39;) relationship as well as any other relationship types created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put). | [Defaults to `undefined`] |
| **sourceType** | `user`, `content`, `space` | The source entity type of the relationship. This must be \&#39;user\&#39;, if the &#x60;relationName&#x60; is \&#39;favourite\&#39;. | [Defaults to `undefined`] [Enum: user, content, space] |
| **sourceKey** | `string` | - The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;sourceType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;sourceType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **targetType** | `user`, `content`, `space` | The target entity type of the relationship. This must be \&#39;space\&#39; or \&#39;content\&#39;, if the &#x60;relationName&#x60; is \&#39;favourite\&#39;. | [Defaults to `undefined`] [Enum: user, content, space] |
| **targetKey** | `string` | The identifier for the target entity:  - If &#x60;targetType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;targetType&#x60; is \&#39;content\&#39;, then specify the content ID. - If &#x60;targetType&#x60; is \&#39;space\&#39;, then specify the space key. | [Defaults to `undefined`] |
| **sourceStatus** | `string` | The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetStatus** | `string` | The status of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39;. | [Optional] [Defaults to `undefined`] |
| **sourceVersion** | `number` | The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is \&#39;content\&#39; and the &#x60;sourceStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **targetVersion** | `number` | The version of the target. This parameter is only used when the &#x60;targetType&#x60; is \&#39;content\&#39; and the &#x60;targetStatus&#x60; is \&#39;historical\&#39;. | [Optional] [Defaults to `undefined`] |
| **expand** | `relationData`, `source`, `target` | A multi-value parameter indicating which properties of the response object to expand.  - &#x60;relationData&#x60; returns information about the relationship, such as who created it and when it was created. - &#x60;source&#x60; returns the source entity. - &#x60;target&#x60; returns the target entity. | [Optional] [Enum: relationData, source, target] |

### Return type

[**Relation**](Relation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the relationship exists. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have permission to view the relationship. |  -  |
| **404** | Returned if the relationship does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

