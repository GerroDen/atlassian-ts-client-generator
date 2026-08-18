# SAMLCertificateConfigurationApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSamlCertificate**](SAMLCertificateConfigurationApi.md#getsamlcertificate) | **GET** /authconfig/latest/saml/certificate |  |
| [**regenerateCertificate**](SAMLCertificateConfigurationApi.md#regeneratecertificate) | **POST** /authconfig/latest/saml/certificate/reset |  |



## getSamlCertificate

> getSamlCertificate()



returns the currently used certificate for signing SAML authentication requests

### Example

```ts
import {
  Configuration,
  SAMLCertificateConfigurationApi,
} from 'bitbucket-api';
import type { GetSamlCertificateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SAMLCertificateConfigurationApi();

  try {
    const data = await api.getSamlCertificate();
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
| **200** | Currently used certificate in PEM format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## regenerateCertificate

> regenerateCertificate()



generates a new certificate for signing SAML authentication requests

### Example

```ts
import {
  Configuration,
  SAMLCertificateConfigurationApi,
} from 'bitbucket-api';
import type { RegenerateCertificateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SAMLCertificateConfigurationApi();

  try {
    const data = await api.regenerateCertificate();
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
| **200** | The new certificate in PEM format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

