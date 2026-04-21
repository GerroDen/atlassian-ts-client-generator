# user-management-cloud-api@0.0.1

A TypeScript SDK client for the api.atlassian.com API.

## Usage

First, install the SDK from npm.

```bash
npm install user-management-cloud-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  ApiTokensApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageApiTokensGetRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiTokensApi(config);

  const body = {
    // string | The ID of the user
    accountId: accountId_example,
  } satisfies UsersAccountIdManageApiTokensGetRequest;

  try {
    const data = await api.usersAccountIdManageApiTokensGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.atlassian.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*ApiTokensApi* | [**usersAccountIdManageApiTokensGet**](docs/ApiTokensApi.md#usersaccountidmanageapitokensget) | **GET** /users/{account_id}/manage/api-tokens | Get API tokens
*ApiTokensApi* | [**usersAccountIdManageApiTokensTokenIdDelete**](docs/ApiTokensApi.md#usersaccountidmanageapitokenstokeniddelete) | **DELETE** /users/{account_id}/manage/api-tokens/{tokenId} | Delete API token
*EmailApi* | [**usersAccountIdManageEmailPut**](docs/EmailApi.md#usersaccountidmanageemailputoperation) | **PUT** /users/{account_id}/manage/email | Set email 
*LifecycleApi* | [**usersAccountIdManageLifecycleCancelDeletePost**](docs/LifecycleApi.md#usersaccountidmanagelifecyclecanceldeletepost) | **POST** /users/{account_id}/manage/lifecycle/cancel-delete | Cancel delete account
*LifecycleApi* | [**usersAccountIdManageLifecycleDeletePost**](docs/LifecycleApi.md#usersaccountidmanagelifecycledeletepost) | **POST** /users/{account_id}/manage/lifecycle/delete | Delete account
*LifecycleApi* | [**usersAccountIdManageLifecycleDisablePost**](docs/LifecycleApi.md#usersaccountidmanagelifecycledisablepostoperation) | **POST** /users/{account_id}/manage/lifecycle/disable | Deactivate a user
*LifecycleApi* | [**usersAccountIdManageLifecycleEnablePost**](docs/LifecycleApi.md#usersaccountidmanagelifecycleenablepost) | **POST** /users/{account_id}/manage/lifecycle/enable | Activate a user
*ManageApi* | [**usersAccountIdManageGet**](docs/ManageApi.md#usersaccountidmanageget) | **GET** /users/{account_id}/manage | Get user management permissions
*ProfileApi* | [**usersAccountIdManageProfileGet**](docs/ProfileApi.md#usersaccountidmanageprofileget) | **GET** /users/{account_id}/manage/profile | Get profile
*ProfileApi* | [**usersAccountIdManageProfilePatch**](docs/ProfileApi.md#usersaccountidmanageprofilepatch) | **PATCH** /users/{account_id}/manage/profile | Update profile


### Models

- [AccountCharacteristics](docs/AccountCharacteristics.md)
- [AccountStatus](docs/AccountStatus.md)
- [AccountType](docs/AccountType.md)
- [ApiTokenModel](docs/ApiTokenModel.md)
- [AtlassianAccountUser](docs/AtlassianAccountUser.md)
- [ConflictLifecycleErrors](docs/ConflictLifecycleErrors.md)
- [ExtendedProfile](docs/ExtendedProfile.md)
- [LifecycleError](docs/LifecycleError.md)
- [LifecycleErrorsContext](docs/LifecycleErrorsContext.md)
- [ManageabilityAllowed](docs/ManageabilityAllowed.md)
- [ManageabilityRestrictionReason](docs/ManageabilityRestrictionReason.md)
- [ManageabilityRuleSimple](docs/ManageabilityRuleSimple.md)
- [ManageabilityUnallowed](docs/ManageabilityUnallowed.md)
- [NotFoundAccount](docs/NotFoundAccount.md)
- [ResponseBadRequestBodyParseFailure](docs/ResponseBadRequestBodyParseFailure.md)
- [ResponseBadRequestFieldConstraintsViolated](docs/ResponseBadRequestFieldConstraintsViolated.md)
- [ResponseBadRequestFieldConstraintsViolatedContext](docs/ResponseBadRequestFieldConstraintsViolatedContext.md)
- [ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner](docs/ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner.md)
- [ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner](docs/ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner.md)
- [ResponseForbiddenAction](docs/ResponseForbiddenAction.md)
- [ResponseForbiddenBasic](docs/ResponseForbiddenBasic.md)
- [ResponseForbiddenObjectMutability](docs/ResponseForbiddenObjectMutability.md)
- [ResponseForbiddenTargetUnverified](docs/ResponseForbiddenTargetUnverified.md)
- [ResponseForbiddenUnclaimedDomain](docs/ResponseForbiddenUnclaimedDomain.md)
- [ResponseForbiddenUnclaimedDomainContext](docs/ResponseForbiddenUnclaimedDomainContext.md)
- [ResultMessage](docs/ResultMessage.md)
- [Unauthorized](docs/Unauthorized.md)
- [User](docs/User.md)
- [UsersAccountIdManageApiTokensGet403Response](docs/UsersAccountIdManageApiTokensGet403Response.md)
- [UsersAccountIdManageEmailPut403Response](docs/UsersAccountIdManageEmailPut403Response.md)
- [UsersAccountIdManageEmailPutRequest](docs/UsersAccountIdManageEmailPutRequest.md)
- [UsersAccountIdManageGet200Response](docs/UsersAccountIdManageGet200Response.md)
- [UsersAccountIdManageGet403Response](docs/UsersAccountIdManageGet403Response.md)
- [UsersAccountIdManageLifecycleDisablePostRequest](docs/UsersAccountIdManageLifecycleDisablePostRequest.md)
- [UsersAccountIdManageProfileGet200Response](docs/UsersAccountIdManageProfileGet200Response.md)
- [UsersAccountIdManageProfilePatch400Response](docs/UsersAccountIdManageProfilePatch400Response.md)
- [UsersAccountIdManageProfilePatch403Response](docs/UsersAccountIdManageProfilePatch403Response.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.0.1`
- Package version: `0.0.1`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
