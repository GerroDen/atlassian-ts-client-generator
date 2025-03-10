import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-jira-cloud-api.cjs");

describe("fix-jira-cloud-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("fixes properties type for reading requests", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetRecentRequest {
  expand?: string;
  properties?: Array<object>;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface GetRecentRequest {
  expand?: string;
  properties?: Array<string>;
}`);
  });

  it("fixes properties type for mutating requests", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface IssueEntityProperties {
  properties?: { [key: string]: JsonNode; };
}`,
      },
      options,
    );

    expect(result).toBe(`export interface IssueEntityProperties {
  properties?: { [key: string]: any; };
}`);
  });

  it("specifies SearchProjectsRequest type", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface SearchProjectsRequest {
  typeKey?: string;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface SearchProjectsRequest {
  typeKey?: "business" | "service_desk" | "software";
}`);
  });

  it("fixes name clash of CreateCustomFieldRequest", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        path: "foo/apis/IssueFieldsApi.ts",
        source: `export interface CreateCustomFieldRequest {
}

export class IssueFieldsApi extends runtime.BaseAPI {
    async createCustomField(requestParameters: CreateCustomFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FieldDetails> {
    }
}`,
      },
      options,
    );

    expect(result).toBe(`export interface ICreateCustomFieldRequest {
}

export class IssueFieldsApi extends runtime.BaseAPI {
    async createCustomField(requestParameters: ICreateCustomFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FieldDetails> {
    }
}`);
  });
});
