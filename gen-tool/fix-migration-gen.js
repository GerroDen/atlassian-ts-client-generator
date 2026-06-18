#!/usr/bin/env node
import { resolve } from "path";
import glob from "fast-glob";
import fs from "fs/promises";

const rootDir = resolve(import.meta.dirname, "..");

const [, scriptName, dir] = process.argv;
if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  const files = glob.sync(`${dir}/**/*.ts`, { absolute: true, cwd: rootDir });
  for (let file of files) {
    /** @type string */
    let content = await fs.readFile(file, { encoding: "utf8" });
    content = content.replace(
      "return new runtime.JSONApiResponse(response));",
      "return new runtime.JSONApiResponse(response);",
    );
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
