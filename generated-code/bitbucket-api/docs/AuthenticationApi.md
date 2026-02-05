# AuthenticationApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addForProject**](AuthenticationApi.md#addforproject) | **POST** /keys/latest/projects/{projectKey}/ssh | Add project SSH key |
| [**addForRepository**](AuthenticationApi.md#addforrepository) | **POST** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh | Add repository SSH key |
| [**addIdp**](AuthenticationApi.md#addidp) | **POST** /authconfig/latest/idps | Create IdP configuration |
| [**addSshKey**](AuthenticationApi.md#addsshkeyoperation) | **POST** /ssh/latest/keys | Add SSH key for user |
| [**authenticate**](AuthenticationApi.md#authenticate) | **POST** /tsv/latest/authenticate | Authenticate with 2SV |
| [**authenticateWithRecoveryCode**](AuthenticationApi.md#authenticatewithrecoverycode) | **POST** /tsv/latest/authenticate/recovery-code | Authenticate using recovery code |
| [**completeAuthenticationChange**](AuthenticationApi.md#completeauthenticationchange) | **POST** /tsv/latest/totp/complete-enrollment-update | Complete authentication app update for 2SV |
| [**completeEnforcedEnrollment**](AuthenticationApi.md#completeenforcedenrollment) | **POST** /tsv/latest/totp/complete-enforced-enrollment | Complete enforced enrollment in 2SV |
| [**completeVoluntaryEnrollment**](AuthenticationApi.md#completevoluntaryenrollment) | **POST** /tsv/latest/totp/complete-voluntary-enrollment | Complete voluntary enrollment in 2SV |
| [**createAccessToken**](AuthenticationApi.md#createaccesstoken) | **PUT** /access-tokens/latest/projects/{projectKey} | Create project HTTP token |
| [**createAccessToken1**](AuthenticationApi.md#createaccesstoken1) | **PUT** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug} | Create repository HTTP token |
| [**createAccessToken2**](AuthenticationApi.md#createaccesstoken2) | **PUT** /access-tokens/latest/users/{userSlug} | Create personal HTTP token |
| [**deleteById**](AuthenticationApi.md#deletebyid) | **DELETE** /access-tokens/latest/projects/{projectKey}/{tokenId} | Delete a HTTP token |
| [**deleteById1**](AuthenticationApi.md#deletebyid1) | **DELETE** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId} | Delete a HTTP token |
| [**deleteById2**](AuthenticationApi.md#deletebyid2) | **DELETE** /access-tokens/latest/users/{userSlug}/{tokenId} | Delete a HTTP token |
| [**deleteSshKey**](AuthenticationApi.md#deletesshkey) | **DELETE** /ssh/latest/keys/{keyId} | Remove SSH key |
| [**deleteSshKeys**](AuthenticationApi.md#deletesshkeys) | **DELETE** /ssh/latest/keys | Delete all user SSH key |
| [**elevatePermissionsWithPassword**](AuthenticationApi.md#elevatepermissionswithpassword) | **POST** /tsv/latest/elevate-permissions/password | Create elevated session with password |
| [**elevatePermissionsWithRecoveryCode**](AuthenticationApi.md#elevatepermissionswithrecoverycode) | **POST** /tsv/latest/elevate-permissions/recovery-code | Create elevated session with recovery code |
| [**elevatePermissionsWithTotp**](AuthenticationApi.md#elevatepermissionswithtotp) | **POST** /tsv/latest/elevate-permissions/totp | Create elevated session with TOTP |
| [**get**](AuthenticationApi.md#get) | **GET** /basicauth/latest/config | Get basic auth configuration |
| [**getAllAccessTokens**](AuthenticationApi.md#getallaccesstokens) | **GET** /access-tokens/latest/projects/{projectKey} | Get project HTTP tokens |
| [**getAllAccessTokens1**](AuthenticationApi.md#getallaccesstokens1) | **GET** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug} | Get repository HTTP tokens |
| [**getAllAccessTokens2**](AuthenticationApi.md#getallaccesstokens2) | **GET** /access-tokens/latest/users/{userSlug} | Get personal HTTP tokens |
| [**getById**](AuthenticationApi.md#getbyid) | **GET** /access-tokens/latest/projects/{projectKey}/{tokenId} | Get HTTP token by ID |
| [**getById1**](AuthenticationApi.md#getbyid1) | **GET** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId} | Get HTTP token by ID |
| [**getById2**](AuthenticationApi.md#getbyid2) | **GET** /access-tokens/latest/users/{userSlug}/{tokenId} | Get HTTP token by ID |
| [**getCaptchaData**](AuthenticationApi.md#getcaptchadata) | **GET** /tsv/latest/authenticate/captcha | Get CAPTCHA challenge |
| [**getConfig**](AuthenticationApi.md#getconfig) | **GET** /authconfig/latest/sso | Get SSO configuration |
| [**getElevatedPermissionStatus**](AuthenticationApi.md#getelevatedpermissionstatus) | **GET** /tsv/latest/elevate-permissions | Get elevated session status |
| [**getForProject**](AuthenticationApi.md#getforproject) | **GET** /keys/latest/projects/{projectKey}/ssh/{keyId} | Get project SSH key |
| [**getForProjects**](AuthenticationApi.md#getforprojects) | **GET** /keys/latest/ssh/{keyId}/projects | Get project SSH keys |
| [**getForRepositories**](AuthenticationApi.md#getforrepositories) | **GET** /keys/latest/ssh/{keyId}/repos | Get repository SSH key |
| [**getForRepository**](AuthenticationApi.md#getforrepository) | **GET** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId} | Get repository SSH key |
| [**getForRepository1**](AuthenticationApi.md#getforrepository1) | **GET** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh | Get repository SSH keys |
| [**getIdp**](AuthenticationApi.md#getidp) | **GET** /authconfig/latest/idps/{id} | Get IdP configuration |
| [**getIdps**](AuthenticationApi.md#getidps) | **GET** /authconfig/latest/idps | Get all configured IdPs |
| [**getJitProvisionedUsers**](AuthenticationApi.md#getjitprovisionedusers) | **GET** /authconfig/latest/jit-users | Get all JIT provisioned users |
| [**getLoginOptions**](AuthenticationApi.md#getloginoptions) | **GET** /authconfig/latest/login-options | Get available login options |
| [**getSshKey**](AuthenticationApi.md#getsshkey) | **GET** /ssh/latest/keys/{keyId} | Get SSH key for user by keyId |
| [**getSshKeys**](AuthenticationApi.md#getsshkeys) | **GET** /ssh/latest/keys | Get SSH keys for user |
| [**getSshKeysForProject**](AuthenticationApi.md#getsshkeysforproject) | **GET** /keys/latest/projects/{projectKey}/ssh | Get SSH key |
| [**getSsoManagementStatus**](AuthenticationApi.md#getssomanagementstatus) | **GET** /tsv/latest/sso-management-status | Get SSO management status |
| [**getStatus**](AuthenticationApi.md#getstatus) | **GET** /tsv/latest/status | Get two-step verification status |
| [**put**](AuthenticationApi.md#put) | **PUT** /basicauth/latest/config | Update basic auth configuration |
| [**removeIdp**](AuthenticationApi.md#removeidp) | **DELETE** /authconfig/latest/idps/{id} | Delete IdP configuration |
| [**revokeForProject**](AuthenticationApi.md#revokeforproject) | **DELETE** /keys/latest/projects/{projectKey}/ssh/{keyId} | Revoke project SSH key |
| [**revokeForRepository**](AuthenticationApi.md#revokeforrepository) | **DELETE** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId} | Revoke repository SSH key |
| [**revokeMany**](AuthenticationApi.md#revokemanyoperation) | **DELETE** /keys/latest/ssh/{keyId} | Revoke project SSH key |
| [**rotateRecoverCode**](AuthenticationApi.md#rotaterecovercode) | **POST** /tsv/latest/totp/recovery-code/rotate | Rotate recovery code |
| [**sshSettings**](AuthenticationApi.md#sshsettings) | **GET** /ssh/latest/settings | Get SSH settings |
| [**startEnforcedEnrollment**](AuthenticationApi.md#startenforcedenrollment) | **POST** /tsv/latest/totp/start-enforced-enrollment | Start enforced enrollment in 2SV |
| [**startEnrollmentUpdate**](AuthenticationApi.md#startenrollmentupdate) | **POST** /tsv/latest/totp/start-enrollment-update | Start authentication app update for 2SV |
| [**startVoluntaryEnrollment**](AuthenticationApi.md#startvoluntaryenrollment) | **POST** /tsv/latest/totp/start-voluntary-enrollment | Start voluntary enrollment in 2SV |
| [**unenroll**](AuthenticationApi.md#unenroll) | **DELETE** /tsv/latest/totp/unenroll | Uneroll current user from two-step verification |
| [**unenrollUser**](AuthenticationApi.md#unenrolluser) | **DELETE** /tsv/latest/totp/unenroll/user/{userName} | Unenroll specific user from two-step verification |
| [**updateAccessToken**](AuthenticationApi.md#updateaccesstoken) | **POST** /access-tokens/latest/projects/{projectKey}/{tokenId} | Update HTTP token |
| [**updateAccessToken1**](AuthenticationApi.md#updateaccesstoken1) | **POST** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId} | Update HTTP token |
| [**updateAccessToken2**](AuthenticationApi.md#updateaccesstoken2) | **POST** /access-tokens/latest/users/{userSlug}/{tokenId} | Update HTTP token |
| [**updateConfig**](AuthenticationApi.md#updateconfig) | **PATCH** /authconfig/latest/sso | Update SSO configuration |
| [**updateIdp**](AuthenticationApi.md#updateidp) | **PATCH** /authconfig/latest/idps/{id} | Update IdP configuration |
| [**updatePermission**](AuthenticationApi.md#updatepermission) | **PUT** /keys/latest/projects/{projectKey}/ssh/{keyId}/permission/{permission} | Update project SSH key permission |
| [**updatePermission1**](AuthenticationApi.md#updatepermission1) | **PUT** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}/permission/{permission} | Update repository SSH key permission |
| [**verifyCode**](AuthenticationApi.md#verifycode) | **POST** /tsv/latest/authenticate/totp-code | Authenticate using TOTP code |



## addForProject

> RestSshAccessKey addForProject(projectKey, restSshAccessKey)

Add project SSH key

Register a new SSH key and grants access to the project identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AddForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // RestSshAccessKey (optional)
    restSshAccessKey: ...,
  } satisfies AddForProjectRequest;

  try {
    const data = await api.addForProject(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **restSshAccessKey** | [RestSshAccessKey](RestSshAccessKey.md) |  | [Optional] |

### Return type

[**RestSshAccessKey**](RestSshAccessKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created access key. |  -  |
| **400** | The current request contains invalid or missing values. |  -  |
| **401** | The currently authenticated user has insufficient permissions to add an access key to the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addForRepository

> RestSshAccessKey addForRepository(projectKey, repositorySlug, restSshAccessKey)

Add repository SSH key

Register a new SSH key and grants access to the repository identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AddForRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // RestSshAccessKey (optional)
    restSshAccessKey: ...,
  } satisfies AddForRepositoryRequest;

  try {
    const data = await api.addForRepository(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **restSshAccessKey** | [RestSshAccessKey](RestSshAccessKey.md) |  | [Optional] |

### Return type

[**RestSshAccessKey**](RestSshAccessKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created access key. |  -  |
| **400** | The current request contains invalid or missing values. |  -  |
| **401** | The currently authenticated user has insufficient permissions to add an access key to the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addIdp

> IdpConfigEntity addIdp(idpConfigEntity)

Create IdP configuration

Creates a new IdP configuration.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AddIdpRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // IdpConfigEntity | The configuration of the new IdP to add. The ID must be null. (optional)
    idpConfigEntity: ...,
  } satisfies AddIdpRequest;

  try {
    const data = await api.addIdp(body);
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
| **idpConfigEntity** | [IdpConfigEntity](IdpConfigEntity.md) | The configuration of the new IdP to add. The ID must be null. | [Optional] |

### Return type

[**IdpConfigEntity**](IdpConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created IdP configuration. |  -  |
| **400** | The provided IdP configuration was either incorrect or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addSshKey

> RestSshKey addSshKey(user, addSshKeyRequest)

Add SSH key for user

Add a new SSH key to a supplied user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AddSshKeyOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // RestSshKey | the username of the user to add the SSH key for. If no username is specified, the SSH key will be added for the current authenticated user. (optional)
    user: ...,
    // AddSshKeyRequest (optional)
    addSshKeyRequest: ...,
  } satisfies AddSshKeyOperationRequest;

  try {
    const data = await api.addSshKey(body);
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
| **user** | [](.md) | the username of the user to add the SSH key for. If no username is specified, the SSH key will be added for the current authenticated user. | [Optional] [Defaults to `undefined`] |
| **addSshKeyRequest** | [AddSshKeyRequest](AddSshKeyRequest.md) |  | [Optional] |

### Return type

[**RestSshKey**](RestSshKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created SSH key. |  -  |
| **400** | The SSH key was not created because the key was not a valid RSA/DSA/ECDSA/Ed25519 key of a supported length. |  -  |
| **401** | Either there is no authenticated user or the currently authenticated user has insufficient permissions to add an SSH key. The latter is only possible when a &lt;strong&gt;user&lt;/strong&gt; is explicitly supplied. |  -  |
| **404** | No user matches the supplied &lt;strong&gt;user&lt;/strong&gt; |  -  |
| **409** | The SSH key already exists on the system. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authenticate

> AuthenticationResponse authenticate(authenticationEntity)

Authenticate with 2SV

Authenticates as the given user. This endpoint &lt;strong&gt;may&lt;/strong&gt;:  - Ask for two-step verification if the user has enrolled; or - Enforce enrollment in two-step verification if two-step verification enforcement is configured for the instance and the user is not yet enrolled.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AuthenticateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // AuthenticationEntity (optional)
    authenticationEntity: ...,
  } satisfies AuthenticateRequest;

  try {
    const data = await api.authenticate(body);
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
| **authenticationEntity** | [AuthenticationEntity](AuthenticationEntity.md) |  | [Optional] |

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user has successfully authenticated. |  -  |
| **401** | The given user failed authentication. |  -  |
| **412** | The user must undergo additional verification or enroll in two-step verification in order to authenticate |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authenticateWithRecoveryCode

> AuthenticationResponse authenticateWithRecoveryCode(totpRecoveryCodeAuthenticationDTO)

Authenticate using recovery code

Authenticate as the given user using a recovery code.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AuthenticateWithRecoveryCodeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // TotpRecoveryCodeAuthenticationDTO | A request containing a recovery code for the specified user. (optional)
    totpRecoveryCodeAuthenticationDTO: ...,
  } satisfies AuthenticateWithRecoveryCodeRequest;

  try {
    const data = await api.authenticateWithRecoveryCode(body);
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
| **totpRecoveryCodeAuthenticationDTO** | [TotpRecoveryCodeAuthenticationDTO](TotpRecoveryCodeAuthenticationDTO.md) | A request containing a recovery code for the specified user. | [Optional] |

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user was successfully logged in. |  -  |
| **400** | The requested conversation cannot be found or is not valid in the requested context. |  -  |
| **401** | The recovery code provided was incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## completeAuthenticationChange

> TotpUserEnrollmentDTO completeAuthenticationChange(totpCodeVerificationDTO)

Complete authentication app update for 2SV

Complete update of the authentication app used for two-step verification by verifying the provided TOTP code.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { CompleteAuthenticationChangeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // TotpCodeVerificationDTO | A request containing a TOTP code for the given user. (optional)
    totpCodeVerificationDTO: ...,
  } satisfies CompleteAuthenticationChangeRequest;

  try {
    const data = await api.completeAuthenticationChange(body);
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
| **totpCodeVerificationDTO** | [TotpCodeVerificationDTO](TotpCodeVerificationDTO.md) | A request containing a TOTP code for the given user. | [Optional] |

### Return type

[**TotpUserEnrollmentDTO**](TotpUserEnrollmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authentication app successfully updated. |  -  |
| **400** | The requested authentication app conversation cannot be found or the user is not enrolled in two-step verification |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## completeEnforcedEnrollment

> TotpRecoveryCodeDTO completeEnforcedEnrollment(totpCodeVerificationDTO)

Complete enforced enrollment in 2SV

Complete enforced enrollment in two-step verification by verifying the provided TOTP code and creating a new session for the given user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { CompleteEnforcedEnrollmentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // TotpCodeVerificationDTO | A request containing a TOTP code for the given user. (optional)
    totpCodeVerificationDTO: ...,
  } satisfies CompleteEnforcedEnrollmentRequest;

  try {
    const data = await api.completeEnforcedEnrollment(body);
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
| **totpCodeVerificationDTO** | [TotpCodeVerificationDTO](TotpCodeVerificationDTO.md) | A request containing a TOTP code for the given user. | [Optional] |

### Return type

[**TotpRecoveryCodeDTO**](TotpRecoveryCodeDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrollment successfully completed. |  -  |
| **400** | The requested enrollment conversation cannot be found or the user is already enrolled in two-step verification. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## completeVoluntaryEnrollment

> TotpUserEnrollmentDTO completeVoluntaryEnrollment(totpCodeVerificationDTO)

Complete voluntary enrollment in 2SV

Complete voluntary enrollment in two-step verification by verifying the provided TOTP code and creating a new session for the given user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { CompleteVoluntaryEnrollmentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // TotpCodeVerificationDTO | A request containing a TOTP code for the given user. (optional)
    totpCodeVerificationDTO: ...,
  } satisfies CompleteVoluntaryEnrollmentRequest;

  try {
    const data = await api.completeVoluntaryEnrollment(body);
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
| **totpCodeVerificationDTO** | [TotpCodeVerificationDTO](TotpCodeVerificationDTO.md) | A request containing a TOTP code for the given user. | [Optional] |

### Return type

[**TotpUserEnrollmentDTO**](TotpUserEnrollmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrollment successfully completed. |  -  |
| **400** | The requested enrollment conversation cannot be found or the user is already enrolled in two-step verification. |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAccessToken

> RestRawAccessToken createAccessToken(projectKey, restAccessTokenRequest)

Create project HTTP token

Create an access token for the project according to the given request.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { CreateAccessTokenRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestAccessTokenRequest | The request containing the details of the access token to create. (optional)
    restAccessTokenRequest: ...,
  } satisfies CreateAccessTokenRequest;

  try {
    const data = await api.createAccessToken(body);
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
| **restAccessTokenRequest** | [RestAccessTokenRequest](RestAccessTokenRequest.md) | The request containing the details of the access token to create. | [Optional] |

### Return type

[**RestRawAccessToken**](RestRawAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the raw access token and associated details. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details).  - The request does not contain a token name - The request does not contain a list of permissions, or the list of permissions is empty - One of the provided permission levels are unknown - The project already has the maximum number of tokens  |  -  |
| **401** | The currently authenticated user is not permitted to create an access token for this project or authentication failed. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAccessToken1

> RestRawAccessToken createAccessToken1(projectKey, repositorySlug, restAccessTokenRequest)

Create repository HTTP token

Create an access token for the repository according to the given request.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { CreateAccessToken1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestAccessTokenRequest | The request containing the details of the access token to create. (optional)
    restAccessTokenRequest: ...,
  } satisfies CreateAccessToken1Request;

  try {
    const data = await api.createAccessToken1(body);
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
| **restAccessTokenRequest** | [RestAccessTokenRequest](RestAccessTokenRequest.md) | The request containing the details of the access token to create. | [Optional] |

### Return type

[**RestRawAccessToken**](RestRawAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the raw access token and associated details. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details).  - The request does not contain a token name- The request does not contain a list of permissions, or the list of permissions is empty- One of the provided permission levels are unknown- The repository already has the maximum number of tokens |  -  |
| **401** | The currently authenticated user is not permitted to create an access token for this repository or authentication failed. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAccessToken2

> RestRawAccessToken createAccessToken2(userSlug, restAccessTokenRequest)

Create personal HTTP token

Create an access token for the user according to the given request.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { CreateAccessToken2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
    // RestAccessTokenRequest | The request containing the details of the access token to create. (optional)
    restAccessTokenRequest: ...,
  } satisfies CreateAccessToken2Request;

  try {
    const data = await api.createAccessToken2(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |
| **restAccessTokenRequest** | [RestAccessTokenRequest](RestAccessTokenRequest.md) | The request containing the details of the access token to create. | [Optional] |

### Return type

[**RestRawAccessToken**](RestRawAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the raw access token and associated details. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details).  - The request does not contain a token name - The request does not contain a list of permissions, or the list of permissions is empty - One of the provided permission levels are unknown - The user already has their maximum number of tokens  |  -  |
| **401** | The currently authenticated user is not permitted to create an access token on behalf of this user or authentication failed |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteById

> deleteById(projectKey, tokenId)

Delete a HTTP token

Delete the access token identified by the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { DeleteByIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The token id.
    tokenId: tokenId_example,
  } satisfies DeleteByIdRequest;

  try {
    const data = await api.deleteById(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |

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
| **204** | An empty response indicating that the token has been deleted. |  -  |
| **401** | The currently authenticated user is not permitted to delete an access token on behalf of this user or authentication failed. |  -  |
| **404** | The specified user or token does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteById1

> deleteById1(projectKey, tokenId, repositorySlug)

Delete a HTTP token

Delete the access token identified by the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { DeleteById1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The token id.
    tokenId: tokenId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteById1Request;

  try {
    const data = await api.deleteById1(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
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
| **204** | An empty response indicating that the token has been deleted. |  -  |
| **401** | The currently authenticated user is not permitted to delete an access token on behalf of this user or authentication failed. |  -  |
| **404** | The specified user or token does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteById2

> deleteById2(tokenId, userSlug)

Delete a HTTP token

Delete the access token identified by the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { DeleteById2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The token id.
    tokenId: tokenId_example,
    // string | The user slug.
    userSlug: userSlug_example,
  } satisfies DeleteById2Request;

  try {
    const data = await api.deleteById2(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |

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
| **204** | An empty response indicating that the token has been deleted. |  -  |
| **401** | The currently authenticated user is not permitted to delete an access token on behalf of this user or authentication failed. |  -  |
| **404** | The specified user or token does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSshKey

> deleteSshKey(keyId)

Remove SSH key

Delete an SSH key.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { DeleteSshKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | the id of the key to delete.
    keyId: keyId_example,
  } satisfies DeleteSshKeyRequest;

  try {
    const data = await api.deleteSshKey(body);
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
| **keyId** | `string` | the id of the key to delete. | [Defaults to `undefined`] |

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
| **204** | The SSH key matching the supplied &lt;strong&gt;id&lt;/strong&gt; was deleted or did not exist. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the SSH key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSshKeys

> deleteSshKeys(userName, user)

Delete all user SSH key

Delete all SSH keys for a supplied user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { DeleteSshKeysRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | the username of the user to delete the keys for. If no username is specified, the SSH keys will be deleted for the current authenticated user. (optional)
    userName: userName_example,
    // string (optional)
    user: user_example,
  } satisfies DeleteSshKeysRequest;

  try {
    const data = await api.deleteSshKeys(body);
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
| **userName** | `string` | the username of the user to delete the keys for. If no username is specified, the SSH keys will be deleted for the current authenticated user. | [Optional] [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **204** | The SSH keys matching the supplied &lt;strong&gt;user&lt;/strong&gt; were deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the SSH keys. This is only possible when a &lt;strong&gt;user&lt;/strong&gt; is explicitly supplied. |  -  |
| **404** | No user matches the supplied &lt;strong&gt;user&lt;/strong&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## elevatePermissionsWithPassword

> elevatePermissionsWithPassword(actionType, totpElevationRestDTO)

Create elevated session with password

Elevate permissions by providing the password for the currently authenticated user. This will create an elevated session.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { ElevatePermissionsWithPasswordRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // 'unlock-user-2sv-settings' | The type of action being performed. (optional)
    actionType: actionType_example,
    // TotpElevationRestDTO | A request containing the password for the currently authenticated user. (optional)
    totpElevationRestDTO: ...,
  } satisfies ElevatePermissionsWithPasswordRequest;

  try {
    const data = await api.elevatePermissionsWithPassword(body);
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
| **actionType** | `unlock-user-2sv-settings` | The type of action being performed. | [Optional] [Defaults to `undefined`] [Enum: unlock-user-2sv-settings] |
| **totpElevationRestDTO** | [TotpElevationRestDTO](TotpElevationRestDTO.md) | A request containing the password for the currently authenticated user. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Permissions were successfully elevated. |  -  |
| **400** | The user has entered an incorrect password or the requested action cannot be confirmed with a password. |  -  |
| **403** | The user cannot perform the requested action. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## elevatePermissionsWithRecoveryCode

> TotpRecoveryCodeDTO elevatePermissionsWithRecoveryCode(actionType, totpRecoveryCodeDTO)

Create elevated session with recovery code

Elevate permissions by providing a recovery code for the currently authenticated user. This will create an elevated session.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { ElevatePermissionsWithRecoveryCodeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // 'unlock-user-2sv-settings' | The type of action being performed. (optional)
    actionType: actionType_example,
    // TotpRecoveryCodeDTO | A request containing a recovery code for the currently authenticated user. (optional)
    totpRecoveryCodeDTO: ...,
  } satisfies ElevatePermissionsWithRecoveryCodeRequest;

  try {
    const data = await api.elevatePermissionsWithRecoveryCode(body);
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
| **actionType** | `unlock-user-2sv-settings` | The type of action being performed. | [Optional] [Defaults to `undefined`] [Enum: unlock-user-2sv-settings] |
| **totpRecoveryCodeDTO** | [TotpRecoveryCodeDTO](TotpRecoveryCodeDTO.md) | A request containing a recovery code for the currently authenticated user. | [Optional] |

### Return type

[**TotpRecoveryCodeDTO**](TotpRecoveryCodeDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Permissions were successfully elevated. |  -  |
| **400** | The recovery code provided was incorrect. |  -  |
| **403** | The user cannot perform the requested action. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## elevatePermissionsWithTotp

> elevatePermissionsWithTotp(actionType, totpElevationRestDTO)

Create elevated session with TOTP

Elevate permissions by providing a TOTP code for the currently authenticated user. This will create an elevated session.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { ElevatePermissionsWithTotpRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // 'unlock-user-2sv-settings' | The type of action being performed. (optional)
    actionType: actionType_example,
    // TotpElevationRestDTO | A request containing a TOTP code for the given user. (optional)
    totpElevationRestDTO: ...,
  } satisfies ElevatePermissionsWithTotpRequest;

  try {
    const data = await api.elevatePermissionsWithTotp(body);
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
| **actionType** | `unlock-user-2sv-settings` | The type of action being performed. | [Optional] [Defaults to `undefined`] [Enum: unlock-user-2sv-settings] |
| **totpElevationRestDTO** | [TotpElevationRestDTO](TotpElevationRestDTO.md) | A request containing a TOTP code for the given user. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Permissions were successfully elevated. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details).  - The user has entered an incorrect TOTP code - The requested action cannot be confirmed with a TOTP code - The user is not enrolled in two-step verification  |  -  |
| **403** | The user cannot perform the requested action. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get

> BasicAuthConfigEntity get()

Get basic auth configuration

Get the current configuration for blocking basic authentication requests.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.get();
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

[**BasicAuthConfigEntity**](BasicAuthConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The blocking basic authentication configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllAccessTokens

> GetAllAccessTokens200Response getAllAccessTokens(projectKey, start, limit)

Get project HTTP tokens

Get all access tokens associated with the given project.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetAllAccessTokensRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllAccessTokensRequest;

  try {
    const data = await api.getAllAccessTokens(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllAccessTokens200Response**](GetAllAccessTokens200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing a page of access tokens and associated details. |  -  |
| **401** | The currently authenticated user is not permitted to get access tokens for this project or authentication failed. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllAccessTokens1

> GetAllAccessTokens200Response getAllAccessTokens1(projectKey, repositorySlug, start, limit)

Get repository HTTP tokens

Get all access tokens associated with the given repository.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetAllAccessTokens1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllAccessTokens1Request;

  try {
    const data = await api.getAllAccessTokens1(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllAccessTokens200Response**](GetAllAccessTokens200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing a page of access tokens and associated details. |  -  |
| **401** | The currently authenticated user is not permitted to get access tokens for this repository or authentication failed. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllAccessTokens2

> GetAllAccessTokens200Response getAllAccessTokens2(userSlug, start, limit)

Get personal HTTP tokens

Get all access tokens associated with the given user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetAllAccessTokens2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllAccessTokens2Request;

  try {
    const data = await api.getAllAccessTokens2(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllAccessTokens200Response**](GetAllAccessTokens200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing a page of access tokens and associated details. |  -  |
| **401** | The currently authenticated user is not permitted to get access tokens on behalf of this user or authentication failed. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getById

> RestAccessToken getById(projectKey, tokenId)

Get HTTP token by ID

Get the access token identified by the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetByIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The token id.
    tokenId: tokenId_example,
  } satisfies GetByIdRequest;

  try {
    const data = await api.getById(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the access token and associated details. |  -  |
| **401** | The currently authenticated user is not permitted to get access tokens on behalf of this user or authentication failed. |  -  |
| **404** | The specified user or token does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getById1

> RestAccessToken getById1(projectKey, tokenId, repositorySlug)

Get HTTP token by ID

Get the access token identified by the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetById1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The token id.
    tokenId: tokenId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetById1Request;

  try {
    const data = await api.getById1(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the access token and associated details. |  -  |
| **401** | The currently authenticated user is not permitted to get access tokens on behalf of this user or authentication failed. |  -  |
| **404** | The specified user or token does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getById2

> RestAccessToken getById2(tokenId, userSlug)

Get HTTP token by ID

Get the access token identified by the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetById2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The token id.
    tokenId: tokenId_example,
    // string | The user slug.
    userSlug: userSlug_example,
  } satisfies GetById2Request;

  try {
    const data = await api.getById2(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the access token and associated details. |  -  |
| **401** | The currently authenticated user is not permitted to get access tokens on behalf of this user or authentication failed. |  -  |
| **404** | The specified user or token does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCaptchaData

> CaptchaDataEntity getCaptchaData()

Get CAPTCHA challenge

Provides data for a CAPTCHA challenge.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetCaptchaDataRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.getCaptchaData();
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

[**CaptchaDataEntity**](CaptchaDataEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The CAPTCHA challenge |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfig

> SsoConfigEntity getConfig()

Get SSO configuration

Returns the SSO configuration.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetConfigRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.getConfig();
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

[**SsoConfigEntity**](SsoConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The SSO configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getElevatedPermissionStatus

> getElevatedPermissionStatus(actionType)

Get elevated session status

Checks the state of an elevated session for the currently authenticated user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetElevatedPermissionStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // 'unlock-user-2sv-settings' | The type of action being performed. (optional)
    actionType: actionType_example,
  } satisfies GetElevatedPermissionStatusRequest;

  try {
    const data = await api.getElevatedPermissionStatus(body);
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
| **actionType** | `unlock-user-2sv-settings` | The type of action being performed. | [Optional] [Defaults to `undefined`] [Enum: unlock-user-2sv-settings] |

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
| **204** | An elevated session exists for the currently authenticated user. |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForProject

> RestSshAccessKey getForProject(projectKey, keyId)

Get project SSH key

Retrieves the access key for the SSH key with id &lt;code&gt;keyId&lt;/code&gt; on the project identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The key id
    keyId: keyId_example,
  } satisfies GetForProjectRequest;

  try {
    const data = await api.getForProject(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **keyId** | `string` | The key id | [Defaults to `undefined`] |

### Return type

[**RestSshAccessKey**](RestSshAccessKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The access key for the repository and SSH key with ID &lt;code&gt;keyId&lt;/code&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the access keys for this repository. |  -  |
| **404** | The specified repository or key does not exist or the key does not have access on the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForProjects

> getForProjects(keyId)

Get project SSH keys

Retrieves all project-related access keys for the SSH key with id &lt;code&gt;keyId&lt;/code&gt;. If the current user is not an admin any of the projects the key provides access to, none are returned.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetForProjectsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // number
    keyId: 56,
  } satisfies GetForProjectsRequest;

  try {
    const data = await api.getForProjects(body);
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
| **keyId** | `number` |  | [Defaults to `undefined`] |

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
| **200** | The SSH key with ID &lt;code&gt;keyId&lt;/code&gt;. |  -  |
| **404** | The specified key does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForRepositories

> getForRepositories(keyId, withRestrictions)

Get repository SSH key

Retrieves all repository-related access keys for the SSH key with id &lt;code&gt;keyId&lt;/code&gt;. If the current user is not an admin of any of the projects the key provides access to, none are returned.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetForRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The key id
    keyId: keyId_example,
    // string | Include the readOnly field. The `readOnly` field is contextual for the user making the request. `readOnly` returns true if there is a restriction and the user does not have`PROJECT_ADMIN` access for the repository the key is associated with. (optional)
    withRestrictions: withRestrictions_example,
  } satisfies GetForRepositoriesRequest;

  try {
    const data = await api.getForRepositories(body);
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
| **keyId** | `string` | The key id | [Defaults to `undefined`] |
| **withRestrictions** | `string` | Include the readOnly field. The &#x60;readOnly&#x60; field is contextual for the user making the request. &#x60;readOnly&#x60; returns true if there is a restriction and the user does not have&#x60;PROJECT_ADMIN&#x60; access for the repository the key is associated with. | [Optional] [Defaults to `undefined`] |

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
| **200** | The SSH key with ID &lt;code&gt;keyId&lt;/code&gt;. |  -  |
| **404** | The specified key does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForRepository

> RestSshAccessKey getForRepository(projectKey, keyId, repositorySlug)

Get repository SSH key

Retrieves the access key for the SSH key with id &lt;code&gt;keyId&lt;/code&gt; on the repository identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetForRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The key id
    keyId: keyId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetForRepositoryRequest;

  try {
    const data = await api.getForRepository(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **keyId** | `string` | The key id | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**RestSshAccessKey**](RestSshAccessKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The access key for the repository and SSH key with ID &lt;code&gt;keyId&lt;/code&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the access keys for this repository. |  -  |
| **404** | The specified repository or key does not exist or the key does not have access on the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForRepository1

> GetForRepository1200Response getForRepository1(projectKey, repositorySlug, filter, effective, minimumPermission, permission, start, limit)

Get repository SSH keys

Retrieves the access keys for the repository identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetForRepository1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If specified only SSH access keys with a label prefixed with the supplied string will be returned (optional)
    filter: filter_example,
    // string | Controls whether SSH access keys configured at the project level should be included in the results or not. When set to <code>true</code> all keys that have <em>access</em> to the repository (including project level keys) are included in the results. When set to <code>false</code>, only access keys configured for the specified <code>repository</code> are considered. Default is <code>false</code>. (optional)
    effective: effective_example,
    // string | If specified only SSH access keys with at least the supplied permission will be returned. Default is <code>Permission.REPO_READ</code>. (optional)
    minimumPermission: minimumPermission_example,
    // string (optional)
    permission: permission_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetForRepository1Request;

  try {
    const data = await api.getForRepository1(body);
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
| **filter** | `string` | If specified only SSH access keys with a label prefixed with the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **effective** | `string` | Controls whether SSH access keys configured at the project level should be included in the results or not. When set to &lt;code&gt;true&lt;/code&gt; all keys that have &lt;em&gt;access&lt;/em&gt; to the repository (including project level keys) are included in the results. When set to &lt;code&gt;false&lt;/code&gt;, only access keys configured for the specified &lt;code&gt;repository&lt;/code&gt; are considered. Default is &lt;code&gt;false&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **minimumPermission** | `string` | If specified only SSH access keys with at least the supplied permission will be returned. Default is &lt;code&gt;Permission.REPO_READ&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **permission** | `string` |  | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetForRepository1200Response**](GetForRepository1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of access keys for the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the access keys for this repository |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIdp

> IdpConfigEntity getIdp(id)

Get IdP configuration

Returns the configuration for the IdP that matches the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetIdpRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The ID of the IdP
    id: id_example,
  } satisfies GetIdpRequest;

  try {
    const data = await api.getIdp(body);
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
| **id** | `string` | The ID of the IdP | [Defaults to `undefined`] |

### Return type

[**IdpConfigEntity**](IdpConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The configuration for the given IdP. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIdps

> GetIdps200Response getIdps(start, limit)

Get all configured IdPs

Returns a page of configured IdPs.   This endpoint makes no guarantees to ordering besides the ordering being consistent.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetIdpsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 50 is used. A limit of -1 means that the request will fetch all results. (optional)
    limit: 50,
  } satisfies GetIdpsRequest;

  try {
    const data = await api.getIdps(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 50 is used. A limit of -1 means that the request will fetch all results. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetIdps200Response**](GetIdps200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of configured IdPs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJitProvisionedUsers

> JitUserEntity getJitProvisionedUsers()

Get all JIT provisioned users

Returns a list of all the users created by JIT (Just-in-time) provisioning.  Just-in-time user provisioning (JIT provisioning) allows users to be created and updated automatically when they log in through SAML SSO or OpenID Connect (OIDC) SSO.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetJitProvisionedUsersRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.getJitProvisionedUsers();
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

[**JitUserEntity**](JitUserEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of JIT users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoginOptions

> GetLoginOptions200Response getLoginOptions(start, limit)

Get available login options

Returns a list of available login options, which contains details about the metadata required for the login page.  Only enabled login options will be returned. Login options can either be the native login form or the configured IdPs.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetLoginOptionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 50 is used. A limit of -1 means that the request will fetch all results. (optional)
    limit: 50,
  } satisfies GetLoginOptionsRequest;

  try {
    const data = await api.getLoginOptions(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 50 is used. A limit of -1 means that the request will fetch all results. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLoginOptions200Response**](GetLoginOptions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of login options |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSshKey

> RestSshKey getSshKey(keyId)

Get SSH key for user by keyId

Retrieve an SSH key by keyId  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetSshKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | the ID of the key to retrieve.
    keyId: keyId_example,
  } satisfies GetSshKeyRequest;

  try {
    const data = await api.getSshKey(body);
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
| **keyId** | `string` | the ID of the key to retrieve. | [Defaults to `undefined`] |

### Return type

[**RestSshKey**](RestSshKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | An SSH key. |  -  |
| **401** | The currently authenticated user has insufficient permissionsto retrieve the SSH key. This is only possible when a&lt;strong&gt;keyId&lt;/strong&gt; is explicitly supplied. |  -  |
| **404** | No SSH key matches the supplied &lt;strong&gt;keyId&lt;/strong&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSshKeys

> GetSshKeys200Response getSshKeys(userName, user, start, limit)

Get SSH keys for user

Retrieve a page of SSH keys.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetSshKeysRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | the username of the user to retrieve the keys for. If no username is specified, the SSH keys will be retrieved for the current authenticated user. (optional)
    userName: userName_example,
    // string (optional)
    user: user_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetSshKeysRequest;

  try {
    const data = await api.getSshKeys(body);
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
| **userName** | `string` | the username of the user to retrieve the keys for. If no username is specified, the SSH keys will be retrieved for the current authenticated user. | [Optional] [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSshKeys200Response**](GetSshKeys200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of SSH keys. |  -  |
| **401** | The currently authenticated user has insufficient permissionsto retrieve the SSH keys. This is only possible when a&lt;strong&gt;user&lt;/strong&gt; is explicitly supplied. |  -  |
| **404** | No user matches the supplied &lt;strong&gt;user&lt;/strong&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSshKeysForProject

> GetForRepository1200Response getSshKeysForProject(projectKey, filter, permission, start, limit)

Get SSH key

Retrieves the access keys for the project identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetSshKeysForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | If specified only SSH access keys with a label prefixed with the supplied string will be returned. (optional)
    filter: filter_example,
    // string | If specified only SSH access keys with at least the supplied permission will be returned Default is PROJECT_READ. (optional)
    permission: permission_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetSshKeysForProjectRequest;

  try {
    const data = await api.getSshKeysForProject(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **filter** | `string` | If specified only SSH access keys with a label prefixed with the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **permission** | `string` | If specified only SSH access keys with at least the supplied permission will be returned Default is PROJECT_READ. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetForRepository1200Response**](GetForRepository1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of access keys associated with the project. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the access keys for this project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSsoManagementStatus

> SsoManagementStatusDTO getSsoManagementStatus()

Get SSO management status

Retrieves the status of the SSO management for the currently authenticated user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetSsoManagementStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.getSsoManagementStatus();
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

[**SsoManagementStatusDTO**](SsoManagementStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved SSO management status |  -  |
| **401** | Failed to retrieve SSO management status due to unauthenticated user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatus

> StatusDTO getStatus()

Get two-step verification status

Retrieves the status of two-step verification for the currently authenticated user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { GetStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.getStatus();
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

[**StatusDTO**](StatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved the two-step verification status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## put

> put(basicAuthConfigEntity)

Update basic auth configuration

Store a new configuration for blocking basic authentication requests.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { PutRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // BasicAuthConfigEntity | A request containing the new basic authentication configuration. (optional)
    basicAuthConfigEntity: ...,
  } satisfies PutRequest;

  try {
    const data = await api.put(body);
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
| **basicAuthConfigEntity** | [BasicAuthConfigEntity](BasicAuthConfigEntity.md) | A request containing the new basic authentication configuration. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The basic authentication blocking configuration was successfully created or updated. |  -  |
| **409** | Unable to update the basic authentication blocking configuration as another update is currently being performed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeIdp

> IdpConfigEntity removeIdp(id)

Delete IdP configuration

Removes the configuration for the IdP that matches the given ID.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { RemoveIdpRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The ID of the IdP
    id: id_example,
  } satisfies RemoveIdpRequest;

  try {
    const data = await api.removeIdp(body);
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
| **id** | `string` | The ID of the IdP | [Defaults to `undefined`] |

### Return type

[**IdpConfigEntity**](IdpConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The IdP configuration was successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeForProject

> revokeForProject(projectKey, keyId)

Revoke project SSH key

Remove an existing access key for the project identified in the URL. If the same SSH key is used as an access key for multiple projects or repositories, only the access to the project identified in the URL will be revoked.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { RevokeForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The key id
    keyId: keyId_example,
  } satisfies RevokeForProjectRequest;

  try {
    const data = await api.revokeForProject(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **keyId** | `string` | The key id | [Defaults to `undefined`] |

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
| **204** | The access key was deleted (or none was found matching the given id). |  -  |
| **401** | The currently authenticated user has insufficient permissions to remove access keys for this project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeForRepository

> revokeForRepository(projectKey, keyId, repositorySlug)

Revoke repository SSH key

Remove an existing access key for the repository identified in the URL. If the same SSH key is used as an access key for multiple projects or repositories, only the access to the repository identified in the URL will be revoked.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { RevokeForRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The key id
    keyId: keyId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies RevokeForRepositoryRequest;

  try {
    const data = await api.revokeForRepository(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **keyId** | `string` | The key id | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

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
| **204** | The access key was deleted (or none was found matching the given id). |  -  |
| **401** | The currently authenticated user has insufficient permissions to remove access keys for this repository |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeMany

> revokeMany(keyId, revokeManyRequest)

Revoke project SSH key

Remove an existing access key for the projects and repositories in the submitted entity. If the same SSH key is used as an access key for multiple projects or repositories not supplied, only the access to the projects or repositories identified will be revoked.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { RevokeManyOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The identifier of the SSH key
    keyId: keyId_example,
    // RevokeManyRequest (optional)
    revokeManyRequest: ...,
  } satisfies RevokeManyOperationRequest;

  try {
    const data = await api.revokeMany(body);
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
| **keyId** | `string` | The identifier of the SSH key | [Defaults to `undefined`] |
| **revokeManyRequest** | [RevokeManyRequest](RevokeManyRequest.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The access keys were deleted (or none was found matching the given id and repositories or projects). |  -  |
| **401** | The currently authenticated user has insufficient permissions to remove access keys for one or more of the specified projects or repositories. |  -  |
| **404** | On or more of the specified repositories or projects does not exist or the key itself does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateRecoverCode

> TotpRecoveryCodeDTO rotateRecoverCode()

Rotate recovery code

Rotates the recovery code for the currently authentication user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { RotateRecoverCodeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.rotateRecoverCode();
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

[**TotpRecoveryCodeDTO**](TotpRecoveryCodeDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The recovery code has been successfully rotated. |  -  |
| **400** | The request has failed due to the user not being enrolled in two-step verification. |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sshSettings

> RestSshSettings sshSettings()

Get SSH settings

Gets the SSH settings from the upstream.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { SshSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.sshSettings();
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

[**RestSshSettings**](RestSshSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The ssh settings from upstream |  -  |
| **401** | The request was not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startEnforcedEnrollment

> TotpUserEnrollmentDTO startEnforcedEnrollment(conversationDTO)

Start enforced enrollment in 2SV

Start or resume enforced enrollment in two-step verification by returning the conversation details.  There are two ways to enroll in two-step verification: voluntary and enforced. Enrollment is a two-step process. First, the user starts the enrollment process via &lt;code&gt;/start-voluntary-enrollment&lt;/code&gt; or &lt;code&gt;/start-enforced-enrollment&lt;/code&gt;. Second and final step is to complete the enrollment via &lt;code&gt;/complete-voluntary-enrollment&lt;/code&gt; or &lt;code&gt;/complete-enforced-enrollment&lt;/code&gt;. In the case of enforced enrollment, the conversation is started at the time of login via &lt;code&gt;/authenticate&lt;/code&gt;.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { StartEnforcedEnrollmentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // ConversationDTO (optional)
    conversationDTO: ...,
  } satisfies StartEnforcedEnrollmentRequest;

  try {
    const data = await api.startEnforcedEnrollment(body);
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
| **conversationDTO** | [ConversationDTO](ConversationDTO.md) |  | [Optional] |

### Return type

[**TotpUserEnrollmentDTO**](TotpUserEnrollmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A conversation has successfully started. |  -  |
| **400** | The requested enrollment conversation cannot be found or is not valid in the requested context. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startEnrollmentUpdate

> TotpUserEnrollmentDTO startEnrollmentUpdate()

Start authentication app update for 2SV

Start the process of changing the authentication app used for two-step verification by creating a conversation.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { StartEnrollmentUpdateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.startEnrollmentUpdate();
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

[**TotpUserEnrollmentDTO**](TotpUserEnrollmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A conversation has successfully started. |  -  |
| **400** | The user is not enrolled in two-step verification using TOTP. |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startVoluntaryEnrollment

> TotpUserEnrollmentDTO startVoluntaryEnrollment()

Start voluntary enrollment in 2SV

Start voluntary enrollment in two-step verification by creating a conversation.  There are two ways to enroll in two-step verification: voluntary and enforced. Enrollment is a two-step process. First, the user starts the enrollment process via &lt;code&gt;/start-voluntary-enrollment&lt;/code&gt; or &lt;code&gt;/start-enforced-enrollment&lt;/code&gt;. Second and final step is to complete the enrollment via &lt;code&gt;/complete-voluntary-enrollment&lt;/code&gt; or &lt;code&gt;/complete-enforced-enrollment&lt;/code&gt;. In the case of enforced enrollment, the conversation is started at the time of login via &lt;code&gt;/authenticate&lt;/code&gt;.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { StartVoluntaryEnrollmentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.startVoluntaryEnrollment();
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

[**TotpUserEnrollmentDTO**](TotpUserEnrollmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A conversation has successfully started. |  -  |
| **400** | The user is already enrolled in two-step verification using TOTP. |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unenroll

> unenroll()

Uneroll current user from two-step verification

Unenroll the currently authenticated user from two-step verification.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UnenrollRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.unenroll();
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
| **204** | User successfully unenrolled from two-step verification. |  -  |
| **400** | No enrollment found for the currently authenticated user. |  -  |
| **401** | The currently authenticated user requires an elevated session to perform this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unenrollUser

> unenrollUser(userName, totpElevationRestDTO)

Unenroll specific user from two-step verification

Unenroll a user from two-step verification specified by the given username.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UnenrollUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | username
    userName: userName_example,
    // TotpElevationRestDTO | A request containing a TOTP code for the given user. (optional)
    totpElevationRestDTO: ...,
  } satisfies UnenrollUserRequest;

  try {
    const data = await api.unenrollUser(body);
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
| **userName** | `string` | username | [Defaults to `undefined`] |
| **totpElevationRestDTO** | [TotpElevationRestDTO](TotpElevationRestDTO.md) | A request containing a TOTP code for the given user. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | User successfully unenrolled from two-step verification. |  -  |
| **400** | No enrollment found for the specified user. |  -  |
| **401** | The user has entered an invalid TOTP code. |  -  |
| **403** | The user cannot unenroll themselves. |  -  |
| **404** | No user matches the supplied &lt;strong&gt;username&lt;/strong&gt;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAccessToken

> RestAccessToken updateAccessToken(projectKey, tokenId, restAccessTokenRequest)

Update HTTP token

Modify an access token according to the given request. Any fields not specified will not be altered.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdateAccessTokenRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The token id.
    tokenId: tokenId_example,
    // RestAccessTokenRequest | The request containing the details of the access token to modify (optional)
    restAccessTokenRequest: ...,
  } satisfies UpdateAccessTokenRequest;

  try {
    const data = await api.updateAccessToken(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
| **restAccessTokenRequest** | [RestAccessTokenRequest](RestAccessTokenRequest.md) | The request containing the details of the access token to modify | [Optional] |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the updated access token and associated details. |  -  |
| **400** | One of the provided permission levels are unknown. |  -  |
| **401** | The currently authenticated user is not permitted to update an access token on behalf of this user or authentication failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAccessToken1

> RestAccessToken updateAccessToken1(projectKey, tokenId, repositorySlug, restAccessTokenRequest)

Update HTTP token

Modify an access token according to the given request. Any fields not specified will not be altered.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdateAccessToken1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The token id.
    tokenId: tokenId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestAccessTokenRequest | The request containing the details of the access token to modify (optional)
    restAccessTokenRequest: ...,
  } satisfies UpdateAccessToken1Request;

  try {
    const data = await api.updateAccessToken1(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restAccessTokenRequest** | [RestAccessTokenRequest](RestAccessTokenRequest.md) | The request containing the details of the access token to modify | [Optional] |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the updated access token and associated details. |  -  |
| **400** | One of the provided permission levels are unknown. |  -  |
| **401** | The currently authenticated user is not permitted to update an access token on behalf of this user or authentication failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAccessToken2

> RestAccessToken updateAccessToken2(tokenId, userSlug, restAccessTokenRequest)

Update HTTP token

Modify an access token according to the given request. Any fields not specified will not be altered.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdateAccessToken2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The token id.
    tokenId: tokenId_example,
    // string | The user slug.
    userSlug: userSlug_example,
    // RestAccessTokenRequest | The request containing the details of the access token to modify (optional)
    restAccessTokenRequest: ...,
  } satisfies UpdateAccessToken2Request;

  try {
    const data = await api.updateAccessToken2(body);
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
| **tokenId** | `string` | The token id. | [Defaults to `undefined`] |
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |
| **restAccessTokenRequest** | [RestAccessTokenRequest](RestAccessTokenRequest.md) | The request containing the details of the access token to modify | [Optional] |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the updated access token and associated details. |  -  |
| **400** | One of the provided permission levels are unknown. |  -  |
| **401** | The currently authenticated user is not permitted to update an access token on behalf of this user or authentication failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConfig

> SsoConfigEntity updateConfig(ssoConfigEntity)

Update SSO configuration

Update the SSO configuration.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdateConfigRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // SsoConfigEntity | A request containing the SSO configuration to update. (optional)
    ssoConfigEntity: ...,
  } satisfies UpdateConfigRequest;

  try {
    const data = await api.updateConfig(body);
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
| **ssoConfigEntity** | [SsoConfigEntity](SsoConfigEntity.md) | A request containing the SSO configuration to update. | [Optional] |

### Return type

[**SsoConfigEntity**](SsoConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated SSO Configuration |  -  |
| **400** | The provided SSO configuration was invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIdp

> IdpConfigEntity updateIdp(id, idpConfigEntity)

Update IdP configuration

Updates the configuration for the IdP that matches the given ID.   Only the provided properties will be applied to the IdP configuration.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdateIdpRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The ID of the IdP
    id: id_example,
    // IdpConfigEntity | A request containing the IdP configuration to update. The ID must either be null or equal to the ID specified in the path. (optional)
    idpConfigEntity: ...,
  } satisfies UpdateIdpRequest;

  try {
    const data = await api.updateIdp(body);
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
| **id** | `string` | The ID of the IdP | [Defaults to `undefined`] |
| **idpConfigEntity** | [IdpConfigEntity](IdpConfigEntity.md) | A request containing the IdP configuration to update. The ID must either be null or equal to the ID specified in the path. | [Optional] |

### Return type

[**IdpConfigEntity**](IdpConfigEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated configuration for the given IdP. |  -  |
| **400** | The provided IdP configuration was either incorrect or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePermission

> RestSshAccessKey updatePermission(projectKey, keyId, permission)

Update project SSH key permission

Updates the permission granted to the specified SSH key to the project identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdatePermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The newly created access key
    keyId: keyId_example,
    // string | The new permission to be granted to the SSH key
    permission: permission_example,
  } satisfies UpdatePermissionRequest;

  try {
    const data = await api.updatePermission(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **keyId** | `string` | The newly created access key | [Defaults to `undefined`] |
| **permission** | `string` | The new permission to be granted to the SSH key | [Defaults to `undefined`] |

### Return type

[**RestSshAccessKey**](RestSshAccessKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created access key. |  -  |
| **401** | The currently authenticated user has insufficient permissions on the project to edit its access keys. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePermission1

> RestSshAccessKey updatePermission1(projectKey, keyId, permission, repositorySlug)

Update repository SSH key permission

Updates the permission granted to the specified SSH key to the repository identified in the URL.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { UpdatePermission1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The newly created access key
    keyId: keyId_example,
    // string | The new permission to be granted to the SSH key
    permission: permission_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies UpdatePermission1Request;

  try {
    const data = await api.updatePermission1(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **keyId** | `string` | The newly created access key | [Defaults to `undefined`] |
| **permission** | `string` | The new permission to be granted to the SSH key | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**RestSshAccessKey**](RestSshAccessKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created access key. |  -  |
| **401** | The currently authenticated user has insufficient permissions on the repository to edit its access keys. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyCode

> verifyCode(totpCodeVerificationDTO)

Authenticate using TOTP code

Authenticate as the given user using a TOTP code.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { VerifyCodeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // TotpCodeVerificationDTO | A request containing a TOTP code for the given user. (optional)
    totpCodeVerificationDTO: ...,
  } satisfies VerifyCodeRequest;

  try {
    const data = await api.verifyCode(body);
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
| **totpCodeVerificationDTO** | [TotpCodeVerificationDTO](TotpCodeVerificationDTO.md) | A request containing a TOTP code for the given user. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The user was successfully logged in. |  -  |
| **400** | The requested conversation cannot be found or is not valid in the requested context. |  -  |
| **401** | The TOTP code provided was incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

