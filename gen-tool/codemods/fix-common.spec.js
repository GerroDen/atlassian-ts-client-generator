import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-common.cjs");

describe("fix-common", () => {
  const options = Object.freeze({ parser: "ts" });

  it("replaces reserved keywords in object properties", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface FieldDetailsSchema {
  readonly _configuration?: { [key: string]: any; };
  readonly _default?: { [key: string]: any; };
  readonly _public?: boolean;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface FieldDetailsSchema {
  readonly configuration?: { [key: string]: any; };
  readonly default?: { [key: string]: any; };
  readonly public?: boolean;
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
      options,
    );

    expect(result).toBe(`interface BulkAddExemptRepositoriesRequest {
  restRepositorySelector?: Array<RestRepositorySelector>;
}`);
  });
});
