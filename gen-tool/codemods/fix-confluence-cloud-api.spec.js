import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-confluence-cloud-api.cjs");

describe("fix-confluence-cloud-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("escapes link property declarations in interfaces", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetRestrictionsByOperation200ResponseValue {
  operationType?: ContentRestriction;
  links?: { [key: string]: GenericLinksValue; };
}`,
      },
      options,
    );

    expect(result)
      .toBe(`export interface GetRestrictionsByOperation200ResponseValue {
  operationType?: ContentRestriction;
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
