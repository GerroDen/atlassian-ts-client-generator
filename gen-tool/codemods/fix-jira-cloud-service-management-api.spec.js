import { applyTransform } from "jscodeshift/src/testUtils.js";

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
});
