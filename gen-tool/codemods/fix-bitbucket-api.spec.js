import { applyTransform } from "jscodeshift/src/testUtils.js";

const transformer = await import("./fix-bitbucket-api.cjs");

describe("fix-bitbucket-api", () => {
  const options = Object.freeze({ parser: "ts" });

  it("replaces stream endpoint names", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export class RepositoryApi extends runtime.BaseAPI {
  async streamRaw(requestParameters: StreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExampleFiles>> {
    body;
  }
}`,
      },
      options,
    );

    expect(result).toBe(`export class RepositoryApi extends runtime.BaseAPI {
  async _streamRaw(requestParameters: StreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExampleFiles>> {
    body;
  }
}`);
  });

  it("replaces stream endpoint calls", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export class RepositoryApi extends runtime.BaseAPI {
  async stream(requestParameters: StreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExampleFiles> {
    const response = await this.streamRaw(requestParameters, initOverrides);
    return await response.value();
  }
}`,
      },
      options,
    );

    expect(result).toBe(`export class RepositoryApi extends runtime.BaseAPI {
  async stream(requestParameters: StreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExampleFiles> {
    const response = await this._streamRaw(requestParameters, initOverrides);
    return await response.value();
  }
}`);
  });

  it("keeps streamRaw endpoint as is", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export class RepositoryApi extends runtime.BaseAPI {
  async streamRaw(requestParameters: StreamRawRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
    await this.streamRawRaw(requestParameters, initOverrides);
  }
}`,
      },
      options,
    );

    expect(result).toBe(`export class RepositoryApi extends runtime.BaseAPI {
  async streamRaw(requestParameters: StreamRawRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
    await this.streamRawRaw(requestParameters, initOverrides);
  }
}`);
  });

  it("removes export from request interfaces", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface AddForProjectRequest {
    projectKey: string;
    restSshAccessKey?: RestSshAccessKey;
}`,
      },
      options,
    );

    expect(result).toBe(`interface AddForProjectRequest {
    projectKey: string;
    restSshAccessKey?: RestSshAccessKey;
}`);
  });

  it("", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        path: "foo/models/index.ts",
        source: `interface SetDefaultBranchRequest {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultBranchRequest
     */
    id?: string;
}`,
      },
      options,
    );

    expect(result).toBe(`interface SetDefaultBranchRequest {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultBranchRequest
     */
    id?: string;
}`);
  });
});
