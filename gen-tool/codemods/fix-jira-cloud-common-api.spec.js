import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-jira-cloud-common-api.cjs");

describe("fix-jira-cloud-common-api", () => {
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
      options
    );

    expect(result).toBe(`export const GetCommentsOrderByEnum = {
  Created: 'created',
  CreatedDesc: '-created',
  CreatedAsc: '+created'
} as const;`);
  });

  it("properly defines request types with first number character", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface AvatarUrlsBean {
  _16x16?: string;
  _24x24?: string;
  _32x32?: string;
  _48x48?: string;
}`,
      },
      options
    );

    expect(result).toBe(`export interface AvatarUrlsBean {
  ["16x16"]?: string;
  ["24x24"]?: string;
  ["32x32"]?: string;
  ["48x48"]?: string;
}`);
  });

  it("replaces sets in requests with arrays", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `interface BulkAddExemptRepositoriesRequest {
  restRepositorySelector?: Set<RestRepositorySelector>;
}`,
      },
      options
    );

    expect(result).toBe(`interface BulkAddExemptRepositoriesRequest {
  restRepositorySelector?: Array<RestRepositorySelector>;
}`);
  });

  it("replaces 'default' key in object properties", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `interface ScreenSchemeDetailsScreens {
  _default?: number;
}`,
      },
      options
    );

    expect(result).toBe(`interface ScreenSchemeDetailsScreens {
  default?: number;
}`);
  });
});
