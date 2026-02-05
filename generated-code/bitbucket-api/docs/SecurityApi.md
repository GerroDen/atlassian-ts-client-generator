# SecurityApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addExemptRepo**](SecurityApi.md#addexemptrepo) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt | Exempt a repo from secret scanning |
| [**addKey**](SecurityApi.md#addkey) | **POST** /gpg/latest/keys | Create a GPG key |
| [**bulkAddExemptRepositories**](SecurityApi.md#bulkaddexemptrepositories) | **POST** /api/latest/secret-scanning/exempt | Bulk exempt repos from secret scanning |
| [**bulkAddExemptRepositories1**](SecurityApi.md#bulkaddexemptrepositories1) | **POST** /api/latest/projects/{projectKey}/secret-scanning/exempt | Bulk exempt repos from secret scanning |
| [**createAllowlistRule**](SecurityApi.md#createallowlistrule) | **POST** /api/latest/projects/{projectKey}/secret-scanning/allowlist | Create project secret scanning allowlist rule |
| [**createAllowlistRule1**](SecurityApi.md#createallowlistrule1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist | Create repository secret scanning allowlist rule |
| [**createCertificate**](SecurityApi.md#createcertificate) | **POST** /api/latest/signing/x509-certificates | Create an X.509 certificate |
| [**createRule**](SecurityApi.md#createrule) | **POST** /api/latest/projects/{projectKey}/secret-scanning/rules | Create project secret scanning rule |
| [**createRule1**](SecurityApi.md#createrule1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules | Create repository secret scanning rule |
| [**createRule2**](SecurityApi.md#createrule2) | **POST** /api/latest/secret-scanning/rules | Create global secret scanning rule |
| [**deleteAllowlistRule**](SecurityApi.md#deleteallowlistrule) | **DELETE** /api/latest/projects/{projectKey}/secret-scanning/allowlist/{id} | Delete a project secret scanning allowlist rule |
| [**deleteAllowlistRule1**](SecurityApi.md#deleteallowlistrule1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id} | Delete a repository secret scanning allowlist rule |
| [**deleteCertificate**](SecurityApi.md#deletecertificate) | **DELETE** /api/latest/signing/x509-certificates/{id} | Delete an X.509 certificate |
| [**deleteExemptRepo**](SecurityApi.md#deleteexemptrepo) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt | Delete an exempt repository |
| [**deleteForUser**](SecurityApi.md#deleteforuser) | **DELETE** /gpg/latest/keys | Delete all GPG keys for user |
| [**deleteInactiveKeys**](SecurityApi.md#deleteinactivekeys) | **DELETE** /secrets/1.0/keys/inactive | Delete inactive AES key(s) |
| [**deleteKey**](SecurityApi.md#deletekey) | **DELETE** /gpg/latest/keys/{fingerprintOrId} | Delete a GPG key |
| [**deleteRule**](SecurityApi.md#deleterule) | **DELETE** /api/latest/projects/{projectKey}/secret-scanning/rules/{id} | Delete a project secret scanning rule |
| [**deleteRule1**](SecurityApi.md#deleterule1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id} | Delete a repository secret scanning rule |
| [**deleteRule2**](SecurityApi.md#deleterule2) | **DELETE** /api/latest/secret-scanning/rules/{id} | Delete a global secret scanning rule |
| [**editAllowlistRule**](SecurityApi.md#editallowlistrule) | **PUT** /api/latest/projects/{projectKey}/secret-scanning/allowlist/{id} | Edit an existing project secret scanning allowlist rule |
| [**editAllowlistRule1**](SecurityApi.md#editallowlistrule1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id} | Edit an existing repository secret scanning allowlist rule |
| [**editRule**](SecurityApi.md#editrule) | **PUT** /api/latest/projects/{projectKey}/secret-scanning/rules/{id} | Edit an existing project secret scanning rule |
| [**editRule1**](SecurityApi.md#editrule1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id} | Edit an existing repository secret scanning rule |
| [**editRule2**](SecurityApi.md#editrule2) | **PUT** /api/latest/secret-scanning/rules/{id} | Edit a global secret scanning rule. |
| [**findExemptReposByProject**](SecurityApi.md#findexemptreposbyproject) | **GET** /api/latest/projects/{projectKey}/secret-scanning/exempt | Find repos exempt from secret scanning for a project |
| [**findExemptReposByScope**](SecurityApi.md#findexemptreposbyscope) | **GET** /api/latest/secret-scanning/exempt | Find all repos exempt from secret scan |
| [**getAllCertificates**](SecurityApi.md#getallcertificates) | **GET** /api/latest/signing/x509-certificates | Get all X.509 certificates |
| [**getAllowlistRule**](SecurityApi.md#getallowlistrule) | **GET** /api/latest/projects/{projectKey}/secret-scanning/allowlist/{id} | Get a project secret scanning allowlist rule |
| [**getAllowlistRule1**](SecurityApi.md#getallowlistrule1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id} | Get a repository secret scanning allowlist rule |
| [**getInactiveKeys**](SecurityApi.md#getinactivekeys) | **GET** /secrets/1.0/keys/inactive | Retrieve inactive AES key(s) |
| [**getKeysForUser**](SecurityApi.md#getkeysforuser) | **GET** /gpg/latest/keys | Get all GPG keys |
| [**getRule**](SecurityApi.md#getrule) | **GET** /api/latest/projects/{projectKey}/secret-scanning/rules/{id} | Get a project secret scanning rule |
| [**getRule1**](SecurityApi.md#getrule1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id} | Get a repository secret scanning rule |
| [**getRule2**](SecurityApi.md#getrule2) | **GET** /api/latest/secret-scanning/rules/{id} | Get a global secret scanning rule |
| [**getSystemSigningConfiguration**](SecurityApi.md#getsystemsigningconfiguration) | **GET** /api/latest/system-signing/configuration | Get system signing configuration |
| [**isRepoExempt**](SecurityApi.md#isrepoexempt) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt | Get whether a repository is exempt |
| [**rotateKey**](SecurityApi.md#rotatekey) | **POST** /secrets/1.0/keys/rotate | Rotate the current AES key |
| [**search1**](SecurityApi.md#search1) | **GET** /api/latest/projects/{projectKey}/secret-scanning/rules | Find project secret scanning rules |
| [**search2**](SecurityApi.md#search2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist | Find repository secret scanning allowlist rules |
| [**search3**](SecurityApi.md#search3) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules | Find repository secret scanning rules |
| [**search4**](SecurityApi.md#search4) | **GET** /api/latest/secret-scanning/rules | Find global secret scanning rules |
| [**searchAllowlistRule**](SecurityApi.md#searchallowlistrule) | **GET** /api/latest/projects/{projectKey}/secret-scanning/allowlist | Find project secret scanning allowlist rules |
| [**updateCertificateRevocationListEntries**](SecurityApi.md#updatecertificaterevocationlistentries) | **PUT** /api/latest/signing/x509-certificates/crl/{id} | Update X.509 CRL entries |
| [**updateSystemSigningConfiguration**](SecurityApi.md#updatesystemsigningconfigurationoperation) | **POST** /api/latest/system-signing/configuration | Update system signing configuration |



## addExemptRepo

> addExemptRepo()

Exempt a repo from secret scanning

Exempt a repository from being scanned for secrets   &lt;strong&gt;Deprecated since 8.6&lt;/strong&gt;. Exemptions are now managed by scope.  Use POST /rest/api/1.0/secret-scanning/exempt for global scope  Use POST /rest/api/1.0/projects/{projectKey}/secret-scanning/exempt for the project scope

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { AddExemptRepoRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.addExemptRepo();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | An exempt repo was added |  -  |
| **401** | The authenticated user is not permitted to exempt a repository from secret scanning |  -  |
| **409** | At least one of specified repositories have already been previously made exempt. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addKey

> RestGpgKey addKey(user, restGpgKey)

Create a GPG key

Add a GPG key to the authenticated user\&#39;s account. Optionally, users with ADMIN and higher permissions may choose to specify the &lt;code&gt;user&lt;/code&gt; parameter to add a GPG key for another user.  Only authenticated users may call this endpoint.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { AddKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The name of the user to add a key for (optional; requires ADMIN permission or higher). (optional)
    user: user_example,
    // RestGpgKey | The request body. (optional)
    restGpgKey: ...,
  } satisfies AddKeyRequest;

  try {
    const data = await api.addKey(body);
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
| **user** | `string` | The name of the user to add a key for (optional; requires ADMIN permission or higher). | [Optional] [Defaults to `undefined`] |
| **restGpgKey** | [RestGpgKey](RestGpgKey.md) | The request body. | [Optional] |

### Return type

[**RestGpgKey**](RestGpgKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response contains the GPG key that was just created. |  -  |
| **400** | The request has failed validation. |  -  |
| **401** | The currently authenticated user has insufficient permissions to perform this operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkAddExemptRepositories

> bulkAddExemptRepositories(restRepositorySelector)

Bulk exempt repos from secret scanning

Bulk exempt a  list of repositories from being scanned for secrets. User must be have global **ADMIN** permissions.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { BulkAddExemptRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // Set<RestRepositorySelector> (optional)
    restRepositorySelector: ...,
  } satisfies BulkAddExemptRepositoriesRequest;

  try {
    const data = await api.bulkAddExemptRepositories(body);
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
| **restRepositorySelector** | `Set<RestRepositorySelector>` |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All requested repositories were made exempt |  -  |
| **401** | The authenticated user is not permitted to exempt a repository from secret scanning. No repositories were made exempt. |  -  |
| **409** | At least one of specified repositories have already been previously made exempt. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkAddExemptRepositories1

> bulkAddExemptRepositories1(restRepositorySelector)

Bulk exempt repos from secret scanning

Bulk exempt a  list of repositories from being scanned for secrets. User must be have **PROJECT ADMIN** permissions.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { BulkAddExemptRepositories1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // Set<RestRepositorySelector> (optional)
    restRepositorySelector: ...,
  } satisfies BulkAddExemptRepositories1Request;

  try {
    const data = await api.bulkAddExemptRepositories1(body);
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
| **restRepositorySelector** | `Set<RestRepositorySelector>` |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All requested repositories were made exempt |  -  |
| **401** | The authenticated user is not permitted to exempt a repository from secret scanning. No repositories were made exempt. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAllowlistRule

> RestSecretScanningAllowlistRule createAllowlistRule(projectKey, restSecretScanningAllowlistRuleSetRequest)

Create project secret scanning allowlist rule

Create a new project level secret scanning allowlist rule. Project allowlist rules are used when scanning all non exempt repositories in the provided project.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { CreateAllowlistRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestSecretScanningAllowlistRuleSetRequest | Allowlist rule to create, either the line regular expression or the path regular expression must be present
    restSecretScanningAllowlistRuleSetRequest: ...,
  } satisfies CreateAllowlistRuleRequest;

  try {
    const data = await api.createAllowlistRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **restSecretScanningAllowlistRuleSetRequest** | [RestSecretScanningAllowlistRuleSetRequest](RestSecretScanningAllowlistRuleSetRequest.md) | Allowlist rule to create, either the line regular expression or the path regular expression must be present | |

### Return type

[**RestSecretScanningAllowlistRule**](RestSecretScanningAllowlistRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created allowlist rule |  -  |
| **400** | The request did not contain a correctly formed allowlist rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to create project allowlist rules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAllowlistRule1

> RestSecretScanningAllowlistRule createAllowlistRule1(projectKey, repositorySlug, restSecretScanningAllowlistRuleSetRequest)

Create repository secret scanning allowlist rule

Create a new repository secret scanning allowlist rule. Repository allowlist rules are used when scanning the given repository.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { CreateAllowlistRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestSecretScanningAllowlistRuleSetRequest | Allowlist rule to create, either the line regular expression or the path regular expression must be present
    restSecretScanningAllowlistRuleSetRequest: ...,
  } satisfies CreateAllowlistRule1Request;

  try {
    const data = await api.createAllowlistRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restSecretScanningAllowlistRuleSetRequest** | [RestSecretScanningAllowlistRuleSetRequest](RestSecretScanningAllowlistRuleSetRequest.md) | Allowlist rule to create, either the line regular expression or the path regular expression must be present | |

### Return type

[**RestSecretScanningAllowlistRule**](RestSecretScanningAllowlistRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created rule |  -  |
| **400** | The request did not contain a correctly formed allowlist rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to create repository rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCertificate

> RestX509Certificate createCertificate(certificate)

Create an X.509 certificate

Create an X.509 certificate. This will add the given X.509 certificate to the system. Existing entries will not be overridden if an X.509 certificate already exists. Once added, an X.509 certificate cannot be updated.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { CreateCertificateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // Blob | The X.509 certificate file to upload. (optional)
    certificate: BINARY_DATA_HERE,
  } satisfies CreateCertificateRequest;

  try {
    const data = await api.createCertificate(body);
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
| **certificate** | `Blob` | The X.509 certificate file to upload. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestX509Certificate**](RestX509Certificate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created X.509 certificate |  -  |
| **400** | The request did not contain a valid X.509 certificate request. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to create X.509 certificates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRule

> RestSecretScanningRule createRule(projectKey, restSecretScanningRuleSetRequest)

Create project secret scanning rule

Create a new project level secret scanning rule. Project rules are used when scanning all non exempt repositories in the provided project.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { CreateRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestSecretScanningRuleSetRequest | Rule to create, either the line regular expression or the path regular expression must be present
    restSecretScanningRuleSetRequest: ...,
  } satisfies CreateRuleRequest;

  try {
    const data = await api.createRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **restSecretScanningRuleSetRequest** | [RestSecretScanningRuleSetRequest](RestSecretScanningRuleSetRequest.md) | Rule to create, either the line regular expression or the path regular expression must be present | |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created rule |  -  |
| **400** | The request did not contain a correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to create project rules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRule1

> RestSecretScanningRule createRule1(projectKey, repositorySlug, restSecretScanningRuleSetRequest)

Create repository secret scanning rule

Create a new repository secret scanning rule. Repository rules are used when scanning the given repository.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { CreateRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestSecretScanningRuleSetRequest | Rule to create, either the line regular expression or the path regular expression must be present
    restSecretScanningRuleSetRequest: ...,
  } satisfies CreateRule1Request;

  try {
    const data = await api.createRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restSecretScanningRuleSetRequest** | [RestSecretScanningRuleSetRequest](RestSecretScanningRuleSetRequest.md) | Rule to create, either the line regular expression or the path regular expression must be present | |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created rule |  -  |
| **400** | The request did not contain a correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to create repository rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRule2

> RestSecretScanningRule createRule2(restSecretScanningRuleSetRequest)

Create global secret scanning rule

Create a new global secret scanning rule. Global rules are used when scanning all non exempt repositories.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { CreateRule2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // RestSecretScanningRuleSetRequest | Rule to create, either the line regular expression or the path regular expression must be present
    restSecretScanningRuleSetRequest: ...,
  } satisfies CreateRule2Request;

  try {
    const data = await api.createRule2(body);
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
| **restSecretScanningRuleSetRequest** | [RestSecretScanningRuleSetRequest](RestSecretScanningRuleSetRequest.md) | Rule to create, either the line regular expression or the path regular expression must be present | |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created rule |  -  |
| **400** | The request did not contain a correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to create global rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAllowlistRule

> deleteAllowlistRule(projectKey, id)

Delete a project secret scanning allowlist rule

Delete a project secret scanning allowlist rule with the provided ID.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteAllowlistRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The allowlist rule id.
    id: 7,
  } satisfies DeleteAllowlistRuleRequest;

  try {
    const data = await api.deleteAllowlistRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The allowlist rule id. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response indicating that the rule was deleted, or not found at this location |  -  |
| **401** | The authenticated user is not permitted to delete project rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAllowlistRule1

> deleteAllowlistRule1(projectKey, id, repositorySlug)

Delete a repository secret scanning allowlist rule

Delete a repository secret scanning allowlist rule with the provided ID.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteAllowlistRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The allowlist rule id.
    id: 7,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteAllowlistRule1Request;

  try {
    const data = await api.deleteAllowlistRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The allowlist rule id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response indicating that the allowlist rule was deleted |  -  |
| **401** | The authenticated user is not permitted to delete repository allowlist rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCertificate

> RestX509Certificate deleteCertificate(id)

Delete an X.509 certificate

Delete an X.509 certificate specified by the given ID.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteCertificateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The ID of the X.509 certificate.
    id: id_example,
  } satisfies DeleteCertificateRequest;

  try {
    const data = await api.deleteCertificate(body);
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
| **id** | `string` | The ID of the X.509 certificate. | [Defaults to `undefined`] |

### Return type

[**RestX509Certificate**](RestX509Certificate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | An empty response if the X.509 certificate was successfully deleted |  -  |
| **401** | The authenticated user is not permitted to delete X.509 certificates |  -  |
| **404** | There is no X.509 certificate with the given ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteExemptRepo

> deleteExemptRepo()

Delete an exempt repository

Remove a repository from being exempt from secret scanning

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteExemptRepoRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.deleteExemptRepo();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response indicating that the exempt repository was deleted |  -  |
| **401** | The authenticated user is not permitted to delete an exempt repository |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteForUser

> deleteForUser(user)

Delete all GPG keys for user

Delete all GPG keys for a supplied user.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteForUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The username of the user to delete the keys for. If no username is specified, the GPG keys will be deleted for the currently authenticated user. (optional)
    user: user_example,
  } satisfies DeleteForUserRequest;

  try {
    const data = await api.deleteForUser(body);
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
| **user** | `string` | The username of the user to delete the keys for. If no username is specified, the GPG keys will be deleted for the currently authenticated user. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The GPG keys matching the supplied &lt;strong&gt;user&lt;/strong&gt; were deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the GPG keys. This is only possible when a &lt;strong&gt;user&lt;/strong&gt; is explicitly supplied. |  -  |
| **404** | No user matches the supplied &lt;strong&gt;user&lt;/strong&gt;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteInactiveKeys

> deleteInactiveKeys()

Delete inactive AES key(s)

Delete the inactive AES encryption key(s). Post rotation, inactive AES key(s) can be cleaned up.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteInactiveKeysRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.deleteInactiveKeys();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the keys were deleted successfully |  -  |
| **401** | Returned if user is not authorized |  -  |
| **500** | Returned if an error occurs when deleting the keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteKey

> deleteKey(fingerprintOrId)

Delete a GPG key

Delete the GPG key with the specified ID or Key Fingerprint.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The GPG fingerprint or ID.
    fingerprintOrId: fingerprintOrId_example,
  } satisfies DeleteKeyRequest;

  try {
    const data = await api.deleteKey(body);
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
| **fingerprintOrId** | `string` | The GPG fingerprint or ID. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The key has been deleted successfully. |  -  |
| **401** | The currently authenticated user has insufficient permissions to perform this operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRule

> deleteRule(projectKey, id)

Delete a project secret scanning rule

Delete a project secret scanning rule with the provided ID.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The rule id.
    id: 7,
  } satisfies DeleteRuleRequest;

  try {
    const data = await api.deleteRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The rule id. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response indicating that the rule was deleted, or not found at this location |  -  |
| **401** | The authenticated user is not permitted to delete project rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRule1

> deleteRule1(projectKey, id, repositorySlug)

Delete a repository secret scanning rule

Delete a repository secret scanning rule with the provided ID.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The rule id.
    id: 7,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteRule1Request;

  try {
    const data = await api.deleteRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The rule id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response indicating that the rule was deleted |  -  |
| **401** | The authenticated user is not permitted to delete repository rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRule2

> deleteRule2(id)

Delete a global secret scanning rule

Delete a global secret scanning rule with the provided ID

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { DeleteRule2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The rule id.
    id: 7,
  } satisfies DeleteRule2Request;

  try {
    const data = await api.deleteRule2(body);
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
| **id** | `string` | The rule id. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response indicating that the rule was deleted |  -  |
| **401** | The authenticated user is not permitted to delete global rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editAllowlistRule

> RestSecretScanningAllowlistRule editAllowlistRule(projectKey, id, restSecretScanningAllowlistRuleSetRequest)

Edit an existing project secret scanning allowlist rule

Edit a project secret scanning allowlist rule.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { EditAllowlistRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The allowlist rule id.
    id: 7,
    // RestSecretScanningAllowlistRuleSetRequest
    restSecretScanningAllowlistRuleSetRequest: ...,
  } satisfies EditAllowlistRuleRequest;

  try {
    const data = await api.editAllowlistRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The allowlist rule id. | [Defaults to `undefined`] |
| **restSecretScanningAllowlistRuleSetRequest** | [RestSecretScanningAllowlistRuleSetRequest](RestSecretScanningAllowlistRuleSetRequest.md) |  | |

### Return type

[**RestSecretScanningAllowlistRule**](RestSecretScanningAllowlistRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated allowlist rule |  -  |
| **400** | The request did not contain a correctly formed allowlist rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to modify project allowlist rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editAllowlistRule1

> RestSecretScanningAllowlistRule editAllowlistRule1(projectKey, id, repositorySlug, restSecretScanningAllowlistRuleSetRequest)

Edit an existing repository secret scanning allowlist rule

Edit a repository secret scanning allowlist rule.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { EditAllowlistRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The allowlist rule id.
    id: 7,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestSecretScanningAllowlistRuleSetRequest
    restSecretScanningAllowlistRuleSetRequest: ...,
  } satisfies EditAllowlistRule1Request;

  try {
    const data = await api.editAllowlistRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The allowlist rule id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restSecretScanningAllowlistRuleSetRequest** | [RestSecretScanningAllowlistRuleSetRequest](RestSecretScanningAllowlistRuleSetRequest.md) |  | |

### Return type

[**RestSecretScanningAllowlistRule**](RestSecretScanningAllowlistRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated allowlist rule |  -  |
| **400** | The request did not contain a correctly formed allowlist rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to edit repository allowlist rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editRule

> RestSecretScanningRule editRule(projectKey, id, restSecretScanningRuleSetRequest)

Edit an existing project secret scanning rule

Edit a project secret scanning rule.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { EditRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The rule id.
    id: 7,
    // RestSecretScanningRuleSetRequest
    restSecretScanningRuleSetRequest: ...,
  } satisfies EditRuleRequest;

  try {
    const data = await api.editRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The rule id. | [Defaults to `undefined`] |
| **restSecretScanningRuleSetRequest** | [RestSecretScanningRuleSetRequest](RestSecretScanningRuleSetRequest.md) |  | |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated rule |  -  |
| **400** | The request did not contain a correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to modify project rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editRule1

> RestSecretScanningRule editRule1(projectKey, id, repositorySlug, restSecretScanningRuleSetRequest)

Edit an existing repository secret scanning rule

Edit a repository secret scanning rule.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { EditRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The rule id.
    id: 7,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestSecretScanningRuleSetRequest
    restSecretScanningRuleSetRequest: ...,
  } satisfies EditRule1Request;

  try {
    const data = await api.editRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The rule id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restSecretScanningRuleSetRequest** | [RestSecretScanningRuleSetRequest](RestSecretScanningRuleSetRequest.md) |  | |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated rule |  -  |
| **400** | The request did not contain a correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to edit repository rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editRule2

> RestSecretScanningRule editRule2(id, restSecretScanningRuleSetRequest)

Edit a global secret scanning rule.

Edit an existing global secret scanning rule

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { EditRule2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The rule id.
    id: 7,
    // RestSecretScanningRuleSetRequest
    restSecretScanningRuleSetRequest: ...,
  } satisfies EditRule2Request;

  try {
    const data = await api.editRule2(body);
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
| **id** | `string` | The rule id. | [Defaults to `undefined`] |
| **restSecretScanningRuleSetRequest** | [RestSecretScanningRuleSetRequest](RestSecretScanningRuleSetRequest.md) |  | |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated rule |  -  |
| **400** | The request did not contain a correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to update global rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findExemptReposByProject

> GetRepositoriesRecentlyAccessed200Response findExemptReposByProject(order, start, limit)

Find repos exempt from secret scanning for a project

Find repositories exempt from secret scanning in a project

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { FindExemptReposByProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // 'NAME_ASC' | 'NAME_DESC' | Order by project name followed by repository name either ascending or descending, defaults to ascending. (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindExemptReposByProjectRequest;

  try {
    const data = await api.findExemptReposByProject(body);
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
| **order** | `NAME_ASC`, `NAME_DESC` | Order by project name followed by repository name either ascending or descending, defaults to ascending. | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of repositories |  -  |
| **401** | The authenticated user is not permitted to search exempt repositories for this project |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findExemptReposByScope

> GetRepositoriesRecentlyAccessed200Response findExemptReposByScope(order, start, limit)

Find all repos exempt from secret scan

Find all repositories exempt from secret scanning

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { FindExemptReposByScopeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // 'NAME_ASC' | 'NAME_DESC' | Order by project name followed by repository name either ascending or descending, defaults to ascending. (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindExemptReposByScopeRequest;

  try {
    const data = await api.findExemptReposByScope(body);
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
| **order** | `NAME_ASC`, `NAME_DESC` | Order by project name followed by repository name either ascending or descending, defaults to ascending. | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of repositories |  -  |
| **401** | The authenticated user is not permitted to search exempt repositories globally |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllCertificates

> RestX509Certificate getAllCertificates()

Get all X.509 certificates

Get all X.509 certificates that have been added to the system.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetAllCertificatesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.getAllCertificates();
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

[**RestX509Certificate**](RestX509Certificate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of X.509 certificates |  -  |
| **401** | The authenticated user is not permitted to get X.509 certificates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllowlistRule

> RestSecretScanningAllowlistRule getAllowlistRule(projectKey, id)

Get a project secret scanning allowlist rule

Get a project secret scanning allowlist rule by ID.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetAllowlistRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The allowlist rule id.
    id: 7,
  } satisfies GetAllowlistRuleRequest;

  try {
    const data = await api.getAllowlistRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The allowlist rule id. | [Defaults to `undefined`] |

### Return type

[**RestSecretScanningAllowlistRule**](RestSecretScanningAllowlistRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested allowlist rule |  -  |
| **401** | The authenticated user is not permitted to view project allowlist rules |  -  |
| **404** | The requested allowlist rules was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllowlistRule1

> RestSecretScanningAllowlistRule getAllowlistRule1(projectKey, id, repositorySlug)

Get a repository secret scanning allowlist rule

Get a repository secret scanning allowlist rule by ID.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetAllowlistRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The allowlist rule id.
    id: 7,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetAllowlistRule1Request;

  try {
    const data = await api.getAllowlistRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The allowlist rule id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestSecretScanningAllowlistRule**](RestSecretScanningAllowlistRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested allowlist rule |  -  |
| **401** | The authenticated user is not permitted to view repository allowlist rules |  -  |
| **404** | The requested allowlist rule was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInactiveKeys

> getInactiveKeys()

Retrieve inactive AES key(s)

Retrieves a list of inactive AES encryption key(s). An AES key becomes inactive after it has been rotated.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetInactiveKeysRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.getInactiveKeys();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the keys were retrieved successfully |  -  |
| **401** | Returned if user is not authorized |  -  |
| **500** | Returned if an error occurs when retrieving the keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKeysForUser

> GetKeysForUser200Response getKeysForUser(user, start, limit)

Get all GPG keys

Find all the keys for the currently authenticated user. Optionally, users with ADMIN and higher permissions may choose to specify the &lt;code&gt;user&lt;/code&gt; parameter to retrieve GPG keys for another user.  Only authenticated users may call this endpoint.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetKeysForUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The name of the user to get keys for (optional; requires ADMIN permission or higher). (optional)
    user: user_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetKeysForUserRequest;

  try {
    const data = await api.getKeysForUser(body);
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
| **user** | `string` | The name of the user to get keys for (optional; requires ADMIN permission or higher). | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetKeysForUser200Response**](GetKeysForUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a paged response of of keys for the user. |  -  |
| **401** | The currently authenticated user has insufficient permissions to perform this operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRule

> RestSecretScanningRule getRule(projectKey, id)

Get a project secret scanning rule

Get a project secret scanning rule by ID.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The rule id.
    id: 7,
  } satisfies GetRuleRequest;

  try {
    const data = await api.getRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The rule id. | [Defaults to `undefined`] |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested rule |  -  |
| **401** | The authenticated user is not permitted to view project rules |  -  |
| **404** | The requested rules was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRule1

> RestSecretScanningRule getRule1(projectKey, id, repositorySlug)

Get a repository secret scanning rule

Get a repository secret scanning rule by ID.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetRule1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The rule id.
    id: 7,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetRule1Request;

  try {
    const data = await api.getRule1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **id** | `string` | The rule id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested rule |  -  |
| **401** | The authenticated user is not permitted to view repository rules |  -  |
| **404** | The requested rule was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRule2

> RestSecretScanningRule getRule2(id)

Get a global secret scanning rule

Get a global secret scanning rule by ID.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetRule2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The rule id.
    id: 7,
  } satisfies GetRule2Request;

  try {
    const data = await api.getRule2(body);
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
| **id** | `string` | The rule id. | [Defaults to `undefined`] |

### Return type

[**RestSecretScanningRule**](RestSecretScanningRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested rule |  -  |
| **401** | The authenticated user is not permitted to get global rules |  -  |
| **404** | The requested rule was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSystemSigningConfiguration

> RestSystemSigningConfiguration getSystemSigningConfiguration()

Get system signing configuration

Gets the configuration details for system signing Git objects.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { GetSystemSigningConfigurationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.getSystemSigningConfiguration();
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

[**RestSystemSigningConfiguration**](RestSystemSigningConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The configuration details for system signing Git objects |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the configuration details for system signing Git objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## isRepoExempt

> isRepoExempt()

Get whether a repository is exempt

Check whether a repository is exempt from secret scanning

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { IsRepoExemptRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.isRepoExempt();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | True if the repository is exempt from secret scanning, false otherwise |  -  |
| **401** | The authenticated user is not permitted to check whether a repository is exempt from secret scanning |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateKey

> rotateKey()

Rotate the current AES key

Rotate the current AES encryption key. Existing secrets will be re-encrypted with the new key.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { RotateKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  try {
    const data = await api.rotateKey();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the key was rotated successfully |  -  |
| **401** | Returned if user is not authorized |  -  |
| **406** | Returned if the rotation cannot occur |  -  |
| **500** | Returned if an error occurs when rotating the key |  -  |
| **501** | Returned if the rotation is not supported on the instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search1

> Search3200Response search1(projectKey, filter, order, start, limit)

Find project secret scanning rules

Find project secret scanning rules by filtering.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { Search1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | Filter names by the provided text (optional)
    filter: Access,
    // 'NAME_ASC' | 'NAME_DESC' | Order by (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies Search1Request;

  try {
    const data = await api.search1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **filter** | `string` | Filter names by the provided text | [Optional] [Defaults to `undefined`] |
| **order** | `NAME_ASC`, `NAME_DESC` | Order by | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**Search3200Response**](Search3200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of rules |  -  |
| **400** | The request was not correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to view project rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search2

> Search2200Response search2(projectKey, repositorySlug, filter, order, start, limit)

Find repository secret scanning allowlist rules

Find repository secret scanning allowlist rules by filtering.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { Search2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Filter names by the provided text (optional)
    filter: Access,
    // 'NAME_ASC' | 'NAME_DESC' | Order by (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies Search2Request;

  try {
    const data = await api.search2(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **filter** | `string` | Filter names by the provided text | [Optional] [Defaults to `undefined`] |
| **order** | `NAME_ASC`, `NAME_DESC` | Order by | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**Search2200Response**](Search2200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of allowlist rules |  -  |
| **400** | The request was not a correctly formed allowlist rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to view repository rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search3

> Search3200Response search3(projectKey, repositorySlug, filter, order, start, limit)

Find repository secret scanning rules

Find repository secret scanning rules by filtering.  Repository **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { Search3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Filter names by the provided text (optional)
    filter: Access,
    // 'NAME_ASC' | 'NAME_DESC' | Order by (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies Search3Request;

  try {
    const data = await api.search3(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **filter** | `string` | Filter names by the provided text | [Optional] [Defaults to `undefined`] |
| **order** | `NAME_ASC`, `NAME_DESC` | Order by | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**Search3200Response**](Search3200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of rules |  -  |
| **400** | The request was not correctly formed rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to view repository rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search4

> Search3200Response search4(filter, order, start, limit)

Find global secret scanning rules

Find global secret scanning rules by filtering.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { Search4Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | Filter by rule name (optional)
    filter: Access,
    // 'NAME_ASC' | 'NAME_DESC' | Order by (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies Search4Request;

  try {
    const data = await api.search4(body);
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
| **filter** | `string` | Filter by rule name | [Optional] [Defaults to `undefined`] |
| **order** | `NAME_ASC`, `NAME_DESC` | Order by | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**Search3200Response**](Search3200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of rules |  -  |
| **400** | The request did not contain a correctly formed search request, see returned error for more details. |  -  |
| **401** | The authenticated user is not permitted to search global rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAllowlistRule

> Search2200Response searchAllowlistRule(projectKey, filter, order, start, limit)

Find project secret scanning allowlist rules

Find project secret scanning allowlist rules by filtering.  Project **Admin** is required

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { SearchAllowlistRuleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | Filter names by the provided text (optional)
    filter: Access,
    // 'NAME_ASC' | 'NAME_DESC' | Order by (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies SearchAllowlistRuleRequest;

  try {
    const data = await api.searchAllowlistRule(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **filter** | `string` | Filter names by the provided text | [Optional] [Defaults to `undefined`] |
| **order** | `NAME_ASC`, `NAME_DESC` | Order by | [Optional] [Defaults to `undefined`] [Enum: NAME_ASC, NAME_DESC] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**Search2200Response**](Search2200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of allowlist rules |  -  |
| **400** | The request was not correctly formed allowlist rule. See returned error for more details |  -  |
| **401** | The authenticated user is not permitted to view project allowlist rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCertificateRevocationListEntries

> updateCertificateRevocationListEntries(id)

Update X.509 CRL entries

Update the certificate revocation list (CRL) entries for an issuer X.509 certificate in the system, identified by &lt;code&gt;id&lt;/code&gt;. This will add any new revoked X.509 certificates that were issued by the given issuer X.509 certificate.  This endpoint will schedule a request to asynchronously perform the task. Please allow time for the task to complete as it will vary depending on how many CRLs there are to retrieve and process.  Note: CRL updates are scheduled to run every 24 hours. You may wish to trigger a refresh manually using this endpoint, otherwise, entries will be updated daily.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { UpdateCertificateRevocationListEntriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // string | The ID of the issuer certificate.
    id: id_example,
  } satisfies UpdateCertificateRevocationListEntriesRequest;

  try {
    const data = await api.updateCertificateRevocationListEntries(body);
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
| **id** | `string` | The ID of the issuer certificate. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully started processing CRLs. |  -  |
| **401** | The authenticated user is not permitted to update X.509 CRL entries |  -  |
| **404** | There is no X.509 certificate with the given ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSystemSigningConfiguration

> RestSystemSigningConfiguration updateSystemSigningConfiguration(updateSystemSigningConfigurationRequest)

Update system signing configuration

Updates the configuration for system signing Git objects.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from 'bitbucket-api';
import type { UpdateSystemSigningConfigurationOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SecurityApi();

  const body = {
    // UpdateSystemSigningConfigurationRequest (optional)
    updateSystemSigningConfigurationRequest: ...,
  } satisfies UpdateSystemSigningConfigurationOperationRequest;

  try {
    const data = await api.updateSystemSigningConfiguration(body);
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
| **updateSystemSigningConfigurationRequest** | [UpdateSystemSigningConfigurationRequest](UpdateSystemSigningConfigurationRequest.md) |  | [Optional] |

### Return type

[**RestSystemSigningConfiguration**](RestSystemSigningConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated configuration details for system signing Git objects |  -  |
| **400** | The configuration details could not be updated because the provided request was invalid |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the configuration details for system signing Git objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

