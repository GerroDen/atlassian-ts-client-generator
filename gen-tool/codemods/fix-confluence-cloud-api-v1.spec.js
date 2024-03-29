import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-confluence-cloud-api-v1.cjs");

describe("fix-confluence-cloud-api-v1", () => {
  const options = Object.freeze({ parser: "ts" });

  it("fix link property declarations in interfaces", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetRestrictionsByOperation200ResponseValue {
  links: LookAndFeelHeadings;
  links?: { [key: string]: GenericLinksValue; };
}`,
      },
      options,
    );

    expect(result)
      .toBe(`export interface GetRestrictionsByOperation200ResponseValue {
  links: LookAndFeelHeadings;
  _links?: { [key: string]: GenericLinksValue; };
}`);
  });

  it("fixes missnamed content status type", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface BulkRemoveContentStatesOperationRequest {
    status: BulkRemoveContentStatesStatusEnum;
    bulkRemoveContentStatesRequest?: BulkRemoveContentStatesRequest;
}`,
      },
      options,
    );

    expect(result)
      .toBe(`export interface BulkRemoveContentStatesOperationRequest {
    status: BulkRemoveContentStatesOperationStatusEnum;
    bulkRemoveContentStatesRequest?: BulkRemoveContentStatesRequest;
}`);
  });
});
