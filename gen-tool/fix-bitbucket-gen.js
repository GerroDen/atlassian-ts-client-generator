#!/usr/bin/env node
import glob from "fast-glob";
import { promises as fs } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

try {
  /** @type string[] */
  const files = glob.sync("generated-code/bitbucket-api/**/*.ts", {
    cwd: rootDir,
    absolute: true,
  });
  for (let file of files) {
    /** @type string */
    let content = await fs.readFile(file, { encoding: "utf8" });
    content = content.replace(
      "async streamRaw(requestParameters: StreamRequest,",
      "async _streamRaw(requestParameters: StreamRequest,",
    );
    content = content.replace(
      "await this.streamRaw(requestParameters,",
      "await this._streamRaw(requestParameters,",
    );
    if (!file.endsWith("/src/models/index.ts")) {
      content = content.replaceAll(
        /export interface (.+)Request {/g,
        "interface $1Request {",
      );
    }
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
