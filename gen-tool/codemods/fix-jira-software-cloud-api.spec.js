import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-jira-software-cloud-api.cjs");

describe("fix-jira-software-cloud-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("Updates type parameter for GetAllBoardsRequest", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface GetAllBoardsRequest {
  type?: object;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface GetAllBoardsRequest {
  type?: "scrum" | "kanban" | "simple";
}`);
  });
});
