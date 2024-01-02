import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-common.cjs");

describe("fix-common", () => {
  const options = Object.freeze({ parser: "ts" });

  it("replaces 'configuration' key in object properties", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface FieldDetailsSchema {
  readonly _configuration?: { [key: string]: any; };
}`,
      },
      options,
    );

    expect(result).toBe(`export interface FieldDetailsSchema {
  readonly configuration?: { [key: string]: any; };
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
      options,
    );

    expect(result).toBe(`interface ScreenSchemeDetailsScreens {
  default?: number;
}`);
  });
});
