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

  it("removes duplicated from deprecation", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface InlineCommentModelProperties {
  /**
   * Property value used to reference the highlighted element in DOM.
   * @type {string}
   * @memberof InlineCommentModelProperties
   */
  inlineMarkerRef?: string;
  /**
   * Text that is highlighted.
   * @type {string}
   * @memberof InlineCommentModelProperties
   */
  inlineOriginalSelection?: string;
  /**
   * Deprecated, use \`inlineMarkerRef\` instead.
   * @type {string}
   * @memberof InlineCommentModelProperties
   * @deprecated
   */
  inlineMarkerRef?: string;
  /**
   * Deprecated, use \`inlineOriginalSelection\` instead.
   * @type {string}
   * @memberof InlineCommentModelProperties
   * @deprecated
   */
  inlineOriginalSelection?: string;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface InlineCommentModelProperties {
 /**
  * Property value used to reference the highlighted element in DOM.
  * @type {string}
  * @memberof InlineCommentModelProperties
  */
 inlineMarkerRef?: string;
 /**
  * Text that is highlighted.
  * @type {string}
  * @memberof InlineCommentModelProperties
  */
 inlineOriginalSelection?: string;
}`);
  });
});
