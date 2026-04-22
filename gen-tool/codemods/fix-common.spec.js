import { applyTransform } from "jscodeshift/src/testUtils.js";
import { describe, it, expect } from "vitest";

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

  it("replaces definition of FetchAPI and appends RequestCredentials", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];`,
      },
      options,
    );

    expect(result)
      .toBe(`export type FetchAPI = (url: string, init?: RequestInit) => Promise<Response>;
export type RequestCredentials = "omit" | "include" | "same-origin";`);
  });

  it("skips another definition of RequestCredentials", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export type FetchAPI = (url: string, init?: RequestInit) => Promise<Response>;
export type RequestCredentials = "omit" | "include" | "same-origin";`,
      },
      options,
    );

    expect(result)
      .toBe(`export type FetchAPI = (url: string, init?: RequestInit) => Promise<Response>;
export type RequestCredentials = "omit" | "include" | "same-origin";`);
  });

  it("updates signature of BaseAPI.fetchApi with optional init parameter to reflect the native fetch signature", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export class BaseAPI {
    private fetchApi = async (url: string, init: RequestInit) => {
    }
}`,
      },
      options,
    );

    expect(result).toBe(`export class BaseAPI {
    private fetchApi = async (url: string, init?: RequestInit) => {
    }
}`);
  });

  it("updates middleware contexts to reflect signature of native fetch", () => {
    const result = applyTransform(
      transformer,
      options,
      {
        source: `export interface RequestContext {
    init: RequestInit;
}

export interface ResponseContext {
    init: RequestInit;
}

export interface ErrorContext {
    init: RequestInit;
}`,
      },
      options,
    );

    expect(result).toBe(`export interface RequestContext {
    init?: RequestInit
}

export interface ResponseContext {
    init?: RequestInit
}

export interface ErrorContext {
    init?: RequestInit
}`);
  });
});
