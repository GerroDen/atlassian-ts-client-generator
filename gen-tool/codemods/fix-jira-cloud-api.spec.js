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

  it("fixes request type for project search to allow an array in propertyQuery", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface SearchProjectsRequest {
  propertyQuery?: string;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface SearchProjectsRequest {
  propertyQuery?: Array<string>;
}`);
  });
});
