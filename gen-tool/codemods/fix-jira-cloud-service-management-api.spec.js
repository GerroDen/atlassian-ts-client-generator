import { applyTransform } from "jscodeshift/src/testUtils.js";
import { describe, it, expect } from "vitest";

const transformer = await import("./fix-jira-cloud-service-management-api.cjs");

describe("fix-jira-cloud-service-management-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("postfixes deuplicate service desk request parameter interfaces", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        path: "foo/apis/ServicedeskApi.ts",
        source: `export interface GetArticlesRequest {}
export interface DeletePropertyRequest {}
export interface GetPropertiesKeysRequest {}
export interface GetPropertyRequest {}
export interface SetPropertyRequest {}

export class ServicedeskApi extends runtime.BaseAPI {
  async getArticles(requestParameters: GetArticlesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedDTOArticleDTO> {
  }

  async deleteProperty(requestParameters: DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
  }

  async getPropertiesKeys(requestParameters: GetPropertiesKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
  }

  async getProperty(requestParameters: GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
  }

  async setProperty(requestParameters: SetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
  }
}`,
      },
      options,
    );

    expect(result).toBe(`export interface GetArticlesServicedeskRequest {}
export interface DeletePropertyServicedeskRequest {}
export interface GetPropertiesKeysServicedeskRequest {}
export interface GetPropertyServicedeskRequest {}
export interface SetPropertyServicedeskRequest {}

export class ServicedeskApi extends runtime.BaseAPI {
  async getArticles(requestParameters: GetArticlesServicedeskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedDTOArticleDTO> {
  }

  async deleteProperty(requestParameters: DeletePropertyServicedeskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
  }

  async getPropertiesKeys(requestParameters: GetPropertiesKeysServicedeskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
  }

  async getProperty(requestParameters: GetPropertyServicedeskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
  }

  async setProperty(requestParameters: SetPropertyServicedeskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
  }
}`);
  });

  it("postfixes request types of DefaultApi", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        path: "foo/apis/PermissionSkippedApi.ts",
        source: `export interface AddCustomersRequest {}
export interface CreateCustomerRequest {}
export interface ViewArticleRequest {}

export class DefaultApi extends runtime.BaseAPI {
    async addCustomersRequestOpts(requestParameters: AddCustomersRequest): Promise<runtime.RequestOpts> {}
    
    async addCustomersRaw(requestParameters: AddCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {}
    
    async addCustomers(requestParameters: AddCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {}
    
    async createCustomerRequestOpts(requestParameters: CreateCustomerRequest): Promise<runtime.RequestOpts> {}
    
    async createCustomerRaw(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {}
    
    async createCustomer(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {}
    
    async viewArticleRequestOpts(requestParameters: ViewArticleRequest): Promise<runtime.RequestOpts> {}
    
    async viewArticleRaw(requestParameters: ViewArticleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {}
    
    async viewArticle(requestParameters: ViewArticleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {}
}
`,
      },
      options,
    );

    expect(result).toBe(`export interface AddCustomersPermissionSkippedRequest {}
export interface CreateCustomerPermissionSkippedRequest {}
export interface ViewArticlePermissionSkippedRequest {}

export class PermissionSkippedApi extends runtime.BaseAPI {
    async addCustomersRequestOpts(requestParameters: AddCustomersPermissionSkippedRequest): Promise<runtime.RequestOpts> {}
    
    async addCustomersRaw(requestParameters: AddCustomersPermissionSkippedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {}
    
    async addCustomers(requestParameters: AddCustomersPermissionSkippedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {}
    
    async createCustomerRequestOpts(requestParameters: CreateCustomerPermissionSkippedRequest): Promise<runtime.RequestOpts> {}
    
    async createCustomerRaw(requestParameters: CreateCustomerPermissionSkippedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {}
    
    async createCustomer(requestParameters: CreateCustomerPermissionSkippedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {}
    
    async viewArticleRequestOpts(requestParameters: ViewArticlePermissionSkippedRequest): Promise<runtime.RequestOpts> {}
    
    async viewArticleRaw(requestParameters: ViewArticlePermissionSkippedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {}
    
    async viewArticle(requestParameters: ViewArticlePermissionSkippedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {}
}`);
  });
});
