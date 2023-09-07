import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-confluence-cloud-api-v2.cjs");

describe("fix-confluence-cloud-api-v2", () => {
  const options = Object.freeze({ parser: "ts" });

  it("escapes order enums", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export const AttachmentSortOrder = {
  CreatedDate: 'created-date',
  CreatedDate: '-created-date',
  ModifiedDate: 'modified-date',
  ModifiedDate: '-modified-date'
} as const;`,
      },
      options,
    );

    expect(result).toBe(`export const AttachmentSortOrder = {
  CreatedDate: 'created-date',
  CreatedDateDesc: '-created-date',
  ModifiedDate: 'modified-date',
  ModifiedDateDesc: '-modified-date'
} as const;`);
  });
});
