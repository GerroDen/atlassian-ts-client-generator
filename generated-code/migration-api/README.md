# migration-api@1.0

A TypeScript SDK client for the api.atlassian.com API.

## Usage

First, install the SDK from npm.

```bash
npm install migration-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { AddLog1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ForgeAppLog
    forgeAppLog: ...,
  } satisfies AddLog1Request;

  try {
    const data = await api.addLog1(body);
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
*ForgeResourceApi* | [**addLog1**](docs/ForgeResourceApi.md#addlog1) | **POST** /app/migration/forge/v1/log/{transferId} | Add log message from the Forge App
*ForgeResourceApi* | [**findByNamespaceAndKeys2**](docs/ForgeResourceApi.md#findbynamespaceandkeys2) | **POST** /app/migration/forge/v1/mapping/{transferId}/find | Find mappings by namespace
*ForgeResourceApi* | [**getAppData2**](docs/ForgeResourceApi.md#getappdata2) | **GET** /app/migration/forge/v1/data/{fileKey} | Returns an object containing a signed url to retrieve app data
*ForgeResourceApi* | [**getAppDataPayload1**](docs/ForgeResourceApi.md#getappdatapayload1) | **GET** /app/migration/forge/v1/data/{fileKey}/payload | Retrieves app data for given file key
*ForgeResourceApi* | [**getContainersForTransferIdByPage1**](docs/ForgeResourceApi.md#getcontainersfortransferidbypage1) | **GET** /app/migration/forge/v1/container/{transferId}/page | Returns containers for a given transferId and container Type
*ForgeResourceApi* | [**getMapping1**](docs/ForgeResourceApi.md#getmapping1) | **GET** /app/migration/forge/v1/mapping/{transferId}/page | Returns paginated mappings for a given namespace
*ForgeResourceApi* | [**getUploadedFiles1**](docs/ForgeResourceApi.md#getuploadedfiles1) | **GET** /app/migration/forge/v1/data/{transferId}/all | Returns all uploaded file keys for a transfer Id
*ForgeResourceApi* | [**getUploadedFilesPaginated**](docs/ForgeResourceApi.md#getuploadedfilespaginated) | **GET** /app/migration/forge/v1/data/{transferId}/page | Returns uploaded file metadata for a transfer Id in a paginated format
*ForgeResourceApi* | [**setMessageProgress1**](docs/ForgeResourceApi.md#setmessageprogress1) | **POST** /app/migration/forge/v1/message/{transferId}/status | Update message status


### Models

- [AdminEntityPropertyRequest](docs/AdminEntityPropertyRequest.md)
- [AppLicenseDetailDto](docs/AppLicenseDetailDto.md)
- [AppProgress](docs/AppProgress.md)
- [AppProgressResponse](docs/AppProgressResponse.md)
- [AppTypeInstalledRequest](docs/AppTypeInstalledRequest.md)
- [AppTypeInstalledResponse](docs/AppTypeInstalledResponse.md)
- [AppWebhookCheckResult](docs/AppWebhookCheckResult.md)
- [AppsLicenseResponseDto](docs/AppsLicenseResponseDto.md)
- [CancelTransferRequest](docs/CancelTransferRequest.md)
- [CancelTransferResponse](docs/CancelTransferResponse.md)
- [CheckupResult](docs/CheckupResult.md)
- [CloudAppsInstalled](docs/CloudAppsInstalled.md)
- [CloudFeedback](docs/CloudFeedback.md)
- [CloudSiteRequest](docs/CloudSiteRequest.md)
- [CloudSiteResponse](docs/CloudSiteResponse.md)
- [Condition](docs/Condition.md)
- [ConsentRequest](docs/ConsentRequest.md)
- [ContainerByPageResponse](docs/ContainerByPageResponse.md)
- [ContainerFileMetadataDto](docs/ContainerFileMetadataDto.md)
- [ContainerResponseMeta](docs/ContainerResponseMeta.md)
- [ContainerV1](docs/ContainerV1.md)
- [DefaultWebhookRequest](docs/DefaultWebhookRequest.md)
- [DownloadUrlResponse](docs/DownloadUrlResponse.md)
- [EnrichedMigrationDetailsDtoV1](docs/EnrichedMigrationDetailsDtoV1.md)
- [EntityProperty](docs/EntityProperty.md)
- [EntityPropertyRequest](docs/EntityPropertyRequest.md)
- [ExtendTransferLifetimeRequest](docs/ExtendTransferLifetimeRequest.md)
- [FeederRequest](docs/FeederRequest.md)
- [FeederResponse](docs/FeederResponse.md)
- [FeederResponseSql](docs/FeederResponseSql.md)
- [FileMappingDto](docs/FileMappingDto.md)
- [FileMetadataDto](docs/FileMetadataDto.md)
- [FileMetadataDtoPage](docs/FileMetadataDtoPage.md)
- [FinalizePreloadDataUploadRequest](docs/FinalizePreloadDataUploadRequest.md)
- [FinalizePreloadEventRequest](docs/FinalizePreloadEventRequest.md)
- [FinalizeUploadRequest](docs/FinalizeUploadRequest.md)
- [ForgeAppLog](docs/ForgeAppLog.md)
- [ForgeCFTypeKeyPrefixResponse](docs/ForgeCFTypeKeyPrefixResponse.md)
- [ForgeEventDto](docs/ForgeEventDto.md)
- [ForgeFileMappingDto](docs/ForgeFileMappingDto.md)
- [ForgeFileMetadataDto](docs/ForgeFileMetadataDto.md)
- [ForgeFileMetadataDtoPage](docs/ForgeFileMetadataDtoPage.md)
- [ForgeKeyValuePairRequest](docs/ForgeKeyValuePairRequest.md)
- [ForgeMacroKeyPrefixResponse](docs/ForgeMacroKeyPrefixResponse.md)
- [ForgeMigrationDetails](docs/ForgeMigrationDetails.md)
- [ForgeSqlRequest](docs/ForgeSqlRequest.md)
- [ForgeWorkflowRuleKeyPrefixResponse](docs/ForgeWorkflowRuleKeyPrefixResponse.md)
- [GetPreloadDataUploadUrlRequest](docs/GetPreloadDataUploadUrlRequest.md)
- [GetUploadMutationUrlRequest](docs/GetUploadMutationUrlRequest.md)
- [GetUploadUrlRequest](docs/GetUploadUrlRequest.md)
- [InitializeUploadResponse](docs/InitializeUploadResponse.md)
- [JobChangeDetail](docs/JobChangeDetail.md)
- [LogMessage](docs/LogMessage.md)
- [MatchedServerAppData](docs/MatchedServerAppData.md)
- [MauiTransferDto](docs/MauiTransferDto.md)
- [MessageProgress](docs/MessageProgress.md)
- [MigrationMappingDto](docs/MigrationMappingDto.md)
- [MigrationMappingMeta](docs/MigrationMappingMeta.md)
- [ModifyTransferStateRequest](docs/ModifyTransferStateRequest.md)
- [MultiTransfer](docs/MultiTransfer.md)
- [MutationRequest](docs/MutationRequest.md)
- [NodeDto](docs/NodeDto.md)
- [OSFinaliseUploadPart](docs/OSFinaliseUploadPart.md)
- [OSFinaliseUploadRequest](docs/OSFinaliseUploadRequest.md)
- [OSFinaliseUploadResult](docs/OSFinaliseUploadResult.md)
- [OSGetUploadUrlRequest](docs/OSGetUploadUrlRequest.md)
- [OSGetUploadUrlResult](docs/OSGetUploadUrlResult.md)
- [OSInitialiseRequest](docs/OSInitialiseRequest.md)
- [OSUploadInitialiseResult](docs/OSUploadInitialiseResult.md)
- [PairStringString](docs/PairStringString.md)
- [PathfinderIdResponse](docs/PathfinderIdResponse.md)
- [PausedTransferDto](docs/PausedTransferDto.md)
- [PausedTransferQueryResponse](docs/PausedTransferQueryResponse.md)
- [PlatformTransfer](docs/PlatformTransfer.md)
- [ProductDetail](docs/ProductDetail.md)
- [ProgressEndpointDto](docs/ProgressEndpointDto.md)
- [RegisterForgeMultiTransferRequest](docs/RegisterForgeMultiTransferRequest.md)
- [RegisterForgeTransferRequest](docs/RegisterForgeTransferRequest.md)
- [RegisterMultiTransferRequest](docs/RegisterMultiTransferRequest.md)
- [RegisterTransferAnalytics](docs/RegisterTransferAnalytics.md)
- [RegisterTransferDefinition](docs/RegisterTransferDefinition.md)
- [RegisterTransferRequest](docs/RegisterTransferRequest.md)
- [RegisterTransferRerunRequest](docs/RegisterTransferRerunRequest.md)
- [RerunEnablement](docs/RerunEnablement.md)
- [RerunTransferResponse](docs/RerunTransferResponse.md)
- [ResumedEventsDto](docs/ResumedEventsDto.md)
- [ServerAppData](docs/ServerAppData.md)
- [ShardAwareNodeModel](docs/ShardAwareNodeModel.md)
- [ShardAwareTableRecord](docs/ShardAwareTableRecord.md)
- [SiteAppInfo](docs/SiteAppInfo.md)
- [SiteAppsLicenseRequest](docs/SiteAppsLicenseRequest.md)
- [TableRecord](docs/TableRecord.md)
- [TransferDetailsDto](docs/TransferDetailsDto.md)
- [TransferError](docs/TransferError.md)
- [TransferEvent](docs/TransferEvent.md)
- [TransferForPlatform](docs/TransferForPlatform.md)
- [TransferLogEnablement](docs/TransferLogEnablement.md)
- [TransferMetadata](docs/TransferMetadata.md)
- [TransferStartStatusResponse](docs/TransferStartStatusResponse.md)
- [TransferSummary](docs/TransferSummary.md)
- [UnifiedEventAndLogsResponse](docs/UnifiedEventAndLogsResponse.md)
- [WebhookCheckRequestDto](docs/WebhookCheckRequestDto.md)
- [WebhookEndpointsDto](docs/WebhookEndpointsDto.md)
- [WebhookResponseDto](docs/WebhookResponseDto.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0`
- Package version: `1.0`
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
