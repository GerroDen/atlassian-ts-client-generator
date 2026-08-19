import { applyTransform } from "jscodeshift/src/testUtils.js";
import { describe, it, expect } from "vitest";

const transformer = await import("./fix-jira-software-cloud-api.cjs");

describe("fix-jira-software-cloud-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("updates type parameter for GetAllBoardsRequest", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetAllBoardsRequest {
  type?: object;
}`,
      },
      options
    );

    expect(result).toBe(`export interface GetAllBoardsRequest {
  type?: "scrum" | "kanban" | "simple";
}`);
  });

  it("updates type parameter for GetAllSprintsRequest", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetAllSprintsRequest {
  state?: object;
}`,
      },
      options
    );

    expect(result).toBe(`export interface GetAllSprintsRequest {
  state?: "closed" | "active" | "future";
}`);
  });

  it("updates type parameter for GetAllSprintsRequest", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetBoardIssuesForEpicRequest {
  fields?: Array<object>;
}

export interface GetBoardIssuesForEpicJSISRequest {
  fields?: Array<object>;
}`,
      },
      options
    );

    expect(result).toBe(`export interface GetBoardIssuesForEpicRequest {
  fields?: Array<string>;
}

export interface GetBoardIssuesForEpicJSISRequest {
  fields?: Array<string>;
}`);
  });
});
