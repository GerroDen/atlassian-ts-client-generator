# teams-cloud-api@4.0

A TypeScript SDK client for the api.atlassian.com API.

## Usage

First, install the SDK from npm.

```bash
npm install teams-cloud-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  ExternallyLinkedTeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { CreateExternalLinkedTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new ExternallyLinkedTeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team is to be created under.
    orgId: orgId_example,
    // PublicApiExternalTeamCreationPayload | Details of the team to be created.
    publicApiExternalTeamCreationPayload: ...,
  } satisfies CreateExternalLinkedTeamRequest;

  try {
    const data = await api.createExternalLinkedTeam(body);
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
*ExternallyLinkedTeamsPublicAPIApi* | [**createExternalLinkedTeam**](docs/ExternallyLinkedTeamsPublicAPIApi.md#createexternallinkedteam) | **POST** /public/teams/v1/org/{orgId}/teams/external | Create an external linked team.
*ExternallyLinkedTeamsPublicAPIApi* | [**linkTeamToExternalSource**](docs/ExternallyLinkedTeamsPublicAPIApi.md#linkteamtoexternalsource) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/external/link | Link an existing team to an external reference.
*TeamsMembersPublicAPIApi* | [**addMembers**](docs/TeamsMembersPublicAPIApi.md#addmembers) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/members/add | Add a set of membership(s).
*TeamsMembersPublicAPIApi* | [**fetchMembers**](docs/TeamsMembersPublicAPIApi.md#fetchmembers) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/members | Fetch a set of membership(s).
*TeamsMembersPublicAPIApi* | [**removeMembers**](docs/TeamsMembersPublicAPIApi.md#removemembers) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/members/remove | Remove a set of membership(s).
*TeamsPublicAPIApi* | [**archiveTeams**](docs/TeamsPublicAPIApi.md#archiveteams) | **POST** /public/teams/v1/org/{orgId}/teams/archive | Archive teams in bulk.
*TeamsPublicAPIApi* | [**createTeam**](docs/TeamsPublicAPIApi.md#createteam) | **POST** /public/teams/v1/org/{orgId}/teams/ | Create a team.
*TeamsPublicAPIApi* | [**deleteTeam**](docs/TeamsPublicAPIApi.md#deleteteam) | **DELETE** /public/teams/v1/org/{orgId}/teams/{teamId} | Delete a team.
*TeamsPublicAPIApi* | [**getTeam**](docs/TeamsPublicAPIApi.md#getteam) | **GET** /public/teams/v1/org/{orgId}/teams/{teamId} | Get a single team.
*TeamsPublicAPIApi* | [**queryTeams**](docs/TeamsPublicAPIApi.md#queryteams) | **GET** /public/teams/v1/org/{orgId}/teams | Get a list of teams.
*TeamsPublicAPIApi* | [**restoreTeam**](docs/TeamsPublicAPIApi.md#restoreteam) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/restore | Restore a single soft-deleted team
*TeamsPublicAPIApi* | [**unarchiveTeams**](docs/TeamsPublicAPIApi.md#unarchiveteams) | **POST** /public/teams/v1/org/{orgId}/teams/unarchive | Unarchive teams in bulk.
*TeamsPublicAPIApi* | [**updateTeam**](docs/TeamsPublicAPIApi.md#updateteam) | **PATCH** /public/teams/v1/org/{orgId}/teams/{teamId} | Modify a team.
*TeamsPublicAPIApi* | [**uploadAndSetTeamCoverPhoto**](docs/TeamsPublicAPIApi.md#uploadandsetteamcoverphoto) | **PUT** /public/teams/v1/{teamId}/cover-photo | Upload a team cover photo


### Models

- [PublicApiBulkOperationRequest](docs/PublicApiBulkOperationRequest.md)
- [PublicApiBulkOperationResponse](docs/PublicApiBulkOperationResponse.md)
- [PublicApiBulkTeamOperationError](docs/PublicApiBulkTeamOperationError.md)
- [PublicApiExternalReference](docs/PublicApiExternalReference.md)
- [PublicApiExternalTeamCreationPayload](docs/PublicApiExternalTeamCreationPayload.md)
- [PublicApiFetchResponsePublicApiMembershipAccountId](docs/PublicApiFetchResponsePublicApiMembershipAccountId.md)
- [PublicApiLinkTeamToExternalSourcePayload](docs/PublicApiLinkTeamToExternalSourcePayload.md)
- [PublicApiMembership](docs/PublicApiMembership.md)
- [PublicApiMembershipAddPayload](docs/PublicApiMembershipAddPayload.md)
- [PublicApiMembershipAddResponse](docs/PublicApiMembershipAddResponse.md)
- [PublicApiMembershipCodedError](docs/PublicApiMembershipCodedError.md)
- [PublicApiMembershipFetchPayload](docs/PublicApiMembershipFetchPayload.md)
- [PublicApiMembershipRemovePayload](docs/PublicApiMembershipRemovePayload.md)
- [PublicApiMembershipRemoveResponse](docs/PublicApiMembershipRemoveResponse.md)
- [PublicApiOverallCodedError](docs/PublicApiOverallCodedError.md)
- [PublicApiPageInfoAccountId](docs/PublicApiPageInfoAccountId.md)
- [PublicApiTeam](docs/PublicApiTeam.md)
- [PublicApiTeamCreationPayload](docs/PublicApiTeamCreationPayload.md)
- [PublicApiTeamPaginationResult](docs/PublicApiTeamPaginationResult.md)
- [PublicApiTeamResponse](docs/PublicApiTeamResponse.md)
- [PublicApiTeamResponseWithMembers](docs/PublicApiTeamResponseWithMembers.md)
- [PublicApiTeamUpdatePayload](docs/PublicApiTeamUpdatePayload.md)
- [PublicApiUserPermissions](docs/PublicApiUserPermissions.md)

### Authorization


Authentication schemes defined for the API:
<a id="asap"></a>
#### asap


- **Type**: HTTP Bearer Token authentication (JWT)

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `4.0`
- Package version: `4.0`
- Generator version: `7.19.0`
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
