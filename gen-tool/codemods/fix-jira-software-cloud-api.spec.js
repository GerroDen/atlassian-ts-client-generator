import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-jira-cloud-api.cjs");

describe("fix-jira-software-cloud-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("escapes order enums", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export const GetCommentsOrderByEnum = {
  Created: 'created',
  Created: '-created',
  Created: '+created'
} as const;`,
      },
      options,
    );

    expect(result).toBe(`export const GetCommentsOrderByEnum = {
  Created: 'created',
  CreatedDesc: '-created',
  CreatedAsc: '+created'
} as const;`);
  });

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
});
