# AuditApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAuditRecord**](AuditApi.md#createauditrecord) | **POST** /wiki/rest/api/audit | Create audit record |
| [**exportAuditRecords**](AuditApi.md#exportauditrecords) | **GET** /wiki/rest/api/audit/export | Export audit records |
| [**getAuditRecords**](AuditApi.md#getauditrecords) | **GET** /wiki/rest/api/audit | Get audit records |
| [**getAuditRecordsForTimePeriod**](AuditApi.md#getauditrecordsfortimeperiod) | **GET** /wiki/rest/api/audit/since | Get audit records for time period |
| [**getRetentionPeriod**](AuditApi.md#getretentionperiod) | **GET** /wiki/rest/api/audit/retention | Get retention period |
| [**setRetentionPeriod**](AuditApi.md#setretentionperiod) | **PUT** /wiki/rest/api/audit/retention | Set retention period |



## createAuditRecord

> AuditRecord createAuditRecord(body)

Create audit record

Creates a record in the audit log.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission.

### Example

```ts
import {
  Configuration,
  AuditApi,
} from 'confluence-cloud-api-v1';
import type { CreateAuditRecordRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // AuditRecordCreate | The record to be created in the audit log.
    body: ...,
  } satisfies CreateAuditRecordRequest;

  try {
    const data = await api.createAuditRecord(body);
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
| **body** | [AuditRecordCreate](AuditRecordCreate.md) | The record to be created in the audit log. | |

### Return type

[**AuditRecord**](AuditRecord.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the record is created in the audit log. |  -  |
| **400** | Returned if the &#x60;remoteAddress&#x60; property is not specified. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportAuditRecords

> Blob exportAuditRecords(startDate, endDate, searchString, format)

Export audit records

Exports audit records as a CSV file or ZIP file.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission.

### Example

```ts
import {
  Configuration,
  AuditApi,
} from 'confluence-cloud-api-v1';
import type { ExportAuditRecordsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // string | Filters the exported results to the records on or after the `startDate`. The `startDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. (optional)
    startDate: startDate_example,
    // string | Filters the exported results to the records on or before the `endDate`. The `endDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. (optional)
    endDate: endDate_example,
    // string | Filters the exported results to records that have string property values matching the `searchString`. (optional)
    searchString: searchString_example,
    // 'csv' | 'zip' | The format of the export file for the audit records. (optional)
    format: format_example,
  } satisfies ExportAuditRecordsRequest;

  try {
    const data = await api.exportAuditRecords(body);
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
| **startDate** | `string` | Filters the exported results to the records on or after the &#x60;startDate&#x60;. The &#x60;startDate&#x60; must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | Filters the exported results to the records on or before the &#x60;endDate&#x60;. The &#x60;endDate&#x60; must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. | [Optional] [Defaults to `undefined`] |
| **searchString** | `string` | Filters the exported results to records that have string property values matching the &#x60;searchString&#x60;. | [Optional] [Defaults to `undefined`] |
| **format** | `csv`, `zip` | The format of the export file for the audit records. | [Optional] [Defaults to `&#39;csv&#39;`] [Enum: csv, zip] |

### Return type

**Blob**

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/zip`, `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested export of the audit records is returned. |  -  |
| **403** | Returned if the calling user does not have permission to view the audit log. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditRecords

> AuditRecordArray getAuditRecords(startDate, endDate, searchString, start, limit)

Get audit records

Returns all records in the audit log, optionally for a certain date range. This contains information about events like space exports, group membership changes, app installations, etc. For more information, see [Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html) in the Confluence administrator\&#39;s guide.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission.

### Example

```ts
import {
  Configuration,
  AuditApi,
} from 'confluence-cloud-api-v1';
import type { GetAuditRecordsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // string | Filters the results to the records on or after the `startDate`. The `startDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. (optional)
    startDate: startDate_example,
    // string | Filters the results to the records on or before the `endDate`. The `endDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. (optional)
    endDate: endDate_example,
    // string | Filters the results to records that have string property values matching the `searchString`. (optional)
    searchString: searchString_example,
    // number | The starting index of the returned records. (optional)
    start: 56,
    // number | The maximum number of records to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetAuditRecordsRequest;

  try {
    const data = await api.getAuditRecords(body);
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
| **startDate** | `string` | Filters the results to the records on or after the &#x60;startDate&#x60;. The &#x60;startDate&#x60; must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | Filters the results to the records on or before the &#x60;endDate&#x60;. The &#x60;endDate&#x60; must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds. | [Optional] [Defaults to `undefined`] |
| **searchString** | `string` | Filters the results to records that have string property values matching the &#x60;searchString&#x60;. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned records. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of records to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `1000`] |

### Return type

[**AuditRecordArray**](AuditRecordArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested records are returned. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the calling user does not have permission to view the audit log. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditRecordsForTimePeriod

> AuditRecordArray getAuditRecordsForTimePeriod(number, units, searchString, start, limit)

Get audit records for time period

Returns records from the audit log, for a time period back from the current date. For example, you can use this method to get the last 3 months of records.  This contains information about events like space exports, group membership changes, app installations, etc. For more information, see [Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html) in the Confluence administrator\&#39;s guide.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission.

### Example

```ts
import {
  Configuration,
  AuditApi,
} from 'confluence-cloud-api-v1';
import type { GetAuditRecordsForTimePeriodRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // number | The number of units for the time period. (optional)
    number: 789,
    // 'NANOS' | 'MICROS' | 'MILLIS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'HALF_DAYS' | 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS' | 'DECADES' | 'CENTURIES' | The unit of time that the time period is measured in. (optional)
    units: units_example,
    // string | Filters the results to records that have string property values matching the `searchString`. (optional)
    searchString: searchString_example,
    // number | The starting index of the returned records. (optional)
    start: 56,
    // number | The maximum number of records to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetAuditRecordsForTimePeriodRequest;

  try {
    const data = await api.getAuditRecordsForTimePeriod(body);
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
| **number** | `number` | The number of units for the time period. | [Optional] [Defaults to `3`] |
| **units** | `NANOS`, `MICROS`, `MILLIS`, `SECONDS`, `MINUTES`, `HOURS`, `HALF_DAYS`, `DAYS`, `WEEKS`, `MONTHS`, `YEARS`, `DECADES`, `CENTURIES` | The unit of time that the time period is measured in. | [Optional] [Defaults to `&#39;MONTHS&#39;`] [Enum: NANOS, MICROS, MILLIS, SECONDS, MINUTES, HOURS, HALF_DAYS, DAYS, WEEKS, MONTHS, YEARS, DECADES, CENTURIES] |
| **searchString** | `string` | Filters the results to records that have string property values matching the &#x60;searchString&#x60;. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned records. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of records to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `1000`] |

### Return type

[**AuditRecordArray**](AuditRecordArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested records are returned. |  -  |
| **403** | Returned if the calling user does not have permission to view the audit log. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRetentionPeriod

> RetentionPeriod getRetentionPeriod()

Get retention period

Returns the retention period for records in the audit log. The retention period is how long an audit record is kept for, from creation date until it is deleted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission.

### Example

```ts
import {
  Configuration,
  AuditApi,
} from 'confluence-cloud-api-v1';
import type { GetRetentionPeriodRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuditApi(config);

  try {
    const data = await api.getRetentionPeriod();
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

[**RetentionPeriod**](RetentionPeriod.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested retention period is returned. |  -  |
| **403** | Returned if the calling user does not have permission to view the audit log. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setRetentionPeriod

> RetentionPeriod setRetentionPeriod(body)

Set retention period

Sets the retention period for records in the audit log. The retention period can be set to a maximum of 1 year.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission.

### Example

```ts
import {
  Configuration,
  AuditApi,
} from 'confluence-cloud-api-v1';
import type { SetRetentionPeriodRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // RetentionPeriod | The updated retention period.
    body: ...,
  } satisfies SetRetentionPeriodRequest;

  try {
    const data = await api.setRetentionPeriod(body);
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
| **body** | [RetentionPeriod](RetentionPeriod.md) | The updated retention period. | |

### Return type

[**RetentionPeriod**](RetentionPeriod.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the retention period is updated. |  -  |
| **403** | Returned if the calling user does not have permission to view the audit log. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

